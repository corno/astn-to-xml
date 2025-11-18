import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_XML_Text_Content = {
    readonly 'value': string
    readonly 'preserve whitespace': boolean
    readonly 'escape': _i_core._T_State_Group<null, 
        | readonly ['auto', null]
        | readonly ['cdata', null]
        | readonly ['none', null]
    >
}

export type _T_Processing_Instruction = {
    readonly 'target': string
    readonly 'data': _et.Optional_Value<string>
}

export type _T_XML_Node = _i_core._T_State_Group<null, 
    | readonly ['element', _T_XML_Element]
    | readonly ['text', _T_XML_Text_Content]
    | readonly ['comment', {
        readonly 'content': string
    }]
    | readonly ['cdata', {
        readonly 'content': string
    }]
    | readonly ['processing instruction', _T_Processing_Instruction]
>

export type _T_XML_Content = _i_core._T_State_Group<null, 
    | readonly ['empty', null]
    | readonly ['text only', _T_XML_Text_Content]
    | readonly ['elements only', _i_core._T_List<null, _T_XML_Element>]
    | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>]
>

export type _T_XML_Element = {
    readonly 'name': string
    readonly 'namespace': _et.Optional_Value<string>
    readonly 'prefix': _et.Optional_Value<string>
    readonly 'attributes': _i_core._T_Dictionary<null, {
        readonly 'value': string
        readonly 'namespace': _et.Optional_Value<string>
    }>
    readonly 'content': _T_XML_Content
    readonly 'self closing': boolean
}

export type _T_XML_Document = {
    readonly 'declaration': _et.Optional_Value<{
        readonly 'version': string
        readonly 'encoding': _et.Optional_Value<string>
        readonly 'standalone': _et.Optional_Value<boolean>
    }>
    readonly 'root element': _T_XML_Element
    readonly 'processing instructions': _i_core._T_List<null, _T_Processing_Instruction>
}

export type _T_XML_Formatting_Options = _i_core._T_State_Group<null, 
    | readonly ['compact', null]
    | readonly ['pretty', {
        readonly 'indent': string
        readonly 'max line length': _et.Optional_Value<number>
        readonly 'preserve mixed content': boolean
    }]
    | readonly ['custom', {
        readonly 'before element': _et.Optional_Value<string>
        readonly 'after element': _et.Optional_Value<string>
        readonly 'before attribute': _et.Optional_Value<string>
        readonly 'after attribute': _et.Optional_Value<string>
    }]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type XML_Text_Content = _T_XML_Text_Content

export type Processing_Instruction = _T_Processing_Instruction

export type XML_Node = _T_XML_Node

export type XML_Content = _T_XML_Content

export type XML_Element = _T_XML_Element

export type XML_Document = _T_XML_Document

export type XML_Formatting_Options = _T_XML_Formatting_Options

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_XML_Text_Content {
    export type value = string
    export type preserve_whitespace = boolean
    
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
}

export namespace _T_Processing_Instruction {
    export type target = string
    
    export namespace data {
        export type O = string
    }
    export type data = _et.Optional_Value<string>
}

export namespace _T_XML_Node {
    
    export namespace SG {
        
        export namespace element {
        }
        export type element = _T_XML_Element
        
        export namespace text {
        }
        export type text = _T_XML_Text_Content
        
        export namespace comment {
            export type content = string
        }
        export type comment = {
            readonly 'content': string
        }
        
        export namespace cdata {
            export type content = string
        }
        export type cdata = {
            readonly 'content': string
        }
        
        export namespace processing_instruction {
        }
        export type processing_instruction = _T_Processing_Instruction
    }
    export type SG = 
        | readonly ['element', _T_XML_Element]
        | readonly ['text', _T_XML_Text_Content]
        | readonly ['comment', {
            readonly 'content': string
        }]
        | readonly ['cdata', {
            readonly 'content': string
        }]
        | readonly ['processing instruction', _T_Processing_Instruction]
}

export namespace _T_XML_Content {
    
    export namespace SG {
        
        export namespace empty {
        }
        export type empty = null
        
        export namespace text_only {
        }
        export type text_only = _T_XML_Text_Content
        
        export namespace elements_only {
            
            export namespace L {
            }
            export type L = _T_XML_Element
        }
        export type elements_only = _i_core._T_List<null, _T_XML_Element>
        
        export namespace mixed {
            
