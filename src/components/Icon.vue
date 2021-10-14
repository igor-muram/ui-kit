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
  <i v-if="iconPlugin.iconType === 'text'" :class="icon_class || ''"></i>
</template>

<script>
import { inject } from 'vue';

import useStyles from '@/hooks/useStyles';

export default {
  name: 'icon',

  props: {
    type: String,
    path: { type: String, required: true },
    size: [String, Number],
    flip: {
      type: String,
      validator: (value) => ['horizontal', 'vertical', 'both', 'none'].includes(value),
    },
    icon_class: String,
    rotate: { type: Number, default: 0 },
  },

  setup(props) {
    const iconPlugin = inject('icon-plugin');

    const { sizeValue, viewboxValue, styles } = useStyles(props);

    return {
      iconPlugin,
      sizeValue,
      viewboxValue,
      styles,
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
