<template>
  <div class="projects text-center">
      <navbar :on_projects="true"></navbar>
      <div class="container w-100 ">
        <img class="profileImage" alt="Nathan & Kaiser" src="../assets/Nathan&Kaiser.jpg">
        <h2 class="text-center">Projects</h2>

        <h3 class="font-italic">“Success is the sum of small efforts repeated day in and day out.”</h3>
        <h3 class="float-right">- Robert Collier</h3>

        <div>
          <img class="waves" alt="waves" src="../assets/audioWaves.png">
        </div>

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

.profileImage {
  max-width: 25vw;
  min-width: 25vw;
  height: auto;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
  border-radius: 6%;
}

@media screen and (max-width: 600px) {
  .profileImage {
    min-width: 50vw;
    height: auto;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
    border-radius: 6%;
  }
}

</style>