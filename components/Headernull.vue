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
    <a class="btn btn-ghost text-[32px] font-bold text-white ml-[2] lg:ml-0" href="http://localhost:3000/">Second UP</a>
  </div>
  
</div>
</template>
