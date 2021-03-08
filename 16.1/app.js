let gm = new Gamemap()

let rplace = randomPlase(gm.grid)
new Pacmen(rplace[0], rplace[1], gm.grid)

rplace = randomPlase(gm.grid)
new Devil(rplace[0], rplace[1], gm.grid)


for (let i = 0; i < 15; i++) {
  rplace = randomPlase(gm.grid)
  new Coin(rplace[0], rplace[1], gm.grid)
}
for (let i = 0; i < 10; i++) {
  rplace = randomPlase(gm.grid)
  new Bomb(rplace[0], rplace[1], gm.grid)
}



gm.render($(".scene"))


$("body").addEventListener("keydown", function (e) {
  let p = findOnMap(gm.grid, Pacmen)
  if (e.key == "ArrowDown") {
    gm.render($(".scene"))
    if (p.r == 9) {
    }else if (p.r <= 9 ) {
      p.moveDown()
      gm.render($(".scene"))
    }
    
  }
  if (e.key == "ArrowUp") {
    gm.render($(".scene"))
    if (p.r == 0) {
    }else if (p.r >= 0 ) {
      p.moveUp()
      gm.render($(".scene"))
    }

  }
  if (e.key == "ArrowLeft") {
    gm.render($(".scene"))
    if (p.c == 0) {
    } else if (p.c >= 0) {
      p.moveLeft()
      gm.render($(".scene"))
    }
  }
    
  if (e.key == "ArrowRight") {
    gm.render($(".scene"))
    if (p.c == 9) {
    } else if (p.c <= 9) {
      p.moveRight()
      gm.render($(".scene"))
    }
  }
  if (e.key == "s") {
    gm.save()
   }
  if (e.key == "l") {
    gm.load()
   }
  console.log(e)
  document.body.childNodes[5].childNodes[3].textContent = p.mony
  document.body.childNodes[1].childNodes[3].value = p.hp
    console.log(p.mony)
  
  })