<template>
  <div class="discography text-center">
    <navbar :on_discography="true"></navbar>
    <div class="container w-100 ">
      <h2 class="text-center text-lg-left">Singles</h2>
    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
name: "Discography",
  components: {
    Navbar
  },
}
</script>

<style scoped>

</style>