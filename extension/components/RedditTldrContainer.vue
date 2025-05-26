<script lang="ts" setup>
import "~/assets/tailwind.css";

import { useCollapsibleStore } from "@/utils/store/collapsibleStore";
import { storeToRefs } from 'pinia';

import Button from './Button.vue';
import CollapsibleContent from './CollapsibleContent.vue';

const store = useCollapsibleStore();
const { isOpen } = storeToRefs(store);
</script>

<template>
  <div class="mb-4 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
    <div class="flex items-center justify-end w-full px-6 py-2">
      <Button />
    </div>
    <div class="border-t border-gray-200 mx-4" />
    <Transition name="fade-slide">
      <div v-if="isOpen" class="px-6 py-4">
        <CollapsibleContent />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s, max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  max-height: 500px;
  overflow: hidden;
}
</style>
