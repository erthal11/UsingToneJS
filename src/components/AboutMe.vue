<template>
  <div class="aboutMe">
    <navbar :on_aboutMe="true"></navbar>
    <div class="container w-100 ">
      <h1 class="text-center text-lg-left">About Me</h1>
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