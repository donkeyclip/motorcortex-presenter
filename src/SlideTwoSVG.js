import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class SlideTwoSVG extends HTMLClip {
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
    return [
      {
        type: `google-font`,
        src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`,
      },
    ];
  }

  get html() {
    this.attrs.overlayColor ??= "#ff00b34d";
    this.attrs.mainColor ??= "#00ff40";

    return `
      <div class="bg">
        <div class="container-logo">
          <div class="logo-client"><img src="${this.attrs.clientLogo}"></div>
          <div class="line"> </div>
          <div class="pro-name">
            <span> ${this.attrs.title}</span>
          </div>
        </div>
        <div class="content-container">
          <div class= "content-wrapper">
            <p class="text1">${this.attrs.textOne}</p>
          </div>
        </div>
        <div class="title-holder">
          <span> ${this.attrs.contentTitle}</span>
        </div>
        <div class="app-holder"></div>
        <div class="border">
          <svg height="${this.attrs.width * 0.6}" width="${
      this.attrs.height
    }px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${
      this.attrs.height
    }px" />
          </svg>
        </div>
        <div class="border1"></div>
      </div>
    `;
  }

  get css() {
    return `
      .bg {
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        position: relative;
        background: ${this.attrs.bgColor};
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: ${this.attrs.fontColor};
        font-family: lato;
      }

      .container-logo{
        position: absolute;
        top : 3%;
        left: 2%;
      }

      .logo-client img{
        width: ${this.attrs.clientLogoWidth}px;
      }

      .pro-name{
        font-size: 80%;
      }
     
      .content-container{
        width: ${this.attrs.width * 0.65}px;
        height: ${this.attrs.height * 0.6}px;
        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);
        position: absolute;
        top : 25%;
        right : 100%;
        display:flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        background: ${this.attrs.contentColor};
        z-index: 2;
      }

      .content-wrapper{
        margin: 0;
        position: relative;
        width: ${this.attrs.width * 0.55}px;
        height: ${this.attrs.height * 0.5}px;
      }

      p{
        margin: 0;
        text-transform: uppercase;
        font-weight: 200;
      }

      .text1{
        font-size: ${this.attrs.fonSize}px;
      }

      .app-holder{
        width: ${this.attrs.width * 0.6}px;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 10%;
        left: 100%;
        z-index: 1;
        background: url(${this.attrs.app});
        background-size: cover;
        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);
      }
    
      .border{
        position: absolute;
        overflow: hidden;
        top: 1%;
        right: 7%;
        z-index: 0;
        transform: rotate(-90deg);
      }

      .border1{
        width: ${this.attrs.width * 0.6}px;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 5%;
        right:-100%;
        z-index: 2;
        box-shadow: 22px 25px 23px rgba(0,0,0,0.65);
        border-right: 5px solid;
      }

      .title-holder{
        font-size: ${this.dinamicFontSize(
          this.attrs.contentTitle.length,
          this.attrs.width * 0.2
        )}px;
        color:${this.attrs.bgColor};
        background: ${this.attrs.fontColor};
        z-index: 4;
        text-transform: uppercase;
        box-shadow: -17px 7px 18px rgb(0, 0, 0);
        position: absolute;
        top: 100%;
        right: 0%;
        width: ${this.attrs.width * 0.4}px;
        display: flex;
        justify-content: center;
      }

      .svg-wrapper {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 auto;
        width: ${this.attrs.width * 0.6}px;
        height: 100%;
      }
      
      .shape2 {
        stroke-dasharray: 5000;
        stroke-width: 10px;
        fill: transparent;
        stroke: ${this.attrs.fontColor};
        border-bottom: 5px solid black;
        stroke-dashoffset: -5000;
        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);
      }
    `;
  }

  buildTree() {
    const content = new CSSEffect(
      {
        animatedAttrs: {
          right: "0%",
        },
        initialValues: {
          right: "100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: " .content-container",
        easing: "easeOutCubic",
      }
    );

    const titleHolder = new CSSEffect(
      {
        animatedAttrs: {
          top: "15%",
        },
        initialValues: {
          top: "100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeOutCubic",
      }
    );

    const appHolder = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeOutCubic",
      }
    );

    const border = new CSSEffect(
      {
        animatedAttrs: {
          strokeDashoffset: "-10000px",
        },
        initialValues: {
          strokeDashoffset: "-5000px",
        },
        attrs: {},
      },
      {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic",
      }
    );

    const contentOut = new CSSEffect(
      {
        animatedAttrs: {
          top: "-120%",
        },
        initialValues: {
          top: "25%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: " .content-container",
        easing: "easeInQuart",
      }
    );

    const titleHolderOut = new CSSEffect(
      {
        animatedAttrs: {
          top: "100%",
        },
        initialValues: {
          top: "15%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: " .title-holder",
        easing: "easeInQuart",
      }
    );

    const appHolderOut = new CSSEffect(
      {
        animatedAttrs: {
          left: "120%",
        },
        initialValues: {
          left: "0%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".app-holder ",
        easing: "easeInQuart",
      }
    );

    const borderOut = new CSSEffect(
      {
        animatedAttrs: {
          right: "120%",
        },
        initialValues: {
          right: "7%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart",
      }
    );

    const bgout = new CSSEffect(
      {
        animatedAttrs: {
          width: "0px",
          opacity: 0,
        },

        attrs: {},
      },
      {
        duration: 1,
        selector: ".bg",
      }
    );

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
