interface Card {
  suit: 'Hearts' | 'Clubs' | 'Diamonds' | 'Spades';
  value: number;
  face: boolean;
}

export function CreateDeck() {
  const deck: Card[] = [];

  for (let index = 1; index < 53; index++) {
    const card: Card = {
      suit: 'Hearts',
      value: index,
      face: false,
    };
    console.log('!!' + card);
    deck.push(card);
  }

  console.log(deck);
  DisplayCards(deck);
}

export function DisplayCards(deck: Card[]) {
  const deckDiv = document.getElementById('deckDisplay');

  deck.forEach(card => {
    const fragment = document.createDocumentFragment();
    const displayCard = fragment
      .appendChild(document.createElement('div'))
      .appendChild(document.createElement('p'));

    displayCard.textContent = `${card.value} of ${card.suit} \n ${
      card.face ? 'face' : 'not Face'
    }`;

    deckDiv?.appendChild(displayCard);
  });
}

CreateDeck();
