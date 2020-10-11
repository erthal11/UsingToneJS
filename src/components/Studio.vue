
<template>
  <div class="studio">
    <navbar :on_studio="true"></navbar>
    <div class="container w-100">


<!--      <button @click="loopBeat">Play</button>-->

      <!--To Do:
      fix bug on hold keyboard note
      make keys play on sliding from notes
      -->

      <button v-show="!onPiano" @click="onPiano=true">Synth</button>
      <button v-show="onPiano" @click="onPiano=false">Hide Synth</button>

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

        <button @click="playSynthKeys(synthShape)">Use Keyboard</button>
        <button id="start-recording" onclick="micSetup()">Ask Question</button>
        <button id="stop-recording" onclick="micStopper()">Stop</button>
        <ul id="piano" v-show="onPiano" @mousedown="clickDown=true" @mouseup="clickDown=false">

          <!--  same keyboard hold note bug with @keydown and @keyup in ul tag -->
          <!--  <ul id="piano" v-show="onPiano" @mousedown="clickDown=true" @mouseup="clickDown=false"-->
          <!--  @keydown="playSynth('C4',synthShape,0)" @keyup="playSynth('C4',synthShape,1)"-->
          <!--  abindex="1">-->

          <li @mousedown="playSynth('C4',synthShape,0)" @mouseup="playSynth('C4',synthShape,1)" class="key">A</li>
          <li @mousedown="playSynth('C#4',synthShape,0)" @mouseup="playSynth('C#4',synthShape,1)" class="black-key">W</li>
          <li @mousedown="playSynth('D4',synthShape,0)" @mouseup="playSynth('D4',synthShape,1)" class="key thing">S</li>
          <li @mousedown="playSynth('D#4',synthShape,0)" @mouseup="playSynth('D#4',synthShape,1)" class="black-key">E</li>
          <li @mousedown="playSynth('E4',synthShape,0)" @mouseup="playSynth('E4',synthShape,1)" class="key thing">D</li>
          <li @mousedown="playSynth('F4',synthShape,0)" @mouseup="playSynth('F4',synthShape,1)" class="key ">F</li>
          <li @mousedown="playSynth('F#4',synthShape,0)" @mouseup="playSynth('F#4',synthShape,1)" class="black-key">T</li>
          <li @mousedown="playSynth('G4',synthShape,0)" @mouseup="playSynth('G4',synthShape,1)" class="key thing">G</li>
          <li @mousedown="playSynth('G#4',synthShape,0)" @mouseup="playSynth('G#4',synthShape,1)" class="black-key">Y</li>
          <li @mousedown="playSynth('A4',synthShape,0)" @mouseup="playSynth('A4',synthShape,1)" class="key thing">H</li>
          <li @mousedown="playSynth('A#4',synthShape,0)" @mouseup="playSynth('A#4',synthShape,1)" class="black-key">U</li>
          <li @mousedown="playSynth('B4',synthShape,0)" @mouseup="playSynth('B4',synthShape,1)" class="key thing">J</li>
          <li @mousedown="playSynth('C5',synthShape,0)" @mouseup="playSynth('C5',synthShape,1)" class="key ">K</li>
          <li @mousedown="playSynth('C#5',synthShape,0)" @mouseup="playSynth('C#5',synthShape,1)" class="black-key">O</li>
          <li @mousedown="playSynth('D5',synthShape,0)" @mouseup="playSynth('D5',synthShape,1)" class="key thing">L</li>
          <li @mousedown="playSynth('D#5',synthShape,0)" @mouseup="playSynth('D#5',synthShape,1)" class="black-key">P</li>
          <li @mousedown="playSynth('E5',synthShape,0)" @mouseup="playSynth('E5',synthShape,1)" class="key thing">;</li>
          <li @mousedown="playSynth('F5',synthShape,0)" @mouseup="playSynth('F5',synthShape,1)" class="key ">'</li>

        </ul>
      </div>


      <!-- Drum Machine -->

      <button v-show="!onDrums" @click="onDrums=true">Drums</button>
      <button v-show="onDrums" @click="onDrums=false">Hide Drums</button>

      <div v-show="onDrums">

        <ul>
          <li @click="playKick" class = drumPad >Kick</li>
          <li @click="playSnare" class = drumPad >Snare</li>
          <li @click="playCymbalSynth('closed')" class = drumPad >Hat</li>
          <li @click="playCymbalSynth('open')" class = drumPad >Open Hat</li>
          <li @click="playSample" class = drumPad >Chord 1</li>
          <li @click="playSample2" class = drumPad >Chord 2</li>
        </ul>

      </div>

      <!-- How can we make this respond to the value on our output from the Tone.js variable "meter" ??? -->
      <div class="levels" id="levels">
        <div class="level" id="level1"></div>
        <div class="level" id="level2"></div>
      </div>


    </div>
  </div>
</template>
<script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io-stream/0.9.1/socket.io-stream.js"></script>
<script>
import VueLogger from 'vuejs-logger';
const isProduction = process.env.NODE_ENV === 'production';
 
