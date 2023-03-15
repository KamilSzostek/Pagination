<template>
  <table>
    <thead>
      <slot name="thead"></slot>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
    <tfoot>
      <slot name="tfoot"></slot>
    </tfoot>
  </table>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: auto;

  thead {
    height: 70px;
    margin-bottom: -1em;
    padding-top: 20px;
    background-color: #f1f4f8;
    color: #333333a9;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
}

@media (min-width: 576px) {
  table {
    width: 900px;
    margin-inline: 3em;
  }
}
</style>
