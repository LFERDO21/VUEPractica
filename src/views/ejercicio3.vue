<template>
    <div>
      <h3>
        Evento
      </h3>
      <h2>
        Explicacion
      </h2>
  
      <p>
        En el contexto de la programación, un evento es una acción o suceso que ocurre en un sistema y que puede ser detectado y procesado por el programa. Los eventos pueden ser generados por diversas acciones, como la interacción del usuario con una interfaz gráfica, la llegada de datos desde una fuente externa, el paso de tiempo, entre otros.
  
  En el desarrollo de aplicaciones, los eventos son utilizados para capturar y responder a las acciones que ocurren durante la ejecución del programa. Cuando se produce un evento, se genera una señal que informa al programa sobre lo sucedido y permite ejecutar una serie de instrucciones o desencadenar una función específica en respuesta al evento.
  
  Los eventos permiten la interactividad y la respuesta en tiempo real en las aplicaciones. Algunos ejemplos comunes de eventos son hacer clic en un botón, mover el mouse, presionar una tecla, enviar un formulario, recibir una llamada de red, entre otros.
  
  En resumen, un evento es un suceso que ocurre en un sistema y que puede ser detectado y utilizado para desencadenar acciones específicas en respuesta a dicho suceso. Los eventos son fundamentales para crear aplicaciones interactivas y receptivas a las acciones de los usuarios o a otros cambios en el entorno.
      </p>
      <br>
  
      <div>
        <h2>Contador {{ contador }}</h2>
        <button @click="incrementar">Aumentar</button>
      </div>
  
      <h2>Click</h2>
      <button @click="handleClick">Haz clic aquí</button>
    </div>
    <p>Revisar consola para saber cuatas veces se oprimiio el comando</p>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contador: 0
      };
    },
    methods: {
      incrementar() {
        this.contador++;
      },
      handleClick() {
        console.log('Se hizo clic en el botón');
        // Realizar acciones adicionales aquí
      }
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