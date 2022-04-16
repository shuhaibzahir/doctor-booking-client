<template>
  <div class="pt-md-5 pt-2">
      <!-- hospital details -->
      <div class="container">
          <hospital-details/>
      </div>
  </div>

</template>

<script>
import HospitalDetails from "@/components/HospitalDeatils.vue"
export default {
    name:'HospitalPage',
    components:{
        HospitalDetails
    },
    mounted(){
        console.log(this.$route.params.id) 
    }
}
</script>

<style>

</style>