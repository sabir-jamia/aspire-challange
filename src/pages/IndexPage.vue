<template>
  <div :class="[$q.screen.lt.sm ? 'q-px-md' : 'q-px-xl']">
    <div class="row">
      <div class="col">
        <p>Available balance</p>
        <p>
          <q-badge color="secondary" class="q-px-sm q-py-xs">S$</q-badge>
          <span class="text-weight-bolder q-ml-sm">{{ balance }}</span>
        </p>
      </div>
      <NewCardModal class="self-center" />
    </div>
    <q-tabs align="left" dense no-caps v-model="tab">
      <q-tab class="q-px-none" name="my-debit-cards" label="My debit cards" />
      <q-tab
        class="q-px-none q-ml-md"
        name="company-cards"
        label="All company cards"
      />
    </q-tabs>
    <q-card
      :flat="$q.screen.lt.sm"
      dark
      :class="[$q.screen.lt.sm ? 'text-white' : 'text-black']"
    >
      <q-tab-panels v-model="tab" :class="{ 'bg-primary': $q.screen.lt.sm }">
        <q-tab-panel name="my-debit-cards">
          <DebitCardsPanel />
        </q-tab-panel>
        <q-tab-panel name="company-cards">
          <CompanyCarsPanel />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import DebitCardsPanel from 'components/DebitCardsPanel.vue';
import CompanyCarsPanel from 'components/CompanyCarsPanel.vue';
import NewCardModal from 'components/NewCardModal.vue';

export default defineComponent({
  name: 'IndexPage',

  components: { DebitCardsPanel, CompanyCarsPanel, NewCardModal },

  setup() {
    const balance = ref(3000);
    const tab = ref('my-debit-cards');
    const showModal = ref(false);

    return { balance, tab, showModal };
  },
});
</script>
