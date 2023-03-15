import TheHeader from './TheHeader.vue';

<template>
  <main>
    <TheHeader
      ><h2 v-if="items">Attendees({{ items.length }})</h2></TheHeader
    >
    <TheTable>
      <template :v-slot="header"> </template>
      <template v-for="item in watchedUsers" :key="item.id">
        <DataRow :item="item" @responseId="(id) => (this.selectedId = id)" />
      </template>
    </TheTable>
    <ThePagination
      :pages="pages"
      :selectedPage="selectedPage"
      @clickedPage="(page) => (this.selectedPage = page)"
    />
  </main>
</template>

<script>
import DataRow from "../data/DataRow.vue";
import ThePagination from "../ui/ThePagination.vue";
import TheTable from "../ui/TheTable.vue";
export default {
  components: {
    DataRow,
    ThePagination,
    TheTable,
  },
  data() {
    return {
      items: [],
      selectedId: "0",
      selectedPage: 1,
    };
  },
  computed: {
    watchedUsers() {
      return this.items.filter(
        (item) =>
          item.id <= this.selectedPage * 10 &&
          item.id > this.selectedPage * 10 - 10
      );
    },
    pages() {
      const pagesArr = [];
      if (this.items.length) {
        const length =
          this.items.length % 10 === 0
            ? Math.floor(this.items.length / 10)
            : Math.floor(this.items.length / 10) + 1;
        for (let index = 1; index <= length; index++) pagesArr.push(index);
      }
      return pagesArr;
    },
  },
  methods: {
    async getData() {
      const response = await fetch(
        "https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers/"
      );
      const responseData = await response.json();
      this.items = responseData;
    },
    deleteUser(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    changeSelectedPage(clickedPage) {
      console.log(clickedPage);
      if (this.selectedPage != clickedPage) this.selectedPage = clickedPage;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
main {
  margin-top: 1em;
  margin-inline: 1em;
  padding: 1em;
  background-color: #fff;
  box-shadow: 0 0 5px #00000057;

  h2 {
    padding: 0.5em;
  }
}

@media (min-width: 576px) {
  main {
    max-width: 1000px;
    margin-inline: 3em;
  }
}
</style>
