import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex";
import AnimeDefinition from "@kissmybutton/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class Intro extends HTMLClip {
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
        <div class="wrapper">
          <div class="container-logo">
            <div class="logo-client"><img src="${this.attrs.clientLogo}"></div>
            <div class="line"> </div>
            <div class="pro-name">
              <span> ${this.attrs.title}</span>
            </div>
          </div>
          <div class="date-container">
            <div class="logo-comp"><img src="${this.attrs.compLogo}"></div>
            <div class="date">Date : ${this.attrs.date}</div>
          </div>
        </div>
      </div>
    `;
  }

  get css() {
    return `
      .bg {
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        position: relative;
        background-image: url(${this.attrs.bgUrl});
        background-size: 1270px;
        background-position: center;
        transform: scale(1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: ${this.attrs.fontColor};
        font-family: lato;
      }

      .bg:after {
        content: "";
        display: block;
        background: linear-gradient(${this.attrs.overlayColor});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .logo-client img {
        width : ${this.attrs.clientLogoWidth}px;
      }

      .logo-comp img {
        width : ${this.attrs.compLogoWidth}px
      }

      .logo-comp,.date{
        position: relative;
        top: 200%;
      }

      .logo-client{
        position: relative ;
        top : -100%;
      }

      .container-logo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        position: relative;
      }

      .date-container{
        display: flex;
        align-items: flex-end;
        margin: 2%;
        justify-content: space-between;
        width: 90%;
        position: relative;
      }
   
      .line{
        border-top: 5px solid ${this.attrs.fontColor};
        width: 100%;
        position : relative;
        top: -100%;
      }

      .pro-name {
        position : relative;
        font-size: 50px;
        overflow: hidden;
        padding-top: 10%;
        top: -100%;
      }

      .date{
        font-size: 20px;
      }
      
      .wrapper{ 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

      }
    `;
  }

  buildTree() {
    const logoIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      },
      {
        duration: 3000,
        selector: ".logo-client",
        easing: "easeOutQuart"
      }
    );

    const lineIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      },
      {
        duration: 2500,
        selector: ".line ",
        easing: "easeOutQuart"
      }
    );

    const proIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".pro-name ",
        easing: "easeOutQuart"
      }
    );

    const logoCompIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "200%"
        },
        attrs: {}
      },
      {
        duration: 2000,
        selector: ".logo-comp,.date",
        easing: "easeOutQuart"
      }
    );

    const bgout = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 0
        },

        attrs: {}
      },
      {
        duration: 1000,
        selector: ".bg"
      }
    );

    this.addIncident(logoIn, 0);
    this.addIncident(lineIn, 0);
    this.addIncident(proIn, 0);
    this.addIncident(logoCompIn, 0);
    this.addIncident(bgout, 3000);
  }
}
