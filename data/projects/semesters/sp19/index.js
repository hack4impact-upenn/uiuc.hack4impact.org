import Sp19SafeMapsData from "./safemaps";
import KivaData from "./kiva";
import GlobalGivingData from "./gg";
import ProductInfraData from "./pi";

// Fa18 Project Data
export default {
  semester: "Spring 2019",
  projects: [
    {
      ...Sp19SafeMapsData
    },
    {
      ...KivaData
    },
    {
      ...GlobalGivingData
    },
    {
      ...ProductInfraData
    }
  ]
};
