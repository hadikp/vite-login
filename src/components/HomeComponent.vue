<script>
import { reactive } from "vue"

export default {
  name: "Login",
  setup() {
    const data = reactive({
      username: '',
      email: '',
      role: '',
      password: '',
      repeat_password: ''
    });
    const register = () => {
      console.log(data);
    }
    return {
      data,
      register
    }
  }
}
  
</script>

<template>
  <h1>Home Component</h1>
  
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
                    <div class="col-md-7">
                        <div class="form-block">
                          <h2>Register</h2>
                          <div class="form">
                            <form v-on:submit.prevent="register">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter UserName" name="username" required v-model="data.username">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter email" name="email" required v-model="data.email">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter Role" name="role" required v-model="data.role">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Enter Password" name="password" required v-model="data.password">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Enter Repeat Password" name="repeat_password" required v-model="data.repeat_password">
                                </div>
                                <button type="submit" class="btn btn-default custom-btn">Register</button>
                            </form>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-block">
                           <h2>Login</h2>
                           <div class="form">
                            <form action="/action_page.php">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                                </div>
                                <button type="submit" class="btn btn-default custom-btn">Submit</button>
                            </form>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<style>
 header {
  line-height: 1.5;
  max-height: 100vh;
}

h1 {
  color: white;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } 
}

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