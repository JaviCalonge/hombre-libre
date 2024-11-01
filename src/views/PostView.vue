<script setup>
import postData from "../assets/posts.json";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref(null);

onMounted(() => {
  const postId = parseInt(route.params.id); // Convierte el id de la URL a número
  post.value = postData.find((p) => p.id === postId);
});

</script>

<template>
  <div class="main" v-if="post">
    <article>
      <h2 class="blog-title">{{ post.titulo }}</h2>
      <h5 class="date">{{ post.fecha }}</h5>

      <p>{{ post.descripcion }}</p>

      <img
        class="imagen"
        v-if="post.imagenpost"
        :src="post.imagenpost"
        alt="Imagen del post"
      />
      <br/>
      <br/>
      <img
        class="etiqueta"
        :src="post.imagen"
        alt="Etiqueta"
        width="13"
        height="13"
      />
      <RouterLink :to="post.link">{{ post.etiqueta }}</RouterLink>
    </article>
  </div>
  <a v-if="showGoUp" class="go-up" href="#header">Go up</a>
</template>