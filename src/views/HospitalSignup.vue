<template>
  <div class="container-fluid">
    <div class="row align-items-center  justify-content-center  min-height-90 bg-light    p-2">
      <div class="col-md-4 image-container col-12">
        <img
          class="rounded signup-image"
          src="../assets/image/hospital.svg"
          alt="hsospital login"
        />
      </div>
      <div class="col-md-6 col-12 form-container p-2  shadow ">
        <form class=" p-md-3 w-100">
         <div class="d-md-flex align-items-center justify-content-evenly">
            <div>
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
          </div>
          <div>
              <div class="mb-3">
            <label for="reg" class="form-label"
              >Registration Number</label
            >
            <input
              type="text"
              max="10"
              min="10"
              class="form-control"
              id="reg"
            />
            
          </div>
             <div class="mb-3">
            <label for="reg" class="form-label"
              >Address</label
            >
            <textarea name="address" class="form-control" id="address" cols="10" rows="5"></textarea>
            
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
          </div>
         </div>
       
         <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-success">Submit</button>
             <router-link to="/hospital/login"><a  class="btn btn-outline-primary">Login</a></router-link>
         </div>
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
