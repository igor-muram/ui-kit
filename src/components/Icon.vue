<template>
  <img
    class="svg_icon"
    :src="this.svg_icon"
    v-if="(iconPlugin.iconType === 'svg' || this.icon_type === 'svg') && this.icon_type !== 'text'"
    :width="sizeValue"
    :height="sizeValue"
    :viewBox="viewboxValue"
    :style="styles"
  />
  <i
    class="text_icon"
    v-if="(iconPlugin.iconType === 'text' || this.icon_type === 'text') && this.icon_type !== 'svg'"
    :class="icon_class || ''"
  ></i>
</template>

<script>
import { inject } from 'vue';

import useStyles from '@/hooks/useStyles';

export default {
  name: 'icon',

  props: {
    mode: String,
    size: [String, Number],
    flip: {
      type: String,
      validator: (value) => ['horizontal', 'vertical', 'both', 'none'].includes(value),
    },
    icon_class: String,
    svg_icon: String,
    icon_type: {
      type: String,
      validator: (value) => ['text', 'svg', 'none'].includes(value),
      default: 'none',
    },
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
.svg_icon {
  display: inline;
  transform: scale(var(--scale-x, 1), var(--scale-y, 1)) rotate(var(--rotate, 0deg));
}

path {
  fill: currentColor;
  transform: scale(calc(var(--size) / 24));
}

.text_icon {
  font-family: 'Font Awesome 5 Pro';
}
</style>
