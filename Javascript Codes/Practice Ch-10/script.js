let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
  return v.json()
}).then((contests)=>{
  console.log(contests)
  ihtml = ""
  for(let item in contests)
    {
      console.log(contests[item])
      ihtml += ` <div class="card" style="width: 18rem;">
      <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.webp" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contests[item].name}</h5>
        <p>The site is ${contests[item].site}</p>
        <p>Starts at: ${contests[item].start_time} </p>
        <p>Starts at: ${contests[item].end_time} </p>
        <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
      </div>
    </div>`
    }
  cardContainer.innerHTML = ihtml
})

// let a = prompt("Enter your note")
// localStorage.setItem("note",a)