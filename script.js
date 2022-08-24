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
    let backgroundImg = document.querySelector('.wrapper');
    let todayData = new Date();
    let time = todayData.getHours();
   
    // debugger

    if(descr === 'clear sky' && time >=8 && time <= 17){
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1623598019453-81fcbc1aaae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
    } else if (descr === 'clear sky') {
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')";
    }

    if(descr === 'few clouds' && time >=8 && time <= 17) {
        console.log('few clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')"
    } else if (descr === 'few clouds'){
        console.log('few clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/flagged/photo-1553475873-55d8c03e9f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80')";
    }

    if(descr === 'scattered clouds' && time >=8 && time <= 17) {
        console.log('scattered clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80')"
    } else if (descr === 'scattered clouds'){
        console.log('scattered clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1528485238486-507af7c0aa19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80')";
    }

    if(descr === 'overcast clouds' && time >=8 && time <= 17) {
        console.log('overcast clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1485249245068-d8dc50b77cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=8')"
    } else if (descr === 'overcast clouds'){
        console.log('overcast clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1496089479256-16374dc12c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80')";
    }

    if(descr === 'haze' && time >=8 && time <= 17) {
        console.log('haze');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1761&q=80')"
    } else if (descr === 'haze'){
        console.log('haze');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1524392622596-5400234c9d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80')";
    }

    if(descr === 'mist' && time >=8 && time <= 17) {
        console.log('mist');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80')"
    } else if (descr === 'mist'){
        console.log('mist');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')";
    }


    if(descr === 'broken clouds' && time >=8 && time <= 17) {
        console.log('broken clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1621859178739-c8dc945b556e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')"
    } else if (descr === 'broken clouds'){
        console.log('broken clouds');
        backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1512936537265-78c94e715a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80')";
    }

    //  else if(descr === 'overcast clouds') {
    //     console.log('overcast clouds');
    //     backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1485249245068-d8dc50b77cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80')"

    // } else if(descr === 'scattered clouds') {
    //     backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80')"
    // } else if(descr === 'haze') {
    //     backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1761&q=80')"
    // } else if(descr === 'mist') {
    //     backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80')"
    // }


    
    console.log(time)

    // if(time >= 20 && time <=23 || time === '00' || time >= 1 && time <=8) {
    //     // alert(time)

    //     if(descr === 'clear sky') {
    //         backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')";
    //     }

    // } else {
    //     backgroundImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1623598019453-81fcbc1aaae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
    // }





}

// backgroundImg.style.backgroundImage = "url('')"
