// Data for the sp19 PI Project
const name = "Product Infrastructure";
const id = "pi"; // second C2TC Project
const detail = "How might we help Hack4Impact teams with setting up ground work and the quality of their product?";
const coverImagePath = "/static/images/projects/pi/pi-thumbnail.png";
const clientDetail =
  "The goal of product infrastructure is to build generalized problems to these solutions. We want to build a open sourced authentication system with easy integration and well-thought out solutions for allowing users to securely handle signing up for an account, logging in, changing passwords, and promoting people to different levels of access";
const clientLink = null;
const clientFeatures = [
  {
    title: "H4I members that are suffering",
    detail: "100%"
  },
  {
    title: "H4I members that need this",
    detail: "100%"
  },
  {
    title: "H4I members that will need this",
    detail: "100%"
  }
];
const problem =
  "Many of the nonprofits we work end up creating projects that have an authentication system. Often times, every team develops their own version of it, but many times cut corners in order to focus on the rest of the product and deliver in a timely fashion. This opens up many potential  vulnerabilities in the implemented security system.";
const problemImagePath = "/static/images/projects/pi/pi-problem.png";
const solution =
  "We split this up into a authentication web server that teams can spin up. In order to spin it up they would need to provide a mongo uri, secret key, and url to deploy to. This deploys an API that they can use for authentication on the server side. In addition, from the client side we want to build higher order components that would validate the information and make the necessary requests. This should simplify a lot of the work on the frontend to integrate it in to their current systems. It would also prevent teams from having to do work that would be repetitive while still allowing them to style the pages appropriately.";
const solutionImagePath = "/static/images/projects/pi/pi-login.jpg";
const features = [
  {
    title: "Registration/Login",
    detail:
      "We provide customizable information for registration/login pages. Also, autogenerated tokens are refreshed every hour and used to authenticate.",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-map.png"
  },
  {
    title: "Forgot Password",
    detail:
      "We provide customizable ways (email or security question) to confirm the user’s identity before allowing them to set a new password",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-filters.png"
  },
  {
    title: "Role Change",
    detail:
      "You can promote/demote users given the correct permission levels",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-apply-filters.png"
  },
  {
    title: "Profile",
    detail:
      "You can change the password, security question, and verify the email.\n Also, you can see information on the users email, id, role, and whether or not they are verified",
    imgPath: "/static/images/projects/c2tc-2/c2tc-2-safe-rides.png"
  }
];

const featureImgSize = "4";
const techStack = ["yargs", "express", "mongodb", "next"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/infra-auth-cli-tool";
const team = {
  type: "pics",
  detail: [
    {
      name: "Hana Rimawi",
      role: "Product Manager"
    },
    {
      name: "Aria Malkani",
      role: "Tech Lead"
    },
    {
      name: "Michael Chen",
      role: "Software Developer"
    },
    {
      name: "Josh Byster",
      role: "Software Developer"
    },
    {
      name: "Helena Chi",
      role: "Software Developer"
    },
    {
      name: "Nithin Rajkumar",
      role: "Software Developer"
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
