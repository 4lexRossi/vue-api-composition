import { reactive, computed, watch, onMounted } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My counter',
});

export function UseCounter() {
/*
  counter
*/

  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) {
        alert('Congratz');
      }
    }
  );

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

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
