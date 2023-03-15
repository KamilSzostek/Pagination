<template>
  <TheHeader><img id="logo" :src="logo" alt="Logo firmy sdx" /></TheHeader>
  <TheMain />
</template>

<script>
import TheMain from "./components/layout/TheMain.vue";
import Logo from "./assets/images/sdworx_logo.png";

export default {
  components: {
    TheMain
  },
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style>
body {
  background-color: #f8f9fb;
  font-family: "Roboto", sans-serif;
}
#logo {
  margin-top: 1em;
  margin-left: 1em;
}
</style>
