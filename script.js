//-------------API WEATHER--------------//
// const url = 'https://openweather43.p.rapidapi.com/forecast?appid=da0f9c8d90bde7e619c3ec47766a42f4&q=Lima&units=metric&lang=es';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7fac5f38ddmsh677b0cf7b7ae985p16fdb3jsnc8bda8c7f876',
// 		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
// 	}
// };

// try {
// 	fetch(url, options)
//     .then(res=> res.json())
//     .then(response => {
//         console.log(response)
//     })

// } catch (error) {
// 	console.error(error);
// }

//--------------------------------//
const btn_buscar = document.querySelector(".btn-buscar");
const txt_cuidad = document.querySelector("#city");
const search = document.querySelector(".search");
const information = document.querySelector(".information");
const grid_days = document.querySelector(".grid-days");

// btn_buscar.addEventListener("click",function(){
//     search.style.display = 'none';
//     information.innerHTML=`<h5>Nuevo eleemnto</h5>`;
// })
const fecha = String(new Date().getDay())

const objeto = {0: "Domingo", 1: "Lunes", 2: "Martes", 3: "Miércoles", 4: "Jueves", 5: "Viernes", 6: "Sábado" };
let encontrado = false;
let claves = [];
for (let clave in objeto) {
  if (objeto.hasOwnProperty(clave)  ) {
    if (encontrado) {
      let valor = objeto[clave];
      claves.push(valor);
    }
    if (clave === fecha) encontrado = true;
  }
}
for(let i in objeto){
    if(claves.length < 6) claves.push(objeto[i]); 
}
grid_days.innerHTML=`
<div-days class="sub-temperature">
        <p>${claves[0]}</p>
        <img class="img-sub-weather" src="images/nube.png" alt="">
        <p>23 °C</p>
      </div-days>
      <div-days class="sub-temperature">
        <p>${claves[1]}</p>
        <img class="img-sub-weather" src="images/semi-soleado.png" alt="">
        <p>23 °C</p>
      </div-days>
      <div-days class="sub-temperature">
        <p>${claves[2]}</p>
        <img class="img-sub-weather" src="images/viento.png" alt="">
        <p>23 °C</p>
      </div-days>
      <div-days class="sub-temperature" >
        <p>${claves[3]}</p>
        <img class="img-sub-weather" src="images/soleado.png" alt="">
        <p>23 °C</p>
      </div-days>
      <div-days class="sub-temperature">
        <p>${claves[4]}</p>
        <img class="img-sub-weather" src="images/agua.png" alt="">
        <p>23 °C</p>
      </div-days>
`