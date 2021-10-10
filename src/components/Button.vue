<template>
  <button
    class="button"
    v-bind:class="{
      'button--default': this.theme === 'default',
      'button--primary': this.theme === 'primary',
      'button--success': this.theme === 'success',
      'button--danger': this.theme === 'danger',
      'button--warning': this.theme === 'warning',
      'button--link': this.theme === 'link',
      'button--disabled': this.theme === 'disabled',
    }"
  >
    <Icon
      :path="this.icon_path"
      :type="this.icon_type"
      :size="this.icon_size"
      :flip="this.icon_flip"
      :rotate="this.icon_rotate"
      v-if="this.icon_position === 'prefix'"
    />
    <span>
      <slot></slot>
    </span>
    <Icon
      :path="this.icon_path"
      :type="this.icon_type"
      :size="this.icon_size"
      :flip="this.icon_flip"
      :rotate="this.icon_rotate"
      v-if="this.icon_position === 'postfix'"
    />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Icon from '@/components/Icon.vue';

@Options({
  components: {
    Icon,
  },
  props: {
    theme: {
      type: String,
      validator: (value: string) =>
        ['default', 'primary', 'success', 'danger', 'warning', 'link', 'disabled'].includes(value),
      default: 'default',
    },
    icon_path: String,
    icon_type: String,
    icon_size: Number,
    icon_flip: String,
    icon_rotate: Number,
    icon_position: {
      type: String,
      validator: (value: string) => ['prefix', 'postfix', 'none'].includes(value),
      default: 'none',
    },
  },
})
export default class Button extends Vue {
  name: string = 'button';
}
</script>

<style lang="scss">
.button {
  padding: 8px 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 18px;
  border-radius: 7px;
  color: #fff;
  outline: none;
  line-height: 1;

  svg + span:not(:empty),
  span:not(:empty) + svg {
    margin-left: 10px;
  }

  & + .button {
    margin-left: 15px;
  }

  &--default {
    background: var(--default-bg-color);
    border: 2px solid var(--default-border-color);
    color: #000;
    &:active,
    &:focus {
      box-shadow: 0 0 0 5px var(--default-border-color);
    }
    &:hover {
      border-color: var(--default-hover-color);
      background: var(--default-hover-color);
      color: #fff;
    }
  }

  &--primary {
    background: var(--primary-bg-color);
    &:active,
    &:focus {
      box-shadow: 0 0 0 5px var(--primary-border-color);
    }
    &:hover {
      background: var(--primary-hover-color);
    }
  }

  &--success {
    background: var(--success-bg-color);
    &:active,
    &:focus {
      box-shadow: 0 0 0 5px var(--success-border-color);
    }
    &:hover {
      background: var(--success-hover-color);
    }
  }

  &--danger {
    background: var(--danger-bg-color);
    &:active,
    &:focus {
      box-shadow: 0 0 0 5px var(--danger-border-color);
    }
    &:hover {
      background: var(--danger-hover-color);
    }
  }

  &--warning {
    background: var(--warning-bg-color);
    color: #000;
    &:active,
    &:focus {
      box-shadow: 0 0 0 5px var(--warning-border-color);
    }
    &:hover {
      background: var(--warning-hover-color);
    }
  }

  &--link {
    background: var(--link-bg-color);
    color: #000;
    text-decoration: underline;
    &:active,
    &:focus {
      box-shadow: 0 0 0 5px var(--link-border-color);
    }
    &:hover {
      color: var(--link-hover-color);
    }
  }

  &--disabled {
    background: var(--default-bg-color);
    border: 2px solid var(--default-border-color);
    color: #000;
    pointer-events: none;
    opacity: 0.3;
  }
}
</style>
