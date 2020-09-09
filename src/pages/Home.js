import getDataBgt from "../utils/getData";
import getDataFr from "../utils/getDataFr";

const Home = async () => {
  const data = await getDataBgt();
  const dataFr = await getDataFr();
  const view = `
  <main class="main">
  <div class="main__hero">
    <div class="main__hero--time">
      <p>
        <img
          src="../src/images/icons/hero__time--location.svg"
          alt="Location"
        />
        ${data.name}
      </p>
      <p>${data.weather[0].description}</p>
    </div>
    <img
      class="main__hero--img"
      src="../src/images/main--hero.webp"
      alt="Build Bogota"
    />
  </div>
  </main>

  <section class="info">
  <div class="info__firstCol">
    <h2><b>3 Days</b> Forecast</h2>
    <div class="fcol__card">
      <img src="../src/images/icons/info--cloud.svg" alt="Icon" />
      <div class="fcol__card--text">
        <p>Friday</p>
        <small>Rain</small>
      </div>

      <div class="fcol__card--grades">${data.main.temp_min}° / ${data.main.temp_max}°</div>
    </div>

    <div class="fcol__card">
      <img src="../src/images/icons/info--sun.svg" alt="Icon" />
      <div class="fcol__card--text">
        <p>Friday</p>
        <small>Rain</small>
      </div>

      <div class="fcol__card--grades">34 / 24°</div>
    </div>

    <div class="fcol__card">
      <img src="../src/images/icons/info--cloud.svg" alt="Icon" />
      <div class="fcol__card--text">
        <p>Friday</p>
        <small>Rain</small>
      </div>

      <div class="fcol__card--grades">31 / 23°</div>
    </div>
  </div>

  <div class="info__secondCol">
    <h2><b>Places</b> to visit</h2>

    <div class="seconCol__card">
      <img
        class="secondCol__card--img"
        src="../src/images/secondCol--visits.webp"
        alt="Good Location"
      />
      <div class="secondCol__card--text">
        <p>
          <img
            src="../src/images/icons/sencondCol__text--icon.svg"
            alt="icon"
          />Amazing Street
        </p>
        <p>Singapure</p>
      </div>
    </div>
  </div>

  <div class="info__thirdCol">
    <div class="thirCol__reviews">
      <small>+ Top Reviews</small>
      <ul class="thirCol__reviews--users">
        <li>
          <img src="../src/images/thirdCol--subject (1).webp" alt="Users" />
        </li>
        <li>
          <img src="../src/images/thirdCol--subject (2).webp" alt="Users" />
        </li>
        <li>
          <img src="../src/images/thirdCol--subject (3).webp" alt="Users" />
        </li>
        <li><p>+8k</p></li>
      </ul>
    </div>
    <div class="thirCol__card">
      <img
        class="thirCol__card--img"
        src="../src/images/thirdCol--card (1).jpg"
        alt="Good Location"
      />
      <div class="thirCol__card--text">
        <p>
          <img
            src="../src/images/icons/sencondCol__text--icon.svg"
            alt="icon"
          />Amazing Street
        </p>
        <p>Sidney</p>
      </div>
    </div>
    <div class="thirCol__cards">
      <img
        class="thirCol__cards--img"
        src="../src/images/thirdCol--card (2).jpg"
        alt="Good Location"
      />
      <div class="thirCol__cards--text">
        <p>
          <img
            src="../src/images/icons/sencondCol__text--icon.svg"
            alt="icon"
          />Amazing Street
        </p>
        <p>Sidney</p>
      </div>
    </div>
  </div>

  <div class="info__fourCol">
    <div class="fourCol__card">
      <img src="../src/images/icons/info--cloud.svg" alt="Icon" />
      <div class="fourCol__card--text">${dataFr.main.temp}°</div>
      <div class="fourCol__card--sities">
        <p>Lyon</p>
        <small>${dataFr.name}</small>
      </div>
      <div class="fourCol__card--details">
        <small>Humedicity ${dataFr.main.humidity}%</small>
        <small>Northwest</small>
        <small>${dataFr.wind.speed}km/h</small>
      </div>
    </div>
    <div class="fourCol__card">
      <img src="../src/images/icons/info--cloud.svg" alt="Icon" />
      <div class="fourCol__card--text">12°</div>
      <div class="fourCol__card--sities">
        <p>Paris</p>
        <small>Francia</small>
      </div>
      <div class="fourCol__card--details">
        <small>Humedicity 0.4%</small>
        <small>Northwest</small>
        <small>83km/h</small>
      </div>
    </div>
    <div class="fourCol__interaction">
      <button class="fourCol__interaction--btn callToAction">
        Add Loactions
      </button>
      <img src="../src/images/third--addLocation.webp" alt="Add Location" />
    </div>
  </div>
  </section>




  `;

  let clima = data.weather[0].main;
  let element = document.getElementById("widget");

  clima == "Clouds"
  ? element.innerHTML = `<img src="../src/images/icons/info--cloud.svg" alt="${clima}"><p>${data.main.temp}°</p>`
  : element.innerHTML = `<img src="../src/images/icons/info--sun.svg" alt="${clima}"><p>${data.main.temp}°</p>`



  return view;
};

export default Home;
