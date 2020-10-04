<template>
  <div class="aboutMe ">
    <navbar :on_aboutMe="true"></navbar>
    <div class="container w-100 ">
      <h2 class="text-center">About Me</h2>

      <p></p>

    </div>

  </div>
</template>

<script>


import Navbar from '@/components/Navbar'
export default {
name: "AboutMe",
  components: {
    Navbar
  },
}
</script>

<style scoped>

</style>