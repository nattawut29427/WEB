<template>
  <HeaderLogin />
  <div class="shopping-cart">
    <h2 class="text-2xl font-bold mb-4">ตะกร้าของฉัน</h2>
    <div v-if="items.length === 0" class="text-gray-500">ไม่มีสินค้าที่เลือกไว้</div>
    <div v-else>
      <div v-for="(item, index) in items" :key="index" class="border-b relative">
        <label @click="toggleSelect(index)" class="select-label">
          <div class="flex justify-between items-center">
            <div class="flex items-center relative">
              <input type="checkbox" v-model="item.selected" @change="updateTotal" class="checkbox-primary checkbox mr-20">
              <img :src="item.image" alt="Product Image" class="flex items-center h-40 w-40 mb-4 lg:mb-0 mr-20" style="object-fit: contain;">
              
              
              <div class="absolute">
                <h1 class="font-semibold move-right margin-bottom">ออยเอง</h1>
                <h1 class="font-semibold move-right small-font">ผู้ติดตาม 12k</h1>
              </div>
              
              <div>
                
                <h3 class="text-2xl font-bold h-20">{{ item.name }}</h3>
                
                <div class="small-image">
                <img src="https://i.pinimg.com/564x/1c/56/d1/1c56d1e6e3f002f4109a1f59e56cf292.jpg" alt="" class="h-full w-full rounded-full overflow-hidden shadow">
                </div>
                
              </div>
              
            </div>
            <!-- ข้อมูลสินค้า -->
               <div>
                <h6 class="font-semibold" style="margin-top: 10px; position: absolute; top: 75px; right: 350px; font-size: 20px;">ราคา {{ item.price }} บาท</h6>
              </div>
            <div> <!-- Added ml-auto class for margin-left auto -->
              <button @click="removeItem(index)" class="btn rounded-full btn-error text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5 w-5 fill-current text-gray-600">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
                ลบ
              </button>
            </div>
            
          </div>
        </label>
      </div>
      <div class="mt-4 flex-container flex justify-between items-center" style="background-color: #e2e2e2; padding: 30px; border-radius: 8px;">
        <div class="flex items-center">
          <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="checkbox-primary checkbox mr-5">เลือกทั้งหมด
        </div>
        <div>
          <p class="text-lg font-semibold" style="font-size: 25px;">ราคาสินค้า: {{ total }} บาท</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'เสื้อ opv การ์ตูน', 
        price: 350, 
        image: 'https://down-th.img.susercontent.com/file/sg-11134201-7qvdu-ljky7jwz97lj9a', 
        selected: false },
        { name: 'Vans Old Skool PRO™', 
        price: 900, image: 'https://scontent.fbkk4-5.fna.fbcdn.net/v/t39.30808-6/421466712_391017450136289_7230423663838000432_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHgUstnqTwpeHptBPaZBDkzLbP443Qq9lAts_jjdCr2UGczxRtbznFNXsLzDjBB6WWm2jfaqcwJOJgJk_1cMfs-&_nc_ohc=z_mgCgblJ6kAX8HeNF9&_nc_zt=23&_nc_ht=scontent.fbkk4-5.fna&oh=00_AfDHmeqYVxBggtShTa7CdhPAlDVamsbza-uKTzuxyrlKgw&oe=65E1EA48', 
        selected: false },
        { name: 'เสื้อ สาขา SE ใส่ไม่กี่ครั้ง', 
        price: 250, image: 'https://i.ibb.co/NnpQzHw/20240227-171944.jpg', 
        selected: false }   
      ],
      selectAll: false
    };
  },
  computed: {
    total() {
      return this.items.reduce((acc, item) => {
        if (item.selected) {
          acc += item.price;
        }
        return acc;
      }, 0).toLocaleString('th-TH');
    }
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    },
    toggleSelectAll() {
      this.items.forEach(item => {
        item.selected = this.selectAll;
      });
    },
    updateTotal() {
    }
  }
}

</script>



<style scoped>
.shopping-cart {
  /* Add spacing */
  padding: 150px;
  margin-left: 60px;
  margin-right: 60px;
}
.vertical-align {
    display: flex;
    align-items: center;
}
.flex.justify-between.items-center {
  margin-right: 20px; /* เพิ่มระยะห่างระหว่างรูปสินค้าและข้อความชื่อสินค้า */
}
.shopping-cart .border-b {
  border: none; /* ลบเส้นสีดำที่กั้นสินค้าออก */
  padding-top: 70px;  /* เพิ่ม padding ด้านบน */
  border-top: 5px solid #1A37A7;  /* เปลี่ยนสีเส้นเป็นสีน้ำเงิน */
  border-radius: 5px;
}

.price {
    font-weight: bold;
    font-size: 23px; /* Adjust font size as needed */
    margin-right: -120px; /* Move to the right */
    margin-top: -65px; /* Lift up by 10px */
}
.absolute {
    position: absolute;
    bottom: 0px;
    left: 0;
}

.small-font {
    font-size: 70%;
}
.move-right {
    margin-left: 400px;
    margin-right: 5px;
    margin-bottom: 20px;
}
.margin-bottom {
    margin-bottom: -5px; /* Adjusted margin */
}
.font-semibold {
    font-weight: bold;
}

.small-image img {
    width: 50px; /* Adjusted width */
    height: 50px; /* Adjusted height */
}

</style>


