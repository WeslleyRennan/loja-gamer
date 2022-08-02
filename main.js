var button1 = document.getElementById("btn1")

button1.addEventListener("click", function() {

  var box2_1 = document.getElementById("box2_1")

  if (box2_1.style.display === "none") {
    box2_1.style.display = "block"
    button1.style.display = "none"
  }
  else {
    box2_1.style.display = "none"
  }

})

var button2 = document.getElementById("btn2")

button2.addEventListener("click", function() {

  var box2_1 = document.getElementById("box2_1")

  if (box2_1.style.display === "none") {
    box2_1.style.display = "block"
  }
  else {
    box2_1.style.display = "none"
    button1.style.display = "block"
  }

})

var button3 = document.getElementById("btn3")

button3.addEventListener("click", function() {

var box3_2 = document.getElementById("box3_2")

if(box3_2.style.display === "none") {
  box3_2.style.display = "block"
  button3.style.display = "none"
}
else{
  box3_2.style.display = "none"
}
  
})


var button4 = document.getElementById("btn4")

button4.addEventListener("click", function() {

  var box3_2 = document.getElementById("box3_2")

  if (box3_2.style.display === "none") {
    box3_2.style.display = "block"
  }
  else {
    box3_2.style.display = "none"
    button3.style.display = "block"
  }

})
