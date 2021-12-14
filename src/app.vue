<template>
  <div>
    <h1>App 根组件</h1>
    {{ msg }}
    <foo></foo>
  </div>
</template>

<script>
import Foo from "./components/Foo.vue";
export default {
  data() {
    return {
      msg: "hello webpack",
    };
  },
  components: { Foo },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>