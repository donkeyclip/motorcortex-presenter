const Intro = require("./Intro");
const IntroFade = require("./IntroFade");
const SlideOne = require("./SlideOne");
const SlideTwo = require("./SlideTwo");
const SlideThree = require("./SlideThree");
const Technologies = require("./Technologies");
const Highlights = require("./Highlights");
const SlideOneSVG = require("./SlideOneSVG");
const SlideTwoSVG = require("./SlideTwoSVG");
const SlideThreeSVG = require("./SlideThreeSVG");
const TechnologiesSVG = require("./TechnologiesSVG");
const HighlightsSVG = require("./HighlightsSVG");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-presenter",
  incidents: [
    {
      exportable: Intro,
      name: "Intro"
    },
    {
      exportable: IntroFade,
      name: "IntroFade"
    },
    {
      exportable: SlideOne,
      name: "SlideOne"
    },
    {
      exportable: SlideOneSVG,
      name: "SlideOneSVG"
    },
    {
      exportable: SlideTwo,
      name: "SlideTwo"
    },
    {
      exportable: SlideTwoSVG,
      name: "SlideTwoSVG"
    },
    {
      exportable: SlideThree,
      name: "SlideThree"
    },
    {
      exportable: SlideThreeSVG,
      name: "SlideThreeSVG"
    },
    {
      exportable: Technologies,
      name: "Technologies"
    },
    {
      exportable: TechnologiesSVG,
      name: "TechnologiesSVG"
    },
    {
      exportable: Highlights,
      name: "Highlights"
    },
    {
      exportable: HighlightsSVG,
      name: "HighlightsSVG"
    }
  ]
};
