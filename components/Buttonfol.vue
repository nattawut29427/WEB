<template>
    <div>
        <button class="btn rounded-full text-sm hover:bg-M_Blue bg-M_Light text-M_Blue hover:text-M_Light mt-1 h-[40px] w-[120px] border-none"
                :class="{ 'followed ': isFollowed }"
                @click="toggleFollow">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFollowed: false
        };
    },
    computed: {
        buttonText() {
            return this.isFollowed ? 'ติดตามแล้ว' : 'ติดตาม';
        }
    },
    methods: {
        toggleFollow() {
            this.isFollowed = !this.isFollowed;
        }
    }
};
</script>

<style scoped>
.followed {
    background-color: rgb(26 55 167 / var(--tw-bg-opacity));
    color: rgb(174 200 252 / var(--tw-bg-opacity)); 
}
</style>
