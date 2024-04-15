const symbols = ['🌟', '🍎', '🍕', '🚀', '🎈', '🎉', '🍦', '🍩'];
let shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
let selectedCards = [];
let attempts = 0;
let solvedPairs = 0;
const maxAttempts = 6;

const container = document.getElementById('game-container');

function createCard(symbol) 
{
  const card = document.createElement('div');
  card.classList.add('card');
  //card.textContent = symbol;

  card.addEventListener('click', () => 
  {
    if (selectedCards.length < 2 && !selectedCards.includes(card))
    {
      card.textContent = symbol;
      selectedCards.push(card);

      if (selectedCards.length === 2) 
      {
        checkMatch();
      }
    }
  });

  container.appendChild(card);
}

function checkMatch()
{
  attempts++;
  const [card1, card2] = selectedCards;

  if (card1.textContent === card2.textContent)
  {
    selectedCards = [];
    solvedPairs++;

    card1.textContent = '';
    card2.textContent = '';

    card1.classList.add('hidden');
    card2.classList.add('hidden');

    //if (document.querySelectorAll('.card.hidden').length === 0) {
      //setTimeout(() => alert('Congratulations! You won!'), 200);
    //}

    if(solvedPairs == 8) 
    {
        setTimeout(() => alert('Congratulations! You won!'), 200);
        attempts = 0
        solvedPairs = 0
    }
    else if(document.querySelectorAll('.card.hidden').length === 16)
    {
        setTimeout(() => alert('Sorry, you lose!'), 200);
        attempts = 0
        solvedPairs = 0
    }
  }

  else 
  {
      setTimeout(() =>
      {
        card1.textContent = '';
        card2.textContent = '';
        selectedCards = [];

        if (attempts == maxAttempts)
        {
            setTimeout(() => alert('Sorry, you lose!'), 200);
            attempts = 0
            solvedPairs = 0
        }
      }, 1000);
  }
}

shuffledSymbols.forEach(symbol => createCard(symbol));