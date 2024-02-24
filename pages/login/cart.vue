<template>
  <HeaderLogin />
  <div class="shopping-cart">
    <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
    <div v-if="items.length === 0" class="text-gray-500">Your cart is empty</div>
    <div v-else>
      <div v-for="(item, index) in items" :key="index" class="border-b">
        <label @click="toggleSelect(index)" class="select-label">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <input type="checkbox" v-model="item.selected" @change="updateTotal" class="checkbox-primary checkbox mr-20">
              <img :src="item.image" alt="Product Image" class="flex items-center h-32 w-32 mb-4 lg:mb-0 mr-20" style="max-width: 100%; height: auto;">
              <div>
                <h3 class="font-semibold h-20">{{ item.name }}</h3>
                <div class="h-10 w-10">
                  <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_2.png" alt="" class="h-full w-full rounded-full overflow-hidden shadow">
                </div>
              </div>
              <div style="margin-top: 55px;"> <!-- Adjusted margin-top -->
                <h1 class="font-semibold h-0 mb-0 lg:mb-0">Seller M</h1>
              </div>
            </div>
            <div class="h-10 w-10 mb-4 lg:mb-0 mr-4"></div>
            <!-- ข้อมูลสินค้า -->
            <div style="text-align: right; margin-top: -50px;"> <!-- Align text to the right and adjust margin-top -->
              <h3 class="font-semibold">ราคา {{ item.price }} บาท</h3>
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
      <div class="mt-4 flex-container flex justify-between items-center">
        <div class="flex items-center">
          <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="checkbox-primary checkbox mr-5">เลือกทั้งหมด
        </div>
        <div>
          <p class="text-lg font-semibold">Total: {{ total }}</p>
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
        { name: 'Product 1', price: 100, image: 'https://d2cva83hdk3bwc.cloudfront.net/nike-x-stussy-the-wide-world-tribe-t-shirt--asia-sizing--white-1.jpg', selected: false },
        { name: 'Product 2', price: 150, image: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png', selected: false },
        { name: 'Product 3', price: 80, image: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png', selected: false },
        { name: 'Product 4', price: 120, image: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png', selected: false },
        { name: 'Product 5', price: 200, image: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png', selected: false },
        { name: 'Product 6', price: 90, image: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png', selected: false }
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
      }, 0);
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
}

.flex.justify-between.items-center {
  margin-right: 20px; /* เพิ่มระยะห่างระหว่างรูปสินค้าและข้อความชื่อสินค้า */
}
.shopping-cart .border-b {
  padding: 70px;
  border-bottom: 5px solid #1A37A7; 
  border-radius: 5px;
}
/* <div class="h-10 w-10 mb-4 lg:mb-0 mr-4">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_2.png" alt="" class="h-full w-full rounded-full overflow-hidden shadow" />
            </div> */
</style>


