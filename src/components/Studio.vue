<template>
  <div class="studio">
    <navbar :on_studio="true"></navbar>
    <div class="container w-100 ">

      <!--To Do:
      listen for key input for playing with keyboard.
      Make input for for keyboard buttons too
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

        <li @mousedown="play('C4',synthShape,0)" @mouseup="play('C4',synthShape,1)" class="key">A</li>
        <li @mousedown="play('C#4',synthShape,0)" @mouseup="play('C#4',synthShape,1)" class="black-key">W</li>
        <li @mousedown="play('D4',synthShape,0)" @mouseup="play('D4',synthShape,1)" class="key thing">S</li>
        <li @mousedown="play('D#4',synthShape,0)" @mouseup="play('D#4',synthShape,1)" class="black-key">E</li>
        <li @mousedown="play('E4',synthShape,0)" @mouseup="play('E4',synthShape,1)" class="key thing">D</li>
        <li @mousedown="play('F4',synthShape,0)" @mouseup="play('F4',synthShape,1)" class="key ">F</li>
        <li @mousedown="play('F#4',synthShape,0)" @mouseup="play('F#4',synthShape,1)" class="black-key">T</li>
        <li @mousedown="play('G4',synthShape,0)" @mouseup="play('G4',synthShape,1)" class="key thing">G</li>
        <li @mousedown="play('G#4',synthShape,0)" @mouseup="play('G#4',synthShape,1)" class="black-key">Y</li>
        <li @mousedown="play('A4',synthShape,0)" @mouseup="play('A4',synthShape,1)" class="key thing">H</li>
        <li @mousedown="play('A#4',synthShape,0)" @mouseup="play('A#4',synthShape,1)" class="black-key">U</li>
        <li @mousedown="play('B4',synthShape,0)" @mouseup="play('B4',synthShape,1)" class="key thing">J</li>
        <li @mousedown="play('C5',synthShape,0)" @mouseup="play('C5',synthShape,1)" class="key ">K</li>
        <li @mousedown="play('C#5',synthShape,0)" @mouseup="play('C#5',synthShape,1)" class="black-key">O</li>
        <li @mousedown="play('D5',synthShape,0)" @mouseup="play('D5',synthShape,1)" class="key thing">L</li>
        <li @mousedown="play('D#5',synthShape,0)" @mouseup="play('D#5',synthShape,1)" class="black-key">P</li>
        <li @mousedown="play('E5',synthShape,0)" @mouseup="play('E5',synthShape,1)" class="key thing">;</li>
        <li @mousedown="play('F5',synthShape,0)" @mouseup="play('F5',synthShape,1)" class="key ">'</li>
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

* {
  box-sizing:border-box
}

body {
  margin:0;
  background:#222
}

ul {
  height:18.875em;
  width:50em;
  margin:5em auto;
  padding:3em 0 0 3em;
  position:relative;
  border:1px solid #160801;
  border-radius:1em;
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)),rebeccapurple;
  box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5);

}

li {
  margin:0;
  padding:0;
  list-style:none;
  position:relative;
  float:left;

  list-style: none;
  display: flex;

}

ul .key {
  height:16em;
  width:4em;
  z-index:1;
  border-left:1px solid #bbb;
  border-bottom:1px solid #bbb;
  border-radius:0 0 5px 5px;
  box-shadow:-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#eee 0%,#fff 100%);

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
}

ul .key:active {
  border-top:1px solid #777;
  border-left:1px solid #999;
  border-bottom:1px solid #999;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)
}

.black-key {
  height:9em;
  width:2em;
  margin:0 0 0 -1em;
  z-index:2;
  border:1px solid #000;
  border-radius:0 0 3px 3px;
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
  background:linear-gradient(45deg,#222 0%,#555 100%);

  //z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  color: white;

}

.black-key:active {
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
  background:linear-gradient(to right,#444 0%,#222 100%)
}

.thing {
  margin:0 0 0 -1em
}



ul li:first-child {
  border-radius:5px 0 5px 5px
}

ul li:last-child {
  border-radius:0 5px 5px 5px
}


</style>