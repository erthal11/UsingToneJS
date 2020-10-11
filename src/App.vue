<template>
  <div id="app" class="center fixed">
    <router-view></router-view>
  </div>
</template>

<script>
//import NProgress from 'nprogress';

export default {
  name: 'App',
  created() {
    //NProgress.start()
    this.$router.beforeEach((to, from, next) => {
     // NProgress.start()
      next()
    })
  },

}



</script>

<style>
.left {
  padding:57px;
  padding-top: 0px!important;
  float: left;
  /* text-align: center;
  margin: 0 auto; */
}
.fade-inT {
	opacity: 1;
	animation: fadeInOpacity 2 ease-in;
  animation-delay: 1.5s;
}
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
  position: relative;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 3s;
  animation-delay: 1.5s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.before-enter {
  opacity: 0;
  transform: translateY(200px);
  transition: all 3s ease-out; 
}
.before-enter2 {
  transform: translateY(200px);
  transition: all 5s ease-out; 
  transition-delay: 3s;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}


.before_intro {
  padding-top: 0px;
  width: 100vw;
  height: 60vh;
  background-color: white;  
  padding-bottom: 0px;
}

#app {
  //font-family: -apple-system, BlinkMacSystemFont,
  //“Segoe UI”, “Roboto”, “Oxygen”,
  //“Ubuntu”, “Cantarell”, “Fira Sans”,
  //“Droid Sans”, “Helvetica Neue”, sans-serif;
  //font-family: "Big Caslon";
  font-family: "Georgia";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  box-sizing: border-box;

}

@font-face {
  font-family: 'AudioFont';
  src: url('./assets/fonts/Audiowide-Regular.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  url('./assets/fonts/Audiowide-Regular.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}


//Kanit-Medium
@font-face {
  font-family: 'Kanit-Medium';
  src: url('./assets/fonts/Kanit-Medium.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  url('./assets/fonts/Kanit-Medium.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

//Kanit-ExtraLight
@font-face {
  font-family: 'Kanit-ExtraLight';
  src: url('./assets/fonts/Kanit-ExtraLight.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  url('./assets/fonts/Kanit-ExtraLight.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

//Kanit-Thin
@font-face {
  font-family: 'Kanit-Thin';
  src: url('./assets/fonts/Kanit-Thin.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  url('./assets/fonts/Kanit-Thin.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}



body {
  //background-image:url('./assets/WebPageBackground.jpg');
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-color: #130F40;
  /* animation: animatebk 5s ease-out infinite; */
  animation-delay: 5s;
  margin-bottom: 70px;
}

.intro {
  color: black;
  padding: 150px;
  width: 100vw;  
}

h1{
  opacity: 1;
	animation-timing-function: ease-in;
  position: relative;
  font-family: "AudioFont";
  font-size: 65px;
  color: #fff;
  //text-shadow: 0px 3px 10px rgba(0,0,0,.25);
  text-shadow: 0 0 50px #0f0,
  0 0 500px #0f0,
  0 0 300px #0f0,
  0 0 500px #0f0;
  animation: animate 5s linear infinite, fadeInOpacity 4s ease-in;
  margin-bottom: 70px;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes animate
{
  0%
  {
    filter: hue-rotate(0deg);
  }
  100%
  {
    filter: hue-rotate(360deg);
  }
}

@keyframes animatebk
{ 
  10% { background-color: #434343; } 
  filter: brightness(20%);
  50% { background-color: #b3b300; } 
  filter: brightness(20%);
  100% { background-color: #28313B; }
  filter: brightness(20%); 
  75% { background-color: #b3b300; } 
  filter: brightness(20%);
  50% { background-color: #434343; } 
  filter: brightness(20%);
  25% { background-color: #28313B; }
  filter: brightness(20%);
  10%  { background-color: #b3b300; }
  filter: brightness(20%);
}

h2 {
  font-size: 50px;
  //color: #D4AF37;
  //text-shadow: 2px 2px black;
  text-shadow: 0px 3px 10px rgba(0,0,0,.25);
  padding-top: 30px;
  padding-bottom: 30px;
}

h3 {
  text-shadow: 0px 3px 10px rgba(0,0,0,.25);
  padding-bottom: 10px;
  padding-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

h5 {
  letter-spacing: .004em;
  font-weight: 400;
  font-size: 35px;
  padding-top: 13px;
  animation: fadeInOpacity 4s ease-in;
  animation-delay: .5s;
  animation-fill-mode: both;
}
h6 {
  letter-spacing: .004em;
  font-weight: 400;
  font-size: 35px;
  padding-top: 13px;
  animation: fadeInOpacity 4s ease-in;
  animation-delay: 1.5s;
   animation-fill-mode: both;
}

p {
  transition-delay: 2s;
  font-size: 1.3rem;
  font-weight: 300;
  color: black;
}

::selection {
  text-shadow: 2px 2px 2px #7D88B5;
  background-color: #d7d4ed;
}

::-moz-selection {
  text-shadow: 2px 2px 2px #7D88B5;
}

a {
  text-decoration: none;
  color: white;
}

a:hover{
  color: mediumpurple;
}

ul {
  list-style: none;
}

*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}


.jumbotron{
  border-radius: 0;
}

.container{
  width: 100%;
  max-width: 98rem;
  padding: 0 !important;
  margin: 0  !important;
}

.btn {
  background-color: white;
  border-radius: 2rem;
  color: black;
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.7rem;
  transition: background-color 650ms;
  width: 170px;
}

.btn:hover {
  background-color: black;
  color: white;
}



.main-message h1 {
  font-family: 'Aldrich', sans-serif;
  font-size: 3.0rem;
  margin: 1rem 0;
}

div {
  padding-top: 10px;
  padding-bottom: 10px;
}



@media screen and (max-width: 900px) {
  .quoteBox {
    width: auto;
    height: 300px;
  //background-color: #7D88B5; margin: 20px auto;
    padding: 10px 10px 10px 10px;
    display: block;
    margin-bottom: 20px;
  }
}


</style>