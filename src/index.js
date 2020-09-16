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
const attrs = require("./validation");
module.exports = {
  npm_name: "@kissmybutton/motorcortex-presenter",
  incidents: [
    {
      exportable: Intro,
      name: "Intro",
      attributesValidationRules: attrs.intro
    },
    {
      exportable: IntroFade,
      name: "IntroFade",

    },
    {
      exportable: SlideOne,
      name: "SlideOne",
      attributesValidationRules: attrs.SlideOneSVG
    },
    {
      exportable: SlideOneSVG,
      name: "SlideOneSVG",
      attributesValidationRules: attrs.SlideOneSVG
    },
    {
      exportable: SlideTwo,
      name: "SlideTwo",
      attributesValidationRules: attrs.SlideTwo
    },
    {
      exportable: SlideTwoSVG,
      name: "SlideTwoSVG",
      attributesValidationRules: attrs.SlideTwo
    },
    {
      exportable: SlideThree,
      name: "SlideThree",
      attributesValidationRules: attrs.SlideTwo
    },
    {
      exportable: SlideThreeSVG,
      name: "SlideThreeSVG",
      attributesValidationRules: attrs.SlideTwo
    },
    {
      exportable: Technologies,
      name: "Technologies",
      attributesValidationRules: attrs.Technologies
    },
    {
      exportable: TechnologiesSVG,
      name: "TechnologiesSVG",
      attributesValidationRules: attrs.Technologies
    },
    {
      exportable: Highlights,
      name: "Highlights",
      attributesValidationRules: attrs.Highlights
    },
    {
      exportable: HighlightsSVG,
      name: "HighlightsSVG",
      attributesValidationRules: attrs.Highlights
    }
  ]
};
