"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MotorCortex = require("@kissmybutton/motorcortex/");

var AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");

var Anime = MotorCortex.loadPlugin(AnimeDefinition);

var IntroFade =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(IntroFade, _MotorCortex$API$Clip);

  function IntroFade() {
    _classCallCheck(this, IntroFade);

    return _possibleConstructorReturn(this, _getPrototypeOf(IntroFade).apply(this, arguments));
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
      var fadeIn = new Anime.Anime({
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
      var bgout = new Anime.Anime({
        animatedAttrs: {
          width: 0,
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
}(MotorCortex.API.Clip);

module.exports = IntroFade;