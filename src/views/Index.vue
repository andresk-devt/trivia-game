<template>
  <main class="main-content">
    <b-modal
      hide-header
      hide-footer
      size="lg"
      no-close-on-backdrop
      centered
      v-model="modalShow"
    > 
      <QueryValuesForm @handleShowModal="handleShowModal" />
    </b-modal>
  </main>
</template>

<script>
import QueryValuesForm from "@/components/queryValuesForm.vue";

export default {
  name: "MainContent",
  components: {
    QueryValuesForm,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  created() {
    this.modalShow = true;
  },
  methods: {
    handleShowModal(data) {
      this.modalShow = data;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .modal-content {
  width: 50%;
  margin: auto;
  background: #45377E;
}
</style>
