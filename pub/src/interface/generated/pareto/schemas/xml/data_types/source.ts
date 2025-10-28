import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Processing_Instruction = {
    readonly 'data': _pt.Optional_Value<string>
    readonly 'target': string
}

export type _T_XML_Content = _i_core._T_State_Group<null, 
    | readonly ['elements only', _i_core._T_List<null, _T_XML_Element>]
    | readonly ['empty', null]
    | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>]
    | readonly ['text only', _T_XML_Text_Content]
>

export type _T_XML_Document = {
    readonly 'declaration': _pt.Optional_Value<{
        readonly 'encoding': _pt.Optional_Value<string>
        readonly 'standalone': _pt.Optional_Value<boolean>
        readonly 'version': string
    }>
    readonly 'processing instructions': _i_core._T_List<null, _T_Processing_Instruction>
    readonly 'root element': _T_XML_Element
}

export type _T_XML_Element = {
    readonly 'attributes': _i_core._T_Dictionary<null, {
        readonly 'namespace': _pt.Optional_Value<string>
        readonly 'value': string
    }>
    readonly 'content': _T_XML_Content
    readonly 'name': string
    readonly 'namespace': _pt.Optional_Value<string>
    readonly 'prefix': _pt.Optional_Value<string>
    readonly 'self closing': boolean
}

export type _T_XML_Formatting_Options = _i_core._T_State_Group<null, 
    | readonly ['compact', null]
    | readonly ['custom', {
        readonly 'after attribute': _pt.Optional_Value<string>
        readonly 'after element': _pt.Optional_Value<string>
        readonly 'before attribute': _pt.Optional_Value<string>
        readonly 'before element': _pt.Optional_Value<string>
    }]
    | readonly ['pretty', {
        readonly 'indent': string
        readonly 'max line length': _pt.Optional_Value<number>
        readonly 'preserve mixed content': boolean
    }]
>

export type _T_XML_Node = _i_core._T_State_Group<null, 
    | readonly ['cdata', {
        readonly 'content': string
    }]
    | readonly ['comment', {
        readonly 'content': string
    }]
    | readonly ['element', _T_XML_Element]
    | readonly ['processing instruction', _T_Processing_Instruction]
    | readonly ['text', _T_XML_Text_Content]
>

export type _T_XML_Text_Content = {
    readonly 'escape': _i_core._T_State_Group<null, 
        | readonly ['auto', null]
        | readonly ['cdata', null]
        | readonly ['none', null]
    >
    readonly 'preserve whitespace': boolean
    readonly 'value': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Processing_Instruction = _T_Processing_Instruction

export type XML_Content = _T_XML_Content

export type XML_Document = _T_XML_Document

export type XML_Element = _T_XML_Element

export type XML_Formatting_Options = _T_XML_Formatting_Options

export type XML_Node = _T_XML_Node

export type XML_Text_Content = _T_XML_Text_Content

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Processing_Instruction {
    
    export namespace data {
        export type O = string
    }
    export type data = _pt.Optional_Value<string>
    export type target = string
}

export namespace _T_XML_Content {
    
    export namespace SG {
        
        export namespace elements_only {
            
            export namespace L {
            }
            export type L = _T_XML_Element
        }
        export type elements_only = _i_core._T_List<null, _T_XML_Element>
        
        export namespace empty {
        }
        export type empty = null
        
        export namespace mixed {
            
            export namespace L {
            }
            export type L = _T_XML_Node
        }
        export type mixed = _i_core._T_List<null, _T_XML_Node>
        
        export namespace text_only {
        }
        export type text_only = _T_XML_Text_Content
    }
    export type SG = 
        | readonly ['elements only', _i_core._T_List<null, _T_XML_Element>]
        | readonly ['empty', null]
        | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>]
        | readonly ['text only', _T_XML_Text_Content]
}

export namespace _T_XML_Document {
    
    export namespace declaration {
        
        export namespace O {
            
            export namespace encoding {
                export type O = string
            }
            export type encoding = _pt.Optional_Value<string>
            
            export namespace standalone {
                export type O = boolean
            }
            export type standalone = _pt.Optional_Value<boolean>
            export type version = string
        }
        export type O = {
            readonly 'encoding': _pt.Optional_Value<string>
            readonly 'standalone': _pt.Optional_Value<boolean>
            readonly 'version': string
        }
    }
    export type declaration = _pt.Optional_Value<{
        readonly 'encoding': _pt.Optional_Value<string>
        readonly 'standalone': _pt.Optional_Value<boolean>
        readonly 'version': string
    }>
    
    export namespace processing_instructions {
        
        export namespace L {
        }
        export type L = _T_Processing_Instruction
    }
    export type processing_instructions = _i_core._T_List<null, _T_Processing_Instruction>
    
    export namespace root_element {
    }
    export type root_element = _T_XML_Element
}

export namespace _T_XML_Element {
    
