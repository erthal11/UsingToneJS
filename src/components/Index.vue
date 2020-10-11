<template>
  <div id="index" class="text-center">
    <navbar :on_index="true"></navbar>
    <div class="container w-100 , changing-color ">
      <h1>Wonder Beats</h1>
      <h5>Your online Studio</h5>
      <h5 style="padding-bottom: 100px;">Specially crafted for the visually impaired!</h5>
      <!--any better name ideas?-->
      <v-row>
        <div class="lbg">
          <h2>We dedicated this project to the great Stevie Wonder, the 25 time GRAMMY awards winner and one of the most influential
            artists of all time, despite his disability. This website sets out to aid in creating music for people with the same disability. </h2>
        </div>
      </v-row>

      <div class= "before_intro" v-container fluid>
        <v-row>
          <v-col class="intro">
            <div style="padding-left: 10px!important;" class="left" >
              <img v-scrollanimation  :src="require('../assets/drums.jpg')" contain height="100"/><br>
              <p v-scrollanimation >You can play <br> drum instrumentals <br> by operating your keyboard.</p>
            </div>
          </v-col>
          <v-col>
            <div class="left" >
              <img v-scrollanimation  :src="require('../assets/audioWaves.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can synthesize <br> with a wide variety of octave levels.</p>
            </div>
          </v-col>
          <v-col>
            <div class="left" >
              <img v-scrollanimation  :src="require('../assets/octave.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can synthesize <br> by operating only <br> with your keyboard</p>
            </div>
          </v-col>
          <v-col>
            <div class="left" >
              <img v-scrollanimation  :src="require('../assets/beat.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can create drum loops <br> with the drum machine <br> by using the sequencer</p>
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

h5 {
  font-size: xx-large;
}

</style>
