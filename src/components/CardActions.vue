<template>
  <q-card
    class="q-pa-md q-gutter-sm row text-black"
    flat
    style="background-color: #edf3ff; border-radius: 12px"
  >
    <div
      class="col"
      v-for="{ icon, text, action, reverseText } of buttons"
      :key="text"
    >
      <q-btn
        size="32px"
        round
        padding="none"
        :icon="`img:${require(`../assets/${icon}.svg`)}`"
        @click="handleAction(action)"
      />
      <p
        v-text="
          currentCard?.frozen && action === 'freezeCard' ? reverseText : text
        "
      />
    </div>
    <q-dialog v-model="showModal" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="clear" color="primary" text-color="white" />
          <span class="q-ml-sm">
            Are you sure, you want to cancel the card.
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Ok"
            color="primary"
            v-close-popup
            @click="cancelCard()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { useStore } from 'src/store';

const buttons = [
  {
    icon: 'FreezeCard',
    text: 'Freeze card',
    reverseText: 'UnFreeze card',
    action: 'freezeCard',
  },
  {
    icon: 'SpendLimit',
    text: 'Set Spend Limit',
    reverseText: '',
    action: '',
  },
  {
    icon: 'GPay',
    text: 'Add to GPay',
    reverseText: '',
    action: '',
  },
  {
    icon: 'ReplaceCard',
    text: 'Replace card',
    reverseText: '',
    action: '',
  },
  {
    icon: 'CancelCard',
    text: 'Cancel card',
    reverseText: '',
    action: 'cancelCard',
  },
];

export default defineComponent({
  setup() {
    const store = useStore();
    const currentCardNumber = computed(
      () => store.state.cards.currentCardNumber
    );
    const allCards = computed(() => store.state.cards.allCards);
    const currentCard = computed(() => {
      return allCards.value.find(
        (card) => card.cardNumber === currentCardNumber.value
      );
    });
    const showModal = ref(false);

    const handleAction = (action: string) => {
      if (action === 'freezeCard' && !currentCard.value?.frozen) {
        store.dispatch('cards/freezeCard');
      }

      if (action === 'freezeCard' && currentCard.value?.frozen) {
        store.dispatch('cards/unFreezeCard');
      }

      if (action === 'cancelCard') {
        console.log('cancel');
        showModal.value = true;
      }
    };

    const cancelCard = () => {
      store.dispatch('cards/cancelCard');
    };

    return {
      buttons,
      handleAction,
      currentCard,
      showModal,
      cancelCard,
    };
  },
});
</script>
