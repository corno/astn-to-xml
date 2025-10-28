import * as _pt from 'exupery-core-types';
import * as _i_core from "../../../core/resolved";
export type _T_Processing_Instruction = {
    readonly 'data': _pt.Optional_Value<string>;
    readonly 'target': string;
};
export type _T_XML_Content = _i_core._T_State_Group<null, readonly ['elements only', _i_core._T_List<null, _T_XML_Element>] | readonly ['empty', null] | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>] | readonly ['text only', _T_XML_Text_Content]>;
export type _T_XML_Document = {
    readonly 'declaration': _pt.Optional_Value<{
        readonly 'encoding': _pt.Optional_Value<string>;
        readonly 'standalone': _pt.Optional_Value<boolean>;
        readonly 'version': string;
    }>;
    readonly 'processing instructions': _i_core._T_List<null, _T_Processing_Instruction>;
    readonly 'root element': _T_XML_Element;
};
export type _T_XML_Element = {
    readonly 'attributes': _i_core._T_Dictionary<null, {
        readonly 'namespace': _pt.Optional_Value<string>;
        readonly 'value': string;
    }>;
    readonly 'content': _T_XML_Content;
    readonly 'name': string;
    readonly 'namespace': _pt.Optional_Value<string>;
    readonly 'prefix': _pt.Optional_Value<string>;
    readonly 'self closing': boolean;
};
export type _T_XML_Formatting_Options = _i_core._T_State_Group<null, readonly ['compact', null] | readonly [
    'custom',
    {
        readonly 'after attribute': _pt.Optional_Value<string>;
        readonly 'after element': _pt.Optional_Value<string>;
        readonly 'before attribute': _pt.Optional_Value<string>;
        readonly 'before element': _pt.Optional_Value<string>;
    }
] | readonly [
    'pretty',
    {
        readonly 'indent': string;
        readonly 'max line length': _pt.Optional_Value<number>;
        readonly 'preserve mixed content': boolean;
    }
]>;
export type _T_XML_Node = _i_core._T_State_Group<null, readonly [
    'cdata',
    {
        readonly 'content': string;
    }
] | readonly [
    'comment',
    {
        readonly 'content': string;
    }
] | readonly ['element', _T_XML_Element] | readonly ['processing instruction', _T_Processing_Instruction] | readonly ['text', _T_XML_Text_Content]>;
export type _T_XML_Text_Content = {
    readonly 'escape': _i_core._T_State_Group<null, readonly ['auto', null] | readonly ['cdata', null] | readonly ['none', null]>;
    readonly 'preserve whitespace': boolean;
    readonly 'value': string;
};
export type Processing_Instruction = _T_Processing_Instruction;
export type XML_Content = _T_XML_Content;
export type XML_Document = _T_XML_Document;
export type XML_Element = _T_XML_Element;
export type XML_Formatting_Options = _T_XML_Formatting_Options;
export type XML_Node = _T_XML_Node;
export type XML_Text_Content = _T_XML_Text_Content;
export declare namespace _T_Processing_Instruction {
    namespace data {
        type O = string;
    }
    type data = _pt.Optional_Value<string>;
    type target = string;
}
export declare namespace _T_XML_Content {
    namespace SG {
        namespace elements_only {
            namespace L {
            }
            type L = _T_XML_Element;
        }
        type elements_only = _i_core._T_List<null, _T_XML_Element>;
        namespace empty {
        }
        type empty = null;
        namespace mixed {
            namespace L {
            }
            type L = _T_XML_Node;
        }
        type mixed = _i_core._T_List<null, _T_XML_Node>;
        namespace text_only {
        }
        type text_only = _T_XML_Text_Content;
    }
    type SG = readonly ['elements only', _i_core._T_List<null, _T_XML_Element>] | readonly ['empty', null] | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>] | readonly ['text only', _T_XML_Text_Content];
}
export declare namespace _T_XML_Document {
    namespace declaration {
        namespace O {
            namespace encoding {
                type O = string;
            }
            type encoding = _pt.Optional_Value<string>;
            namespace standalone {
                type O = boolean;
            }
            type standalone = _pt.Optional_Value<boolean>;
            type version = string;
        }
        type O = {
            readonly 'encoding': _pt.Optional_Value<string>;
            readonly 'standalone': _pt.Optional_Value<boolean>;
            readonly 'version': string;
        };
    }
    type declaration = _pt.Optional_Value<{
        readonly 'encoding': _pt.Optional_Value<string>;
        readonly 'standalone': _pt.Optional_Value<boolean>;
        readonly 'version': string;
    }>;
    namespace processing_instructions {
        namespace L {
        }
        type L = _T_Processing_Instruction;
    }
    type processing_instructions = _i_core._T_List<null, _T_Processing_Instruction>;
    namespace root_element {
    }
    type root_element = _T_XML_Element;
}
export declare namespace _T_XML_Element {
    namespace attributes {
        namespace D {
            namespace namespace {
                type O = string;
            }
            type namespace = _pt.Optional_Value<string>;
            type value = string;
        }
        type D = {
            readonly 'namespace': _pt.Optional_Value<string>;
            readonly 'value': string;
        };
    }
    type attributes = _i_core._T_Dictionary<null, {
        readonly 'namespace': _pt.Optional_Value<string>;
        readonly 'value': string;
    }>;
    namespace content {
    }
    type content = _T_XML_Content;
    type name = string;
    namespace namespace {
        type O = string;
    }
    type namespace = _pt.Optional_Value<string>;
    namespace prefix {
        type O = string;
    }
    type prefix = _pt.Optional_Value<string>;
    type self_closing = boolean;
}
export declare namespace _T_XML_Formatting_Options {
    namespace SG {
        type compact = null;
        namespace custom {
            namespace after_attribute {
                type O = string;
            }
            type after_attribute = _pt.Optional_Value<string>;
            namespace after_element {
                type O = string;
            }
            type after_element = _pt.Optional_Value<string>;
            namespace before_attribute {
                type O = string;
            }
            type before_attribute = _pt.Optional_Value<string>;
            namespace before_element {
                type O = string;
            }
            type before_element = _pt.Optional_Value<string>;
        }
        type custom = {
            readonly 'after attribute': _pt.Optional_Value<string>;
            readonly 'after element': _pt.Optional_Value<string>;
            readonly 'before attribute': _pt.Optional_Value<string>;
            readonly 'before element': _pt.Optional_Value<string>;
        };
        namespace pretty {
            type indent = string;
            namespace max_line_length {
                type O = number;
            }
            type max_line_length = _pt.Optional_Value<number>;
            type preserve_mixed_content = boolean;
        }
        type pretty = {
            readonly 'indent': string;
            readonly 'max line length': _pt.Optional_Value<number>;
            readonly 'preserve mixed content': boolean;
        };
    }
    type SG = readonly ['compact', null] | readonly [
        'custom',
        {
            readonly 'after attribute': _pt.Optional_Value<string>;
            readonly 'after element': _pt.Optional_Value<string>;
            readonly 'before attribute': _pt.Optional_Value<string>;
            readonly 'before element': _pt.Optional_Value<string>;
        }
    ] | readonly [
        'pretty',
        {
            readonly 'indent': string;
            readonly 'max line length': _pt.Optional_Value<number>;
            readonly 'preserve mixed content': boolean;
        }
    ];
}
export declare namespace _T_XML_Node {
    namespace SG {
        namespace cdata {
            type content = string;
        }
        type cdata = {
            readonly 'content': string;
        };
        namespace comment {
            type content = string;
        }
        type comment = {
            readonly 'content': string;
        };
        namespace element {
        }
        type element = _T_XML_Element;
        namespace processing_instruction {
        }
        type processing_instruction = _T_Processing_Instruction;
        namespace text {
        }
        type text = _T_XML_Text_Content;
    }
    type SG = readonly [
        'cdata',
        {
            readonly 'content': string;
        }
    ] | readonly [
        'comment',
        {
            readonly 'content': string;
        }
    ] | readonly ['element', _T_XML_Element] | readonly ['processing instruction', _T_Processing_Instruction] | readonly ['text', _T_XML_Text_Content];
}
export declare namespace _T_XML_Text_Content {
    namespace escape {
        namespace SG {
            namespace auto {
            }
            type auto = null;
            namespace cdata {
            }
            type cdata = null;
            namespace none {
            }
            type none = null;
        }
        type SG = readonly ['auto', null] | readonly ['cdata', null] | readonly ['none', null];
    }
    type escape = _i_core._T_State_Group<null, readonly ['auto', null] | readonly ['cdata', null] | readonly ['none', null]>;
    type preserve_whitespace = boolean;
    type value = string;
}
export declare namespace Processing_Instruction {
    namespace data {
        type O = string;
    }
    type data = _pt.Optional_Value<string>;
    type target = string;
}
export declare namespace XML_Content {
    namespace SG {
        namespace elements_only {
            namespace L {
            }
            type L = _T_XML_Element;
        }
        type elements_only = _i_core._T_List<null, _T_XML_Element>;
        namespace empty {
        }
        type empty = null;
        namespace mixed {
            namespace L {
            }
            type L = _T_XML_Node;
        }
        type mixed = _i_core._T_List<null, _T_XML_Node>;
        namespace text_only {
        }
        type text_only = _T_XML_Text_Content;
    }
    type SG = readonly ['elements only', _i_core._T_List<null, _T_XML_Element>] | readonly ['empty', null] | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>] | readonly ['text only', _T_XML_Text_Content];
}
export declare namespace XML_Document {
    namespace declaration {
        namespace O {
            namespace encoding {
                type O = string;
            }
            type encoding = _pt.Optional_Value<string>;
            namespace standalone {
                type O = boolean;
            }
            type standalone = _pt.Optional_Value<boolean>;
            type version = string;
        }
        type O = {
            readonly 'encoding': _pt.Optional_Value<string>;
            readonly 'standalone': _pt.Optional_Value<boolean>;
            readonly 'version': string;
        };
    }
    type declaration = _pt.Optional_Value<{
        readonly 'encoding': _pt.Optional_Value<string>;
        readonly 'standalone': _pt.Optional_Value<boolean>;
        readonly 'version': string;
    }>;
    namespace processing_instructions {
        namespace L {
        }
        type L = _T_Processing_Instruction;
    }
    type processing_instructions = _i_core._T_List<null, _T_Processing_Instruction>;
    namespace root_element {
    }
    type root_element = _T_XML_Element;
}
export declare namespace XML_Element {
    namespace attributes {
        namespace D {
            namespace namespace {
                type O = string;
            }
            type namespace = _pt.Optional_Value<string>;
            type value = string;
        }
        type D = {
            readonly 'namespace': _pt.Optional_Value<string>;
            readonly 'value': string;
        };
    }
    type attributes = _i_core._T_Dictionary<null, {
        readonly 'namespace': _pt.Optional_Value<string>;
        readonly 'value': string;
    }>;
    namespace content {
    }
    type content = _T_XML_Content;
    type name = string;
    namespace namespace {
        type O = string;
    }
    type namespace = _pt.Optional_Value<string>;
    namespace prefix {
        type O = string;
    }
    type prefix = _pt.Optional_Value<string>;
    type self_closing = boolean;
}
export declare namespace XML_Formatting_Options {
    namespace SG {
        type compact = null;
        namespace custom {
            namespace after_attribute {
                type O = string;
            }
            type after_attribute = _pt.Optional_Value<string>;
            namespace after_element {
                type O = string;
            }
            type after_element = _pt.Optional_Value<string>;
            namespace before_attribute {
                type O = string;
            }
            type before_attribute = _pt.Optional_Value<string>;
            namespace before_element {
                type O = string;
            }
            type before_element = _pt.Optional_Value<string>;
        }
        type custom = {
            readonly 'after attribute': _pt.Optional_Value<string>;
            readonly 'after element': _pt.Optional_Value<string>;
            readonly 'before attribute': _pt.Optional_Value<string>;
            readonly 'before element': _pt.Optional_Value<string>;
        };
        namespace pretty {
            type indent = string;
            namespace max_line_length {
                type O = number;
            }
            type max_line_length = _pt.Optional_Value<number>;
            type preserve_mixed_content = boolean;
        }
        type pretty = {
            readonly 'indent': string;
            readonly 'max line length': _pt.Optional_Value<number>;
            readonly 'preserve mixed content': boolean;
        };
    }
    type SG = readonly ['compact', null] | readonly [
        'custom',
        {
            readonly 'after attribute': _pt.Optional_Value<string>;
            readonly 'after element': _pt.Optional_Value<string>;
            readonly 'before attribute': _pt.Optional_Value<string>;
            readonly 'before element': _pt.Optional_Value<string>;
        }
    ] | readonly [
        'pretty',
        {
            readonly 'indent': string;
            readonly 'max line length': _pt.Optional_Value<number>;
            readonly 'preserve mixed content': boolean;
        }
    ];
}
export declare namespace XML_Node {
    namespace SG {
        namespace cdata {
            type content = string;
        }
        type cdata = {
            readonly 'content': string;
        };
        namespace comment {
            type content = string;
        }
        type comment = {
            readonly 'content': string;
        };
        namespace element {
        }
        type element = _T_XML_Element;
        namespace processing_instruction {
        }
        type processing_instruction = _T_Processing_Instruction;
        namespace text {
        }
        type text = _T_XML_Text_Content;
    }
    type SG = readonly [
        'cdata',
        {
            readonly 'content': string;
        }
    ] | readonly [
        'comment',
        {
            readonly 'content': string;
        }
    ] | readonly ['element', _T_XML_Element] | readonly ['processing instruction', _T_Processing_Instruction] | readonly ['text', _T_XML_Text_Content];
}
export declare namespace XML_Text_Content {
    namespace escape {
        namespace SG {
            namespace auto {
            }
            type auto = null;
            namespace cdata {
            }
            type cdata = null;
            namespace none {
            }
            type none = null;
        }
        type SG = readonly ['auto', null] | readonly ['cdata', null] | readonly ['none', null];
    }
    type escape = _i_core._T_State_Group<null, readonly ['auto', null] | readonly ['cdata', null] | readonly ['none', null]>;
    type preserve_whitespace = boolean;
    type value = string;
}
