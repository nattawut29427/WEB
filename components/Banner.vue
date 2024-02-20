
<template>
  <div class="inline-flex relative carousel w-[350px] h-[250px] mx-[40px] mt-[190px] lg:w-[1200px] lg:h-[350px] lg:mx-[370px] lg:mt-[200px]">
    <div class="flex">
      <div v-for="(pic, index) in pics" :key="pic.pic" class="w-full pic min-w-full transition-opacity duration-1000" :class="{ 'opacity-0': currentPicIndex !== index, 'opacity-100': currentPicIndex === index }">
        <img
          :src="pic.pic"
          class="w-full h-[250px] lg:w-full lg:h-[350px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import picData from "/Data/test.json";

const pics = ref(picData);
let currentPicIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentPicIndex.value = (currentPicIndex.value + 1) % pics.value.length;
  }, 5000); // 
});
</script>

<style scoped>
.pic {
  position: absolute;
  transition: opacity 1s ease-in-out;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>
