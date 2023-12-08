<script>
import { onMounted, ref } from "vue"
import axios from "redaxios"

export default {
  name: "Home",
  setup() {
    const message = ref('You are not logged in');
    
    onMounted(async () => {
      const {data} = await axios.get("http://localhost:8080/api");
      message.value = `Hi ${data.username}`
    })
    return {
      message
    }
  }
}
  
</script>

<template>
  <h1>Home Component</h1>
  <h3>{{ message }}</h3>
  
</template>

<style>
 header {
  line-height: 1.5;
  max-height: 100vh;
}

h1 {
  color: white;
}

h3 {
  color: blue;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } 
}
</style>