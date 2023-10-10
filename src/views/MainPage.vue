<template>
  <div class="main-page">
    <custom-button @click="openModal">
      Зарегистрироваться с пустой формой
    </custom-button>

    <custom-button @click="openModalWithDefault">
      Зарегистрироваться с заполненными полями
    </custom-button>

    <form-modal
      v-if="showModal"
      title="Регистрация"
      @close-modal="showModal = false"
      @success="onSuccess"
    />
    <form-modal
      v-if="showModalWithDefault"
      title="Регистрация (дефолтные значения)"
      :default-values="defaultValues"
      @close-modal="showModalWithDefault = false"
      @success="onSuccess"
    />
    <success-modal
      v-if="showSucess"
      title="Поздравляем"
      description="Регистарция прошла успешно"
      @close-modal="showSucess = false"
    />
  </div>
</template>

<script>
import FormModal from '@/components/modals/FormModal.vue';
import CustomButton from '../components/custom-button/CustomButton.vue';
import userRoles from '../assets/userRoles';
import SuccessModal from '@/components/modals/SuccessModal.vue';

export default {
  name: 'MainPage',
  components: { CustomButton, FormModal, SuccessModal },
  data() {
    return {
      showModal: false,
      showModalWithDefault: false,
      showSucess: false,
      defaultValues: {
        username: 'Иванов Иван',
        role: userRoles[1],
        email: 'ivanov_ivan@mail.ru',
        password: '1234567890',
        password_repeat: '1234567890',
      },
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    openModalWithDefault() {
      this.showModalWithDefault = true;
    },
    onSuccess() {
      this.showModal = false;
      this.showModalWithDefault = false;
      this.showSucess = true;
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