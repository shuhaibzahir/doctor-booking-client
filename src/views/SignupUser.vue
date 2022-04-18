<template>
  <div class="container-fluid">
    <div class="row align-items-center  justify-content-center min-height-90 bg-light p-md-5 p-2">
      <div class="col-md-6 image-container col-12">
        <img
          class="rounded signup-image"
          src="../assets/image/signup.svg"
          alt="Login"
        />
      </div>
      <div class="col-md-4 col-12 form-container p-md-5 p-2 shadow d-flex justify-content-center">
        <form v-if="!getOtop" @submit.prevent="sendOtpRequest">
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
          
       
          <button type="submit" class="btn btn-primary">Get Otp</button>
          <router-link to="/login" class="btn btn-outline-primary mx-4">Login</router-link>

        </form>
         <form v-else>
          <div class="mb-3">
            <label for="for otp enter" class="form-label"
              >Enter Otp</label
            >
            <input
              type="number"
              class="form-control"
              id="signupotp"
            />
            
          </div>
             
          <button type="submit" class="btn btn-primary">Verify</button>
      
            <a  v-if="!resendOtp"  @click="resendOtpNumber" class="btn btn-outline-primary mx-4  ">Resend</a>
            <span class="mx-4" v-else>Resending otp</span>
         
          
     </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Signup',
    data(){
        return {
             signupCheck:'afasf',
             getOtop: false,
             resendOtp:false

        }
    },
    methods:{
      sendOtpRequest(){
        this.getOtop = true
      },

      resendOtpNumber(){
        this.resendOtp= true
      }
    }
};
</script>

<style></style>
