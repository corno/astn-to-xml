import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/xml/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const XML_Text_Content: _i_signatures._T_XML_Text_Content = ($, $p) => _i_serialize.Document(
    _i_marshall.XML_Text_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Processing_Instruction: _i_signatures._T_Processing_Instruction = ($, $p) => _i_serialize.Document(
    _i_marshall.Processing_Instruction(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const XML_Node: _i_signatures._T_XML_Node = ($, $p) => _i_serialize.Document(
    _i_marshall.XML_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const XML_Content: _i_signatures._T_XML_Content = ($, $p) => _i_serialize.Document(
    _i_marshall.XML_Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const XML_Element: _i_signatures._T_XML_Element = ($, $p) => _i_serialize.Document(
    _i_marshall.XML_Element(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const XML_Document: _i_signatures._T_XML_Document = ($, $p) => _i_serialize.Document(
    _i_marshall.XML_Document(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const XML_Formatting_Options: _i_signatures._T_XML_Formatting_Options = ($, $p) => _i_serialize.Document(
    _i_marshall.XML_Formatting_Options(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
