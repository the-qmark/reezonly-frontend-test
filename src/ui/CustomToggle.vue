<template>
  <label class="switch">
    <input
      type="checkbox"
      v-model="model"
    />
    <div class="toggle"></div>
    <p class="switch__text">{{ text }}</p>
  </label>
</template>

<script>
export default {
  name: 'CustomToggle',
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
.switch {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}

.switch input {
  display: none;
}

.switch__text {
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
}

.toggle {
  position: relative;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  margin-right: 15px;
  border-radius: 34px;
}

.toggle:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
}

input:checked + .toggle {
  background-color: #7d7aff;
}

input:focus + .toggle {
  box-shadow: 0 0 1px #7d7aff;
}

input:checked + .toggle:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
</style>