<template>
  <HeaderLogin />
  <div class="w-[1200px] flex justify-between h-[1500px] m-auto mt[100px]">
    <div class="w-[200px] h-full">
      <div class="w-[180px] m-auto justify-center flex mt-[200px] h-[1100px]">
        <div class="w-full">
          <h2 class="text-[20px] font-bold">ค้นหาเเบบละเอียด</h2>
          <div class="w-full h-fit mt-5 m-auto">
            <p class="font-medium">บริการเเละโปรโมชั่น</p>
            <div class="form-control w-[200px] mt-4">
              <label class="label cursor-pointer w-full">
                <input type="checkbox" class="checkbox" />
                <span class="label-text mr-[125px]">ส่งฟรี</span>
              </label>
              <label class="label cursor-pointer w-full">
                <input type="checkbox" class="checkbox" />
                <span class="label-text mr-[115px]">ส่วนลด</span>
              </label>
            </div>
          </div>
          <div class="w-full h-fit mt-5 m-auto">
            <p class="font-medium">ช่วงราคา</p>
            <div class="form-control w-[200px] mt-4">
              <label class="label cursor-pointer w-full">
                <input type="checkbox" class="checkbox" />
                <span class="label-text mr-8">ราคาสูงสุด-ราคาต่ำสุด</span>
              </label>
              <label class="label cursor-pointer w-full">
                <input type="checkbox" class="checkbox" />
                <span class="label-text mr-8">ราคาต่ำสุด-ราคาสูงสุด</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="w-[950px] m-auto h-full">
        <div class="w-full grid grid-cols-3 gap-4 gap-y-8 h-[500px] mt-[200px]">
          <div
            v-for="(datapro, index) in datapros"
            :key="index"
            class="card jus card-compact w-[300px] h-fit bg-base-100 shadow-xl"
          >
            <NuxtLink :to="datapro.link_page" target="_blank">
              <figure>
                <nuxt-img
                  class="h-[300px] w-fit"
                  :src="datapro.pic"
                  alt=""
                />
              </figure>
            </NuxtLink>
            <div class="card-body">
              <h2 class="card-title font-bold">{{ datapro.name_product }}</h2>
              <p class="text-start text-[18px] font-bold ">
                ฿{{ datapro.price }}
              </p>

              <div class="card-actions mt-4 justify-between">
                <div class="avatar">
                  <div class="w-11 bottom-1 rounded-full border-Light">
                    <nuxt-img :src="datapro.user_profile" alt="" /> 
                  </div>
                </div>
                <div class="mr-5">
                  <p class="text-start font-bold">{{ datapro.user_Name }}</p>
                  <p class="mt-1 text-sm text-M_Gray">
                    ผู้ติดตาม {{ datapro.user_follow }}
                  </p>
                </div>
                <button
                  class="btn bg-D_Blue rounded-lg hover:bg-Light w-[100px] text-[16px] font-thin text-white"
                >
                  <img class="h-6 w-6" src="/pic/Send_light.png" />เเชท
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<!-- /////////////////////////////////////------------------- SCRIPT -------------///////////////////////////////////////////////////////////// -->

<script>
import userData from "/Data/DB_card2.json";
import axios from 'axios'



export default {
  name: "datapro",
  data() {
    return {
      datapros: {},
    }
  },
  mounted() {

    this.getdata();

  },
  methods: {

    getdata(){
      axios.get('https://script.google.com/macros/s/AKfycbxMGpjiViX2CUy1cOCjhFM8ZNTrFZJLw958TNCRewAPGlza6pQU5V7Bi7_Be1nLPzwj4A/exec?action=getUsers').then(res =>{

        this.datapros = res.data;
      });
    }
  }


}



const users2 = ref(userData);


</script>
