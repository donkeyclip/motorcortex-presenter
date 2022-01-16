# MotorCortex-Presenter

**Table of Contents**

- [MotorMortex-Presenter](#motorcortex-presenter)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Intro](#intro)
  - [SlideOne](#slideone)
  - [SlideTwo / SlideThree](#slidetwo--slidethree)
  - [Technologies](#technologies)
  - [Highlights](#highlights)
  - [Clip classes](#clip-classes)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo
[Check it out here](https://donkeyclip.github.io/motorcortex-presenter/demo/)

# Intro / Features
If you are looking for a simple way to create amazing clip presentations, MotorCortex-Presenter is the right plugin for you.

This Plugin exposes five Incident:
- Intro
- SlideOne
- SlideTwo
- Technologies
- Highlights

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-presenter
# OR
$ yarn add @donkeyclip/motorcortex-presenter
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import presenterPlugin from "@donkeyclip/motorcortex-presenter";
const Clip = loadPlugin(presenterPlugin);
```

# Creating Incidents

## Intro 

```javascript
const introClip = new Clip.Intro(
  {
    width: 1270,
    height: 720,
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
  },
  {
    selector: ".container6",
  }
);
```

### Intro Attrs

| Name            |                  Are                  |                    Values |
| --------------- | :-----------------------------------: | ------------------------: |
| width           |           width of the clip           |             string/number |
| height          |          height of the clip           |             string/number |
| clientLogo      |          path of client logo          |                    string |
| clientLogoWidth |          size of clien logo           |             string/number |
| compLogo        |   path of company or dev team logo    |                    string |
| compLogoWidth   |   size of company or dev team logo    |             string/number |
| title           |       the title of project/app        |                    string |
| date            |     start and end year of project     |                    string |
| overlayColor    | the overlay color of background image | hex values or RGB or text |
| fontColor       |          the color of fonts           | hex values or RGB or text |

## SlideOne

```javascript
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
    contentColor: "#c10000",
    overlayColor: overlay,
    fontColor: "#fff",
    contentTitle: "Scope",
    app: "./app.png",
  },
  {
    selector: ".container5",
  }
);
```

### SlideOne Attrs

| Name                      |                          Are                           |                                Values |
| ------------------------- | :----------------------------------------------------: | ------------------------------------: |
| width                     |                   width of the clip                    |                         string/number |
| height                    |                   height of the clip                   |                         string/number |
| clientLogo                |                  path of client logo                   |                                string |
| clientLogoWidth           |                   size of clien logo                   |                         string/number |
| compLogo                  |            path of company or dev team logo            |                                string |
| compLogoWidth             |            size of company or dev team logo            |                         string/number |
| title                     |                the title of project/app                |                                string |
| textOne,textTwo,textThree | 3 rows that describe the main consepts of the projects |                                string |
| contentColor              |             the color of content container             |    hex values or RGB or text img path |
| bgColor                   |                the color of background                 | hex values or RGB or text or img path |
| contentTitle              |                     title of slide                     |                                string |
| overlayColor              |         the overlay color of background image          |             hex values or RGB or text |
| fontColor                 |                   the color of fonts                   |             hex values or RGB or text |
| app                       |                    path of app img                     |                                string |

## SlideTwo / SlideThree

```javascript
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
    fontColor: "#fff",
    contentColor: "#c10000",
    contentTitle: "Scope",
    fonSize: 40,
    app: "./app.png",
  },
  {
    selector: ".container4",
  }
);
```

### SlideTwo / SlideThree Attrs

| Name            |                            Are                            |                                Values |
| --------------- | :-------------------------------------------------------: | ------------------------------------: |
| width           |                     width of the clip                     |                         string/number |
| height          |                    height of the clip                     |                         string/number |
| clientLogo      |                    path of client logo                    |                                string |
| clientLogoWidth |                    size of clien logo                     |                         string/number |
| compLogo        |             path of company or dev team logo              |                                string |
| compLogoWidth   |             size of company or dev team logo              |                         string/number |
| title           |                 the title of project/app                  |                                string |
| textOne         | paragraph that describe the main consepts of the projects |                                string |
| contentColor    |              the color of content container               |    hex values or RGB or text img path |
| bgColor         |                  the color of background                  | hex values or RGB or text or img path |
| contentTitle    |                      title of slide                       |                                string |
| overlayColor    |           the overlay color of background image           |             hex values or RGB or text |
| fontColor       |                    the color of fonts                     |             hex values or RGB or text |
| fontSize        |                  font size of paragraph                   |                                   num |
| app             |                      path of app img                      |                                string |

## Technologies

```javascript
const Technologies = new Clip.Technologies(
  {
    width: 1270,
    height: 720,
    clientLogo: "img.svg",
    clientLogoWidth: 150,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    logos: ["./1.png", "./2.png", "./3.png", "./4.png", "./5.png"],
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    contentTitle: "Technologies",
    contentSubTitle: "USed",
  },
  {
    selector: ".container2",
  }
);
```

### Technologies Attrs

| Name            |                  Are                  |                                Values |
| --------------- | :-----------------------------------: | ------------------------------------: |
| width           |           width of the clip           |                         string/number |
| height          |          height of the clip           |                         string/number |
| clientLogo      |          path of client logo          |                                string |
| clientLogoWidth |          size of clien logo           |                         string/number |
| compLogo        |   path of company or dev team logo    |                                string |
| compLogoWidth   |   size of company or dev team logo    |                         string/number |
| title           |       the title of project/app        |                                string |
| logos           |         array with img paths          |                      array of strings |
| contentColor    |    the color of content container     |    hex values or RGB or text img path |
| bgColor         |        the color of background        | hex values or RGB or text or img path |
| contentTitle    |            title of slide             |                                string |
| overlayColor    | the overlay color of background image |             hex values or RGB or text |
| fontColor       |          the color of fonts           |             hex values or RGB or text |
| app             |            path of app img            |                                string |

## Highlights

```javascript
const Highlights = new Clip.Highlights(
  {
    width: 1270,
    height: 720,
    clientLogo: "img.svg",
    clientLogoWidth: 150,
    compLogo: "logo.png",
    compLogoWidth: "150px",
    title: "RMIS / University of Zurich",
    app: "./app.png",
    bgColor: "#000c8f",
    overlayColor: overlay,
    fontColor: "#fff",
    contentColor: "#c10000",
    contentTitle: "Highlights",
    contentSubTitle: "USed",
    scroll: false,
  },
  {
    selector: ".container1",
  }
);
```

### Highlights Attrs

| Name            |                  Are                  |                                Values |
| --------------- | :-----------------------------------: | ------------------------------------: |
| width           |           width of the clip           |                         string/number |
| height          |          height of the clip           |                         string/number |
| clientLogo      |          path of client logo          |                                string |
| clientLogoWidth |          size of clien logo           |                         string/number |
| compLogo        |   path of company or dev team logo    |                                string |
| compLogoWidth   |   size of company or dev team logo    |                         string/number |
| title           |       the title of project/app        |                                string |
| contentSubTitle |           subtitle of slide           |                                string |
| contentColor    |    the color of content container     |    hex values or RGB or text img path |
| bgColor         |        the color of background        | hex values or RGB or text or img path |
| contentTitle    |            title of slide             |                                string |
| overlayColor    | the overlay color of background image |             hex values or RGB or text |
| fontColor       |          the color of fonts           |             hex values or RGB or text |
| app             |            path of app img            |                                string |

| scroll | if the app img will scroll | boolean |

## Clip classes

| Clip         |   Svg version   |
| ------------ | :-------------: |
| Intro        |        -        |
| SlideOne     |   SlideOneSVG   |
| SlideTwo     |   SlideTwoSVG   |
| SlideThree   |  SlideThreeSVG  |
| Technologies | TechnologiesSVG |
| Highlights   |  HighlightsSVG  |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)

