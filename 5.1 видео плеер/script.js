window.addEventListener(`scroll`, onScrooll)


  function onScrooll(e){
    if(window.scrollY >= 500){swiToOv() //при прокрутке больше чем 500 пикселей выполняй фунцию swiToOv()
    }
    
}


  
  
  function swiToOv(){
    let overlay = document.querySelector(`.overlay`)//найди элемент с классом overlay и вставь его в переменную под названием overlay
    if (overlay.children.length == 0){ //если  количество дочерних елементов ровно 0 то выпоняй код дальше *он выпониться 1 раз потому что при первой проверки  он будет пустым а значит равен 0
    let main = document.html.body.getElementByid("main")//найди по айди и вставь в переменную
    let overVidio = main.cloneNode(true)//скопируй вес узел в скобкох пиеться или true или folse фолс это поверхностно скапировать тру полная копия
    let X = document.createElement("button")
    X.className ="X"
    X.innerText ="X"
    window.addEventListener(X.onclick , removeDiv)
    X.onclick = removeDiv
    let coneiner = document.getElementById("1")
    console.log(main)
    console.log(overVidio)
    overlay.appendChild(overVidio)
    overlay.appendChild(X)
    }
    
    
    function removeDiv() {
      overlay.removeChild(this);
    };
    // div.onclick = removeDiv;

  //  if ( X.onclick == true ){
  //   let div = document.createElement("div")
  //     document.body.div.removeChild(this)
  //  }


    // console.log(main)
    // console.log(overVidio)
    // overlay.appendChild(overVidio)
    // overlay.appendChild(X)
  // X.onclick = f
  // function f (e) { 
  //     let div = document.createElement("div")
  //     document.body.div.removeChild(this)
      
  //   }

// };

}
  



  // let size = document.firstElementChild.style.height
  // console.log(size)