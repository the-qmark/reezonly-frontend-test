<template>
  <div class="main-modal">
    <div
      class="main-modal__background"
      @click="$emit('close-modal')"
    ></div>

    <div class="main-modal__wrapper">
      <h2 class="main-modal__title">{{ title }}</h2>
      <div class="main-modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainModal',
  props: {
    title: {
      type: String,
      default: 'Заголовок модального окна',
    },
  },
};
</script>

<style scoped>
.main-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-modal__title {
  margin: 0;
  padding: 27px;
  border-bottom: 1px solid #d9d9d9;
  color: #000;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  letter-spacing: -0.066px;
}

.main-modal__wrapper {
  position: relative;
  z-index: 999;
  background: #fdfdfd;
  border-radius: 15px;
  max-width: 990px;
  overflow: hidden;
  box-shadow: 0px 1px 20px rgb(240 240 240 / 80%);
}

.main-modal__content {
  padding: 20px;
}

.main-modal__background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #979797;
  opacity: 0.5;
}
</style>