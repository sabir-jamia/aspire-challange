import { MutationTree } from 'vuex';
import { Cards, Card } from './state';

const mutation: MutationTree<Cards> = {
  ADD_CARD(
    state: Cards,
    { cardName, expirationDate, cardNumber, frozen }: Card
  ) {
    state.allCards = [
      ...state.allCards,
      { cardName, expirationDate, cardNumber, frozen },
    ];
  },
  SET_CURRENT_CARD_NUMBER(state: Cards, { cardNumber }) {
    state.currentCardNumber =
      state.allCards.find((card) => card.cardNumber === cardNumber)
        ?.cardNumber ?? '';
  },
  FREEZE_CARD(state: Cards, { cardIndex }) {
    state.allCards[cardIndex] = { ...state.allCards[cardIndex], frozen: true };
  },
  CANCEL_CARD(state: Cards, { cardNumber }) {
    state.allCards = state.allCards.filter(
      (card) => card.cardNumber !== cardNumber
    );
  },
};

export default mutation;
