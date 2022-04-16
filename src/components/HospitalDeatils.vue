<template>
  <div>
      <!-- top contnet -->
    <div class="d-md-flex justify-content-between">
      <!-- hospital images -->
      <div class="col-md-6 col-xs-12">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- hospital content -->
      <div class="col-md-6 py-md-3 px-md-5 p-2 col-xs-12">
        <div>
          <h3>Hospital Name</h3>
          <p class="text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem rem aperiam nisi minima dolorem aliquid ratione,
            odit, cumque soluta voluptas eveniet laboriosam illum quo odio quia
            consectetur! Ea, commodi veniam.
          </p>
        </div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          More Info
        </button>

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
                What ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Where ?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   <!-- end top content -->
 
   
    <!-- this is off canvas property -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Hospital Details</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body ">
          <!-- item start -->
          <div class="mt-2">
              <p class="border-bottom p-2 m-0">Genral Department </p>
              <span class="d-flex">
                  <span class="btn-sm btn btn-outline-success m-2">All Day</span>
              </span>
          </div>

           <div class="mt-2">
              <p class="border-bottom p-2 m-0">Cardiac Anesthesia</p>
              <span class="d-flex">
                  <span class="btn-sm btn btn-outline-success m-2">Monday</span>
              </span>
          </div>

           <div class="mt-2">
              <p class="border-bottom p-2 m-0">Cardiology </p>
              <span class="d-flex flex-wrap">
                  <span class="btn-sm btn btn-outline-success m-2">Sunday</span>
                  <span class="btn-sm btn btn-outline-success m-2">Tuesday</span>
                  <span class="btn-sm btn btn-outline-success m-2">Friday</span>
                  <span class="btn-sm btn btn-outline-success m-2">Saturday</span>
              </span>
          </div>
          <div class="mt-2">
              <p class="border-bottom p-2 m-0">Neurology </p>
              <span class="d-flex flex-wrap">
                  <span class="btn-sm btn btn-outline-success m-2">Sunday</span>
                  <span class="btn-sm btn btn-outline-success m-2">Thursday</span>
                  <span class="btn-sm btn btn-outline-success m-2">Saturday</span>
              </span>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>

 
export default {
  name: "SingleHospitalDetails",
 
};
</script>

<style>
</style>