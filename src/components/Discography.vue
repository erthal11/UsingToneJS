<template>
  <div class="discography text-center">
    <navbar :on_discography="true"></navbar>
    <div class="container w-100 ">

      <img class="NathanDrums" alt= "Drums" src="../assets/NathanDrums.jpg">

      <h2>Singles</h2>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/JustAlright.jpeg">
        <a href="" target="_blank">Conscious & Carolena - "Just Alright"</a>
        <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/WhereTo.jpg">
        <a href="https://songwhip.com/nate08/where-to" target="_blank">Nate08 - "Where To?"</a>
        <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/SaveMe.jpg">
        <a href="https://songwhip.com/conscious3/save-me" target="_blank">Conscious & Ricky Gonz - "Save Me"</a>
        <h5>Credits: Production, Recording Engineering </h5>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/Invitation.jpeg">
        <a href="https://songwhip.com/carolena/invitation" target="_blank">Carolena & Conscious - "Invitation"</a>
        <h5>Credits: Production, Recording Engineering </h5>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/DTM.jpeg">
        <a href="https://songwhip.com/carolena/dame-tu-mano" target="_blank">Conscious & Carolena - "Dame Tu Mano"</a>
        <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
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
    width: 40%;
    height: auto;
    float: left;
    padding: 10px 10px 10px 10px;
  }

  .NathanDrums {
    width: 100%;
    height: auto;
    border: 5px solid black;
    border-radius: 1%;
  }

  .box {
    width: 500px;
    height: 200px;
    //background-color: #7D88B5;
    margin: 20px auto;
    display: inline-block;
    padding: 5px 5px 5px 5px;
  }

  @media screen and (max-width: 800px) {
    .box {
      width: auto;
      height: 300px;
      //background-color: #7D88B5;
      margin: 20px auto;
      padding: 5px 5px 5px 5px;
    }
  }

    h4{

    }

    a{
      margin-top: 50px;
    }

</style>