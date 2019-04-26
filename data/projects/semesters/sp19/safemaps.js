// Data for the Fa18 C2TC Project - 3rd C2TC project (Safe Maps)
const name = "Safe Maps";
const id = "safemaps"; // second C2TC Project
const detail = "How might we make students feel safer on campus?";
const coverImagePath = "/static/images/projects/safemaps/safemaps-cover.png";
const clientDetail =
  "Navigate safely through campus and learn about the health and safety resources near you with Illini SafeMaps. Illini SafeMaps is your real-time safety companion. With Illini SafeMaps, you can navigate around the U of I campus safely by viewing the locations of past crimes, police stations, emergency phones, running buses, open businesses, and streetlights. This app also enables you to be notified and access safety and health resources near you including SafeWalks and SafeRides so you can stay informed and make safer decisions.";
const clientLink =
  "http=//iventure.illinois.edu/index.php/portfolio/wanderweb/";
const clientFeatures = [
  {
    title: "Students that don't feel safe",
    detail: "93.9%"
  },
  {
    title: "Never used Safewalks/Saferides",
    detail: "77.6%"
  },
  {
    title: "Ranks UIUC's safety below 3",
    detail: "45%"
  }
];
const problem =
  "Settling onto a sprawling campus of over 354 University buildings, 12,454 international students, 33,673 undergraduates can be an overwhelming experience for UIUC students. Currently, the University offers introductory programs including Freshmen and International Student Orientation programs that gives students a preview of available safety & wellness resources. However, after those introductory programs conclude, there is little guidance or follow-up on where and how to navigate these safety resources. This sense of being overwhelmed is particularly heightened when students are in transit — traveling around at night, walking in areas they have not been to before, etc";
const problemImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const solution =
  "This mobile application aims to provide quick & easy access information to students as they navigate around the campus through location-triggered tip notifications, empowering students to better understand their surroundings and ultimately make more informed decisions throughout the school year.";
const solutionImagePath = "/static/images/projects/safemaps/safemaps-cover.png";
const features = [
  {
    title: "Location and Map Services",
    detail:
      "Users can browse the map, know their current location, and zoom back to their current location using their phone’s native map application.",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-map.png"
  },
  {
    title: "Filter Data",
    detail:
      "The C2TC app has location information on U of I’s bus stops, crimes in the past month, open businesses, emergency phones, police stations, street lights and keeps these updated constantly. ",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-filters.png"
  },
  {
    title: "Applying Filters",
    detail:
      "Users can then apply filters to see how dangerous the surrounding area and what the best path to take home at night.",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-apply-filters.png"
  },
  {
    title: "Safe Rides and Safe Walks Integration",
    detail:
      "Users can quickly call safe rides and safe walks within the app if they are not comfortable walking home alone.",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-safe-rides.png"
  }
];

const featureImgSize = "4";
const techStack = ["reactnative", "flask", "mongodb", "redux"];
const quote =
  "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing.";
const quoteSource = "Premika Pandian";
const quoteSourceTitle = "Cut to the Case Co-Founder and CTO";
const githubLink = "https://github.com/hack4impact-uiuc/safe-maps";
const team = {
  type: "pics",
  detail: [
    {
      name: "Shreyas Mohan",
      role: "Product Manager"
    },
    {
      name: "Megha Mallya",
      role: "Tech Lead"
    },
    {
      name: "Albert Cao",
      role: "Software Developer"
    },
    {
      name: "Neeraj Aggarwal",
      role: "Software Developer"
    },
    {
      name: "Michael Leon",
      role: "Software Developer"
    },
    {
      name: "Alice Fang",
      role: "Software Developer"
    },
    {
      name: "Rebecca Xun",
      role: "Software Developer"
    },
    {
      name: "Phillip Kuo",
      role: "UI/UX Designer"
    },
    {
      name: "Annie Wu",
      role: ""
    }
  ]
};

export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  team,
  featureImgSize
};
