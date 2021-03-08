const KEY = "9f426a4a61ed493e73ae4f78ce95282d"
let city = "Chisinau"
const CURYENT_WEATHR_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f426a4a61ed493e73ae4f78ce95282d&units=metric`
function load() {
  let xhr = new XMLHttpRequest()
  
  xhr.open("GET", CURYENT_WEATHR_URL)
  
  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let temp = data.main.temp
    let wind = data.wind.speed
    let description = data.weather[0].description
    let icon = data.weather[0].icon
    // console.log(data)
    // console.log(temp)
    // console.log(wind)
    // console.log(description)
    // console.log(icon)
    let html = document.createElement(`div`)
    let h1 = document.createElement(`h1`)
    h1.innerText = "temperenur: " + temp + "C"

    let h2 = document.createElement(`h2`)
    h2.innerText = description

    let p = document.createElement(`p`)
    p.innerText = "wind speed: " +wind + "m/s"

    let img = document.createElement(`img`)
    img.src = "wind speed: " + wind + "m/s"
    
    html.appendChild(h1)
    html.appendChild(h2)
    html.appendChild(p)
    html.appendChild(img)


    document.querySelector(".desc").appendChild(html)
  }

  xhr.send()

}