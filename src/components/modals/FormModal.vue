<template>
  <MainModal
    :title="title"
    @close-modal="$emit('close-modal')"
  >
    <registration-form
      :default-values="defaultValues"
      @success="$emit('success')"
    />
  </MainModal>
</template>

<script>
import MainModal from '@/components/modals/MainModal.vue';
import RegistrationForm from '@/components/forms/RegistrationForm.vue';

export default {
  name: 'FormModal',
  components: { MainModal, RegistrationForm },
  props: {
    title: String,
    defaultValues: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>