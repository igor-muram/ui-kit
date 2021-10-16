import { computed } from 'vue';

const modes = {
  default: {
    size: 18,
  },
  middle: {
    size: 22,
  },
  big: {
    size: 26,
  },
};

export default function useStyles(icon) {
  const defaults = computed(() => {
    return modes[icon.mode] || modes.default;
  });

  const sizeValue = computed(() => {
    return icon.size || defaults.value.size;
  });

  const styles = computed(() => {
    return {
      '--scale-x': ['both', 'horizontal'].includes(icon.flip) ? '-1' : '1',
      '--scale-y': ['both', 'vertical'].includes(icon.flip) ? '-1' : '1',
      '--rotate': isNaN(icon.rotate) ? icon.rotate : icon.rotate + 'deg',
      '--size': sizeValue.value + 'px',
    };
  });

  return {
    sizeValue,
    styles,
  };
}
