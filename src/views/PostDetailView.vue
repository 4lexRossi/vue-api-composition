<template>
  <div class="post-detail">
    <h1>Post Page</h1>
    <p>Display id here: {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn2Seconds">Go home in 2 sec</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`id is: ${route.params.id}`);
};

const goHomeIn2Seconds = () => {
  setTimeout(() => {
    router.push('/');
  }, 2000);
};

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1',
    },
  });
};
</script>
