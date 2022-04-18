<template>
  <div class="container-fluid">
    <div class="row align-items-center  justify-content-center  min-height-90 bg-light    p-2">
      <div class="col-md-4 image-container col-12">
        <img
          class="rounded signup-image"
          src="../assets/image/hospital-login.svg"
          alt="hsospital login"
        />
      </div>
      <div class="col-md-4 col-12 form-container   d-flex justify-content-center p-2 shadow ">
        <form class=" p-md-3  text-center">
        
            
          
              <div class="mb-3">
            <label for="reg" class="form-label"
              >Registration number or username</label
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
            <label for="confirmpassowrd" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmpassowrd"
            />
          </div>
           
       
       
         <div class="d-flex justify-content-around">
            <button type="submit" class="btn btn-outline-success">Submit</button>
            <router-link to="/hospital/register"> <a class="btn btn-outline-primary">Register</a></router-link>
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