            export namespace L {
            }
            export type L = _T_XML_Node
        }
        export type mixed = _i_core._T_List<null, _T_XML_Node>
    }
    export type SG = 
        | readonly ['empty', null]
        | readonly ['text only', _T_XML_Text_Content]
        | readonly ['elements only', _i_core._T_List<null, _T_XML_Element>]
        | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>]
}

export namespace _T_XML_Element {
    export type name = string
    
    export namespace namespace {
        export type O = string
    }
    export type namespace = _et.Optional_Value<string>
    
    export namespace prefix {
        export type O = string
    }
    export type prefix = _et.Optional_Value<string>
    
    export namespace attributes {
        
        export namespace D {
            export type value = string
            
            export namespace namespace {
                export type O = string
            }
            export type namespace = _et.Optional_Value<string>
        }
        export type D = {
            readonly 'value': string
            readonly 'namespace': _et.Optional_Value<string>
        }
    }
    export type attributes = _i_core._T_Dictionary<null, {
        readonly 'value': string
        readonly 'namespace': _et.Optional_Value<string>
    }>
    
    export namespace content {
    }
    export type content = _T_XML_Content
    export type self_closing = boolean
}

export namespace _T_XML_Document {
    
    export namespace declaration {
        
        export namespace O {
            export type version = string
            
            export namespace encoding {
                export type O = string
            }
            export type encoding = _et.Optional_Value<string>
            
            export namespace standalone {
                export type O = boolean
            }
            export type standalone = _et.Optional_Value<boolean>
        }
        export type O = {
            readonly 'version': string
            readonly 'encoding': _et.Optional_Value<string>
            readonly 'standalone': _et.Optional_Value<boolean>
        }
    }
    export type declaration = _et.Optional_Value<{
        readonly 'version': string
        readonly 'encoding': _et.Optional_Value<string>
        readonly 'standalone': _et.Optional_Value<boolean>
    }>
    
    export namespace root_element {
    }
    export type root_element = _T_XML_Element
    
    export namespace processing_instructions {
        
        export namespace L {
        }
        export type L = _T_Processing_Instruction
    }
    export type processing_instructions = _i_core._T_List<null, _T_Processing_Instruction>
}

export namespace _T_XML_Formatting_Options {
    
    export namespace SG {
        export type compact = null
        
        export namespace pretty {
            export type indent = string
            
            export namespace max_line_length {
                export type O = number
            }
            export type max_line_length = _et.Optional_Value<number>
            export type preserve_mixed_content = boolean
        }
        export type pretty = {
            readonly 'indent': string
            readonly 'max line length': _et.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }
        
        export namespace custom {
            
            export namespace before_element {
                export type O = string
            }
            export type before_element = _et.Optional_Value<string>
            
            export namespace after_element {
                export type O = string
            }
            export type after_element = _et.Optional_Value<string>
            
            export namespace before_attribute {
                export type O = string
            }
            export type before_attribute = _et.Optional_Value<string>
            
            export namespace after_attribute {
                export type O = string
            }
            export type after_attribute = _et.Optional_Value<string>
        }
        export type custom = {
            readonly 'before element': _et.Optional_Value<string>
            readonly 'after element': _et.Optional_Value<string>
            readonly 'before attribute': _et.Optional_Value<string>
            readonly 'after attribute': _et.Optional_Value<string>
        }
    }
    export type SG = 
        | readonly ['compact', null]
        | readonly ['pretty', {
            readonly 'indent': string
            readonly 'max line length': _et.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }]
        | readonly ['custom', {
            readonly 'before element': _et.Optional_Value<string>
            readonly 'after element': _et.Optional_Value<string>
            readonly 'before attribute': _et.Optional_Value<string>
            readonly 'after attribute': _et.Optional_Value<string>
        }]
}

// *** ALIASES FOR NESTED TYPES

export namespace XML_Text_Content {
    export type value = string
    export type preserve_whitespace = boolean
    
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
}

export namespace Processing_Instruction {
    export type target = string
    
    export namespace data {
        export type O = string
    }
    export type data = _et.Optional_Value<string>
}

export namespace XML_Node {
    
    export namespace SG {
        
        export namespace element {
        }
        export type element = _T_XML_Element
        
        export namespace text {
        }
        export type text = _T_XML_Text_Content
        
        export namespace comment {
            export type content = string
        }
        export type comment = {
            readonly 'content': string
        }
        
        export namespace cdata {
            export type content = string
        }
        export type cdata = {
            readonly 'content': string
        }
        
