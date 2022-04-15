<template>
  <div class="main-section pt-5">
    <Heading
      :mainHeading="'TOP Hospitals'"
      :subHeading="'No.1 hospitals in the world'"
    /> 
      <!-- item start -->
      <div class="row p-5 d-flex justify-content-center">
        <div class="cards">
          <section v-for="(item,index) of hospitals" :key="index" class="card">
            <figure>
              <div class="img-overlay hot-home">
                <img
                    :src="item.image"
                  :alt="item.name"
                />
                <div class="overlay"><a href="#">view Hospital</a></div>
                <div class="cont">
                  <div class="icons-img">
                    <button><i class="fas fa-heart"></i></button>
                    <button><i class="fas fa-share"></i></button>
                  </div>
                </div>
              </div>
              <h3 class="title p-3">{{item.name}}</h3>
              <hr>
            </figure>
            <div class="card-content overflow-hidden  p-3 " >
            <p  class=" ">Lorem ipsum dolor sit, amet consectetur adipisic fuga repudiandae ipsam iure error magni? Culpa </p>
            <p class="text-success"> {{item.decription}} </p>

            </div>
           <div class="text-end">
                <button class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
           </div>
          </section>
        </div>
      </div>
    </div>
   
</template>

<script>
import Heading from "@/components/Heading.vue";
export default {
  name: "Hostpitals",
  components: {
    Heading,
  },
  data() {
    return {
      hospitals: [
        {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "ABC multi speciality hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital sas asasas ",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },  {
          id: 1,
          name: "Starcare Hospital",
          decription: "N H Bypass Junction, near Thondayad, Kozhikode, Kerala 673017",
          image: "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
 

* {
  box-sizing: border-box;
  margin: 0;
}

 

.overlay,
.img-overlay img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: white;
}

/* body style */

/* cards style */
 
 
.cards {
  grid-column: 2 / span 16;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(16, minmax(auto, 60px));
  grid-gap: 40px;
  position: relative;
}

/* card style */

.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  box-shadow: 0px 0px 7px 3px #dfdfdf;
}

.card:hover {
  transform: translateY(-7px);
}

/* img-overlya style */

.img-overlay {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
}

 

.img-overlay img {
  width: 100%;
  z-index: 1;
}

.img-overlay img:hover + div {
  width: 100%;
}

.title {
  padding: 4px 10px;
   text-align: start;
  text-transform: capitalize;
  color: #023679;
  font-size: 1.2rem;
}

.overlay {
  width: 0;
  height: 100%;
  display: grid;
  place-content: center;
  background-color: #36acc6;
  opacity: 0.8;
  z-index: 2;
  transition: all 0.5s ease 0.1s;
}

.overlay:hover {
  width: 100%;
}

.overlay:hover > a {
  display: block;
  text-align: center;
  border-color: #fff;
}

.overlay a {
  display: none;
  width: 140px;
  padding: 15px 0;
  text-transform: capitalize;
  border: 2px solid transparent;
  transition: border 10s ease;
}

/* icons-img style */

.cont {
  position: absolute;
  z-index: 6;
  width: 100%;
  height: 100%;
}

.icons-img {
  position: relative;
  width: 100%;
  height: 100%;
}

.icons-img button {
  position: absolute;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  top: -40px;
  z-index: 10;
}

.icons-img button:first-of-type {
  right: 55px;
}

.icons-img button:last-of-type {
  right: 20px;
}

.icons-img button:first-of-type:hover {
  right: 55px;
  color: #ff3232;
}

.icons-img i {
  font-size: 25px;
}

/* card-content styles */

.card-content {
  padding: 10px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
    color: #696969;
  height: 150px;
  font-size: 14px;
}

 .card-content p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
}

/* icons-home style */
 

 

/* icon styles */
 
 
/* price style */

 

/* media screen style */

@media screen and (max-width: 1000px) {
  .card {
    grid-column-end: span 6;
  }
  /* card-content style */
}

@media screen and (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(12, minmax(auto, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
  .card {
    grid-column-end: span 12;
  }
  /* icons-home style */
  
  /* price style */
 
}
</style>
