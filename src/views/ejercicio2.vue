<template>
    <h3>
      Directiva
    </h3>
        <h2>
        Explicacion
      </h2>
  
    <p>
      En Vue.js, una directiva es un atributo especial que se utiliza en la sintaxis de plantillas para aplicar comportamientos reactivos a los elementos del DOM. Las directivas se utilizan para manipular el DOM, agregar interactividad y aplicar lógica condicional en los componentes de Vue.
  
  Las directivas se reconocen en el marcado HTML por el prefijo v-, seguido del nombre de la directiva. Vue.js proporciona varias directivas incorporadas, como v-if, v-for, v-bind, v-on, v-model, v-show, entre otras.
  
  Cada directiva tiene un propósito específico y se utiliza para lograr una funcionalidad particular. Por ejemplo:
  
  <ul>
    <li>v-if se utiliza para renderizar condicionalmente un elemento basado en una expresión booleana.</li>
    <li>v-for se utiliza para iterar sobre una lista de elementos y generar contenido repetitivo.
  </li>
    <li>v-bind se utiliza para enlazar atributos o propiedades del DOM a expresiones o valores de datos en el componente.</li>
    <li>v-on se utiliza para escuchar eventos del DOM y ejecutar métodos o expresiones en respuesta a esos eventos.</li>
    <li>v-model se utiliza para crear una vinculación bidireccional entre un elemento de entrada y una propiedad de datos.</li>
  </ul>
  
  
  
  Las directivas son una parte fundamental de Vue.js y juegan un papel crucial en la creación de interfaces de usuario dinámicas y reactivas. Permiten agregar comportamiento y lógica a los componentes de Vue de manera declarativa y fácil de entender.
    </p>
    <br>
  
    <div>
      <p v-if="isDisplayed">Este párrafo se muestra si isDisplayed es verdadero.</p>
  
      <ul>
        <li v-for="item in items" :key="item.id">{{ item }}</li>
      </ul>
  
      <button v-bind:disabled="isDisabled">Haz clic</button>
  
      <input type="text" v-model="inputValue">
  
      <p v-show="isShown">Este párrafo se muestra/oculta con la directiva v-show.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDisplayed: true,
        items: ['Elemento 1', 'Elemento 2', 'Elemento 3'],
        isDisabled: false,
        inputValue: '',
        isShown: true
      };
    }
  };
  </script>
  <style scoped>
  
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    font-size: 2rem;
    top: -10px;
  }
  </style>
  