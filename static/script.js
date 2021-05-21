document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'static/img/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'static/img/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'static/img/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'static/img/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'static/img/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'static/img/hotdog.png'
      },
      {
        name: 'fries',
        img: 'static/img/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'static/img/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'static/img/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'static/img/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'static/img/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'static/img/hotdog.png'
      }
    ]


    function status_change(msg,color,time) {
        const status = document.querySelector('#status');
            status.innerHTML=msg;
            status.style.color =color;
        setTimeout(function(){ 
            status.innerHTML="";
         }, time);
       
    }


  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.header_game')
    const resultDisplay = document.querySelector('#score')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'static/img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'static/img/blank.png')
        cards[optionTwoId].setAttribute('src', 'static/img/blank.png')
        // alert('You have clicked the same image!')
        status_change("Clicked the same image","orange",1000);
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        // alert('You found a match')
        status_change("Correct","green",500);
        cards[optionOneId].setAttribute('src', 'static/img/white.png')
        cards[optionTwoId].setAttribute('src', 'static/img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'static/img/blank.png')
        cards[optionTwoId].setAttribute('src', 'static/img/blank.png')

        
        // alert('Sorry, try again')
        // changes
        status_change("Wrong","red",500);
        // changes
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  