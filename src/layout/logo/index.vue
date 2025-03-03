<template>
    <div class="logo" v-if="setting.logoHidden">
       <img :src="setting.logo" alt="">
       <p>{{setting.title}}</p>
    </div>
</template>

<script setup lang="ts">
//引入设置标题与logo配置文件
import setting from '@/setting';
</script>

<style scoped lang="scss">
    .logo{
        width: 100%;
        height: $base-menu-logo-height;
        color: white;
        display: flex;
        align-items: center;
        padding: 20px;
        img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
        p{
            font-size: $base-logo-titlle-fontSize;
            margin-left: 20px;
        }
    }
</style>