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
exports.process_derived_reference = exports.process_stack_reference = exports.process_selected_reference = exports.process_nothing = exports.process_optional = exports.process_unconstrained_list = exports.process_unresolved_list = exports.process_text = exports.process_boolean = exports.process_number = exports.process_unconstrained_dictionary = exports.process_unresolved_dictionary = exports.get_entry = exports.process_group = exports.process_unresolved_state_group = exports.process_unconstrained_state_group = void 0;
const _ea = __importStar(require("exupery-core-alg"));
const _ed = __importStar(require("exupery-core-dev"));
const process_unconstrained_state_group = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value;
                return $p.states.__get_entry($.state.value).transform(($) => $(data), () => _ed.implement_me());
            });
            default: return _ea.panic(`Unexpected type for state group: ${$[0]}`);
        }
    });
};
exports.process_unconstrained_state_group = process_unconstrained_state_group;
const process_unresolved_state_group = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value;
                return {
                    'location': $["|"].range,
                    'state group': $p.states.__get_entry($.state.value).transform(($) => $(data), () => _ed.implement_me())
                };
            });
            default: return _ea.panic(`Unexpected type for state group: ${$[0]}`);
        }
    });
};
exports.process_unresolved_state_group = process_unresolved_state_group;
const process_group = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'verbose group': return _ea.ss($, ($) => {
                        return $p.properties(_ea.build_dictionary(($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(($) => $.value, () => _ed.implement_me()));
                            });
                        }));
                    });
                    default: return _ea.panic(`Unexpected type for group: ${$[0]}`);
                }
            }));
            default: return _ea.panic(`Unexpected type for group: ${$[0]}`);
        }
    });
};
exports.process_group = process_group;
const get_entry = ($, $p) => {
    return $.__get_entry($p.key).transform(($) => $, () => _ea.panic(`no such entry: ${$p.key}`));
};
exports.get_entry = get_entry;
const process_unresolved_dictionary = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return {
                            'location': {
                                'start': $["{"].range.start,
                                'end': $["}"].range.end,
                            },
                            'dictionary': _ea.build_dictionary(($i) => {
                                $.entries.__for_each(($) => {
                                    const key_location = $.key.range;
                                    $i['add entry']($.key.value, $.value.transform(($) => ({
                                        'location': key_location,
                                        'entry': $p.value($.value),
                                    }), () => _ed.implement_me() //what to do if the property has no value?
                                    ));
                                });
                            })
                        };
                    });
                    default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`);
                }
            }));
            default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`);
        }
    });
};
exports.process_unresolved_dictionary = process_unresolved_dictionary;
const process_unconstrained_dictionary = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return _ea.build_dictionary(($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(($) => $p.value($.value), () => _ed.implement_me() //what to do if the property has no value?
                                ));
                            });
                        });
                    });
                    default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`);
                }
            }));
            default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`);
        }
    });
};
exports.process_unconstrained_dictionary = process_unconstrained_dictionary;
const process_number = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $p.deserializer($.value, null));
            default: return _ea.panic(`Unexpected type for number: ${$[0]}`);
        }
    });
};
exports.process_number = process_number;
const process_boolean = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $p.deserializer($.value, null));
            default: return _ea.panic(`Unexpected type for boolean: ${$[0]}`);
        }
    });
};
exports.process_boolean = process_boolean;
const process_text = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $.value);
            default: return _ea.panic(`Unexpected type for text: ${$[0]}`);
        }
    });
};
exports.process_text = process_text;
const process_unresolved_list = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'list': return _ea.ss($, ($) => {
                        const temp = $["["];
                        return {
                            'location': $["["].range,
                            'list': $["elements"].map(($) => ({
                                'location': temp.range,
                                'element': $p.value($.value)
                            }))
                        };
                    });
                    default: return _ea.panic(`Unexpected type for list: ${$[0]}`);
                }
            }));
            default: return _ea.panic(`Unexpected type for list: ${$[0]}`);
        }
    });
};
exports.process_unresolved_list = process_unresolved_list;
const process_unconstrained_list = ($, $p) => {
    return _ed.implement_me();
};
exports.process_unconstrained_list = process_unconstrained_list;
const process_optional = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => _ea.not_set());
            case 'set optional value': return _ea.ss($, ($) => _ea.set($p.value($.value)));
            default: return _ea.panic(`Unexpected type for nothing: ${$[0]}`);
        }
    });
};
exports.process_optional = process_optional;
const process_nothing = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => null);
            default: return _ea.panic(`Unexpected type for nothing: ${$[0]}`);
        }
    });
};
exports.process_nothing = process_nothing;
const process_selected_reference = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ({
                'key': $.value,
                'location': $.range,
            }));
            default: return _ea.panic(`Unexpected type for selected reference key: ${$[0]}`);
        }
    });
};
exports.process_selected_reference = process_selected_reference;
const process_stack_reference = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ({
                'key': $.value,
                'location': $.range,
            }));
            default: return _ea.panic(`Unexpected type for selected reference key: ${$[0]}`);
        }
    });
};
exports.process_stack_reference = process_stack_reference;
const process_derived_reference = ($, $p) => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => null);
            default: return _ea.panic(`Unexpected type for derived reference: ${$[0]}`);
        }
    });
};
exports.process_derived_reference = process_derived_reference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvaW1wbGVtZW50YXRpb24vZ2VuZXJpYy91bm1hcnNoYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQXVDO0FBQ3ZDLHNEQUF1QztBQU1oQyxNQUFNLGlDQUFpQyxHQUFHLENBQzdDLENBQWEsRUFDYixFQUVDLEVBRUEsRUFBRTtJQUNILE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxjQUFjLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUE7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNoQixDQUFDLFNBQVMsQ0FDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNkLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FDM0IsQ0FBQTtZQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3pFLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQXJCWSxRQUFBLGlDQUFpQyxxQ0FxQjdDO0FBRU0sTUFBTSw4QkFBOEIsR0FBRyxDQUMxQyxDQUFhLEVBQ2IsRUFFQyxFQUVvQyxFQUFFO0lB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