<template>
  <div class="container">
    <my-header></my-header>
    <my-body></my-body>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './MainHeader.vue';
import MyBody from './MainBody.vue';
import MyFooter from '@/components/MainPage/MainFooter.vue';

export default {
  components: { MyHeader, MyBody, MyFooter },
  name: 'main-page',
};
</script>

<style lang="scss" scoped>
.container {
  padding: 36px 130px 0;
  background-color: #1e1e1e;
}
@media screen and (max-width: 550px) {
  .container {
    padding: 15px 20px 0;
  }
}
</style>
