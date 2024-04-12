const getProducts = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api${endpoint}`,
      options
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(`error occured while fetching products data`);
  }
};
export default getProducts;
