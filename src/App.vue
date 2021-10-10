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

  <h2>Buttons:</h2>

  <div class="wrapper">
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :icon_size="40" :theme="'default'">
      Default
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :icon_size="40" :theme="'primary'">
      Primary
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :icon_size="40" :theme="'success'">
      Success
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :icon_size="40" :theme="'danger'">
      Danger
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :icon_size="40" :theme="'warning'">
      Warning
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :icon_size="40" :theme="'link'">
      Link
    </Button>
    <Button
      :icon_path="paths.Account"
      :icon_position="'prefix'"
      :icon_size="40"
      :theme="'disabled'"
    >
      Disabled
    </Button>
  </div>

  <div class="wrapper">
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'default'">
      Default
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'primary'">
      Primary
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'success'">
      Success
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'danger'">
      Danger
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'warning'">
      Warning
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'link'">
      Link
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'disabled'">
      Disabled
    </Button>
  </div>

  <div class="wrapper">
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'default'">
      Default
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'primary'">
      Primary
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'success'">
      Success
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'danger'">
      Danger
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'warning'">
      Warning
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'link'">
      Link
    </Button>
    <Button :icon_path="paths.Account" :icon_position="'postfix'" :theme="'disabled'">
      Disabled
    </Button>
  </div>

  <div class="wrapper">
    <Button :theme="'default'">
      Default
    </Button>
    <Button :theme="'primary'">
      Primary
    </Button>
    <Button :theme="'success'">
      Success
    </Button>
    <Button :theme="'danger'">
      Danger
    </Button>
    <Button :theme="'warning'">
      Warning
    </Button>
    <Button :theme="'link'">
      Link
    </Button>
    <Button :theme="'disabled'">
      Disabled
    </Button>
  </div>

  <div class="wrapper">
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'default'" />
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'primary'" />
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'success'" />
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'danger'" />
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'warning'" />
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'link'" />
    <Button :icon_path="paths.Account" :icon_position="'prefix'" :theme="'disabled'" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Icon from '@/components/Icon.vue';
import Button from '@/components/Button.vue';

import { ArrowLeftBottom, Account } from '@/icons';

@Options({
  components: {
    Icon,
    Button,
  },
  data() {
    return {
      paths: {
        ArrowLeftBottom,
        Account,
      },
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --default-bg-color: transparent;
  --primary-bg-color: #0d6efd;
  --success-bg-color: #198754;
  --danger-bg-color: #dc3545;
  --warning-bg-color: #ffd350;
  --link-bg-color: transparent;

  --default-border-color: #ccc;
  --primary-border-color: #3184fd80;
  --success-border-color: #3c996e80;
  --danger-border-color: #e1536180;
  --warning-border-color: #d9a40680;
  --link-border-color: #0d6efd40;

  --default-hover-color: #555;
  --primary-hover-color: #0b5ed7;
  --success-hover-color: #157347;
  --danger-hover-color: #bb2d3b;
  --warning-hover-color: #ffc107;
  --link-hover-color: #4747f1;
}

.wrapper {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
}
</style>
