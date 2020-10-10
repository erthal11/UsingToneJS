<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 ">
          <h1>Wonder Beats</h1>
          <h4>Your online Studio</h4>
          <h4>Specially crafted for the visually impaired.</h4>

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

}


</script>

<style scoped>


</style>
