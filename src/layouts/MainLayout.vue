<template>
  <div :class="[{ 'bg-primary text-white': $q.screen.lt.sm }, 'q-pb-xs']">
    <q-layout view="lhh lpr lff">
      <q-drawer
        v-if="$q.screen.gt.sm"
        show-if-above
        class="bg-primary"
        style="padding-top: 48px"
      >
        <q-list>
          <q-item>
            <q-item-section>
              <DesktopLogo
                :style="`fill: ${logoColor}`"
                style="width: 125px; height: 35px; margin-bottom: 19px"
              />
              <q-item-label
                overline
                caption
                style="margin-bottom: 81px; color: white; opacity: 30%"
              >
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
              </q-item-label>
            </q-item-section>
          </q-item>
          <MenuItem
            v-for="{ title, icon } of list"
            :key="title"
            :title="title"
            :icon="icon"
          />
        </q-list>
      </q-drawer>
      <q-page-container style="padding-top: 48px">
        <router-view />
      </q-page-container>
      <q-footer
        v-if="$q.screen.lt.sm"
        elevated
        reveal
        height-hint="150"
        class="row"
      >
        <!-- <q-toolbar-title>Footer</q-toolbar-title> -->
        <MenuItem
          v-for="{ title, icon } of list"
          :key="title"
          :title="title"
          :icon="icon"
          class="column"
        />
      </q-footer>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getCssVar } from 'quasar';

import MenuItem from 'components/MenuItem.vue';
import DesktopLogo from 'components/DesktopLogo.vue';

const list = [
  {
    title: 'Home',
    icon: 'Home',
  },
  {
    title: 'Cards',
    icon: 'Card',
  },
  {
    title: 'Payments',
    icon: 'Payments',
  },
  {
    title: 'Credit',
    icon: 'Credit',
  },
  {
    title: 'Profile',
    icon: 'Account',
  },
];

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const logoColor = getCssVar('secondary');

    return { logoColor, list };
  },

  components: {
    MenuItem,
    DesktopLogo,
  },
});
</script>
