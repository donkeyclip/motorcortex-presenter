'use strict';

var MotorCortex = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _inherits$1(subClass, superClass) {
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
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
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

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$b = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$8 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$7 = fails$8; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

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

var toString = {}.toString;

var classofRaw$1 = function (it) {
  return toString.call(it).slice(8, -1);
};

var fails$6 = fails$8;
var classof$3 = classofRaw$1;
var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$6(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$2 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$b = function (argument) {
  return typeof argument === 'function';
};

var isCallable$a = isCallable$b;

var isObject$7 = function (it) {
  return typeof it === 'object' ? it !== null : isCallable$a(it);
};

var global$a = global$b;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
};

var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$9 = global$b;
var userAgent = engineUserAgent;
var process = global$9.process;
var Deno = global$9.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$2;

if (v8) {
  match = v8.split('.');
  version$2 = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$2 = match[1];
  }
}

var engineV8Version = version$2 && +version$2;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$5 = fails$8; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$5(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var isCallable$8 = isCallable$b;
var getBuiltIn$2 = getBuiltIn$4;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && Object(it) instanceof $Symbol;
};

var tryToString$1 = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$7 = isCallable$b;
var tryToString = tryToString$1; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = fn.call(input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$8 = global$b;

var setGlobal$3 = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global$8, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$8[key] = value;
  }

  return value;
};

var global$7 = global$b;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$7[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var requireObjectCoercible = requireObjectCoercible$2; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var toObject$1 = toObject$2;
var hasOwnProperty = {}.hasOwnProperty; // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject$1(it), key);
};

var id = 0;
var postfix = Math.random();

var uid$2 = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var global$6 = global$b;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$6.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};

var global$5 = global$b;
var isObject$4 = isObject$7;
var document$1 = global$5.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$4 = descriptors;
var fails$4 = fails$8;
var createElement = documentCreateElement; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$4 && !fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$3 = descriptors;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

var objectDefineProperty = {};

var isObject$3 = isObject$7; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};

var DESCRIPTORS$2 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$1 = anObject$2;
var toPropertyKey$1 = toPropertyKey$3; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$2 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
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

var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$4 = global$b;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$4.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$3 = global$b;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global$3.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget.call(store, it) || {};
  };

  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
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

var global$2 = global$b;
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

  if (O === global$2) {
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

var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
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
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2; // all object keys, includes non-enumerable and symbols

var ownKeys$2 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys$1 = ownKeys$2;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys$1(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$3 = fails$8;
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

var global$1 = global$b;
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
    target = global$1;
  } else if (STATIC) {
    target = global$1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$1[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
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

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$6;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag'); // ES3 wrong here

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
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var fails$2 = fails$8;
var isCallable = isCallable$b;
var classof = classof$1;
var getBuiltIn = getBuiltIn$4;
var inspectSource = inspectSource$3;
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () {
  /* empty */
});

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  }

  return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
}; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor


var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray$1 = isArray$2;
var isConstructor = isConstructor$1;
var isObject$1 = isObject$7;
var wellKnownSymbol$2 = wellKnownSymbol$6;
var SPECIES$1 = wellKnownSymbol$2('species'); // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$1 = fails$8;
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
var fails = fails$8;
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
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
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
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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
/*
 * anime.js v3.1.5
 * (c) 2021 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

/*
 * anime.js v3.1.2
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults


var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) {
    params = {};
  }

  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path) {
  return {
    el: path,
    svg: getParentSvg(path),
    totalLength: getTotalLength(path),
    deltaCorrections: {
      x: 4,
      y: 5
    }
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;

    var _progress = progress * path.totalLength;

    var l = _progress + offset >= 1 ? _progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = 1; //isPathTargetInsideSVG ? 1 : svg.w / svg.vW;

  var scaleY = 1; //isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  return {
    x: (p.x - svg.x) * scaleX,
    y: (p.y - svg.y) * scaleY,
    angle: Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI
  };
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
anime.path = getPath;
anime.getPathProgress = getPathProgress;
var anime_es = anime;
var transform = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"];
var compositeAttributes = {
  transform: transform
};

function getMatrix2D(win, element) {
  var transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {};
  }

  var values = transform.split("(")[1].split(")")[0].split(",");

  var qrDecompone = function qrDecompone(a) {
    var angle = Math.atan2(a[1], a[0]),
        denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
        denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
        scaleX = Math.sqrt(denom),
        scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
        skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
        skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

var Anime$c = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(Anime, _MotorCortex$Effect);

  var _super = _createSuper(Anime);

  function Anime() {
    _classCallCheck(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(compositeAttributes, this.attributeKey)) {
        var compoAttribute = compositeAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.initialValue[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.initialValue, this.targetValue];
      }

      this.target = anime_es(_objectSpread2(_objectSpread2({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}), options)); // handle first render initial values
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey !== "transform") {
        return anime_es.get(this.element, this.attributeKey);
      }

      var obj = {};
      var transform = compositeAttributes[this.attributeKey];
      var currentTransform = getMatrix2D(this.context.window, this.element);

      for (var i = 0; i < transform.length; i++) {
        obj[transform[i]] = Object.prototype.hasOwnProperty.call(currentTransform, transform[i]) ? currentTransform[transform[i]] : anime_es.get(this.element, transform[i]);
      }

      return obj;
    }
    /**
     * @param {number} f
     */

  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(MotorCortex__default["default"].Effect);
