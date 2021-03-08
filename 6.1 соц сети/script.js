


let errorMSG = ""
let t = null
function ucFirst(name) {
  return name[0].toUpperCase() + name.slice(1);
}
// setTimeout(ero , 1000);
// function ero() {

//   if (error == 0) {
//     error += 1
//     alert(`Error!/n Cannot load sam element`)
//   }
//   else {
//     alert(`Error!/n Cannot load all elements`)
//   }

function loadComponent(name) {
  let link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = `src/${name}/${name}.css`
  link.addEventListener(`error`, function (){
    errorMSG += `ERROR\n Cannot load ${name}.css\n`
    clearTimeout(t)
    t = setTimeout(showError, 1000)
      
  })
  document.head.appendChild(link)

  let script = document.createElement("script")
  script.addEventListener(`error`, function () {
    errorMSG += `ERROR\n Cannot load ${name}.js\n`
    clearTimeout(t)
    t = setTimeout(showError, 1000)
  }
  )
    script.src = `src/${name}/${ucFirst(name)}.js`
  document.body.appendChild(script)
}
  
function showError() {
  alert( errorMSG)
}

// setTimeout(showError,2000)

loadComponent("post")
loadComponent("user")
loadComponent("search")






window.onload = function () {
  testFakeUsers()

}




