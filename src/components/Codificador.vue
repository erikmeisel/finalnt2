<template lang="html">

  <section class="src-components-codificador">
    <input type="text" v-model="texto" ><br/>
    <div v-if="largo>0">
      <p><strong>
      Cantidad: {{ largo }}
      </strong></p>
      <p><strong>
      {{ texto | coded }}
      </strong></p>
      <p><strong>
      {{ texto | ucase }}
      </strong></p>
      <p><strong>
      {{ texto | lcase }}
      </strong></p>
      <p><strong>
      {{ texto | ucasemix }}
      </strong></p>
      <p><strong>
      {{ texto | lcasemix }}
      </strong></p>
    </div>

    <p>
      Respuestas: 1:b 2:b 3:c 4:b 5:b 
    </p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-codificador',
    props: [],
    mounted () {

    },
    data () {
      return {
        texto:""
      }
    },
    methods: {

    },
    computed: {
      largo() {
        return this.texto.length
      },
    }
}


</script>

<style scoped lang="css">
  .src-components-codificador {

  }
</style>
