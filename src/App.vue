<template>
  <div id="app" class="center fixed">
<!--    <vue-headful-->
<!--        title="Nathan Erthal"-->
<!--        description=""-->
<!--        keywords=""-->
<!--        image=""-->
<!--        lang=""-->
<!--        ogLocale=""-->
<!--        url=""-->
<!--    />-->
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
  }
}



</script>

<style>

#app {
  //font-family: -apple-system, BlinkMacSystemFont,
  //“Segoe UI”, “Roboto”, “Oxygen”,
  //“Ubuntu”, “Cantarell”, “Fira Sans”,
  //“Droid Sans”, “Helvetica Neue”, sans-serif;
  //font-family: "Big Caslon";
  font-family: "Georgia";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: antiquewhite;
  box-sizing: border-box;

}

body {
  background-image:url('./assets/WebPageBackground.jpg');
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  //background-color: #202020;
}

h1 {
  font-size: 80px;
  color: #D4AF37;
  //text-shadow: 2px 2px black;
  text-shadow: 0px 3px 10px rgba(0,0,0,.25);
}

h2 {
  font-size: 50px;
  color: #D4AF37;
  //text-shadow: 2px 2px black;
  text-shadow: 0px 3px 10px rgba(0,0,0,.25);
  padding-top: 30px;
  padding-bottom: 30px;
}

h3 {
  text-shadow: 0px 3px 10px rgba(0,0,0,.25);
  padding-bottom: 10px;
  padding-top: 10px;
}

h5 {
  letter-spacing: .004em;
  font-weight: 400;
  font-size: 17px;
  padding-top: 13px;
}

p {
  font-size: 1.6rem;
  font-weight: 300;
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
}

ul {
  list-style: none;
}

*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.waves {
  width: 900px;
  height: 250px;
  object-fit: none;
  max-width: 100%;
  filter: brightness(50%);
}

.jumbotron{
  border-radius: 0;
}

.container{
  width: 100%;
  max-width: 98rem;
  margin: 0 auto;
  padding: 0 1.5rem;
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

.background-picture {
  width: 100%;
  height: 85vh;
  background-size: cover;
  position: relative;
}

.background-picture::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 4.7rem;
  background-size: cover;
}

.main-message {
  width: fit-content;
  color: #fafafa;
  text-transform: uppercase;
  transform: translateY(20%);
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


</style>