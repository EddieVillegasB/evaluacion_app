<template>
  <section>
    <table class="text-center w-full">
      <thead class="bg-red-600">
        <tr>
          <th v-for="(column,index) in columns" :key="index">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot>
        </slot>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    props:{
      columns: {
        required: true,
        type: Array
      }
    }
  }
</script>