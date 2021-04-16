import Intro from "./Intro";
import IntroFade from "./IntroFade";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import Technologies from "./Technologies";
import Highlights from "./Highlights";
import SlideOneSVG from "./SlideOneSVG";
import SlideTwoSVG from "./SlideTwoSVG";
import SlideThreeSVG from "./SlideThreeSVG";
import TechnologiesSVG from "./TechnologiesSVG";
import HighlightsSVG from "./HighlightsSVG";
import {
  introVal,
  SlideOneSVGVal,
  SlideTwoVal,
  TechnologiesVal,
  HighlightsVal
} from "./validation";
import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: Intro,
      name: "Intro",
      attributesValidationRules: introVal
    },
    {
      exportable: IntroFade,
      name: "IntroFade"
    },
    {
      exportable: SlideOne,
      name: "SlideOne",
      attributesValidationRules: SlideOneSVGVal
    },
    {
      exportable: SlideOneSVG,
      name: "SlideOneSVG",
      attributesValidationRules: SlideOneSVGVal
    },
    {
      exportable: SlideTwo,
      name: "SlideTwo",
      attributesValidationRules: SlideTwoVal
    },
    {
      exportable: SlideTwoSVG,
      name: "SlideTwoSVG",
      attributesValidationRules: SlideTwoVal
    },
    {
      exportable: SlideThree,
      name: "SlideThree",
      attributesValidationRules: SlideTwoVal
    },
    {
      exportable: SlideThreeSVG,
      name: "SlideThreeSVG",
      attributesValidationRules: SlideTwoVal
    },
    {
      exportable: Technologies,
      name: "Technologies",
      attributesValidationRules: TechnologiesVal
    },
    {
      exportable: TechnologiesSVG,
      name: "TechnologiesSVG",
      attributesValidationRules: TechnologiesVal
    },
    {
      exportable: Highlights,
      name: "Highlights",
      attributesValidationRules: HighlightsVal
    },
    {
      exportable: HighlightsSVG,
      name: "HighlightsSVG",
      attributesValidationRules: HighlightsVal
    }
  ]
};
