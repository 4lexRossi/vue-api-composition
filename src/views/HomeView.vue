<template>
  <div class="home" ref="myDiv">
    <h3>{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">- -</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">+ +</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<!--composition rigth way-->
<script setup>
/*
  imports
*/
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus';

/*
  counter
*/
const counter = useCounterStore();
</script>

<style>
.home {
  text-align: center;
  padding: 2em;
}
.btn,
.counter {
  font-size: 3em;
  margin: 0.5em;
}

.edit {
  margin-top: 3em;
}
</style>

<!--composition old way
<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter =  ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script>
-->

<!--
old way
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script>
-->
