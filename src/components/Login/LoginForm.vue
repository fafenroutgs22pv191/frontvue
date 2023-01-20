<template>
  <form class="mt-4" method="post" @submit="login">
    <div class="formHolder">
    <div class="formMain">
    <div class="mb-4">
      <div><label>Email</label></div>
      <div><input type="email" className="form-control" name="email" required v-model="email"></div>
      <div class="errors">{{ errors.email }}</div>
    </div>
    <div class="mb-4">
      <div><label>Пароль</label></div>
      <div><input type="password" className="form-control" name="password" required v-model="password"></div>
      <div class="errors">{{ errors.password }}</div>
    </div>
    <div class="mb-4">
      <button type="submit" class="btnPrimary">Войти</button>
    </div>
    </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    validate() {
      for (let errorsKey in this.errors) {
        this.errors[errorsKey] = ''
      }

      if (this.email.trim().length === 0) {
        this.errors.email = 'Заполните Email.'
      }

      if (this.password.trim().length === 0) {
        this.errors.password = 'Заполните Пароль.'
      }
    }
  }
}
</script>

<style>
  .formHolder{
    display: flex;
    justify-content: center;
    margin-top: 10%;
}

.formMain {
    background-color:rgba(119, 90, 53, 0.708) ;
    width: 150%;
    border-radius: 10px;
    margin-top: -10%;
    font-size: 21px;
    font-weight: 600;
    padding: 5% 5%;
    color: aliceblue;
}

.formTextInfo {
    color: rgb(215, 218, 220);
    font-size: 17px;
    font-weight: 500;
}

.btnPrimary {
    font-size: 21px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    background-color: rgb(77, 38, 0);
    color: aliceblue;
    padding: 7px 12px;
}
    
.btnPrimary:hover {
    background-color:rgb(0, 0, 0);
}
</style>
