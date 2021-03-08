function testFakeUsers(n = 10) {
  let users = []
  while (--n) {
    let user = new User(
      faker.name.findName(),
      faker.image.image(),
      faker.name.gender(),
      faker.address.countryCode(),
      faker.date.between("1970", "2000"),
      "1")
    
    
    user.render(document.querySelector(".massages"))
    users.push(user)

  }
  let search = new Search(users)
  // let posts = [new Post("Great news!"),new Post("Bad news!") ]
  // let search = new Search(posts)
  search.render(document.querySelector(".profile"))
  console.log(users)

  
  // 
  
  
  
  
  // let user1 = new User("Jeck", "images/foto.jpg", "M", "UK", "1999.05.22", "1")
  // user1.render(document.querySelector(".massages"))//юзер отрендариться в документе
  // user1.render(document.querySelector(".profile"), "md")
  //console.log("%cstarting user tests","color:red")//%c можно вторым аргументов в писовать css
  // console.log("%cend user tests","color:red")

}