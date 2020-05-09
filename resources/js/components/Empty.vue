<template>
  <section class="bg-red-700 text-center p-3 text-white">
      {{message}}
  </section>
</template>

<script>
    export default {
        props:{
            message: {
                required: true,
                type: String
            }
        }
    }
</script>

<style>

</style>