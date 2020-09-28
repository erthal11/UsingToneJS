<template>
  <nav class="navbar navbar-expand-md navbar-custom justify-content-center">

    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler justify-content-center mt-3"
            data-target=".dual-collapse2"
            data-toggle="collapse" style="border:none; outline: none" type="button">
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

        <li class="nav-item active text-center" v-show="on_projects">
          <router-link class="nav-link onpage" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item text-center" v-show="!on_projects">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>

        <li class="nav-item active text-center" v-show="on_discography">
          <router-link class="nav-link onpage" to="/discography">Discography</router-link>
        </li>
        <li class="nav-item text-center" v-show="!on_discography">
          <router-link class="nav-link" to="/discography">Discography</router-link>
        </li>
        <!--
        <li class="nav-item active text-center" v-show="on_aboutMe">
          <router-link class="nav-link onpage" to="/about_me">About Me</router-link>
        </li>
        <li class="nav-item text-center" v-show="!on_aboutMe">
          <router-link class="nav-link" to="/about_me">About Me</router-link>
        </li>
        -->

      </ul>
    </div>
    <!-- <vue-headful title="BIM - Home"></vue-headful> -->
    <vue-headful v-if="on_index" title="BIM - Home"></vue-headful>
    <!-- TODO: Dynamically change the title based on username/company name. -->
    <vue-headful v-if="on_projects" title="BIM - Projects"></vue-headful>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    on_index: Boolean,
    on_projects: Boolean,
    on_discography: Boolean,
    on_aboutMe: Boolean,
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
  color: antiquewhite;
}

.nav-link:hover {
  color: #fdf497;
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

.navbar a::before {
  margin-right: 10px;
  content: '(';
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
}

.navbar a::after {
  margin-left: 10px;
  content: ')';
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
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
  color: #fdf497;
}

.onpage{
  color: #444444;
}

/*Screen Resolution with min-width: 700px*/
@media screen and (min-width: 768px) {
  .navbar-brand {

  }
}
</style>
