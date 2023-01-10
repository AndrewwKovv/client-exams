<template>
  <div class="app-header">
    <main-text
      class="app-header__text"
      :fontFamily="'montSer'"
      :fontSize="24"
      :fontWeight="500"
      >{{ appTitle }}</main-text
    >
    <div class="app-header__profile" @click="this.$router.push('/settings')">
      <main-text
        :fontFamily="'montSer'"
        :fontSize="20"
        class="app-header__name-person"
        >{{ avatar.name }}</main-text
      >
      <div class="app-header__photo">
        <img src="@/assets/avatar-photo.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    appTitle: String,
  },
  data() {
    return {
      avatar: {
        name: 'Андрей',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #505050;
  height: 67px;
  width: calc(1440px - 130px);
  padding: 0 30px;
  &__profile {
    display: flex;
    align-items: center;
    gap: 35px;
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
}
</style>
