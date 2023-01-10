<template>
  <div class="vacancy">
    <AppHeader appTitle="Вакансия"></AppHeader>
    <div class="vacancy__wrapper">
      <main-text
        class="vacancy__back"
        :fontFamily="'montSer'"
        :fontSize="16"
        :fontWeight="500"
        @click="this.$router.push('/vacanci')"
      >
        Назад
      </main-text>
      <div class="vacancy__container"></div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppPage/AppHeader.vue';

export default {
  name: 'vacancy-place',
  components: { AppHeader },
};
</script>

<style lang="scss" scoped>
.vacancy {
  margin-left: 130px;
  &__wrapper {
    padding: 25px;
  }
  &__container {
    border-radius: 24px;
    background-color: #505050;
    width: 100%;
    padding: 22px;
  }
  &__back {
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
