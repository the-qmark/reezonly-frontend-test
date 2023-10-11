<template>
  <div class="custom-select">
    <div
      id="selected"
      class="custom-select__selected"
      :class="{ 'custom-select__open': isOpen }"
      @click="isOpen = !isOpen"
    >
      <div
        class="custom-select__placeholder"
        v-if="!selectedOption"
      >
        {{ placeholder }}
      </div>
      <div v-else>
        {{ selectedOption.name }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M13 9L9.5 12L6 9"
          stroke="#A7A7B6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="custom-select__list"
      :class="{ 'custom-select__list_hide': !isOpen }"
    >
      <div
        class="custom-select__option"
        v-for="(option, index) of options"
        :key="index"
        @click="onSelect(option)"
      >
        {{ option.name }}
      </div>
    </div>
    <label
      v-if="error"
      class="custom-select__label"
      for="selected"
      >{{ error }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Выберите опцию...',
    },
    error: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onSelect(option) {
      this.isOpen = false;
      this.selectedOption = option;
    },
  },
  computed: {
    selectedOption: {
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
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 40px;
}

.custom-select__placeholder {
  color: #9292a0;
}

.custom-select__selected {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  border: 1px solid #e6e6eb;
  outline: none;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
  border-radius: 11px;
  padding: 10px;
}

.custom-select__open {
  border: 1px solid #bebebe;
  border-radius: 11px 11px 0px 0px;
}

.custom-select__list {
  border-radius: 0px 0px 11px 11px;
  overflow: hidden;
  border-right: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  border-bottom: 1px solid #bebebe;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select__option {
  color: #000;
  padding: 10px;
  cursor: pointer;
  user-select: none;
}

.custom-select__option:hover {
  background-color: #bebebe;
}

.custom-select__list_hide {
  display: none;
}

.custom-select__label {
  font-size: 12px;
  padding-left: 10px;
  color: red;
}
</style>