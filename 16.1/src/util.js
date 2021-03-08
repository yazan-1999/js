function $(tag ,className ) {//$("<div>")
  //если тег начинаеться с <  И заканчиваеться на > тогда возвращаяй создание 
  if (tag.startsWith("<") && tag.endsWith(">")) {
    let el = document.createElement(tag.substring(1, tag.length - 1))
    if (className !== undefined) {
      el.className = className
    }
    return el
  } else {
    return document.querySelector(tag)
  }

}
let ArClass =[]
function findOnMap(grid, classRef) {//находит первый класс с вареху в низ
  for (let ri = 0; ri < 10; ri++) {
    for (let ci = 0; ci < 10; ci++) {
      if (grid[ri][ci] instanceof classRef) {

        let newLength = ArClass.push(grid[ri][ci])
        return grid[ri][ci]

      }
    }
  }
}
function randomCoord(){
  return parseInt( Math.random()*9.9 )
}

function randomPlase(grid) {
  let tries = 100

  while (tries -- > 0) {
    let r = randomCoord()
    let c = randomCoord()

    if (grid[r][c] instanceof Emty) {
      return [r, c]
    }
  }
}