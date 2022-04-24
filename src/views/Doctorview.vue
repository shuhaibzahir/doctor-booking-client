<template>
  <div>
      <div class="container p-md-5 p-2 d-md-flex justify-content-between">
          <div class="col-12 col-md-5">
              <img class="img-thumbnail fit-cover" src="https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg" alt="">
          </div>
          <div class="col-md-6 col-12">
              <div class="p-md-0 p-3">
              <h5>Shuhaib zahir</h5>
              <h6>Neurology</h6>
              <p>MBBS MD SMS</p>
              </div>
                <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Specilization
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                 <ul>
                     <li>mbbs</li>
                     <li>Nuroelogy</li>
                     <li>Phyco</li>
                 </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Why ?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
           <div class="d-flex align-items-center mt-4 mb-5">
              <input type="date" v-model="selectedDate" class="form-control  ">
              <button class="btn btn-dark mx-3" @click="checkAvailableDate">Check</button>
            </div>
            <div class="p-md-3 p-1 bg-light mb-4 my-md-0 " v-if="checkedDate">
              <h6 class=" mb-3">Optime</h6>
              <div class="d-flex flex-wrap ">
                <div v-for="(time,index) of doctorDetails.optime.time" :key="index" class="d-flex align-items-center mt-1">
                  <span class="btn-sm btn btn-outline-success">{{time.time}}</span>
                  <spn class="mx-md-2 m-1 bg-light border p-1 rounded">Available: <span class="text-success">{{time.available}}</span></spn>
                </div>
              </div>
            </div>
            <div v-else class="bg-light p-5 mt-4">
                <span>please select time</span>
            </div>
        </div>
        </div>
         
     </div>
     <div class="bg-dark py-4">
       <Heading :mainHeading="'Doctors'" class="text-white" :subHeading="'this is most readched and successfull doctors'"/>
       <Doctor />
     </div>
  </div>
</template>

<script>
import Doctor from "../components/Doctors.vue"
import Heading from "../components/Heading.vue"
export default {
    name:'Doctorview',
    components:{
      Doctor,
      Heading
    },
    data(){
        return{
            doctorDetails: {
                  id:Date.now(),
                  education:'MBBS',
                  name:'Muhseena T',
                  deparment:'Dermatology',
                  designation:'Neuro scientist',
                  image:"https://media.istockphoto.com/photos/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-picture-id1203995945?k=20&m=1203995945&s=612x612&w=0&h=g0_ioNezBqP0NXrR_36-A5NDHIR0nLabFFrAQVk4PhA=",
                  optime:{
                      date:new Date(),
                      time:[
                          {
                              time: "2:30 PM",
                              available:15
                          },
                           {
                              time: "4:00 PM",
                              available:15
                          },
                           {
                              time: "7:30 PM",
                              available:15
                          },
                           
                      ]

                  }
              },
            selectedDate:null,
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