
<template>
  <div class="studio">
<!--    <navbar :on_studio="true"></navbar>-->
    <div class="container w-100 align">

      <div>
        <h1>Wonder Beats</h1>
        <h4>Your online Studio</h4>
        <h5> For the best audio experience, please your your computer browser.</h5>
      </div>

      <!--To Do:
      fix bug on hold keyboard note
      make keys play on sliding from notes
      -->
      <button v-show="!onPiano" @click="onPiano=true,playSynthKeys()">Open Synth</button>
      <button v-show="onPiano" @click="onPiano=false">Hide Synth</button>

      <div v-show="onPiano">
        <!--lower the octave -->
        <button @click="octaveSwitch --" >Octave lower (-)</button>
        <!-- raise the octave-->
        <button @click="octaveSwitch ++">octave higher (+)</button>
        <!-- dropdown list to change wave shape (sine/triangle/saw/square) -->
        <select v-model="synthShape" v-show="onPiano" name="shape" id="shapes">
          <option @click="synthShape='sine'" value="sine">sine</option>
          <option @click="synthShape='sine2'" value="sine2">sine2</option>
          <option @click="synthShape='triangle'" value="triangle">triangle</option>
          <option @click="synthShape='sawtooth'" value="sawtooth">saw</option>
          <option @click="synthShape='square'" value="square">square</option>
        </select>


        <ul id="piano" v-show="onPiano" @mousedown="clickDown=true" @mouseup="clickDown=false">

          <!--  same keyboard hold note bug with @keydown and @keyup in ul tag -->
          <!--  <ul id="piano" v-show="onPiano" @mousedown="clickDown=true" @mouseup="clickDown=false"-->
          <!--  @keydown="playSynth('C4',synthShape,0)" @keyup="playSynth('C4',synthShape,1)"-->
          <!--  abindex="1">-->

          <li id="c4" @mousedown="playSynth('C4',synthShape,0)" @mouseup="playSynth('C4',synthShape,1)" class="key">A</li>
          <li id="c#4" @mousedown="playSynth('C#4',synthShape,0)" @mouseup="playSynth('C#4',synthShape,1)" class="black-key">W</li>
          <li id="d4" @mousedown="playSynth('D4',synthShape,0)" @mouseup="playSynth('D4',synthShape,1)" class="key thing">S</li>
          <li id="d#4" @mousedown="playSynth('D#4',synthShape,0)" @mouseup="playSynth('D#4',synthShape,1)" class="black-key">E</li>
          <li id="e4" @mousedown="playSynth('E4',synthShape,0)" @mouseup="playSynth('E4',synthShape,1)" class="key thing">D</li>
          <li id="f4" @mousedown="playSynth('F4',synthShape,0)" @mouseup="playSynth('F4',synthShape,1)" class="key ">F</li>
          <li id="f#4" @mousedown="playSynth('F#4',synthShape,0)" @mouseup="playSynth('F#4',synthShape,1)" class="black-key">T</li>
          <li id="g4" @mousedown="playSynth('G4',synthShape,0)" @mouseup="playSynth('G4',synthShape,1)" class="key thing">G</li>
          <li id="g#4" @mousedown="playSynth('G#4',synthShape,0)" @mouseup="playSynth('G#4',synthShape,1)" class="black-key">Y</li>
          <li id="a4" @mousedown="playSynth('A4',synthShape,0)" @mouseup="playSynth('A4',synthShape,1)" class="key thing">H</li>
          <li id="a#4" @mousedown="playSynth('A#4',synthShape,0)" @mouseup="playSynth('A#4',synthShape,1)" class="black-key">U</li>
          <li id="b4" @mousedown="playSynth('B4',synthShape,0)" @mouseup="playSynth('B4',synthShape,1)" class="key thing">J</li>
          <li id="c5" @mousedown="playSynth('C5',synthShape,0)" @mouseup="playSynth('C5',synthShape,1)" class="key ">K</li>
          <li id="c#5" @mousedown="playSynth('C#5',synthShape,0)" @mouseup="playSynth('C#5',synthShape,1)" class="black-key">O</li>
          <li id="d5" @mousedown="playSynth('D5',synthShape,0)" @mouseup="playSynth('D5',synthShape,1)" class="key thing">L</li>
          <li id="d#5" @mousedown="playSynth('D#5',synthShape,0)" @mouseup="playSynth('D#5',synthShape,1)" class="black-key">P</li>
          <li id="e5" @mousedown="playSynth('E5',synthShape,0)" @mouseup="playSynth('E5',synthShape,1)" class="key thing">;</li>
          <li id="f5" @mousedown="playSynth('F5',synthShape,0)" @mouseup="playSynth('F5',synthShape,1)" class="key ">'</li>

        </ul>
      </div>


      <!-- Drum Machine -->

      <button v-show="!onDrums" @click="onDrums=true, playDrumsKeys()">Drums</button>
      <button v-show="onDrums" @click="onDrums=false">Hide Drums</button>

      <div v-show="onDrums">

        <ul class = "drums">
          <li @click="playKick" class = drumPad >Kick<br>1</li>
          <li @click="playSnare" class = drumPad >Snare<br>2</li>
          <li @click="playCymbalSynth('closed')" class = drumPad >Hat<br>3</li>
          <li @click="playCymbalSynth('open')" class = drumPad >Open Hat<br>4</li>
          <li @click="playSample" class = drumPad >Chord 1<br>5</li>
          <li @click="playSample2" class = drumPad >Chord 2<br>6</li>
        </ul>

      </div>


      <button v-show="!onDrumMachine" @click="onDrumMachine=true">Drum Machine</button>
      <button v-show="onDrumMachine" @click="onDrumMachine=false">Hide Drum Machine</button>

      <div v-show="onDrumMachine">

        <form>BPM:
          <input v-model="bpm" id="bpm" type="number" value="120">
        </form>

        <button v-show="!playing" @click="loopBeat('start'), playing=true">Play</button>
        <button v-show="playing" @click="loopBeat('stop'), playing=false">Pause</button>


        <ul class ="drumMachine">

          <div class="leftBox">
            <li class="block">Kick</li>
            <li class="block">Hihat</li>
            <li class="block">Snare</li>
          </div>

          <div class="rightBox">
            <!--          <li>kick:</li>-->
            <li class ="drumMachineNote" v-show="!note1IsActive" @click="note1IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note1IsActive" @click="note1IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note2IsActive" @click="note2IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note2IsActive" @click="note2IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note3IsActive" @click="note3IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note3IsActive" @click="note3IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note4IsActive" @click="note4IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note4IsActive" @click="note4IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note5IsActive" @click="note5IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note5IsActive" @click="note5IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note6IsActive" @click="note6IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note6IsActive" @click="note6IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note7IsActive" @click="note7IsActive=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note7IsActive" @click="note7IsActive=false"></li>

            <li class ="drumMachineNote" v-show="!note8IsActive" @click="note8IsActive=true"><br/></li>
            <li class ="drumMachineNote noteOn" v-show="note8IsActive" @click="note8IsActive=false"></li>

            <!--          <li>hat:</li>-->
            <li class ="drumMachineNote" v-show="!note1IsActiveHat" @click="note1IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note1IsActiveHat" @click="note1IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note2IsActiveHat" @click="note2IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note2IsActiveHat" @click="note2IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note3IsActiveHat" @click="note3IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note3IsActiveHat" @click="note3IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note4IsActiveHat" @click="note4IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note4IsActiveHat" @click="note4IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note5IsActiveHat" @click="note5IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note5IsActiveHat" @click="note5IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note6IsActiveHat" @click="note6IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note6IsActiveHat" @click="note6IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note7IsActiveHat" @click="note7IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note7IsActiveHat" @click="note7IsActiveHat=false"></li>

            <li class ="drumMachineNote" v-show="!note8IsActiveHat" @click="note8IsActiveHat=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note8IsActiveHat" @click="note8IsActiveHat=false"></li>

            <!--          <li>Snare:</li>-->
            <li class ="drumMachineNote" v-show="!note1IsActiveSnare" @click="note1IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note1IsActiveSnare" @click="note1IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note2IsActiveSnare" @click="note2IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note2IsActiveSnare" @click="note2IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note3IsActiveSnare" @click="note3IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note3IsActiveSnare" @click="note3IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note4IsActiveSnare" @click="note4IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note4IsActiveSnare" @click="note4IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note5IsActiveSnare" @click="note5IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note5IsActiveSnare" @click="note5IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note6IsActiveSnare" @click="note6IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note6IsActiveSnare" @click="note6IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note7IsActiveSnare" @click="note7IsActiveSnare=true"></li>
            <li class ="drumMachineNote noteOn" v-show="note7IsActiveSnare" @click="note7IsActiveSnare=false"></li>

            <li class ="drumMachineNote" v-show="!note8IsActiveSnare" @click="note8IsActiveSnare=true"><br/></li>
            <li class ="drumMachineNote noteOn" v-show="note8IsActiveSnare" @click="note8IsActiveSnare=false"></li>


            <!-- Drum machine lights-->
            <li class ="drumMachineLight " v-show="!light1On"></li>
            <li class ="drumMachineLight lightOn" v-show="light1On"></li>

            <li class ="drumMachineLight " v-show="!light2On"></li>
            <li class ="drumMachineLight lightOn" v-show="light2On"></li>

            <li class ="drumMachineLight " v-show="!light3On"></li>
            <li class ="drumMachineLight lightOn" v-show="light3On"></li>

            <li class ="drumMachineLight " v-show="!light4On"></li>
            <li class ="drumMachineLight lightOn" v-show="light4On"></li>

            <li class ="drumMachineLight " v-show="!light5On"></li>
            <li class ="drumMachineLight lightOn" v-show="light5On"></li>

            <li class ="drumMachineLight " v-show="!light6On"></li>
            <li class ="drumMachineLight lightOn" v-show="light6On"></li>

            <li class ="drumMachineLight " v-show="!light7On"></li>
            <li class ="drumMachineLight lightOn" v-show="light7On"></li>

            <li class ="drumMachineLight " v-show="!light8On"></li>
            <li class ="drumMachineLight lightOn" v-show="light8On"></li>

          </div>



        </ul>



      </div>

      <!-- How can we make this respond to the value on our output from the Tone.js variable "meter" ??? -->
