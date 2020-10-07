<template>
  <div class="studio">
    <navbar :on_studio="true"></navbar>
    <div class="container w-100 ">


      <ul id="piano">
        <li data-note="C4" class="key">
          <div data-note="C#4" class="black-key">R</div>
          D
        </li>
        <li data-note="D4" class="key">
          <div data-note="D#4" class="black-key">T</div>
          F
        </li>
        <li data-note="E4" class="key">
          G
        </li>
        <li data-note="F4" class="key">
          <div data-note="F#4" class="black-key">U</div>
          H
        </li>
        <li data-note="G4" class="key">
          <div data-note="G#4" class="black-key">I</div>
          J
        </li>
        <li data-note="A4" class="key">
          <div data-note="A#4" class="black-key">O</div>
          K
        </li>
        <li data-note="B4" class="key">
          L
        </li>
      </ul>


    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import * as Tone from 'tone'

export default {
name: "Studio",
  components: {
    Navbar
  },
}


// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth();
// Set the tone to sine
synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
synth.toDestination();


</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
ul {
  list-style: none;
  display: flex;
}
ul .key {
  position: relative;
  width: 60px;
  height: 180px;
  border: 1px solid black;
  border-right: none;
  background: #fffff0;
  border-radius: 5px;
  box-shadow: 0px 3px 5px #666;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
}
ul .key:last-child {
  border-right: 1px solid black;
}
ul .black-key {
  position: absolute;
  top: -1px;
  left: 37.5px;
  width: 45px;
  height: 120px;
  background: black;
  border-radius: 5px;
  box-shadow: 0px 3px 5px #666;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  color: white;
}

</style>