        export namespace processing_instruction {
        }
        export type processing_instruction = _T_Processing_Instruction
    }
    export type SG = 
        | readonly ['element', _T_XML_Element]
        | readonly ['text', _T_XML_Text_Content]
        | readonly ['comment', {
            readonly 'content': string
        }]
        | readonly ['cdata', {
            readonly 'content': string
        }]
        | readonly ['processing instruction', _T_Processing_Instruction]
}

export namespace XML_Content {
    
    export namespace SG {
        
        export namespace empty {
        }
        export type empty = null
        
        export namespace text_only {
        }
        export type text_only = _T_XML_Text_Content
        
        export namespace elements_only {
            
            export namespace L {
            }
            export type L = _T_XML_Element
        }
        export type elements_only = _i_core._T_List<null, _T_XML_Element>
        
        export namespace mixed {
            
            export namespace L {
            }
            export type L = _T_XML_Node
        }
        export type mixed = _i_core._T_List<null, _T_XML_Node>
    }
    export type SG = 
        | readonly ['empty', null]
        | readonly ['text only', _T_XML_Text_Content]
        | readonly ['elements only', _i_core._T_List<null, _T_XML_Element>]
        | readonly ['mixed', _i_core._T_List<null, _T_XML_Node>]
}

export namespace XML_Element {
    export type name = string
    
    export namespace namespace {
        export type O = string
    }
    export type namespace = _et.Optional_Value<string>
    
    export namespace prefix {
        export type O = string
    }
    export type prefix = _et.Optional_Value<string>
    
    export namespace attributes {
        
        export namespace D {
            export type value = string
            
            export namespace namespace {
                export type O = string
            }
            export type namespace = _et.Optional_Value<string>
        }
        export type D = {
            readonly 'value': string
            readonly 'namespace': _et.Optional_Value<string>
        }
    }
    export type attributes = _i_core._T_Dictionary<null, {
        readonly 'value': string
        readonly 'namespace': _et.Optional_Value<string>
    }>
    
    export namespace content {
    }
    export type content = _T_XML_Content
    export type self_closing = boolean
}

export namespace XML_Document {
    
    export namespace declaration {
        
        export namespace O {
            export type version = string
            
            export namespace encoding {
                export type O = string
            }
            export type encoding = _et.Optional_Value<string>
            
            export namespace standalone {
                export type O = boolean
            }
            export type standalone = _et.Optional_Value<boolean>
        }
        export type O = {
            readonly 'version': string
            readonly 'encoding': _et.Optional_Value<string>
            readonly 'standalone': _et.Optional_Value<boolean>
        }
    }
    export type declaration = _et.Optional_Value<{
        readonly 'version': string
        readonly 'encoding': _et.Optional_Value<string>
        readonly 'standalone': _et.Optional_Value<boolean>
    }>
    
    export namespace root_element {
    }
    export type root_element = _T_XML_Element
    
    export namespace processing_instructions {
        
        export namespace L {
        }
        export type L = _T_Processing_Instruction
    }
    export type processing_instructions = _i_core._T_List<null, _T_Processing_Instruction>
}

export namespace XML_Formatting_Options {
    
    export namespace SG {
        export type compact = null
        
        export namespace pretty {
            export type indent = string
            
            export namespace max_line_length {
                export type O = number
            }
            export type max_line_length = _et.Optional_Value<number>
            export type preserve_mixed_content = boolean
        }
        export type pretty = {
            readonly 'indent': string
            readonly 'max line length': _et.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }
        
        export namespace custom {
            
            export namespace before_element {
                export type O = string
            }
            export type before_element = _et.Optional_Value<string>
            
            export namespace after_element {
                export type O = string
            }
            export type after_element = _et.Optional_Value<string>
            
            export namespace before_attribute {
                export type O = string
            }
            export type before_attribute = _et.Optional_Value<string>
            
            export namespace after_attribute {
                export type O = string
            }
            export type after_attribute = _et.Optional_Value<string>
        }
        export type custom = {
            readonly 'before element': _et.Optional_Value<string>
            readonly 'after element': _et.Optional_Value<string>
            readonly 'before attribute': _et.Optional_Value<string>
            readonly 'after attribute': _et.Optional_Value<string>
        }
    }
    export type SG = 
        | readonly ['compact', null]
        | readonly ['pretty', {
            readonly 'indent': string
            readonly 'max line length': _et.Optional_Value<number>
            readonly 'preserve mixed content': boolean
        }]
        | readonly ['custom', {
            readonly 'before element': _et.Optional_Value<string>
            readonly 'after element': _et.Optional_Value<string>
            readonly 'before attribute': _et.Optional_Value<string>
            readonly 'after attribute': _et.Optional_Value<string>
        }]
}
