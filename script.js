const color = [ "blue","red","rgb(30 64 175","#f0f8ff"];
const button = document.getElementById('button')
const mycolor = document.querySelector('.color')

button.addEventListener('click', (e)=>{
   const randomNumber = getRandomNumber ();
   console.log(randomNumber)
   document.body.style.backgroundColor = color[randomNumber];
   color.textContent = color[randomNumber];
})

function getRandomNumber (){
    return Math.floor(Math.random () * color.length)
}