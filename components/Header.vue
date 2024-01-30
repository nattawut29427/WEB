<template>
  <div class="navbar h-[130px] fixed bg-gradient-to-r from-blue to-cyc">
    <div class="absolute top-0 end-0 m-4">
      <div class="flex mr-[250px] p-1 text-white text-sm">
        <div><p class="mr-4 cursor-pointer">ช่วยเหลือ</p></div>
        <div><p class="mr-4 cursor-pointer">ลงโฆษณา</p></div>
        <div><p class="mr-4 cursor-pointer">ข้อกำหนด</p></div>
        <div><p class="mr-4 cursor-pointer">ติดต่อเจ้าหน้าที่</p></div>
      </div>
    </div>
    <div class="navbar-start ml-[264px] mt-10">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
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
      <a class="btn btn-ghost text-[32px] font-bold text-white">Second UP</a>
    </div>
    <div class="navbar-center hidden ml-[900px] mt-10 lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><img src="/pic/Favorite.png" alt="" /></li>
        <li><img src="/pic/Bag.png" alt="" /></li>
        <li>
          <details>
            <summary class="text-white p-3 mr-1">ลงทะเบียน/เข้าสู่ระบบ</summary>
            <ul class="w-[180px] rounded-none flex justify-center">
              <div>
                <li>
                  <a><img src="/pic/User_alt_fill.png" alt="" />หน้าโปรไฟล์</a>
                </li>
                <li>
                  <a><img src="/pic/Favorite (1).png" alt="" />รายการโปรด</a>
                </li>
                <li>
                  <a><img src="/pic/Info.png" alt="" />ช่วยเหลือ</a>
                </li>
                <li>
                  <a
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
    </div>
    <div class="navbar-end mr-[264px] mt-10">
      <a class="btn w-[142px] rounded-3xl pr-6"
        ><img src="/pic/Arhive_load_duotone_line.png" alt="" />ลงขาย</a
      >
    </div>
  </div>
</template>
