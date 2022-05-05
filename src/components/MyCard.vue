<template>
  <div class="card column">
    <q-btn
      class="col self-end"
      :icon="`img:${require('../assets/remove_red_eye-24px.svg')}`"
      :label="`${showCardNumber ? 'Hide card number' : 'Show card number'}`"
      flat
      no-caps
      @click="showCardNumber = !showCardNumber"
    />
    <q-card
      :class="[
        'card bg-secondary text-white q-py-md',
        { 'opacity-40': frozen },
      ]"
      style="border-radius: 12px"
      bordered
      flat
    >
      <q-card-section class="column">
        <DesktopLogo
          style="fill: white"
          width="85"
          height="23"
          class="self-end"
        />
        <p class="col text-bold">{{ cardName }}</p>
        <MyCardNumber
          class="row items-center"
          style="font-size: 32px"
          :masked="!showCardNumber"
          :cardNumber="cardNumber"
        />
        <div class="row text-body2">
          <div class="through">
            Thru: {{ new Date(expirationDate).getMonth() }}/{{
              new Date(expirationDate).getYear() % 100
            }}
          </div>
          <div class="q-ml-lg cvv row items-center justify-center">
            CVV:
            <span class="col" style="height: 14px; font-size: x-large">
              ***
            </span>
          </div>
        </div>
        <VisaIcon class="self-end" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import DesktopLogo from 'components/DesktopLogo.vue';
import VisaIcon from './VisaIcon.vue';
import MyCardNumber from './MyCardNumber.vue';

export default defineComponent({
  components: { DesktopLogo, VisaIcon, MyCardNumber },

  setup() {
    const showCardNumber = ref(false);

    return { showCardNumber };
  },

  props: {
    cardName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expirationDate: { type: Date, required: true },
    frozen: { type: Boolean, required: true },
  },
});
</script>

<style>
.opacity-40 {
  opacity: 40%;
}
</style>
