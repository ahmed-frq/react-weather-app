

import axios from "axios"
import { useState } from "react"

const App = () => {





let api_key = "e34df7fe062f12a18e88a31a9c3da1af"

const search = async ()=>{
    const input =  document.getElementById('cityInput')
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=Metric&appid=${api_key}`




  
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=Metric&appid=${api_key}`)
       console.log(response)

//        let [temp, settemp] = useState();

// settemp()

    //    let [temp_min, settemp_min] = useState(response.data.main.temp_min);
    //    let [temp_max, settemp_max] = useState(response.data.main.temp_max);
    //    let [humidity, sethumidity] = useState(response.data.main.humidity);
    //    let [visibility, setvisibility] = useState(response.data.visibility);
    //    let [name, setname] = useState(response.data.name);
    //    let [weather, setweather] = useState(response.data.weather[0].main);








       let temp =  response.data.main.temp
       let temp_min =  response.data.main.temp_min
       let temp_max =  response.data.main.temp_max
       let humidity =  response.data.main.humidity
       let visibility =  response.data.visibility
       let cityName = response.data.name
       let wind = response.data.wind.speed
       let weather = response.data.weather[0].main

let tempEl = document.getElementById('temp')
let temp_minEl = document.getElementById('temp_min')
let temp_maxEl = document.getElementById('temp_max')
let humidityEl = document.getElementById('humidity')
let visibilityEl = document.getElementById('visibility')
let cityNameEl = document.getElementById('cityName')
let windEl = document.getElementById('wind')
let weatherEl = document.getElementById('weather')

tempEl.innerText = `${temp}°`
temp_minEl.innerText = `${temp_min}°C`
temp_maxEl.innerText = `${temp_max}°C`
humidityEl.innerText = `${humidity}%`
visibilityEl.innerText = `${visibility}M`
cityNameEl.innerText = `${cityName}`
windEl.innerText = `${wind}k/h`
weatherEl.innerText = `${weather}`




   
       

}









    return ( 
        <>
<div class="min-h-screen flex items-center justify-center  shadow-2xl ">
<div class="flex flex-col bg-white rounded p-4 w-full max-w-xs shadow-2xl">

<div className=" w-full flex justify-center items-center gap-4 mb-3">
    <input  className=" border-2 border-solid  text-center font-semibold px-3 py-2 rounded-2xl"  id="cityInput"  type="text" placeholder="Write City Name"/>
    <button className=" text-lg font-medium " onClick={()=>{
        search()
    }}>Search</button>
</div>


						<div class="font-bold text-xl" id="cityName">Sydney</div>
			
						<div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
<svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
						</div>
						<div class="flex flex-row items-center justify-center mt-6">
							<div class="font-medium text-6xl" id="temp">24°</div>
							<div class="flex flex-col items-center ml-6">
								<div id="weather">Cloudy</div>
								<div class="mt-1">
									<span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
									<span class="text-sm font-light text-gray-500" id="temp_max">28°C</span>
								</div>
								<div>
									<span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
									<span class="text-sm font-light text-gray-500" id="temp_min">20°C</span>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-between mt-6">
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm" >Wind</div>
								<div class="text-sm text-gray-500" id="wind">9k/h</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm" >Humidity</div>
								<div class="text-sm text-gray-500" id="humidity">68%</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm" >Visibility</div>
								<div class="text-sm text-gray-500" id="visibility">10km</div>
							</div>
						</div>
					</div>
</div>
        </>
     );
}
 
export default App;