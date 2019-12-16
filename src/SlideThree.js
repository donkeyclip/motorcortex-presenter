const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class SlideThree extends MotorCortex.API.Clip {
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

  dinamicFontSizeH(lc, height) {
    let fontsize;
    fontsize = Math.round(height / (lc * 1.2));
    // if (fontsize >= 70 && height <= 1270) {
    //   fontsize = 70;
    // }

    console.log(this.attrs.height * 0.5);
    console.log(height / (lc * 1.2));

    return fontsize;
  }

  get font() {
    [
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
      top : -100%;
      left : 5%;
      display:flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      background:#c10000;
      z-index: 2;
    }

    .content-wrapper{
      margin: 5%;
      position: relative;
      
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
      top: 100%;
      left: 40%;
      z-index: 1;
      background: url("./app.png");
      background-size: cover;
      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);
    }
  
    .border{
      width: ${this.attrs.width * 0.6}px;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 100%;
      left: 7%;
      z-index: 0;
      border-left: 5px solid;
      border-top: 5px solid;
      border-right: 5px solid;
      box-shadow: -8px -3px 23px rgba(0,0,0,0.65);
    }

    .border1{
      width: ${this.attrs.width * 0.33}px;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 100%;
      left: 7%;
      z-index: 2;
      box-shadow: -23px -4px 23px rgba(0,0,0,0.65);
      border-left: 5px solid;
      border-top: 5px solid;
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
      top: 80%;
      left: 120%;
      width: ${this.attrs.width * 0.3}px;
      display: flex;
      justify-content: center;
      
    }

  `;
  }

  buildTree() {
    const content = new Anime.Anime(
      {
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeOutQuart"
      }
    );

    const titleHolder = new Anime.Anime(
      {
        animatedAttrs: {
          left: "55%"
        },
        initialValues: {
          left: "120%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutQuart"
      }
    );

    const appHolder = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutQuart"
      }
    );

    const border = new Anime.Anime(
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
        selector: ".border,.border1",
        easing: "easeOutQuart"
      }
    );

    const contentOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "120%"
        },
        initialValues: {
          left: "5%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .content-container",
        easing: "easeOutQuart"
      }
    );

    const titleHolderOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          top: "80%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: " .title-holder",
        easing: "easeOutQuart"
      }
    );

    const appHolderOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "-120%"
        },
        initialValues: {
          top: "0%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".app-holder ",
        easing: "easeOutQuart"
      }
    );

    const borderOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "7%"
        },
        attrs: {}
      },
      {
        duration: 1000 * this.attrs.speed,
        selector: ".border,.border1",
        easing: "easeOutQuart"
      }
    );

    const bgout = new Anime.Anime(
      {
        animatedAttrs: {
          width: 0,
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

module.exports = SlideThree;
