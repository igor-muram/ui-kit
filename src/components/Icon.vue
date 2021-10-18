<template>
  <i
    class="text_icon awesome-icons"
    v-if="$iconType === 'awesome'"
    :class="icon_class || ''"
    :style="styles"
  ></i>
  <span class="text_icon material-icons" v-if="$iconType === 'material'" :style="styles">
    {{ icon_class }}
  </span>
</template>

<script>
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
    icon_class: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { sizeValue, styles } = useStyles(props);

    return {
      sizeValue,
      styles,
    };
  },
};
</script>

<style lang="scss" scoped>
.awesome-icons {
  font-family: 'Font Awesome 5 Pro';
}

.material-icons {
  font-family: 'Material Icons';
}

.text_icon {
  transform: scale(var(--scale-x, 1), var(--scale-y, 1)) rotate(var(--rotate, 0deg));
  font-size: var(--size);
  color: currentColor;
}
</style>
