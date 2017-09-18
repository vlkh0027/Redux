const URL='http://api.openweathermap.org/data/2.5/find?units=metric&appid=7388335d56b6031f95399d75b757c0fa&q=';

function getTemp(cityName){
    return fetch( URL + cityName )
    .then(res => res.json())
    .then(resJSON => resJSON.list[0].main.temp);
}

// getTemp('Saigon')
// .then(temp => console.log(temp))
// .catch(err => console.log(err));

export default getTemp;