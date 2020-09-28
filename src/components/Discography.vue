<template>
  <div class="discography text-center">
    <navbar :on_discography="true"></navbar>
    <div class="container w-100 ">

      <img class="NathanDrums" alt= "Drums" src="../assets/NathanDrums.jpg">

      <h2>Singles</h2>

      <div class="">
        <img class= "coverArt" alt="Cover Art" src="../assets/JustAlright.jpeg">
        <a href="https://songwhip.com/carolena/invitation" target="_blank">Conscious & Carolena - "Just Alright"</a>
        <h4>Credits: Production, Recording Engineering, Mix Engineering </h4>
      </div>

      <div class="">
        <img class= "coverArt" alt="Cover Art" src="../assets/WhereTo.jpg">
        <a href="https://songwhip.com/carolena/invitation" target="_blank">Nate08 - "Where To?"</a>
        <h4>Credits: Production, Recording Engineering, Mix Engineering </h4>
      </div>

      <div class="">
        <img class= "coverArt" alt="Cover Art" src="../assets/SaveMe.jpg">
        <a href="https://songwhip.com/carolena/invitation" target="_blank">Conscious & Ricky Gonz - "Invitation"</a>
        <h4>Credits: Production, Recording Engineering </h4>
      </div>

      <div class="">
        <img class= "coverArt" alt="Cover Art" src="../assets/Invitation.jpeg">
        <a href="https://songwhip.com/carolena/invitation" target="_blank">Carolena & Conscious - "Invitation"</a>
        <h4>Credits: Production, Recording Engineering </h4>
      </div>

      <div class="">
        <img class= "coverArt" alt="Cover Art" src="../assets/DTM.jpeg">
        <a href="https://songwhip.com/carolena/invitation" target="_blank">Conscious & Carolena - "Dame Tu Mano"</a>
        <h4>Credits: Production, Recording Engineering, Mix Engineering </h4>
      </div>

    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
name: "Discography",
  components: {
    Navbar
  },
}
</script>

<style scoped>

  .coverArt {
    width: 23%;
    height: auto;
  }

  .NathanDrums {
    width: 100%;
    height: auto;
    border: 5px solid black;
    border-radius: 1%;
  }

</style>