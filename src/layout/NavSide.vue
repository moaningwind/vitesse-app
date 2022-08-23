<script lang='ts' setup>
import axios from 'axios'
import Menu from './Menu.vue'
defineProps<{
  collapse: boolean
}>()

const menuData = shallowRef([])
onMounted(() => {
  axios.get('/api/menu').then((res) => {
    menuData.value = res.data.data
  })
})
</script>

<template>
  <Menu :collapse="collapse" :menu-data="menuData" router :default-active="$route.path" />
</template>
