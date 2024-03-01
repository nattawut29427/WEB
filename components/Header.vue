<template>
  <div class="navbar z-50 h-[130px] fixed bg-gradient-to-r from-blue to-cyc">
    <div class="absolute top-0 end-0 m-0">
      <div class="flex mr-4 mt-3 p-1 text-white text-sm lg:mr-[250px]">
        <div><p class="mr-4 cursor-pointer hidden sm:inline">ช่วยเหลือ</p></div>
        <div><p class="mr-4 cursor-pointer hidden sm:inline">ลงโฆษณา</p></div>
        <div><p class="mr-4 cursor-pointer hidden sm:inline">ข้อกำหนด</p></div>
        <div>
          <p class="mr-4 cursor-pointer hidden sm:inline">ติดต่อเจ้าหน้าที่</p>
        </div>
      </div>
    </div>
    <div class="navbar-start ml-0 mt-10 lg:ml-[262px]">
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
          class="menu menu-sm dropdown-content mt-[22px] z-[1] p-2 shadow bg-base-100 w-52"
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
      <a
        class="btn btn-ghost text-[32px] font-bold text-white ml-[2] lg:ml-0"
        href="/"
        >Second UP</a
      >
    </div>
    <div class="navbar-end hidden  mt-12 lg:flex">
      <ul class="menu menu-horizontal flex px-2">
        <div class="flex">
          <button onclick="my_modal_5.showModal()"><li><img src="/pic/Favorite.png" alt="" /></li></button>
          <button onclick="my_modal_5.showModal()"><li><img src="/pic/Bag.png" alt="" /></li></button>
        </div>
        

        <li>
          <a href="/login"
            ><summary class="text-white p-3 mr-1">
              ลงทะเบียน/เข้าสู่ระบบ
            </summary></a
          >
        </li>
      </ul>
      <div>
        <button
          class="btn w-[142px] rounded-3xl pr-6"
          onclick="my_modal_5.showModal()"
        >
          <img src="/pic/Arhive_load_duotone_line.png" alt="" />ลงขาย
        </button>
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">โปรดเข้าสู่ระบบก่อน</h3>
            <p class="py-4">โปรดเข้าสู่ระบบก่อน จึงจะสามาถารใช้งานฟีเจอร์นี้ได้</p>
            <div class="modal-action">
              <form method="dialog" class="flex">
                <form action="/login">
                  <button class="btn mr-2 bg-M_Light hover:bg-Light">ไปหน้า Login</button>
                </form>
                <form action="">
                  <button class="btn">Close</button>
                </form>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </div>
</template>

