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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyc2hhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW1wbGVtZW50YXRpb24vZ2VuZXJhdGVkL3BhcmV0by9zY2hlbWFzL3htbC9tYXJzaGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUF1QztBQU9oQyxNQUFNLHNCQUFzQixHQUE0QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvSCxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3JELENBQUMsQ0FBQyxFQUErQixFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDbEQsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt3QkFDNUIsT0FBTyxFQUFFLENBQUM7cUJBQ2IsQ0FBQyxDQUFDLENBQUMsRUFDSixHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FDMUIsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMzQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQyxDQUFDO0tBQ1AsQ0FBQyxDQUFDLENBQUE7QUFaVSxRQUFBLHNCQUFzQiwwQkFZaEM7QUFDSSxNQUFNLFdBQVcsR0FBaUMsQ0FBQyxDQUFDLEVBQUUsRUFB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