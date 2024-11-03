<script setup>
import { ref } from "vue";
import { db } from "../firebaseConfig"  // Ajusta la ruta según la ubicación de tu archivo de configuración
import { collection, addDoc } from "firebase/firestore";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const errors = ref({});
const successMessage = ref("");

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const handleSubmit = async () => {
  errors.value = {}; // Resetear errores
  let isValid = true;

  // Validación de campos
  if (!form.value.name) {
    errors.value.name = "El nombre es requerido.";
    isValid = false;
  }

  if (!form.value.email) {
    errors.value.email = "El email es requerido.";
    isValid = false;
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = "Email no válido.";
    isValid = false;
  }

  if (!form.value.message) {
    errors.value.message = "El mensaje es requerido.";
    isValid = false;
  }

  if (isValid) {
    try {
      // Enviar datos a Firebase
      await addDoc(collection(db, "contactMessages"), {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        timestamp: new Date(),
      });

      successMessage.value = "¡Mensaje enviado con éxito!";
      // Resetear el formulario
      form.value = { name: "", email: "", message: "" };
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      successMessage.value = "Error al enviar el mensaje.";
    }
  } else {
    successMessage.value = ""; // Limpiar mensaje de éxito si hay errores
  }
};
</script>


<!-- <script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const errors = ref({});
const successMessage = ref("");

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const handleSubmit = () => {
  errors.value = {}; // Resetear errores
  let isValid = true;

  // Validación de campos
  if (!form.value.name) {
    errors.value.name = "El nombre es requerido.";
    isValid = false;
  }

  if (!form.value.email) {
    errors.value.email = "El email es requerido.";
    isValid = false;
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = "Email no válido.";
    isValid = false;
  }

  if (!form.value.message) {
    errors.value.message = "El mensaje es requerido.";
    isValid = false;
  }

  if (isValid) {
    successMessage.value = "¡Mensaje enviado con éxito!";
    // Aquí puedes agregar la lógica para enviar el formulario
    // Resetear el formulario
    form.value = { name: "", email: "", message: "" };
  } else {
    successMessage.value = ""; // Limpiar mensaje de éxito si hay errores
  }
};
</script>-->


<template>
  <div class="formulario">
   <h1>Formulario de Contacto</h1>
  <div class="form">
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>
        <p v-if="errors.message" class="error">{{ errors.message }}</p>
      </div>

      <button type="submit">Enviar</button>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
    </form>
  </div>
</div>
</template> 