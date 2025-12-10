<template>
  <div class="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col overflow-hidden">
    <!-- 主内容区域 -->
    <div class="flex-1 flex flex-col min-h-0 overflow-hidden relative">
      <!-- Git Commit 显示在右上角 -->
      <div class="absolute top-2 right-2 z-50">
        <GitCommit />
      </div>
      
      <router-view />
    </div>
    
    <!-- 底部导航 -->
    <MobileBottomNav />
  </div>
</template>

<script setup lang="ts">
import MobileBottomNav from './MobileBottomNav.vue'
import GitCommit from '@/components/GitCommit.vue'
</script>