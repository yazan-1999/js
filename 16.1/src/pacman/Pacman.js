class Pacmen {
  constructor(r, c, grid,) {
    this.r = r
    this.c = c
    this.grid = grid
    this.grid[r][c] = this
    this.status = "alive"
    this.mony = 0
    this.hp = 100
    this.direction = "Right"
  }

  moveDown(){
    this.grid[this.r++][this.c] = new Emty()
    this.collision()
    this.direction = "Down"
  }
  moveUp(){
    this.grid[this.r--][this.c] = new Emty()
    this.collision()
    this.direction = "Up"
  }
  moveRight(){
  this.grid[this.r][this.c++] = new Emty()
    this.collision()
    this.direction = "Right"
  }
  moveLeft(){
  this.grid[this.r][this.c--] = new Emty()
    this.collision()
    this.direction = "Left"
  }


  collision() {


    if (this.grid[this.r][this.c] instanceof Bomb) {
      if (this.hp >= 0) {
        this.status = "explouding"
        setTimeout(() => this.status = "alive", 1500)
        this.hp -= 25
        console.log("BOOM")
      } else if (this.hp <= 0) {
        alert("GAME OVER!")
        
      }
    }
    
    if (this.grid[this.r][this.c] instanceof Coin) {
        if(this.mony >=9){alert("YOU WIN!!!")}
        console.log("TSIIN")
       this.mony += 1
      }
      this.grid[this.r][this.c] = this
      console.log(this)
    }
  

    render(rootElement) {
      this.rootElement = rootElement
      let div = $(`<div>`, `pacman ${this.status} ${this.direction}`)
      this.rootElement.appendChild(div)
    }
  
}
