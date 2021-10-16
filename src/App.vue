<template>
  <div class="wrapper">
    <span>Icon with prop 'size' = 35:</span>
    <Icon :icon_class="'fas fa-ambulance'" :size="35" />
  </div>

  <div class="wrapper">
    <span>Icon with mode 'big' (size = 26):</span>
    <Icon :icon_class="'fas fa-ambulance'" :mode="'big'" />
  </div>

  <div class="wrapper">
    <span>Icon with default size (size = 18):</span>
    <Icon :icon_class="'fas fa-ambulance'" />
  </div>

  <div class="wrapper">
    <span>Vertically flipped icon:</span>
    <Icon :icon_class="'fas fa-ambulance'" :flip="'vertical'" />
  </div>

  <div class="wrapper">
    <span>Horizontally flipped icon:</span>
    <Icon :icon_class="'fas fa-ambulance'" :flip="'horizontal'" />
  </div>

  <div class="wrapper">
    <span>Vertically and horizontally flipped icon:</span>
    <Icon :icon_class="'fas fa-ambulance'" :flip="'both'" />
  </div>

  <div class="wrapper">
    <span>Rotated icon (degrees = 90):</span>
    <Icon :icon_class="'fas fa-ambulance'" :rotate="90" />
  </div>

  <div class="wrapper">
    <span>Rotated icon (degrees = 57):</span>
    <Icon :icon_class="'fas fa-ambulance'" :rotate="57" />
  </div>

  <h2>Buttons:</h2>

  <div class="wrapper">
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'default'"
    >
      Default
    </Button>
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'primary'"
    >
      Primary
    </Button>
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'success'"
    >
      Success
    </Button>
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'danger'"
    >
      Danger
    </Button>
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'warning'"
    >
      Warning
    </Button>
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'link'"
    >
      Link
    </Button>
    <Button
      :icon_class="'fas fa-user-alt'"
      :icon_position="'prefix'"
      :icon_size="35"
      :theme="'disabled'"
    >
      Disabled
    </Button>
  </div>

  <div class="wrapper">
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'default'">
      Default
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'primary'">
      Primary
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'success'">
      Success
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'danger'">
      Danger
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'warning'">
      Warning
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'link'">
      Link
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'disabled'">
      Disabled
    </Button>
  </div>

  <div class="wrapper">
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'default'">
      Default
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'primary'">
      Primary
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'success'">
      Success
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'danger'">
      Danger
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'warning'">
      Warning
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'link'">
      Link
    </Button>
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'postfix'" :theme="'disabled'">
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
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'default'" />
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'primary'" />
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'success'" />
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'danger'" />
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'warning'" />
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'link'" />
    <Button :icon_class="'fas fa-user-alt'" :icon_position="'prefix'" :theme="'disabled'" />
  </div>

  <!-- <Icon :icon_class="'visibility'" :size="85" /> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Icon from '@/components/Icon.vue';
import Button from '@/components/Button.vue';

@Options({
  components: {
    Icon,
    Button,
  },
})
export default class App extends Vue {
  name: string = 'App';
}
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
