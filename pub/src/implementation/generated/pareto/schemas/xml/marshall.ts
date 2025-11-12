import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/xml/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const XML_Text_Content: _i_signatures._T_XML_Text_Content = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'value': _pa.cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'preserve whitespace': _pa.cc($['preserve whitespace'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'escape': _pa.cc($['escape'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'auto': return _pa.ss($, ($) => ({
                'state': "auto",
                'value': ['verbose group', _pa.dictionary_literal({
                })],
            }))
            case 'cdata': return _pa.ss($, ($) => ({
                'state': "cdata",
                'value': ['verbose group', _pa.dictionary_literal({
                })],
            }))
            case 'none': return _pa.ss($, ($) => ({
                'state': "none",
                'value': ['verbose group', _pa.dictionary_literal({
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Processing_Instruction: _i_signatures._T_Processing_Instruction = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'target': _pa.cc($['target'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'data': _pa.cc($['data'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
})]
export const XML_Node: _i_signatures._T_XML_Node = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'element': return _pa.ss($, ($) => ({
            'state': "element",
            'value': XML_Element(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'text': return _pa.ss($, ($) => ({
            'state': "text",
            'value': XML_Text_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'comment': return _pa.ss($, ($) => ({
            'state': "comment",
            'value': ['verbose group', _pa.dictionary_literal({
                'content': _pa.cc($['content'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'cdata': return _pa.ss($, ($) => ({
            'state': "cdata",
            'value': ['verbose group', _pa.dictionary_literal({
                'content': _pa.cc($['content'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'processing instruction': return _pa.ss($, ($) => ({
            'state': "processing instruction",
            'value': Processing_Instruction(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const XML_Content: _i_signatures._T_XML_Content = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'empty': return _pa.ss($, ($) => ({
            'state': "empty",
            'value': ['verbose group', _pa.dictionary_literal({
            })],
        }))
        case 'text only': return _pa.ss($, ($) => ({
            'state': "text only",
            'value': XML_Text_Content(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'elements only': return _pa.ss($, ($) => ({
            'state': "elements only",
            'value': ['list', $.map(($) => XML_Element(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'mixed': return _pa.ss($, ($) => ({
            'state': "mixed",
            'value': ['list', $.map(($) => XML_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        default: return _pa.au($[0])
    }
})]
export const XML_Element: _i_signatures._T_XML_Element = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'name': _pa.cc($['name'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'namespace': _pa.cc($['namespace'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
    'prefix': _pa.cc($['prefix'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
    'attributes': _pa.cc($['attributes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'value': _pa.cc($['value'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'namespace': _pa.cc($['namespace'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
    })])]),
    'content': _pa.cc($['content'], ($) => XML_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'self closing': _pa.cc($['self closing'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const XML_Document: _i_signatures._T_XML_Document = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'declaration': _pa.cc($['declaration'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
            'version': _pa.cc($['version'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'encoding': _pa.cc($['encoding'], ($) => ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]],
                () => ['not set', null]
            )]),
            'standalone': _pa.cc($['standalone'], ($) => ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]],
                () => ['not set', null]
            )]),
        })]],
        () => ['not set', null]
    )]),
    'root element': _pa.cc($['root element'], ($) => XML_Element(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'processing instructions': _pa.cc($['processing instructions'], ($) => ['list', $.map(($) => Processing_Instruction(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
})]
export const XML_Formatting_Options: _i_signatures._T_XML_Formatting_Options = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'compact': return _pa.ss($, ($) => ({
            'state': "compact",
            'value': ['nothing', null],
        }))
        case 'pretty': return _pa.ss($, ($) => ({
            'state': "pretty",
            'value': ['verbose group', _pa.dictionary_literal({
                'indent': _pa.cc($['indent'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'max line length': _pa.cc($['max line length'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'preserve mixed content': _pa.cc($['preserve mixed content'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
            })],
        }))
        case 'custom': return _pa.ss($, ($) => ({
            'state': "custom",
            'value': ['verbose group', _pa.dictionary_literal({
                'before element': _pa.cc($['before element'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]],
                    () => ['not set', null]
                )]),
                'after element': _pa.cc($['after element'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]],
                    () => ['not set', null]
                )]),
                'before attribute': _pa.cc($['before attribute'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]],
                    () => ['not set', null]
                )]),
                'after attribute': _pa.cc($['after attribute'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]],
                    () => ['not set', null]
                )]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
