<template>
  <div id="body w-fit">
    <div class="flex text-center relative items-start justify-start">
      <h1 class="absolute text-xl mt-[100px] ml-[50px] lg:text-3xl font-bold lg:mt-[150px] lg:ml-[360px]">
        {{hname}}
      </h1>
    </div>

    <div class=" grid grid-cols-2 ml-8 mr-4 gap-y-6 lg:flex text-center lg:gap-2 lg:ml-10 mt-[150px] lg:mt-[250px] justify-center">
      <div
        v-for="user2 in users2"
        :key="user2.id"
        class="card jus card-compact w-[180px]  lg:w-[300px] bg-base-100 shadow-xl"
      >
        <NuxtLink :to="user2.link_page" target="_blank">
          <figure>
            <nuxt-img class="h-[200px] lg:h-[320px] w-fit" :src="user2.product_img" alt="" />
          </figure>
        </NuxtLink>
        <div class=" lg:card-body p-3   h-[150px] lg:h-full">
          <h2 class="card-title text-[10px] lg:text-[18px]  font-bold">{{ user2.product_name }}</h2>
          <p class="text-start lg:text-[18px] font-bold lg:mb-4">
            {{ user2.product_price }}
          </p>
          <div class="card-actions  justify-between">
            <div class="avatar hidden sm:block">
              <div class="w-11 bottom-1 rounded-full border-2 border-Light">
                <nuxt-img :src="user2.user_profile" alt="" />
              </div>
            </div>
            <div class="mr-10 lg:mr-7">
              <p class="text-start hidden sm:block font-bold">{{ user2.name }}</p>
              <p class="mt-1 hidden sm:block text-sm text-M_Gray">
                ผู้ติดตาม {{ user2.follow }}
              </p>
            </div>
            <Buttoncalll/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import userData from "/Data/DB_card2.json";
import { ref } from "vue";


const users2 = ref(userData);




const props = defineProps({
  hname: {
    type: String,
    default: "สินค้าล่าสุด",
  },

})





</script>
