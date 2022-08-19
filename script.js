const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "f4f9117c68d7ab3776f1537ca73111a2"
}

const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e){
    if(e.keyCode === 13) {
        getInfo(input.value)
    }
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    // const res = await fetch(`${api.endpoint}weather?q=${data}&appid=${api.key}`);
    const result = await res.json();
    console.dir(res);
    console.dir(result);
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector('.city_name');
    city.textContent = `${result.name}, ${result.sys.country}`;

    // getOurDate();

    let temperature = document.querySelector('.temperature');
    temperature.textContent = `${Math.round(result.main.temp)}`;

    let feelsLike = document.querySelector('.feels_like');
    let humidity = document.querySelector('.humidity');
    let pressure = document.querySelector('.pressure');

    let image = document.querySelector('.img');
    let data = result.weather[0];
    let dataDescription = result.weather[0].description;
    let dataFeelsLike = result.main.feels_like;
    let dataHumidity = result.main.humidity;
    let dataPressure = result.main.pressure;
    console.log(dataPressure);

    feelsLike.innerHTML = `${Math.round(dataFeelsLike)} °`;
    humidity.innerHTML = `${dataHumidity} %`;
    pressure.innerHTML = `${dataPressure} hPa`;

    let description = document.querySelector('.weather_description');
    description.innerText = dataDescription;

    console.log(data);

    // let feelsLike = document.querySelector('#feelslike');
    // feelsLike.textContent = `Feels like: ${Math.round(result.main.feels_like)} °`;

    // let conditions = document.querySelector('#conditions');
    // conditions.textContent = `${result.weather[0].main}`;

    // let varation = document.querySelector('#varation');
    // varation.textContent = `Min: ${Math.round(result.main.temp_min)}° Max: ${Math.round(result.main.temp_max)}°`
}