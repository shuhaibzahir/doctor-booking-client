<template>
  <div class="container-fluid">
    <div class="row align-items-center  justify-content-center min-height bg-light p-md-5 p-2">
      <div class="col-md-6 image-container col-12">
        <img
          class="rounded signup-image"
          src="../assets/image/signup.svg"
          alt="Login"
        />
      </div>
      <div class="col-md-4 col-12 form-container p-md-5 p-2 shadow d-flex justify-content-center">
        <form >
          <div class="mb-3">
            <label for="username" class="form-label"
              >User name</label
            >
            <input
              type="text"
              class="form-control"
              id="username"
            />
            
          </div>
           <div class="mb-3">
            <label for="email" class="form-label"
              >Email Address</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
            />
            
          </div>
           <div class="mb-3">
            <label for="phone" class="form-label"
              >Phone Number</label
            >
            <input
              type="tel"
              max="10"
              min="10"
              class="form-control"
              id="phone"
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
           <div class="mb-3">
            <label for="confirmpassowrd" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmpassowrd"
            />
          </div>
       
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {signuppageData} from '../Models/signuppage'
export default {
    name:'Signup',
    data():signuppageData {
        return {
             signupCheck:'afasf'
        }
    }
};
</script>

<style></style>
