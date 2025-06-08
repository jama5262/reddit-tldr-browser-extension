<script setup lang="ts">
import { computed } from 'vue'
import { useCollapsibleStore } from '@/utils/store/collapsibleStore'
import { useTldrStore } from '@/utils/store/tldrStore'

import {
  Collapsible,
  CollapsibleContent,
} from '@/components/ui/collapsible'

const collapsibleStore = useCollapsibleStore()
const tldrStore = useTldrStore()

const isOpen = computed(() => collapsibleStore.isOpen)
const tldrValue = computed(() => tldrStore.value)
</script>

<template>
  <Collapsible
    :open="isOpen"
    class="space-y-2"
  >
    <CollapsibleContent class="space-y-2">
      <p class="leading-7 [&:not(:first-child)]:mt-6">{{ tldrValue }}</p>
    </CollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>