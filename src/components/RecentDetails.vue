<template>
  <q-list>
    <div v-for="{ id, name, date, cause, icon } of transactions" :key="id">
      <q-item>
        <q-item-section avatar>
          <q-avatar
            style="background-color: #009dff1a"
            :icon="`img:${require(`../assets/${icon}.svg`)}`"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <q-item-label caption lines="1">{{ date }}</q-item-label>
          <q-item-label caption lines="1" class="text-weight-bolder">
            {{ cause }}
          </q-item-label>
        </q-item-section>
        <q-item-section side top class="text-secondary">
          S$ 150
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const transactions = [
  {
    id: '1',
    name: 'Hamleys',
    date: '20 May 2020',
    cause: 'Refund on debit card',
    amount: '150',
    icon: 'FileStorage',
  },
  {
    id: '2',
    name: 'Hamleys',
    date: '20 May 2020',
    cause: 'Charged to debit card',
    amount: '-150',
    icon: 'FileStorage',
  },
  {
    id: '2',
    name: 'Hamleys',
    date: '20 May 2020',
    cause: 'Charged to debit card',
    amount: '-150',
    icon: 'FileStorage',
  },
];

export default defineComponent({
  setup() {
    return { transactions };
  },
});
</script>

<!-- <style lang="scss" scoped></style> -->
