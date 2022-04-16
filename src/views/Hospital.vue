<template>
  <div class="pt-md-5 pt-2">
      <!-- hospital details -->
      <div class="container">
          <hospital-details/>
      </div>
        <!-- options start -->
       <div class="container">
            <div class="mt-5">
            <div class=" deparment-option overflow-auto bg-success w-100  rounded d-flex align-item-center ">
                <ul class="d-flex  department  justify-contnet-start align-items-center pr-0 pt-3 "  >
                    <li  class="btn rounded btn-outline-light mx-2 " :class="{active:departmentSelected=='All'}" @click="selectDepartment('All')" >All</li>
                    <li v-for="(option,index) of departmentOption " :key="index" class="btn rounded btn-outline-light mx-2" :class="{active:departmentSelected==option}"  @click="selectDepartment(option)" >{{option}}</li>
                 
                </ul>
            </div>
        </div>
           <!-- doctors sections -->
     <div class="d-flex border mb-5 flex-wrap  justify-content-start  rounded ">
       <!-- card item -->
            
           <DoctorBooking v-for=" (item,index) of filterdDetails" :key="index" :details="item" />
          

        
        
     </div>
   <!-- doctors end -->
        
       </div>
   <!-- options end -->


  </div>

</template>

<script>
import DoctorBooking from '@/components/DoctorBooking.vue';
import HospitalDetails from "@/components/HospitalDeatils.vue"
export default {
    name:'HospitalPage',
    components:{
        HospitalDetails,
        DoctorBooking
    },
    
  data(){
      return {
          departmentOption:['Neurology','Dermatology','Pulmonology'],
          departmentSelected:'All',
          doctorsDetails:[
               
                {
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
                 {
                  id:Date.now(),
                  education:'MBBS',
                  name:'shuhaib s',
                  deparment:'Neurology',
                  designation:'Neuro scientist',
                  image:"https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg",
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
                 {
                  id:Date.now(),
                  education:'MBBS',
                  name:'Zara Zahir',
                  deparment:'Dermatology',
                  designation:'Neuro scientist',
                  image:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
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
                 {
                  id:Date.now(),
                  education:'MBBS',
                  name:'Zain',
                  deparment:'Pulmonology',
                  designation:'Neuro scientist',
                  image:'https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0=',
                  optime:{
                      date:new Date(),
                      time:[
                          
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
                 {
                  id:Date.now(),
                  education:'MBBS',
                  name:'Fathima',
                  designation:'Neuro scientist',
                  image:"https://static.scientificamerican.com/sciam/cache/file/F6FF3DF2-A99D-4BE0-99595C9E4717FEF4_source.jpg",
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
                           
                           
                      ]

                  }
              },
                
          ],
          filterdDetails:[]
      }
  },
  methods:{
      selectDepartment(name){
          this.departmentSelected= name
         if(name=='All'){
             this.filterdDetails= this.doctorsDetails
         }else{
              this.filterdDetails = this.doctorsDetails.filter(i=>i.deparment==name)

         }
          
      }
  },
    mounted(){
        console.log(this.$route.params.id) 
        this.filterdDetails= this.doctorsDetails    
    }
}
</script>

<style>

</style>