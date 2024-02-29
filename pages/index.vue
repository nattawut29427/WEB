<template>
  <div class="w-[430px] lg:w-full">


  <Header />
  <Banner/>
  <div class="w-fit ml-2 lg:w-full">
    <Button/>
  </div>
   <div class="flex mt-10 ml-10 relative w-[50] text-center lg:">
    <h1 class="absolute  text-xl font-bold lg:text-3xl lg:mt-[120px] lg:ml-[320px] ">
      สินค้าประมูล
    </h1>
  </div> 
   <div class="" >
    <Card  :endtime="'2 March 2024'"/>
  </div>
  <div class="lg:ml-4">
    <Card2nore :hname="'สินค้าล่าสุด'"/>  
  </div>
</div>
</template> 

<script setup>
import { ref } from "vue";
import userData from "/Data/DB_card.json";

const users = ref(userData);

let endtime = (users.value[0].Time); 




</script>
