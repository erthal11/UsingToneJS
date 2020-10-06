<template>
  <div class="aboutMe text-center">
    <navbar :on_aboutMe="true"></navbar>
    <div class="container w-100 ">
      <img class="profileImage" alt="Nathan & Kaiser" src="../assets/Nathan&Kaiser.jpg">
      <h2 class="text-center">About Me</h2>

      <ul>
        <h4><span class="coolStuff">Work:</span> FIU CS Student / Audio Engineer at Nate08 Records</h4>
        <h4><span class="coolStuff">Skills:</span> Java, Javascript, C, C++, Python, HTML, CSS, Vue, SQL, Prolog, F#, Microsoft Office, Logic Pro</h4>
        <h4><span class="coolStuff">Languages:</span> English, Portuguese, Spanish</h4>
        <h4><span class="coolStuff">Extracurricular:</span> Audio/Video Technician at Our Lady of Guadalupe Church, Drumset Teacher</h4>
        <h4><span class="coolStuff">Nationality:</span> Brazil</h4>
      </ul>

      <div class="quoteBox">
        <h3 class="font-italic">“You Don’t Have To Be Great To Start, But You Have To Start To Be Great.”</h3>
        <h3 class="float-right">– Zig Ziglar</h3>
      </div>

      <div>
        <img class="waves" alt="waves" src="../assets/audioWaves.png">
      </div>

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

.coolStuff{
  color: #D4AF37;
}

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

ul {
  text-align: left;
}

h4 {
  margin-bottom: 40px;
}

h3{
  //color: #D4AF37;
}

</style>