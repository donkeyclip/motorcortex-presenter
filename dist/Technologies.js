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

var Technologies =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(Technologies, _MotorCortex$API$Clip);

  function Technologies() {
    _classCallCheck(this, Technologies);

    return _possibleConstructorReturn(this, _getPrototypeOf(Technologies).apply(this, arguments));
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

      var word = new MotorCortex.Clip({
        css: this.css,
        html: "<div class=\"img-container\"> ".concat(html3, " </div>"),
        selector: ".content-container"
      });
      this.addIncident(word, 0);
      var border = new Anime.Anime({
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
      var content = new Anime.Anime({
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
      var subtitle = new Anime.Anime({
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
      var title = new Anime.Anime({
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

      var borderOut = new Anime.Anime({
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
      var contentOut = new Anime.Anime({
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
      var subtitleOut = new Anime.Anime({
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
      var titleOut = new Anime.Anime({
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
      return "\n    <div class=\"bg\">\n      <div class=\"container-logo\">\n        <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n        <div class=\"line\"> </div>\n        <div class=\"pro-name\">\n          <span> ").concat(this.attrs.title, "</span>\n        </div>\n      </div>\n\n      <div class=\"content-container\">\n   \n        \n      </div>\n\n\n      <div class=\"title-holder\">\n        <span> ").concat(this.attrs.contentTitle, "</span>\n      </div>\n\n      <div class=\"subtitle-holder\">\n        <span> ").concat(this.attrs.contentSubTitle, "</span>\n      </div>\n      <div class=\"border\"> </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .img img{\n      width:80%;\n      -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n    }\n\n    .img{\n      display:flex;\n          justify-content: center;\n          align-content: center;\n          align-items: center;\n    }\n\n    .bg {\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      background: ").concat(this.attrs.bgColor, ";\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      color: ").concat(this.attrs.fontColor, ";\n      font-family: lato;\n    }\n\n    .container-logo{\n      position: absolute;\n      top : 3%;\n      left: 2%;\n    }\n\n    .logo-client img{\n      width: ").concat(this.attrs.clientLogoWidth, "px;\n    }\n\n    .pro-name{\n      font-size: 80%;\n    }\n   \n    .content-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      position: absolute;\n      bottom: 120%;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n      background: ").concat(this.attrs.contentColor, ";\n      z-index: 2;\n    }\n\n    .img-container{\n      width: ").concat(this.attrs.width * 0.84, "px;\n      height: ").concat(this.attrs.height * 0.42, "px;\n      display:flex;\n      justify-content: space-around;\n      align-content: center;\n      align-items: center;\n\n    }\n  \n    .border{\n      width: ").concat(this.attrs.width * 0.5, "px;\n      height: 200%;\n      position: absolute;  \n      overflow: hidden;      \n      bottom: -150%;    \n      left: 7%;     \n      z-index: 0;     \n      border-left: 5px solid;     \n      border: 5px solid;    \n      box-shadow: -8px -3px 23px\n      rgba(0,0,0,0.65);   \n      -ms-transform: rotate(-45deg);     \n      -ms-transform-origin: 20% 40%;  \n      -webkit-transform: rotate(-45deg); \n      -webkit-transform-origin: 69% 83%;\n      transform: rotate(79deg);\n    }\n\n    \n\n    .subtitle-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: #c10000;\n      z-index: 3;\n      text-transform: uppercase;\n      box-shadow: -20px 9px 44px rgb(0, 0, 0);\n      position: absolute;\n      top:33%;\n      left:120%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.2, "px;\n      height: ").concat(this.attrs.height * 0.15, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .title-holder{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n      color:").concat(this.attrs.bgColor, ";\n      background: ").concat(this.attrs.fontColor, ";\n      z-index: 4;\n      text-transform: uppercase;\n      box-shadow: -17px 7px 18px rgb(0, 0, 0);\n      position: absolute;\n      top:120%;\n      font-weight: 900;\n      width: ").concat(this.attrs.width * 0.45, "px;\n      height: ").concat(this.attrs.height * 0.2, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n  ");
    }
  }]);

  return Technologies;
}(MotorCortex.API.Clip);

module.exports = Technologies;