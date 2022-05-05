<template>
  <div class="q-gutter-md" :class="[$q.screen.lt.sm ? 'column' : 'row']">
    <div class="col">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        navigation
        control-color="secondary"
        transition-prev="scale"
        transition-next="scale"
        height="332px"
        :padding="false"
        :class="{ 'bg-primary': $q.screen.lt.sm }"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn
            v-if="active"
            size="xs"
            :icon="btnProps.icon"
            color="secondary"
            style="opcaity: 30%"
            flat
            round
            dense
            @click="onClick"
          />
          <q-btn
            v-else
            size="xs"
            :icon="btnProps.icon"
            color="secondary"
            style="opacity: 30%"
            flat
            round
            dense
            @click="onClick"
          />
        </template>
        <q-carousel-slide
          :style="{ padding: $q.screen.lt.sm ? 0 : '2rem' }"
          v-for="card of allCards"
          :name="card.cardNumber"
          :key="card.cardNumber"
        >
          <MyCard v-bind="card" />
        </q-carousel-slide>
      </q-carousel>
      <CardActions />
    </div>
    <div class="col">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          label="Card details"
          class="text-black"
          :icon="`img:${require('../assets/CardDetails.svg')}`"
          :expand-icon="`img:${require('../assets/down-arrow.svg')}`"
          :header-style="{ backgroundColor: '#F5F9FF' }"
          expand-separator
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <q-list bordered class="rounded-borders q-mt-md text-black">
        <q-expansion-item
          label="Recent details"
          class="recen-transactions"
          :icon="`img:${require('../assets/RecentTransactions.svg')}`"
          :expand-icon="`img:${require('../assets/down-arrow.svg')}`"
          expand-separator
          :header-style="{ backgroundColor: '#F5F9FF' }"
        >
          <q-card>
            <q-card-section>
              <RecentDetails />
            </q-card-section>
            <q-card-actions align="center" style="background-color: #edfff5">
              <q-btn flat>View all card transactions</q-btn>
            </q-card-actions>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

import MyCard from 'components/MyCard.vue';
import RecentDetails from 'components/RecentDetails.vue';
import CardActions from '../components/CardActions.vue';
import { useStore } from 'src/store';

export default defineComponent({
  components: {
    RecentDetails,
    CardActions,
    MyCard,
  },

  setup() {
    const store = useStore();
    const allCards = computed(() => store.state.cards.allCards);
    const slide = ref(allCards.value[0].cardNumber);
    const currentCardNumber = computed(
      () => store.state.cards.currentCardNumber
    );

    watch(currentCardNumber, (cardNumber) => {
      slide.value = cardNumber;
    });

    watch(slide, (slide) => {
      console.log(slide);
      store.dispatch('cards/setCurrentCardNumber', { cardNumber: slide });
    });

    return { slide, allCards };
  },
});
</script>
