<script lang='ts' setup>
import * as ElIcons from '@element-plus/icons-vue'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { toLine } from '@/utils/letter'

const props = defineProps<{
  // 弹出框的标题
  title: string
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的visible
const dialogVisible = ref<boolean>(props.visible)

// 点击按钮显示弹出框
const handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

const { copy } = useClipboard()
// 点击图标
const clickItem = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`
  copy(text).then((_) => {
    // 关闭弹框
    dialogVisible.value = false
    ElMessage.success('复制成功')
  })
}

// 监听visible的变化 只能监听第一次的变化
watch(() => props.visible, (val) => {
  dialogVisible.value = val
})

// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, (val) => {
  emits('update:visible', val)
})
</script>

<template>
  <el-button @click="handleClick">
    <slot />
  </el-button>
  <div class="m-choose-icon-dialog-body">
    <el-dialog v-model="dialogVisible" :title="title">
      <div flex="~ wrap" items-center>
        <div
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          class="w1/4 h18 mb4"
          flex="~ col"
          items-center
          justify-center
          cursor-pointer
          @click="clickItem(item)"
        >
          <div text-4>
            <component :is="`el-icon-${toLine(item)}`" />
          </div>
          <div flex-1>
            {{ item }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
svg {
  width: 2em;
  height: 2em;
}
</style>

<style>
.m-choose-icon-dialog-body .el-dialog__body {
  height: 500px;
  overflow: scroll;
}
</style>
