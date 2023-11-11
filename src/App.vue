<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "./assets/main.css"

</script>

<template>
  <header>
    <div class="app-header">
      <nav class="navigation">
        <ul class="nav-ul">
          <li><RouterLink class="nav-ul-li" to="/">Home</RouterLink></li>
          <li><RouterLink class="nav-ul-li" to="/about">About</RouterLink></li>
          <li><RouterLink class="nav-ul-li" to="/user">User</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
  <main class="main-container">
    <h1>This is the main</h1>
  </main>
  <footer>
    <div class="footer-div">
      &copy; 2022-2023 Hadik-Art, all rights reserved
    </div>
  </footer>
</template>

<style scoped>

/* @import "./assets/main.css" (max-with: 800px); Ez nem működik */
.app-header {
  text-align: center;
}

.navigation {
    font-family: Arial;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 2rem;
  }

  .nav-ul {
    display: flex;
    list-style-type: none;
  }

.nav-ul-li {
  color:aquamarine;
  display: inline-block;
  font-size: 1.5rem;
  padding: 0 1rem;
  text-decoration: none;
  }

  .main-container {
    /* display: flex; */
    min-height: 100vh;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    /* position: relative; */
    margin: auto;
  }

.footer-div{
    /* background-color: #bbb; */
    color: orange;
    font-size: 1.5rem;
    position: absolute;
    flex-shrink: 0;
    /* bottom: 0; */
    width: 100%;
    height: 2.5rem; 
    margin-top: 1rem;
    text-align: center; 
}

</style>
