<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
  <nav class="nav">
    <ul class="nav-bar">
      <RouterLink to="/">
        <li>Home</li>
      </RouterLink>
      <RouterLink to="/libertad">
        <li>Libertad</li>
      </RouterLink>
      <RouterLink to="/finanzas">
        <li>Finanzas</li>
      </RouterLink>
      <RouterLink to="/fuerza">
        <li>Fuerza</li>
      </RouterLink>
      <RouterLink to="/humor">
        <li>Humor</li>
      </RouterLink>
      <RouterLink to="/contacto">
        <li>Contacto</li>
      </RouterLink>
    </ul>
  </nav>
</template>