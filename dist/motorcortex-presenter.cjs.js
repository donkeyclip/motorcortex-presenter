'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MotorCortex = require('@kissmybutton/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

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
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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

function _defineProperty$1(obj, key, value) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
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
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  return function () {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (_isNativeReflectConstruct$1()) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}
/*
 * anime.js v3.1.4
 * (c) 2020 Julian Garnier
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
  var promise = makePromise(instance);

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
          var a = strings[s];
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
          promise = makePromise(instance);
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
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
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

var Anime = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits$1(Anime, _MotorCortex$Effect);

  var _super = _createSuper$1(Anime);

  function Anime() {
    _classCallCheck$1(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass$1(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(compositeAttributes, this.attributeKey)) {
        var compoAttribute = compositeAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.getInitialValue()[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
      }

      this.target = anime_es(_objectSpread2({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}, {}, options)); // handle first render initial values
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey === "transform") {
        var obj = {};
        var transform = compositeAttributes[this.attributeKey];
        var currentTransform = getMatrix2D(this.context.window, this.element);

        for (var i = 0; i < transform.length; i++) {
          if (Object.prototype.hasOwnProperty.call(currentTransform, transform[i])) {
            obj[transform[i]] = currentTransform[transform[i]];
          } else {
            obj[transform[i]] = anime_es.get(this.element, transform[i]);
          }
        }

        return obj;
      }

      return anime_es.get(this.element, this.attributeKey);
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
}(MotorCortex__default['default'].Effect);
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
  _inherits$1(MotionPath, _MotorCortex$Effect);

  var _super = _createSuper$1(MotionPath);

  function MotionPath() {
    _classCallCheck$1(this, MotionPath);

    return _super.apply(this, arguments);
  }

  _createClass$1(MotionPath, [{
    key: "onGetContext",
    value: function onGetContext() {
      var svgEl = this.context.getElements(this.targetValue.pathElement)[0];
      this.path = anime_es.path(svgEl);
      this.isPathTargetInsideSVG = this.element instanceof SVGElement;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var position = anime_es.getPathProgress(this.path, f, this.isPathTargetInsideSVG); // console.log(position);

      var toSet = "\n            translateX(".concat(position.x, "px) \n            translateY(").concat(position.y, "px) \n            rotate(").concat(position.angle, "deg)\n        ");
      this.element.style.transform = toSet;
    }
  }]);

  return MotionPath;
}(MotorCortex__default['default'].Effect);

var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
var _MEASUREMENT = "measurement";
var _COLOR = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR
    },
    backgroundColor: {
      optional: true,
      type: _COLOR
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
      type: _COLOR
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderColor: {
      optional: true,
      type: _COLOR
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderLeft: {
      optional: true,
      type: "string"
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRight: {
      optional: true,
      type: "string"
    },
    borderRightColor: {
      optional: true,
      type: _COLOR
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTop: {
      optional: true,
      type: "string"
    },
    borderTopColor: {
      optional: true,
      type: _COLOR
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    boxShadow: {
      optional: true,
      type: "string"
    },
    caretColor: {
      optional: true,
      type: _COLOR
    },
    color: {
      optional: true,
      type: _COLOR
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
      units: nu
    },
    columnRule: {
      optional: true,
      type: "string"
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
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
      units: nu
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
      units: nu
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
      units: nu
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
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
      units: nu
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
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
      units: nu,
      min: 0
    },
    margin: {
      optional: true,
      type: "string"
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
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
      units: nu,
      min: 0
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    objectPosition: {
      optional: true,
      type: "string"
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetAnchor: {
      optional: true,
      type: "string"
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
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
      type: _COLOR
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspectiveOrigin: {
      optional: true,
      type: "string"
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scale: {
      optional: true,
      type: "number",
      min: 0
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string"
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeImageThreshold: {
      optional: true,
      type: "string"
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
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
      type: _COLOR
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textEmphasis: {
      optional: true,
      type: "string"
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR
    },
    textFillColor: {
      optional: true,
      type: _COLOR
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
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
      type: _COLOR
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateY: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateZ: {
          type: _MEASUREMENT,
          units: nu,
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
          units: nu,
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
      units: nu
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
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
    units: nu
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu
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
var index = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
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

var Anime$1 = MotorCortex__default['default'].loadPlugin(index);

var Intro = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Intro, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var logoIn = new Anime$1.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".logo-client",
        easing: "easeOutQuart"
      });
      var lineIn = new Anime$1.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1250 * this.attrs.speed,
        selector: ".line ",
        easing: "easeOutQuart"
      });
      var proIn = new Anime$1.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".pro-name ",
        easing: "easeOutQuart"
      });
      var logoCompIn = new Anime$1.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "200%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".logo-comp,.date",
        easing: "easeOutQuart"
      }); //

      var bgout = new Anime$1.Anime({
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
      this.addIncident(bgout, 1500 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"wrapper\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n      <div class=\"date-container\">\n        <div class=\"logo-comp\"><img src=\"").concat(this.attrs.compLogo, "\"></div>\n        <div class=\"date\">Date : ").concat(this.attrs.date, "</div>\n      </div>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl, ");\n      background-size: 1270px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n\n    .logo-client img {\n      width : ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .logo-comp img {\n      width : ").concat(this.attrs.compLogoWidth, "px\n    }\n\n    .logo-comp,.date{\n      position: relative;\n      top: 200%;\n    }\n\n    .logo-client{\n      position: relative ;\n      top : -100%;\n    }\n\n    .container-logo{\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      flex: 1;\n      overflow: hidden;\n      position: relative;\n    }\n\n    .date-container{\n      display: flex;\n      align-items: flex-end;\n      margin: 2%;\n      justify-content: space-between;\n      width: 90%;\n      position: relative;\n    }\n \n    .line{\n      border-top: 5px solid ").concat(this.attrs.fontColor, ";\n      width: 100%;\n      position : relative;\n      top: -100%;\n    }\n\n    .pro-name {\n      position : relative;\n      font-size: 50px;\n      overflow: hidden;\n      padding-top: 10%;\n      top: -100%;\n    }\n    .date{\n      font-size: 20px;\n    }\n    \n  \n\n    .wrapper{ \n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n\n    }\n\n  \n  ");
    }
  }]);

  return Intro;
}(MotorCortex__default['default'].HTMLClip);

var Intro_1 = Intro;

var Anime$2 = MotorCortex__default['default'].loadPlugin(index);

var IntroFade = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(IntroFade, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var fadeIn = new Anime$2.Anime({
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
      this.addIncident(fadeIn, 0);
      this.addIncident(bgout, 2000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"wrapper\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n      <div class=\"date-container\">\n        <div class=\"logo-comp\"><img src=\"").concat(this.attrs.compLogo, "\"></div>\n        <div class=\"date\">Date : ").concat(this.attrs.date, "</div>\n      </div>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, ";\n      height: ").concat(this.attrs.height, ";\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl, ");\n      background-size: 1270px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n\n    .logo-client img {\n      width : ").concat(this.attrs.clientLogoWidth, " ;\n    }\n\n    .logo-comp img {\n      width : ").concat(this.attrs.compLogoWidth, "\n    }\n\n    .container-logo{\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      flex: 1 ;\n    }\n\n    .date-container{\n      display: flex;\n      align-items: flex-end;\n      margin: 2%;\n      justify-content: space-between;\n      width: 90%;\n    }\n\n    .pro-name {\n      font-size: 50px;\n      border-top: 5px solid #fff;\n      padding-top: 5%;\n    }\n    .date{\n      font-size: 20px;\n    }\n    \n    \n    .wrapper{ \n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      transform: scale(2);\n      opacity: 0;\n    }\n\n  \n  ");
    }
  }]);

  return IntroFade;
}(MotorCortex__default['default'].HTMLClip);

var IntroFade_1 = IntroFade;

var Anime$3 = MotorCortex__default['default'].loadPlugin(index);

var SlideOne = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideOne, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var content = new Anime$3.Anime({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new Anime$3.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new Anime$3.Anime({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
        easing: "easeOutCubic"
      });
      var contentOut = new Anime$3.Anime({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new Anime$3.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new Anime$3.Anime({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
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
      this.addIncident(titleHolderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(appHolderOut, 2000 * this.attrs.speed);
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 3000 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n        <div class= \"content-wrapper\" >\n          <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          <p class=\"text2\"> ").concat(this.attrs.textTwo, "</p>\n          <p class=\"text3\" > ").concat(this.attrs.textThree, "</p>\n        </div>\n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"app-holder\">\n      </div>\n\n      <div class=\"border\">\n      </div>\n\n      <div class=\"border1\">\n      </div>\n\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.65, "px;\n      height: ").concat(this.attrs.height * 0.6, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      top : 100%;\n      left : 5%;\n      display:flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .content-wrapper{\n      margin: 0;\n      position: relative;\n      \n    }\n    p{\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 200;\n    }\n    .text1{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55), "px;\n    }\n\n    .text2{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5), "px;\n    }\n\n    .text3{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5), "px;\n    }\n\n    .app-holder{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 40%;\n      z-index: 1;\n      background: url(").concat(this.attrs.app, ");\n      background-size: cover;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n    }\n  \n    .border{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 7%;\n      z-index: 0;\n      border-left: 5px solid;\n      border-top: 5px solid;\n      border-right: 5px solid;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n    .border1{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 7%;\n      z-index: 2;\n      box-shadow: -21px 25px 23px rgba(0,0,0,0.65);\n      border-left: 5px solid;\n    }\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top: 100%;\n      left: 55%;\n      width: ").concat(this.attrs.width * 0.3, "px;\n      display: flex;\n      justify-content: center;\n      \n    }\n\n\n  ");
    }
  }]);

  return SlideOne;
}(MotorCortex__default['default'].HTMLClip);

var SlideOne_1 = SlideOne;

var Anime$4 = MotorCortex__default['default'].loadPlugin(index);

var SlideTwo = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideTwo, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var content = new Anime$4.Anime({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new Anime$4.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new Anime$4.Anime({
        animatedAttrs: {
          right: "5%"
        },
        initialValues: {
          right: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
        easing: "easeOutCubic"
      });
      var contentOut = new Anime$4.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "25%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new Anime$4.Anime({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new Anime$4.Anime({
        animatedAttrs: {
          right: "120%"
        },
        initialValues: {
          right: "5%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
      this.addIncident(titleHolderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(appHolderOut, 2000 * this.attrs.speed);
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 3000 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n        <div class= \"content-wrapper\" >\n          <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n        </div>\n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"app-holder\">\n      </div>\n\n      <div class=\"border\">\n      </div>\n\n      <div class=\"border1\">\n      </div>\n\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.65, "px;\n      height: ").concat(this.attrs.height * 0.6, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      top : 25%;\n      right : 100%;\n      display:flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .content-wrapper{\n      margin: 0;\n      position: relative;\n      width: ").concat(this.attrs.width * 0.55, "px;\n      height: ").concat(this.attrs.height * 0.5, "px;\n    }\n    p{\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 200;\n    }\n    .text1{\n    font-size: ").concat(this.attrs.fonSize, "px;\n    }\n\n\n    .app-holder{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 10%;\n      left: 100%;\n      z-index: 1;\n      background: url(").concat(this.attrs.app, ");\n      background-size: cover;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n    }\n  \n    .border{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 5%;\n      right: 100%;\n      z-index: 0;\n      border-left: 5px solid;\n      border-top: 5px solid;\n      border-left: 5px solid;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n    .border1{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 5%;\n      right:-100%;\n      z-index: 2;\n      box-shadow: 22px 25px 23px rgba(0,0,0,0.65);\n      border-right: 5px solid;\n    }\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top: 100%;\n      right: 0%;\n      width: ").concat(this.attrs.width * 0.4, "px;\n      display: flex;\n      justify-content: center;\n      \n    }\n\n\n  ");
    }
  }]);

  return SlideTwo;
}(MotorCortex__default['default'].HTMLClip);

var SlideTwo_1 = SlideTwo;

var Anime$5 = MotorCortex__default['default'].loadPlugin(index);

var SlideThree = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideThree, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var content = new Anime$5.Anime({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new Anime$5.Anime({
        animatedAttrs: {
          left: "55%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new Anime$5.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new Anime$5.Anime({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
        easing: "easeOutCubic"
      });
      var contentOut = new Anime$5.Anime({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new Anime$5.Anime({
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          top: "80%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new Anime$5.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new Anime$5.Anime({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
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
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(appHolderOut, 2000 * this.attrs.speed);
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 3000 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n        <div class= \"content-wrapper\" >\n          <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n        </div>\n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"app-holder\">\n      </div>\n\n      <div class=\"border\">\n      </div>\n\n      <div class=\"border1\">\n      </div>\n\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.65, "px;\n      height: ").concat(this.attrs.height * 0.6, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      top : -100%;\n      left : 5%;\n      display:flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .content-wrapper{\n      margin: 5%;\n      position: relative;\n      \n    }\n    p{\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 200;\n    }\n \n    .text1{\n      font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n    .app-holder{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 40%;\n      z-index: 1;\n      background: url(").concat(this.attrs.app, ");\n      background-size: cover;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n    }\n  \n    .border{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 7%;\n      z-index: 0;\n      border-left: 5px solid;\n      border-top: 5px solid;\n      border-right: 5px solid;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n    .border1{\n      width: ").concat(this.attrs.width * 0.33, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 7%;\n      z-index: 2;\n      box-shadow: -23px -4px 23px rgba(0,0,0,0.65);\n      border-left: 5px solid;\n      border-top: 5px solid;\n    }\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top: 80%;\n      left: 120%;\n      width: ").concat(this.attrs.width * 0.3, "px;\n      display: flex;\n      justify-content: center;\n      \n    }\n\n  ");
    }
  }]);

  return SlideThree;
}(MotorCortex__default['default'].HTMLClip);

var SlideThree_1 = SlideThree;

var Anime$6 = MotorCortex__default['default'].loadPlugin(index);

var Technologies = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Technologies, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var html3 = "";

      for (var i = 0; i < this.attrs.logos.length; i++) {
        var html = "<div class=\"img\"> <img src=\"".concat(this.attrs.logos[i], "\" /></div>");
        html3 = html3 + html;
      }

      var word = new MotorCortex__default['default'].HTMLClip({
        css: this.css,
        html: "<div class=\"img-container\"> ".concat(html3, " </div>"),
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
        easing: "easeOutCubic"
      }); // out

      var borderOut = new Anime$6.Anime({
        animatedAttrs: {
          bottom: "150%"
        },
        initialValues: {
          bottom: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(subtitleOut, 2000 * this.attrs.speed);
      this.addIncident(titleOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 6000 * this.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n   \n        \n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"subtitle-holder\">\n        <span> ").concat(this.attrs.contentSubTitle, "</span>\n      </div>\n      <div class=\"border\"> </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .img img{\n      width:80%;\n      -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n    }\n\n    .img{\n      display:flex;\n          justify-content: center;\n          align-content: center;\n          align-items: center;\n    }\n\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      bottom: 120%;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .img-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n\n    }\n  \n    .border{\n      width: ").concat(this.attrs.width * 0.5, "px;\n      height: 200%;\n      position: absolute;  \n      overflow: hidden;      \n      bottom: -150%;    \n      left: 7%;     \n      z-index: 0;     \n      border-left: 5px solid;     \n      border: 5px solid;    \n      box-shadow: -8px -3px 23px\n      rgba(0,0,0,0.65);   \n      -ms-transform: rotate(-45deg);     \n      -ms-transform-origin: 20% 40%;  \n      -webkit-transform: rotate(-45deg); \n      -webkit-transform-origin: 69% 83%;\n      transform: rotate(79deg);\n    }\n\n    \n\n    .subtitle-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: #c10000;\n      z-index: 3;\n      text-transform: uppercase;\n      box-shadow: -20px 9px 44px rgb(0, 0, 0);\n      position: absolute;\n      top:33%;\n      left:120%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.2, "px;\n      height: ").concat(this.attrs.height * 0.15, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top:120%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.2, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n  ");
    }
  }]);

  return Technologies;
}(MotorCortex__default['default'].HTMLClip);

var Technologies_1 = Technologies;

var Anime$7 = MotorCortex__default['default'].loadPlugin(index);

var HighlightsSVG = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(HighlightsSVG, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var scroll = 0;
      var border = new Anime$7.Anime({
        animatedAttrs: {
          bottom: "0%"
        },
        initialValues: {
          bottom: "-150%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border",
        easing: "easeOutCubic"
      });
      var content = new Anime$7.Anime({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new Anime$7.Anime({
        animatedAttrs: {
          left: "10%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new Anime$7.Anime({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
        easing: "easeOutCubic"
      });
      var borderOut = new Anime$7.Anime({
        animatedAttrs: {
          bottom: "150%"
        },
        initialValues: {
          bottom: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new Anime$7.Anime({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new Anime$7.Anime({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new Anime$7.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "40%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
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
      this.addIncident(border, 0);
      this.addIncident(content, 0);
      this.addIncident(subtitle, 0);
      this.addIncident(title, 0); // where is appScroll is not defined ??
      // if (this.attrs.scroll) {
      //   this.addIncident(appScroll, 2000 * this.attrs.speed);
      //   scroll = 2000;
      // }

      this.addIncident(borderOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(contentOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(subtitleOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(titleOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(bgout, 3000 * this.attrs.speed + scroll);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n       \n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"subtitle-holder\">\n        <span> ").concat(this.attrs.contentSubTitle, "</span>\n      </div>\n      <div class=\"border\"> </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .app-img{\n      height: 101%;\n      object-fit: cover;\n    }\n\n    .img{\n      object-fit: cover;\n    }\n\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.82, "px;\n      position: absolute;\n      bottom: 120%;\n      right: 7%;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n      background: url(").concat(this.attrs.app, ");\n      z-index: 2;\n      transform: skew(-18deg, 0deg) rotateX(6deg);\n      filter: drop-shadow(31px 35px 53px\n      rgb(0, 0, 0));\n      background-size: cover;\n    }\n\n    .img-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n\n    }\n  \n    .border{\n      width: ").concat(this.attrs.width * 0.5, "px;\n      height: 200%;\n      position: absolute;  \n      overflow: hidden;      \n      bottom: -150%;    \n      left: 7%;     \n      z-index: 0;     \n      border-left: 5px solid;     \n      border: 5px solid;    \n      box-shadow: -8px -3px 23px\n      rgba(0,0,0,0.65);   \n      -ms-transform: rotate(-45deg);     \n      -ms-transform-origin: 20% 40%;  \n      -webkit-transform: rotate(-45deg); \n      -webkit-transform-origin: 69% 83%;\n      transform: rotate(79deg);\n    }\n\n\n    .subtitle-holder,.title-holder{\n      -ms-transform-origin: 30% 180%;\n      -webkit-transform: rotate(-10deg);\n      -webkit-transform-origin: 30% 180%;\n      transform: rotate(-10deg);\n    }\n    \n\n    .subtitle-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: #c10000;\n      z-index: 3;\n      text-transform: uppercase;\n      box-shadow: -20px 9px 44px rgb(0, 0, 0);\n      position: absolute;\n      top:60%;\n      left:-100%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.2, "px;\n      height: ").concat(this.attrs.height * 0.15, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top:40%;\n      left: -100%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.2, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n  ");
    }
  }]);

  return HighlightsSVG;
}(MotorCortex__default['default'].HTMLClip);

var Highlights = HighlightsSVG;

var Anime$8 = MotorCortex__default['default'].loadPlugin(index);

var SlideOneSVG = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideOneSVG, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    //stroke-dasharray: 1120;
    value: function buildTree() {
      var content = new Anime$8.Anime({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new Anime$8.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new Anime$8.Anime({
        animatedAttrs: {
          strokeDashoffset: "-10000"
        },
        initialValues: {
          strokeDashoffset: "-5000"
        },
        attrs: {}
      }, {
        duration: 2500 * this.attrs.speed,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var contentOut = new Anime$8.Anime({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new Anime$8.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new Anime$8.Anime({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
      this.addIncident(titleHolderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(appHolderOut, 2000 * this.attrs.speed);
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 3000 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n        <div class= \"content-wrapper\" >\n          <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          <p class=\"text2\"> ").concat(this.attrs.textTwo, "</p>\n          <p class=\"text3\" > ").concat(this.attrs.textThree, "</p>\n        </div>\n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"app-holder\">\n      </div>\n\n      <div class=\"border\">\n      <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n      </svg>\n      </div>\n\n      <div class=\"border1\">\n        \n      </div>\n\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.65, "px;\n      height: ").concat(this.attrs.height * 0.6, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      top : 100%;\n      left : 5%;\n      display:flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .content-wrapper{\n      margin: 0;\n      position: relative;\n      \n    }\n    p{\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 200;\n    }\n    .text1{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55), "px;\n    }\n\n    .text2{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5), "px;\n    }\n\n    .text3{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5), "px;\n    }\n\n    .app-holder{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 40%;\n      z-index: 1;\n      background: url(").concat(this.attrs.app, ");\n      background-size: cover;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n    }\n  \n    .border{\n      \n      position: absolute;\n      overflow: hidden;\n      top: 15%;\n      left: 10%;\n      z-index: 0;\n      transform: rotate(-90deg);\n    }\n\n    .border1{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 7%;\n      z-index: 2;\n      box-shadow: -21px 25px 23px rgba(0,0,0,0.65);\n      border-left: 5px solid;\n    }\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top: 100%;\n      left: 55%;\n      width: ").concat(this.attrs.width * 0.3, "px;\n      display: flex;\n      justify-content: center;\n      \n    }\n\n    .svg-wrapper {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%);\n      margin: 0 auto;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n    }\n    \n    .shape2 {\n      stroke-dasharray: 5000;\n      stroke-width: 10px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.fontColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -5000;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n\n  ");
    }
  }]);

  return SlideOneSVG;
}(MotorCortex__default['default'].HTMLClip);

var SlideOneSVG_1 = SlideOneSVG;

var Anime$9 = MotorCortex__default['default'].loadPlugin(index);

var SlideTwoSVG = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideTwoSVG, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var content = new Anime$9.Anime({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new Anime$9.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new Anime$9.Anime({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      }, {
        duration: 2500 * this.attrs.speed,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var contentOut = new Anime$9.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "25%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new Anime$9.Anime({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new Anime$9.Anime({
        animatedAttrs: {
          right: "120%"
        },
        initialValues: {
          right: "7%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border",
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
      this.addIncident(titleHolderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(appHolderOut, 2000 * this.attrs.speed);
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 3000 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n        <div class= \"content-wrapper\" >\n          <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n        </div>\n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"app-holder\">\n      </div>\n\n      <div class=\"border\">\n        <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n        </svg>\n      </div>\n\n      <div class=\"border1\">\n      </div>\n\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.65, "px;\n      height: ").concat(this.attrs.height * 0.6, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      top : 25%;\n      right : 100%;\n      display:flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .content-wrapper{\n      margin: 0;\n      position: relative;\n      width: ").concat(this.attrs.width * 0.55, "px;\n      height: ").concat(this.attrs.height * 0.5, "px;\n    }\n    p{\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 200;\n    }\n    .text1{\n    font-size: ").concat(this.attrs.fonSize, "px;\n    }\n\n\n    .app-holder{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 10%;\n      left: 100%;\n      z-index: 1;\n      background: url(").concat(this.attrs.app, ");\n      background-size: cover;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n    }\n  \n    .border{\n      position: absolute;\n      overflow: hidden;\n      top: 1%;\n      right: 7%;\n      z-index: 0;\n      transform: rotate(-90deg);\n    }\n\n    .border1{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 5%;\n      right:-100%;\n      z-index: 2;\n      box-shadow: 22px 25px 23px rgba(0,0,0,0.65);\n      border-right: 5px solid;\n    }\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top: 100%;\n      right: 0%;\n      width: ").concat(this.attrs.width * 0.4, "px;\n      display: flex;\n      justify-content: center;\n      \n    }\n\n\n    .svg-wrapper {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%);\n      margin: 0 auto;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n    }\n    \n    .shape2 {\n      stroke-dasharray: 5000;\n      stroke-width: 10px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.fontColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -5000;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n\n  ");
    }
  }]);

  return SlideTwoSVG;
}(MotorCortex__default['default'].HTMLClip);

var SlideTwoSVG_1 = SlideTwoSVG;

var Anime$a = MotorCortex__default['default'].loadPlugin(index);

var SlideThreeSVG = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideThreeSVG, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var content = new Anime$a.Anime({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeOutCubic"
      });
      var titleHolder = new Anime$a.Anime({
        animatedAttrs: {
          left: "55%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      });
      var appHolder = new Anime$a.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      });
      var border = new Anime$a.Anime({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000"
        },
        attrs: {}
      }, {
        duration: 2500 * this.attrs.speed,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var contentOut = new Anime$a.Anime({
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeInQuart"
      });
      var titleHolderOut = new Anime$a.Anime({
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          top: "80%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      });
      var appHolderOut = new Anime$a.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      });
      var borderOut = new Anime$a.Anime({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
        easing: "easeInQuart"
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
      this.addIncident(titleHolder, 500);
      this.addIncident(content, 1000);
      this.addIncident(appHolder, 0);
      this.addIncident(border, 250);
      this.addIncident(titleHolderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(appHolderOut, 2000 * this.attrs.speed);
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 3000 * this.attrs.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n        <div class= \"content-wrapper\" >\n          <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n        </div>\n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"app-holder\">\n      </div>\n\n      <div class=\"border\">\n      <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n      </svg>\n      </div>\n\n      <div class=\"border1\">\n      </div>\n\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.65, "px;\n      height: ").concat(this.attrs.height * 0.6, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      top : -100%;\n      left : 5%;\n      display:flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .content-wrapper{\n      margin: 5%;\n      position: relative;\n      \n    }\n    p{\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 200;\n    }\n \n    .text1{\n      font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n    .app-holder{\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 40%;\n      z-index: 1;\n      background: url(").concat(this.attrs.app, ");\n      background-size: cover;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n    }\n  \n    .border{\n      position: absolute;\n      overflow: hidden;\n      top: 15%;\n      left: 10%;\n      z-index: 0;\n      transform: rotate(-90deg);\n    }\n\n    .border1{\n      width: ").concat(this.attrs.width * 0.33, "px;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      top: 100%;\n      left: 7%;\n      z-index: 2;\n      box-shadow: -23px -4px 23px rgba(0,0,0,0.65);\n      border-left: 5px solid;\n      border-top: 5px solid;\n    }\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top: 80%;\n      left: 120%;\n      width: ").concat(this.attrs.width * 0.3, "px;\n      display: flex;\n      justify-content: center;\n    }\n\n\n    .svg-wrapper {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%);\n      margin: 0 auto;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n    }\n    \n    .shape2 {\n      stroke-dasharray: 5000;\n      stroke-width: 10px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.fontColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -5000;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n\n\n  ");
    }
  }]);

  return SlideThreeSVG;
}(MotorCortex__default['default'].HTMLClip);

var SlideThreeSVG_1 = SlideThreeSVG;

var Anime$b = MotorCortex__default['default'].loadPlugin(index);

var TechnologiesSVG = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(TechnologiesSVG, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var html3 = "";

      for (var i = 0; i < this.attrs.logos.length; i++) {
        var html = "<div class=\"img\"> <img src=\"".concat(this.attrs.logos[i], "\" /></div>");
        html3 = html3 + html;
      }

      var word = new MotorCortex__default['default'].HTMLClip({
        css: this.css,
        html: "<div class=\"img-container\"> ".concat(html3, " </div>"),
        selector: ".content-container"
      });
      this.addIncident(word, 0);
      var border = new Anime$b.Anime({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      }, {
        duration: 2500 * this.attrs.speed,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var content = new Anime$b.Anime({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new Anime$b.Anime({
        animatedAttrs: {
          left: "60%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new Anime$b.Anime({
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
        easing: "easeOutCubic"
      }); // out

      var borderOut = new Anime$b.Anime({
        animatedAttrs: {
          left: "150%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new Anime$b.Anime({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new Anime$b.Anime({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "60%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new Anime$b.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
        easing: "easeInQuart"
      });
      var bgout = new Anime$b.Anime({
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
      this.addIncident(borderOut, 2000 * this.attrs.speed);
      this.addIncident(contentOut, 2000 * this.attrs.speed);
      this.addIncident(subtitleOut, 2000 * this.attrs.speed);
      this.addIncident(titleOut, 2000 * this.attrs.speed);
      this.addIncident(bgout, 6000 * this.speed);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n   \n        \n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"subtitle-holder\">\n        <span> ").concat(this.attrs.contentSubTitle, "</span>\n      </div>\n      <div class=\"border\">\n      <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n      </svg>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .img img{\n      width:80%;\n      -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n    }\n\n    .img{\n      display:flex;\n          justify-content: center;\n          align-content: center;\n          align-items: center;\n    }\n\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      bottom: 120%;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .img-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n\n    }\n  \n   \n\n    .border{\n      \n      position: absolute;\n      overflow: hidden;\n      left: 7%;\n      z-index: 0;\n      -ms-transform: rotate(-45deg);     \n      -ms-transform-origin: 20% 40%;  \n      -webkit-transform: rotate(-45deg); \n      -webkit-transform-origin: 69% 83%;\n      transform: rotate(79deg);\n    }\n\n    .subtitle-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: #c10000;\n      z-index: 3;\n      text-transform: uppercase;\n      box-shadow: -20px 9px 44px rgb(0, 0, 0);\n      position: absolute;\n      top:33%;\n      left:120%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.2, "px;\n      height: ").concat(this.attrs.height * 0.15, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top:120%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.2, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .svg-wrapper {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%);\n      margin: 0 auto;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n    }\n    \n    .shape2 {\n      stroke-dasharray: 5000;\n      stroke-width: 10px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.fontColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -5000;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n\n  ");
    }
  }]);

  return TechnologiesSVG;
}(MotorCortex__default['default'].HTMLClip);

var TechnologiesSVG_1 = TechnologiesSVG;

var Anime$c = MotorCortex__default['default'].loadPlugin(index);

var Highlights$1 = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Highlights, _MotorCortex$HTMLClip);

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
    key: "buildTree",
    value: function buildTree() {
      var scroll = 0;
      var border = new Anime$c.Anime({
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      }, {
        duration: 2500 * this.attrs.speed,
        selector: ".shape2",
        easing: "easeOutCubic"
      });
      var content = new Anime$c.Anime({
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var appScroll = new Anime$c.Anime({
        animatedAttrs: {
          backgroundPositionY: "100%"
        },
        initialValues: {
          backgroundPositionY: "0%"
        },
        attrs: {}
      }, {
        duration: 2000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeOutCubic"
      });
      var subtitle = new Anime$c.Anime({
        animatedAttrs: {
          left: "10%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      });
      var title = new Anime$c.Anime({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
        easing: "easeOutCubic"
      });
      var borderOut = new Anime$c.Anime({
        animatedAttrs: {
          left: "150%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".border",
        easing: "easeInQuart"
      });
      var contentOut = new Anime$c.Anime({
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".content-container",
        easing: "easeInQuart"
      });
      var subtitleOut = new Anime$c.Anime({
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      });
      var titleOut = new Anime$c.Anime({
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "40%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".title-holder",
        easing: "easeInQuart"
      });
      var bgout = new Anime$c.Anime({
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
        this.addIncident(appScroll, 2000 * this.attrs.speed);
        scroll = 2000;
      }

      this.addIncident(borderOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(contentOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(subtitleOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(titleOut, 2000 * this.attrs.speed + scroll);
      this.addIncident(bgout, 3000 * this.attrs.speed + scroll);
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
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n       \n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"subtitle-holder\">\n        <span> ").concat(this.attrs.contentSubTitle, "</span>\n      </div>\n      \n      <div class=\"border\">\n      <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n      </svg>\n      </div>\n\n\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .app-img{\n      height: 101%;\n      object-fit: cover;\n    }\n\n    .img{\n      object-fit: cover;\n    }\n\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.82, "px;\n      position: absolute;\n      bottom: 120%;\n      right: 7%;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n      background: url(").concat(this.attrs.app, ");\n      z-index: 2;\n      transform: skew(-18deg, 0deg) rotateX(6deg);\n      filter: drop-shadow(31px 35px 53px\n      rgb(0, 0, 0));\n      background-size: cover;\n      background-position-y: 0%;\n    }\n\n    .img-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n\n    }\n  \n    .border{\n      \n      position: absolute;\n      overflow: hidden;\n      left: 7%;\n      z-index: 0;\n      -ms-transform: rotate(-45deg);     \n      -ms-transform-origin: 20% 40%;  \n      -webkit-transform: rotate(-45deg); \n      -webkit-transform-origin: 69% 83%;\n      transform: rotate(79deg);\n    }\n\n\n    .subtitle-holder,.title-holder{\n      -ms-transform-origin: 30% 180%;\n      -webkit-transform: rotate(-10deg);\n      -webkit-transform-origin: 30% 180%;\n      transform: rotate(-10deg);\n    }\n    \n\n    .subtitle-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: #c10000;\n      z-index: 3;\n      text-transform: uppercase;\n      box-shadow: -20px 9px 44px rgb(0, 0, 0);\n      position: absolute;\n      top:60%;\n      left:-100%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.2, "px;\n      height: ").concat(this.attrs.height * 0.15, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top:40%;\n      left: -100%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.2, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .svg-wrapper {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%);\n      margin: 0 auto;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      height: 100%;\n    }\n    \n    .shape2 {\n      stroke-dasharray: 5000;\n      stroke-width: 10px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.fontColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -5000;\n      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n    }\n\n\n\n\n  ");
    }
  }]);

  return Highlights;
}(MotorCortex__default['default'].HTMLClip);

var HighlightsSVG$1 = Highlights$1;

var _SlideTwo, _Technologies, _Highlights;

var _COLOR$1 = "color";
var nu$1 = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var intro = {
  $$strict: true,
  width: {
    optional: false,
    type: "number",
    units: nu$1
  },
  height: {
    optional: false,
    type: "number",
    units: nu$1
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: false,
    type: "number",
    units: nu$1
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  compLogoWidth: {
    optional: false,
    type: "number",
    units: nu$1
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
      type: _COLOR$1
    }
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  fontColor: {
    optional: true,
    type: _COLOR$1
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SlideOneSVG$1 = {
  $$strict: true,
  width: {
    optional: false,
    type: "number",
    units: nu$1
  },
  height: {
    optional: false,
    type: "number",
    units: nu$1
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  clientLogo: {
    optional: false,
    type: "string"
  },
  clientLogoWidth: {
    optional: false,
    type: "number",
    units: nu$1
  },
  compLogo: {
    optional: false,
    type: "string"
  },
  compLogoWidth: {
    optional: false,
    type: "number",
    units: nu$1
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
    type: _COLOR$1
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR$1
    }
  },
  bgColor: {
    optional: true,
    type: _COLOR$1
  },
  fontColor: {
    optional: true,
    type: _COLOR$1
  },
  contentTitle: {
    optional: false,
    type: "string"
  },
  app: {
    optional: false,
    type: "string"
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SlideTwo$1 = (_SlideTwo = {
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
  compLogoWidth: {
    optional: true,
    type: "number",
    min: 0
  },
  title: {
    optional: false,
    type: "string"
  },
  textOne: {
    optional: false,
    type: "string"
  },
  bgColor: {
    type: _COLOR$1
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR$1
    }
  },
  fontColor: {
    type: _COLOR$1
  },
  contentColor: {
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
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
  }
}, _defineProperty(_SlideTwo, "bgColor", {
  optional: true,
  type: _COLOR$1
}), _defineProperty(_SlideTwo, "bgUrl", {
  optional: true,
  type: "string"
}), _defineProperty(_SlideTwo, "mainColor", {
  optional: true,
  type: _COLOR$1
}), _SlideTwo);
var Technologies$1 = (_Technologies = {
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
  bgColor: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR$1
    }
  },
  fontColor: {
    type: _COLOR$1
  },
  contentColor: {
    optional: true,
    type: "string"
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
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
  }
}, _defineProperty(_Technologies, "bgColor", {
  optional: true,
  type: _COLOR$1
}), _defineProperty(_Technologies, "bgUrl", {
  optional: true,
  type: "string"
}), _defineProperty(_Technologies, "mainColor", {
  optional: true,
  type: _COLOR$1
}), _Technologies);
var Highlights$2 = (_Highlights = {
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
  bgColor: {
    type: _COLOR$1
  },
  overlayColor: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR$1
    }
  },
  fontColor: {
    type: _COLOR$1
  },
  contentColor: {
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
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
  }
}, _defineProperty(_Highlights, "bgColor", {
  optional: true,
  type: _COLOR$1
}), _defineProperty(_Highlights, "bgUrl", {
  optional: true,
  type: "string"
}), _defineProperty(_Highlights, "mainColor", {
  optional: true,
  type: _COLOR$1
}), _Highlights);

var validation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  intro: intro,
  SlideOneSVG: SlideOneSVG$1,
  SlideTwo: SlideTwo$1,
  Technologies: Technologies$1,
  Highlights: Highlights$2
});

var src = {
  npm_name: "@kissmybutton/motorcortex-presenter",
  incidents: [{
    exportable: Intro_1,
    name: "Intro",
    attributesValidationRules: validation.intro
  }, {
    exportable: IntroFade_1,
    name: "IntroFade"
  }, {
    exportable: SlideOne_1,
    name: "SlideOne",
    attributesValidationRules: validation.SlideOneSVG
  }, {
    exportable: SlideOneSVG_1,
    name: "SlideOneSVG",
    attributesValidationRules: validation.SlideOneSVG
  }, {
    exportable: SlideTwo_1,
    name: "SlideTwo",
    attributesValidationRules: validation.SlideTwo
  }, {
    exportable: SlideTwoSVG_1,
    name: "SlideTwoSVG",
    attributesValidationRules: validation.SlideTwo
  }, {
    exportable: SlideThree_1,
    name: "SlideThree",
    attributesValidationRules: validation.SlideTwo
  }, {
    exportable: SlideThreeSVG_1,
    name: "SlideThreeSVG",
    attributesValidationRules: validation.SlideTwo
  }, {
    exportable: Technologies_1,
    name: "Technologies",
    attributesValidationRules: validation.Technologies
  }, {
    exportable: TechnologiesSVG_1,
    name: "TechnologiesSVG",
    attributesValidationRules: validation.Technologies
  }, {
    exportable: Highlights,
    name: "Highlights",
    attributesValidationRules: validation.Highlights
  }, {
    exportable: HighlightsSVG$1,
    name: "HighlightsSVG",
    attributesValidationRules: validation.Highlights
  }]
};
var src_1 = src.npm_name;
var src_2 = src.incidents;

exports.default = src;
exports.incidents = src_2;
exports.npm_name = src_1;
