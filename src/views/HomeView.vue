<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">- -</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">+ +</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter title:</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<!--composition rigth way-->
<script setup>
/*
  imports
*/
  import { reactive, computed, watch } from 'vue';

/*
  something
*/

/*
  counter
*/
  const counterData = reactive({
    count: 0,
    title: 'My counter',
  });

  watch(() => counterData.count, (newCount) => {
    if (newCount === 20) {
      alert('Congratz')
    }
  })

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) {
      return 'even';
    }
    return 'odd';
  });

  const increaseCounter = (amount) => {
    counterData.count += amount;
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };
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
