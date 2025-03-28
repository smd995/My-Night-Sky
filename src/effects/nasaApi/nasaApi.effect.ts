export const nasaApi = () => {
  const baseUrl = process.env.VITE_NASA_API_URL;
  const apiKey = process.env.VITE_NASA_API_KEY;

  const findOne = async () => {
    const response = await fetch(baseUrl + `/apod?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  };

  return { findOne };
};
