<template>
  <HeaderLogin />
  <Banner/>
  <div class="ml-3">
    <Button_login/>
  </div>
   <div class="flex text-center items-start justify-start">
    <h1 class="absolute text-3xl font-bold mt-[120px] ml-[360px]">
      สินค้าประมูล
    </h1>
  </div> 
   <div class="ml-9" >
    <Cardlog  :endtime="'2 March 2024'"/>
  </div>
  <div class="ml-4">
    <Card2 :hname="'สินค้าล่าสุด'"/>  
  </div>
    
</template> 

<script setup>
import { ref } from "vue";
import userData from "/Data/DB_card.json";
import Button_login from "~/components/Button_login.vue";

const users = ref(userData);

let endtime = (users.value[0].Time); 




</script>