const options = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};
 
//Vue.use(VueLogger, options);
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
      onDrums: false,
      synthShape: "sine",
      octaveSwitch: 0,
      synth: new Tone.Synth(),
      bassSynth: new Tone.MembraneSynth(),

      meter:new Tone.Meter(),



      snare: new Tone.NoiseSynth(
          {
            noise  : {
              type  : "pink"
            }  ,
            envelope  : {
              attack  : 0.005 ,
              decay  : 0.1 ,
              sustain  : 0.02,
            },
            volume: +20,
          }
      ),




      sampler: new Tone.Sampler({
        urls: {
          A1: "A1.mp3",
          A2: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/",
      }).toDestination(),

      lowPass: new Tone.Filter({
        frequency: 14000,
      }).toDestination(),

      cymbalSynth: new Tone.MetalSynth({
        "frequency": 250,
        "envelope": {
          "attack": 0.001,
          "decay": 0.1,
          "release": 0.01
        },
        "harmonicity": 3.1,
        "modulationIndex": 16,
        "resonance": 8000,
        "octaves": 0.5
      }).toDestination()
    }
  },

  methods: {

    micSetup: function(){
      const startRecording = document.getElementById('start-recording');
      let recordAudio;
      const socketio = io();
      const socket = socketio.on('connect', function() {
          startRecording.disabled = false;
      });

      //3)
      startRecording.onclick = function() {
          startRecording.disabled = true;

          //4)
          // make use of WebRTC JavaScript method getUserMedia()
          // to capture the browser microphone stream
          navigator.getUserMedia({
              audio: true
          }, function(stream) {

                  //5)
                  recordAudio = RecordRTC(stream, {
                      type: 'audio',

                  //6)
                      mimeType: 'audio/webm',
                      sampleRate: 44100,
                      // used by StereoAudioRecorder
                      // the range 22050 to 96000.
                      // let us force 16khz recording:
                      desiredSampRate: 16000, 
                      // this should match with Syour server code

                      // MediaStreamRecorder, StereoAudioRecorder, WebAssemblyRecorder
                      // CanvasRecorder, GifRecorder, WhammyRecorder
                      recorderType: StereoAudioRecorder,
                      // Dialogflow / STT requires mono audio
                      numberOfAudioChannels: 1
              });

              recordAudio.startRecording();
              stopRecording.disabled = false;
          }, function(error) {
              console.error(JSON.stringify(error));
          });
      };
    },

    micStopper: function(){
        const stopRecording = document.getElementById('stop-recording');
        stopRecording.onclick = function() {
          // recording stopped
          startRecording.disabled = false;
          stopRecording.disabled = true;

          // stop audio recorder
          recordAudio.stopRecording(function() {
              // after stopping the audio, get the audio data
              recordAudio.getDataURL(function(audioDataURL) {

                  //8)
                  var files = {
                      audio: {
                          type: recordAudio.getBlob().type || 'audio/wav',
                          dataURL: audioDataURL
                      }
                  };
                  // submit the audio file to the server
                  socketio.emit('message', files);
              });
          });
      };

      //9)
      // when the server found results send
      // it back to the client
      const resultpreview = document.getElementById('results');
      const intentInput = document.getElementById('intent');
      const textInput = document.getElementById('queryText');
      socketio.on('results', function (data) {
          console.log(data);
          // show the results on the screen
          if(data[0].queryResult){
              resultpreview.innerHTML += "" + data[0].queryResult.fulfillmentText;
              intentInput.value = data[0].queryResult.intent.displayName;
              textInput.value = "" + data[0].queryResult.queryText;
          }
      });
    },

    playSynthKeys: function(shape){

      //for keyboard inputs
      document.addEventListener("keydown", note => {
        // note object has the key property to tell which key was pressed
        switch (note.key) {
          case "a":
            this.playSynth("C4",shape,0)
            // return new Promise((resolve) => {
            //   document.addEventListener('keyup', onKeyHandler);
            //   while (key) {
            //     resolve();
            //   }
            // })
            break;
          case "w":
            this.playSynth("C#4",shape,0)
            console.log("layup");
            break;
          case "s":
            this.playSynth("D#4",shape,0)
            break;
          case "d":
            this.playSynth("E4",shape,0)
            break;
          case "f":
            this.playSynth("F4",shape,0)
            break;
          case "t":
            this.playSynth("F#4",shape,0)
            break;
          case "g":
            this.playSynth("G4",shape,0)
            break;
          case "y":
            this.playSynth("G#4",shape,0)
            break;
          case "h":
            this.playSynth("A4",shape,0)
            break;
          case "u":
            this.playSynth("A#4",shape,0)
            break;
          case "j":
            this.playSynth("B4",shape,0)
            break;
          case "k":
            this.playSynth("C5",shape,0)
            break;
          case "o":
            this.playSynth("C#5",shape,0)
            break;
          case "l":
            this.playSynth("D5",shape,0)
            break;
          case "p":
            this.playSynth("D#5",shape,0)
            break;
          case ";":
            this.playSynth("E5",shape,0)
            break;
          case "'":
            this.playSynth("F5",shape,0)
            break;
          case 'z':
            this.octaveSwitch --;
            break;
            case 'x':
              this.octaveSwitch ++;
              break;
          default:
            return;
        }
      })

      //when the key is released, audio is released as well
      document.addEventListener("keyup", e => {
        switch (e.key) {
          case "a":
          case "w":
          case "s":
          case "d":
          case "f":
          case "t":
          case "g":
          case "y":
          case "h":
          case "u":
          case "j":
          case "k":
          case "o":
          case "l":
          case "p":
          case ";":
          case "'":
            this.playSynth("C4",shape,1)
        }

      });

    },

    playSynth: function (note,shape,time) {

      // we can use the tone.js meter to create a cool visual
      this.synth.connect(this.meter)

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

      // time 0 will trigger the note
      if (time===0) {
        this.synth.triggerAttack(note, now)
        console.log(note)
      }

      // time 1 will release the note
      if (time===1) {
        this.synth.triggerRelease(now)
      }

      //attach a click listener to a play button
      // document.querySelector('button')?.addEventListener('click', async () => {
      //   await Tone.start()
      // });

    },

    playKick: function(){
      this.bassSynth.toDestination()
      this.bassSynth.triggerAttackRelease('c1', '4n', Tone.now())

    },

    playSnare: function(){
      this.snare.toDestination()
      this.snare.triggerAttackRelease("8n");
    },


    playCymbalSynth: function(type){
      if (type=="closed"){
        this.cymbalSynth.envelope.decay = 0.1
      }
      if (type=="open"){
        this.cymbalSynth.envelope.decay = 0.5
      }
      this.cymbalSynth.toDestination()
      this.cymbalSynth.triggerAttackRelease('32n', 0.3);
    },


    playSample: function() {
      this.sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
    },

    playSample2: function() {
      this.sampler.triggerAttackRelease(["G1", "B1", "E2", "C2"], 0.5);
    }



    // loopBeat: function() {
    //   Tone.start();
    //
    //   this.bassSynth.toDestination()
    //   this.snare.toDestination()
    //
    //
    //   //interval: time interval for which song is updated (4n=quarter note)
    //   const loopBeat = new Tone.Loop(this.song, '4n');
    //   //transport is in charge of meter, bpm. (Its the thing that drives loop)
    //   Tone.Transport.start();
    //   loopBeat.start(0);
    // },
    //
    // song: function(time) {
    //   this.bassSynth.triggerAttackRelease('c1', '8n', Tone.now())
    //   console.log(time)
    //
    // }

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
  color: black;
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
  width:3em;
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
  margin:0 0 0 -2em
}



