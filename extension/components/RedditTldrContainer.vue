<script lang="ts" setup>
import Button from '@/components/Button.vue';
import Collapsable from "@/components/Collapsable.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <div>
    <Card>
      <CardContent class="space-y-2">
        <div class="flex flex-row-reverse">
          <Button />
        </div>
        <Collapsable />
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
</style>
