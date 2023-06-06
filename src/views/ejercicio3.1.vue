<template>
  <div>
    <div>
      <h2>Contador {{ contador }}</h2>
      <button @click="incrementar">Aumentar</button>
    </div>

    <h2>Click</h2>
    <button @click="handleClick">Haz clic aquí</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  mounted() {
    // Recuperar el valor del contador del localStorage si está disponible
    const storedCounter = localStorage.getItem('contador');
    if (storedCounter !== null) {
      const parsedCounter = parseInt(storedCounter);
      if (!isNaN(parsedCounter)) {
        this.contador = parsedCounter;
      }
    }
  },
  methods: {
    incrementar() {
      this.contador++;
      // Guardar el valor actual del contador en el localStorage
      localStorage.setItem('contador', this.contador.toString());
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
