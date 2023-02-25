const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5870f84885msh29480095f60cc71p1efbb7jsnd2cfc32d7d54',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const wheather =(city)=>{
    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct 
        temp.innerHTML= response.temp
        temp2.innerHTML= response.temp

        humidity.innerHTML= response.humidity
        humidity2.innerHTML= response.humidity

        min_temp.innerHTML= response.min_temp
        max_temp.innerHTML= response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        
        wind_degrees.innerHTML= response.wind_degrees
        sunrise.innerHTML =response.sunrise
        sunset.innerHTML= response.sunset
    
    })
	.catch(err => console.error(err));
}
submit.addEventListener('click',(e)=>{
    e.preventDefault()
wheather(city.value)
})
wheather('Kigali')