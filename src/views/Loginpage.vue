<template>
  <div class="container-fluid">
    <div class="d-flex flex-column flex-md-row align-items-center justify-content-center   min-height-90 bg-light p-md-5 p-2">
      <div class="image-container  ">
        <img
          class="rounded login-image "
          src="../assets/image/login.svg"
          alt="Login"
        />
      </div>
      <div class="  form-container   p-2">
        <form v-if="!getOtp" @submit.prevent="sendOtp" class="shadow p-md-5  w-100 ">
          <div class="mb-3">
            <label for="email" class="form-label"
              >Enter Mobile Number</label
            >
            <input
              type="number"
              class="form-control"
              id="userphonenumber"
            />
            
          </div>
         
          <button type="submit" class="btn btn-primary">Get Otp</button>
          <router-link to="/signup" class="btn btn-outline-primary mx-4">Sign up</router-link>
        </form>
        <form v-else class="shadow p-md-5  w-100 ">
          <div class="mb-3">
            <label for="otp number" class="form-label"
              >Enter Otp Number</label
            >
            <input
              type="number"
              class="form-control"
              id="otpnumber"
            />
            
          </div>
         
          <button type="submit" class="btn btn-primary">Verify Otp</button>
          <router-link to="/signup" class="btn btn-outline-primary mx-4">Resend Otp</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */ 
export default {
    name:'Login',
    data(){
        return {
             loginCheck:'afasf',
             getOtp:false,
        }
    },
    methods:{
      sendOtp(){
        this.getOtp= true
      }
    }
   
};
</script>

<style></style>
