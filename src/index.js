const beerDisplay = document.querySelector('.name')
const button = document.querySelector('.button')

function getData (){
    
fetch('https://my-burger-api.herokuapp.com/burgers')
.then(response => response.json())
.then(data => {
    console.log(data)

    const randonNumber = Math.random() * data.length
    const randomInteger= Math.floor(randonNumber)
    const name = data[randomInteger].name
 
    beerDisplay.innerHTML= name
  
  });

}

button.addEventListener('click', getData)
