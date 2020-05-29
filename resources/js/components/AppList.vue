<template>
  <section>
    <table class="text-center w-full">
      <thead class="bg-teal-500">
        <tr>
          <th v-for="(column,index) in columns" :key="index">
            <button @click="orderby(column)">
              <span class="uppercase font-black">
                {{column}} {{column ? order === 'asc' ? '&#8744;' : '&#8743;' : ''}}
              </span>
            </button>
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
    data:() => ({
      order:'asc'
    }),
    props:{
      columns: {
        required: true,
        type: Array
      },
      action:{
        required: true,
        type: String
      }
    },
    methods:{
      orderby(column){
        this.order = (this.order === 'asc') ? 'desc' : 'asc'
        const columns = {'id' : 'id', 'nombre' : 'name', 'f. publicación':'published_at', 'estado':'status','turno':'time'}
        this.$store.dispatch(this.action,{column:columns[column], order:this.order})
      }
    }
  }
</script>