<template>
  <div>
    <h3>Ciclo For</h3>
    <h2>Explicacion</h2>
    <br>
    <p>
      El bucle v-for en Vue.js es una directiva que permite recorrer una matriz o un objeto y renderizar elementos en función de cada elemento del bucle. En el ejemplo que proporcionaste, el bucle v-for se utiliza para iterar sobre el array items y generar una lista de elementos li> en base a cada objeto dentro del array.

      El bucle v-for se encuentra en la siguiente línea del código:

      html
      Copy code
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      Aquí, item es una variable de iteración que representa cada objeto en el array items. Por cada objeto en items, se renderiza un elemento li con el nombre del elemento (item.name) como contenido.

      El atributo :key="item.id" se utiliza para proporcionar una clave única para cada elemento de la lista. Esta clave es importante para que Vue.js pueda rastrear y manejar eficientemente los elementos en el bucle.

      En el ejemplo, el bucle v-for recorre el array items y genera elementos de lista para cada objeto en el array. Cada elemento de la lista muestra el nombre del objeto (item.name).

      El método addItem se utiliza para agregar un nuevo elemento a la lista cuando se hace clic en el botón "Agregar". El valor del campo de entrada se agrega como un nuevo objeto con un ID único y se restablece el campo de entrada después de agregar el elemento.
    </p>
    <h2>Lista de elementos</h2>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ item.name }}
        <button @click="editarItem(index)">Editar</button>
        <button @click="eliminarItem(index)">Eliminar</button>
      </li>
    </ul>

    <input type="text" v-model="newItem">
    <button @click="addItem">Agregar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Python' },
        { id: 2, name: 'C++' },
        { id: 3, name: 'JS' }
      ],
      newItem: ''
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        const newId = this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1;
        this.items.push({ id: newId, name: this.newItem });
        this.newItem = '';
      }
    },
    editarItem(index) {
      const nuevoNombre = prompt('Ingrese el nuevo nombre:');
      if (nuevoNombre && nuevoNombre.trim() !== '') {
        this.items[index].name = nuevoNombre;
      }
    },
    eliminarItem(index) {
      this.items.splice(index, 1);
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
