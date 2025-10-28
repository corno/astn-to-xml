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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXJzaGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9nZW5lcmF0ZWQvcGFyZXRvL2dlbmVyaWMvdW5tYXJzaGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUF1QztBQUN2QyxzREFBdUM7QUFNaEMsTUFBTSxpQ0FBaUMsR0FBRyxDQUM3QyxDQUFhLEVBQ2IsRUFFQyxFQUVBLEVBQUU7SUFDSCxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFBO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUN4QixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDaEIsQ0FBQyxTQUFTLENBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDZCxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQzNCLENBQUE7WUFDTCxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN6RSxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFyQlksUUFBQSxpQ0FBaUMscUNBcUI3QztBQUVNLE1BQU0sOEJBQThCLEdBQUcsQ0FDMUMsQ0FBYSxFQUNiLEVBRUMsRUFF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