import axios from "axios";
export const getRecipes = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: size || "20",
      tags,
    },
    headers: {
      "x-rapidapi-key": "28272b59d3msh38858dea32172cdp1f8007jsn73f47b6e2a43",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
