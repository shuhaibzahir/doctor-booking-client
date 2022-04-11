<template>
  <Navbar></Navbar>
  <router-view/>
</template>
<script>
import "./style/style.scss"
import Navbar from "./components/Navbar.vue"


export default{
  name:'App',
  components:{
    Navbar,
   
  }
}
</script>

 