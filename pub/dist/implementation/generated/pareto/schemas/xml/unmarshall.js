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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9nZW5lcmF0ZWQvcGFyZXRvL3NjaGVtYXMveG1sL3VubWFyc2hhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBdUM7QUFHdkMscUVBQXNEO0FBTS9DLE1BQU0sc0JBQXNCLEdBQTRDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FDOUcsQ0FBQyxFQUNEO0lBQ0ksWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQy9CLENBQUMsRUFDRDtZQUNJLEtBQUssRUFBRSxNQUFNO1NBQ2hCLENBQ0osRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUNqQyxDQUFDLEVBQ0Q7WUFDSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQ25DLENBQUMsRUFDRCxJQUFJLENBQ1A7U0FDSixDQUNKLENBQUM7UUFDRixRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUNqQyxDQUFDLEVBQ0Q7WUFDSSxLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUNKLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQzdCLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztLQUNMLENBQUM7Q0FDTCxDQUNKLENBQUE7QUE3QlksUUFBQSxzQkFBc0IsMEJBNkJsQztBQUNNLE1BQU0sV0FBVyxHQUFpQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FB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