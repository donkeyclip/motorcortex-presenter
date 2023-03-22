import { HTMLClip, CSSEffect } from '@donkeyclip/motorcortex';

class Intro extends HTMLClip {
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
        font-family: 'Lato';
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
    const logoIn = new CSSEffect({
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
    const lineIn = new CSSEffect({
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
    const proIn = new CSSEffect({
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
    const logoCompIn = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class IntroFade extends HTMLClip {
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
    const fadeIn = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class SlideOne extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
  }
  get html() {
    this.attrs.overlayColor ??= "#ff00b34d";
    this.attrs.mainColor ??= "#00ff40";
    return `
      <div class="bg">
        <div class="container-logo">
          <div class="logo-client"><img src="${this.attrs.clientLogo}"></div>
          <div class="line"></div>
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
        <div class="app-holder"></div>
        <div class="border"></div>
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
        font-size: ${this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55)}px;
      }

      .text2{
        font-size: ${this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5)}px;
      }

      .text3{
        font-size: ${this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5)}px;
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2)}px;
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
    const content = new CSSEffect({
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
    const titleHolder = new CSSEffect({
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
    const appHolder = new CSSEffect({
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
    const border = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const titleHolderOut = new CSSEffect({
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
    const appHolderOut = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class SlideTwo extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
          <div class= "content-wrapper" >
            <p class="text1">${this.attrs.textOne}</p>
          </div>
        </div>
        <div class="title-holder">
          <span> ${this.attrs.contentTitle}</span>
        </div>
        <div class="app-holder"></div>
        <div class="border"></div>
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
        width: ${this.attrs.width * 0.6}px;
        height: 100%;
        position: absolute;
        overflow: hidden;
        top: 5%;
        right: 100%;
        z-index: 0;
        border-left: 5px solid;
        border-top: 5px solid;
        border-left: 5px solid;
        box-shadow: -8px -3px 23px rgba(0,0,0,0.65);
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2)}px;
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
    `;
  }
  buildTree() {
    const content = new CSSEffect({
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
    const titleHolder = new CSSEffect({
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
    const appHolder = new CSSEffect({
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
    const border = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const titleHolderOut = new CSSEffect({
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
    const appHolderOut = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class SlideThree extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
        <div class="content-container">
          <div class= "content-wrapper">
            <p class="text1">${this.attrs.textOne}</p>
          </div>
        </div>
        <div class="title-holder">
          <span> ${this.attrs.contentTitle}</span>
        </div>
        <div class="app-holder"></div>
        <div class="border"></div>
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
        top : -100%;
        left : 5%;
        display:flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        background: ${this.attrs.contentColor};
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2)}px;
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
    const content = new CSSEffect({
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
    const titleHolder = new CSSEffect({
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
    const appHolder = new CSSEffect({
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
    const border = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const titleHolderOut = new CSSEffect({
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
    const appHolderOut = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class Technologies extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
        bottom: 120%;
        display:flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        background: ${this.attrs.contentColor};
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

      .subtitle-holder{
        font-size: ${this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15)}px;
        color:${this.attrs.bgColor};
        background: #c10000;
        z-index: 3;
        text-transform: uppercase;
        box-shadow: -20px 9px 44px rgb(0, 0, 0);
        position: absolute;
        top:33%;
        left:120%;
        font-weight: 900;
        width: ${this.attrs.width * 0.2}px;
        height: ${this.attrs.height * 0.15}px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .title-holder{
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4)}px;
        color:${this.attrs.bgColor};
        background: ${this.attrs.fontColor};
        z-index: 4;
        text-transform: uppercase;
        box-shadow: -17px 7px 18px rgb(0, 0, 0);
        position: absolute;
        top:120%;
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
    let html = "";
    for (let i = 0; i < this.attrs.logos.length; i++) {
      html += `<div class="img"><img src="${this.attrs.logos[i]}"/></div>`;
    }
    const word = new HTMLClip({
      css: this.css,
      html: `<div class="img-container">${html}</div>`,
      selector: ".content-container"
    });
    this.addIncident(word, 0);
    const border = new CSSEffect({
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
    const content = new CSSEffect({
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
    const subtitle = new CSSEffect({
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
    const title = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const subtitleOut = new CSSEffect({
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
    const titleOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class Highlights extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
        font-size: ${this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15)}px;
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4)}px;
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
    const border = new CSSEffect({
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
    const content = new CSSEffect({
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
    const subtitle = new CSSEffect({
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
    const title = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const subtitleOut = new CSSEffect({
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
    const titleOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class SlideOneSVG extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
  }
  get html() {
    this.attrs.overlayColor ??= "#ff00b34d";
    this.attrs.mainColor ??= "#00ff40";
    return `
      <div class="bg">
        <div class="container-logo">
          <div class="logo-client"><img src="${this.attrs.clientLogo}"></div>
          <div class="line"></div>
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
        <div class="app-holder"></div>
        <div class="border">
          <svg height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" />
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
        font-size: ${this.dinamicFontSize(this.attrs.textOne.length, this.attrs.width * 0.55)}px;
      }

      .text2{
        font-size: ${this.dinamicFontSize(this.attrs.textTwo.length, this.attrs.width * 0.5)}px;
      }

      .text3{
        font-size: ${this.dinamicFontSize(this.attrs.textThree.length, this.attrs.width * 0.5)}px;
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
        position: absolute;
        overflow: hidden;
        top: 15%;
        left: 10%;
        z-index: 0;
        transform: rotate(-90deg);
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2)}px;
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
    const content = new CSSEffect({
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
    const titleHolder = new CSSEffect({
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
    const appHolder = new CSSEffect({
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
    const border = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const titleHolderOut = new CSSEffect({
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
    const appHolderOut = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class SlideTwoSVG extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
          <svg height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" />
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2)}px;
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
    const content = new CSSEffect({
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
    const titleHolder = new CSSEffect({
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
    const appHolder = new CSSEffect({
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
    const border = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const titleHolderOut = new CSSEffect({
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
    const appHolderOut = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class SlideThreeSVG extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
          <svg height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" />
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
        top : -100%;
        left : 5%;
        display:flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        background: ${this.attrs.contentColor};
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
        background: url(${this.attrs.app});
        background-size: cover;
        box-shadow: -31px 41px 44px 0px rgba(0,0,0,0.65);
      }
    
      .border{
        position: absolute;
        overflow: hidden;
        top: 15%;
        left: 10%;
        z-index: 0;
        transform: rotate(-90deg);
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.2)}px;
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
    const content = new CSSEffect({
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
    const titleHolder = new CSSEffect({
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
    const appHolder = new CSSEffect({
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
    const border = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const titleHolderOut = new CSSEffect({
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
    const appHolderOut = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class TechnologiesSVG extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
          <svg height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" />
          </svg>
        </div>
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
        bottom: 120%;
        display:flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        background: ${this.attrs.contentColor};
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

      .subtitle-holder{
        font-size: ${this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15)}px;
        color:${this.attrs.bgColor};
        background: #c10000;
        z-index: 3;
        text-transform: uppercase;
        box-shadow: -20px 9px 44px rgb(0, 0, 0);
        position: absolute;
        top:33%;
        left:120%;
        font-weight: 900;
        width: ${this.attrs.width * 0.2}px;
        height: ${this.attrs.height * 0.15}px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .title-holder{
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4)}px;
        color:${this.attrs.bgColor};
        background: ${this.attrs.fontColor};
        z-index: 4;
        text-transform: uppercase;
        box-shadow: -17px 7px 18px rgb(0, 0, 0);
        position: absolute;
        top:120%;
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
    let html = "";
    for (let i = 0; i < this.attrs.logos.length; i++) {
      html += `<div class="img"><img src="${this.attrs.logos[i]}"/></div>`;
    }
    const word = new HTMLClip({
      css: this.css,
      html: `<div class="img-container">${html}</div>`,
      selector: ".content-container"
    });
    this.addIncident(word, 0);
    const border = new CSSEffect({
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
    const content = new CSSEffect({
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
    const subtitle = new CSSEffect({
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
    const title = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const subtitleOut = new CSSEffect({
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
    const titleOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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

class HighlightsSVG extends HTMLClip {
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
      type: `google-font`,
      src: `href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap`
    }];
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
          <svg height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape2" height="${this.attrs.width * 0.6}" width="${this.attrs.height}px" />
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
        font-size: ${this.dinamicFontSize(this.attrs.contentSubTitle.length, this.attrs.width * 0.15)}px;
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
        font-size: ${this.dinamicFontSize(this.attrs.contentTitle.length, this.attrs.width * 0.4)}px;
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
    const border = new CSSEffect({
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
    const content = new CSSEffect({
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
    const appScroll = new CSSEffect({
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
    const subtitle = new CSSEffect({
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
    const title = new CSSEffect({
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
    const borderOut = new CSSEffect({
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
    const contentOut = new CSSEffect({
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
    const subtitleOut = new CSSEffect({
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
    const titleOut = new CSSEffect({
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
    const bgout = new CSSEffect({
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
var version = "1.3.0";

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

export { index as default };
