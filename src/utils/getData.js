const bgtAPI =
  "https://api.openweathermap.org/data/2.5/weather?id=3688689&appid=bc32b3f8b0e585a4ff11b0fd71de1591&lang=es&units=metric";

const getDataBgt = async () => {
  const apiURL = `${bgtAPI}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default  getDataBgt;
