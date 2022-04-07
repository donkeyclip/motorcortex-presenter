'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

class Intro extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;

    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"wrapper\">\n          <div class=\"container-logo\">\n            <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n            <div class=\"line\"> </div>\n            <div class=\"pro-name\">\n              <span> ").concat(this.attrs.title, "</span>\n            </div>\n          </div>\n          <div class=\"date-container\">\n            <div class=\"logo-comp\"><img src=\"").concat(this.attrs.compLogo, "\"></div>\n            <div class=\"date\">Date : ").concat(this.attrs.date, "</div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background-image: url(").concat(this.attrs.bgUrl, ");\n        background-size: 1270px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: 'Lato';\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor, ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .logo-client img {\n        width : ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .logo-comp img {\n        width : ").concat(this.attrs.compLogoWidth, "px\n      }\n\n      .logo-comp,.date{\n        position: relative;\n        top: 200%;\n      }\n\n      .logo-client{\n        position: relative ;\n        top : -100%;\n      }\n\n      .container-logo{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        flex: 1;\n        overflow: hidden;\n        position: relative;\n      }\n\n      .date-container{\n        display: flex;\n        align-items: flex-end;\n        margin: 2%;\n        justify-content: space-between;\n        width: 90%;\n        position: relative;\n      }\n   \n      .line{\n        border-top: 5px solid ").concat(this.attrs.fontColor, ";\n        width: 100%;\n        position : relative;\n        top: -100%;\n      }\n\n      .pro-name {\n        position : relative;\n        font-size: 50px;\n        overflow: hidden;\n        padding-top: 10%;\n        top: -100%;\n      }\n\n      .date{\n        font-size: 20px;\n      }\n      \n      .wrapper{ \n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n\n      }\n    ");
  }

  buildTree() {
    const logoIn = new motorcortex.CSSEffect({
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
    const lineIn = new motorcortex.CSSEffect({
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
    const proIn = new motorcortex.CSSEffect({
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
    const logoCompIn = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class IntroFade extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;

    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }

    return fontsize;
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"wrapper\">\n          <div class=\"container-logo\">\n            <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n            <div class=\"pro-name\">\n              <span> ").concat(this.attrs.title, "</span>\n            </div>\n          </div>\n          <div class=\"date-container\">\n            <div class=\"logo-comp\"><img src=\"").concat(this.attrs.compLogo, "\"></div>\n            <div class=\"date\">Date : ").concat(this.attrs.date, "</div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, ";\n        height: ").concat(this.attrs.height, ";\n        position: relative;\n        background-image: url(").concat(this.attrs.bgUrl, ");\n        background-size: 1270px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor, ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .logo-client img {\n        width : ").concat(this.attrs.clientLogoWidth, " ;\n      }\n\n      .logo-comp img {\n        width : ").concat(this.attrs.compLogoWidth, "\n      }\n\n      .container-logo{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        flex: 1 ;\n      }\n\n      .date-container{\n        display: flex;\n        align-items: flex-end;\n        margin: 2%;\n        justify-content: space-between;\n        width: 90%;\n      }\n\n      .pro-name {\n        font-size: 50px;\n        border-top: 5px solid #fff;\n        padding-top: 5%;\n      }\n      .date{\n        font-size: 20px;\n      }\n      \n      .wrapper{ \n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        transform: scale(2);\n        opacity: 0;\n      }\n    ");
  }

  buildTree() {
    const fadeIn = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class SlideOne extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"></div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\" >\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n            <p class=\"text2\"> ").concat(this.attrs.textTwo, "</p>\n            <p class=\"text3\" > ").concat(this.attrs.textThree, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\"></div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n        \n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55), "px;\n      }\n\n      .text2{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5), "px;\n      }\n\n      .text3{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5), "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 0;\n        border-left: 5px solid;\n        border-top: 5px solid;\n        border-right: 5px solid;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -21px 25px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        left: 55%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n        \n      }\n    ");
  }

  buildTree() {
    const content = new motorcortex.CSSEffect({
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
    const titleHolder = new motorcortex.CSSEffect({
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
    const appHolder = new motorcortex.CSSEffect({
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
    const border = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const titleHolderOut = new motorcortex.CSSEffect({
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
    const appHolderOut = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class SlideTwo extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\" >\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\"></div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 25%;\n        right : 100%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n        width: ").concat(this.attrs.width * 0.55, "px;\n        height: ").concat(this.attrs.height * 0.5, "px;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 10%;\n        left: 100%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 5%;\n        right: 100%;\n        z-index: 0;\n        border-left: 5px solid;\n        border-top: 5px solid;\n        border-left: 5px solid;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 5%;\n        right:-100%;\n        z-index: 2;\n        box-shadow: 22px 25px 23px rgba(0,0,0,0.65);\n        border-right: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        right: 0%;\n        width: ").concat(this.attrs.width * 0.4, "px;\n        display: flex;\n        justify-content: center;\n        \n      }\n    ");
  }

  buildTree() {
    const content = new motorcortex.CSSEffect({
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
    const titleHolder = new motorcortex.CSSEffect({
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
    const appHolder = new motorcortex.CSSEffect({
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
    const border = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const titleHolderOut = new motorcortex.CSSEffect({
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
    const appHolderOut = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class SlideThree extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo, _this$attrs3, _this$attrs3$speed;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    (_this$attrs3$speed = (_this$attrs3 = this.attrs).speed) !== null && _this$attrs3$speed !== void 0 ? _this$attrs3$speed : _this$attrs3.speed = 2;
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\">\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\"></div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : -100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 5%;\n        position: relative;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n   \n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 0;\n        border-left: 5px solid;\n        border-top: 5px solid;\n        border-right: 5px solid;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.33, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -23px -4px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n        border-top: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 80%;\n        left: 120%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n      }\n    ");
  }

  buildTree() {
    const content = new motorcortex.CSSEffect({
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
    const titleHolder = new motorcortex.CSSEffect({
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
    const appHolder = new motorcortex.CSSEffect({
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
    const border = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const titleHolderOut = new motorcortex.CSSEffect({
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
    const appHolderOut = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class Technologies extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\"> </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .img img{\n        width:80%;\n        -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n        filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      }\n\n      .img{\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n      }\n\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        bottom: 120%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.5, "px;\n        height: 200%;\n        position: absolute;  \n        overflow: hidden;      \n        bottom: -150%;    \n        left: 7%;     \n        z-index: 0;     \n        border-left: 5px solid;     \n        border: 5px solid;    \n        box-shadow: -8px -3px 23px\n        rgba(0,0,0,0.65);   \n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:33%;\n        left:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
  }

  buildTree() {
    let html = "";

    for (let i = 0; i < this.attrs.logos.length; i++) {
      html += "<div class=\"img\"><img src=\"".concat(this.attrs.logos[i], "\"/></div>");
    }

    const word = new motorcortex.HTMLClip({
      css: this.css,
      html: "<div class=\"img-container\">".concat(html, "</div>"),
      selector: ".content-container"
    });
    this.addIncident(word, 0);
    const border = new motorcortex.CSSEffect({
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
    const content = new motorcortex.CSSEffect({
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
    const subtitle = new motorcortex.CSSEffect({
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
    const title = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const subtitleOut = new motorcortex.CSSEffect({
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
    const titleOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class Highlights extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo, _this$attrs3, _this$attrs3$speed;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    (_this$attrs3$speed = (_this$attrs3 = this.attrs).speed) !== null && _this$attrs3$speed !== void 0 ? _this$attrs3$speed : _this$attrs3.speed = 2;
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .app-img{\n        height: 101%;\n        object-fit: cover;\n      }\n\n      .img{\n        object-fit: cover;\n      }\n\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.82, "px;\n        position: absolute;\n        bottom: 120%;\n        right: 7%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: url(").concat(this.attrs.app, ");\n        z-index: 2;\n        transform: skew(-18deg, 0deg) rotateX(6deg);\n        filter: drop-shadow(31px 35px 53px\n        rgb(0, 0, 0));\n        background-size: cover;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n\n      }\n    \n      .border{\n        width: ").concat(this.attrs.width * 0.5, "px;\n        height: 200%;\n        position: absolute;  \n        overflow: hidden;      \n        bottom: -150%;    \n        left: 7%;     \n        z-index: 0;     \n        border-left: 5px solid;     \n        border: 5px solid;    \n        box-shadow: -8px -3px 23px\n        rgba(0,0,0,0.65);   \n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder,.title-holder{\n        -ms-transform-origin: 30% 180%;\n        -webkit-transform: rotate(-10deg);\n        -webkit-transform-origin: 30% 180%;\n        transform: rotate(-10deg);\n      }\n      \n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:60%;\n        left:-100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:40%;\n        left: -100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
  }

  buildTree() {
    const scroll = 0;
    const border = new motorcortex.CSSEffect({
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
    const content = new motorcortex.CSSEffect({
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
    const subtitle = new motorcortex.CSSEffect({
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
    const title = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const subtitleOut = new motorcortex.CSSEffect({
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
    const titleOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class SlideOneSVG extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"></div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\" >\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n            <p class=\"text2\"> ").concat(this.attrs.textTwo, "</p>\n            <p class=\"text3\" > ").concat(this.attrs.textThree, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55), "px;\n      }\n\n      .text2{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5), "px;\n      }\n\n      .text3{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5), "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        top: 15%;\n        left: 10%;\n        z-index: 0;\n        transform: rotate(-90deg);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -21px 25px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        left: 55%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
  }

  buildTree() {
    const content = new motorcortex.CSSEffect({
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
    const titleHolder = new motorcortex.CSSEffect({
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
    const appHolder = new motorcortex.CSSEffect({
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
    const border = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const titleHolderOut = new motorcortex.CSSEffect({
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
    const appHolderOut = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class SlideTwoSVG extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\">\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : 25%;\n        right : 100%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 0;\n        position: relative;\n        width: ").concat(this.attrs.width * 0.55, "px;\n        height: ").concat(this.attrs.height * 0.5, "px;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n\n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 10%;\n        left: 100%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        top: 1%;\n        right: 7%;\n        z-index: 0;\n        transform: rotate(-90deg);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 5%;\n        right:-100%;\n        z-index: 2;\n        box-shadow: 22px 25px 23px rgba(0,0,0,0.65);\n        border-right: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 100%;\n        right: 0%;\n        width: ").concat(this.attrs.width * 0.4, "px;\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
  }

  buildTree() {
    const content = new motorcortex.CSSEffect({
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
    const titleHolder = new motorcortex.CSSEffect({
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
    const appHolder = new motorcortex.CSSEffect({
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
    const border = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const titleHolderOut = new motorcortex.CSSEffect({
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
    const appHolderOut = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class SlideThreeSVG extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\">\n          <div class= \"content-wrapper\">\n            <p class=\"text1\">").concat(this.attrs.textOne, "</p>\n          </div>\n        </div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"app-holder\"></div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n        <div class=\"border1\"></div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.65, "px;\n        height: ").concat(this.attrs.height * 0.6, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        top : -100%;\n        left : 5%;\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .content-wrapper{\n        margin: 5%;\n        position: relative;\n      }\n\n      p{\n        margin: 0;\n        text-transform: uppercase;\n        font-weight: 200;\n      }\n   \n      .text1{\n        font-size: ").concat(this.attrs.fonSize, "px;\n      }\n\n      .app-holder{\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 40%;\n        z-index: 1;\n        background: url(").concat(this.attrs.app, ");\n        background-size: cover;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        top: 15%;\n        left: 10%;\n        z-index: 0;\n        transform: rotate(-90deg);\n      }\n\n      .border1{\n        width: ").concat(this.attrs.width * 0.33, "px;\n        height: 100%;\n        position: absolute;\n        overflow: hidden;\n        top: 100%;\n        left: 7%;\n        z-index: 2;\n        box-shadow: -23px -4px 23px rgba(0,0,0,0.65);\n        border-left: 5px solid;\n        border-top: 5px solid;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top: 80%;\n        left: 120%;\n        width: ").concat(this.attrs.width * 0.3, "px;\n        display: flex;\n        justify-content: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
  }

  buildTree() {
    const content = new motorcortex.CSSEffect({
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
    const titleHolder = new motorcortex.CSSEffect({
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
    const appHolder = new motorcortex.CSSEffect({
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
    const border = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const titleHolderOut = new motorcortex.CSSEffect({
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
    const appHolderOut = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class TechnologiesSVG extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .img img{\n        width:80%;\n        -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n        filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));\n      }\n\n      .img{\n        display:flex;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n      }\n\n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);\n        position: absolute;\n        bottom: 120%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: ").concat(this.attrs.contentColor, ";\n        z-index: 2;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n      }\n\n      .border{\n        position: absolute;\n        overflow: hidden;\n        left: 7%;\n        z-index: 0;\n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:33%;\n        left:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:120%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }\n    ");
  }

  buildTree() {
    let html = "";

    for (let i = 0; i < this.attrs.logos.length; i++) {
      html += "<div class=\"img\"><img src=\"".concat(this.attrs.logos[i], "\"/></div>");
    }

    const word = new motorcortex.HTMLClip({
      css: this.css,
      html: "<div class=\"img-container\">".concat(html, "</div>"),
      selector: ".content-container"
    });
    this.addIncident(word, 0);
    const border = new motorcortex.CSSEffect({
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
    const content = new motorcortex.CSSEffect({
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
    const subtitle = new motorcortex.CSSEffect({
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
    const title = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const subtitleOut = new motorcortex.CSSEffect({
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
    const titleOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

class HighlightsSVG extends motorcortex.HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = Math.round(width / 0.6 / lc);

    if (fontsize >= 100 && width <= 1270) {
      fontsize = 100;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 60;
    }

    return fontsize;
  }

  get fonts() {
    return [{
      type: "google-font",
      src: "href=\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
    }];
  }

  get html() {
    var _this$attrs, _this$attrs$overlayCo, _this$attrs2, _this$attrs2$mainColo;

    (_this$attrs$overlayCo = (_this$attrs = this.attrs).overlayColor) !== null && _this$attrs$overlayCo !== void 0 ? _this$attrs$overlayCo : _this$attrs.overlayColor = "#ff00b34d";
    (_this$attrs2$mainColo = (_this$attrs2 = this.attrs).mainColor) !== null && _this$attrs2$mainColo !== void 0 ? _this$attrs2$mainColo : _this$attrs2.mainColor = "#00ff40";
    return "\n      <div class=\"bg\">\n        <div class=\"container-logo\">\n          <div class=\"logo-client\"><img src=\"".concat(this.attrs.clientLogo, "\"></div>\n          <div class=\"line\"> </div>\n          <div class=\"pro-name\">\n            <span> ").concat(this.attrs.title, "</span>\n          </div>\n        </div>\n        <div class=\"content-container\"></div>\n        <div class=\"title-holder\">\n          <span> ").concat(this.attrs.contentTitle, "</span>\n        </div>\n        <div class=\"subtitle-holder\">\n          <span> ").concat(this.attrs.contentSubTitle, "</span>\n        </div>\n        <div class=\"border\">\n          <svg height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect class=\"shape2\" height=\"").concat(this.attrs.width * 0.6, "\" width=\"").concat(this.attrs.height, "px\" />\n          </svg>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .app-img{\n        height: 101%;\n        object-fit: cover;\n      }\n     \n      .img{\n        object-fit: cover;\n      }\n     \n      .bg {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        background: ").concat(this.attrs.bgColor, ";\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: ").concat(this.attrs.fontColor, ";\n        font-family: lato;\n      }\n\n      .container-logo{\n        position: absolute;\n        top : 3%;\n        left: 2%;\n      }\n\n      .logo-client img{\n        width: ").concat(this.attrs.clientLogoWidth, "px;\n      }\n\n      .pro-name{\n        font-size: 80%;\n      }\n     \n      .content-container{\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.82, "px;\n        position: absolute;\n        bottom: 120%;\n        right: 7%;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n        background: url(").concat(this.attrs.app, ");\n        z-index: 2;\n        transform: skew(-18deg, 0deg) rotateX(6deg);\n        filter: drop-shadow(31px 35px 53px\n        rgb(0, 0, 0));\n        background-size: cover;\n        background-position-y: 0%;\n      }\n\n      .img-container{\n        width: ").concat(this.attrs.width * 0.84, "px;\n        height: ").concat(this.attrs.height * 0.42, "px;\n        display:flex;\n        justify-content: space-around;\n        align-content: center;\n        align-items: center;\n      }\n    \n      .border{\n        position: absolute;\n        overflow: hidden;\n        left: 7%;\n        z-index: 0;\n        -ms-transform: rotate(-45deg);     \n        -ms-transform-origin: 20% 40%;  \n        -webkit-transform: rotate(-45deg); \n        -webkit-transform-origin: 69% 83%;\n        transform: rotate(79deg);\n      }\n\n      .subtitle-holder,.title-holder{\n        -ms-transform-origin: 30% 180%;\n        -webkit-transform: rotate(-10deg);\n        -webkit-transform-origin: 30% 180%;\n        transform: rotate(-10deg);\n      }\n\n      .subtitle-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: #c10000;\n        z-index: 3;\n        text-transform: uppercase;\n        box-shadow: -20px 9px 44px rgb(0, 0, 0);\n        position: absolute;\n        top:60%;\n        left:-100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.2, "px;\n        height: ").concat(this.attrs.height * 0.15, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .title-holder{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4), "px;\n        color:").concat(this.attrs.bgColor, ";\n        background: ").concat(this.attrs.fontColor, ";\n        z-index: 4;\n        text-transform: uppercase;\n        box-shadow: -17px 7px 18px rgb(0, 0, 0);\n        position: absolute;\n        top:40%;\n        left: -100%;\n        font-weight: 900;\n        width: ").concat(this.attrs.width * 0.45, "px;\n        height: ").concat(this.attrs.height * 0.2, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        margin: 0 auto;\n        width: ").concat(this.attrs.width * 0.6, "px;\n        height: 100%;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 5000;\n        stroke-width: 10px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.fontColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -5000;\n        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);\n      }  \n    ");
  }

  buildTree() {
    let scroll = 0;
    const border = new motorcortex.CSSEffect({
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
    const content = new motorcortex.CSSEffect({
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
    const appScroll = new motorcortex.CSSEffect({
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
    const subtitle = new motorcortex.CSSEffect({
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
    const title = new motorcortex.CSSEffect({
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
    const borderOut = new motorcortex.CSSEffect({
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
    const contentOut = new motorcortex.CSSEffect({
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
    const subtitleOut = new motorcortex.CSSEffect({
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
    const titleOut = new motorcortex.CSSEffect({
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
    const bgout = new motorcortex.CSSEffect({
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

}

const _COLOR = "color";
const nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
const introVal = {
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
const SlideOneSVGVal = {
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
const SlideTwoVal = {
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
const TechnologiesVal = {
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
const HighlightsVal = {
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
var version = "1.2.0";

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
