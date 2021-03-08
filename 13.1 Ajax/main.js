function loadAbout() {
  let xhr = new XMLHttpRequest()

  xhr.open("GET", "partials/about.html")

  xhr.onload = function(){
    document.querySelector(`.dynamic`).innerHTML = xhr.responseText
  }

  xhr.send()
}