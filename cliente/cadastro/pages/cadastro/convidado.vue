<template>
  <form @submit.prevent="salvar">
    <fieldset>
      <legend>Cadastrar convidado principal</legend>
      <div class="mb-3">
        <label class="form-label" for="nome">Nome Completo <small>(obrigatório)</small></label>
        <input id="nome" v-model="convidado.nome" class="form-control" type="text" name="nome" required />
      </div>
      <div class="mb-3">
        <label class="form-label" for="telefone">Telefone <small>(obrigatório)</small></label>
        <input id="telefone" v-model="convidado.telefone" class="form-control" type="tel" name="telefone" required />
        <span><small>WhatsApp se tiver.</small></span>
      </div>
      <div class="mb-3">
        <label class="form-label" for="email">E-mail</label>
        <input id="email" v-model="convidado.email" class="form-control" type="email" name="email" />
      </div>

      <button class="btn btn-primary"> Salvar </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'ConvidadoPage',
  data() {
    return {
      convidado: {
        nome: 'alan m. turing',
        telefone: '111111111111111'
      }
    }
  }, methods: {
    async salvar($event) {
      $event.preventDefault();
      const saved = await this.$axios.$post('http://localhost:3000/convidado', this.convidado)

      if (!saved) {
        alert("Ocorreu algum erro ao salvar, olhe os logs.")
        return;
      }
      this.convidado = {}
    }
  }
}
</script>
