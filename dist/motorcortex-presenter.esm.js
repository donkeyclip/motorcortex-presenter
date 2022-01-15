import { CSSEffect, HTMLClip } from '@donkeyclip/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$o = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$a = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$9 = fails$a; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$8 = fails$a;
var functionBindNative = !fails$8(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;
var call$4 = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var bind = FunctionPrototype$1.bind;
var call$3 = FunctionPrototype$1.call;
var uncurryThis$a = NATIVE_BIND && bind.bind(call$3, call$3);
var functionUncurryThis = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis$a(fn);
} : function (fn) {
  return fn && function () {
    return call$3.apply(fn, arguments);
  };
};

var uncurryThis$9 = functionUncurryThis;
var toString$1 = uncurryThis$9({}.toString);
var stringSlice = uncurryThis$9(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var global$n = global$o;
var uncurryThis$8 = functionUncurryThis;
var fails$7 = fails$a;
var classof$3 = classofRaw$1;
var Object$4 = global$n.Object;
var split = uncurryThis$8(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$7(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$m = global$o;
var TypeError$8 = global$m.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$2 = function (it) {
  if (it == undefined) throw TypeError$8("Can't call method on " + it);
  return it;
};

var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;

var isObject$7 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$l = global$o;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$l[namespace]) : global$l[namespace] && global$l[namespace][method];
};

var uncurryThis$7 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$7({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$k = global$o;
var userAgent = engineUserAgent;
var process = global$k.process;
var Deno = global$k.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$6 = fails$a; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$j = global$o;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$j.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$i = global$o;
var String$2 = global$i.String;

var tryToString$1 = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$h = global$o;
var isCallable$7 = isCallable$b;
var tryToString = tryToString$1;
var TypeError$7 = global$h.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$7(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$g = global$o;
var call$2 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7;
var TypeError$6 = global$g.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2(fn, input))) return val;
  throw TypeError$6("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$f = global$o; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$f, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$f[key] = value;
  }

  return value;
};

var global$e = global$o;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$e[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$d = global$o;
var requireObjectCoercible = requireObjectCoercible$2;
var Object$2 = global$d.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function (argument) {
  return Object$2(requireObjectCoercible(argument));
};

var uncurryThis$6 = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty = uncurryThis$6({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$5 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString = uncurryThis$5(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

var global$c = global$o;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$c.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$b = global$o;
var call$1 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;
var TypeError$5 = global$b.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$5("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$a = global$o;
var isObject$4 = isObject$7;
var document = global$a.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$4(document) && isObject$4(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document.createElement(it) : {};
};

var DESCRIPTORS$5 = descriptors;
var fails$5 = fails$a;
var createElement = documentCreateElement; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$5 && !fails$5(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$4 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$3 = descriptors;
var fails$4 = fails$a; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$3 && fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$9 = global$o;
var isObject$3 = isObject$7;
var String$1 = global$9.String;
var TypeError$4 = global$9.TypeError; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError$4(String$1(argument) + ' is not an object');
};

var global$8 = global$o;
var DESCRIPTORS$2 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$1 = anObject$2;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$3 = global$8.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$2 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$1 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$3 = DESCRIPTORS$1 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var uncurryThis$4 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = uncurryThis$4(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$7 = global$o;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$7.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$6 = global$o;
var uncurryThis$3 = functionUncurryThis;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$6.TypeError;
var WeakMap = global$6.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$3(store.get);
  var wmhas = uncurryThis$3(store.has);
  var wmset = uncurryThis$3(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$5 = global$o;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$3(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$5) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$2 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$2([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }

  return result;
};

var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$1 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat = uncurryThis$1([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$a;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$2(detection) ? fails$3(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$4 = global$o;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$4[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var classof$2 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$2(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$4 = wellKnownSymbol$6;
var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$3 = global$o;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$6;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var Object$1 = global$3.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var uncurryThis = functionUncurryThis;
var fails$2 = fails$a;
var isCallable = isCallable$b;
var classof = classof$1;
var getBuiltIn = getBuiltIn$4;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$2 = global$o;
var isArray$1 = isArray$2;
var isConstructor = isConstructor$1;
var isObject$1 = isObject$7;
var wellKnownSymbol$2 = wellKnownSymbol$6;
var SPECIES$1 = wellKnownSymbol$2('species');
var Array$1 = global$2.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$1 = fails$a;
var wellKnownSymbol$1 = wellKnownSymbol$6;
var V8_VERSION$1 = engineV8Version;
var SPECIES = wellKnownSymbol$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$1(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $ = _export;
var global$1 = global$o;
var fails = fails$a;
var isArray = isArray$2;
var isObject = isObject$7;
var toObject = toObject$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;
var arraySpeciesCreate = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol = wellKnownSymbol$6;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$1.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var Intro = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Intro, _HTMLClip);

  var _super = _createSuper(Intro);

  function Intro() {
    _classCallCheck(this, Intro);

    return _super.apply(this, arguments);
  }

  _createClass(Intro, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = width / 0.6 / lc;

      if (fontsize >= 200 && width === 720) {
        fontsize = 200;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 100;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"wrapper\">\n          <div class=\"container-logo\">\n            <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n            <div class=\"line\"> </div>\n            <div class=\"pro-name\">\n              <span> ").concat(this.attrs.title, "</span>\n            </div>\n          </div>\n          <div class=\"date-container\">\n            <div class=\"logo-comp\"><img src=\"").concat(this.attrs.compLogo, "\"></div>\n            <div class=\"date\">Date : ").concat(this.attrs.date, "</div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background-image: url(").concat(this.attrs.bgUrl, ");\n        background-size: 1270px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor, ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .logo-client img {\n        width : ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .logo-comp img {\n        width : ").concat(this.attrs.compLogoWidth, "px\n      }\n\n      .logo-comp,.date{\n        position: relative;\n        top: 200%;\n      }\n\n      .logo-client{\n        position: relative ;\n        top : -100%;\n      }\n\n      .container-logo{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        flex: 1;\n        overflow: hidden;\n        position: relative;\n      }\n\n      .date-container{\n        display: flex;\n        align-items: flex-end;\n        margin: 2%;\n        justify-content: space-between;\n        width: 90%;\n        position: relative;\n      }\n   \n      .line{\n        border-top: 5px solid ").concat(this.attrs.fontColor, ";\n        width: 100%;\n        position : relative;\n        top: -100%;\n      }\n\n      .pro-name {\n        position : relative;\n        font-size: 50px;\n        overflow: hidden;\n        padding-top: 10%;\n        top: -100%;\n      }\n\n      .date{\n        font-size: 20px;\n      }\n      \n      .wrapper{ \n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var logoIn = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 3000,
        selector: ".logo-client",
        easing: "easeOutQuart"
      });
      var lineIn = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 2500,
        selector: ".line ",
        easing: "easeOutQuart"
      });
      var proIn = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".pro-name ",
        easing: "easeOutQuart"
      });
      var logoCompIn = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "200%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".logo-comp,.date",
        easing: "easeOutQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".bg"
      });
      this.addIncident(logoIn, 0);
      this.addIncident(lineIn, 0);
      this.addIncident(proIn, 0);
      this.addIncident(logoCompIn, 0);
      this.addIncident(bgout, 3000);
    }
  }]);

  return Intro;
}(HTMLClip);

var IntroFade = /*#__PURE__*/function (_HTMLClip) {
  _inherits(IntroFade, _HTMLClip);

  var _super = _createSuper(IntroFade);

  function IntroFade() {
    _classCallCheck(this, IntroFade);

    return _super.apply(this, arguments);
  }

  _createClass(IntroFade, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = width / 0.6 / lc;

      if (fontsize >= 200 && width === 720) {
        fontsize = 200;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 100;
      }

      return fontsize;
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"wrapper\">\n          <div class=\"container-logo\">\n            <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n            <div class=\"pro-name\">\n              <span> ").concat(this.attrs.title, "</span>\n            </div>\n          </div>\n          <div class=\"date-container\">\n            <div class=\"logo-comp\"><img src=\"").concat(this.attrs.compLogo, "\"></div>\n            <div class=\"date\">Date : ").concat(this.attrs.date, "</div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, ";\n        height: ").concat(this.attrs.height, ";\n        position: relative;\n        background-image: url(").concat(this.attrs.bgUrl, ");\n        background-size: 1270px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor, ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .logo-client img {\n        width : ").concat(this.attrs.clientLogoWidth, " ;\n      }\n\n      .logo-comp img {\n        width : ").concat(this.attrs.compLogoWidth, "\n      }\n\n      .container-logo{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        flex: 1 ;\n      }\n\n      .date-container{\n        display: flex;\n        align-items: flex-end;\n        margin: 2%;\n        justify-content: space-between;\n        width: 90%;\n      }\n\n      .pro-name {\n        font-size: 50px;\n        border-top: 5px solid #fff;\n        padding-top: 5%;\n      }\n      .date{\n        font-size: 20px;\n      }\n      \n      .wrapper{ \n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        transform: scale(2);\n        opacity: 0;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var fadeIn = new CSSEffect({
        animatedAttrs: {
          transform: {
            scale: 0.5
          },
          opacity: 1
        },
        initialValues: {
          transform: {
            scale: 2
          },
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".wrapper"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(fadeIn, 0);
      this.addIncident(bgout, 4000);
    }
  }]);

  return IntroFade;
}(HTMLClip);

var SlideOne = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SlideOne, _HTMLClip);

  var _super = _createSuper(SlideOne);

  function SlideOne() {
    _classCallCheck(this, SlideOne);

    return _super.apply(this, arguments);
  }

  _createClass(SlideOne, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"></div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\" >\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n            <p class=\"text2\"> ").concat(this.attrs.textTwo, "</p>\n            <p class=\"text3\" > ").concat(this.attrs.textThree, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\"></div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n        \n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55), "px;\n      }\n\n      .text2{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5), "px;\n      }\n\n      .text3{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5), "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 0;\n        border-left: 5px solid;\n        border-top: 5px solid;\n        border-right: 5px solid;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -21px 25px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        left: 55%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n        \n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var content = new CSSEffect({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeOutCubic"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "100%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(appHolderOut, 4000);
      this.addIncident(borderOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return SlideOne;
}(HTMLClip);

var SlideTwo = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SlideTwo, _HTMLClip);

  var _super = _createSuper(SlideTwo);

  function SlideTwo() {
    _classCallCheck(this, SlideTwo);

    return _super.apply(this, arguments);
  }

  _createClass(SlideTwo, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\" >\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\"></div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 25%;\n        right : 100%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n        width: ").concat(this.attrs.width * 0.55, "px;\n        height: ").concat(this.attrs.height * 0.5, "px;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 10%;\n        left: 100%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 5%;\n        right: 100%;\n        z-index: 0;\n        border-left: 5px solid;\n        border-top: 5px solid;\n        border-left: 5px solid;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 5%;\n        right:-100%;\n        z-index: 2;\n        box-shadow: 22px 25px 23px rgba(0,0,0,0.65);\n        border-right: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        right: 0%;\n        width: ").concat(this.attrs.width * 0.4, "px;\n        display: flex;\n        justify-content: center;\n        \n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var content = new CSSEffect({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new CSSEffect({
        animatedAttrs: {
          right: "5%"
        },
        initialValues: {
          right: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeOutCubic"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "25%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "100%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new CSSEffect({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          right: "120%"
        },
        initialValues: {
          right: "5%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(appHolderOut, 4000);
      this.addIncident(borderOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return SlideTwo;
}(HTMLClip);

var SlideThree = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SlideThree, _HTMLClip);

  var _super = _createSuper(SlideThree);

  function SlideThree() {
    _classCallCheck(this, SlideThree);

    return _super.apply(this, arguments);
  }

  _createClass(SlideThree, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo, _this$attrs3, _this$attrs3$speed;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      (_this$attrs3$speed = (_this$attrs3 = this.attrs).speed) !== null && _this$attrs3$speed !== void 0 ? _this$attrs3$speed : _this$attrs3.speed = 2;
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\">\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\"></div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : -100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 5%;\n        position: relative;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n   \n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 0;\n        border-left: 5px solid;\n        border-top: 5px solid;\n        border-right: 5px solid;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.33, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -23px -4px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n        border-top: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 80%;\n        left: 120%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var content = new CSSEffect({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new CSSEffect({
        animatedAttrs: {
          left: "55%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeOutCubic"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          top: "80%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(appHolderOut, 4000);
      this.addIncident(borderOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return SlideThree;
}(HTMLClip);

var Technologies = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Technologies, _HTMLClip);

  var _super = _createSuper(Technologies);

  function Technologies() {
    _classCallCheck(this, Technologies);

    return _super.apply(this, arguments);
  }

  _createClass(Technologies, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\"> </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .img img{\n        width:80%;\n        -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n        filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      }\n\n      .img{\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n      }\n\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        bottom: 120%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.5, "px;\n        height: 200%;\n        position: absolute;  \n        overflow: hidden;      \n        bottom: -150%;    \n        left: 7%;     \n        z-index: 0;     \n        border-left: 5px solid;     \n        border: 5px solid;    \n        box-shadow: -8px -3px 23px\n        rgba(0,0,0,0.65);   \n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:33%;\n        left:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var html = "";

      for (var i = 0; i < this.attrs.logos.length; i++) {
        html += "<div class=\"img\"><img src=\"".concat(this.attrs.logos[i], "\"/></div>");
      }

      var word = new HTMLClip({
        css: this.css,
        html: "<div class=\"img-container\">".concat(html, "</div>"),
        selector: ".content-container"
      });
      this.addIncident(word, 0);
      var border = new CSSEffect({
        animatedAttrs: {
          bottom: "0%"
        },
        initialValues: {
          bottom: "-150%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeOutCubic"
      });
      var content = new CSSEffect({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new CSSEffect({
        animatedAttrs: {
          left: "60%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeOutCubic"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          bottom: "150%"
        },
        initialValues: {
          bottom: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new CSSEffect({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "60%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(border, 0);
      this.addIncident(content, 0);
      this.addIncident(subtitle, 0);
      this.addIncident(title, 0);
      this.addIncident(borderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(subtitleOut, 4000);
      this.addIncident(titleOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return Technologies;
}(HTMLClip);

var Highlights = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Highlights, _HTMLClip);

  var _super = _createSuper(Highlights);

  function Highlights() {
    _classCallCheck(this, Highlights);

    return _super.apply(this, arguments);
  }

  _createClass(Highlights, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo, _this$attrs3, _this$attrs3$speed;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      (_this$attrs3$speed = (_this$attrs3 = this.attrs).speed) !== null && _this$attrs3$speed !== void 0 ? _this$attrs3$speed : _this$attrs3.speed = 2;
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .app-img{\n        height: 101%;\n        object-fit: cover;\n      }\n\n      .img{\n        object-fit: cover;\n      }\n\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.82, "px;\n        position: absolute;\n        bottom: 120%;\n        right: 7%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: url(").concat(this.attrs.app, ");\n        z-index: 2;\n        transform: skew(-18deg, 0deg) rotateX(6deg);\n        filter: drop-shadow(31px 35px 53px\n        rgb(0, 0, 0));\n        background-size: cover;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.5, "px;\n        height: 200%;\n        position: absolute;  \n        overflow: hidden;      \n        bottom: -150%;    \n        left: 7%;     \n        z-index: 0;     \n        border-left: 5px solid;     \n        border: 5px solid;    \n        box-shadow: -8px -3px 23px\n        rgba(0,0,0,0.65);   \n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder,.title-holder{\n        -ms-transform-origin: 30% 180%;\n        -webkit-transform: rotate(-10deg);\n        -webkit-transform-origin: 30% 180%;\n        transform: rotate(-10deg);\n      }\n      \n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:60%;\n        left:-100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:40%;\n        left: -100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var scroll = 0;
      var border = new CSSEffect({
        animatedAttrs: {
          bottom: "0%"
        },
        initialValues: {
          bottom: "-150%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeOutCubic"
      });
      var content = new CSSEffect({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new CSSEffect({
        animatedAttrs: {
          left: "10%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new CSSEffect({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeOutCubic"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          bottom: "150%"
        },
        initialValues: {
          bottom: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new CSSEffect({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "40%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(border, 0);
      this.addIncident(content, 0);
      this.addIncident(subtitle, 0);
      this.addIncident(title, 0);
      this.addIncident(borderOut, 4000 + scroll);
      this.addIncident(contentOut, 4000 + scroll);
      this.addIncident(subtitleOut, 4000 + scroll);
      this.addIncident(titleOut, 4000 + scroll);
      this.addIncident(bgout, 6000 + scroll);
    }
  }]);

  return Highlights;
}(HTMLClip);

var SlideOneSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SlideOneSVG, _HTMLClip);

  var _super = _createSuper(SlideOneSVG);

  function SlideOneSVG() {
    _classCallCheck(this, SlideOneSVG);

    return _super.apply(this, arguments);
  }

  _createClass(SlideOneSVG, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"></div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\" >\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n            <p class=\"text2\"> ").concat(this.attrs.textTwo, "</p>\n            <p class=\"text3\" > ").concat(this.attrs.textThree, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55), "px;\n      }\n\n      .text2{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5), "px;\n      }\n\n      .text3{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5), "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        top: 15%;\n        left: 10%;\n        z-index: 0;\n        transform: rotate(-90deg);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -21px 25px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        left: 55%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var content = new CSSEffect({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "-10000"
        },
        initialValues: {
          strokeDashoffset: "-5000"
        },
        attrs: {}
      }, {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "100%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(appHolderOut, 4000);
      this.addIncident(borderOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return SlideOneSVG;
}(HTMLClip);

var SlideTwoSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SlideTwoSVG, _HTMLClip);

  var _super = _createSuper(SlideTwoSVG);

  function SlideTwoSVG() {
    _classCallCheck(this, SlideTwoSVG);

    return _super.apply(this, arguments);
  }

  _createClass(SlideTwoSVG, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\">\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 25%;\n        right : 100%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n        width: ").concat(this.attrs.width * 0.55, "px;\n        height: ").concat(this.attrs.height * 0.5, "px;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 10%;\n        left: 100%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        top: 1%;\n        right: 7%;\n        z-index: 0;\n        transform: rotate(-90deg);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 5%;\n        right:-100%;\n        z-index: 2;\n        box-shadow: 22px 25px 23px rgba(0,0,0,0.65);\n        border-right: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        right: 0%;\n        width: ").concat(this.attrs.width * 0.4, "px;\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var content = new CSSEffect({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      }, {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "25%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "100%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new CSSEffect({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          right: "120%"
        },
        initialValues: {
          right: "7%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(appHolderOut, 4000);
      this.addIncident(borderOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return SlideTwoSVG;
}(HTMLClip);

var SlideThreeSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SlideThreeSVG, _HTMLClip);

  var _super = _createSuper(SlideThreeSVG);

  function SlideThreeSVG() {
    _classCallCheck(this, SlideThreeSVG);

    return _super.apply(this, arguments);
  }

  _createClass(SlideThreeSVG, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\">\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : -100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 5%;\n        position: relative;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n   \n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        top: 15%;\n        left: 10%;\n        z-index: 0;\n        transform: rotate(-90deg);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.33, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -23px -4px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n        border-top: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 80%;\n        left: 120%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var content = new CSSEffect({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new CSSEffect({
        animatedAttrs: {
          left: "55%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000"
        },
        attrs: {}
      }, {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          top: "80%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border,.border1",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(appHolderOut, 4000);
      this.addIncident(borderOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return SlideThreeSVG;
}(HTMLClip);

var TechnologiesSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits(TechnologiesSVG, _HTMLClip);

  var _super = _createSuper(TechnologiesSVG);

  function TechnologiesSVG() {
    _classCallCheck(this, TechnologiesSVG);

    return _super.apply(this, arguments);
  }

  _createClass(TechnologiesSVG, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .img img{\n        width:80%;\n        -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n        filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      }\n\n      .img{\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n      }\n\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        bottom: 120%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n      }\n\n      .border{\n        position: absolute;\n        overflow: hidden;\n        left: 7%;\n        z-index: 0;\n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:33%;\n        left:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var html = "";

      for (var i = 0; i < this.attrs.logos.length; i++) {
        html += "<div class=\"img\"><img src=\"".concat(this.attrs.logos[i], "\"/></div>");
      }

      var word = new HTMLClip({
        css: this.css,
        html: "<div class=\"img-container\">".concat(html, "</div>"),
        selector: ".content-container"
      });
      this.addIncident(word, 0);
      var border = new CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      }, {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var content = new CSSEffect({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new CSSEffect({
        animatedAttrs: {
          left: "60%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new CSSEffect({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeOutCubic"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          left: "150%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new CSSEffect({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "60%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(border, 0);
      this.addIncident(content, 0);
      this.addIncident(subtitle, 0);
      this.addIncident(title, 0);
      this.addIncident(borderOut, 4000);
      this.addIncident(contentOut, 4000);
      this.addIncident(subtitleOut, 4000);
      this.addIncident(titleOut, 4000);
      this.addIncident(bgout, 6000);
    }
  }]);

  return TechnologiesSVG;
}(HTMLClip);

var HighlightsSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits(HighlightsSVG, _HTMLClip);

  var _super = _createSuper(HighlightsSVG);

  function HighlightsSVG() {
    _classCallCheck(this, HighlightsSVG);

    return _super.apply(this, arguments);
  }

  _createClass(HighlightsSVG, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = Math.round(width / 0.6 / lc);

      if (fontsize >= 100 && width <= 1270) {
        fontsize = 100;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 60;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "href=\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

      (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
      (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
      return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .app-img{\n        height: 101%;\n        object-fit: cover;\n      }\n     \n      .img{\n        object-fit: cover;\n      }\n     \n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.82, "px;\n        position: absolute;\n        bottom: 120%;\n        right: 7%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: url(").concat(this.attrs.app, ");\n        z-index: 2;\n        transform: skew(-18deg, 0deg) rotateX(6deg);\n        filter: drop-shadow(31px 35px 53px\n        rgb(0, 0, 0));\n        background-size: cover;\n        background-position-y: 0%;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        left: 7%;\n        z-index: 0;\n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder,.title-holder{\n        -ms-transform-origin: 30% 180%;\n        -webkit-transform: rotate(-10deg);\n        -webkit-transform-origin: 30% 180%;\n        transform: rotate(-10deg);\n      }\n\n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:60%;\n        left:-100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:40%;\n        left: -100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }  \n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var scroll = 0;
      var border = new CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      }, {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var content = new CSSEffect({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var appScroll = new CSSEffect({
        animatedAttrs: {
          backgroundPositionY: "100%"
        },
        initialValues: {
          backgroundPositionY: "0%"
        },
        attrs: {}
      }, {
        duration: 4000,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new CSSEffect({
        animatedAttrs: {
          left: "10%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new CSSEffect({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeOutCubic"
      });
      var borderOut = new CSSEffect({
        animatedAttrs: {
          left: "150%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new CSSEffect({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new CSSEffect({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new CSSEffect({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "40%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeInQuart"
      });
      var bgout = new CSSEffect({
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".bg"
      });
      this.addIncident(border, 0);
      this.addIncident(content, 0);
      this.addIncident(subtitle, 0);
      this.addIncident(title, 0);

      if (this.attrs.scroll) {
        this.addIncident(appScroll, 4000);
        scroll = 2000;
      }

      this.addIncident(borderOut, 4000 + scroll);
      this.addIncident(contentOut, 4000 + scroll);
      this.addIncident(subtitleOut, 4000 + scroll);
      this.addIncident(titleOut, 4000 + scroll);
      this.addIncident(bgout, 6000 + scroll);
    }
  }]);

  return HighlightsSVG;
}(HTMLClip);

var _COLOR = "color";
var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var introVal = {
  $$strict: true,
  width: {
    optional: false,
    type: "number",
    units: nu
  },
  height: {
    optional: false,
    type: "number",
    units: nu
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  compLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  title: {
    optional: true,
    type: "string"
  },
  date: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR
    }
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  fontColor: {
    optional: true,
    type: _COLOR
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};
var SlideOneSVGVal = {
  $$strict: true,
  width: {
    optional: false,
    type: "number",
    units: nu
  },
  height: {
    optional: false,
    type: "number",
    units: nu
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: false,
    type: "number",
    units: nu
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  title: {
    optional: true,
    type: "string"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  textOne: {
    optional: false,
    type: "string"
  },
  textTwo: {
    optional: false,
    type: "string"
  },
  textThree: {
    optional: false,
    type: "string"
  },
  contentColor: {
    optional: true,
    type: _COLOR
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR
    }
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  fontColor: {
    optional: true,
    type: _COLOR
  },
  contentTitle: {
    optional: false,
    type: "string"
  },
  app: {
    optional: false,
    type: "string"
  }
};
var SlideTwoVal = {
  $$strict: true,
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  height: {
    optional: true,
    type: "number",
    min: 0
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  title: {
    optional: false,
    type: "string"
  },
  textOne: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR
    }
  },
  fontColor: {
    type: _COLOR
  },
  contentColor: {
    type: _COLOR
  },
  contentTitle: {
    optional: false,
    type: "string"
  },
  fonSize: {
    optional: true,
    type: "number",
    min: 0
  },
  app: {
    optional: false,
    type: "string"
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};
var TechnologiesVal = {
  $$strict: true,
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  height: {
    optional: true,
    type: "number",
    min: 0
  },
  clientLogo: {
    optional: true,
    type: "string"
  },
  clientLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  compLogo: {
    optional: true,
    type: "string"
  },
  title: {
    optional: true,
    type: "string"
  },
  logos: {
    optional: true,
    type: "array",
    items: {
      type: "string"
    }
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR
    }
  },
  fontColor: {
    type: _COLOR
  },
  contentColor: {
    optional: true,
    type: "string"
  },
  contentTitle: {
    optional: true,
    type: "string"
  },
  fonSize: {
    optional: true,
    type: "number",
    min: 0
  },
  contentSubTitle: {
    optional: true,
    type: "string"
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};
var HighlightsVal = {
  $$strict: true,
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  height: {
    optional: true,
    type: "number",
    min: 0
  },
  clientLogo: {
    optional: true,
    type: "string"
  },
  clientLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  compLogo: {
    optional: true,
    type: "string"
  },
  title: {
    optional: true,
    type: "string"
  },
  app: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR
    }
  },
  fontColor: {
    type: _COLOR
  },
  contentColor: {
    type: _COLOR
  },
  contentTitle: {
    optional: true,
    type: "string"
  },
  fonSize: {
    optional: true,
    type: "number",
    min: 0
  },
  contentSubTitle: {
    optional: true,
    type: "string"
  },
  scroll: {
    type: "boolean"
  },
  bgColor: {
    optional: true,
    type: _COLOR
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};

var name = "@donkeyclip/motorcortex-presenter";
var version = "1.1.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: Intro,
    name: "Intro",
    attributesValidationRules: introVal
  }, {
    exportable: IntroFade,
    name: "IntroFade",
    attributesValidationRules: introVal
  }, {
    exportable: SlideOne,
    name: "SlideOne",
    attributesValidationRules: SlideOneSVGVal
  }, {
    exportable: SlideOneSVG,
    name: "SlideOneSVG",
    attributesValidationRules: SlideOneSVGVal
  }, {
    exportable: SlideTwo,
    name: "SlideTwo",
    attributesValidationRules: SlideTwoVal
  }, {
    exportable: SlideTwoSVG,
    name: "SlideTwoSVG",
    attributesValidationRules: SlideTwoVal
  }, {
    exportable: SlideThree,
    name: "SlideThree",
    attributesValidationRules: SlideTwoVal
  }, {
    exportable: SlideThreeSVG,
    name: "SlideThreeSVG",
    attributesValidationRules: SlideTwoVal
  }, {
    exportable: Technologies,
    name: "Technologies",
    attributesValidationRules: TechnologiesVal
  }, {
    exportable: TechnologiesSVG,
    name: "TechnologiesSVG",
    attributesValidationRules: TechnologiesVal
  }, {
    exportable: Highlights,
    name: "Highlights",
    attributesValidationRules: HighlightsVal
  }, {
    exportable: HighlightsSVG,
    name: "HighlightsSVG",
    attributesValidationRules: HighlightsVal
  }]
};

export { index as default };
