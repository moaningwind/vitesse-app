<script lang='ts' setup>
const props = defineProps<{
  collapse: boolean
}>()
const emits = defineEmits(['update:collapse'])
const toggle = () => {
  // 需要修改父组件的数据
  emits('update:collapse', !props.collapse)
}
</script>

<template>
  <div h15 px5 flex="~" justify-between items-center>
    <span cursor-pointer @click="toggle">
      <el-icon-expand v-if="collapse" w4 h4 />
      <el-icon-fold v-else w4 h4 />
    </span>
    <Footer />
  </div>
</template>
