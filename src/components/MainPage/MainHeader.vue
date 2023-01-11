<template>
  <header class="header" v-if="myPadeDate.header">
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
      {{ myPadeDate.header.title }}
    </main-text>
    <nav class="header__nav">
      <main-text class="header__text" :fontFamily="'montSer'" :fontSize="18">{{
        myPadeDate.header.abs
      }}</main-text>
      <main-text class="header__text" :fontFamily="'montSer'" :fontSize="18">{{
        myPadeDate.header.contact
      }}</main-text>
      <my-button class="header__btn" @click="showDialog">
        <main-text
          class="header__text"
          :fontFamily="'montSer'"
          :fontSize="18"
          >{{ myPadeDate.header.login }}</main-text
        >
      </my-button>
      <auth-modal
        :myPadeDate="myPadeDate"
        v-model:show="dialogVisible"
      ></auth-modal>
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
  props: {
    myPadeDate: Object,
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
@media screen and (max-width: 830px) {
  .header {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 649px) {
  .header {
    height: 170px;
  }
  .header__nav {
    gap: 10px;
    flex-direction: column;
  }
}
</style>
