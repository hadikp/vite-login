<script>
  import { reactive } from "vue"
  import axios from "redaxios"
  import { useLoginStore } from '../stores/login'


  export default {
  name: "Login",
  setup() {
    const data = reactive({
      username: '',
      password: '',
    });
    const loginData = useLoginStore();
    const login =  () => {
       axios.post("http://localhost:8080/api/login", data).then(resp => {
        console.log(resp.data),
          loginData.login = resp.data
        })
          .catch(error => (error.value = 'Hibás bejelentkezés, próbáld újra!'))   
    }
    return {
      data,
      loginData,
      login,
    }
  }}
</script>

<template>
  <h1>Login Component</h1>
  <section clas="main-container">
            <div class="container">
                <div class="row">
                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="header-content text-center">
                            <h1 class="header-title">Bootstrap Form</h1>
                            <h4 class="header-motto">Bootstrap Register and Login  Form</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-block">
                           <h2>Login</h2>
                           <div class="form">
                            <form v-on:submit.prevent="login">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter username" name="username" v-model="data.username">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Enter password" name="pwd" v-model="data.password">
                                </div>
                                <button type="submit" class="btn btn-default custom-btn">Login</button>
                            </form>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style>
  .header-content {
  padding: 50px 0;
}
.header-title {
  color: #88c724;
  display: block;
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;
  text-transform: uppercase;
}
.header-motto {
  color: #88c724;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
}
.form-block {
  background: #f9f9f9 none repeat scroll 0 0;
  border-radius: 1px;
  box-shadow: 2px 3px 8px #a7a7a7;
  color: gray;
  display: block;
  min-height:460px;
  overflow: hidden;
  padding:30px;
  margin-bottom:20px;
}
.form-block h2 {
  border-bottom: 1px solid #88c724;
  color: #88c724;
  display: block;
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 20px;
  padding-bottom: 8px;
}
.form .form-control {
  border-radius: 0;
  color: #999;
  height: 42px;
  margin: 10px;
}
.form-control:focus {
  border-color: #88c724;
  box-shadow: none;
}
.custom-btn:hover,
.custom-btn {
  background-color: #88c724;
  border-color: #88c724;
  color: #fff;
  font-size: 20px;
  height: 40px;
  width: 100%;
  font-weight: 500;
}
</style>