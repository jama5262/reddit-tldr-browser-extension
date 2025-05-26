<script setup lang="ts">
import { useCollapsibleStore } from '@/utils/store/collapsibleStore';

const store = useCollapsibleStore();
</script>

<template>
  <div>
    <button
        class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full
      font-semibold text-white bg-[#FF4500] hover:bg-[#e03d00] hover:no-underline
      transition-colors duration-200 focus:outline-none cursor-pointer"
        @click="store.toggleCollapse()"
    >
      <span class="flex items-center gap-2">tl;dr</span>
    </button>
  </div>
</template>

<style scoped>
</style>