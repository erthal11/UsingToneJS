<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 , changing-color ">
          <h1>Wonder Beats</h1>
          <h5>Your online Studio</h5>
          <h6 style="padding-bottom: 100px;">Specially crafted for the visually impaired!</h6>
          <!--any better name ideas?-->
          <v-row>
          <div class="lbg">
          <img v-scrollanimation  :src="require('../assets/steviewonderGoat.jpg')" contain height="400"/><br>
          <h2 img v-scrollanimation>We dedicated this project to the great Stevie Wonder, the 25 time GRAMMY awards winner and one of the most influential
          artists of all time, despite his disability. This website sets out to aid in creating music for people with the same disability. </h2>
          </div>
          </v-row>

          <div class= "before_intro" v-container fluid>
          <v-row>
            <v-col class="intro"> 
            <div style="padding-left: 10px!important;" class="left" >
              <img v-scrollanimation  :src="require('../assets/drums.jpg')" contain height="100"/><br>
              <p v-scrollanimation >Create beats with <br> drum instrumentals <br> by operating your keyboard. <br> Also sports a drum machine</p>
            </div>
            </v-col>
            <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/audioWaves.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >Synthesize <br> with octave levels <br> sin, sin2, traingle, etc.</p>
            </div>
            </v-col>
            <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/octave.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >Play with the <br>  musical intrument  keyboard <br> by operating only <br> with the first and <br> second row of your keyboard! </p>
            </div>
            </v-col>
             <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/blind.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation > Easy for visual impaired <br> individuals that <br> are passionate about music </p>
            </div>
            </v-col>
           </v-row>
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
  // name: "ScrollAnimation",
  // components:
  //   {
  //     ScrollAnimation
  //   }

}


</script>

<style scoped>
h2 {
  font-size: 30px;
  color: white;

}

</style>
