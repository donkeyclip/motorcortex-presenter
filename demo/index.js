const MotorCortex = require("@kissmybutton/motorcortex/");
const Player = require("@kissmybutton/motorcortex-player/");
const softclip = require("../src/main");
const Clip = MotorCortex.loadPlugin(softclip);
const css = `
             
.container {
  overflow: hidden;
  display: flex;
  position: absolute;
}

  `;
const html = ` 
  <div class="container container1"></div>
  <div class="container container2"></div>
  <div class="container container3"></div>
  <div class="container container4"></div>
  <div class="container container5"></div>
 
  
  `;

const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%"
};

const overlay = ["#0012E2c0", "#101820FF"];
const main = "#FEE715FF";

const clip = new MotorCortex.Clip({
  css,
  html,
  host,
  containerParams,
  id: "root"
});
const introClip = new Clip.Intro(
  {
    width: "1270px",
    height: "720px",
    clientLogo: "img.svg",
    clientLogoWidth: 500,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    date: "2019 - Today",
    bgUrl: "./bg.jpg",
    overlayColor: overlay,
    mainColor: main,
    fontColor: "#fff",
    speed: 2
  },
  {
    selector: ".container5"
  }
);

const SlideOne = new Clip.SlideOne(
  {
    width: 1270,
    height: 720,
    clientLogo: "img.svg",
    clientLogoWidth: 150,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    textOne: "generic",
    textTwo: "module-based",
    textThree: "eHealth platform",
    bgColor: "#000c8f",
    overlayColor: overlay,
    mainColor: main,
    fontColor: "#fff",
    speed: 2,
    contentTitle: "Scope"
  },
  {
    selector: ".container4"
  }
);

const SlideTwo = new Clip.SlideTwo(
  {
    width: 1270,
    height: 720,
    clientLogo: "img.svg",
    clientLogoWidth: 150,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    textOne:
      "Patients answer to the questionnaires, read articles and consume personalized content based on their condition, progress and answers, always maintaining their anonymity",
    bgColor: "#000c8f",
    overlayColor: overlay,
    mainColor: main,
    fontColor: "#fff",
    speed: 2,
    contentTitle: "Scope",
    fonSize: 40
  },
  {
    selector: ".container3"
  }
);

const SlideThree = new Clip.SlideThree(
  {
    width: 1270,
    height: 720,
    clientLogo: "img.svg",
    clientLogoWidth: 150,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    textOne:
      "Patients answer to the questionnaires, read articles and consume personalized content based on their condition, progress and answers, always maintaining their anonymity",
    bgColor: "#000c8f",
    overlayColor: overlay,
    mainColor: main,
    fontColor: "#fff",
    speed: 2,
    contentTitle: "Scope",
    fonSize: 40
  },
  {
    selector: ".container2"
  }
);


const Technologies = new Clip.Technologies(
  {
    width: 1270,
    height: 720,
    clientLogo: "img.svg",
    clientLogoWidth: 150,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    img1: ["./1.png","./2.png","./3.png","./4.png","./5.png"],
    // img2: "./2.png",
    // img3: "./3.png",
    // img4: "./4.png",
    // img5: "./5.png",
    bgColor: "#000c8f",
    overlayColor: overlay,
    mainColor: main,
    fontColor: "#fff",
    speed: 2,
    contentTitle: "Technologies",
    fonSize: 40,
    contentSubTitle: "USed"
  },
  {
    selector: ".container1"
  }
);



// clip.addIncident(introClip, 0);
// clip.addIncident(SlideOne, 3000);
// clip.addIncident(SlideTwo, 9000);
// clip.addIncident(SlideThree, 15000); //15000
clip.addIncident(Technologies, 0); //21000


new Player({ clip });
