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
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">VueRoute</a>
    pagina oficial 
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    
  </WelcomeItem>

</template>
