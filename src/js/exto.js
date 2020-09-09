const fetchData = require("../utils/fetchData");

const bgtAPI ="https://api.openweathermap.org/data/2.5/weather?id=3688689&appid=bc32b3f8b0e585a4ff11b0fd71de1591&lang=es";
const fraAPI = "https://api.openweathermap.org/data/2.5/weather?id=2288873&appid=bc32b3f8b0e585a4ff11b0fd71de1591&lang=es"

const getData = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const weather = await fetchData(`${bgtAPI}${data.weather[0].id}`);

    console.log(data.name)
    console.log(weather.weather);
  } catch (err) {
    console.error(err);
  }
};


console.log("before");
getData(bgtAPI);
getData(fraAPI);
console.log("after");