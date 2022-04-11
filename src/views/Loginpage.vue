<template>
  <div class="container-fluid">
    <div class="row align-items-center justify-content-center min-height bg-light p-md-5 p-2">
      <div class="col-md-6 image-container col-12">
        <img
          class="rounded login-image"
          src="../assets/image/login.svg"
          alt="Login"
        />
      </div>
      <div class="col-md-6 col-12 form-container p-md-5 p-2">
        <form >
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="userEmail"
            />
            
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="userPassword"
            />
          </div>
       
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {loginpageData} from '../Models/loginpage'
export default {
    name:'Login',
    data():loginpageData {
        return {
             loginCheck:'afasf'
        }
    }
};
</script>

<style></style>
