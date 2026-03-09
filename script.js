
   const inputBox = document.querySelector(".input-box");
   const searchBtn = document.querySelector("#searchBtn");
   const weather_img = document.querySelector(".weather-img");
   const temperature = document.querySelector(".temperature");
   const description = document.querySelector(".description");
   const humidity = document.querySelector("#humidity ");
   const wind_speed = document.querySelector("#wind-speed");
   const location_not_found = document.querySelector(".location-not-found")
   const weather_body = document.querySelector(".weather-body")



   async function checkWeather(city){
      const api_key = "940c34f4d165cac7b563c071a487e4b6"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
       const weather_data = await fetch(`${url}`).then(response => response.json());

       // console.log(weather_data)

       if(weather_data.cod === `404`)
       {

        location_not_found.style.display = "flex"
        weather_body.style.display = "none"
        return;
       }

        weather_body.style.display = "flex"
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
        description.innerHTML = `${weather_data.weather[0].description}`
         humidity.innerHTML = `${weather_data.main.humidity}%`
         wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`


         switch(weather_data.weather[0].main)
         {
          case 'Cloud': weather_img.src ="/assets/cloud.png"; break;
          case 'Clear': weather_img.src = "/assets/clear.png"; break;
          case 'Rain': weather_img.src = "/assets/rain.png"; break;
          case 'Mist': weather_img.src = "/assets/light-rain.png"; break;
          case 'Snow': weather_img.src = "/assets/snow.png"; break;
         // case 'Cloud': weather_img.src = "/assets/meteor-rain.gif"; break;


         }

    }

   searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value)


   })
