<template>
  <div class="main-heading ">
   <div>
    <h1>{{mainHeading}}</h1>
    <p style="font-style: italic" class="text-muted">{{subHeading}}</p>
   </div>
  <div class="d-flex align-items-center justify-content-between">
  <span class="hr-line"></span>
  <button class="btn btn-outline-success"><span class="d-flex justify-content-between align-items-center"><span>view all</span><i class="fa-solid fa-arrow-right"></i></span></button>
  </div>
  </div>
</template>

<script>
 
export default {
    name:'Heading',
    props:['mainHeading','subHeading'],
  
}
</script>

<style>

</style>