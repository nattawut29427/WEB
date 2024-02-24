<template>
    <Header/>
    <Breadcrumb/>
    <div class="container max-w-[1000px] m-auto bg-neutral-100 ">
        <nav>
            <div class="nav flex  justify-between">
                <div class="navv flex w-[500px] pl-2 ">
                    <div class="image-container flex justify-center items-center h-full  ">
                        <img class="img max-w-full max-h-full object-contain" src="https://i0.wp.com/www.playboybagthailand.com/wp-content/uploads/2023/03/playboy3-174.jpg?fit=1000%2C1000&ssl=1" alt="">
                    </div>
                    <div class="imge w-[125px] p-5 flex flex-wrap gap-5 ">
                        <img src="https://www.playboybagthailand.com/wp-content/uploads/2023/03/playboy3-154.jpg" alt="">
                        <img src="https://i0.wp.com/www.playboybagthailand.com/wp-content/uploads/2023/03/playboy3-168.jpg?fit=1000%2C1000&ssl=1" alt="">
                        <img src="https://i0.wp.com/www.playboybagthailand.com/wp-content/uploads/2023/03/playboy3-182.jpg?fit=1000%2C1000&ssl=1" alt="">
                        <img src="https://i0.wp.com/www.playboybagthailand.com/wp-content/uploads/2023/03/playboy3-186.jpg?fit=1000%2C1000&ssl=1" alt="">
                        
                    </div>
                </div>
                <div class="navvv pr-2 pt-10 w-[50%]">
                    <h3 class="h3 text-xl text-M_Blue font-bold">Playboy Shoe&Bag</h3>
                    <br><br>
                    
                    <div class="flex justify-between text-2xl font-bold">
                        <h2>ราคา</h2>
                        <h2><span class="text-M_Blue">500</span> <span class="text-red-500">บาท</span></h2><br>
                    </div>
                    <br>
                    
                    <div >
                        <p class=" text-blue text-lg font-bold">รายละเอียดเพิ่มเติม</p>
                        <div class="flex">
                            <div>
                                <span class="text-M_Blue">สถานะสินค้า :</span> <span class="text-red-500">มือสอง</span><br>
                                <span class="text-M_Blue">ยี่ห้อ :</span> <span class="text-red-500">Playboy</span><br>
                                <span class="text-M_Blue">ขนาด :</span> <span class="text-red-500">40Eu 25cm</span><br>
                                <span class="text-M_Blue">ประเภท :</span> <span class="text-red-500">อื่นๆ</span><br>
            
                            </div>
                        </div>                
                    </div>
                    <div class="flex mt-10 pl-48 justify-end pr-16 ">
                        <button
                            class="btn rounded-full hover:bg-M_Blue bg-M_Light text-M_Blue hover:text-M_Light "><i class="fa-solid fa-bag-shopping"></i>ใส่ตะกร้า
                        </button>
                        <button
                            class="btn rounded-full hover:bg-M_Blue bg-M_Light text-M_Blue hover:text-M_Light">แชท
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
                    <img class="w-16 h-16 rounded-full" src="https://i.pinimg.com/736x/f4/40/8a/f4408ae59bc76f809d049fcc92cbea80.jpg">
                </div>
                <div class="flex-col text-white pl-3">
                    <p>นาย กุ๊กไก่ ซีวอค</p>
                    <p>ผู้ติดตาม 100k</p>
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
                <div class="pl-5 pt-2">
                    <p class=" text-blue text-lg font-bold">รายละเอียดเพิ่มเติม</p>
                    <div class="flex">
                        <div>
                            <span >-มีตำหนินิดหน่อยจากการใช้งาน</span> <br>
                            <span >-นัดรับได้แถวหน้ามอ</span> <br>
                        </div>
                    </div>                
                </div>
            </div>
        </div>       
    </div>

    <div class="mt-36">
        <Card3/>
        <Card3/>
    </div>

 
</template>