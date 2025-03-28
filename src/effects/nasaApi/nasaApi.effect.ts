import { getEnv } from "../../test/getEnv";

export const nasaApi = () => {
  const baseUrl = getEnv("VITE_NASA_API_URL");
  const apiKey = getEnv("VITE_NASA_API_KEY");

  const findOne = async () => {
    const response = await fetch(baseUrl + `/apod?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  };

  return { findOne };
};