<!--      <div class="levels" id="levels">-->
<!--        <div class="level" id="level1"></div>-->
<!--        <div class="level" id="level2"></div>-->
<!--      </div>-->


    </div>
  </div>
</template>


<script>

//import Navbar from '@/components/Navbar'
import * as Tone from 'tone'



export default {
  name: "Studio",

  components: {
    //Navbar
  },

  data() {
    return {

      counter: 0,

      //socketio: this.io(),

      bpm: 120,
      playing: false,
      onPiano: false,
      onDrums: false,
      onDrumMachine: false,

      note1IsActive: false,
      note2IsActive: false,
      note3IsActive: false,
      note4IsActive: false,
      note5IsActive: false,
      note6IsActive: false,
      note7IsActive: false,
      note8IsActive: false,

      note1IsActiveHat: false,
      note2IsActiveHat: false,
      note3IsActiveHat: false,
      note4IsActiveHat: false,
      note5IsActiveHat: false,
      note6IsActiveHat: false,
      note7IsActiveHat: false,
      note8IsActiveHat: false,

      note1IsActiveSnare: false,
      note2IsActiveSnare: false,
      note3IsActiveSnare: false,
      note4IsActiveSnare: false,
      note5IsActiveSnare: false,
      note6IsActiveSnare: false,
      note7IsActiveSnare: false,
      note8IsActiveSnare: false,

      light1On: false,
      light2On: false,
      light3On: false,
      light4On: false,
      light5On: false,
      light6On: false,
      light7On: false,
      light8On: false,

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
            volume: +15,
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
        // resonance is making it not sound ??
        //"resonance": 8000,
        "octaves": 0.5
      }).toDestination()

      //cymbalSynth: new Tone.MetalSynth().toDestination()
    }
  },

  methods: {

    // socket: function() { this.socketio.on('connect', function() {
    //   this.startRecording.disabled = false;
    // })},
    //
    // //5)
    // gRecordAudio: function (){ this.RecordRTC(this.stream, {
    //   type: 'audio',
    //
    //   //6)
    //   mimeType: 'audio/webm',
    //   sampleRate: 44100,
    //   // used by StereoAudioRecorder
    //   // the range 22050 to 96000.
    //   // let us force 16khz recording:
    //   desiredSampRate: 16000,
    //   // this should match with Syour server code
    //
    //   // MediaStreamRecorder, StereoAudioRecorder, WebAssemblyRecorder
    //   // CanvasRecorder, GifRecorder, WhammyRecorder
    //   recorderType: this.StereoAudioRecorder,
    //   // Dialogflow / STT requires mono audio
    //   numberOfAudioChannels: 1
    // });
    // },
    //
    //
    // gMicSetup: function(){
    //   const startRecording = document.getElementById('start-recording');
    //
    //
    //   //3)
    //   startRecording.onclick = function() {
    //       startRecording.disabled = true;
    //
    //       //4)
    //       // make use of WebRTC JavaScript method getUserMedia()
    //       // to capture the browser microphone stream
    //       navigator.getUserMedia({
    //           audio: true
    //       }, function(this.stream) {
    //
    //
    //
    //           this.gRecordAudio.startRecording();
    //           this.stopRecording.disabled = false;
    //       }, function(error) {
    //           console.error(JSON.stringify(error));
    //       });
    //   };
    // },
    //
    // gMicStopper: function(){
    //     const stopRecording = document.getElementById('stop-recording');
    //     stopRecording.onclick = function() {
    //       // recording stopped
    //       this.startRecording.disabled = false;
    //       stopRecording.disabled = true;
    //
    //       // stop audio recorder
    //       recordAudio.stopRecording(function() {
    //           // after stopping the audio, get the audio data
    //           recordAudio.getDataURL(function(audioDataURL) {
    //
    //               //8)
    //               var files = {
    //                   audio: {
    //                       type: this.recordAudio.getBlob().type || 'audio/wav',
    //                       dataURL: audioDataURL
    //                   }
    //               };
    //               // submit the audio file to the server
    //               this.socketio.emit('message', files);
    //           });
    //       });
    //   };
    //
    //   //9)
    //   // when the server found results send
    //   // it back to the client
    //   const resultpreview = document.getElementById('results');
    //   const intentInput = document.getElementById('intent');
    //   const textInput = document.getElementById('queryText');
    //   this.socketio.on('results', function (data) {
    //       console.log(data);
    //       // show the results on the screen
    //       if(data[0].queryResult){
    //           resultpreview.innerHTML += "" + data[0].queryResult.fulfillmentText;
    //           intentInput.value = data[0].queryResult.intent.displayName;
    //           textInput.value = "" + data[0].queryResult.queryText;
    //       }
    //   });
    // },


    playSynthKeys: function(){



        //for keyboard inputs
        document.addEventListener("keydown", note => {
          // note object has the key property to tell which key was pressed
          switch (note.key) {
            case "a":
              this.playSynth("C4", this.synthShape, 0)
              document.getElementById("c4").classList.add("whiteKeyActive");
              // return new Promise((resolve) => {
              //   document.addEventListener('keyup', onKeyHandler);
              //   while (key) {
              //     resolve();
              //   }
              // })
              break;
            case "w":
              this.playSynth("C#4", this.synthShape, 0)
              document.getElementById("c#4").classList.add("blackKeyActive");
              break;
            case "s":
              this.playSynth("D4", this.synthShape, 0)
              document.getElementById("d4").classList.add("whiteKeyActive");
              break;
            case "e":
              this.playSynth("D#4", this.synthShape, 0)
              document.getElementById("d#4").classList.add("blackKeyActive");
              break;
            case "d":
              this.playSynth("E4", this.synthShape, 0)
              document.getElementById("e4").classList.add("whiteKeyActive");
              break;
            case "f":
              this.playSynth("F4", this.synthShape, 0)
              document.getElementById("f4").classList.add("whiteKeyActive");
              break;
            case "t":
              this.playSynth("F#4", this.synthShape, 0)
              document.getElementById("f#4").classList.add("blackKeyActive");
              break;
            case "g":
              this.playSynth("G4", this.synthShape, 0)
              document.getElementById("g4").classList.add("whiteKeyActive");
              break;
            case "y":
              this.playSynth("G#4", this.synthShape, 0)
              document.getElementById("g#4").classList.add("blackKeyActive");
              break;
            case "h":
              this.playSynth("A4", this.synthShape, 0)
              document.getElementById("a4").classList.add("whiteKeyActive");
              break;
            case "u":
              this.playSynth("A#4", this.synthShape, 0)
              document.getElementById("a#4").classList.add("blackKeyActive");
              break;
            case "j":
              this.playSynth("B4", this.synthShape, 0)
              document.getElementById("b4").classList.add("whiteKeyActive");
              break;
            case "k":
              this.playSynth("C5", this.synthShape, 0)
              document.getElementById("c5").classList.add("whiteKeyActive");
              break;
            case "o":
              this.playSynth("C#5", this.synthShape, 0)
              document.getElementById("c#5").classList.add("blackKeyActive");
              break;
            case "l":
              this.playSynth("D5", this.synthShape, 0)
              document.getElementById("d5").classList.add("whiteKeyActive");
              break;
            case "p":
              this.playSynth("D#5", this.synthShape, 0)
              document.getElementById("d#5").classList.add("blackKeyActive");
              break;
            case ";":
              this.playSynth("E5", this.synthShape, 0)
              document.getElementById("e5").classList.add("whiteKeyActive");
              break;
            case "'":
              this.playSynth("F5", this.synthShape, 0)
              document.getElementById("f5").classList.add("whiteKeyActive");
              break;
            case 'z':
              this.octaveSwitch--;
              break;
            case 'x':
              this.octaveSwitch++;
              break;
            default:
              return;
          }
        })

      //when the key is released, audio is released as well
      document.addEventListener("keyup", e => {
        switch (e.key) {
          case "a":
            this.playSynth("C4",this.synthShape,1)
            document.getElementById("c4").classList.remove("whiteKeyActive");
            break;
          case "s":
            this.playSynth("D4",this.synthShape,1)
            document.getElementById("d4").classList.remove("whiteKeyActive");
            break;
          case "d":
            this.playSynth("E4",this.synthShape,1)
            document.getElementById("e4").classList.remove("whiteKeyActive");
            break;
          case "f":
            this.playSynth("F4",this.synthShape,1)
            document.getElementById("f4").classList.remove("whiteKeyActive");
            break;
          case "g":
            this.playSynth("G4",this.synthShape,1)
            document.getElementById("g4").classList.remove("whiteKeyActive");
            break;
          case "h":
            this.playSynth("A4",this.synthShape,1)
            document.getElementById("a4").classList.remove("whiteKeyActive");
            break;
          case "j":
            this.playSynth("B4",this.synthShape,1)
            document.getElementById("b4").classList.remove("whiteKeyActive");
            break;
          case "k":
            this.playSynth("C5",this.synthShape,1)
            document.getElementById("c5").classList.remove("whiteKeyActive");
            break;
          case "l":
            this.playSynth("D5",this.synthShape,1)
            document.getElementById("d5").classList.remove("whiteKeyActive");
            break;
          case ";":
            this.playSynth("E5",this.synthShape,1)
            document.getElementById("e5").classList.remove("whiteKeyActive");
            break;
          case "'":
            this.playSynth("F5",this.synthShape,1)
            document.getElementById("f5").classList.remove("whiteKeyActive");
            break;

          case "w":
            this.playSynth("C#4",this.synthShape,1)
            document.getElementById("c#4").classList.remove("blackKeyActive");
            break;
          case "e":
            this.playSynth("D#4",this.synthShape,1)
            document.getElementById("d#4").classList.remove("blackKeyActive");
            break;
          case "t":
            this.playSynth("F#4",this.synthShape,1)
            document.getElementById("f#4").classList.remove("blackKeyActive");
            break;
          case "y":
            this.playSynth("G#4",this.synthShape,1)
            document.getElementById("g#4").classList.remove("blackKeyActive");
            break;
          case "u":
            this.playSynth("A#4",this.synthShape,1)
            document.getElementById("a#4").classList.remove("blackKeyActive");
            break;
          case "o":
            this.playSynth("C#5",this.synthShape,1)
            document.getElementById("c#5").classList.remove("blackKeyActive");
            break;
          case "p":
            this.playSynth("D#5",this.synthShape,1)
            document.getElementById("d#5").classList.remove("blackKeyActive");
            break;

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

      // Tone.Synth is a basic synthesizer with a single oscillator
      // Set the tone to sine
      this.synth.oscillator.type = shape;
      //synth.oscillator.type = "sine2";
      // connect it to the master output (your speakers)
      this.synth.toDestination()

      // time 0 will trigger the note
      if (time===0) {
        this.synth.triggerAttack(note, Tone.context.currentTime)
        console.log(note)
      }

      // time 1 will release the note
      if (time===1) {
        this.synth.triggerRelease(Tone.context.currentTime)
      }


    },


    playDrumsKeys: function(){

      document.addEventListener("keydown", note => {
        // note object has the key property to tell which key was pressed
        switch (note.key) {
          case "1":
            this.playKick()
            break;
          case "2":
            this.playSnare()
            break;
          case "3":
            this.playCymbalSynth("closed")
            break;
          case "4":
            this.playCymbalSynth("open")
            break;
          case "5":
            this.playSample()
            break;
          case "6":
            this.playSample2()
            break;
          default:
            return;
        }
      })

    },

    playKick: function(){
      this.bassSynth.toDestination()
      this.bassSynth.triggerAttackRelease('c1', '4n', Tone.context.currentTime)

    },

    playSnare: function(){
      this.snare.toDestination()
      this.snare.triggerAttackRelease('4n',Tone.context.currentTime);
    },


    playCymbalSynth: function(type){
      if (type=="closed"){
        this.cymbalSynth.envelope.decay = 0.1
      }
      if (type=="open"){
        this.cymbalSynth.envelope.decay = 0.5
      }
      this.cymbalSynth.toDestination()
      this.cymbalSynth.triggerAttackRelease('32n', 0.3,Tone.context.currentTime);
    },


    playSample: function() {
      this.sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5,Tone.context.currentTime);
    },

    playSample2: function() {
      this.sampler.triggerAttackRelease(["G1", "B1", "E2", "C2"], 0.5,Tone.context.currentTime);
    },




    loopBeat: function(command) {

      Tone.start();


      Tone.Transport.bpm.value = this.bpm;

      //interval: time interval for which song is updated (4n=quarter note)
      const loopBeat = new Tone.Loop(this.song, '16n');
      //transport is in charge of meter, bpm. (Its the thing that drives loop)

      if (command == "start") {
        loopBeat.start();
        Tone.Transport.start();
      }
      if (command == "stop") {
        loopBeat.cancel(Tone.context.currentTime)
        Tone.Transport.cancel(Tone.context.currentTime)
      }

    },

    song: function(time) {

      // light 1
      if (this.counter%16==0){
        this.light1On=true;
        this.light8On=false;
        if(this.note1IsActive){
          this.playKick();
        }
        if(this.note1IsActiveHat){
          this.playCymbalSynth("closed")
        }
        if(this.note1IsActiveSnare){
          this.playSnare()
        }
      }

      // light 2
      if (this.counter%16==2) {
        this.light2On = true;
        this.light1On = false;
        if (this.note2IsActive) {
          this.playKick();
        }
        if (this.note2IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note2IsActiveSnare) {
          this.playSnare()
        }
      }

      // light 3
      if (this.counter%16==4){
        this.light3On=true;
        this.light2On=false;
        if (this.note3IsActive) {
          this.playKick();
        }
        if (this.note3IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note3IsActiveSnare) {
          this.playSnare()
        }
      }

      // light 4
      if (this.counter%16==6){
        this.light4On=true;
        this.light3On=false;
        if (this.note4IsActive) {
          this.playKick();
        }
        if (this.note4IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note4IsActiveSnare) {
          this.playSnare()
        }
      }

      // light 5
      if (this.counter%16==8){
        this.light5On=true;
        this.light4On=false;
        if (this.note5IsActive) {
          this.playKick();
        }
        if (this.note5IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note5IsActiveSnare) {
          this.playSnare()
        }
      }

      // light 6
      if (this.counter%16==10){
        this.light6On=true;
        this.light5On=false;
        if (this.note6IsActive) {
          this.playKick();
        }
        if (this.note6IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note6IsActiveSnare) {
          this.playSnare()
        }
      }

      // light 7
      if (this.counter%16==12){
        this.light7On=true;
        this.light6On=false;
        if (this.note7IsActive) {
          this.playKick();
        }
        if (this.note7IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note7IsActiveSnare) {
          this.playSnare()
        }
      }

      // light 8
      if (this.counter%16==14){
        this.light8On=true;
        this.light7On=false;
        if (this.note8IsActive) {
          this.playKick();
        }
        if (this.note8IsActiveHat) {
          this.playCymbalSynth("closed")
        }
        if (this.note8IsActiveSnare) {
          this.playSnare()
        }
      }


      this.counter= (this.counter + 1) % 16

      console.log(time)

    }

  }

}


</script>










<style scoped>

.drumMachine{
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)), orangered !important;
  width: 39em;
  padding-left: 2em;
}

