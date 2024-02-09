<template>
  <div class="flex items-center justify-center mt-[200px]">
    <div
      class="card rounded-[24px] ml-7 w-[390px] h-[400px] text-white bg-l_Gray shadow-xl"
    >
      <div class="card-body p-[12px] rounded-t-[24px]  bg-D_Black">
        <div class="flex justify-between">
          <div class="flex">
            <div class="avatar absolute">
              <div
                class="w-10 rounded-full mt-2 ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="inline-block">
              <p class="ml-[55px] font-bold">USER</p>
              <p class="ml-[55px] mt-1 text-sm text-M_Gray">ผู้ติดตาม 100k</p>
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
        <img
          src="https://www.kito.co.th/wp-content/uploads/2019/07/Kito-BE7-Black-AA.jpg"
          alt="Shoes"
          class="h-[320px] w-auto"
        />
        <button
          class="absolute w-[120px] text-center ml-[250px] mt-[250px] rounded-3xl h-[45px] bg-T-gray"
        >
          <p class="p-2 font-400">เข้าร่วมประมูล</p>
        </button>
      </figure>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  endtime: {
    type: String,
    default: "",
  },
  new_img: {
    type: String,
    default: ""
  }
});


const new_img = ref();

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
