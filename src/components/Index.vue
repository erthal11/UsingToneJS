<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
      <div class="">
        <div>
          <h1>Nathan Erthal</h1>
          <!--<img alt="title" src="../assets/"> -->
          <!--<img class="circular--landscape" alt="Nathan Erthal" src="../assets/Nathan&Kaiser.jpg">-->
          <div>
            <img class="profileImage" alt="Nathan Erthal" src="../assets/Nathan_Profile.jpg">
          </div>

          <div>
            <h2> Software Engineer/ Audio Engineer</h2>
          </div>
          <div>
            <img class="waves" alt="waves" src="../assets/audioWaves.png">
          </div>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

          <!-- Add font awesome icons -->
          <div>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <!-- <a href="#" class="fa fa-youtube"></a> -->
            <a href="#" class="fa fa-github"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
          <div>
            <h3>...</h3>
          </div>

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
  color: #e14594
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
  border: 5px solid black;
  border-radius: 8%;
}
</style>
