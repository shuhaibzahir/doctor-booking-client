<template>
        <div class="col-md-4 col-12 shadow p-md-3">
          <div class="align-items-center bg-light text-dark"> 
           
            <img  class=" img-thumbnail border-none " :src="details.image" alt="doctor-image" style="max-height:200px; width:100%; object-fit:cover">
          
          <div class="px-md-2  p-2">
            <div class="title-content pb-2 px-3">
              <h4>{{details.name}}</h4>
              <span class="text-muted">{{details.education}}</span><br/>
              <span class="text-muted">{{details.designation}}</span>
            </div>
            <div class="d-flex align-items-center">
              <input type="date" v-model="selectedDate" class="form-control  ">
              <button class="btn btn-dark mx-3" @click="checkAvailableDate">Check</button>
            </div>
          </div>
          </div>
              <div class="p-md-3 p-1 mb-4 my-md-0 bg-light" v-if="checkedDate">
              <h6 class=" mb-3">Optime</h6>
              <div class="d-flex flex-wrap ">
                <div v-for="(time,index) of details.optime.time" :key="index" class="d-flex align-items-center mt-1">
                  <span class="btn-sm btn btn-outline-success">{{time.time}}</span>
                  <spn class="mx-md-2 m-1 bg-light border p-1 rounded">Available: <span class="text-success">{{time.available}}</span></spn>
                </div>
              </div>
            </div>
            <div v-else class="bg-light p-5">
                <span>please select time</span>
            </div>
        </div>
   
</template>

<script>
export default {
    name:'DoctorBooking',
    props:['details'],
    data(){
        return{
            selectedDate:'',
            checkedDate:false
        }
    },
    watch:{
        selectedDate(){
            if(!this.selectedDate){
                this.checkedDate=false
            }
        }
    },
    methods:{
        checkAvailableDate(){
            console.log(this.selectedDate)
            if(this.selectedDate){
                this.checkedDate= true
            }
        }   
    }
}
</script>

<style>

</style>