// Data for the sp19 kiva Project - 2nd kiva project
const name = "Kiva";
const id = "kiva-2"; // second kiva Project
const detail = "How might we make students feel safer on campus?";
const coverImagePath = "/static/images/projects/kiva-1/kiva-1-cover.jpg";
const clientDetail =
  "Kiva is a non-profit organization which crowdfunds loans for lower-income and underserved people all across the world. Kiva Field Partners act as intermediaries between Kiva and borrowers and are largely responsible for managing the details of loans and repayment. Currently, Field Partner financial documents are submitted through Kiva through email and must be manually checked to make sure all documents are provided and are properly filled out/formatted/etc. – our project will consolidate this process into a single portal where Field Partners and Portfolio Managers can see which documents need to be uploaded and track their progress. We’ll integrate this with some file repository service (likely Box or GitHub) and aim to create a streamlined, secure portal that will eliminate the hassle of tracking multiple financial documents across a wide network of Field Partners.";
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
  "Cut to the Case is a UIUC based non-profit started by two UIUC Engineering students whose initial mission was to help victims of sexual assault. Now, Cut to the Case has expanded their focus into tackling public safety with the hopes of improving the safety of all students on campus";
const problemImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
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
