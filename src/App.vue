<template>
  <div class="wrapper">
    <span>Icon with prop 'size' = 96:</span>
    <Icon :path="paths.ArrowLeftBottom" :size="96" />
  </div>

  <div class="wrapper">
    <span>Icon with type 'big' (size = 48):</span>
    <Icon :path="paths.ArrowLeftBottom" :type="'big'" />
  </div>

  <div class="wrapper">
    <span>Small icon (default size = 24):</span>
    <Icon :path="paths.ArrowLeftBottom" />
  </div>

  <div class="wrapper">
    <span>Vertically flipped icon:</span>
    <Icon :path="paths.ArrowLeftBottom" :flip="'vertical'" />
  </div>

  <div class="wrapper">
    <span>Horizontally flipped icon:</span>
    <Icon :path="paths.ArrowLeftBottom" :flip="'horizontal'" />
  </div>

  <div class="wrapper">
    <span>Vertically and horizontally flipped icon:</span>
    <Icon :path="paths.ArrowLeftBottom" :flip="'both'" />
  </div>

  <div class="wrapper">
    <span>Rotated icon (degrees = 90):</span>
    <Icon :path="paths.ArrowLeftBottom" :rotate="90" />
  </div>

  <div class="wrapper">
    <span>Rotated icon (degrees = 57):</span>
    <Icon :path="paths.ArrowLeftBottom" :rotate="57" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Icon from '@/components/Icon.vue';

import { ArrowLeftBottom } from '@/icons';

@Options({
  components: {
    Icon,
  },
  data() {
    return {
      paths: {
        ArrowLeftBottom,
      },
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
}
</style>
