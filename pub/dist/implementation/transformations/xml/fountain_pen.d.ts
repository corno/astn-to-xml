import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target";
import * as d_in from "../../../interface/generated/pareto/schemas/xml/data_types/source";
export declare const XML_Document: ($: d_in.XML_Document, $p: {
    "formatting": d_in.XML_Formatting_Options;
}) => d_out.Group;
export declare const XML_Element: ($: d_in.XML_Element, $p: {
    "formatting": d_in.XML_Formatting_Options;
}) => d_out.Group_Part;
export declare const XML_Attributes: (attributes: d_in._T_XML_Element["attributes"]) => d_out.Block_Part;
export declare const XML_Content: ($: d_in.XML_Content, $p: {
    "formatting": d_in.XML_Formatting_Options;
}) => d_out.Group_Part;
export declare const XML_Text_Content: ($: d_in.XML_Text_Content, $p: {
    "formatting": d_in.XML_Formatting_Options;
}) => d_out.Group_Part;
export declare const XML_Node: ($: d_in.XML_Node, $p: {
    "formatting": d_in.XML_Formatting_Options;
}) => d_out.Group_Part;
export declare const Processing_Instruction: ($: d_in.Processing_Instruction, $p: {
    "formatting": d_in.XML_Formatting_Options;
}) => d_out.Group_Part;
export declare const XML_Formatting_Options: ($: d_in.XML_Formatting_Options, $p: {}) => d_out.Group_Part;
