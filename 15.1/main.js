let dataPhoto = document.body.querySelector("#quantity").value


const KEY = "OmkYWQaRCJklIgoghRLfVJh3aHeFoYLqFBcd4lb2"
let ROV_FOTO = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=${KEY}&earth_date=${dataPhoto}&page=5`
let xhr = new XMLHttpRequest()


function load() {


  xhr.open("GET", ROV_FOTO)
  xhr.onload = photoo
  xhr.send()
}

function photoo(e) {
  let xhr = e.target
  let data = JSON.parse(xhr.responseText)
  create( data)
}

function create(data) {
   let slides = document.querySelector("#galary .glider")
  // photos[0].img_src
  data.photos.forEach(photo => {
    console.log(photo)
       let div = document.createElement("div")
       div.appendChild(document.createElement("img"))
    div.firstElementChild.src = photo.img_src
    div.appendChild(document.createElement("h2"))
    div.lastElementChild.innerText = photo.earth_date
    div.appendChild(document.createElement("h3"))
    div.lastElementChild.innerText = photo.rover.name
       slides.appendChild(div)
    // })

  
  }
  )
  newSL()
}

// window.addEventListener('load', function(){
function newSL (){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
}
// })