.drumMachineNote {
  height:3em;
  width:3em;
  z-index:1;
  //border: 1px solid black;
  border-radius: 0px 0px 0px 0px !important;
  //box-shadow:-1px 0 0 #555555 inset,0 0 5px #000000 inset,0 0 3px rgba(0,0,0,0.2);
  background: #333333;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
  margin-left: 15px;
}

.noteOn {
  background: yellowgreen !important;
}

.drumMachineLight{
  height:1em;
  width:1em;
  z-index:1;
  border: 1px solid black;
  border-radius: 50% 50% 50% 50% !important;
//box-shadow:-1px 0 0 #555555 inset,0 0 5px #000000 inset,0 0 3px rgba(0,0,0,0.2);
  background: #777777;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
  margin-left: 32px;
  margin-right: 15px;
}

.lightOn{
  background: #00ff00 !important;
}

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
  margin-bottom: 15px;
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

.whiteKeyActive{
  border-top:1px solid #777 !important;
  border-left:1px solid #999 !important;
  border-bottom:1px solid #999 !important;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2) !important;
  background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%) !important;
}
.blackKeyActive {
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

.drums {
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)), #7D88B5 !important;
}

ul .drumPad {
  height:6em;
  width:6em;
  z-index:1;
  border: #222222;
  //border-left:1px solid #222222;
  //border-bottom:1px solid #222222;
  border-radius: 5px 5px 5px 5px !important;
  box-shadow:-1px 0 0 #555555 inset,0 0 5px #000000 inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#555555 0%,#444444 100%);
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
  margin-left: 15px;
}

ul .drumPad:active {
  box-shadow:-1px 0 0 rgba(0,0,0,0.2) inset,0 0 5px #000000 inset,0 0 3px #444444;
  background:linear-gradient(to bottom,#444444 0%,#444444 100%);
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

h5 {
  //display: inline;
  //margin-right: 100%;
}

button {
  background-color: white;
  border-radius: 2rem;
  color: black;
  display: inline-block;
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  //margin-bottom: 2rem;
  padding: 0.7rem;
  transition: all .2s ease-in-out;
  width: 170px;
  font-size: large;
}

button:hover {
  transform: scale(1.1);
}

input{
  width: 80px;
  height: 40px;
  font-size: large;
  text-align: center;
}

.studio{
  font-family: AudioFont;
}

.leftBox{
  float: left;
  height: 100%;
  width: 7%;
  padding-right: 3em;
}

.block{
  margin-bottom: 30px;
  margin-top: 11px;
}


</style>