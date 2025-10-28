export type _T_Value_Deserializers = {
    readonly 'boolean': ($$_: string, $$_p: null) => boolean;
    readonly 'custom numbers': {
        readonly 'Natural Number': ($$_: string, $$_p: null) => number;
    };
    readonly 'default number': ($$_: string, $$_p: null) => number;
};
export type Value_Deserializers = _T_Value_Deserializers;
export declare namespace _T_Value_Deserializers {
    namespace _boolean {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = boolean;
    }
    type _boolean = ($$_: string, $$_p: null) => boolean;
    namespace custom_numbers {
        namespace Natural_Number {
            type CONTEXT = string;
            namespace PARAMS {
            }
            type RESULT = number;
        }
        type Natural_Number = ($$_: string, $$_p: null) => number;
    }
    type custom_numbers = {
        readonly 'Natural Number': ($$_: string, $$_p: null) => number;
    };
    namespace default_number {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = number;
    }
    type default_number = ($$_: string, $$_p: null) => number;
}
export declare namespace Value_Deserializers {
    namespace _boolean {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = boolean;
    }
    type _boolean = ($$_: string, $$_p: null) => boolean;
    namespace custom_numbers {
        namespace Natural_Number {
            type CONTEXT = string;
            namespace PARAMS {
            }
            type RESULT = number;
        }
        type Natural_Number = ($$_: string, $$_p: null) => number;
    }
    type custom_numbers = {
        readonly 'Natural Number': ($$_: string, $$_p: null) => number;
    };
    namespace default_number {
        type CONTEXT = string;
        namespace PARAMS {
        }
        type RESULT = number;
    }
    type default_number = ($$_: string, $$_p: null) => number;
}
