<script setup>
import { computed } from 'vue';
import posts from "@/assets/posts.json"

const humorPosts = computed(() => {
  return posts.filter((post) => post.etiqueta === "Humor")
})
</script>

<template>
  <div>
    <h1>Posts sobre Humor</h1>
    <article v-for="post in humorPosts" :key="post.id">
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
        v-if="post.imagenpost"
        :src="post.imagenpost"
        alt="Imagen del post"
      />
      <br /><br />
      <img
        class="etiqueta"
        src="/public/img/etiqueta.png"
        alt="Etiqueta"
        width="13"
        height="13"
      />
      <a href="">{{ post.etiqueta }}</a>
    </article>
  </div>
</template>