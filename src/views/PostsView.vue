<template>
  <div class="posts">
    <h1>Posts</h1>
  </div>

  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
    </li>
  </ul>

  <textarea v-autofocus />

  <div>
    <button
    @click="counter.increaseCounter(1)"
      class="counter-button"
      :class="{ yellow: counter.oddOrEven === 'odd' }"
    >{{counter.count}}</button>
  </div>
</template>

<script setup>
/*
  imports
*/
import { vAutofocus } from '@/directives/vAutofocus';
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

/*
  posts
*/
const posts = ref([
  {
    id: 'id1',
    title: 'Post 1',
  },
  {
    id: 'id2',
    title: 'Post 2',
  },
  {
    id: 'id3',
    title: 'Post 3',
  },
]);

/*
  counter
*/
const counter = useCounterStore();

</script>

<style scoped>
ul {
  margin-bottom: 1em;
}
.counter-button {
  width: 100%;
  background-color: grey;
  border-radius: 0.3em;
  font-size: 3em;
}
.yellow {
  background-color: yellow;
}
</style>
