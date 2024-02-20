<template>
  <Headernull />
  <div
    class="w-[1000px] h-[800px] items-center rounded-md flex justify-center m-auto"
  >
    <div class="w-full flex h-[700px] mt-60 bg-C-white">
      
      <div class="w-[400px] m-auto ml-20 h-[300px]">
        <div class="text-cyc text-center p-10">
            <h1>Secound UP</h1>
          </div>
        <img src="/pic/image 12.png" alt="" class="m-auto mb-10" />
      </div>
      <div>
      </div>

      <div class="w-[350px] relative h-[400px] m-auto">
        <div class="login-rightb w-[350px] relative h-[400px]  mr-10">
        <h1>ยินดีต้อนรับ :)</h1>
        <h2>
          หากต้องการเชื่อมต่อกับเรา โปรดเข้าสู่ระบบด้วยข้อมูล<br />
          ส่วนบุคคลของคุณโดยที่ใช้ที่อยู่อีเมลเเละรหัสผ่าน
        </h2>
  
        <div class="flex w-full relative form-edit h-12 mb-3 mt-5">
          <div class="flex w-full h-12 mb-3">
            <div
              id="box"
              class="w-12 h-[48px] rounded-l-xl bg-white border-Light border-r-0 border-2"
            >
              <img src="/pic/image 20.png" alt="" class="m-auto mt-3" />
            </div>
            <input
              type="email"
              placeholder="อีเมล"
              class="input w-[300px] rounded-r-xl rounded-l-none input-bordered focus:outline-none focus:border-Light"
              id="regist_email"
              name="email_re"
            />
            <i class="text-C-green check-s right-4"
              ><Icon name="i-ion-checkmark-circled"
            /></i>
            <i id="i2" class="text-Red check-e right-4"
              ><Icon name="i-ion-close-circled"
            /></i>
            <small class="">Error message</small>
          </div>
        </div>
  
        <div class="flex w-full relative form-edit h-12 mb-3">
          <div class="flex w-full h-12 mb-3">
            <div
              id="box"
              class="w-12 h-[48px] rounded-l-xl bg-white border-Light border-r-0 border-2"
            >
              <img src="/pic/image 14.png" alt="" class="m-auto mt-3" />
            </div>
            <input
              type="password"
              placeholder="รหัสผ่าน"
              class="input w-[300px] rounded-r-xl rounded-l-none input-bordered focus:outline-none focus:border-Light"
              id="regist_password"
              name="passwor_re"
            />
            <i class="text-C-green check-s right-4"
              ><Icon name="i-ion-checkmark-circled"
            /></i>
            <i id="i2" class="text-Red check-e right-4"
              ><Icon name="i-ion-close-circled"
            /></i>
            <small class="">Error message</small>
          </div>
        </div>
  
        <div class="button1 btn w-full">
          <button type="submit" class="btb">ล็อคอิน</button>
        </div>
        <a href="/login/register"><div class="button2  btn w-full">
          <button type="submit">สร้างบัญชี</button>
        </div></a>
        <div class="pass1">หรือล็อคอินกับ</div>
        <div class="flex justify-center items-center gap-5 mt-4">
          <button
            class="btn w-[150px] btn-xs bg-white border-2 rounded-full sm:btn-sm md:btn-md"
            onclick="window.location.href='https://accounts.google.com/login'"
          >
            <img src="" alt="" class="inline-block w-6 h-6 mr-2" />
            Google
          </button>
  
          <button
            class="btn w-[150px] btn-xs bg-white text-gray hover:bg-white text-[42px] rounded-full sm:btn-sm md:btn-md"
            onclick="my_modal_5.showModal()"
            style="margin-right: 10px"
          >
            <div class="odiv">
              <img src="" alt="" class="inline-block w-6 h-6 mr-2" />
              Microsoft
            </div>
          </button>
        </div>
      </div>
       
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
  .text-cyc h1 {
    color: #004e92;
    font-weight: bold;
  }
  
  h1 {
    color: black;
    font-size: 40px;
  }
  h2 {
    color: gray;
    font-size: small;
  }
  .button1 {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
  }
  .button1:hover {
    background: #3c8aef;
    color: white;
  }
  
  .button2 {
    padding: 10px 20px;
    background-color: #f0f0f0;
    color: #9f9d9d;
    border: 1px solid #adadae;
    border-radius: 50px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
  }
  .button2:hover {
    background: #adadae;
    color: white;
  }
  
  .pass1 {
    text-align: center;
    margin-top: 15px;
    color: #777676;
  }
  </style>
  