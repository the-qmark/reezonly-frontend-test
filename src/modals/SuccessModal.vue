<template>
  <MainModal
    :title="title"
    @close-modal="$emit('close-modal')"
  >
    <h4>{{ description }}</h4>
    <custom-button
      class="success-modal__button"
      @click="$emit('close-modal')"
    >
      OK
    </custom-button>
  </MainModal>
</template>

<script>
import MainModal from '@/components/modals/MainModal.vue';
import CustomButton from '../custom-button/Button.vue';

export default {
  name: 'FormModal',
  components: { MainModal, CustomButton },
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.success-modal__button {
  width: 100%;
}
</style>