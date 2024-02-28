<template>
    <Header/>
    <Breadcrumbre/>
    <div class="container max-w-[1000px] m-auto bg-neutral-100 ">
        <nav>
            <div class="nav flex  justify-between">
                <div class="navv flex w-[500px] pl-2 ">
                    <div class="image-container flex justify-center items-center h-full  ">
                        <NuxtImg class="img max-w-full max-h-full object-contain" :src="infos[4].img1"/>
                    </div>
                    <div class="imge w-[125px] p-4 flex flex-wrap gap-5 ">
                        <nuxtImg  class="w-full" :src="infos[4].img2" alt="" />
                        <nuxtImg  class="w-full" :src="infos[4].img3" alt="" />
                        <nuxtImg  class="w-full"  :src="infos[4].img4" alt="" />
                        <nuxtImg  class="w-full" :src="infos[4].img5" alt="" />
                        
                    </div>
                </div>
                <div class="navvv pr-2 pt-10 w-[50%]">
                    <h3 class="h3 text-xl text-M_Blue font-bold">{{ infos[4].product_name }}</h3>
                    <br><br>
                    
                    <div class="flex justify-between text-2xl font-bold">
                        <h2>ราคา</h2>
                        <h2><span class="text-M_Blue">{{ infos[4].product_price }}</span> <span class="text-red-500">บาท</span></h2><br>
                    </div>
                    <br>
                    
                    <div >
                        <p class=" text-blue text-lg font-bold">รายละเอียดเพิ่มเติม</p>
                        <div class="flex">
                            <div>
                                <span class="text-M_Blue">สถานะสินค้า :</span> <span class="text-red-500">เสื้อมือสอง</span><br>
                                <span class="text-M_Blue">ยี่ห้อ :</span> <span class="text-red-500">-</span><br>
                                <span class="text-M_Blue">ขนาด :</span> <span class="text-red-500">Size L</span><br>
                                <span class="text-M_Blue">ประเภท :</span> <span class="text-red-500">เสื้อ</span><br>
            
                            </div>
                        </div>                
                    </div>
                    <div class="flex mt-10 pl-48 justify-end pr-16 ">
                        <Buy_and_add/>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div class="container flex-col max-w-[1000px] m-auto pt-5">
        <div class=" flex">
            <div class="hero w-[50%] h-32 br-5 rounded-2xl flex bg-gradient-to-r from-blue to-cyc   ">
                <div class="justify-start pl-3 ">
                    <nuxt-img class="w-16 h-16 rounded-full" :src="infos[4].user_profile" alt="" />
                </div>
                <div class="flex-col text-white pl-3">
                    <p>{{ infos[4].name }}</p>
                    <p>ผู้ติดตาม {{ infos[4].follow }}</p>
                </div>
                <div class="vv pl-32  ">
                    <div class=" ml-3 w-full flex ">
                        <button > <Buttonfol/> </button>                       
                    </div>
                    <div class="w-5 grid ml-3 lg:w-full lg:flex lg:ml-3 ">
                        <a href="/traveler/products/userpro"><button class="btn rounded-full text-sm hover:bg-D_Blue bg-M_Light text-M_Blue hover:text-M_Light mt-1 h-[40px] w-[120px] border-none ">
                            <p>ดูร้านค้า</p>
                        </button></a>
                    </div>
                </div>
            </div>
            <div class=" bg-neutral-100 w-[50%] h-32 br-5 ml-3 rounded-md">
                <div class="pl-5 pt-2">
                    <p class=" text-blue text-lg font-bold">รายละเอียดเพิ่มเติม</p>
                    <div class="flex">
                        <div>
                            <span >- ใส่ไม่ค่อยบ่อยเฉพาะไปเรียนวิชาสาขา</span> <br>
                            <span >- นัดรับได้แถวหน้ามอ</span> <br>
                        </div>
                    </div>                
                </div>
            </div>
        </div>       
    </div>
    <div class="ml-10">
        <Card2 :hname="'สินค้าที่คุณอาจสนใจ'" />
    </div>

 
</template>

<script>
import { ref } from 'vue'
import info from "/Data/DB_sell.json"

const infos = ref(info)


export default {
  setup() {
    const infos = ref(info)
    return { infos }
  }
}


</script>