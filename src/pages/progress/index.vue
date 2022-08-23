<script lang='ts' setup>
</script>

<template>
  <div>
    <Progress is-animate :percentage="60" />
    <br>
    <Progress is-animate status="success" :stroke-width="20" :percentage="60" />
    <br>
    <Progress :time="5000" type="circle" is-animate :percentage="60" />
  </div>
</template>
