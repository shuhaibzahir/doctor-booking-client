<template>
 <div class="main-section">
   <Heading :mainHeading="'Doctors'" :subHeading="'this is most readched and successfull doctors'"/>
    <div class=" container  doctor-container">
  <div v-for="(item,ind) in doctors"  :key="ind" class="card" style="width: 18rem;">
  <img :src="item.image" class="card-img-top doctor-image" alt="">
  <div class="card-body">
    <h6 class="card-title">{{item.name}}</h6>
    <p class="doctor-text">{{item.education}}</p>
    <div class="d-flex justify-content-between">
      <a href="#"  class=" btn-doctor btn btn-success">Book</a>
    <a href="#"  class="btn btn-doctor btn-outline-dark">View Profile</a>
    </div>
  </div>
 </div>
 
</div>
</div>
</template>

<script>
import Heading from './Heading.vue'
export default {
  name:'Doctors',
  components:{
    Heading
  },
  data(){
    return {
      doctors:[
        {
          id:1,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        },
            {
          id:2,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        }
        ,
            {
          id:3,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        },
            {
          id:4,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        },
            {
          id:5,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        },    {
          id:6,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        },
            {
          id:7,
          name:'shuhaib',
          education:'MBBS MD PHD',
          specialisation:'gfhgh hhgf ghfghfh hgfhfd hgfhfh fghfghdf hfghdfhg hghdgh fghgfhfg hghgfh dhdhggf dghdfh dfggggggggggg',
          image:'https://avatars.githubusercontent.com/u/65658231?v=4'

        }
      ]
    }
  }
}
</script>

<style>

</style>