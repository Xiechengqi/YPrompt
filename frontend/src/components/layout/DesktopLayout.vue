<template>
  <div class="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex overflow-hidden">
    <!-- 侧边栏 -->
    <DesktopSidebar />
    
    <!-- 主内容区域 -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
      <!-- Git Commit 显示在右上角 -->
      <div class="absolute top-2 right-2 z-50">
        <GitCommit />
      </div>
      
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import DesktopSidebar from './DesktopSidebar.vue'
import GitCommit from '@/components/GitCommit.vue'
</script>