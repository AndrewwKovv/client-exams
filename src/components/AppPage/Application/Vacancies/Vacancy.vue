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
      <div class="vacancy__container">
        <main-text
          class="vacancy__title"
          :fontFamily="'montSer'"
          :fontSize="18"
          :fontWeight="500"
        >
          {{ title }}
        </main-text>
        <my-button class="vacancy__btn" @click="showDialog">
          <main-text
            class="vacancy__subtitle"
            :fontFamily="'montSer'"
            :fontSize="14"
            :fontWeight="500"
          >
            редактировать
          </main-text>
        </my-button>
        <change-modal
          v-model:show="dialogVisible"
          :nameVacy="title"
        ></change-modal>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppPage/AppHeader.vue';

export default {
  name: 'vacancy-place',
  components: { AppHeader },
  data() {
    return {
      title: '',
      dialogVisible: false,
    };
  },
  props: {
    vacName: String,
  },
  methods: {
    getTitleName() {
      this.title = this.$route.params.vacName;
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  beforeMount() {
    this.getTitleName();
  },
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
    display: flex;
  }
  &__back {
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  &__btn {
    width: 140px;
    background-color: #4dd362;
  }
  &__title {
    margin-right: 15px;
  }
  &__subtitle {
    margin: auto;
    text-align: center;
  }
}
</style>
