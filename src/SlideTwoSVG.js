const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class SlideTwoSVG extends MotorCortex.HTMLClip {
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
    this.attrs.bgUrl = !this.attrs.bgUrl
      ? (this.attrs.bgUrl = "./kissmybutonbg.jpg")
      : this.attrs.bgUrl;

    this.attrs.overlayColor = !this.attrs.overlayColor
      ? (this.attrs.overlayColor = "#ff00b34d")
      : this.attrs.overlayColor;

    this.attrs.mainColor = !this.attrs.mainColor
      ? (this.attrs.mainColor = "#00ff40")
      : this.attrs.mainColor;

    this.attrs.speed = !this.attrs.speed
      ? (this.attrs.speed = 2)
      : this.attrs.speed;

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
        <div class= "content-wrapper" >
          <p class="text1">${this.attrs.textOne}</p>
        </div>
      </div>


      <div class="title-holder">
        <span> ${this.attrs.contentTitle}</span>
      </div>

      <div class="app-holder">
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

      <div class="border1">
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
    const content = new Anime.Anime(
      {
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeOutCubic"
      }
    );

    const titleHolder = new Anime.Anime(
      {
        animatedAttrs: {
          top: "15%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutCubic"
      }
    );

    const appHolder = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutCubic"
      }
    );

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
        duration: 2500 * this.attrs.speed,
        selector: ".shape2",
        easing: "easeOutCubic"
      }
    );

    const contentOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "25%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeInQuart"
      }
    );

    const titleHolderOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "100%"
        },
        initialValues: {
          top: "15%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeInQuart"
      }
    );

    const appHolderOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeInQuart"
      }
    );

    const borderOut = new Anime.Anime(
      {
        animatedAttrs: {
          right: "120%"
        },
        initialValues: {
          right: "7%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".border",
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
}

module.exports = SlideTwoSVG;
