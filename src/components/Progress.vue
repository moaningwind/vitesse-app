<script lang='ts' setup>
const props = defineProps({
  // 进度条进度
  percentage: {
    type: Number,
    required: true,
  },
  // 是否有动画效果
  isAnimate: {
    type: Boolean,
    default: false,
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 3000,
  },
})

// 标识动画加载过程中改变的值
const realPercentage = ref<number>(0)

onMounted(() => {
  if (props.isAnimate) {
    // 规定时间内加载完成
    const t = Math.ceil(props.time / props.percentage)
    const timer = setInterval(() => {
      realPercentage.value += 1
      if (realPercentage.value >= props.percentage) {
        realPercentage.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  }
})
</script>

<template>
  <el-progress :percentage="realPercentage" v-bind="$attrs" />
</template>
