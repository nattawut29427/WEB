<template>
  <HeaderLogin/>
  
  <div>
    <div class="navbar h-[230px] bg-white"></div>
    <img src="/pic/banner.jpg" class="w-full h-[400px] object-cover" />
  </div>

  <div class="flex justify-between">
    <div class="ml-[262px] flex items-center">
      <img
        src="https://i.pinimg.com/564x/1c/56/d1/1c56d1e6e3f002f4109a1f59e56cf292.jpg"
        class="rounded-full w-[250px] h-[250px] mt-[-100px] border-[15px] border-white"
      />
      <div class="">
        <div class="text-3xl text-pink-800 font-bold ml-[20px] flex">
          ออยเอง
          <img src="/pic/Edit_light (1).png" class="w-7 h-7 mt-2 ml-2" />
        </div>
        <div class="ml-4 mt-2 flex">
          <img src="/pic/Group_add_light.png" class="w-7 h-7" />
          <div class="ml-2">ผู้ติดตาม 12K</div>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div
        class="btn text-base  w-fit mr-[262px] rounded-3xl pr-6 bg-[#AEC8FC] text-[#1A37A7] hover:bg-D_Blue font-bold"
      >
        <p class="pl-1">แก้ไขโปรไฟล์</p>
      </div>
    </div>
  </div>


  <Card2like :hname="'สินค้าที่ถูกใจ'" class="m-0"/>
</template>


