var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')
var container1 = document.querySelector('.box2')
var container2 = document.querySelector('#box2_1')
var container3 = document.querySelector('.box3')
var container4 = document.querySelector('#box3_2')

btn1.addEventListener('click', function(){
  
  if(container1.style.display === 'block'){
    container2.style.display = 'block'
    btn1.style.display = 'none'
    btn2.style.display = 'block'
  }
  else{
     container1.style.display = 'block'
  }
})

btn2.addEventListener('click', function() {

  if (container2.style.display === 'block') {
    container2.style.display = 'none'
    btn2.style.display = 'none'
    btn1.style.display = 'block'
  }
  else {
    container2.style.display = 'block'
  }
})

btn3.addEventListener('click', function() {

  if (container3.style.display === 'block') {
    container4.style.display = 'block'
    btn3.style.display = 'none'
    btn4.style.display = 'block'
  }
  else {
    container3.style.display = 'block'
  }
})

btn4.addEventListener('click', function(){
  
  if(container4.style.display === 'block'){
    container4.style.display = 'none'
    btn3.style.display = 'block'
    btn4.style.display = 'none'
  }
  else{
     container4.style.display = 'block'
  }
})


window.sr = ScrollReveal({ reset: true })
sr.reveal('.box1', { duration: 2500 })
sr.reveal('.caixa3', { duration: 2500 })
sr.reveal('.caixa4', { duration: 2500 })
sr.reveal('.caixa5', { duration: 2500 })



