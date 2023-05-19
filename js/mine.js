let url = "https://api.weatherapi.com/v1/forecast.json?key=1ec9042d3e5c4d21aea202729232002&q=cairo&days=3&aqi=no&alerts=no"
let InputSearch = document.querySelector("#search")
let btnSearch = document.querySelector("#searchbtn")
let date = new Date()
const month=["January","February","March","April","May" , "June" , "July" , "August" ,"September","October" , "November" ,"December"]
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if(date.getDay() == 5){
    document.querySelector(".card .c .float-start").innerHTML=weekday[date.getDay()]
    document.querySelector(".card2 .card-header").innerHTML=weekday[date.getDay()+1]
    document.querySelector(".c3 .card-header").innerHTML=weekday[0]
}

else if(date.getDay() == 6){
    document.querySelector(".card .c .float-start").innerHTML=weekday[date.getDay()]
    document.querySelector(".card2 .card-header").innerHTML=weekday[0]
    document.querySelector(".c3 .card-header").innerHTML=weekday[1]
}

else{
    document.querySelector(".card .c .float-start").innerHTML=weekday[date.getDay()]
    document.querySelector(".card2 .card-header").innerHTML=weekday[date.getDay()+1]
    document.querySelector(".c3 .card-header").innerHTML=weekday[date.getDay()+2]
}
document.querySelector(".card .c .float-end").innerHTML=date.getDate()+month[date.getMonth()]

async function load(u) {
    let x = await fetch(u)
    x= await x.json()
    current(x)
    tommoro(x)
    AFtommoro(x)
}
load(url)



function current(x) {
    let img = document.createElement("img")
    img.setAttribute("src",x.current.condition.icon)
    img.style.width="80px"
    let h1= document.querySelector(".card .card-body .body h1")
    let p = document.querySelector(".card .card-body .body P")
    h1.innerHTML = x.current.temp_c + "<sup>o</sup>C "
    h1.append(img)
    h1.style.fontSize = "80px"
    p.innerHTML = x.current.condition.text
    p.style.color = "#009ad8"
    p.style.margin = "20px 0 0 0"
    document.querySelector(".card .card-body .card-title").innerHTML = x.location.name
}


function tommoro(x) {
    let img = document.getElementById("img")
    let h2= document.querySelector(".card2 .card-body .card-title h2")
    let h3= document.querySelector(".card2 .card-body .card-title h3")
    let p = document.querySelector(".card .card-body .card-title P")
    p.style.color = "#009ad8"
    p.style.margin = "20px 0 0 0"
    img.setAttribute("src",x.forecast.forecastday[1].day.condition.icon)
    img.style.width="70px"
    h2.style.fontSize="24px"
    h3.style.fontSize="16px"
    h2.innerHTML= x.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>C "
    h3.innerHTML = x.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>C "
    p.innerHTML = x.forecast.forecastday[1].day.condition.text
}

function AFtommoro(x) {
    let img = document.getElementById("img2")
    let h2= document.querySelector(".c3 .card-body .card-title h2")
    let h3= document.querySelector(".c3 .card-body .card-title h3")
    let p = document.querySelector(".c3 .card-body .card-title P")
    p.style.color = "#009ad8"
    p.style.margin = "20px 0 0 0"
    img.setAttribute("src",x.forecast.forecastday[2].day.condition.icon)
    img.style.width="70px"
    h2.style.fontSize="24px"
    h3.style.fontSize="16px"
    h2.innerHTML= x.forecast.forecastday[2].day.maxtemp_c + "<sup>o</sup>C "
    h3.innerHTML = x.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>C "
    p.innerHTML = x.forecast.forecastday[2].day.condition.text
}

InputSearch.addEventListener("keyup" , function () {
    let u = `http://api.weatherapi.com/v1/forecast.json?key=1ec9042d3e5c4d21aea202729232002&q=${InputSearch.value}&days=3&aqi=no&alerts=no`
    load(u)
})







