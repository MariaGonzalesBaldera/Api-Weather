//--------------------------------//
const btn_buscar = document.querySelector(".btn-buscar");
const txt_cuidad = document.querySelector("#city");
const search = document.querySelector(".search");
const search0 = document.querySelector(".search0");
const information = document.querySelector(".information");
const grid_days = document.querySelector(".grid-days");
const temperature = document.querySelector(".temperature");
const ubi = document.querySelector(".ubi");
const tem_next_1 = document.querySelector(".tem-next-1");
const tem_next_2 = document.querySelector(".tem-next-2");
const tem_next_3 = document.querySelector(".tem-next-3");
const tem_next_4 = document.querySelector(".tem-next-4");
const tem_next_5 = document.querySelector(".tem-next-5");

btn_buscar.addEventListener("click", function (e) {
  e.preventDefault();
  if (txt_cuidad.value == "") return alert("ingrese un valor")

  let res = dataWeather(txt_cuidad.value);

  // console.log(weatherData)
  search0.style.display = 'none';
  search.style.display = 'block';
})
const fecha = String(new Date().getDay())

const dia_semana = { 0: "Domingo", 1: "Lunes", 2: "Martes", 3: "Miércoles", 4: "Jueves", 5: "Viernes", 6: "Sábado" };
let encontrado = false;
let claves = [];
for (let clave in dia_semana) {
  if (dia_semana.hasOwnProperty(clave)) {
    if (encontrado) {
      let valor = dia_semana[clave];
      claves.push(valor);
    }
    if (clave === fecha) encontrado = true;
  }
}
for (let i in dia_semana) {
  if (claves.length < 6) claves.push(dia_semana[i]);
}
grid_days.innerHTML = `
<div-days class="sub-temperature">
        <p>${claves[0]}</p>
        <img class="img-sub-weather" src="images/nube.png" alt="">
        <p class="tem-next-1"></p>
      </div-days>
      <div-days class="sub-temperature">
        <p>${claves[1]}</p>
        <img class="img-sub-weather" src="images/semi-soleado.png" alt="">
        <p class="tem-next-2"></p>
      </div-days>
      <div-days class="sub-temperature">
        <p>${claves[2]}</p>
        <img class="img-sub-weather" src="images/viento.png" alt="">
        <p class="tem-next-3"></p>
      </div-days>
      <div-days class="sub-temperature" >
        <p>${claves[3]}</p>
        <img class="img-sub-weather" src="images/soleado.png" alt="">
        <p class="tem-next-4"></p>
      </div-days>
      <div-days class="sub-temperature">
        <p>${claves[4]}</p>
        <img class="img-sub-weather" src="images/agua.png" alt="">
        <p class="tem-next-5"></p>
      </div-days>
`

// -------------API WEATHER--------------//
function dataWeather(ciudad) {
  const url = `https://openweather43.p.rapidapi.com/forecast?appid=da0f9c8d90bde7e619c3ec47766a42f4&q=${ciudad}&units=metric&lang=es`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7fac5f38ddmsh677b0cf7b7ae985p16fdb3jsnc8bda8c7f876',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
    }
  };

  try {
    fetch(url, options)
      .then(res => res.json())
      .then(response => {
        console.log(response)

        temperature.innerHTML = `${response.list[0].main.temp} °C`;
        ubi.innerHTML = `${response.city.name}-${response.city.country}`;
        tem_next_1.innerHTML = `${response.list[2].main.temp} °C`;
        tem_next_2.innerHTML = `${response.list[10].main.temp} °C`;
        tem_next_3.innerHTML = `${response.list[18].main.temp} °C`;
        tem_next_4.innerHTML = `${response.list[26].main.temp} °C`;
        tem_next_5.innerHTML = `${response.list[34].main.temp} °C`;
        return response
      })

  } catch (error) {
    return(error);
  }
}