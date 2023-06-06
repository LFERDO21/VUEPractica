<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>VueRoute</template>

    Mas informacion sobre
    <router-link to="/VueRoutePage">VueRoute</router-link>
    pagina oficial
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
  </WelcomeItem>
</template>