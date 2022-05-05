import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { Cards, Card } from './state';

const actions: ActionTree<Cards, StateInterface> = {
  addCard({ commit }, { cardName, expirationDate, cardNumber, frozen }: Card) {
    commit('ADD_CARD', { cardName, expirationDate, cardNumber, frozen });
  },
  setCurrentCardNumber({ commit }, { cardNumber }) {
    commit('SET_CURRENT_CARD_NUMBER', { cardNumber });
  },
  freezeCard({ commit, getters }) {
    commit('FREEZE_CARD', { cardIndex: getters.currentCardIndex });
  },
  unFreezeCard({ commit, getters }) {
    commit('UN_FREEZE_CARD', { cardIndex: getters.currentCardIndex });
  },
  cancelCard({ commit, state }) {
    console.log({ cardNumber: state.currentCardNumber });
    commit('CANCEL_CARD', { cardNumber: state.currentCardNumber });
    if (state.allCards.length !== 0) {
      commit('SET_CURRENT_CARD_NUMBER', {
        cardNumber: state.allCards[0].cardNumber,
      });
    }
  },
};

export default actions;
