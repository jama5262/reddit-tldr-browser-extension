<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useCollapsibleStore } from '@/utils/store/collapsibleStore'

const collapsibleStore = useCollapsibleStore()

const toggleCollapsible = () => {
  collapsibleStore.toggleCollapse()
}
</script>

<template>
  <Button @click="toggleCollapsible">
    <slot>Toggle Collapse</slot>
  </Button>
</template>

<style scoped>
</style>