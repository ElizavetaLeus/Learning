<template>
  <div>
    <span>Counter:</span>
    <span>{{ count }}</span>
    </div>
    <button :class="$style.button" @click="increaseValue()">Click +</button>
    <button :class="[$style.button, count <= 0 && $style.buttonDisabled]" @click="decreaseValue()">Click -</button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(10);

const increaseValue = () => {
  count.value += 1;
};

const decreaseValue = () => {
  if (count.value > 0) {
    count.value -=1;
  }
};
</script>

<style module>
.button {
  padding: 10px 20px;
  background-color: rgb(200, 166, 231);
  color: black;
  border: 1px rgb(150, 62, 227) solid;
  margin-right: 10px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.buttonDisabled{
  padding: 10px 20px;
  background-color: rgba(176, 174, 177, 0.91);
  color: black;
  border: 1px rgb(99, 99, 100) solid;
  margin-right: 10px;
  border-radius: 10px;
  margin-top: 10px;
  transition: 0.3s;
}
</style>
