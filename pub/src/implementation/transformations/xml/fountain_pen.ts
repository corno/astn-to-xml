import * as pa from 'exupery-core-alg'
import * as pd from 'exupery-core-dev'

import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"
import * as d_in from "../../../interface/generated/pareto/schemas/xml/data_types/source"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/operations/impure/dictionary/to_list_sorted_by_code_point"
import { Signature } from "../../../interface/algorithms/transformations/xml/fountain_pen"


// XML Schema Type transformations - each type from the schema needs a function
export const XML_Document = (
    $: d_in.XML_Document,
    $p: {
        'formatting': d_in.XML_Formatting_Options
    }
): d_out.Group => {
    // For now, let's create a simple block content and return it as Group_Part converted to Block
    const content = sh.g.sub([
        // XML Declaration
        $.declaration.transform(
            (decl) => sh.g.nested_block([
                sh.b.snippet("<?xml version=\""),
                sh.b.snippet(escapeXmlAttribute(decl.version)),
                sh.b.snippet("\""),
                decl.encoding.transform(
                    (enc) => sh.b.sub([
                        sh.b.snippet(" encoding=\""),
                        sh.b.snippet(escapeXmlAttribute(enc)),
                        sh.b.snippet("\"")
                    ]),
                    () => sh.b.nothing()
                ),
                decl.standalone.transform(
                    (standalone) => sh.b.sub([
                        sh.b.snippet(" standalone=\""),
                        sh.b.snippet(standalone ? "yes" : "no"),
                        sh.b.snippet("\"")
                    ]),
                    () => sh.b.nothing()
                ),
                sh.b.snippet("?>")
            ]),
            () => sh.g.nothing()
        ),
        
        // Processing Instructions (before root)
        sh.g.sub($['processing instructions'].map((pi) => 
            Processing_Instruction(pi, $p)
        )),
        
        // Root Element
        XML_Element($['root element'], $p)
    ])
    
    // Convert Group_Part to Block (temporary approach)
    return content as any
}

export const XML_Element = (
    $: d_in.XML_Element,
    $p: {
        'formatting': d_in.XML_Formatting_Options
    }
): d_out.Group_Part => {
    const elementName = $.prefix.transform(
        (prefix) => prefix + ":" + $.name,
        () => $.name
    )
    
    const hasContent = pa.cc($.content, (content) => {
        switch (content[0]) {
            case 'empty': return pa.ss(content, () => false)
            case 'text only': return pa.ss(content, () => true)
            case 'elements only': return pa.ss(content, (elements) => Object.keys(elements).length > 0)
            case 'mixed': return pa.ss(content, (nodes) => Object.keys(nodes).length > 0)
            default: return pa.au(content[0])
        }
    })

    return pa.cc($p.formatting, (formatting) => {
        switch (formatting[0]) {
            case 'compact': return pa.ss(formatting, () => 
                $['self closing'] && !hasContent
                    ? sh.g.nested_block([
                        sh.b.snippet("<"),
                        sh.b.snippet(elementName),
                        XML_Attributes($.attributes),
                        sh.b.snippet("/>")
                    ])
                    : sh.g.sub([
                        sh.g.nested_block([
                            sh.b.snippet("<"),
                            sh.b.snippet(elementName),
                            XML_Attributes($.attributes),
                            sh.b.snippet(">")
                        ]),
                        XML_Content($.content, $p),
                        sh.g.nested_block([
                            sh.b.snippet("</"),
                            sh.b.snippet(elementName),
                            sh.b.snippet(">")
                        ])
                    ])
            )
            case 'pretty': return pa.ss(formatting, (pretty) => 
                $['self closing'] && !hasContent
                    ? sh.g.nested_block([
                        sh.b.snippet("<"),
                        sh.b.snippet(elementName),
                        XML_Attributes($.attributes),
                        sh.b.snippet(" />")
                    ])
                    : sh.g.sub([
                        sh.g.nested_block([
                            sh.b.snippet("<"),
                            sh.b.snippet(elementName),
                            XML_Attributes($.attributes),
                            sh.b.snippet(">")
                        ]),
                        sh.g.sub([
                            XML_Content($.content, $p)
                        ]),
                        sh.g.nested_block([
                            sh.b.snippet("</"),
                            sh.b.snippet(elementName),
                            sh.b.snippet(">")
                        ])
                    ])
            )
            case 'custom': return pa.ss(formatting, (custom) => 
                $['self closing'] && !hasContent
                    ? sh.g.nested_block([
                        custom['before element'].transform(
                            (before) => sh.b.snippet(before),
                            () => sh.b.nothing()
                        ),
                        sh.b.snippet("<"),
                        sh.b.snippet(elementName),
                        XML_Attributes($.attributes),
                        sh.b.snippet("/>"),
                        custom['after element'].transform(
                            (after) => sh.b.snippet(after),
                            () => sh.b.nothing()
                        )
                    ])
                    : sh.g.sub([
                        sh.g.nested_block([
                            custom['before element'].transform(
                                (before) => sh.b.snippet(before),
                                () => sh.b.nothing()
                            ),
                            sh.b.snippet("<"),
                            sh.b.snippet(elementName),
                            XML_Attributes($.attributes),
                            sh.b.snippet(">")
                        ]),
                        XML_Content($.content, $p),
                        sh.g.nested_block([
                            sh.b.snippet("</"),
                            sh.b.snippet(elementName),
                            sh.b.snippet(">"),
                            custom['after element'].transform(
                                (after) => sh.b.snippet(after),
                                () => sh.b.nothing()
                            )
                        ])
                    ])
            )
            default: return pa.au(formatting[0])
        }
    })
}

