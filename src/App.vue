<template>
<div>
    <Navbar></Navbar>
  <router-view/>
  <div class="bg-light">
    <Footer/>
 </div>
</div>
</template>
<script>
import "./style/style.scss"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"


export default{
  name:'App',
  components:{
    Navbar,
    Footer
   
  }
}
</script>

 