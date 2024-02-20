<template>
  <div class="container max-w-[1000px] m-auto pt-44 font-bold">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <span v-for="(item, index) in breadcrumb" :key="index">
        <a v-if="item.link"
           :href="item.link"
           @click="handleClick(index)"
           :class="{ active: activeIndex === index }">{{ item.name }}</a>
        <span v-else
              :class="{ active: activeIndex === index }">{{ item.name }}</span>
        <span v-if="index < breadcrumb.length - 1"> > </span>
      </span>
    </div>

  
  </div>
</template>

<script>
import breadcrumbData from '@/Data/breadcrumb.json';

export default {
  data() {
    return {
      breadcrumb: breadcrumbData,
      activeIndex: 1 
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 10px;
}
.breadcrumb span {
  color: #333;
}
.breadcrumb a {
  text-decoration: none;
  color: #333;
}
.breadcrumb a:hover,
.breadcrumb span:hover {
  color: #000; 
}
.breadcrumb .active {
  color: #000;
}

</style>
