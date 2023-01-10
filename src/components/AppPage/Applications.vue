<template>
  <div class="applications-cont">
    <Sidebar></Sidebar>
    <router-view />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  components: { Sidebar },
  name: 'app-page',
};
</script>

<style lang="scss" scoped>
.applications-cont {
  display: flex;
  background-color: #343434;
  height: 100vh;
  width: 100vw;
}
</style>
