import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class IntroFade extends HTMLClip {
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
    this.attrs.overlayColor ??= "#ff00b34d";
    this.attrs.mainColor ??= "#00ff40";

    return `
      <div class="bg">
        <div class="wrapper">
          <div class="container-logo">
            <div class="logo-client"><img src="${this.attrs.clientLogo}"></div>
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
        width: ${this.attrs.width};
        height: ${this.attrs.height};
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
        width : ${this.attrs.clientLogoWidth} ;
      }

      .logo-comp img {
        width : ${this.attrs.compLogoWidth}
      }

      .container-logo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1 ;
      }

      .date-container{
        display: flex;
        align-items: flex-end;
        margin: 2%;
        justify-content: space-between;
        width: 90%;
      }

      .pro-name {
        font-size: 50px;
        border-top: 5px solid #fff;
        padding-top: 5%;
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
        transform: scale(2);
        opacity: 0;
      }
    `;
  }

  buildTree() {
    const fadeIn = new Anime.Anime(
      {
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
      },
      {
        duration: 1000,
        selector: ".wrapper"
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

    this.addIncident(fadeIn, 0);
    this.addIncident(bgout, 4000);
  }
}
