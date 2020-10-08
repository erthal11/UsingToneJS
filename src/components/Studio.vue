<template>
  <div class="studio">
    <navbar :on_studio="true"></navbar>
    <div class="container w-100 ">

      <!--To Do:
      listen for key input for playing with keyboard.
      Fix CSS for black keys
      -->
      <button v-show="!onPiano" @click="onPiano=true">Synth</button>
      <button v-show="onPiano" @click="onPiano=false">Hide</button>
      <div v-show="onPiano">
      <!--lower the octave -->
      <button @click="octaveSwitch --" >-</button>
      <!-- raise the octave-->
      <button @click="octaveSwitch ++">+</button>
      <!-- dropdown list to change wave shape (sine/triangle/saw/square) -->
      <select v-model="synthShape" v-show="onPiano" name="shape" id="shapes">
        <option @click="synthShape='sine'" value="sine">sine</option>
        <option @click="synthShape='sine2'" value="sine2">sine2</option>
        <option @click="synthShape='triangle'" value="triangle">triangle</option>
        <option @click="synthShape='sawtooth'" value="sawtooth">saw</option>
        <option @click="synthShape='square'" value="square">square</option>
      </select>

      <ul id="piano" v-show="onPiano" @mousedown="clickDown=true" @mouseup="clickDown=false">

        <li v-if="clickDown=true" @mouseover="play('C4',synthShape,0)" @mouseleave="play('C4',synthShape,1)" class="key">A</li>
        <li @mouseover="play('C#4',synthShape,0)" @mouseleave="play('C#4',synthShape,1)" class="black-key">W</li>



        <li @mousedown="play('D4',synthShape,0)" @mouseup="play('D4',synthShape,1)" class="key">S</li>
        <li @mousedown="play('D#4',synthShape,0)" @mouseup="play('D#4',synthShape,1)" class="black-key">E</li>
        <li @mousedown="play('E4',synthShape,0)" @mouseup="play('E4',synthShape,1)" class="key">D</li>
        <li @mousedown="play('F4',synthShape,0)" @mouseup="play('F4',synthShape,1)" class="key">F</li>
        <li @mousedown="play('F#4',synthShape,0)" @mouseup="play('F#4',synthShape,1)" class="black-key">T</li>
        <li @mousedown="play('G4',synthShape,0)" @mouseup="play('G4',synthShape,1)" class="key">G</li>
        <li @mousedown="play('G#4',synthShape,0)" @mouseup="play('G#4',synthShape,1)" class="black-key">Y</li>
        <li @mousedown="play('A4',synthShape,0)" @mouseup="play('A4',synthShape,1)" class="key">H</li>
        <li @mousedown="play('A#4',synthShape,0)" @mouseup="play('A#4',synthShape,1)" class="black-key">U</li>
        <li @mousedown="play('B4',synthShape,0)" @mouseup="play('B4',synthShape,1)" class="key">J</li>
        <li @mousedown="play('C5',synthShape,0)" @mouseup="play('C5',synthShape,1)" class="key">K</li>
        <li @mousedown="play('C#5',synthShape,0)" @mouseup="play('C#5',synthShape,1)" class="black-key">O</li>
        <li @mousedown="play('D5',synthShape,0)" @mouseup="play('D5',synthShape,1)" class="key">L</li>
        <li @mousedown="play('D#5',synthShape,0)" @mouseup="play('D#5',synthShape,1)" class="black-key">P</li>
        <li @mousedown="play('E5',synthShape,0)" @mouseup="play('E5',synthShape,1)" class="key">;</li>
        <li @mousedown="play('F5',synthShape,0)" @mouseup="play('F5',synthShape,1)" class="key">'</li>
      </ul>
      </div>


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

  data() {
    return {
      onPiano: false,
      synthShape: "sine",
      octaveSwitch: 0,
      synth: new Tone.Synth(),
      clickDown: false
    }
  },



  methods: {
    play: function (note,shape,time) {


      if (this.octaveSwitch != 0) {
        let octaveOG = note.slice(-1);
        let newOctave = parseInt(octaveOG) + this.octaveSwitch;
        note = (note.slice(0, -1)).concat(newOctave);

      }

      const now = Tone.now();
      // Tone.Synth is a basic synthesizer with a single oscillator
      // Set the tone to sine
      this.synth.oscillator.type = shape;
      //synth.oscillator.type = "sine2";
      // connect it to the master output (your speakers)
      this.synth.toDestination()

      // trigger the attack immediately
      if (time===0) {
        this.synth.triggerAttack(note, now)
        console.log(note)
      }

      if (time===1) {
        this.synth.triggerRelease(now)
      }

      //attach a click listener to a play button
      document.querySelector('button')?.addEventListener('click', async () => {
        await Tone.start()
      });

    },

  }

}



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
  position: relative;
  width: 60px;
  height: 115px;
  border: 1px solid black;
  border-right: none;
  background: #202020;
  border-radius: 5px;
  box-shadow: 0px 3px 5px #666;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
  color: ivory;
}


</style>