<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 ">
          <h1>Pro Loops</h1>
          <h5>Your online Studio</h5>
          <!--any better name ideas?-->

          <div>
            <a></a>
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

  data() {

  },

  methods: {

    }

}


</script>

<style scoped>


</style>
