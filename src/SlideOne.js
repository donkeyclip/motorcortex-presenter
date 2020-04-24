const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class SlideOne extends MotorCortex.API.Clip {
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
          <p class="text2"> ${this.attrs.textTwo}</p>
          <p class="text3" > ${this.attrs.textThree}</p>
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
      top : 100%;
      left : 5%;
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
      
    }
    p{
      margin: 0;
      text-transform: uppercase;
      font-weight: 200;
    }
    .text1{
      font-size: ${this.dinamicFontSize(
        this.attrs.textOne.length,
        this.attrs.width * 0.55
      )}px;
    }

    .text2{
      font-size: ${this.dinamicFontSize(
        this.attrs.textTwo.length,
        this.attrs.width * 0.5
      )}px;
    }

    .text3{
      font-size: ${this.dinamicFontSize(
        this.attrs.textThree.length,
        this.attrs.width * 0.5
      )}px;
    }

    .app-holder{
      width: ${this.attrs.width * 0.6}px;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 100%;
      left: 40%;
      z-index: 1;
      background: url(${this.attrs.app});
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
      width: ${this.attrs.width * 0.6}px;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 100%;
      left: 7%;
      z-index: 2;
      box-shadow: -21px 25px 23px rgba(0,0,0,0.65);
      border-left: 5px solid;
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
      left: 55%;
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
          top: "100%"
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
        easing: "easeOutCubic"
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
        easing: "easeOutCubic"
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
        easing: "easeInQuart"
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

module.exports = SlideOne;
