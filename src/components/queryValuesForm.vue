<template>
  <div class="query-values-form">
    <div class="close-button-container">
      <ion-icon @click="closeModal()" name="close-outline"></ion-icon>
    </div>
    <form action="" class="form-content">
      <div class="form-content__item">
        <label class="label-content" for="username"
          >Username:</label
        >
        <input class="input-content" id="username" placeholder="Enter your username"/>
      </div>
      <div class="form-content__item">
        <label class="label-content" for="categories"
          >Select the topic questions:</label
        >
        <select class="input-content" id="categories">
          <option
            class="input-content__option"
            v-for="categorie in categories"
            :key="categorie"
          >
            {{ categorie }}
          </option>
        </select>
      </div>
      <div class="form-content__item">
        <label class="label-content" for="difficulty"
          >Select the difficulty:</label
        >
        <select class="input-content" id="difficulty">
          <option
            class="input-content__option"
            v-for="item in difficulty"
            :key="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <button class="form-button" type="button">Play!</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "QueryValuesForm",
  data() {
    return {
      categories: [],
      difficulty: ["Easy", "Medium", "Hard"],
    };
  },
  async created() {
    await this.$store.dispatch("getCategoriesOptions");
    this.categories = Object.keys(this.options);
  },
  computed: {
    ...mapGetters({ options: "getCategories" }),
  },
  methods: {
    closeModal() {
      this.$emit("handleShowModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.close-button-container {
  display: flex;
  justify-content: end;
  color: white;
}
.form-content {
  display: flex;
  flex-direction: column;
  &__item {
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
  }
}
.label-content {
  color: white;
  margin-bottom: 5px;
}
.input-content {
  padding: 10px;
  background: #52408C;
  border: none;
  color: #D1C5F3;
  outline: none;
  border-radius: 6px;
  &::placeholder {
    color: #D1C5F3;
  }
}
.form-button {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background: #fe9479;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  &:hover {
    filter: brightness(0.9);
  }
}
ion-icon {
  font-size: 2rem;
  cursor: pointer;
}
</style>
