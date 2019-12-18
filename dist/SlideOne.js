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

var SlideOne =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(SlideOne, _MotorCortex$API$Clip);

  function SlideOne() {
    _classCallCheck(this, SlideOne);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlideOne).apply(this, arguments));
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
      var content = new Anime.Anime({
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
      var titleHolder = new Anime.Anime({
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
      var appHolder = new Anime.Anime({
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
      var border = new Anime.Anime({
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
      var contentOut = new Anime.Anime({
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
      var titleHolderOut = new Anime.Anime({
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
      var appHolderOut = new Anime.Anime({
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
      var borderOut = new Anime.Anime({
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
      [{
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
}(MotorCortex.API.Clip);

module.exports = SlideOne;