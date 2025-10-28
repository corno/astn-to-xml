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
const _i_generic = __importStar(require("../../generic/unmarshall"));
const Processing_Instruction = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'data': _pa.cc(_i_generic.get_entry($, {
            'key': "data",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_text($, null),
        })),
        'target': _pa.cc(_i_generic.get_entry($, {
            'key': "target",
        }), ($) => _i_generic.process_text($, null)),
    }),
});
exports.Processing_Instruction = Processing_Instruction;
const XML_Content = ($, $p) => _i_generic.process_unconstrained_state_group($, {
    'states': _pa.dictionary_literal({
        'elements only': ($) => ['elements only', _i_generic.process_unconstrained_list($, {
                'value': ($) => (0, exports.XML_Element)($, {
                    'value deserializers': $p['value deserializers'],
                }),
            })],
        'empty': ($) => ['empty', _i_generic.process_group($, {
                'properties': ($) => null,
            })],
        'mixed': ($) => ['mixed', _i_generic.process_unconstrained_list($, {
                'value': ($) => (0, exports.XML_Node)($, {
                    'value deserializers': $p['value deserializers'],
                }),
            })],
        'text only': ($) => ['text only', (0, exports.XML_Text_Content)($, {
                'value deserializers': $p['value deserializers'],
            })],
    }),
});
exports.XML_Content = XML_Content;
const XML_Document = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'declaration': _pa.cc(_i_generic.get_entry($, {
            'key': "declaration",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_group($, {
                'properties': ($) => ({
                    'encoding': _pa.cc(_i_generic.get_entry($, {
                        'key': "encoding",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'standalone': _pa.cc(_i_generic.get_entry($, {
                        'key': "standalone",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_boolean($, {
                            'deserializer': $p['value deserializers']['boolean'],
                        }),
                    })),
                    'version': _pa.cc(_i_generic.get_entry($, {
                        'key': "version",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            }),
        })),
        'processing instructions': _pa.cc(_i_generic.get_entry($, {
            'key': "processing instructions",
        }), ($) => _i_generic.process_unconstrained_list($, {
            'value': ($) => (0, exports.Processing_Instruction)($, {
                'value deserializers': $p['value deserializers'],
            }),
        })),
        'root element': _pa.cc(_i_generic.get_entry($, {
            'key': "root element",
        }), ($) => (0, exports.XML_Element)($, {
            'value deserializers': $p['value deserializers'],
        })),
    }),
});
exports.XML_Document = XML_Document;
const XML_Element = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'attributes': _pa.cc(_i_generic.get_entry($, {
            'key': "attributes",
        }), ($) => _i_generic.process_unconstrained_dictionary($, {
            'value': ($) => _i_generic.process_group($, {
                'properties': ($) => ({
                    'namespace': _pa.cc(_i_generic.get_entry($, {
                        'key': "namespace",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'value': _pa.cc(_i_generic.get_entry($, {
                        'key': "value",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            }),
        })),
        'content': _pa.cc(_i_generic.get_entry($, {
            'key': "content",
        }), ($) => (0, exports.XML_Content)($, {
            'value deserializers': $p['value deserializers'],
        })),
        'name': _pa.cc(_i_generic.get_entry($, {
            'key': "name",
        }), ($) => _i_generic.process_text($, null)),
        'namespace': _pa.cc(_i_generic.get_entry($, {
            'key': "namespace",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_text($, null),
        })),
        'prefix': _pa.cc(_i_generic.get_entry($, {
            'key': "prefix",
        }), ($) => _i_generic.process_optional($, {
            'value': ($) => _i_generic.process_text($, null),
        })),
        'self closing': _pa.cc(_i_generic.get_entry($, {
            'key': "self closing",
        }), ($) => _i_generic.process_boolean($, {
            'deserializer': $p['value deserializers']['boolean'],
        })),
    }),
});
exports.XML_Element = XML_Element;
const XML_Formatting_Options = ($, $p) => _i_generic.process_unconstrained_state_group($, {
    'states': _pa.dictionary_literal({
        'compact': ($) => ['compact', _i_generic.process_nothing($, null)],
        'custom': ($) => ['custom', _i_generic.process_group($, {
                'properties': ($) => ({
                    'after attribute': _pa.cc(_i_generic.get_entry($, {
                        'key': "after attribute",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'after element': _pa.cc(_i_generic.get_entry($, {
                        'key': "after element",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'before attribute': _pa.cc(_i_generic.get_entry($, {
                        'key': "before attribute",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                    'before element': _pa.cc(_i_generic.get_entry($, {
                        'key': "before element",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_text($, null),
                    })),
                }),
            })],
        'pretty': ($) => ['pretty', _i_generic.process_group($, {
                'properties': ($) => ({
                    'indent': _pa.cc(_i_generic.get_entry($, {
                        'key': "indent",
                    }), ($) => _i_generic.process_text($, null)),
                    'max line length': _pa.cc(_i_generic.get_entry($, {
                        'key': "max line length",
                    }), ($) => _i_generic.process_optional($, {
                        'value': ($) => _i_generic.process_number($, {
                            'deserializer': $p['value deserializers']['default number'],
                        }),
                    })),
                    'preserve mixed content': _pa.cc(_i_generic.get_entry($, {
                        'key': "preserve mixed content",
                    }), ($) => _i_generic.process_boolean($, {
                        'deserializer': $p['value deserializers']['boolean'],
                    })),
                }),
            })],
    }),
});
exports.XML_Formatting_Options = XML_Formatting_Options;
const XML_Node = ($, $p) => _i_generic.process_unconstrained_state_group($, {
    'states': _pa.dictionary_literal({
        'cdata': ($) => ['cdata', _i_generic.process_group($, {
                'properties': ($) => ({
                    'content': _pa.cc(_i_generic.get_entry($, {
                        'key': "content",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            })],
        'comment': ($) => ['comment', _i_generic.process_group($, {
                'properties': ($) => ({
                    'content': _pa.cc(_i_generic.get_entry($, {
                        'key': "content",
                    }), ($) => _i_generic.process_text($, null)),
                }),
            })],
        'element': ($) => ['element', (0, exports.XML_Element)($, {
                'value deserializers': $p['value deserializers'],
            })],
        'processing instruction': ($) => ['processing instruction', (0, exports.Processing_Instruction)($, {
                'value deserializers': $p['value deserializers'],
            })],
        'text': ($) => ['text', (0, exports.XML_Text_Content)($, {
                'value deserializers': $p['value deserializers'],
            })],
    }),
});
exports.XML_Node = XML_Node;
const XML_Text_Content = ($, $p) => _i_generic.process_group($, {
    'properties': ($) => ({
        'escape': _pa.cc(_i_generic.get_entry($, {
            'key': "escape",
        }), ($) => _i_generic.process_unconstrained_state_group($, {
            'states': _pa.dictionary_literal({
                'auto': ($) => ['auto', _i_generic.process_group($, {
                        'properties': ($) => null,
                    })],
                'cdata': ($) => ['cdata', _i_generic.process_group($, {
                        'properties': ($) => null,
                    })],
                'none': ($) => ['none', _i_generic.process_group($, {
                        'properties': ($) => null,
                    })],
            }),
        })),
        'preserve whitespace': _pa.cc(_i_generic.get_entry($, {
            'key': "preserve whitespace",
        }), ($) => _i_generic.process_boolean($, {
            'deserializer': $p['value deserializers']['boolean'],
        })),
        'value': _pa.cc(_i_generic.get_entry($, {
            'key': "value",
        }), ($) => _i_generic.process_text($, null)),
    }),
});
exports.XML_Text_Content = XML_Text_Content;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvaW1wbGVtZW50YXRpb24vc2NoZW1hcy94bWwvdW5tYXJzaGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUF1QztBQUd2QyxxRUFBc0Q7QUFNL0MsTUFBTSxzQkFBc0IsR0FBNEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUM5RyxDQUFDLEVBQ0Q7SUFDSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FDL0IsQ0FBQyxFQUNEO1lBQ0ksS0FBSyxFQUFFLE1BQU07U0FDaEIsQ0FDSixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQ2pDLENBQUMsRUFDRDtZQUNJLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDbkMsQ0FBQyxFQUNELElBQUksQ0FDUDtTQUNKLENBQ0osQ0FBQztRQUNGLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQ2pDLENBQUMsRUFDRDtZQUNJLEtBQUssRUFBRSxRQUFRO1NBQ2xCLENBQ0osRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDN0IsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO0tBQ0wsQ0FBQztDQUNMLENBQ0osQ0FBQTtBQTdCWSxRQUFBLHNCQUFzQiwwQkE2QmxDO0FBQ00sTUFBTSxXQUFXLEdBQWlDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxD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