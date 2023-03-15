<template>
  <hr />
  <tr class="d-flex">
    <td class="id d-none d-sm-block"><span>#</span>{{ item.id }}</td>
    <td class="name d-block d-sm-flex align-items-center me-2 fw-bold">
      <img
        class="image d-none d-sm-block"
        :src="item.avatar"
        :alt="item.name"
      />
    </td>

    <td>
      {{ item.name }}
    </td>
    <td>{{ item.city }}</td>
    <span class="d-sm-none">-</span>
    <td>{{ item.country }}</td>
    <td class="date d-inline">
      <span class="d-sm-none">&deg;</span>{{ dateOfBirth }}
    </td>
    <td>
      <button
        @click="($event) => $emit('responseId', id)"
        data-bs-toggle="modal"
        data-bs-target="#infoModal"
      >
        <img :src="trashImg" alt="Kosz na śmieci" />
      </button>
    </td>
  </tr>
</template>

<script>
import Trash from "../../assets/icons/bin.png";
export default {
  data() {
    return {
      trashImg: Trash,
    };
  },
  props: ["item"],
  emits: ["responseId"],
  computed: {
    dateOfBirth() {
      return this.item.dateOfBirth
        ?.split("T")[0]
        .split("-")
        .reverse()
        .join("/");
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  td {
    width: 20%;
    flex-grow: 1;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    button {
      background-color: transparent;
      border: none;
      img {
        width: 30px;
        height: 30px;
        border-radius: 0;
      }
    }
  }
}
</style>
