<template>
  <q-item clickable v-ripple>
    <q-item-section side :class="{ 'q-pa-none q-mx-auto': $q.screen.lt.sm }">
      <q-item-label>
        <q-icon :name="`img:${require(`../assets/${icon}.svg`)}`"></q-icon>
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-white">
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
});
</script>
