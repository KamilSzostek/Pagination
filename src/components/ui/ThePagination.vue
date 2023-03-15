<template>
  <ul @click="clickHandler">
    <li>
      <BaseButton class="left" @click.stop="skipPages(-this.pages.length)">
        <img :src="skipAll" alt="skip to begining" />
      </BaseButton>
    </li>
    <li>
      <BaseButton class="left" @click.stop="skipPages(-3)">
        <img :src="skip3" alt="skip three pages" />
      </BaseButton>
    </li>
    <ThePageButton
      v-for="page in firstHalfOfPages"
      :key="page"
      :pageNumber="page"
      :selectedPage="selectedPage"
    />
    <span>...</span>
    <ThePageButton
      v-for="page in secondHalfOfPages"
      :key="page"
      :pageNumber="page"
      :selectedPage="selectedPage"
    />
    <li>
      <BaseButton @click.stop="skipPages(3)">
        <img :src="skip3" alt="skip three pages" />
      </BaseButton>
    </li>
    <li>
      <BaseButton @click.stop="skipPages(this.pages.length)">
        <img :src="skipAll" alt="skip to end" />
      </BaseButton>
    </li>
  </ul>
</template>

<script>
import ThePageButton from "./ThePageButton.vue";
import skip3 from "../../assets/icons/skip3.png";
import skipAll from "../../assets/icons/right.png";

export default {
  components: {
    ThePageButton,
  },
  props: ["pages", "selectedPage"],
  emits: ["clickedPage"],
  data() {
    return {
      skip3: skip3,
      skipAll: skipAll,
    };
  },
  computed: {
    firstHalfOfPages() {
      let pagesArr = [];
      const dualVariable = this.pages.length % 2 === 0 ? 0 : 1;
      if (this.selectedPage <= this.pages.length / 2)
        pagesArr = this.pages.filter((page) => {
          if (
            page <= this.pages.length / 2 + dualVariable &&
            page >= +this.selectedPage - 1 &&
            page <= +this.selectedPage + 1
          )
            return page;
          else if (
            +this.selectedPage === this.pages[0] &&
            page === this.pages[2]
          )
            return page;
          else if (
            +this.selectedPage === this.pages.length / 2 &&
            page === this.pages[this.pages.length / 2]
          )
            return page;
        });
      else pagesArr.push(this.pages[0]);
      return pagesArr;
    },
    secondHalfOfPages() {
      let pagesArr = [];
      const dualVariable = this.pages.length % 2 === 0 ? 0 : 1;

      if (+this.selectedPage === this.pages.length / 2) {
        pagesArr.push(this.pages[this.pages.length - 1]);
        return pagesArr;
      }
      if (this.selectedPage >= this.pages.length / 2)
        pagesArr = this.pages.filter((page) => {
          if (
            page + dualVariable >= this.pages.length / 2 &&
            page >= +this.selectedPage - 1 &&
            page <= +this.selectedPage + 1
          )
            return page;
          else if (
            +this.selectedPage === this.pages[this.pages.length - 1] &&
            page === this.pages[this.pages.length - 3]
          )
            return page;
        });
      else pagesArr.push(this.pages[this.pages.length - 1]);
      return pagesArr;
    },
  },
  methods: {
    clickHandler(event) {
      if (event.target.textContent === "...")
        this.$emit("clickedPage", this.selectedPage);
      else this.$emit("clickedPage", event.target.textContent);
    },
    skipPages(count) {
      const targetPage = +this.selectedPage + count;
      const lastPage = this.pages.length - 1;
      const firstPage = this.pages[0];

      if (targetPage >= lastPage)
        this.$emit("clickedPage", this.pages[lastPage]);
      else if (targetPage <= firstPage) this.$emit("clickedPage", firstPage);
      else this.$emit("clickedPage", targetPage);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  list-style: none;

  li {
    img {
      width: 10px;
      height: 10px;
    }
    .left {
      transform: rotate(180deg);
    }
  }
}
</style>
