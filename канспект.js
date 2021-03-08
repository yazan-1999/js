// к обектом document.body.__proto__ покажит что это
document.title - напрямую доступ
document.head  - напрямую доступ  
document.body  - напрямую доступ



// к калекциям
document.images- списак картинок на сайте
document.images[здес индоксна можно выбрать какую именно картинку]
document.links - прямой доступ к всем ссылками <a></a>
document.forms - напрямую к формам



document.body.style.background = 'red'; // сделать фон красным
setTimeout(() => document.body.style.background = '', 3000); // вернуть назад



// навигация по елементу
element.parentElement - родитель 
element.nextElementSibling -следуйщий сосед
element.previousElementSibling  - передыдущий сосед
element.firstElementChild - первый дочерний елемент
element.lastElementChild  - последний дочерни елемент
element.child  - все дочернии елементы



// узлы
document.firstChild - первый дочерний ЭЛИМЕНТ документа
document.сhildren -дочерние ЭЛИМЕНТ документа 

document.body.childNodes[index] - все дочернии УЗЛЫ боди

document.body.childNodes[1].childNodes[0] - узел
document.body.childNodes[1].childNodes[0].textContent -текст узела


// 
element.id ="my-id" - назначили id
if (element.id == "..") - сравнили id
element.className - если обращаемся к классам потомучто class как слово уже зарезервированно
//вазные атрибуты
element.id
element.className
element.src
element.href
element.style
element.value

//работы с елементами HTML
element.innerHTML ="" - //перезаписать или добавить element.innerHTML +="" или получить в виде стринга(мне кажется в виде введенных данных в стуктуру HTML)
element.innerText -//получить содержимое строницы без тегов


// поисковые функции
document.getElementById ("аидишник") - возвращает обьект/ если не найдет то вернут null
document.getElementByClassName("класс") - вернет калекцию
document.getElementByTagName("тег") - вернет калекцию

document.querySelector("css селекторная формула") - возвращает обьект/ если не найдет то вернут null
document.querySelectorAll("css селекторная формула") - возвращает колекцию





//  
element.id = "identefir"
element.id == "identefir"

element.getAttribute("id") - прочитать значения атрибута
element.setAttribute("id" , "identefier") - установить значения атрибута
element.removeAttribute("id") -удалить начения атрибута

// добовление в html правльно


element = document.createElement("tagname")- создает в переменную в новый елемент ,чтоб добавить надо найти родительский елемент

parent.appendChild(element) -добавить
parent.removeChild(element) - удалить


//привязка функции
<element onevent= "myFunction()" ></element> обычная приязка функии к елементу


element.addEventLisener("имя события","коллбек функция") певое значение само имя события , второе значение фуция реагирующая на это сабытие "имнно ссылка на функию а не вызываеться"
element.removeEventLisener("имя события","коллбек функция") удааление функции

element.addEventListener("animationend") // конец остоновица в конце анимации анимации

// фильтры 
const words = [`spray`,`limit`,`elite`,`exuberant`,`present`,] - список

const f = word => words.length > 6 - стрелочная функция которая проверяет значение на длинну и если длинна больше 6 то оставляет 

const result = words.filter(f) - перебирает все значения внутри себя

cosole.log (result)

///////////////НАБЛЮДАТЕЛЬ

//первый варият прослушивание события в самом HTML
<button onclick = "f(event)"></button> 

// воторой вориятн назночение наблюдателя
button.onclick = f 
// третий способ 
button.addEventListener(`click`,f)

function f (e) {

}