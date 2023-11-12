<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome completo</th>
        <th>Telefone</th>
        <th>E-mail</th>
        <th>Acompanhantes</th>
        <th>1ª confirmação</th>
        <th>2ª confirmação</th>
        <th>3ª confirmação</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="convidado in convidados" :key="convidado.id">
        <td> {{ convidado.id }}</td>
        <td> {{ convidado.nome }}</td>
        <td>{{ convidado.telefone }}</td>
        <td> {{ convidado.email }}</td>
        <td>
          <div v-if="convidado.acompanhantes && convidado.acompanhantes.length">
            <span v-for="ac in convidado.acompanhantes" :key="ac.id"> {{ ac.nome }}</span>
          </div>
          <button v-else class="btn btn-primary" type="button" @click="carregar(convidado)">carregar</button>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button class="btn btn-primary" type="button" @click="remover(convidado)">Remover</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ConvidadoListagemPage',
  async asyncData({ $axios }) {
    const convidados = await $axios.$get(`http://localhost:3000/convidado`)
    return { convidados }
  },
  methods: {
    async load() {
      this.convidados = await this.$axios.$get(`http://localhost:3000/convidado`)

    },
    async remover(convidado) {
      await this.$axios.$delete(`http://localhost:3000/convidado/${convidado.id}`)
      this.load()
    },
    async carregar(convidado) {
      const completo = await this.$axios.$get(`http://localhost:3000/convidado/complete/${convidado.id}`)
      convidado.acompanhantes = completo.acompanhantes;
      this.$forceUpdate();
    }
  }
}

</script>

<style scoped>
fieldset,
div {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px
}

input,
button {
  padding: 10px
}
</style>
