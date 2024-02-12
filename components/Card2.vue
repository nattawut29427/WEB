<template>
  <div class="flex text-center items-start justify-start">
    <h1 class="absolute text-3xl font-bold mt-[150px] ml-[360px]">
      สินค้าล่าสุด
    </h1>
  </div>
  
  <div class="flex text-center gap-2 ml-10 mt-[250px] justify-center">
    <div v-for=" user2 in users2" :key="user2.id" class="card jus card-compact w-[300px] bg-base-100 shadow-xl">
      <NuxtLink :to="user2.link_page" target="_blank">
      <figure>
        <nuxt-img class="h-[300px] w-fit" :src="user2.product_img" alt="" /> 
      </figure>
    </NuxtLink>
      <div class="card-body">
        <h2 class="card-title font-bold">{{ user2.product_name }}</h2>
        <p class="text-start text-[18px] font-bold mb-4">{{ user2.product_price }}</p>
        <div class="avatar absolute left-[10px] bottom-3">
          <div
            class="w-10 m-1 absolute bottom-1 rounded-full border-2 border-Light"
          >
            <nuxt-img :src="user2.user_profile" alt="" /> 
          </div>
        </div>
        <div class="inline-block bottom-5 left-3 absolute">
          <p class="ml-[55px] text-start font-bold">{{ user2.name }}</p>
          <p class="ml-[55px] mt-1 text-sm text-M_Gray">ผู้ติดตาม {{ user2.follow }}</p>
        </div>
        <div class="card-actions justify-end">
          <button
            class="btn  bg-D_Blue rounded-lg hover:bg-Light w-[100px] text-[16px] font-thin text-white"
          >
            <img class="h-6 w-6" src="/pic/Send_light.png"/>เเชท
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import userData from "/Data/DB_card2.json";

const users2 = ref(userData);
</script>
