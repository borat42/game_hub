import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c982e2f6729848d491c861881165c770",
  },
});
