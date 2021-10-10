<template>
    <b-container class="p-3">
    <h1>LOGIN</h1>
    <b-form-group
      class="text-left"
      label="Email"
      label-for="email"
      :invalid-feedback="invalidFeedbackEmail"
      :state="stateEmail"
    >
      <b-form-input
        id="email"
        v-model="email"
        :state="stateEmail"
        trim
        autofocus
        @keydown="entrada($event)"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      class="text-left"
      label="Contrasenña"
      label-for="password"
      :invalid-feedback="invalidFeedbackPassword"
      :state="statePassword"
    >
      <b-form-input
        id="password"
        type="password"
        v-model="password"
        :state="statePassword"
        trim
        @keydown="entrada($event)"
      ></b-form-input>
    </b-form-group>

    <div class="d-flex flex-column">
      <router-link to="registre" class="mb-3">Crear usuari</router-link>
      <div>
        <b-button variant="primary" :disabled="disableSend" @click="login"
          ><span
            class="spinner-border spinner-border-sm"
            v-if="sending === true"
          ></span
          ><span v-else>Enviar</span></b-button
        >
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  
  data() {
    return {
      email: "",
      password: "",
      disableAll: false,
      disableSend: true,
      sending: false,
      firstEmail: true,
      firstPassword: true,
    };
  },
  computed: {
    stateEmail() {
      const pattern =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (this.firstEmail) {
        return null;
      }
      if (this.email.match(pattern) === null) {
        return false;
      } else {
        return true;
      }
    },
    invalidFeedbackEmail() {
      const pattern =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (this.email.match(pattern) === null) {
        return "Email no válida";
      }

      return "";
    },
    statePassword() {
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      // const pattern = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;
      if (this.firstPassword) {
        return null;
      }
      if (this.password.match(pattern) === null) {
        return false;
      } else {
        return true;
      }
    },
    invalidFeedbackPassword() {
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (this.password.match(pattern) === null) {
        return "Mínimo ocho caracteres, al menos una letra y un número";
      }

      return "";
    },
  },
  methods: {
    entrada(event) {
      switch (event.target.id) {
        case "email":
          this.firstEmail = false;
          break;
        case "password":
          this.firstPassword = false;
          break;
      }
    },

    activar(okEmail, okPass) {
      if (okEmail && okPass) {
        this.disableSend = false;
      } else {
        this.disableSend = true;
      }
    }
  }
}
</script>
