<script lang='ts' setup>
import { toLine } from '@/utils/letter'
defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up',
  },
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp',
  },
  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown',
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: '文字',
  },
  // 颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false,
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d',
  },
  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a',
  },
})
</script>

<template>
  <div flex items-center>
    <div text="4px" mr-4px>
      <slot v-if="$slots.default" />
      <div v-else>
        {{ text }}
      </div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
      />
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        v-else
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
      />
    </div>
  </div>
</template>

<style scoped>
.icon svg {
  width: 0.8em;
  height: 0.8em;
}
</style>
