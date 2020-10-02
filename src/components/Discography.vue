<template>
  <div class="discography text-center">
    <navbar :on_discography="true"></navbar>
    <div class="w-100">

      <img class="NathanDrums" alt= "Drums" src="../assets/NathanDrums.jpg">

      <h2>Discography</h2>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/JustAlright.jpeg">
        <div class ="align-self-center">
          <a href="" target="_blank">Conscious & Carolena - "Just Alright"</a>
          <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
        </div>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/WhereTo.jpg">
        <div class ="align-self-center">
          <a href="https://songwhip.com/nate08/where-to" target="_blank">Nate08 - "Where To?"</a>
          <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
        </div>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/SaveMe.jpg">
        <div class ="align-self-center">
          <a href="https://songwhip.com/conscious3/save-me" target="_blank">Conscious & Ricky Gonz - "Save Me"</a>
          <h5>Credits: Production, Recording Engineering </h5>
        </div>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/Invitation.jpeg">
        <div class ="align-self-center ">
          <a href="https://songwhip.com/carolena/invitation" target="_blank">Carolena & Conscious - "Invitation"</a>
          <h5>Credits: Production, Recording Engineering </h5>
        </div>
      </div>

      <div class="box">
        <img class= "coverArt" alt="Cover Art" src="../assets/DTM.jpeg">
        <div class ="align-self-center">
          <a href="https://songwhip.com/carolena/dame-tu-mano" target="_blank">Conscious & Carolena - "Dame Tu Mano"</a>
          <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
        </div>
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
    height:auto;
    max-height: 30vh;
    max-width: 30vw;
    //float: left;
    align-self: center;
  }

  @media screen and (max-width: 600px) {
    .coverArt {
      min-width: 30vw;
      //min-height: 30vh;
      //max-width: 30vw;
      //max-height: 30vh;
      height:auto;
      //float: top;
    }
  }

  .NathanDrums {
    width: 100%;
    max-width: 600px;
    height: auto;
    //border: 5px solid black;
    border-radius: 1%;
  }

  .box {
    width: 500px;
    height: 200px;
    //background-color: #7D88B5;
    margin: 20px auto;
    padding-bottom: 50px;
    //padding-top: 50px;
    //background-color: #7D88B5;
    display: flex;
  }

  @media screen and (max-width: 600px) {
    .box {
      width: auto;
      height: 300px;
      //background-color: #7D88B5;
      margin: 20px auto;
      padding: 10px 10px 10px 10px;
      display: block;
    }
  }

    a{
      letter-spacing: .004em;
      font-weight: 400;
      color: antiquewhite;
      font-size: 20px;
      text-shadow: 2px 2px black;

    }

  a:hover {
    color: #D4AF37;
  }

  img {
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  }

</style>