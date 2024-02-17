<template>
  <div class="grid   lg:flex items-center justify-center mt-[200px]">
    <div
      class="card rounded-[24px] ml-7 h-80 lg:w-[390px] lg:h-[400px] text-white bg-l_Gray shadow-xl"
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
            class="flex justify-center items-center text-xl font-bold text-center"
          >
            <div class="mr-2 w-[35px] h-[35px] rounded-lg r bg-T-gray">
              <p class="pt-[3px]" id="Htime">{{ hours }}</p>
            </div>
            <div class="mr-2 w-[35px] h-[35px] rounded-lg bg-T-gray">
              <p class="pt-[3px] Mtime">{{ min }}</p>
            </div>
            <div class="mr-3 w-[35px] h-[35px] rounded-lg bg-T-gray">
              <p class="pt-[3px]" id="Mtime">{{ sec }}</p>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <nuxt-img class="h-[320px] w-auto" :src="user.product_img" alt="" /> 
        <button
          class="btn bg-D_Black border-0 font-thin text-[16px]  text-white absolute w-[130px] text-center hover:bg-T-gray lg:ml-[250px] lg:mt-[250px] rounded-3xl h-[45px]"
        >
             เข้าร่วมประมูล
        </button>
      </figure>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import userData from "/Data/DB_card.json";

const users = ref(userData);

const props = defineProps({
  endtime: {
    type: String,
    default: "",
  },
  new_img: {
    type: String,
    default: "",
  }
});


const new_img = ref('');

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
