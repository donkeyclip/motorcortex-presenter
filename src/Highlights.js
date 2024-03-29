import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class Highlights extends HTMLClip {
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
    this.attrs.speed ??= 2;

    return `
      <div class="bg">
        <div class="container-logo">
          <div class="logo-client"><img src="${this.attrs.clientLogo}"></div>
          <div class="line"> </div>
          <div class="pro-name">
            <span> ${this.attrs.title}</span>
          </div>
        </div>
        <div class="content-container"></div>
        <div class="title-holder">
          <span> ${this.attrs.contentTitle}</span>
        </div>
        <div class="subtitle-holder">
          <span> ${this.attrs.contentSubTitle}</span>
        </div>
        <div class="border"></div>
      </div>
    `;
  }

  get css() {
    return `
      .app-img{
        height: 101%;
        object-fit: cover;
      }

      .img{
        object-fit: cover;
      }

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
        width: ${this.attrs.width * 0.45}px;
        height: ${this.attrs.height * 0.82}px;
        position: absolute;
        bottom: 120%;
        right: 7%;
        display:flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        background: url(${this.attrs.app});
        z-index: 2;
        transform: skew(-18deg, 0deg) rotateX(6deg);
        filter: drop-shadow(31px 35px 53px
        rgb(0, 0, 0));
        background-size: cover;
      }

      .img-container{
        width: ${this.attrs.width * 0.84}px;
        height: ${this.attrs.height * 0.42}px;
        display:flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;

      }
    
      .border{
        width: ${this.attrs.width * 0.5}px;
        height: 200%;
        position: absolute;  
        overflow: hidden;      
        bottom: -150%;    
        left: 7%;     
        z-index: 0;     
        border-left: 5px solid;     
        border: 5px solid;    
        box-shadow: -8px -3px 23px
        rgba(0,0,0,0.65);   
        -ms-transform: rotate(-45deg);     
        -ms-transform-origin: 20% 40%;  
        -webkit-transform: rotate(-45deg); 
        -webkit-transform-origin: 69% 83%;
        transform: rotate(79deg);
      }

      .subtitle-holder,.title-holder{
        -ms-transform-origin: 30% 180%;
        -webkit-transform: rotate(-10deg);
        -webkit-transform-origin: 30% 180%;
        transform: rotate(-10deg);
      }
      
      .subtitle-holder{
        font-size: ${this.dinamicFontSize(
          this.attrs.contentSubTitle.length,
          this.attrs.width * 0.15
        )}px;
        color:${this.attrs.bgColor};
        background: #c10000;
        z-index: 3;
        text-transform: uppercase;
        box-shadow: -20px 9px 44px rgb(0, 0, 0);
        position: absolute;
        top:60%;
        left:-100%;
        font-weight: 900;
        width: ${this.attrs.width * 0.2}px;
        height: ${this.attrs.height * 0.15}px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .title-holder{
        font-size: ${this.dinamicFontSize(
          this.attrs.contentTitle.length,
          this.attrs.width * 0.4
        )}px;
        color:${this.attrs.bgColor};
        background: ${this.attrs.fontColor};
        z-index: 4;
        text-transform: uppercase;
        box-shadow: -17px 7px 18px rgb(0, 0, 0);
        position: absolute;
        top:40%;
        left: -100%;
        font-weight: 900;
        width: ${this.attrs.width * 0.45}px;
        height: ${this.attrs.height * 0.2}px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  buildTree() {
    const scroll = 0;
    const border = new CSSEffect(
      {
        animatedAttrs: {
          bottom: "0%",
        },
        initialValues: {
          bottom: "-150%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".border",
        easing: "easeOutCubic",
      }
    );

    const content = new CSSEffect(
      {
        animatedAttrs: {
          bottom: "15%",
        },
        initialValues: {
          bottom: "120%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".content-container",
        easing: "easeOutCubic",
      }
    );

    const subtitle = new CSSEffect(
      {
        animatedAttrs: {
          left: "10%",
        },
        initialValues: {
          left: "-100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutCubic",
      }
    );

    const title = new CSSEffect(
      {
        animatedAttrs: {
          left: "5%",
        },
        initialValues: {
          left: "-100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeOutCubic",
      }
    );

    const borderOut = new CSSEffect(
      {
        animatedAttrs: {
          bottom: "150%",
        },
        initialValues: {
          bottom: "0%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart",
      }
    );

    const contentOut = new CSSEffect(
      {
        animatedAttrs: {
          bottom: "-120%",
        },
        initialValues: {
          bottom: "15%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".content-container",
        easing: "easeInQuart",
      }
    );

    const subtitleOut = new CSSEffect(
      {
        animatedAttrs: {
          left: "-120%",
        },
        initialValues: {
          left: "10%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeInQuart",
      }
    );

    const titleOut = new CSSEffect(
      {
        animatedAttrs: {
          top: "-120%",
        },
        initialValues: {
          top: "40%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".title-holder",
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
