export const makePaymentRequest = async (endpoint, payload) => {
  try {
    const response = await fetch(`http://127.0.0.1:1337/api${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error occured while  making payment request", error);
  }
};
