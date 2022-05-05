export interface Card {
  cardName: string;
  expirationDate: Date;
  cardNumber: string;
  frozen: boolean;
}
export interface Cards {
  allCards: Array<Card>;
  currentCardNumber: string;
}

function state(): Cards {
  return {
    allCards: [
      {
        cardName: 'Mark Henry1',
        cardNumber: '1234567891234567',
        expirationDate: new Date(),
        frozen: false,
      },
      {
        cardName: 'Mark Henry2',
        cardNumber: '1234567891234568',
        expirationDate: new Date(),
        frozen: false,
      },
    ],
    currentCardNumber: '1234567891234567',
  };
}

export default state;
