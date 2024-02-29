<template>
  <div class="navbar z-50 h-[130px] fixed bg-gradient-to-r from-blue to-cyc">
    <div class="absolute top-0 end-0 m-0 ">
      <div class="flex mr-4 mt-3 p-1
       text-white text-sm
      lg:mr-[250px] ">
        <div><p class="mr-4 cursor-pointer hidden sm:inline ">ช่วยเหลือ</p></div>
        <div><p class="mr-4 cursor-pointer hidden sm:inline ">ลงโฆษณา</p></div>
        <div><p class="mr-4 cursor-pointer hidden sm:inline ">ข้อกำหนด</p></div>
        <div><p class="mr-4 cursor-pointer hidden sm:inline ">ติดต่อเจ้าหน้าที่</p></div>
      </div>
    </div>
    <div class="navbar-start ml-0 mt-10  lg:ml-[262px]">
      <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost   lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-[22px] z-[1] p-2 shadow bg-base-100  w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-[32px] font-bold text-white ml-[2] lg:ml-0" href="/login/home">Second UP</a>
  </div>
  <div class="navbar-end hidden mr-[262px] mt-10 lg:flex">
    <ul class="menu menu-horizontal px-2">
        <div class="flex mt-2">
          <a href="/login/like"><li><img src="/pic/Favorite.png" alt="" /></li></a>
          <a href="/login/cart"><li><img src="/pic/Bag.png" alt="" /></li></a>
        </div>
        <li>
          <details>
            <summary class="text-white p-3 mr-1 ">
              <div class="avatar">
              <div class="w-11 bottom-1 rounded-full border-2 border-Light">
                <img src="https://i.pinimg.com/564x/1c/56/d1/1c56d1e6e3f002f4109a1f59e56cf292.jpg" alt="">
              </div>
            </div>
            ออยเอง
            </summary>
            <ul class="w-[180px] rounded-none flex justify-center">
              <div>
                <li>
                  <a href="/login/profile"><img src="/pic/User_alt_fill.png" alt="" />หน้าโปรไฟล์</a>
                </li>
                <li>
                  <a href="/login/like"><img src="/pic/Favorite (1).png" alt="" />รายการโปรด</a>
                </li>
                <li>
                  <a><img src="/pic/Info.png" alt="" />ช่วยเหลือ</a>
                </li>
                <li>
                  <a href="test-two-orcin-98.vercel.app"
                    ><img
                      src="/pic/Sign_in_squre_fill.png"
                      alt=""
                    />ออกจากระบบ</a
                  >
                </li>
              </div>
            </ul>
          </details>
        </li>
      </ul>
    <div>
  
    <a href="/login/form" class="btn w-[142px] rounded-3xl pr-6"><img src="/pic/Arhive_load_duotone_line.png" alt="" />ลงขาย</a>
  </div>
  </div>
</div>
</template>

