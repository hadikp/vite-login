<script>
export default {

}
</script>

<template>
  <h1>Home Component</h1>
  <button type="button" class="btn btn-primary">Save changes</button>
  
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