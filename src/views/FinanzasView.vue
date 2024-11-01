<script setup>
import {computed} from "vue"
import posts from "../assets/posts.json"

const finanzasPosts = computed(() => {
  return posts.filter((post) => post.etiqueta === "Finanzas")
})
</script>

<template>
  <div>
    <h1>Posts sobre Finanzas</h1>
    <article v-for="post in finanzasPosts" :key="post.id">
      <a class="posts" :href="post.ruta">
        <h2 class="blog-title">{{ post.titulo }}</h2>
      </a>
      <h5 class="date">{{ post.fecha }}</h5>
      <p>
        {{ post.descripcion }}
        <a class="posts" :href="post.ruta">{{ post.seguir }}</a>
      </p>
      <img
        class="imagen"
        v-if="post['imagen-post']"
        :src="post['imagen-post']"
        alt="Imagen del post"
      />
      <br /><br />
      <img
        class="etiqueta"
        src="/src/img/etiqueta.png"
        alt="Etiqueta"
        width="13"
        height="13"
      />
      <a href="">{{ post.etiqueta }}</a>
    </article>
  </div>
</template>