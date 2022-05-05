<template>
  <div>
    <div>
      <q-btn
        :class="{ 'bg-primary': $q.screen.lt.sm }"
        :style="{ color: $q.screen.lt.sm ? '#23CEFD' : 'white' }"
        style="background-color: #325baf"
        no-caps
        flat
        @click="showModal = true"
      >
        <q-icon left> <PlusIcon style="fill: #23cefd" /></q-icon>
        <div>New card</div>
      </q-btn>
    </div>
    <q-dialog v-model="showModal" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Please enter card name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="cardName"
            autofocus
            @keyup.enter="handleAddCard"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add Card" @click="handleAddCard" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useStore } from 'src/store';
import PlusIcon from 'components/PlusIcon.vue';
import { getRandomDate, getCardNumber } from 'src/utils';

export default defineComponent({
  setup() {
    const showModal = ref(false);
    const cardName = ref('');
    const store = useStore();

    const handleAddCard = () => {
      const expirationDate = getRandomDate();
      const cardNumber = getCardNumber();

      store.dispatch('cards/addCard', {
        cardName: cardName.value,
        expirationDate,
        cardNumber,
        frozen: false,
      });
      store.dispatch('cards/setCurrentCardNumber', { cardNumber });

      showModal.value = false;
      cardName.value = '';
    };

    return { showModal, cardName, handleAddCard };
  },

  components: { PlusIcon },
});
</script>
