<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 ">
          <h1>Nathan Erthal</h1>
          <!--<img alt="title" src="../assets/"> -->
          <!--<img class="circular--landscape" alt="Nathan Erthal" src="../assets/Nathan&Kaiser.jpg">-->
          <div>
            <img class="profileImage" alt="Profile Image" src="../assets/Nathan_Profile.jpg">
          </div>

          <div>
            <h3> Software Engineer/ Audio Engineer</h3>
          </div>
          <div>
            <img class="waves" alt="waves" src="../assets/audioWaves.png">
          </div>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

          <!-- Add font awesome icons -->
          <div class="socialMedia">
            <a href="https://www.facebook.com/Erthal11/" target="_blank" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/nate.o.eight/?hl=en" target="_blank" class="fa fa-instagram"></a>
            <!-- <a href="#" class="fa fa-youtube"></a> -->
            <a href="https://github.com/erthal11" target="_blank" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/nathan-erthal-a62bb419a/" target="_blank" class="fa fa-linkedin"></a>
          </div>
          <div>
            <h3>...</h3>
          </div>

        </div>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar'

export default {
name: "Index",
  components:
      {
        Navbar
      },
}
</script>

<style scoped>

.circular--landscape {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
  margin-left: -50px;
}

.waves {
  width: 900px;
  height: 250px;
  object-fit: none;
    max-width: 100%;
  filter: brightness(50%);
}

/* Style all font awesome icons */
.fa {
  padding: 20px;
  font-size: 30px;
  width: 70px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);


}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;
}


.fa-youtube {
  background: #DC4539;
  color: white;
}

.fa-instagram {
  display: inline-block;
  text-align: center;
  color: #fff;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
}

.fa-github{
  background: black;
  color: white;
}

.fa-linkedin{
  background: #0e76a8;
  color: white;
}

.profileImage{
  max-width:30%;
  height:auto;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  border-radius: 6%;
}

.socialMedia{

}
</style>
