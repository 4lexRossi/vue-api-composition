<template>
  <div class="home">
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>

<!--composition rigth way-->
<script setup>
import { ref } from 'vue';

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};

const decreaseCounter = () => {
  counter.value--;
};
</script>

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
</style>
