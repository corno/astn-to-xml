import * as _et from "exupery-core-types";
import * as t from "../../../../interface/generated/pareto/core/astn_source";
import * as unconstrained from "../../../../interface/generated/pareto/core/unconstrained";
import * as unresolved from "../../../../interface/generated/pareto/core/unresolved";
export declare const process_unconstrained_state_group: <X>($: t._T_Value, $p: {
    "states": _et.Dictionary<($: t._T_Value) => X>;
}) => X;
export declare const process_unresolved_state_group: <X>($: t._T_Value, $p: {
    "states": _et.Dictionary<($: t._T_Value) => X>;
}) => unresolved.State_Group<t._T_Range, X>;
export declare const process_group: <X>($: t._T_Value, $p: {
    "properties": ($: _et.Dictionary<t._T_Value>) => X;
}) => X;
export declare const get_entry: ($: _et.Dictionary<t._T_Value>, $p: {
    "key": string;
}) => t._T_Value;
export declare const process_unresolved_dictionary: <X>($: t._T_Value, $p: {
    "value": ($: t._T_Value) => X;
}) => unresolved.Dictionary<t._T_Range, X>;
export declare const process_unconstrained_dictionary: <X>($: t._T_Value, $p: {
    "value": ($: t._T_Value) => X;
}) => unconstrained.Dictionary<null, X>;
export declare const process_number: ($: t._T_Value, $p: {
    "deserializer": ($: string, $p: null) => number;
}) => number;
export declare const process_boolean: ($: t._T_Value, $p: {
    "deserializer": ($: string, $p: null) => boolean;
}) => boolean;
export declare const process_text: ($: t._T_Value, $p: null) => string;
export declare const process_unresolved_list: <X>($: t._T_Value, $p: {
    "value": ($: t._T_Value) => X;
}) => unresolved.List<t._T_Range, X>;
export declare const process_unconstrained_list: <X>($: t._T_Value, $p: {
    "value": ($: t._T_Value) => X;
}) => unconstrained.List<null, X>;
export declare const process_optional: <X>($: t._T_Value, $p: {
    "value": ($: t._T_Value) => X;
}) => _et.Optional_Value<X>;
export declare const process_nothing: ($: t._T_Value, $p: null) => null;
export declare const process_selected_reference: <X>($: t._T_Value, $p: null) => unresolved.Reference_To_Normal_Dictionary_Entry<t._T_Range, X>;
export declare const process_stack_reference: <X>($: t._T_Value, $p: null) => unresolved.Reference_To_Stacked_Dictionary_Entry<t._T_Range, X>;
export declare const process_derived_reference: ($: t._T_Value, $p: null) => null;
