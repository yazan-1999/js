class Devil {
  constructor(r, c, grid) {
    this.r = r
    this.c = c
    this.grid = grid

    this.start()
  }

  moveDown(){
  this.grid[this.r][this.c] = new Emty()
  this.grid[++this.r][this.c] = this
  }
  moveUp(){
  this.grid[this.r][this.c] = new Emty()
  this.grid[--this.r][this.c] = this
  }
  moveRight(){
  this.grid[this.r][this.c] = new Emty()
  this.grid[this.r][++this.c] = this
  }
  moveLeft(){
  this.grid[this.r][this.c] = new Emty()
  this.grid[this.r][--this.c] = this
  }
  render(rootElement) {
    this.rootElement = rootElement
    let div = $(`<div>`, `Devil`)
    this.rootElement.appendChild(div)
  }


  start() {
    setInterval(this.alive.bind(this),1000)
  }


  alive() {
    let p = findOnMap(gm.grid, Pacmen)
    if (p) {
      if (p.r > this.r) {
        this.moveDown()
      } else if (p.r < this.r) {
        this.moveUp()
      }
      if (p.c < this.c) {
        this.moveLeft()
      } else if (p.c > this.c) {
        this.moveRight()
      }
      gm.render($(".scene"))
    }
  }
}
