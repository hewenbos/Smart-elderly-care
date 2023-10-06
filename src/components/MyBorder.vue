<template>
  <div class="main backgroundBorder">
    <p v-if="title" class="title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<style lang="scss" scoped>
.title {
  color: #720303;
  font-size: 12px;
}
</style>
