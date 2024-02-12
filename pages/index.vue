<template>
  <Header />
  <div class="carousel w-fit h-[250px] mx-[40px] mt-[190px] md:w-[600px] md:mx-[90px]  lg:w-[1200px] lg:h-[350px]  lg:mx-[365px] lg:mt-[200px]   ">
    <div id="item1" class=" carousel-item  md:w-full w-full lg:w-full ">
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFyb3poZzJ5MDdjYjg2ajhsbjNuNTI0dGs5cHd0dmFuczUxaWp4ciZlcD12MV92aWRlb3Nfc2VhcmNoJmN0PXY/iqU07uixfQCjzr9aEd/200w.webp"
        class=" w-[350px]   md:w-[600px] lg:w-[1200px] lg:h-[350px]" >
    </div>
  </div>
  <div>
    <Button/>
  </div>
   <div class="flex text-center items-start justify-start">
    <h1 class="absolute text-3xl font-bold mt-[120px] ml-[360px]">
      สินค้าประมูล
    </h1>
  </div> 
   <div class="" >
    <Card  :endtime="endtime"/>
  </div>
  
   <Card2 />  
</template> 

<script setup>
import { ref } from "vue";
import userData from "/Data/DB_card.json";

const users = ref(userData);

let endtime = (users.value[0].Time); 




</script>
