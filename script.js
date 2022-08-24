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
    const result = await res.json();
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

    feelsLike.innerHTML = `${Math.round(dataFeelsLike)} °`;
    humidity.innerHTML = `${dataHumidity} %`;
    pressure.innerHTML = `${dataPressure} hPa`;

    let description = document.querySelector('.weather_description');
    description.innerText = dataDescription;

    changeImage(dataDescription);

    console.log(dataDescription)

}


async function showConstantData(){
    const res = await fetch(`${api.endpoint}weather?q=kyiv&units=metric&appID=${api.key}`);
    const result = await res.json();
    // console.log(result);

    let city = document.querySelector('.city_name');
    city.textContent = `${result.name}, ${result.sys.country}`;

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
    // console.log(dataPressure);

    feelsLike.innerHTML = `${Math.round(dataFeelsLike)} °`;
    humidity.innerHTML = `${dataHumidity} %`;
    pressure.innerHTML = `${dataPressure} hPa`;

    let description = document.querySelector('.weather_description');
    description.innerText = dataDescription;

    changeImage(dataDescription);

}
showConstantData();


function changeImage(descr){
    let backgroundImg = document.querySelector('.content');

   
    
    if(descr === 'clear sky'){
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1623598019453-81fcbc1aaae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"

        console.log('test')
    } else if(descr === 'few clouds') {
        console.log('few clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')"
        
    } else if(descr === 'overcast clouds') {
        console.log('overcast clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1485249245068-d8dc50b77cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80')"

    } else if(descr === 'scattered clouds') {
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80')"
    } else if(descr === 'haze') {
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1761&q=80')"
    } else if(descr === 'mist') {
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80')"
    }

}

// backgroundImg.style.backgroundImage = "url('')"
