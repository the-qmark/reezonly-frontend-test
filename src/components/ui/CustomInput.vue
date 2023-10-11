<template>
  <div class="custom-input">
    <input
      v-model="model"
      id="custom-input"
      :type="type"
      :placeholder="placeholder"
    />
    <label
      v-if="error"
      class="custom-input__label"
      for="custom-input"
      >{{ error }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Введите текст',
    },
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
};
</script>

<style scoped>
.custom-input {
  display: flex;
  flex-direction: column;
}

input[type='text'],
input[type='password'] {
  font-family: inherit;
  border: 1px solid #e6e6eb;
  outline: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
  border-radius: 11px;
  padding: 10px;
}

input[type='text']::placeholder,
input[type='password']::placeholder {
  color: #9292a0;
}

input[type='text']:focus,
input[type='password']:focus {
  border-color: #bebebe;
}

.custom-input__label {
  font-size: 12px;
  padding-left: 10px;
  color: red;
}
</style>