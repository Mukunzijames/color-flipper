const hex = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]; 

const button = document.getElementById('button')
const color = document.querySelector('.color')

button.addEventListener('click' , (e)=>{
    let hexColor = '#';
   for(let i=0 ;i<6 ;i++ ){
    hexColor += hex[getRandomNumber ()]
   }
   document.body.style.backgroundColor = hexColor;
   color.textContent = hexColor;
})
function getRandomNumber (){
    return Math.floor(Math.random() * hex.length)
}
