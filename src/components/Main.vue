<script setup>
import postData from "../assets/posts.json";
import { ref, onMounted, onUnmounted } from "vue";

const posts = ref(postData);
const showGoUp = ref(false);

const handleScroll = () => {
  // Muestra el enlace si el scroll es mayor a 1200px
  showGoUp.value = window.scrollY > 1200;
};

//Agrega el listener cuando el componente se monta y lo elimina al desmontarse
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
 });

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<template>
  <div class="main">
    <article v-for="post in posts" :key="post.id">
      <a class="posts" :href="post.ruta">
        <h2 class="blog-title">{{ post.titulo }}</h2>
      </a>

      <h5 class="date">{{ post.fecha }}</h5>

      <p>
        {{ post.descripcion }}
        <a class="posts" :href="post.ruta">{{ post.seguir }}</a>
      </p>
      <!-- Comprobar si 'imagen-post' no es null antes de renderizar la imagen -->
      <img
        class="imagen"
        v-if="post['imagen-post']"
        :src="post['imagen-post']"
        alt="Imagen del post"
      />
      <br />
      <br />
      <img
        class="etiqueta"
        src="/src/assets/img/etiqueta.png"
        alt="Etiqueta"
        width="13"
        height="13"
      /><a href="">{{ post.etiqueta }}</a>
    </article>
  </div>
  <a v-if="showGoUp" class="go-up" href="#header">Go up</a>
</template>
