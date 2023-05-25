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

btn_buscar.addEventListener("click",function(){
    search.style.display = 'none';
    information.innerHTML=`<h5>Nuevo eleemnto</h5>`;
})




