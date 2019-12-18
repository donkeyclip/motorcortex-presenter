"use strict";

var Intro = require("./Intro");

var IntroFade = require("./IntroFade");

var SlideOne = require("./SlideOne");

var SlideTwo = require("./SlideTwo");

var SlideThree = require("./SlideThree");

var Technologies = require("./Technologies");

var Highlights = require("./Highlights");

var SlideOneSVG = require("./SlideOneSVG");

var SlideTwoSVG = require("./SlideTwoSVG");

var SlideThreeSVG = require("./SlideThreeSVG");

var TechnologiesSVG = require("./TechnologiesSVG");

var HighlightsSVG = require("./HighlightsSVG");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-presenter",
  incidents: [{
    exportable: Intro,
    name: "Intro"
  }, {
    exportable: IntroFade,
    name: "IntroFade"
  }, {
    exportable: SlideOne,
    name: "SlideOne"
  }, {
    exportable: SlideOneSVG,
    name: "SlideOneSVG"
  }, {
    exportable: SlideTwo,
    name: "SlideTwo"
  }, {
    exportable: SlideTwoSVG,
    name: "SlideTwoSVG"
  }, {
    exportable: SlideThree,
    name: "SlideThree"
  }, {
    exportable: SlideThreeSVG,
    name: "SlideThreeSVG"
  }, {
    exportable: Technologies,
    name: "Technologies"
  }, {
    exportable: TechnologiesSVG,
    name: "TechnologiesSVG"
  }, {
    exportable: Highlights,
    name: "Highlights"
  }, {
    exportable: HighlightsSVG,
    name: "HighlightsSVG"
  }]
};