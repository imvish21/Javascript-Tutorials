console.log("Pyramid of Doom")
loadScript("link", function fun(error, src) {
  if (error) {
    console.log("error")
  }
  loadScript("link", function fun(error, src) {
    if (error) {
      console.log("error")
    }
    loadScript("link", function fun(error, src) {
      if (error) {
        console.log("error")
      }

    })

  })

})