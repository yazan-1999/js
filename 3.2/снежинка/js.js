function addFlake() {
  let div = document.createElement("div")
  div.className = "flake"
  
  let divInner = document.createElement("div") // див в нутри снижинки чтоб сделать боковой ветер через этот див
  div.appendChild(divInner) //  говорим диву который являемться снежинкай что в нутри нее еще 1 див и перезначаем ему все стили css 

  divInner.style.left = parseInt(Math.random() * window.innerWidth) + "px"


  let flasaze = Math.random()// поставили рандомность в переменную чтоб модно было взоимодействовать с ней рандомность от 1.0 до 0.1
  let duration = 1 / flasaze  //переменная которая даст разный результат  для  скорости падения снежинки
  //div.style.transform = "scale("+ flasaze +")" //каждая снежыка разных размеров
  divInner.style.transform = "scale("+ flasaze +")"
  //div.style.animationDuration = duration + "s" //чем больше снежика тем быстрее падает
  divInner.style.animationDuration = duration + "s"
  //div.style.mixBlendMode = "overlay" // эфект полупрозрачности снежинкам
  divInner.style.mixBlendMode = "overlay"

  document.body.appendChild(div)

  div.addEventListener("animationend" ,onFlakeFallEnd) // конец анимации
  
  //document.body.innerHTML += `<div class = "flake"></div>` не каректныый вариянт перезаписывает анимацию а не добовляемт

  //////////////////////////////////////////////////////////////
  // setTimeout ( функция , в мелесикундах) работает как таймер
  // setInterval ( функция , в мелесикундах) срабатывает через секунды которые прописаны 
  // clearTimeout (таймер id)
  // clearTimeout(таймер id)
}

function onFlakeFallEnd(e) { // "е" обект возникшого события
  if (e.animationName == "fall") { // если наваниесобытия равен фолл
    e.target.style.animation = "fadeOut 5s"// тому диву который зашел  конец анимации ставить вложенный стиль в котором вложенное свойство аниматион и вписсоваем css функцию и время это переопределение анимации
    e.target.style.top = "100%" 
  }
  if (e.animationName == "fadeOut"){ //а иначе если  замвершение анимации "fadeOut"
    document.body.divInner.removeChild(e.target)//удалит тот див который выдал нам анимации "fadeOut" так как e.target это див которотый мы назначили в начале функции вот этот див document.body.appendChild(div)
    
    
  }
}
  
  //  console.log("!!!", e);


 setInterval(addFlake, 2000);