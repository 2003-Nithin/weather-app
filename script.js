// let api = "f798957084960e754692a4b5d993e435";
// let apiurl = "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=f798957084960e754692a4b5d993e435";
// const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '3faec6b355mshc8e397a53edddd5p110d3fjsnd975951354fd',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}
// };

let searchbar = document.getElementById("searchbar");
let searchbtn = document.getElementById("searchbtn");

let checkweather = async (name) =>{
    let apikey = "f798957084960e754692a4b5d993e435";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apikey}`;
    let res = await fetch(apiurl);
    let data = await res.json();
    console.log(data);

    if(data.name == undefined){
        alert("City Not Found");
        return;
    }
    

    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#tempdescrp").innerHTML = data.weather[0].description;
    document.querySelector("#humidtyLevel").innerHTML = data.main.humidity + "%";
    document.querySelector("#windspeed").innerHTML = data.wind.speed + "m/s";


    
};

searchbtn.addEventListener("click", () => {
    let cityname = searchbar.value.trim();
    if(cityname != ""){
        checkweather(cityname);
    }else{
        alert("Please Enter City Name");
    }
    checkweather(cityname);

});
// let checkweather = async (name) => {
//     let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}`;
//     let response = await fetch(apiurl);
//     let data = await response.json();
//     console.log(data);

//     let temp = data.main.temp;
//     let name = data.name;
//     let country = data.sys.country;
//     let weather = data.weather[0].description;
//     let icon = data.weather[0].icon;
//     let img = `http://openweathermap.org/img/w/${icon}.png`;
//     let temp1 = temp - 273.15;
//     let temp2 = temp1.toFixed(2);
//     let output = `The temperature in ${name},${country} is ${temp2}°C and the weather is ${weather}`;
//     document.getElementById("output").innerHTML = output;
//     document.getElementById("icon").src = img;
// };


// let search = () => {
//     let name = document.getElementById("search").value;
//     checkweather(name);
// };