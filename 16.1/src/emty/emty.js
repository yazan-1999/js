class Emty {
  constructor() {

  }
  render(rootElement) {
    this.rootElement = rootElement
    let div = $(`<div>`, `emty`)
    this.rootElement.appendChild(div)
  }
}
