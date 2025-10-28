"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XML_Text_Content = exports.XML_Node = exports.XML_Formatting_Options = exports.XML_Element = exports.XML_Document = exports.XML_Content = exports.Processing_Instruction = void 0;
const _pa = __importStar(require("exupery-core-alg"));
const Processing_Instruction = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'data': _pa.cc($['data'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]], () => ['not set', null])]),
        'target': _pa.cc($['target'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
    })];
exports.Processing_Instruction = Processing_Instruction;
const XML_Content = ($, $p) => ['state', _pa.cc($, ($) => {
        switch ($[0]) {
            case 'elements only': return _pa.ss($, ($) => ({
                'state': "elements only",
                'value': ['list', $.map(($) => (0, exports.XML_Element)($, {
                        'value serializers': $p['value serializers'],
                    }))],
            }));
            case 'empty': return _pa.ss($, ($) => ({
                'state': "empty",
                'value': ['verbose group', _pa.dictionary_literal({})],
            }));
            case 'mixed': return _pa.ss($, ($) => ({
                'state': "mixed",
                'value': ['list', $.map(($) => (0, exports.XML_Node)($, {
                        'value serializers': $p['value serializers'],
                    }))],
            }));
            case 'text only': return _pa.ss($, ($) => ({
                'state': "text only",
                'value': (0, exports.XML_Text_Content)($, {
                    'value serializers': $p['value serializers'],
                }),
            }));
            default: return _pa.au($[0]);
        }
    })];
exports.XML_Content = XML_Content;
const XML_Document = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'declaration': _pa.cc($['declaration'], ($) => ['optional', $.transform(($) => ['set', ['verbose group', _pa.dictionary_literal({
                        'encoding': _pa.cc($['encoding'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]], () => ['not set', null])]),
                        'standalone': _pa.cc($['standalone'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $p['value serializers']['boolean']($, null),
                                    })]], () => ['not set', null])]),
                        'version': _pa.cc($['version'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                    })]], () => ['not set', null])]),
        'processing instructions': _pa.cc($['processing instructions'], ($) => ['list', $.map(($) => (0, exports.Processing_Instruction)($, {
                'value serializers': $p['value serializers'],
            }))]),
        'root element': _pa.cc($['root element'], ($) => (0, exports.XML_Element)($, {
            'value serializers': $p['value serializers'],
        })),
    })];
exports.XML_Document = XML_Document;
const XML_Element = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'attributes': _pa.cc($['attributes'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'namespace': _pa.cc($['namespace'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]], () => ['not set', null])]),
                    'value': _pa.cc($['value'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                })])]),
        'content': _pa.cc($['content'], ($) => (0, exports.XML_Content)($, {
            'value serializers': $p['value serializers'],
        })),
        'name': _pa.cc($['name'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        'namespace': _pa.cc($['namespace'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]], () => ['not set', null])]),
        'prefix': _pa.cc($['prefix'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]], () => ['not set', null])]),
        'self closing': _pa.cc($['self closing'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean']($, null),
            })]),
    })];
exports.XML_Element = XML_Element;
const XML_Formatting_Options = ($, $p) => ['state', _pa.cc($, ($) => {
        switch ($[0]) {
            case 'compact': return _pa.ss($, ($) => ({
                'state': "compact",
                'value': ['nothing', null],
            }));
            case 'custom': return _pa.ss($, ($) => ({
                'state': "custom",
                'value': ['verbose group', _pa.dictionary_literal({
                        'after attribute': _pa.cc($['after attribute'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]], () => ['not set', null])]),
                        'after element': _pa.cc($['after element'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]], () => ['not set', null])]),
                        'before attribute': _pa.cc($['before attribute'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]], () => ['not set', null])]),
                        'before element': _pa.cc($['before element'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]], () => ['not set', null])]),
                    })],
            }));
            case 'pretty': return _pa.ss($, ($) => ({
                'state': "pretty",
                'value': ['verbose group', _pa.dictionary_literal({
                        'indent': _pa.cc($['indent'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                        'max line length': _pa.cc($['max line length'], ($) => ['optional', $.transform(($) => ['set', ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $p['value serializers']['default number']($, null),
                                    })]], () => ['not set', null])]),
                        'preserve mixed content': _pa.cc($['preserve mixed content'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['boolean']($, null),
                            })]),
                    })],
            }));
            default: return _pa.au($[0]);
        }
    })];
exports.XML_Formatting_Options = XML_Formatting_Options;
const XML_Node = ($, $p) => ['state', _pa.cc($, ($) => {
        switch ($[0]) {
            case 'cdata': return _pa.ss($, ($) => ({
                'state': "cdata",
                'value': ['verbose group', _pa.dictionary_literal({
                        'content': _pa.cc($['content'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                    })],
            }));
            case 'comment': return _pa.ss($, ($) => ({
                'state': "comment",
                'value': ['verbose group', _pa.dictionary_literal({
                        'content': _pa.cc($['content'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                    })],
            }));
            case 'element': return _pa.ss($, ($) => ({
                'state': "element",
                'value': (0, exports.XML_Element)($, {
                    'value serializers': $p['value serializers'],
                }),
            }));
            case 'processing instruction': return _pa.ss($, ($) => ({
                'state': "processing instruction",
                'value': (0, exports.Processing_Instruction)($, {
                    'value serializers': $p['value serializers'],
                }),
            }));
            case 'text': return _pa.ss($, ($) => ({
                'state': "text",
                'value': (0, exports.XML_Text_Content)($, {
                    'value serializers': $p['value serializers'],
                }),
            }));
            default: return _pa.au($[0]);
        }
    })];
exports.XML_Node = XML_Node;
const XML_Text_Content = ($, $p) => ['verbose group', _pa.dictionary_literal({
        'escape': _pa.cc($['escape'], ($) => ['state', _pa.cc($, ($) => {
                switch ($[0]) {
                    case 'auto': return _pa.ss($, ($) => ({
                        'state': "auto",
                        'value': ['verbose group', _pa.dictionary_literal({})],
                    }));
                    case 'cdata': return _pa.ss($, ($) => ({
                        'state': "cdata",
                        'value': ['verbose group', _pa.dictionary_literal({})],
                    }));
                    case 'none': return _pa.ss($, ($) => ({
                        'state': "none",
                        'value': ['verbose group', _pa.dictionary_literal({})],
                    }));
                    default: return _pa.au($[0]);
                }
            })]),
        'preserve whitespace': _pa.cc($['preserve whitespace'], ($) => ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean']($, null),
            })]),
        'value': _pa.cc($['value'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
    })];
exports.XML_Text_Content = XML_Text_Content;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyc2hhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ2VuZXJhdGVkL2ltcGxlbWVudGF0aW9uL3NjaGVtYXMveG1sL21hcnNoYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBT2hDLE1BQU0sc0JBQXNCLEdBQTRDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBQy9ILE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsQ0FBQyxDQUFDLEVBQStCLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNsRCxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQztxQkFDYixDQUFDLENBQUMsQ0FBQyxFQUNKLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUMxQixDQUFDLENBQUM7UUFDSCxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDLENBQUMsQ0FBQTtBQVpVLFFBQUEsc0JBQXNCLDBCQVloQztBQUNJLE1BQU0sV0FBVyxHQUFpQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFB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