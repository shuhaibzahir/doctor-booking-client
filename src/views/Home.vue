<template>
<div class="home">
    <!-- this is for carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/image/1.jpg" class="d-block w-100 " alt="...">
       <div class="carousel-caption d-none d-md-block">
      <h5>Explore the world </h5>
      <p>Dummy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repellendus in nobis! Nulla dolore rem architecto, recusandae at facere nihil esse id nemo aliquam quos minus necessitatibus unde quam culpa.</p>
  </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/image/2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
      <h5>Explore the world 2 </h5>
      <p>Dummy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repellendus in nobis! Nulla dolore rem architecto, recusandae at facere nihil esse id nemo aliquam quos minus necessitatibus unde quam culpa.</p>
  </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/image/3.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
      <h5>Explore the world  3</h5>
      <p>Dummy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repellendus in nobis! Nulla dolore rem architecto, recusandae at facere nihil esse id nemo aliquam quos minus necessitatibus unde quam culpa.</p>
  </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="main-section">
  <Heading :mainHeading="'Doctors'" :subHeading="'this is most readched and successfull doctors'"/>
  <doctors/>
  </div>
   <div class="main-section">
  <Heading :mainHeading="'Hospital'" :subHeading="'this is most readched and successfull doctors'"/>
  <Hospitals/>
  </div>
   <div class="main-section">
     <AboutSection/>
   </div>

</div>
</template>

<script>
import Doctors from '@/components/Doctors.vue'
import Hospitals from '@/components/Hospitals.vue'
import AboutSection from "@/components/About.vue"
import Heading from "@/components/Heading.vue"
 export default {
   name:'Home',
   components:{
      Doctors,
      Hospitals,
      AboutSection,
      Heading
   }
 
 }
</script>
