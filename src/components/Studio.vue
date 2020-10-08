<template>
  <div class="studio">
    <navbar :on_studio="true"></navbar>
    <div class="container w-100 ">

      <!--To Do:
      listen for key input for playing with keyboard.
      Fix CSS for black keys
      fix octave switching
      -->
      <button v-show="!onPiano" @click="onPiano=true">Synth</button>
      <button v-show="onPiano" @click="onPiano=false">Hide</button>
      <!--lower the octave -->
      <button v-show="onPiano" @click="octaveSwitch --" >-</button>
      <!-- raise the octave-->
      <button v-show="onPiano" @click="octaveSwitch ++">+</button>
      <!-- dropdown list to change wave shape (sine/triangle/saw/square) -->
      <select v-model="synthShape" v-show="onPiano" name="shape" id="shapes">
        <option @click="synthShape='sine'" value="sine">sine</option>
        <option @click="synthShape='sine2'" value="sine2">sine2</option>
        <option @click="synthShape='triangle'" value="triangle">triangle</option>
        <option @click="synthShape='sawtooth'" value="sawtooth">saw</option>
        <option @click="synthShape='square'" value="square">square</option>
      </select>
      <ul id="piano" v-show="onPiano">
        <li @click="play('C4',synthShape)" class="key">A</li>
        <li @click ="play('C#4',synthShape)" class="black-key">W</li>
        <li @click ="play('D4',synthShape)" class="key">S</li>
        <li @click ="play('D#4',synthShape)" class="black-key">E</li>
        <li @click ="play('E4',synthShape)" class="key">D</li>
        <li @click ="play('F4',synthShape)" class="key">F</li>
        <li @click ="play('F#4',synthShape)" class="black-key">T</li>
        <li @click ="play('G4',synthShape)" class="key">G</li>
        <li @click ="play('G#4',synthShape)" class="black-key">Y</li>
        <li @click ="play('A4',synthShape)" class="key">H</li>
        <li @click ="play('A#4',synthShape)" class="black-key">U</li>
        <li @click ="play('B4',synthShape)" class="key">J</li>
        <li @click ="play('C5',synthShape)" class="key">K</li>
        <li @click ="play('C#5',synthShape)" class="black-key">O</li>
        <li @click ="play('D5',synthShape)" class="key">L</li>
        <li @click ="play('D#5',synthShape)" class="black-key">P</li>
        <li @click ="play('E5',synthShape)" class="key">;</li>
        <li @click ="play('F5',synthShape)" class="key">'</li>
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

  data() {
    return {
      onPiano: false,
      synthShape: "sine",
      octaveSwitch: 0
    }
  },


  methods: {
    play: function (note,shape) {

      //let octave = note.slice(-1);
      if (this.octaveSwitch != 0) {
        let octave = parseInt(note) + this.octaveSwitch;
        note = (note.slice(0, -1)).concat(octave);
        console.log(note)
      }

      const synth = new Tone.Synth()

      const now = Tone.now();
      // Tone.Synth is a basic synthesizer with a single oscillator
      // Set the tone to sine
      synth.oscillator.type = shape;
      //synth.oscillator.type = "sine2";
      // connect it to the master output (your speakers)
      synth.toDestination()

      // trigger the attack immediately
      synth.triggerAttack(note, now)
      // wait one second before triggering the release
      synth.triggerRelease(now + 1)

      //attach a click listener to a play button
      document.querySelector('button')?.addEventListener('click', async () => {
        await Tone.start()
        console.log('audio is ready')
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

</style>