<template>
  <div class="w-[1000px] flex h-[1500px] m-auto mt[100px]">
    <div class="m-auto w-full h-[1000px] items-center">
      <div class="text-[36px] font-bold text-M_Blue">
        <h2>{{ name }}</h2>
      </div>
      <form class="mx-20 mt-20 form" id="form">
        
        
        <div class="form-edit flex justify-between">
          <label for="">ชื่อของสินค้า</label>
          <input
            type="text"
            placeholder="ใส่ชื่อของสินค้าที่ต้องการขาย"
            class="input input-bordered focus:outline-none"
            id="name_product"
            name="name_product"
          />
          <i class="text-C-green check-s"><Icon name="i-ion-checkmark-circled" /></i>
          <i class="text-Red check-e"><Icon name="i-ion-close-circled" /></i>
          <small class="right-[940px]">Error message</small>
        </div>

        <div class="form-edit flex justify-between mt-[40px]">
          <label for="">ราคาของสินค้า</label>
          <input
            type="number"
            placeholder="ใส่ราคาของสินค้า"
            class="input input-bordered focus:outline-none"
            id="price_product"
            name="price"
         />
          <i class="text-C-green check-s"><Icon name="i-ion-checkmark-circled" /></i>
          <i class="text-Red check-e"><Icon name="i-ion-close-circled" /></i>
          <small class="right-[930px]">Error message</small>
        </div>

        <div action="" class="mt-[40px] form-edit flex justify-between" id="">
          <label for="">รายระเอียดของสินค้า</label>
          <textarea  class="font-medium  text-Light placeholder: text-[16px] focus:outline-none focus:input-bordered" placeholder="ใส่รายระเอียดของสินค้า" id="info_product" name="info_product"></textarea>
          <i class="text-C-green check-s"><Icon name="i-ion-checkmark-circled" /></i>
          <i class="text-Red check-e"><Icon name="i-ion-close-circled" /></i>
          <small class="mt-[250px]  right-[898px]">Error message</small>
        </div>

        <div class="flex mt-[40px] form-edit  justify-between" action="">
          <label for="">รูปของสินค้า</label>
          <p id="imgfile" class="border-2 w-[550px] h-[150px] ">
            <div class="p-2 pl-2 pb-1 ">
              <!-- <i class="right-[970px] top-[810px] text-[50px]"><Icon name="i-ion-images-outline" /></i> -->
              <input type="file" id="img" hidden name="pic">
              <label for="img" class="btn flex bg-L_white h-[125px] w-[150px] hover:bg-M_Light" >
                <p class="right-[970px] top-[870px] text-[50px] text-Light"
                  ><Icon name="i-ion-images-outline"
                /></p>
              </label> 
              
            </div>
          </p>
          <i class="text-C-green check-s"><Icon name="i-ion-checkmark-circled" /></i>
          <i class="text-Red check-e"><Icon name="i-ion-close-circled" /></i>
          <small class="mt-[150px] right-[950px]">Error message</small>    
        </div>

        <div class="mt-[40px] form-edit flex justify-between">
          <label for="">เบอร์ติดต่อ</label>
          <input
            type="number"
            placeholder="กรุณาใส่เบอร์ที่สามาถรติดต่อได้"
            class="input input-bordered focus:outline-none"
            id="number_product"
            name="phone"
          />
          <i class="text-C-green check-s"><Icon name="i-ion-checkmark-circled" /></i>
          <i class="text-Red check-e"><Icon name="i-ion-close-circled" /></i>
          <small class="right-[950px]">Error message</small>
          
        </div>

        <div  class="mt-[40px] form-edit flex justify-between">
          <label for="">หัวข้อที่ต้องการขาย</label>
          <input
            type="text"
            placeholder="ประมูล/ขายปกติ"
            class="input input-bordered focus:outline-none"
            id="typeof_product"
            name="db_type"
          />
          <i class="text-C-green check-s"><Icon name="i-ion-checkmark-circled" /></i>
          <i class="text-Red check-e"><Icon name="i-ion-close-circled" /></i>
          <small class="right-[890px]">Error message</small>
        </div>

        <div class="flex justify-end mt-[30px]">
          <button
            class="btn w-[120px] btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg"
          >
            ลบ
          </button>
          <button 
            class="btn bg-Light text-white text-[42px] w-[200px] rounded-full ml-5 btn-xs hover:bg-D_Blue sm:btn-sm md:btn-md lg:btn-lg"
          >
            {{ send }}
          </button>
        </div>     
      </form>
    </div>
  </div>
</template>


<!-- ///////////////////////////////////////------------------- SCRIPT -------------///////////////////////////////////////////////////////////// -->



<script setup>
import {ref} from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: "ลงสินค้า",
  },
  send: {
    type: String,
    default: "โพสต์เลย",
  },

})

