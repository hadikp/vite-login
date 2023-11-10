<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "./assets/main.css"
import HomeComponent from './components/HomeComponent.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

/* @import "./assets/main.css" (max-with: 800px); Ez nem működik */


</style>
