<template>
  <div class="projects text-center">
      <navbar :on_projects="true"></navbar>
      <div class="container w-100 ">
        <img alt="Nathan & Kaiser" src="../assets/Nathan&Kaiser.jpg">
        <h2 class="text-center">Projects</h2>
        <h5> Coming soon...</h5>
      </div>

    <div>

    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
name: "Projects",
  components: {
  Navbar
  },
}
</script>

<style scoped>

  img{
    max-width:30%;
    height:auto;
    border: 5px solid black;
    border-radius: 6%;
  }

</style>