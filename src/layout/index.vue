<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
            <!-- 展示菜单 -->
             <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
              <el-menu background-color="#393939" text-color="white">
                    <!-- 根据路由动态生成菜单 -->
                     <Menu :menuList="userStore.menuRoutes"></Menu>
              </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">456</div>
        <!-- 内容展示区 -->
        <div class="layout_main">
           <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//右侧内容展示区
import Main from './main/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: yellowgreen;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;
        .scrollbar{
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
            .el-menu{
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        background-color: aqua;
        top: 0px;
        left: $base-menu-width;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        background-color: yellowgreen;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
    }
}
</style>