ul li:first-child {
  border-radius:5px 0 5px 5px
}

ul li:last-child {
  border-radius:0 5px 5px 5px
}

ul .drumPad {
  height:6em;
  width:6em;
  z-index:1;
  border: #222222;
  //border-left:1px solid #222222;
  //border-bottom:1px solid #222222;
  border-radius: 5px 5px 5px 5px !important;
  box-shadow:-1px 0 0 #777777 inset,0 0 5px #000000 inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#555555 0%,#444444 100%);
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
  margin-left: 15px;
}



.levels {
  height: 300px;
  width: 30px;
  background-color: #333;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  padding: 4px 3px;
  margin: auto;
  margin-top: 20px;
}

/* paint not glowing LEDs */
.level {
  position: relative;
  margin: 0 2px;
  flex-grow: 1;
  z-index: 3;
  background-color: transparent;
  background-repeat: repeat-y;
  background-image:linear-gradient(to bottom, #666 3px, transparent 1px);
  background-size: 100% 4px;
}

/* paint glowing LEDs */
.level:before {
  width: 100%;
  height: 100%;
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-repeat: no-repeat;
  background-image:linear-gradient(to top, green 0%, yellow 80%, red 100%);
  background-size: 100% 100%;
  clip-path: inset(0% 0 0 0); /* switch off leds via clipping */
  -webkit-clip-path: inset(0% 0 0 0); /* Safari */
  animation: level-animation 500ms alternate infinite;
}

@keyframes level-animation {
  0% {
    clip-path: inset(0% 0 0 0);
    -webkit-clip-path: inset(0% 0 0 0);
  }
  50% {
    clip-path: inset(40% 0 0 0);
    -webkit-clip-path: inset(40% 0 0 0);
  }
  100% {
    clip-path: inset(20% 0 0 0);
    -webkit-clip-path: inset(20% 0 0 0);
  }
}


/* paint gap lines of LEDs */
.level::after {
  width: 100%;
  height: 100%;
  content: ' ';
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  margin-top: 3px;
  background-image:linear-gradient(to bottom, #333 1px /* space between leds*/ , transparent 1px);
  background-repeat: repeat-y;
  background-size: 100% 4px; /* 4px LED height */
  background-color: transparent;
}



</style>