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
exports.resolve_ordered_dictionary = exports.resolve_dense_ordered_dictionary = exports.resolve_dense_dictionary = exports.resolve_dictionary = exports.resolve_path = exports.get_entry = exports.get_entry_from_stack = exports.push_stack = exports.get_possibly_circular_dependent_sibling_entry = exports.dictionary_to_lookup = exports.abort = void 0;
const _ea = __importStar(require("exupery-core-alg"));
const abort = (location, type, location_to_string) => {
    return _ea.panic(_ea.cc(type, ($) => {
        switch ($[0]) {
            case 'no such entry': return _ea.ss($, ($) => `no such entry: '${$['key']}'`);
            case 'missing denseness entry': return _ea.ss($, ($) => `missing denseness entry: '${$['key']}'`);
            case 'circular dependency': return _ea.ss($, ($) => {
                const keys = _ea.build_text(($i) => {
                    $['keys'].__for_each(($) => {
                        $i['add snippet'](` '${$}', `);
                    });
                });
                return `circular dependency: (${keys})`;
            });
            case 'no context lookup': return _ea.ss($, ($) => `no context lookup`);
            case 'index out of bounds': return _ea.ss($, ($) => `index out of bounds, ${$['up steps taken']}`);
            case 'no element found at index': return _ea.ss($, ($) => `no element found at index, ${$['index']}`);
            default: return _ea.au($[0]);
        }
    }), ` @ ${location_to_string(location)}`);
};
exports.abort = abort;
const dictionary_to_lookup = ($, $p) => {
    return _ea.set($.map(($) => (['resolved', $])));
};
exports.dictionary_to_lookup = dictionary_to_lookup;
const get_possibly_circular_dependent_sibling_entry = ($, $p) => {
    return $.transform(($) => ({
        'key': $p.reference.key,
        'entry': $.__get_entry($p.reference.key).transform(($) => $, () => (0, exports.abort)($p.reference.location, ['no such entry', { 'key': $p.reference.key }], $p['location 2 string']))
    }), () => (0, exports.abort)($p.reference.location, ['no context lookup', null], $p['location 2 string']));
};
exports.get_possibly_circular_dependent_sibling_entry = get_possibly_circular_dependent_sibling_entry;
const push_stack = ($, $p) => {
    return _ea.build_list(($i) => {
        $i['add list']($);
        $i['add element']($p['element']);
    });
};
exports.push_stack = push_stack;
const get_entry_from_stack = ($, $p) => {
    const ref = $p.reference;
    const get_entry_from_stack = (up_steps_taken) => {
        return $.__get_element_at($.__get_length() - 1 - up_steps_taken).transform(($) => {
            return $.transform(($) => {
                return $.__get_entry(ref.key).transform(($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'error': return _ea.ss($, ($) => get_entry_from_stack(up_steps_taken += 1));
                        case 'resolved': return _ea.ss($, ($) => ({
                            'key': ref.key,
                            'up steps': up_steps_taken,
                            'entry': $,
                        }));
                        default: return _ea.au($[0]);
                    }
                }), () => _ea.panic(`no clue yet of what is happening here`));
            }, () => (0, exports.abort)(ref.location, ['index out of bounds', { 'up steps taken': up_steps_taken }], $p['location 2 string']));
        }, () => (0, exports.abort)(ref.location, ['no element found at index', { 'index': up_steps_taken }], $p['location 2 string']));
    };
    return get_entry_from_stack(0);
};
exports.get_entry_from_stack = get_entry_from_stack;
const get_entry = ($, $p) => {
    return $.transform(($) => ({
        'key': $p.reference.key,
        'entry': $.__get_entry($p.reference.key).transform(($) => _ea.cc($, ($) => {
            switch ($[0]) {
                case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'circular': return _ea.ss($, ($) => {
                            return (0, exports.abort)($p.reference.location, ['circular dependency', { 'keys': $ }], $p['location 2 string']);
                        });
                        default: return _ea.au($[0]);
                    }
                }));
                case 'resolved': return _ea.ss($, ($) => $);
                default: return _ea.au($[0]);
            }
        }), () => {
            return (0, exports.abort)($p.reference.location, ['no such entry', { 'key': $p.reference.key }], $p['location 2 string']);
        })
    }), () => (0, exports.abort)($p.reference.location, ['no context lookup', null], $p['location 2 string']));
};
exports.get_entry = get_entry;
const resolve_path = ($, $p) => {
    let current = {
        'list': _ea.array_literal([]),
        'result': {
            'data': $p.seed,
        },
    };
    $.list.__for_each(($) => {
        const result = $p.map($.element, current.result.data);
        const data = _ea.build_list(($i) => {
            current.list.__for_each(($) => {
                $i['add element']($);
            });
            $i['add element'](result.element);
        });
        current = {
            'list': data,
            'result': {
                'data': result.result,
            }
        };
    });
    return current;
};
exports.resolve_path = resolve_path;
const resolve_dictionary = ($, $p) => {
    return (0, exports.resolve_ordered_dictionary)($, $p).dictionary;
};
exports.resolve_dictionary = resolve_dictionary;
const resolve_dense_dictionary = ($, $p) => {
    return (0, exports.resolve_dense_ordered_dictionary)($, $p).dictionary;
};
exports.resolve_dense_dictionary = resolve_dense_dictionary;
const resolve_dense_ordered_dictionary = ($, $p) => {
    const location = $.location;
    const result = (0, exports.resolve_ordered_dictionary)($, $p);
    $p['denseness benchmark'].map(($) => {
        const validate_denseness = (benchmark, focus, location, location_to_string) => {
            benchmark.map(($, key) => {
                const benchmark = $;
                focus.__get_entry(key).transform(($) => {
                }, () => {
                    (0, exports.abort)(location, ['missing denseness entry', { 'key': key }], $p['location 2 string']);
                });
            });
        };
        validate_denseness($p['denseness benchmark'], result.dictionary, location, $p['location 2 string']);
    });
    return result;
};
exports.resolve_dense_ordered_dictionary = resolve_dense_ordered_dictionary;
const resolve_ordered_dictionary = ($, $p) => {
    const dictionary_location = $.location;
    /**
     * this variable contains all the entries on which siblings have subscribed
     */
    const all_siblings_subscribed_entries = {};
    const finished = {};
    const ordered_list = _ea.build_list(($i) => {
        const source_dictionary = $;
        const status_dictionary = {};
        function process_entry($, location, key_of_entry_being_processed) {
            status_dictionary[key_of_entry_being_processed] = ['processing', null];
            const entry = $p.map({
                'key': key_of_entry_being_processed,
                'value': $,
                'location': location,
            }, {
                'possibly circular dependent siblings': _ea.set({
                    __get_entry(key) {
                        //does the entry exist?
                        return source_dictionary.dictionary.__get_entry(key).map(($) => {
                            //yes, it exists in the source dictionary
                            if (all_siblings_subscribed_entries[key] === undefined) {
                                all_siblings_subscribed_entries[key] = { 'entry': null };
                            }
                            const subscr = all_siblings_subscribed_entries[key];
                            return {
                                'compute': () => {
                                    if (subscr.entry === null) {
                                        return _ea.panic(`entry not set: ${key}`);
                                    }
                                    return subscr.entry;
                                }
                            };
                        });
                    },
                }),
                'not circular dependent siblings': _ea.set({
                    __get_entry(key) {
                        const status = status_dictionary[key];
                        if (status === undefined) {
                            return source_dictionary.dictionary.__get_entry(key).transform(($) => _ea.set(['resolved', process_entry($.entry, $.location, key)]), () => {
                                return _ea.not_set();
                                // throw new ResolveError("")
                            });
                        }
                        else {
                            const get_keys_of_entries_being_processed = () => {
                                return _ea.build_list(($i) => {
                                    _ea.dictionary_literal(status_dictionary).map(($, key) => {
                                        if ($[0] === 'processing') {
                                            $i['add element'](key);
                                        }
                                    });
                                });
                            };
                            return _ea.cc(status, (s) => {
                                switch (s[0]) {
                                    case 'failed':
                                        return _ea.ss(s, (s) => {
                                            //nothing to report
                                            return _ea.set(['error', ['circular', get_keys_of_entries_being_processed()]]);
                                            //return notSet()
                                        });
                                    case 'processing':
                                        if (key === key_of_entry_being_processed) {
                                            //$se.onError(`'${key}' is referencing itself`)
                                        }
                                        else {
                                            // const keys: string[] = []
                                            // Object.keys(status_dictionary).forEach((key) => {
                                            //     if (status_dictionary[key][0] === 'processing') {
                                            //         keys.push(key)
                                            //     }
                                            // })
                                            //$se.onError(`the following entries are referencing each other: ${keys.join(", ")}`)
                                        }
                                        status_dictionary[key_of_entry_being_processed] = ['failed', null];
                                        return _ea.set(['error', ['circular', get_keys_of_entries_being_processed()]]);
                                    case 'success':
                                        return _ea.set(['resolved', s[1]]);
                                    default: return _ea.au(s[0]);
                                }
                            });
                        }
                    },
                }),
            });
            finished[key_of_entry_being_processed] = entry;
            $i['add element']({
                'key': key_of_entry_being_processed,
                'value': entry,
            });
            status_dictionary[key_of_entry_being_processed] = ['success', entry];
            return entry;
        }
        $.dictionary.map(($, key) => {
            if (status_dictionary[key] === undefined) {
                process_entry($.entry, $.location, key);
            }
        });
        _ea.dictionary_literal(all_siblings_subscribed_entries).map(($, key) => {
            if (finished[key] === undefined) {
                _ea.panic(`implementation error: entry not resolved: ${key}`);
            }
            all_siblings_subscribed_entries[key].entry = finished[key];
        });
    });
    return {
        'dictionary': _ea.dictionary_literal(finished),
        'ordered list': ordered_list,
    };
};
exports.resolve_ordered_dictionary = resolve_ordered_dictionary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvaW1wbGVtZW50YXRpb24vZ2VuZXJpYy9yZXNvbHZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXVDO0FBMERoQyxNQUFNLEtBQUssR0FBRyxDQUFTLFFBQWdCLEVBQUUsSUFBd0IsRUFBRSxrQkFBZ0QsRUFBUyxFQUFFO0lBQ2pJLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FDWixHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2YsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssZUFBZSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDN0UsS0FBSyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2pHLEtBQUsscUJBQXFCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9DLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtvQkFDL0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUN2QixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNsQyxD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