<template>
  <button
    class="custom-button"
    :disabled="isDisabled || isLoading"
    @click="$emit('click')"
  >
    <custom-loader v-if="isLoading" />
    <slot v-else></slot>
  </button>
</template>

<script>
import CustomLoader from '@/components/ui/CustomLoader.vue';
export default {
  name: 'CustomButton',
  components: { CustomLoader },
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.custom-button {
  font-family: inherit;
  width: fit-content;
  cursor: pointer;
  padding: 10px 12px;
  color: #07a86e;
  background: #fff;
  border-radius: 9px;
  border: 1px solid #07a86e;
}

.custom-button:hover {
  box-shadow: 0px 1px 20px rgb(240 240 240 / 80%);
}

.custom-button:disabled {
  cursor: unset;
  color: #ccc;
  border: 1px solid #ccc;
}

.custom-button:disabled:hover {
  box-shadow: none;
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  width: 15px;
  height: 15px;
}

.spinner .path {
  stroke: #7d7aff;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>