    export namespace attributes {
        
        export namespace D {
            
            export namespace namespace {
                export type O = string
            }
            export type namespace = _pt.Optional_Value<string>
            export type value = string
        }
        export type D = {
            readonly 'namespace': _pt.Optional_Value<string>
            readonly 'value': string
        }
    }
    export type attributes = _i_core._T_Dictionary<null, {
        readonly 'namespace': _pt.Optional_Value<string>
        readonly 'value': string
    }>
    
    export namespace content {
    }
    export type content = _T_XML_Content
    export type name = string
    
    export namespace namespace {
        export type O = string
    }
    export type namespace = _pt.Optional_Value<string>
    
    export namespace prefix {
        export type O = string
    }
    export type prefix = _pt.Optional_Value<string>
    export type self_closing = boolean
}

export namespace _T_XML_Formatting_Options {
    
    export namespace SG {
        export type compact = null
        
        export namespace custom {
            
            export namespace after_attribute {
                export type O = string
            }
            export type after_attribute = _pt.Optional_Value<string>
            
            export namespace after_element {
                export type O = string
            }
            export type after_element = _pt.Optional_Value<string>
            
            export namespace before_attribute {
                export type O = string
            }
            export type before_attribute = _pt.Optional_Value<string>
            
            export namespace before_element {
                export type O = string
            }
            export type before_element = _pt.Optional_Value<string>
        }
        export type custom = {
            readonly 'after attribute': _pt.Optional_Value<string>
            readonly 'after element': _pt.Optional_Value<string>
            readonly 'before attribute': _pt.Optional_Value<string>
            readonly 'before element': _pt.Optional_Value<string>
        }
        
        export namespace pretty {
            export type indent = string
            
            export namespace max_line_length {
                export type O = number
            }
            export type max_line_length = _pt.Optional_Value<number>
            export type preserve_mixed_content = boolean
        }
        export type pretty = {
            readonly 'indent': string
            readonly 'max line length': _pt.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }
    }
    export type SG = 
        | readonly ['compact', null]
        | readonly ['custom', {
            readonly 'after attribute': _pt.Optional_Value<string>
            readonly 'after element': _pt.Optional_Value<string>
            readonly 'before attribute': _pt.Optional_Value<string>
            readonly 'before element': _pt.Optional_Value<string>
        }]
        | readonly ['pretty', {
            readonly 'indent': string
            readonly 'max line length': _pt.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }]
}

export namespace _T_XML_Node {
    
    export namespace SG {
        
        export namespace cdata {
            export type content = string
        }
        export type cdata = {
            readonly 'content': string
        }
        
        export namespace comment {
            export type content = string
        }
        export type comment = {
            readonly 'content': string
        }
        
        export namespace element {
        }
        export type element = _T_XML_Element
        
        export namespace processing_instruction {
        }
        export type processing_instruction = _T_Processing_Instruction
        
        export namespace text {
        }
        export type text = _T_XML_Text_Content
    }
    export type SG = 
        | readonly ['cdata', {
            readonly 'content': string
        }]
        | readonly ['comment', {
            readonly 'content': string
        }]
        | readonly ['element', _T_XML_Element]
        | readonly ['processing instruction', _T_Processing_Instruction]
        | readonly ['text', _T_XML_Text_Content]
}

export namespace _T_XML_Text_Content {
    
    export namespace escape {
        
        export namespace SG {
            
            export namespace auto {
            }
            export type auto = null
            
            export namespace cdata {
            }
            export type cdata = null
            
            export namespace none {
            }
            export type none = null
        }
        export type SG = 
            | readonly ['auto', null]
            | readonly ['cdata', null]
            | readonly ['none', null]
    }
    export type escape = _i_core._T_State_Group<null, 
        | readonly ['auto', null]
        | readonly ['cdata', null]
        | readonly ['none', null]
    >
    export type preserve_whitespace = boolean
    export type value = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Processing_Instruction {
    
    export namespace data {
        export type O = string
    }
    export type data = _pt.Optional_Value<string>
    export type target = string
}

export namespace XML_Content {
    
    export namespace SG {
        
        export namespace elements_only {
            
            export namespace L {
            }
            export type L = _T_XML_Element
        }
        export type elements_only = _i_core._T_List<null, _T_XML_Element>
        
        export namespace empty {
        }
        export type empty = null
        
        export namespace mixed {
            
            export namespace L {
            }
            export type L = _T_XML_Node
        }
        export type mixed = _i_core._T_List<null, _T_XML_Node>
        
        export namespace text_only {
        }
        export type text_only = _T_XML_Text_Content
    }
    export type SG = 
        | readonly ['elements only', _i_core._T_List<null, _T_XML_Element>]
        | readonly ['empty', null]
        | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>]
        | readonly ['text only', _T_XML_Text_Content]
}

export namespace XML_Document {
    
    export namespace declaration {
        
