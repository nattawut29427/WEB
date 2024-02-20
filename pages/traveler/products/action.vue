<template>
  <Header />
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
    <div class="w-[950px] h-full">
      <div class="w-full grid grid-cols-2 pl-10 gap-y-10  h-[500px] mt-[200px]">
       <Cardaction :endtime="'19 February 2024'"/>
    </div>
  </div>
</div>
</template>

<!-- /////////////////////////////////////------------------- SCRIPT -------------///////////////////////////////////////////////////////////// -->

<script>
import userData from "/Data/DB_card.json";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "datapro",
  data() {
    return {
      datapros: {},
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get(
          "https://script.google.com/macros/s/AKfycbxMGpjiViX2CUy1cOCjhFM8ZNTrFZJLw958TNCRewAPGlza6pQU5V7Bi7_Be1nLPzwj4A/exec?action=getUsers"
        )
        .then((res) => {
          this.datapros = res.data;
          console.log(this.datapros);
        });
    },
  },
};

const users1 = ref(userData);
</script>
