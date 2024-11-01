<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <h1 class="not-found-title">404 Not Found</h1>
  <h4 class="not-found-subtitle">Esta página no existe</h4>
  <RouterLink to="/"><button class="go-back">Go Back</button></RouterLink>
</template>