        export namespace O {
            
            export namespace encoding {
                export type O = string
            }
            export type encoding = _pt.Optional_Value<string>
            
            export namespace standalone {
                export type O = boolean
            }
            export type standalone = _pt.Optional_Value<boolean>
            export type version = string
        }
        export type O = {
            readonly 'encoding': _pt.Optional_Value<string>
            readonly 'standalone': _pt.Optional_Value<boolean>
            readonly 'version': string
        }
    }
    export type declaration = _pt.Optional_Value<{
        readonly 'encoding': _pt.Optional_Value<string>
        readonly 'standalone': _pt.Optional_Value<boolean>
        readonly 'version': string
    }>
    
    export namespace processing_instructions {
        
        export namespace L {
        }
        export type L = _T_Processing_Instruction
    }
    export type processing_instructions = _i_core._T_List<null, _T_Processing_Instruction>
    
    export namespace root_element {
    }
    export type root_element = _T_XML_Element
}

export namespace XML_Element {
    
    export namespace attributes {
        
        export namespace D {
            
            export namespace namespace {
                export type O = string
            }
            export type namespace = _pt.Optional_Value<string>
            export type value = string
        }
        export type D = {
            readonly 'namespace': _pt.Optional_Value<string>
            readonly 'value': string
        }
    }
    export type attributes = _i_core._T_Dictionary<null, {
        readonly 'namespace': _pt.Optional_Value<string>
        readonly 'value': string
    }>
    
    export namespace content {
    }
    export type content = _T_XML_Content
    export type name = string
    
    export namespace namespace {
        export type O = string
    }
    export type namespace = _pt.Optional_Value<string>
    
    export namespace prefix {
        export type O = string
    }
    export type prefix = _pt.Optional_Value<string>
    export type self_closing = boolean
}

export namespace XML_Formatting_Options {
    
    export namespace SG {
        export type compact = null
        
        export namespace custom {
            
            export namespace after_attribute {
                export type O = string
            }
            export type after_attribute = _pt.Optional_Value<string>
            
            export namespace after_element {
                export type O = string
            }
            export type after_element = _pt.Optional_Value<string>
            
            export namespace before_attribute {
                export type O = string
            }
            export type before_attribute = _pt.Optional_Value<string>
            
            export namespace before_element {
                export type O = string
            }
            export type before_element = _pt.Optional_Value<string>
        }
        export type custom = {
            readonly 'after attribute': _pt.Optional_Value<string>
            readonly 'after element': _pt.Optional_Value<string>
            readonly 'before attribute': _pt.Optional_Value<string>
            readonly 'before element': _pt.Optional_Value<string>
        }
        
        export namespace pretty {
            export type indent = string
            
            export namespace max_line_length {
                export type O = number
            }
            export type max_line_length = _pt.Optional_Value<number>
            export type preserve_mixed_content = boolean
        }
        export type pretty = {
            readonly 'indent': string
            readonly 'max line length': _pt.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }
    }
    export type SG = 
        | readonly ['compact', null]
        | readonly ['custom', {
            readonly 'after attribute': _pt.Optional_Value<string>
            readonly 'after element': _pt.Optional_Value<string>
            readonly 'before attribute': _pt.Optional_Value<string>
            readonly 'before element': _pt.Optional_Value<string>
        }]
        | readonly ['pretty', {
            readonly 'indent': string
            readonly 'max line length': _pt.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }]
}

export namespace XML_Node {
    
    export namespace SG {
        
        export namespace cdata {
            export type content = string
        }
        export type cdata = {
            readonly 'content': string
        }
        
        export namespace comment {
            export type content = string
        }
        export type comment = {
            readonly 'content': string
        }
        
        export namespace element {
        }
        export type element = _T_XML_Element
        
        export namespace processing_instruction {
        }
        export type processing_instruction = _T_Processing_Instruction
        
        export namespace text {
        }
        export type text = _T_XML_Text_Content
    }
    export type SG = 
        | readonly ['cdata', {
            readonly 'content': string
        }]
        | readonly ['comment', {
            readonly 'content': string
        }]
        | readonly ['element', _T_XML_Element]
        | readonly ['processing instruction', _T_Processing_Instruction]
        | readonly ['text', _T_XML_Text_Content]
}

export namespace XML_Text_Content {
    
    export namespace escape {
        
        export namespace SG {
            
            export namespace auto {
            }
            export type auto = null
            
            export namespace cdata {
            }
            export type cdata = null
            
            export namespace none {
            }
            export type none = null
        }
        export type SG = 
            | readonly ['auto', null]
            | readonly ['cdata', null]
            | readonly ['none', null]
    }
    export type escape = _i_core._T_State_Group<null, 
        | readonly ['auto', null]
        | readonly ['cdata', null]
        | readonly ['none', null]
    >
    export type preserve_whitespace = boolean
    export type value = string
}
