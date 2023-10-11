<template>
  <form
    class="reg-form"
    @submit.prevent="submit"
  >
    <div class="reg-form__toggle reg-form__section">
      <custom-toggle
        v-model="userData.public"
        text="Публичный профиль"
      />
      <p>Включает профиль для просмотра другими пользователями по ссылке</p>
    </div>
    <div class="reg-form__section">
      <h3 class="reg-form__title">Данные</h3>

      <div class="reg-form__fields">
        <div class="reg-form__field">
          <custom-input
            v-model="userData.username"
            placeholder="Имя"
            :error="errors['username']"
          />
        </div>

        <div class="reg-form__field">
          <custom-select
            v-model="userData.role"
            :options="roles"
            placeholder="Должность"
            :error="errors['role']"
          />
        </div>

        <div class="reg-form__field">
          <custom-input
            v-model="userData.email"
            placeholder="Email"
            :error="errors['email']"
          />
        </div>

        <div class="reg-form__field"></div>

        <div class="reg-form__field">
          <custom-input
            v-model="userData.password"
            type="password"
            placeholder="Пароль"
            :error="errors['password']"
          />
        </div>

        <div class="reg-form__field">
          <custom-input
            v-model="userData.password_repeat"
            type="password"
            placeholder="Повторите пароль"
            :error="errors['password_repeat']"
          />
        </div>
      </div>
    </div>
    <div class="reg-form__checkbox">
      <custom-checkbox
        v-model="isUserAgree"
        text="Нажимая на кнопку “Регистрация”, я подтверждаю свое согласение с <a href='https://www.google.ru' target='_blank'>политикой конфиденциальности и обработки персональных данных</a>"
      />
    </div>

    <custom-button
      class="reg-form__submit"
      :isLoading="isLoading"
      :isDisabled="!isUserAgree"
    >
      Регистрация
    </custom-button>
  </form>
</template>

<script>
import CustomToggle from '@/components/ui/CustomToggle.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import CustomInput from '@/components/ui/CustomInput.vue';
import CustomSelect from '@/components/ui/CustomSelect.vue';
import CustomCheckbox from '@/components/ui/CustomCheckbox.vue';
import userRoles from '@/assets/userRoles';
import { sendRegistrationRequest } from '@/api/formsFunctions';

export default {
  name: 'RegistrationForm',
  components: {
    CustomToggle,
    CustomButton,
    CustomInput,
    CustomSelect,
    CustomCheckbox,
  },
  props: {
    defaultValues: Object,
  },
  data() {
    return {
      url: 'https://lmstestapi.reezonly.com/v1/user/signup',
      userData: {
        public: true,
      },
      errors: {},
      roles: [...userRoles],
      isUserAgree: true,
      isLoading: false,
      requiredFileds: [
        'public',
        'username',
        'role',
        'email',
        'password',
        'password_repeat',
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.userData = {
        ...this.userData,
        ...this.defaultValues,
      };
    });
  },
  methods: {
    async submit() {
      const userData = {
        ...this.userData,
        public: this.userData?.public ? 1 : 0,
        role: this.userData?.role?.value ?? null,
      };

      this.errors = {};
      this.isLoading = true;

      const isValid = this.getValidationResult(userData);
      if (!isValid) {
        this.isLoading = false;
        return;
      }

      try {
        let response = await sendRegistrationRequest(this.url, userData);
        let result = await response.json();
        if (result.success) {
          this.$emit('success');
        } else {
          this.addErrors(result.errors);
        }
        console.log(result);
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    addErrors(errors) {
      const err = Object.entries(errors).reduce((acc, [key, errors]) => {
        acc[key] = errors[0];
        return acc;
      }, {});

      this.errors = {
        ...this.errors,
        ...err,
      };
    },
    getValidationResult(data) {
      let isValid = true;

      this.requiredFileds.forEach((field) => {
        if (!data[field]) {
          isValid = false;
          this.addErrors({
            [field]: ['Поле обязательно для заполнения'],
          });
        }
      });

      return isValid;
    },
  },
};
</script>

<style scoped>
.reg-form {
  width: 900px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.reg-form__toggle p {
  color: #696977;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
  margin: 15px 0 0 0;
}

.reg-form__section {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 30px;
  margin-bottom: 20px;
}

.reg-form__title {
  margin: 0;
  margin-bottom: 20px;
}

.reg-form__fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  row-gap: 30px;
}

.reg-form__checkbox {
  width: 70%;
  margin-bottom: 50px;
}

.reg-form__submit {
  align-self: center;
  width: 240px;
}
</style>