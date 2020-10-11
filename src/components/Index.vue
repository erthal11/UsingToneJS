<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 , changing-color ">
          <h1>Wonder Beats</h1>
          <h5>Your online Studio</h5>
          <h6 style="padding-bottom: 150px;">Specially crafted for the visually impaired!</h6>
          <!--any better name ideas?-->

          <div class= "before_intro" v-container fluid>
          <v-row>
            <v-col class="intro"> 
            <div class="left" >
              <img v-scrollanimation  :src="require('../assets/drums.jpg')" contain height="100"/><br>
              <p v-scrollanimation >You can sythesize <br> your drum instrumentals <br> by operating your keyboard</p>
            </div>
            </v-col>
            <v-col>
               <div class="left" >
              <img v-scrollanimation  :src="require('../assets/audioWaves.png')" contain height="100"/><br>
              <p style="font-color:black;" v-scrollanimation >You can sythesize <br> with they Piano <br> by operating your keyboard</p>
            </div>
            </v-col>
            <v-col>
              <a> Hello </a>
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

</style>
