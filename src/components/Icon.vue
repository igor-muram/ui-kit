<template>
  <svg
    v-if="iconPlugin.iconType === 'svg'"
    :width="sizeValue"
    :height="sizeValue"
    :viewBox="viewboxValue"
    :style="styles"
  >
    <path :d="path" />
  </svg>
  <i v-if="iconPlugin.iconType === 'text'" :class="icon_class"></i>
</template>

<script>
import { inject } from 'vue';

const types = {
  default: {
    size: 24,
  },
  big: {
    size: 48,
  },
};

export default {
  name: 'icon',

  props: {
    type: String,
    path: { type: String, required: true },
    size: { type: [String, Number] },
    flip: {
      type: String,
      validator: (value) => ['horizontal', 'vertical', 'both', 'none'].includes(value),
    },
    icon_class: String,
    rotate: { type: Number, default: 0 },
  },

  computed: {
    styles() {
      return {
        '--scale-x': ['both', 'horizontal'].includes(this.flip) ? '-1' : '1',
        '--scale-y': ['both', 'vertical'].includes(this.flip) ? '-1' : '1',
        '--rotate': isNaN(this.rotate) ? this.rotate : this.rotate + 'deg',
        '--size': this.sizeValue,
      };
    },

    defaults() {
      return types[this.type] || types.default;
    },

    sizeValue() {
      return this.size || this.defaults.size;
    },

    viewboxValue() {
      return `0 0 ${this.sizeValue} ${this.sizeValue}`;
    },
  },

  setup() {
    const iconPlugin = inject('icon-plugin');

    return {
      iconPlugin,
    };
  },
};
</script>

<style lang="scss" scoped>
svg {
  display: inline;
  transform: scale(var(--scale-x, 1), var(--scale-y, 1)) rotate(var(--rotate, 0deg));
}

path {
  fill: currentColor;
  transform: scale(calc(var(--size) / 24));
}
</style>
