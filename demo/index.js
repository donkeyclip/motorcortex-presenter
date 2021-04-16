import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex";
import Player from "@kissmybutton/motorcortex-player";
import presenter from "../dist/motorcortex-presenter.umd.js";

const Clip = loadPlugin(presenter);
const overlay = ["#0012E2c0", "#101820FF"];

const clip = new HTMLClip({
  css: `
    .container {
      overflow: hidden;
      display: flex;
      position: absolute;
      width:1280px;
      height:720px;
    }
  `,
  html: ` 
    <div class="container container1"></div>
    <div class="container container2"></div>
    <div class="container container3"></div>
    <div class="container container4"></div>
    <div class="container container5"></div>
    <div class="container container6"></div>
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1270px",
    height: "720px"
  }
});

const introClip = new Clip.Intro(
  {
    width: 1270,
    height: 720,
    clientLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/img.svg",
    clientLogoWidth: 500,
    compLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/logo.png",
    compLogoWidth: 150,
    title: "RMIS / University of Zurich",
    date: "2019 - Today",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/bg.jpg",
    overlayColor: overlay,
    fontColor: "#fff",
    speed: 2
  },
  {
    selector: ".container6"
  }
);

const SlideOneSVG = new Clip.SlideOneSVG(
  {
    width: 1270,
    height: 720,
    clientLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/img.svg",
    clientLogoWidth: 150,
    compLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/logo.png",
    compLogoWidth: 150,
    title: "RMIS / University of Zurich",
    textOne: "generic",
    textTwo: "module-based",
    textThree: "eHealth platform",
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    speed: 2,
    contentTitle: "Scope",
    app:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/app.png"
  },
  {
    selector: ".container5"
  }
);

const SlideTwoSVG = new Clip.SlideTwoSVG(
  {
    width: 1270,
    height: 720,
    clientLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/img.svg",
    clientLogoWidth: 150,
    compLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/logo.png",

    title: "RMIS / University of Zurich",
    textOne:
      "Patients answer to the questionnaires, read articles and consume personalized content based on their condition, progress and answers, always maintaining their anonymity",
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    speed: 2,
    contentTitle: "Scope",
    fonSize: 40,
    app:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/app.png"
  },
  {
    selector: ".container4"
  }
);

const SlideThreeSVG = new Clip.SlideThreeSVG(
  {
    width: 1270,
    height: 720,
    clientLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/img.svg",
    clientLogoWidth: 150,
    compLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/logo.png",

    title: "RMIS / University of Zurich",
    textOne:
      "Patients answer to the questionnaires, read articles and consume personalized content based on their condition, progress and answers, always maintaining their anonymity",
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    speed: 2,
    contentTitle: "Scope",
    fonSize: 40,
    app:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/app.png"
  },
  {
    selector: ".container3"
  }
);

const TechnologiesSVG = new Clip.TechnologiesSVG(
  {
    width: 1270,
    height: 720,
    clientLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/img.svg",
    clientLogoWidth: 150,
    compLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/logo.png",
    title: "RMIS / University of Zurich",
    logos: [
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/1.png",
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/2.png",
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/3.png",
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/4.png",
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/5.png"
    ],
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    speed: 2,
    contentTitle: "Technologies",
    fonSize: 40,
    contentSubTitle: "USed"
  },
  {
    selector: ".container2"
  }
);

const HighlightsSVG = new Clip.HighlightsSVG(
  {
    width: 1270,
    height: 720,
    clientLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/img.svg",
    clientLogoWidth: 150,
    compLogo:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/logo.png",
    title: "RMIS / University of Zurich",
    app:
      "https://kissmybutton.github.io/motorcortex-presenter/demo/assets/appLong.png",
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    speed: 2,
    contentTitle: "Highlights",
    fonSize: 40,
    contentSubTitle: "USed",
    scroll: true
  },
  {
    selector: ".container1"
  }
);

clip.addIncident(introClip, 0);
clip.addIncident(SlideOneSVG, 3000);
clip.addIncident(SlideTwoSVG, 9000);
clip.addIncident(SlideThreeSVG, 15000);
clip.addIncident(TechnologiesSVG, 21000);
clip.addIncident(HighlightsSVG, 27000);

new Player({ clip });
