const frAPI =
  "https://api.openweathermap.org/data/2.5/weather?id=2288873&appid=bc32b3f8b0e585a4ff11b0fd71de1591&lang=es&units=metric";

const getDataFr = async () => {
  const apiURL = `${frAPI}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getDataFr;
