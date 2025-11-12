import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/xml/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/xml/data_types/target"


export const XML_Text_Content: _i_signatures._T_XML_Text_Content = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'value': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "value",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'preserve whitespace': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "preserve whitespace",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'escape': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "escape",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'auto': ($): _i_out._T_XML_Text_Content.escape.SG => ['auto', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => null,
                            }
                        )],
                        'cdata': ($): _i_out._T_XML_Text_Content.escape.SG => ['cdata', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => null,
                            }
                        )],
                        'none': ($): _i_out._T_XML_Text_Content.escape.SG => ['none', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => null,
                            }
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Processing_Instruction: _i_signatures._T_Processing_Instruction = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'target': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "target",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'data': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "data",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
        }),
    }
)
export const XML_Node: _i_signatures._T_XML_Node = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'element': ($): _i_out._T_XML_Node.SG => ['element', XML_Element(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'text': ($): _i_out._T_XML_Node.SG => ['text', XML_Text_Content(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'comment': ($): _i_out._T_XML_Node.SG => ['comment', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'content': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "content",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'cdata': ($): _i_out._T_XML_Node.SG => ['cdata', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'content': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "content",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'processing instruction': ($): _i_out._T_XML_Node.SG => ['processing instruction', Processing_Instruction(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const XML_Content: _i_signatures._T_XML_Content = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'empty': ($): _i_out._T_XML_Content.SG => ['empty', _i_generic.process_group(
                $,
                {
                    'properties': ($) => null,
                }
            )],
            'text only': ($): _i_out._T_XML_Content.SG => ['text only', XML_Text_Content(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'elements only': ($): _i_out._T_XML_Content.SG => ['elements only', _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => XML_Element(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'mixed': ($): _i_out._T_XML_Content.SG => ['mixed', _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => XML_Node(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
        }),
    }
)
export const XML_Element: _i_signatures._T_XML_Element = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'name': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "name",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'namespace': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "namespace",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'prefix': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "prefix",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'attributes': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "attributes",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'value': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "value",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'namespace': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "namespace",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_text(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => XML_Content(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'self closing': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "self closing",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
        }),
    }
)
export const XML_Document: _i_signatures._T_XML_Document = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'declaration': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "declaration",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'version': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "version",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'encoding': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "encoding",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_text(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                                'standalone': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "standalone",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_boolean(
                                            $,
                                            {
                                                'deserializer': $p['value deserializers']['boolean'],
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'root element': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "root element",
                }
            ), ($) => XML_Element(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'processing instructions': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "processing instructions",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Processing_Instruction(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
        }),
    }
)
export const XML_Formatting_Options: _i_signatures._T_XML_Formatting_Options = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'compact': ($): _i_out._T_XML_Formatting_Options.SG => ['compact', _i_generic.process_nothing(
                $,
                null
            )],
            'pretty': ($): _i_out._T_XML_Formatting_Options.SG => ['pretty', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'indent': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "indent",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                        'max line length': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "max line length",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['default number'],
                                    }
                                ),
                            }
                        )),
                        'preserve mixed content': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "preserve mixed content",
                            }
                        ), ($) => _i_generic.process_boolean(
                            $,
                            {
                                'deserializer': $p['value deserializers']['boolean'],
                            }
                        )),
                    }),
                }
            )],
            'custom': ($): _i_out._T_XML_Formatting_Options.SG => ['custom', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'before element': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "before element",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'after element': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "after element",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'before attribute': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "before attribute",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'after attribute': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "after attribute",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                    }),
                }
            )],
        }),
    }
)
