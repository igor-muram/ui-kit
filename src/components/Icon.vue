<template>
  <i
    class="text_icon"
    v-if="iconPlugin.iconType === 'text'"
    :class="icon_class || ''"
    :style="styles"
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
    rotate: { type: Number, default: 0 },
    icon_class: String,
  },

  setup(props) {
    const iconPlugin = inject('icon-plugin');

    const { sizeValue, styles } = useStyles(props);

    return {
      iconPlugin,
      sizeValue,
      styles,
    };
  },
};
</script>

<style lang="scss" scoped>
.text_icon {
  transform: scale(var(--scale-x, 1), var(--scale-y, 1)) rotate(var(--rotate, 0deg));
  font-size: var(--size);
  color: currentColor;
  font-family: 'Font Awesome 5 Pro';
}
</style>
