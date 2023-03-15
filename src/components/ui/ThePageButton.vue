<template>
  <li>
    <button :class="isActive">
      {{ pageNumber }}
    </button>
  </li>
</template>

<script>
export default {
  props: ["pageNumber", "selectedPage"],
  computed:{
    isActive(){
      return {
        active: this.selectedPage == this.pageNumber
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.active{
  background-color: rgb(0, 0, 0);
  color: #fff;
}
</style>
