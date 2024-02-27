<template>
  <div class="grid mt-10 mr-3 gap-y-7   lg:flex items-center justify-center lg:mt-[200px]">
    <div
      class="card rounded-[24px] w-[290px] ml-7 h-80 lg:w-[390px] lg:h-[400px] text-white bg-l_Gray shadow-xl"
      v-for="user in users" :key="user.id">
      <div class="card-body p-[12px] rounded-t-[24px]  bg-D_Black">
        <div class="flex justify-between">
          <div class="flex">
            <div class="avatar absolute">
              <div
                class="w-10 rounded-full mt-2 ring ring-primary ring-offset-base-100 ring-offset-2"
              >
              <nuxt-img :src="user.user_profile" alt="" /> 
              </div>
            </div>
            <div class="inline-block">
              <p class="ml-[55px] font-bold">{{ user.name }}</p>
              <p class="ml-[55px] mt-1 text-sm text-L_Gray">ผู้ติดตาม {{user.follow}}</p>
            </div>
          </div>
          <div
            class="flex justify-center items-center lg:text-xl font-bold text-center"
          >
            <div class="mr-2 w-[25px] h-[25px] rounded-lg lg:w-[35px] lg:h-[35px]  r bg-T-gray">
              <p class="lg:pt-[3px]" id="Htime">{{ hours }}</p>
            </div>
            <div class="mr-2 w-[25px] h-[25px]   lg:w-[35px] lg:h-[35px] rounded-lg bg-T-gray">
              <p class="lg:pt-[3px] Mtime">{{ min }}</p>
            </div>
            <div class="mr-3 w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]  rounded-lg bg-T-gray">
              <p class="lg:pt-[3px]" id="Mtime">{{ sec }}</p>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink  :to=user.link_page><figure class="relative">
        <nuxt-img class="h-[300px] lg:h-[320px] w-auto" :src="user.product_img" alt="" /> 
        <a></a><button
          class="btn bg-D_Black border-0 font-thin text-[16px]  text-white absolute w-[130px] bottom-0 right-3 mb-2 text-center hover:bg-T-gray lg:ml-[250px] lg:mt-[250px] rounded-3xl h-[45px]"
        >
             เข้าร่วมประมูล
        </button>
      </figure></NuxtLink>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import userData from "/Data/DB_cardlog.json";

const users = ref(userData);

const props = defineProps({
  endtime: {
    type: String,
    default: "",
  },
  hname: {
    type: String,
    default: "",
  },
  new_img: {
    type: String,
    default: "",
  }
});




const hours = ref(0);
const min = ref(0);
const sec = ref(0);




function Time() {
  let endtime = new Date(props.endtime).getTime();
  let currenttime = new Date();
  let mstime = currenttime.getTime();
  let countdown = endtime - mstime;

  let timesecons = parseInt((countdown / 1000) % 60);
  let timemin = parseInt((countdown / (1000 * 60)) % 60);
  let timehours = parseInt(countdown / (1000 * 60 * 60));

  timehours = timehours < 10 ? "0" + timehours : timehours;
  timemin = timemin < 10 ? "0" + timemin : timemin;
  timesecons = timesecons < 10 ? "0" + timesecons : timesecons;

  hours.value = timehours;
  min.value = timemin;
  sec.value = timesecons;
}

setInterval(Time, 1000);
</script>
