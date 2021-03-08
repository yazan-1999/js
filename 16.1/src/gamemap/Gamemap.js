class Gamemap {
  constructor() {

    let e = new Emty()

    
    this.grid = [
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
      [e, e, e, e, e, e, e, e, e, e,],
    ]

  }
  render(rootElement) {
    this.rootElement = rootElement
    let divPatent = $(`<div>`, `map`)
    // let gold = Pacmen.constructor.this.mony
    for (let ri = 0; ri < 10; ri++) {//шагает вертикальнопо карте ,чтоб шагать также как и выдаеться на экране с помошью флот
      for (let ci = 0; ci < 10; ci++) {//шагает горизонтально по ячейкам под названием нулл
          this.grid[ri][ci].render(divPatent)
      }
    }
    let ron = 0
    if (ron == 0) {
      ron++
      this.rootElement.innerHTML = ""
      this.rootElement.appendChild(divPatent)
    } else if (ron != 0) {
      this.rootElement.removeChild(divPatent)
      this.rootElement.appendChild(divPatent)
    }


  }

  save() {
    let cache = [];
    let json = JSON.stringify(this, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (value instanceof Bomb) {
          value.type = "Bomb"
        }else if (value instanceof Coin) {
          value.type = "Coin"
        }else if (value instanceof Pacmen) {
          value.type = "Pacmen"
        }
        if (cache.includes(value)) return;
        cache.push(value);
      }
      return value;
    });
    cache = null
    localStorage.setItem("game",json)
  }

  load() {
    let game = JSON.parse(localStorage.getItem("game"))
    if (game == null) {
      game = Emty
    }
    if (game== this.type("Bomb")) {
      game = Bomb
    }
    if (game == this.type("Coin")) {
      game = Coin
    }
    if (game == this.type("Pacmen")) {
      game = Pacmen
    }
    game.value = game.gm.grid
    
  }
}