/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/


var MotionPath = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(MotionPath, _MotorCortex$Effect);

  var _super = _createSuper(MotionPath);

  function MotionPath() {
    _classCallCheck(this, MotionPath);

    return _super.apply(this, arguments);
  }

  _createClass(MotionPath, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
      this.calculatedPoints = [];
      var svgEl = this.context.getElements(this.targetValue.pathElement)[0];
      this.path = anime_es.path(svgEl);
      this.isPathTargetInsideSVG = this.element instanceof SVGElement;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var toSet;
      var distance = Math.round(this.path.totalLength / this.pixelsAccuracy * f) * this.pixelsAccuracy;

      if (this.calculatedPoints[distance] !== null && this.calculatedPoints[distance] !== undefined) {
        toSet = this.calculatedPoints[distance];
      } else {
        var position = anime_es.getPathProgress(this.path, distance / this.path.totalLength, this.isPathTargetInsideSVG); // console.log(position);

        toSet = "\n            translateX(".concat(position.x, "px)\n            translateY(").concat(position.y, "px)\n            rotate(").concat(position.angle, "deg)\n        ");
        this.calculatedPoints[distance] = toSet;
      }

      this.element.style.transform = toSet;
    }
  }]);

  return MotionPath;
}(MotorCortex__default["default"].Effect);

