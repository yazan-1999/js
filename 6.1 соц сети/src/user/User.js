class User {
  constructor(nickname,avatar,gender,location,dob,online) {
    this.nickname = nickname
    this.avatar = avatar
    this.gender = gender
    this.location = location
    this.dob = dob
    this.online = online
  }

  getType() {
    return  "user"
  }


  render(rootElement, mode = `sm`) {// mode = `smol`,`md`,`lg`
    let div = document.createElement(`div`) //создай тег див
        div.className = "user-" + mode//приской диву класс юзер +стиль его

    div.appendChild(document.createElement(`img`))//добавь тег картинки
    div.children[0].src = this.avatar //в src картинки поставь аватар с канструктора потому что мы рендерим канструктор
    if (this.online == "1") {
      div.appendChild(document.createElement(`div`))
      div.lastChild.className = "online"
    }
    if (this.online == "0") {
      div.appendChild(document.createElement(`div`))
      div.lastChild.className = "offline"
    }
    
    if (mode == "md") {
      let h2 = document.createElement("h2")
      h2.innerText = this.nickname
      div.appendChild(h2)

      }
    rootElement.appendChild(div)
  }

}