const BASE_URL = "https://api.rawg.io/api";

type FetchTypes = "GET" | "POST";

export const fetchData = async (
  url: string,
  type: FetchTypes,
  queryParams?: object,
  body?: object
) => {
  let query = `?key=${process.env.NEXT_PUBLIC_API_KEY}`;
  if (queryParams) {
    query += "&";
    query += Object.entries(queryParams)
      .map((param) => `${param[0]}=${param[1]}`)
      .join("&");
    console.log("query", query);
  }
  const fullURL = `${BASE_URL}${url}${query}`;
  try {
    const response = await fetch(fullURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
