import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { Cards } from './state';

const getters: GetterTree<Cards, StateInterface> = {
  currentCardIndex(state: Cards) {
    return state.allCards.findIndex(
      (card) => card.cardNumber === state.currentCardNumber
    );
  },
};

export default getters;
