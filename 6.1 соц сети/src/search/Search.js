class Search {
  constructor( model = []) {//сюда заходит констукция User которая которая подключаеться через папеку test.js
    this.model = model
  }
  render(root) {
    let div = document.createElement("div")
    div.classList.add("search")
    let input = document.createElement("input")

    let proprtyName = Object.keys(this.model[0])[0]//выдай первого пользователя и выдай масив ключей всех свойств которфе у него есть черезфунцию (Object.keys) и из этого свойств выдай первое свойство. "(Object.keys) это воводит название свойств в индексном стиле тоесть мы достали из папки User.js"

    input.placeholder = "searsh for " + this.model[0].getType() + " " + proprtyName

    div.appendChild(input)

    root.appendChild(div)


    input.addEventListener("keyup", this.onKey.bind(this))//добавить инпуту лисенер который во время отжатия кнопки "keyup" вызовит функию которая передаст в (е) свой аргумент (тоесть во время отжатия содержимое инпута передаеться в переменную (е) и передаст функции onKey )
    this.root = root
  }
  onKey(e) {
    //текст ввел человек
    let phrase = e.target.value
    // название свойства по которому будем искать
    let proprtyName = Object.keys(this.model[0])[0]
    //сравниваем каждое свойствачерез фильтр ввеным пользователем буквой 
    let resalt = this.model.filter(value => value[proprtyName].startsWith(phrase))//свойство .startsWith наченаеться с 
    // console.log(resalt)
    
    let resaltDiv = document.createElement("div")
    if(this.root.children.length >= 2) { //если в диве больше 2 дочерних элементов то удали их
      this.root.removeChild(this.root.lastElementChild)
    }
    resalt.forEach( value => value.render(resaltDiv) ) //также прогуливаеться по массиву но работает по другим принцепам

    this.root.appendChild(resaltDiv)

    
  }
}