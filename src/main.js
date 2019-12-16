const Intro = require("./Intro");
const IntroFade = require("./IntroFade");
const SlideOne = require("./SlideOne");
const SlideTwo = require("./SlideTwo");
const SlideThree = require("./SlideThree");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-softslide",
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
      exportable: SlideTwo,
      name: "SlideTwo"
    },
    {
      exportable: SlideThree,
      name: "SlideThree"
    }
  ]
};
