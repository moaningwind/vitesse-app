<script lang='ts' setup>
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <choose-icon v-model:visible="visible" title="选择图标">
    选择图标
  </choose-icon>
</template>
