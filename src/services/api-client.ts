import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "32a89f5899e248509e758098b1ac378e",
  },
});
