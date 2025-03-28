export const contentApi = () => {
  const findOne = async () => {
    console.log(process.env.VITE_API_URL);
    const response = await fetch(process.env.VITE_API_URL + "/contents");
    const data = await response.json();

    return data;
  };

  return { findOne };
};
