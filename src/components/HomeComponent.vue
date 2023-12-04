<script>
import { reactive } from "vue"
import axios from "redaxios"

export default {
  name: "Home",
  setup() {
    const data = reactive({
      username: '',
      
    });
    
    return {
      data
    }
  }
}
  
</script>

<template>
  <h1>Home Component</h1>
  
</template>

<style>
 header {
  line-height: 1.5;
  max-height: 100vh;
}

h1 {
  color: white;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } 
}
</style>