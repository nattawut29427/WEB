<template>
  <Headernull />
  <div
    class="w-[1000px] h-[800px] items-center rounded-md flex justify-center m-auto"
  >
    <div class="w-full flex h-[700px] mt-60 bg-C-white">
      <div class="w-[400px] mt-52 ml-20 h-[300px]">
        <div class="text-cyc text-center text-[40px] font-bold">
            <h1>Secound UP</h1>
          </div>
        <img src="/pic/image 12.png" alt="" class="m-auto " />
      </div>

      <div class="w-[350px] relative h-[400px] m-auto">
        <h1 class="text-center text-3xl">สร้างบัญชีผู้ใช้</h1>
        <form action="" class="mt-10 form" id="form">
          <div class="flex w-full form-edit relative mb-3 h-12">
            <div
              id="box"
              class="w-12 h-[48px] mt bg-C-white rounded-l-xl border-Light border-r-0 border-2"
            >
              <img src="/pic/vector.jpg" alt="" class="m-auto mt-3" />
            </div>
            <input
              type="text"
              placeholder="ชื่อ-สกุล"
              class="input w-[300px] rounded-l-none rounded-r-xl input-bordered focus:outline-none focus:border-Light"
              id="regist_name"
              name="name_re"
            />
            <i class="text-C-green check-s right-4"
              ><Icon name="i-ion-checkmark-circled"
            /></i>
            <i id="i2" class="text-Red check-e right-4"
              ><Icon name="i-ion-close-circled"
            /></i>
            <small class="">Error message</small>
          </div>

          <div class="flex w-full relative form-edit h-12 mb-3">
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
                placeholder="ยืนยันรหัสผ่าน"
                class="input w-[300px] rounded-l-none rounded-r-xl input-bordered focus:outline-none focus:border-Light"
                id="regist_password2"
                name="passwor2_re"
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
                <img src="/pic/image 21.png" alt="" class="m-auto mt-3" />
              </div>
              <input
                type="number"
                placeholder="เบอร์โทร"
                class="input w-[300px] rounded-r-xl rounded-l-none input-bordered focus:outline-none focus:border-Light"
                id="regist_number"
                name="number_re"
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

          <div class="flex justify-end mt-[30px]">
            <button
              class="btn w-[150px] btn-xs mr-10 bg-Light text-white hover:bg-D_Blue text-[42px] rounded-full sm:btn-sm md:btn-md"
              onclick="my_modal_5.showModal()"
            >
              สร้างบัญชี
            </button>
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg">ทำการสมัครบัญชีเรียบร้อย</h3>
                <p class="py-4">
                  Press ESC key or click the button below to close
                </p>
               <div class="modal-action">
                  <form method="dialog">
                    <form action="">
                    <button class="btn">Close</button>
                  </form>
                  </form>
                </div>
              </div>
            </dialog>
            <form action="">
            <button
              class="btn w-[150px] btn-xs bg-white border-2 rounded-full sm:btn-sm md:btn-md"
            >
              เข้าสู่ระบบ
            </button>
          </form>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    const form = document.getElementById("form");
    const regist_name = document.getElementById("regist_name");
    const regist_password = document.getElementById("regist_password");
    const regist_password2 = document.getElementById("regist_password2");
    const regist_email = document.getElementById("regist_email");
    const regist_number = document.getElementById("regist_number");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      checkInputs();
    });
    function checkInputs() {
      //ดึงข้อมูลจาก input
      const nameValue = regist_name.value.trim();
      const passwordValue = regist_password.value.trim();
      const passwor2Value = regist_password2.value.trim();
      const emailValue = regist_email.value.trim();
      const numberValue = regist_number.value.trim();

      const formEl = document.querySelector(".form");

      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData);
      console.log(data);

      fetch(
        "https://script.google.com/macros/s/AKfycbzextwZYdoPF8M2a43fdE0WdXKsPYoAkqFPiOIq6XyuuGLkRey8G9xqhlL3XHC8-ftnvw/exec?action=addUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          mode: "no-cors",
        }
      );

      if (nameValue === "") {
        // show error
        // add error class

        setErrorFor(regist_name, "โปรดใส่ชื่อ เเละ นามสกุล");
      } else {
        // add success class

        setSuccessFor(regist_name);
      }

      if (passwordValue === "") {
        // show error
        // add error class

        setErrorFor(regist_password, "โปรดใส่รหัสผ่าน");
      } else {
        // add success class

        setSuccessFor(regist_password);
      }

      if (passwor2Value === "") {
        // show error
        // add error class

        setErrorFor(regist_password2, "โปรดใส่รหัสผ่าน");
      } else {
        // add success class

        setSuccessFor(regist_password2);
      }

      if (emailValue === "") {
        // show error
        // add error class

        setErrorFor(regist_email, "โปรดใส่อีเมล");
      } else {
        // add success class

        setSuccessFor(regist_email);
      }

      if (numberValue === "") {
        // show error
        // add error class

        setErrorFor(regist_number, "โปรดใส่เบอร์มือถือ");
      } else {
        // add success class

        setSuccessFor(regist_number);
      }
    }

    function setErrorFor(input, message) {
      const formedit = input.closest(".form-edit");
      const small = formedit.querySelector("small");
      small.innerText = message;
      formedit.classList.remove("success");
      formedit.classList.add("error");
    }

    function setSuccessFor(input) {
      const formedit = input.closest(".form-edit");
      formedit.classList.remove("error");
      formedit.classList.add("success");
    }

    function setDelFor(input) {
      const formedit = input.closest(".form-edit");
      formedit.classList.remove("error");
      formedit.classList.remove("success");
    }

    form.addEventListener("keyup", (e) => {
      e.preventDefault();
      checkKeyInputs();
    });

    function checkKeyInputs() {
      const nameKey = regist_name.value;
      const passwordKey = regist_password.value;
      const password2Key = regist_password2.value;
      const emailKey = regist_email.value;
      const numberKey = regist_number.value;

      if (nameKey !== "") {
        setSuccessFor(regist_name);
      } else {
        setDelFor(regist_name);
      }


      if (emailKey  !== "" && /[ก-๙]/.test(emailKey) ) {
        setErrorFor(regist_email,'โปรดใส่ภาษาอังกฤษ');
      
      } else if (emailKey !== "" && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(emailKey)) {
        setErrorFor(regist_email, 'รูปแบบอีเมลไม่ถูกต้อง');

      } else if (emailKey !== "" && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(emailKey)) {
        setSuccessFor(regist_email);

      } else {
        setDelFor(regist_email);
      }
      
      if (passwordKey !== "" && /[A-Z]/.test(passwordKey)) {
        setSuccessFor(regist_password);
      
      } else if ((passwordKey !== "" && passwordKey !== /[A-Z]/.test(passwordKey))){
        setErrorFor(regist_password,'กรุณาใส่ ตัวพิมพ์ใหญ่ A-Z');

      } else {
        setDelFor(regist_password);
      }

      if (password2Key !== '' && password2Key !== passwordKey) {
        setErrorFor(regist_password2, "รหัสผ่านไม่ตรงกัน");
      } else if (password2Key !== '' && password2Key == passwordKey ) {
        setSuccessFor(regist_password2);
      } else {
        setDelFor(regist_password2);
      }

      if (numberKey !== "" && numberKey.length === 10) {
        setSuccessFor(regist_number);
      } else if (numberKey.length > 9) {
        setErrorFor(regist_number, "ใส่เบอร์เกิน 10 ตัว");
      } else {
        setDelFor(regist_number);
      }
    }
  }
});
</script>
