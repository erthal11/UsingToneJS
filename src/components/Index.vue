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
          <img v-scrollanimation  :src="require('../assets/steviewonderGoat.jpg')" contain height="100"/><br>
          <h2 v-scrollanimation> We dedicated this project to the great Stevie Wonder who is a 25 GRAMMYs winner and one of the most influential
          musicians of all time, despite him being blind. There are people like Wonder who don't have the option to create 
          music at their disposable, and this website sets out to do that. </h2>
          </div>
          </v-row>

          <div class= "before_intro" v-container fluid>
          <v-row>
            <v-col class="intro"> 
            <div style="padding-left: 10px!important;" class="left" >
              <img v-scrollanimation  :src="require('../assets/drums.jpg')" contain height="100"/><br>
              <p v-scrollanimation >You can sythesize <br> your drum instrumentals <br> by operating your keyboard. <br> Also sports a drum machine</p>
            </div>
            </v-col>
            <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/audioWaves.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can sythesize <br> with octave levels. <br> yayadyddydydyd</p>
            </div>
            </v-col>
            <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/octave.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can sythesize <br> with the Piano <br> by operating only <br> with your keyboard</p>
            </div>
            </v-col>
             <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/beat.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can sythesize <br> with the Piano <br> by operating only <br> with your keyboard</p>
            </div>
            </v-col>
             <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/blind.png')" contain height="80"/><br>
              <p style="font-color:black;" v-scrollanimation >You can sythesize <br> with the Piano <br> by operating only <br> with your keyboard</p>
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
  color: black;

}

</style>