onMounted(() => {
 if (process.client) {
    const form = document.getElementById('form');
    const product_name = document.getElementById('name_product');
    const price = document.getElementById('price_product');
    const info = document.getElementById('info_product');
    const file = document.getElementById('img');
    const type = document.getElementById('typeof_product');
    const phone = document.getElementById('number_product');

    console.log(file.value)

    file.addEventListener("change", e =>{
      const fileinput = file.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () =>{
        console.log(reader.result.split(',')[1])
        console.log(fileinput.type)
        console.log(fileinput.name)

      })

      reader.readAsDataURL(fileinput)
    })

    console.log(file.value)
    
    if(file.value !== ''){
      setSuccessFor(file)
    }
    
    console.log(file.value)

    form.addEventListener('submit', (e) =>{
      e.preventDefault();

      checkInputs();
    })
    function checkInputs(){
      //ดึงข้อมูลจาก input
      const productValue = product_name.value.trim();
      const priceValue = price.value.trim();
      const infoValue = info.value.trim();
      const fileValue  = file.value.trim();
      const typeValue = type.value.trim();
      const phoneValue = phone.value.trim();



      const formEl = document.querySelector('.form')

      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData)
      console.log(data)
      
      
      fetch('https://script.google.com/macros/s/AKfycbz8yDm_NV-u9ZPBDz4E6V5pssZkcanzdc7h13ryU-csYo7CXSSF0HAeqU0zk9d8QAsdeg/exec?action=addUser', {
          method: 'POST',
          headers: {
                      'Content-Type': 'application/json'
                   },
          body: JSON.stringify(data), 
          mode: 'no-cors' 
      })


      
      if(productValue ===''){
        // show error
        // add error class
        
        setErrorFor(product_name, 'โปรดใส่ชื่อของสินค้า');
      
      } else{
        
        // add success class
        
        setSuccessFor(product_name);
      }
      
      if(priceValue ===''){
        // show error
        // add error class
        
        setErrorFor(price, 'โปรดใส่ราคาของสินค้า');
      
      } else{
        
        // add success class
        
        setSuccessFor(price);
      }    

      if(infoValue ===''){
        // show error
        // add error class
        setErrorFor(info_product, 'โปรดใส่รายระเอียดของสินค้า');
      
      } else{
        
        // add success class
        
        setSuccessFor(info_product); 
      }    

      if(fileValue ===''){
        // show error
        // add error class
        
        setErrorFor(file,'โปรดใส่รูปของสินค้า');
      
      } else{
        
        // add success class
        
        setSuccessFor(file); 
      }    

      if( phoneValue ===''){
        // show error
        // add error class
        
        setErrorFor(phone, 'โปรดใส่เบอร์มือถือ');
      
      } else{
        
        // add success class
        
        setSuccessFor(phone);
      }    

      if( typeValue ===''){
        // show error
        // add error class
        
        setErrorFor(type, 'โปรดใส่ประเภทที่ต้องการขาย');
      
      } else{
        
        // add success class
        
        setSuccessFor(type);
      }    

      
    }

    
    function setErrorFor(input, message){
      const formedit = input.closest('.form-edit');
      const small = formedit.querySelector('small');
      small.innerText = message;
      formedit.classList.remove('success')
      formedit.classList.add('error')
    }


    function setSuccessFor(input) {
      const formedit = input.closest('.form-edit');
      formedit.classList.remove('error')
      formedit.classList.add('success')
    }
    
    function setDelFor(input) {
      const formedit = input.closest('.form-edit');
      formedit.classList.remove('error');
      formedit.classList.remove('success');
    }

    form.addEventListener('keyup', (e) => {
     e.preventDefault();
     checkKeyInputs();
    });

    function checkKeyInputs() {
      const nameKey = product_name.value;
      const priceKey = price.value
      const infoKey = info.value
      const phoneKey = phone.value
      const typeKey = type.value

      
      

      if (nameKey !== '') {
        setSuccessFor(product_name);
      } else {
        setDelFor(product_name);
      }

      if (priceKey !== '') {
        setSuccessFor(price);
      } else {
        setDelFor(price);
      }

      if (infoKey !== '') {
        setSuccessFor(info);
      } else {
        setDelFor(info);
      }
    
      if(phoneKey !== '' && phoneKey.length === 10){
        setSuccessFor(phone);
      } else if (phoneKey.length > 9) {
        setErrorFor(phone, 'เบอร์เกิน 10 ตัว');
      } else {
        setDelFor(phone);
      }


      if (typeKey === ''){
       setDelFor(type);
      } else if (typeKey === 'ประมูล' || typeKey === 'ขายปกติ' || typeKey === 'ขาย') {
       setSuccessFor(type);
      } else {
       setErrorFor(type, 'ใส่ ประมูล หรือ ขาย เท่านั้น');
      }

   

  }
    

}
})
</script>