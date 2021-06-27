
let city = document.getElementById("city");
const WEATHER_INPUT = document.getElementById('weatherInput')
const API_KEY = 'e6dbb22d9b4330c64b294f8fbd2dc021'
let weatherDescription = document.getElementById("weatherDescription")
/* let weatherTemperature = document.getElementById("weatherTemperature") */
let weatherFeelsLike = document.getElementById("weatherFeelsLike")

let date = document.getElementById("date")


let getWeather = async (e)=>  {
    try{
        if(e.keyCode == 13){
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${WEATHER_INPUT.value}&appid=${API_KEY}`
            let obj = await (await fetch(url)).json();
            console.log(obj)
            weatherFeelsLike.innerHTML = `${Math.round(obj.main.feels_like - 273.15)} °C`
            weatherDescription.innerHTML = obj.weather[0].description
            city.innerHTML = `${obj.name}, ${obj.sys.country}`
            let now = new Date()
            date.innerText = setDate(now)
        }
    }
    catch(error){console.log(error)}
};

let setDate = (now)=> {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
}

let submitWeatherInput = document.getElementById("weatherInput")
submitWeatherInput.addEventListener("keypress", getWeather)
