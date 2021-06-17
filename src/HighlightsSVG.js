import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex";
import AnimeDefinition from "@kissmybutton/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class HighlightsSVG extends HTMLClip {
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

  get font() {
    return [
      {
        type: `google-font`,
        src: `href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap`
      }
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
        <div class="content-container"></div>
        <div class="title-holder">
          <span> ${this.attrs.contentTitle}</span>
        </div>
        <div class="subtitle-holder">
          <span> ${this.attrs.contentSubTitle}</span>
        </div>
        <div class="border">
          <svg height="${this.attrs.width * 0.6}" width="${
      this.attrs.height
    }px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${
      this.attrs.height
    }px" />
          </svg>
        </div>
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
        background-position-y: 0%;
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
        position: absolute;
        overflow: hidden;
        left: 7%;
        z-index: 0;
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
    let scroll = 0;
    const border = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: "-10000px"
        },
        initialValues: {
          strokeDashoffset: "-5000px"
        },
        attrs: {}
      },
      {
        duration: 5000,
        selector: ".shape2",
        easing: "easeOutCubic"
      }
    );

    const content = new Anime.Anime(
      {
        animatedAttrs: {
          bottom: "15%"
        },
        initialValues: {
          bottom: "120%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".content-container",
        easing: "easeOutCubic"
      }
    );

    const appScroll = new Anime.Anime(
      {
        animatedAttrs: {
          backgroundPositionY: "100%"
        },
        initialValues: {
          backgroundPositionY: "0%"
        },
        attrs: {}
      },
      {
        duration: 4000,
        selector: ".content-container",
        easing: "easeOutCubic"
      }
    );

    const subtitle = new Anime.Anime(
      {
        animatedAttrs: {
          left: "10%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutCubic"
      }
    );

    const title = new Anime.Anime(
      {
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeOutCubic"
      }
    );

    const borderOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "150%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".border",
        easing: "easeInQuart"
      }
    );

    const contentOut = new Anime.Anime(
      {
        animatedAttrs: {
          bottom: "-120%"
        },
        initialValues: {
          bottom: "15%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".content-container",
        easing: "easeInQuart"
      }
    );

    const subtitleOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-120%"
        },
        initialValues: {
          left: "10%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeInQuart"
      }
    );

    const titleOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "40%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".title-holder",
        easing: "easeInQuart"
      }
    );

    const bgout = new Anime.Anime(
      {
        animatedAttrs: {
          width: "0px",
          opacity: 0
        },

        attrs: {}
      },
      {
        duration: 1,
        selector: ".bg"
      }
    );

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
