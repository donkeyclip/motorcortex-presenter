const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class Technologies extends MotorCortex.API.Clip {
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
   
        
      </div>


      <div class="title-holder">
        <span> ${this.attrs.contentTitle}</span>
      </div>

      <div class="subtitle-holder">
        <span> ${this.attrs.contentSubTitle}</span>
      </div>
      <div class="border"> </div>
    </div>
    `;
  }

  get css() {
    return `

    .img img{
      width:80%;
      -webkit-filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));
      filter: drop-shadow(-10px 10px 9px rgba(0,0,0,1));
    }

    .img{
      display:flex;
          justify-content: center;
          align-content: center;
          align-items: center;
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
      width: ${this.attrs.width * 0.84}px;
      height: ${this.attrs.height * 0.42}px;
      box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);
      position: absolute;
      bottom: 15%;
      display:flex;
      justify-content: space-around;
      align-content: center;
      align-items: center;
      background:#c10000;
      z-index: 2;
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
      top:33%;
      left:60%;
      font-weight: 900;
      width: ${this.attrs.width * 0.20}px;
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
      top:15%;
      font-weight: 900;
      width: ${this.attrs.width * 0.45}px;
      height: ${this.attrs.height * 0.20}px;
      display: flex;
      justify-content: center;
      align-items: center;
    }






  `;
  }

  buildTree() {


let html3=''

    for (let i = 0; i < this.attrs.img1.length; i++) {
      const html = `<div class="img"> <img src="${this.attrs.img1[i]}" /></div>`;
      html3 = html3 + html;
      console.log(this.attrs.img1[i])
    }

    const word = new MotorCortex.Clip({
      css: this.css,
      html: `<div class="img-container"> ${html3} </div>`,
      selector: ".content-container",
      
    });

    this.addIncident(word, 0);





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


  }
}

module.exports = Technologies;



// <div class="img"><img src="${this.attrs.img1}" /></div>
// <div class="img"><img src="${this.attrs.img2}" /></div>
// <div class="img"><img src="${this.attrs.img3}" /></div>
// <div class="img"><img src="${this.attrs.img4}" /></div>
// <div class="img"><img src="${this.attrs.img5}" /></div>
