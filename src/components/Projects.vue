<template>
  <div class="projects text-center">
      <navbar :on_projects="true"></navbar>
      <div class="container w-100 ">
        <img class="profileImage" alt="Nathan & Kaiser" src="../assets/Nathan&Kaiser.jpg">
        <h2 class="text-center">Projects</h2>
        <h4> Coming soon...</h4>

        <div>
          <img class="waves" alt="waves" src="../assets/audioWaves.png">
        </div>

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

.profileImage {
  max-width: 30vw;
  min-width: 30vw;
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