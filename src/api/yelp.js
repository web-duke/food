import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5PvfiwbVOenen2LK_Ke3Tcr-twAK3wAxEZF4Cf5poeV1YPLO_DJUtWNXwOLziOg2-pnUAS4-1LU-Guvi74P9f5PusPLsGhFyUFNxVETgtuEvbH7fJI1D1QKhL98-X3Yx",
  },
});