var nu$1 = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
var _MEASUREMENT = "measurement";
var _COLOR$1 = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR$1
    },
    backgroundColor: {
      optional: true,
      type: _COLOR$1
    },
    backgroundPosition: {
      optional: true,
      type: "string"
    },
    backgroundSize: {
      optional: true,
      type: "string"
    },
    border: {
      optional: true,
      type: "string"
    },
    borderBottom: {
      optional: true,
      type: "string"
    },
    borderBottomColor: {
      optional: true,
      type: _COLOR$1
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderColor: {
      optional: true,
      type: _COLOR$1
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    borderLeft: {
      optional: true,
      type: "string"
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR$1
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderRight: {
      optional: true,
      type: "string"
    },
    borderRightColor: {
      optional: true,
      type: _COLOR$1
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderTop: {
      optional: true,
      type: "string"
    },
    borderTopColor: {
      optional: true,
      type: _COLOR$1
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    boxShadow: {
      optional: true,
      type: "string"
    },
    caretColor: {
      optional: true,
      type: _COLOR$1
    },
    color: {
      optional: true,
      type: _COLOR$1
    },
    columnCount: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    columnRule: {
      optional: true,
      type: "string"
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR$1
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    columns: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    flex: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexBasis: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    flexGrow: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexShrink: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    font: {
      optional: true,
      type: "string"
    },
    fontSize: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    fontStretch: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"]
    },
    fontWeight: {
      optional: true,
      type: "string"
    },
    gap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    lineClamp: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    lineHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    margin: {
      optional: true,
      type: "string"
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    maskPosition: {
      optional: true,
      type: "string"
    },
    maskSize: {
      optional: true,
      type: "string"
    },
    maxHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1,
      min: 0
    },
    objectPosition: {
      optional: true,
      type: "string"
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    offsetAnchor: {
      optional: true,
      type: "string"
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    offsetPath: {
      optional: true,
      type: "string"
    },
    offsetPosition: {
      optional: true,
      type: "string"
    },
    offsetRotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    opacity: {
      optional: true,
      type: "number",
      min: 0,
      max: 1
    },
    order: {
      optional: true,
      type: "number",
      integer: true
    },
    outline: {
      optional: true,
      type: "string"
    },
    outlineColor: {
      optional: true,
      type: _COLOR$1
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    perspectiveOrigin: {
      optional: true,
      type: "string"
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scale: {
      optional: true,
      type: "number",
      min: 0
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR$1
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string"
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    shapeImageThreshold: {
      optional: true,
      type: "string"
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    shapeOutside: {
      optional: true,
      type: "string"
    },
    tabSize: {
      optional: true,
      type: "string"
    },
    textDecoration: {
      optional: true,
      type: "string"
    },
    textDecorationColor: {
      optional: true,
      type: _COLOR$1
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    textEmphasis: {
      optional: true,
      type: "string"
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR$1
    },
    textFillColor: {
      optional: true,
      type: _COLOR$1
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    textShadow: {
      optional: true,
      type: "string"
    },
    textStroke: {
      optional: true,
      type: "string"
    },
    textStrokeColor: {
      optional: true,
      type: _COLOR$1
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: {
          type: _MEASUREMENT,
          units: nu$1,
          optional: true
        },
        translateY: {
          type: _MEASUREMENT,
          units: nu$1,
          optional: true
        },
        translateZ: {
          type: _MEASUREMENT,
          units: nu$1,
          optional: true
        },
        rotate: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateZ: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        scale: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleX: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleY: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleZ: {
          type: "number",
          min: 0,
          optional: true
        },
        skewX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        skewY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        perspective: {
          type: _MEASUREMENT,
          units: nu$1,
          optional: true
        }
      }
    },
    transformOrigin: {
      optional: true,
      type: "string"
    },
    verticalAlign: {
      optional: true,
      type: "string"
    },
    visibility: {
      optional: true,
      type: "string"
    },
    width: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu$1
    },
    zIndex: {
      optional: true,
      type: "number",
      integer: true
    },
    zoom: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
      min: 0
    }
  },
  transformOrigin: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  },
  visibility: {
    type: "string"
  },
  width: {
    type: _MEASUREMENT,
    units: nu$1
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu$1
  },
  zIndex: {
    type: "number",
    integer: true
  },
  zoom: {
    type: _MEASUREMENT,
    units: ["%"],
    min: 0
  }
};
var name$1 = "@donkeyclip/motorcortex-anime";
var version$1 = "2.1.16";
var index$1 = {
  npm_name: name$1,
  version: version$1,
  incidents: [{
    exportable: Anime$c,
    name: "Anime",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs
    }
  }, {
    exportable: MotionPath,
    name: "MotionPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          positionOn: {
            type: "object",
            props: {
              pathElement: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes: compositeAttributes
};

var Anime$b = MotorCortex.loadPlugin(index$1);

var Intro = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(Intro, _HTMLClip);

  var _super = _createSuper$1(Intro);

  function Intro() {
    _classCallCheck$1(this, Intro);

    return _super.apply(this, arguments);
  }

  _createClass$1(Intro, [{
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
      var logoIn = new Anime$b.Anime({
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
      var lineIn = new Anime$b.Anime({
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
      var proIn = new Anime$b.Anime({
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
      var logoCompIn = new Anime$b.Anime({
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
      var bgout = new Anime$b.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$a = MotorCortex.loadPlugin(index$1);

var IntroFade = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(IntroFade, _HTMLClip);

  var _super = _createSuper$1(IntroFade);

  function IntroFade() {
    _classCallCheck$1(this, IntroFade);

    return _super.apply(this, arguments);
  }

  _createClass$1(IntroFade, [{
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
      var fadeIn = new Anime$a.Anime({
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
      var bgout = new Anime$a.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$9 = MotorCortex.loadPlugin(index$1);

var SlideOne = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(SlideOne, _HTMLClip);

  var _super = _createSuper$1(SlideOne);

  function SlideOne() {
    _classCallCheck$1(this, SlideOne);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideOne, [{
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
      var content = new Anime$9.Anime({
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
      var titleHolder = new Anime$9.Anime({
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
      var appHolder = new Anime$9.Anime({
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
      var border = new Anime$9.Anime({
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
      var contentOut = new Anime$9.Anime({
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
      var titleHolderOut = new Anime$9.Anime({
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
      var appHolderOut = new Anime$9.Anime({
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
      var borderOut = new Anime$9.Anime({
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
      var bgout = new Anime$9.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$8 = MotorCortex.loadPlugin(index$1);

var SlideTwo = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(SlideTwo, _HTMLClip);

  var _super = _createSuper$1(SlideTwo);

  function SlideTwo() {
    _classCallCheck$1(this, SlideTwo);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideTwo, [{
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
      var content = new Anime$8.Anime({
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
      var titleHolder = new Anime$8.Anime({
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
      var appHolder = new Anime$8.Anime({
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
      var border = new Anime$8.Anime({
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
      var contentOut = new Anime$8.Anime({
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
      var titleHolderOut = new Anime$8.Anime({
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
      var appHolderOut = new Anime$8.Anime({
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
      var borderOut = new Anime$8.Anime({
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
      var bgout = new Anime$8.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$7 = MotorCortex.loadPlugin(index$1);

var SlideThree = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(SlideThree, _HTMLClip);

  var _super = _createSuper$1(SlideThree);

  function SlideThree() {
    _classCallCheck$1(this, SlideThree);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideThree, [{
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
      var content = new Anime$7.Anime({
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
      var titleHolder = new Anime$7.Anime({
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
      var appHolder = new Anime$7.Anime({
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
      var border = new Anime$7.Anime({
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
      var contentOut = new Anime$7.Anime({
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
      var titleHolderOut = new Anime$7.Anime({
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
      var appHolderOut = new Anime$7.Anime({
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
      var borderOut = new Anime$7.Anime({
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
      var bgout = new Anime$7.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$6 = MotorCortex.loadPlugin(index$1);

var Technologies = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(Technologies, _HTMLClip);

  var _super = _createSuper$1(Technologies);

  function Technologies() {
    _classCallCheck$1(this, Technologies);

    return _super.apply(this, arguments);
  }

  _createClass$1(Technologies, [{
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

      var word = new MotorCortex.HTMLClip({
        css: this.css,
        html: "<div class=\"img-container\">".concat(html, "</div>"),
        selector: ".content-container"
      });
      this.addIncident(word, 0);
      var border = new Anime$6.Anime({
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
      var content = new Anime$6.Anime({
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
      var subtitle = new Anime$6.Anime({
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
      var title = new Anime$6.Anime({
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
      var borderOut = new Anime$6.Anime({
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
      var contentOut = new Anime$6.Anime({
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
      var subtitleOut = new Anime$6.Anime({
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
      var titleOut = new Anime$6.Anime({
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
      var bgout = new Anime$6.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$5 = MotorCortex.loadPlugin(index$1);

var Highlights = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(Highlights, _HTMLClip);

  var _super = _createSuper$1(Highlights);

  function Highlights() {
    _classCallCheck$1(this, Highlights);

    return _super.apply(this, arguments);
  }

  _createClass$1(Highlights, [{
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

      this.attrs.bgUrl = this.attrs.bgUrl;
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
      var border = new Anime$5.Anime({
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
      var content = new Anime$5.Anime({
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
      var subtitle = new Anime$5.Anime({
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
      var title = new Anime$5.Anime({
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
      var borderOut = new Anime$5.Anime({
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
      var contentOut = new Anime$5.Anime({
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
      var subtitleOut = new Anime$5.Anime({
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
      var titleOut = new Anime$5.Anime({
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
      var bgout = new Anime$5.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$4 = MotorCortex.loadPlugin(index$1);

var SlideOneSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(SlideOneSVG, _HTMLClip);

  var _super = _createSuper$1(SlideOneSVG);

  function SlideOneSVG() {
    _classCallCheck$1(this, SlideOneSVG);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideOneSVG, [{
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
      var content = new Anime$4.Anime({
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
      var titleHolder = new Anime$4.Anime({
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
      var appHolder = new Anime$4.Anime({
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
      var border = new Anime$4.Anime({
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
      var contentOut = new Anime$4.Anime({
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
      var titleHolderOut = new Anime$4.Anime({
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
      var appHolderOut = new Anime$4.Anime({
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
      var borderOut = new Anime$4.Anime({
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
      var bgout = new Anime$4.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$3 = MotorCortex.loadPlugin(index$1);

var SlideTwoSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(SlideTwoSVG, _HTMLClip);

  var _super = _createSuper$1(SlideTwoSVG);

  function SlideTwoSVG() {
    _classCallCheck$1(this, SlideTwoSVG);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideTwoSVG, [{
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
      var content = new Anime$3.Anime({
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
      var titleHolder = new Anime$3.Anime({
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
      var appHolder = new Anime$3.Anime({
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
      var border = new Anime$3.Anime({
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
      var contentOut = new Anime$3.Anime({
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
      var titleHolderOut = new Anime$3.Anime({
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
      var appHolderOut = new Anime$3.Anime({
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
      var borderOut = new Anime$3.Anime({
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
      var bgout = new Anime$3.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$2 = MotorCortex.loadPlugin(index$1);

var SlideThreeSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(SlideThreeSVG, _HTMLClip);

  var _super = _createSuper$1(SlideThreeSVG);

  function SlideThreeSVG() {
    _classCallCheck$1(this, SlideThreeSVG);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideThreeSVG, [{
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
      var content = new Anime$2.Anime({
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
      var titleHolder = new Anime$2.Anime({
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
      var appHolder = new Anime$2.Anime({
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
      var border = new Anime$2.Anime({
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
      var contentOut = new Anime$2.Anime({
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
      var titleHolderOut = new Anime$2.Anime({
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
      var appHolderOut = new Anime$2.Anime({
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
      var borderOut = new Anime$2.Anime({
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
      var bgout = new Anime$2.Anime({
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
}(MotorCortex.HTMLClip);

var Anime$1 = MotorCortex.loadPlugin(index$1);

var TechnologiesSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(TechnologiesSVG, _HTMLClip);

  var _super = _createSuper$1(TechnologiesSVG);

  function TechnologiesSVG() {
    _classCallCheck$1(this, TechnologiesSVG);

    return _super.apply(this, arguments);
  }

  _createClass$1(TechnologiesSVG, [{
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

      var word = new MotorCortex.HTMLClip({
        css: this.css,
        html: "<div class=\"img-container\">".concat(html, "</div>"),
        selector: ".content-container"
      });
      this.addIncident(word, 0);
      var border = new Anime$1.Anime({
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
      var content = new Anime$1.Anime({
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
      var subtitle = new Anime$1.Anime({
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
      var title = new Anime$1.Anime({
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
      var borderOut = new Anime$1.Anime({
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
      var contentOut = new Anime$1.Anime({
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
      var subtitleOut = new Anime$1.Anime({
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
      var titleOut = new Anime$1.Anime({
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
      var bgout = new Anime$1.Anime({
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
}(MotorCortex.HTMLClip);

var Anime = MotorCortex.loadPlugin(index$1);

var HighlightsSVG = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(HighlightsSVG, _HTMLClip);

  var _super = _createSuper$1(HighlightsSVG);

  function HighlightsSVG() {
    _classCallCheck$1(this, HighlightsSVG);

    return _super.apply(this, arguments);
  }

  _createClass$1(HighlightsSVG, [{
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
      var border = new Anime.Anime({
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
      var content = new Anime.Anime({
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
      var appScroll = new Anime.Anime({
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
      var subtitle = new Anime.Anime({
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
      var title = new Anime.Anime({
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
      var borderOut = new Anime.Anime({
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
      var contentOut = new Anime.Anime({
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
      var subtitleOut = new Anime.Anime({
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
      var titleOut = new Anime.Anime({
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
      var bgout = new Anime.Anime({
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
}(MotorCortex.HTMLClip);

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
var version = "1.0.11";

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

module.exports = index;