export const XML_Attributes = (
    attributes: d_in._T_XML_Element['attributes']
): d_out.Block_Part => {
    return sh.b.sub(
        op_dictionary_to_list(attributes).map(($) => sh.b.sub([
            sh.b.snippet(" "),
            sh.b.snippet($.key),
            sh.b.snippet("=\""),
            sh.b.snippet(escapeXmlAttribute($.value.value)),
            sh.b.snippet("\"")
        ]))
    )
}

export const XML_Content = (
    $: d_in.XML_Content,
    $p: {
        'formatting': d_in.XML_Formatting_Options
    }
): d_out.Group_Part => pa.cc($, (content) => {
    switch (content[0]) {
        case 'empty': return pa.ss(content, () => sh.g.nothing())
        case 'text only': return pa.ss(content, (textContent) => 
            XML_Text_Content(textContent, $p)
        )
        case 'elements only': return pa.ss(content, (elements) => 
            sh.g.sub(elements.map((element) => XML_Element(element, $p)))
        )
        case 'mixed': return pa.ss(content, (nodes) => 
            sh.g.sub(nodes.map((node) => XML_Node(node, $p)))
        )
        default: return pa.au(content[0])
    }
})

export const XML_Text_Content = (
    $: d_in.XML_Text_Content,
    $p: {
        'formatting': d_in.XML_Formatting_Options
    }
): d_out.Group_Part => {
    return pa.cc($.escape, (escapeType) => {
        switch (escapeType[0]) {
            case 'auto': return pa.ss(escapeType, () => 
                sh.g.nested_block([ sh.b.snippet(escapeXmlText($.value))])
            )
            case 'cdata': return pa.ss(escapeType, () => 
                sh.g.nested_block([
                    sh.b.snippet("<![CDATA["),
                    sh.b.snippet($.value),
                    sh.b.snippet("]]>")
                ])
            )
            case 'none': return pa.ss(escapeType, () => 
                sh.g.nested_block([ sh.b.snippet($.value)])
            )
            default: return pa.au(escapeType[0])
        }
    })
}

export const XML_Node = (
    $: d_in.XML_Node,
    $p: {
        'formatting': d_in.XML_Formatting_Options
    }
): d_out.Group_Part => pa.cc($, (node) => {
    switch (node[0]) {
        case 'element': return pa.ss(node, (element) => XML_Element(element, $p))
        case 'text': return pa.ss(node, (text) => XML_Text_Content(text, $p))
        case 'comment': return pa.ss(node, (comment) => 
            sh.g.nested_block([
                sh.b.snippet("<!-- "),
                sh.b.snippet(comment.content),
                sh.b.snippet(" -->")
            ])
        )
        case 'cdata': return pa.ss(node, (cdata) => 
            sh.g.nested_block([
                sh.b.snippet("<![CDATA["),
                sh.b.snippet(cdata.content),
                sh.b.snippet("]]>")
            ])
        )
        case 'processing instruction': return pa.ss(node, (pi) => 
            Processing_Instruction(pi, $p)
        )
        default: return pa.au(node[0])
    }
})

export const Processing_Instruction = (
    $: d_in.Processing_Instruction,
    $p: {
        'formatting': d_in.XML_Formatting_Options
    }
): d_out.Group_Part => {
    return sh.g.nested_block([
        sh.b.snippet("<?"),
        sh.b.snippet($.target),
        $.data.transform(
            (data) => sh.b.sub([
                sh.b.snippet(" "),
                sh.b.snippet(data)
            ]),
            () => sh.b.nothing()
        ),
        sh.b.snippet("?>")
    ])
}

export const XML_Formatting_Options = (
    $: d_in.XML_Formatting_Options,
    $p: {
        // no additional formatting params needed for formatting options itself
    }
): d_out.Group_Part => {
    return pa.cc($, (formatting) => {
        switch (formatting[0]) {
            case 'compact': return pa.ss(formatting, () => 
                sh.g.nested_block([ sh.b.snippet("compact formatting")])
            )
            case 'pretty': return pa.ss(formatting, (pretty) => 
                sh.g.nested_block([ sh.b.snippet("pretty formatting with indent: " + pretty.indent)])
            )
            case 'custom': return pa.ss(formatting, (custom) => 
                sh.g.nested_block([ sh.b.snippet("custom formatting")])
            )
            default: return pa.au(formatting[0])
        }
    })
}

// XML escaping helper functions
const escapeXmlText = (text: string): string => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

const escapeXmlAttribute = (text: string): string => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}
