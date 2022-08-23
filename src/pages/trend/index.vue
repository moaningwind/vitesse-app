<script lang='ts' setup>
</script>

<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div flex>
      <div mr-10px>
        <Trend text="营业额" />
      </div>
      <div mr-10px>
        <Trend text="销售额" type="down" />
      </div>
    </div>
    <br>
    <el-divider>颜色翻转</el-divider>
    <div flex>
      <div><Trend text="销售额" reverse-color /></div>
      <div><Trend text="营业额" type="down" reverse-color /></div>
    </div>
    <br>
    <el-divider>自定义图标颜色</el-divider>
    <div flex>
      <div>
        <Trend text="营业额" up-icon-color="blue" />
      </div>
      <div>
        <Trend text="销售额" type="down" down-icon-color="#123456" />
      </div>
    </div>

    <br>
    <el-divider>自定义文字颜色</el-divider>
    <div flex>
      <div><Trend text="营业额" up-text-color="blue" /></div>
      <div><Trend text="销售额" type="down" down-text-color="yellow" /></div>
    </div>
    <br>
    <el-divider>自定义图标</el-divider>
    <div flex>
      <div>
        <Trend up-icon="CaretTop">
          营业额
        </Trend>
      </div>
      <div>
        <Trend type="down" down-icon="CaretBottom">
          销售额
        </Trend>
      </div>
    </div>
  </div>
</template>
