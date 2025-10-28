export type _T_Value_Serializers = {
    readonly 'boolean': ($$_: boolean, $$_p: null) => string;
    readonly 'custom numbers': null;
    readonly 'default number': ($$_: number, $$_p: null) => string;
};
export type Value_Serializers = _T_Value_Serializers;
export declare namespace _T_Value_Serializers {
    namespace _boolean {
        type CONTEXT = boolean;
        namespace PARAMS {
        }
        type RESULT = string;
    }
    type _boolean = ($$_: boolean, $$_p: null) => string;
    namespace custom_numbers {
    }
    type custom_numbers = null;
    namespace default_number {
        type CONTEXT = number;
        namespace PARAMS {
        }
        type RESULT = string;
    }
    type default_number = ($$_: number, $$_p: null) => string;
}
export declare namespace Value_Serializers {
    namespace _boolean {
        type CONTEXT = boolean;
        namespace PARAMS {
        }
        type RESULT = string;
    }
    type _boolean = ($$_: boolean, $$_p: null) => string;
    namespace custom_numbers {
    }
    type custom_numbers = null;
    namespace default_number {
        type CONTEXT = number;
        namespace PARAMS {
        }
        type RESULT = string;
    }
    type default_number = ($$_: number, $$_p: null) => string;
}
