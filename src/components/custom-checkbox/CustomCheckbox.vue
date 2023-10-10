<template>
  <label class="container">
    <span v-html="text"></span>
    <input
      v-model="model"
      type="checkbox"
      checked="checked"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      required: true,
    },
    text: String,
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

<style  scoped>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  display: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ccc;
  border-radius: 5px;
}

input:checked ~ .checkmark {
  background-color: #ffd467;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

input:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  left: 50%;
  top: 50%;
  width: 4px;
  height: 8px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>