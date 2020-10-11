<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 , changing-color ">
          <h1>Wonder Beats</h1>
          <h4>Your online Studio</h4>
          <h4>Specially crafted for the visually impaired.</h4>

          <div class= "before_intro" v-container fluid>
          <v-row>
            <v-col class="intro"> 
            <div class="left" v-scrollanimation >
              <img :src="require('../assets/drums.jpg')" contain height="100"/><br>
              <p v-scrollanimation >You can sythesize <br> your drum instrumentals <br> by operating your keyboard</p>
            </div>
            </v-col>
            <v-col>
              <a> Hello </a>
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
