<template>
  <div class="main-page">
    <custom-button @click="openModal">
      Зарегистрироваться с пустой формой
    </custom-button>

    <custom-button @click="openModalWithDefault">
      Зарегистрироваться с заполненными полями
    </custom-button>
  </div>
</template>

<script>
import CustomButton from '../components/custom-button/CustomButton.vue';

export default {
  name: 'MainPage',
  components: { CustomButton },
  data() {
    return {
      showModal: false,
      showModalWithDefault: false,
      showSucess: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    openModalWithDefault() {
      this.showModalWithDefault = true;
    },
  },
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>