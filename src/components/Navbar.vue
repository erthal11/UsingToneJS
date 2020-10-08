<template>
  <nav class="navbar navbar-expand-md navbar-custom justify-content-center">


    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler justify-content-center mt-3"
            data-target=".dual-collapse2"
            data-toggle="collapse" style="border:none; outline: none" type="button">
      <a class="navbar-brand text-center mx-auto pl-1" style="letter-spacing: 2px">
        Menu
      </a>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse w-100 dual-collapse2 my-3 text-black">
      <ul class="navbar-nav ml-auto">

        <li class="nav-item active text-center" v-show="on_index">
          <router-link class="nav-link onpage" to="/">Home</router-link>
        </li>
        <li class="nav-item text-center" v-show="!on_index">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <!--
        <li class="nav-item active text-center" v-show="on_projects">
          <router-link class="nav-link onpage" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item text-center" v-show="!on_projects">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        -->

        <li class="nav-item active text-center" v-show="on_studio">
          <router-link class="nav-link onpage" to="/studio">Studio</router-link>
        </li>
        <li class="nav-item text-center" v-show="!on_studio">
          <router-link class="nav-link" to="/studio">Studio</router-link>
        </li>



      </ul>
    </div>
    <vue-headful v-if="on_index" title="Pro Loops"></vue-headful>
    <vue-headful v-if="on_projects" title="PL - Projects"></vue-headful>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    on_index: Boolean,
    on_projects: Boolean,
    on_studio: Boolean,
  },
}
</script>

<style scoped>
.navbar-nav li {
  font-size: x-large;
  padding-right: 1vw;
  padding-left: 1vw;
  display: inline;
}

.nav-link {
  //color: antiquewhite;
}

.nav-link:hover {
  //color: #D4AF37;
}

/* Brackets effect for navbar links */
.navbar a::before,
.navbar a::after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}
.navbar-custom {
  //background-color: #444444;
}

.navbar a:hover::before,
.navbar a:hover::after,
.navbar a:focus::before,
.navbar a:focus::after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
  color: #D4AF37;
}

.onpage{
  //color: #444444;
}

a{
  //color: antiquewhite;
  font-size: x-large;
}

a:hover {
  //color: #D4AF37;
}

/*Screen Resolution with min-width: 700px*/
@media screen and (min-width: 768px) {
  .navbar-brand {

  }
}
</style>
