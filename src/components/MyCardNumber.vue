<template>
  <div>
    <div :class="{ 'unmask-font-size': !masked }">
      <span>{{ masked ? '•' : cardNumber.slice(0, 1) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(1, 2) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(2, 3) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(3, 4) }}</span>
    </div>
    <div :class="['q-ml-md', { 'unmask-font-size': !masked }]">
      <span>{{ masked ? '•' : cardNumber.slice(4, 5) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(5, 6) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(6, 7) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(7, 8) }}</span>
    </div>
    <div :class="['q-ml-md', { 'unmask-font-size': !masked }]">
      <span>{{ masked ? '•' : cardNumber.slice(8, 9) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(9, 10) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(10, 11) }}</span>
      <span>{{ masked ? '•' : cardNumber.slice(11, 12) }}</span>
    </div>
    <div class="q-ml-md unmask-font-size">
      <span>{{ cardNumber.slice(12, 13) }}</span>
      <span>{{ cardNumber.slice(13, 14) }}</span>
      <span>{{ cardNumber.slice(14, 15) }}</span>
      <span>{{ cardNumber.slice(15, 16) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    masked: { type: Boolean, required: true },
    cardNumber: { type: String, required: true },
  },
});
</script>

<style>
.unmask-font-size {
  font-size: 12px;
}
</style>
