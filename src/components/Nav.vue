<script setup>
import { RouterLink, useRoute } from "vue-router";

const activeLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}

</script>

<template>
  <nav class="nav">
    <ul class="nav-bar">
      <RouterLink to="/">
        <li :class="[activeLink('/') ? 'active' : '' ]">Home</li>
      </RouterLink>
      <RouterLink to="/libertad">
        <li :class="[activeLink('/libertad') ? 'active' : '' ]">Libertad</li>
      </RouterLink>
      <RouterLink to="/finanzas">
        <li :class="[activeLink('/finanzas') ? 'active' : '' ]">Finanzas</li>
      </RouterLink>
      <RouterLink to="/fuerza">
        <li :class="[activeLink('/fuerza') ? 'active' : '' ]">Fuerza</li>
      </RouterLink>
      <RouterLink to="/humor">
        <li :class="[activeLink('/humor') ? 'active' : '' ]">Humor</li>
      </RouterLink>
      <RouterLink to="/contacto">
        <li :class="[activeLink('/contacto') ? 'active' : '' ]">Contacto</li>
      </RouterLink>
    </ul>
  </nav>
</template>