<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Casamento</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/" exact>Inicio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/cadastro/convidado" exact>Cadastros</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/listagem/convidado" exact>Listagems</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="content">
      <Nuxt />
    </div>
  </main>
</template>
<script>
export default {
  name:  'DefaultLayout',
  layout: 'default'
}
</script>
