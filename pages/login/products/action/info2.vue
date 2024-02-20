<template>
    <Header/>
    <Breadcrumb/>
    <div class="container max-w-[1000px] m-auto bg-neutral-100 ">
        <nav>
            <div class="nav flex  justify-between">
                <div class="navv flex w-[500px] pl-2 ">
                    <div class="image-container flex justify-center items-center h-full  ">
                        <NuxtImg class="img max-w-full max-h-full object-contain" :src="infos[0].img1"/>
                    </div>
                    <div class="imge w-[125px] p-5 flex flex-wrap gap-5 ">
                        <nuxtImg  class="w-full" :src="infos[0].img2" alt="" />
                        <nuxtImg  class="w-full" :src="infos[0].img3" alt="" />
                        <nuxtImg  class="w-full"  :src="infos[0].img4" alt="" />
                        <nuxtImg  class="w-full" :src="infos[0].img5" alt="" />
                        
                    </div>
                </div>
                <div class="navvv pr-2 pt-10">
                    <h3 class="h3 text-xl text-M_Blue font-bold">{{ infos[0].product_name }}</h3>
                    <a>จำนวนผู้ประมูล 2 คน</a>
                    <br><br>
                    
                    <div class="flex justify-between text-2xl font-bold">
                        <h2>ราคาตอนนี้</h2>
                        <h2><span class="text-M_Blue">{{ infos[0].product_price }}</span> <span class="text-red-500">บาท</span></h2><br>
                    </div>
                    <br>
                    <span class=".">ผู้ประมูลล่าสุด</span> <span class="text-M_Blue">List_re</span>
                    
                    <div class="w-full flex ">
                        <button class="btn rounded-full bg-gradient-to-r ml-60  hover:bg-D_Blue bg-M_Light text-M_Blue hover:text-M_Light mt-10  h-[40px] w-[200px] text-base ">
                            <p>ประมูลตอนนี้</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div class="container flex-col max-w-[1000px] m-auto pt-5">
        <div class=" flex">
            <div class="hero w-[50%] h-32 br-5 rounded-2xl flex bg-gradient-to-r from-blue to-cyc   ">
                <div class="justify-start pl-3 ">
                    <nuxt-img class="w-16 h-16 rounded-full" :src="infos[0].user_profile" alt="" />
                </div>
                <div class="flex-col text-white pl-3">
                    <p>{{ infos[1].name }}</p>
                    <p>ผู้ติดตาม {{ infos[0].follow }}</p>
                </div>
                <div class="vv pl-32  ">
                    <div class=" ml-3 w-full flex ">
                        <button > <Buttonfol/> </button>                       
                    </div>
                    <div class="w-5 grid ml-3 lg:w-full lg:flex lg:ml-3 ">
                        <button class="btn rounded-full text-sm hover:bg-D_Blue bg-M_Light text-M_Blue hover:text-M_Light mt-1 h-[40px] w-[120px] border-none ">
                            <p>ดูร้านค้า</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class=" bg-neutral-100 w-[50%] h-32 br-5 ml-3 rounded-md">
                <div class="pl-5">
                    <p class=" text-blue text-lg font-bold">รายละเอียดสินค้า</p>
                    <div class="flex">
                        <div>
                            <span class="text-M_Blue">สถานะสินค้า:</span> <span class="text-red-500">มือสองสภาพใหม่ๆ</span><br>
                            <span class="text-M_Blue">วันที่เริ่มประมูล:</span> <span class="text-red-500">16/01/2024</span><br>
                            <span class="text-M_Blue">วันที่สิ้นสุดการประมูล:</span> <span class="text-red-500">19/01/2004</span>
                        </div>
                        <div class="pl-20">
                            <span class="text-M_Blue">ยี่ห้อ:</span> <span class="text-red-500">Nixe Hoodio</span><br>
                            <span class="text-M_Blue">ขนาด:</span> <span class="text-red-500">M</span><br>
                            <span class="text-M_Blue">ประเภท:</span> <span class="text-red-500">เสื้อผ้า</span>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>       
    </div>
    

    <div class="container max-w-[1000px] m-auto pt-10">
        <div class="font-bold text-lg">รายละเอียดเพิ่มเติม</div>
        <ul class="inline-block">
            <li>Vintage Y2K Nike Red Hoodie</li><br>
            <li>Size : (22/28)</li>
            <li>ตำหนิ : -</li>
            <li>สภาพ: 10/10</li>
            <li>ปิดด่วน : 1,600 THB</li><br>
            <li>ค่าจัดส่ง +40 หรือนัดรับหน้ามอ</li>
            <li>*งานมือสองขอคนรับได้ อาจมีตำหนิเล็กน้อย*</li>
            
        </ul>
    </div>
    <div class="ml-10">
        <Card2 :hname="'สินค้าที่คุณอาจสนใจ'" />
    </div>
  
    

 
</template>

<script>
import { ref } from 'vue'
import info from "/Data/DB_infoaction.json"

const infos = ref(info)


export default {
  setup() {
    const infos = ref(info)
    return { infos }
  }
}


</script>