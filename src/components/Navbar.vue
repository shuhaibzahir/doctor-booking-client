<template>
<nav class="navbar navbar-expand-lg py-3 navbar-light bg-light">
  <div class="container-fluid px-md-4" >
    <div class="d-flex flex-nowrap justify-content-between nav-logo-icon">
       <router-link to="/" style="text-decoration:none"  >
        <img class="logo" src="../assets/image/logo.png"  alt="">
     </router-link>
    <span class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i class="fa-solid fa-angles-down"></i>
    </span>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" >
          <router-link to="/" style="text-decoration:none"><span class="nav-link active" aria-current="page" >Home</span></router-link>
        </li>
     
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctors
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="item of doctorCategory" :key="item.id"><a class="dropdown-item" href="#">{{item.name}}</a></li>
          </ul>
        </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hospitals
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="item of hospitalCategory" :key="item.id"><a class="dropdown-item" href="#">{{item.name}}</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex">
        <input class="form-control rounded-0" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-secondary rounded-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
       <div class="d-flex  mx-md-2 p-3 p-md-0 justify-content-around">
        <router-link to="/login"><button class="btn btn-outline-dark btn-sm rounded-0" type="submit"><i class="fa-solid fa-user-plus"></i> Login</button></router-link>
        <router-link to="/hospital/login"><button class="btn btn-dark  btn-sm  rounded-0" type="submit"><i class="fa-solid fa-house-medical-flag"></i> Login</button></router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:'navbar',
  data(){
    return {
      doctorCategory:[
        {id:1, name:'Cardiologists'},
        {id:2, name:'Anesthesiologists'},
        {id:3, name:'Urologists'},
        {id:4, name:'Gastroenterologists'},
        {id:5, name:'Oncologists'},
      ],
      hospitalCategory:[
        {id:1, name:'Specialty Hospitals'},
        {id:2, name:'General Medical & Surgical Hospitals'},
        {id:3, name:'Clinics.'},
        {id:4, name:'Psychiatric Hospitals.'},
        {id:5, name:'Clinics for Family Planning and Abortion.'},
      ],
    }
  }
}
</script>

<style>

</style>