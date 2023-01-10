<template>
  <header class="header">
    <main-text
      class="header__logo-wrapper"
      :fontFamily="'montSer'"
      :fontSize="32"
      :fontWeight="600"
    >
      <img
        src="@/assets/header_logo.svg"
        alt="Logo"
        class="header__logo__img"
      />
      ItvHunt
    </main-text>
    <nav class="header__nav">
      <main-text class="header__text" :fontFamily="'montSer'" :fontSize="18"
        >Возможности</main-text
      >
      <main-text class="header__text" :fontFamily="'montSer'" :fontSize="18"
        >Контакты</main-text
      >
      <my-button class="header__btn" @click="showDialog">
        <main-text class="header__text" :fontFamily="'montSer'" :fontSize="18"
          >Войти</main-text
        >
      </my-button>
      <auth-modal v-model:show="dialogVisible"></auth-modal>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'my-header',
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #404040;
  max-width: 1180px;
  width: 100%;
  height: 90px;
  border-radius: 5px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__logo-wrapper {
    display: flex;
    align-items: center;
  }
  &__nav {
    display: flex;
    gap: 30px;
  }
  &__btn {
    padding: 1px 13px;
    border-radius: 5px;
  }
}
</style>
