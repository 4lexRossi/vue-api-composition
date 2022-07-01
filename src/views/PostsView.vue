<template>
  <div class="posts">
    <h1>Posts</h1>
  </div>

  <ul>
    <li>
      <RouterLink to="/postDetail/id1">post 1</RouterLink>
    </li>
    <li>
      <RouterLink to="/postDetail/id2">post 2</RouterLink>
    </li>
    <li>
      <RouterLink to="/postDetail/id3">post 3</RouterLink>
    </li>
  </ul>

  <textarea v-autofocus />
</template>

<script setup>
/*
  imports
*/
  import { vAutofocus } from '@/directives/vAutofocus';
</script>

<style scoped>
ul {
  margin-bottom: 1em;
}
</style>