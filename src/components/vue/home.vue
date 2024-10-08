<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-layout has-sider>
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys"  theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">工作台</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">项目</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">AI</span>
        </a-menu-item>
        <a-menu-item key="4">
          <bar-chart-outlined />
          <span class="nav-text">事项</span>
        </a-menu-item>
        <a-menu-item key="5">
          <cloud-outlined />
          <span class="nav-text">代码</span>
        </a-menu-item>
        <a-menu-item key="6">
          <appstore-outlined />
          <span class="nav-text">制品</span>
        </a-menu-item>
        <a-menu-item key="7">
          <team-outlined />
          <span class="nav-text">洞察</span>
        </a-menu-item>
        <a-menu-item key="8">
          <shop-outlined />
          <span class="nav-text">知识</span>
        </a-menu-item>
        <a-menu-item key="9">
          <shop-outlined />
          <span class="nav-text">自动化</span>
        </a-menu-item>
        <a-menu-item key="10">
          <shop-outlined />
          <span class="nav-text"><Icon icon="lsicon:user-all-filled"  style="color:white" /></span>
        </a-menu-item>
        <a-menu-item key="11">
          <shop-outlined />
          <span class="nav-text"><Icon icon="ph:dots-nine"  style="color:white" /></span>
        </a-menu-item>
        <a-menu-item key="12">
          <shop-outlined />
          <span class="nav-text"><Icon icon="mdi:bell"  style="color:white" /></span>
        </a-menu-item>
        <a-menu-item key="13">
          <shop-outlined />
          <span class="nav-text"><Icon icon="mingcute:settings-5-line"  style="color:white" /></span>
        </a-menu-item>
        <a-menu-item key="14">
          <shop-outlined />
          <span class="nav-text"><Icon icon="mingcute:question-line"  style="color:white" /></span>
        </a-menu-item>
        <a-menu-item key="15">
          <shop-outlined />
          <span class="nav-text"><Icon icon="solar:user-bold"  style="color:white" /></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-content>
         <div class="text-2xl ml-3 h-16 mt-5">代码仓库</div>
         <hr/>
        <div :style="{ padding: '24px', background: '#fff',}" class="flex">
         <div class="w-20">最近访问</div>
         <div class="w-20">全部仓库</div>
         <div class="w-20">开源仓库</div>
        </div>
        <hr/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js';
const selectedKeys = ref(['4'])
</script>
<style scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
