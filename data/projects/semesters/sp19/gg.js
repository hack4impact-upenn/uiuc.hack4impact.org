// Data for the Sp19 Global Giving Project - 2nd gg project
const name = "Global Giving";
const id = "gg-2"; // second GG Project
const detail = "How might we expand Global Giving’s impact and reach on domestic and international nonprofits?";
const coverImagePath = "/static/images/projects/gg/gg-map.png";
const clientDetail =
"Global Giving seeks to identify nonprofits around the world, creating a central directory of nonprofits. They also aim to connect each nonprofit with the necessary resources, such as connecting them with donors or setting up crowdfunding options to help the nonprofit succeed.";
const clientLink =
"https=//www.globalgiving.org/";
const clientFeatures = [
    {
      title: "In Donations",
      detail: "$324 Million"
    },
    {
      title: "Funded",
      detail: "20,000 Projects"
    },
    {
      title: "Reach",
      detail: "170 Countries"
    }
  ];
  const problem =
    "Currently, GlobalGiving connects with organizations based in the US along with some nonprofits in other countries. However, the process of finding and applying to GlobalGiving remains significantly easier within the United States. In certain countries, factors including lack of internet connectivity and lack of access to documents required by GlobalGiving has led to slower onboarding and discovery of the organization.";
  const problemImagePath = "/static/images/projects/gg/gg-cover.jpg";
const solution =
  "We want to educate students about what’s around them. If we give them the information they need about what’s around campus, they will be better prepared to make decisions on how they should get home. From our research, we discovered that many students value knowing about where emergency phones, open businesses, lighting, past crimes, and other people are. For the app, we focused on giving students information about open businesses, emergency phones, police stations, street lights, bus stops, and past crimes are. ";
const solutionImagePath = "/static/images/projects/question.jpg";
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
const techStack = ["reactnative", "flask", "mongodb"];
const quote =
  "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing.";
const quoteSource = "Premika Pandian";
const quoteSourceTitle = "Cut to the Case Co-Founder and CTO";
const githubLink = "https://github.com/hack4impact-uiuc/c2tc-fall-2018";
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
      name: "Josh Burke",
      role: "Software Developer"
    },
    {
      name: "Neeraj Aggarwal",
      role: "Software Developer"
    },
    {
      name: "Daniel Choi",
      role: "Software Developer"
    },
    {
      name: "Anooj Lal",
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
