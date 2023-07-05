<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">最近更新</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2023-07-05" placement="top">
          <el-card>
            <h4>前端想项目创建</h4>
            <p>ShiChiYa 提交于 2023-07-05 </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'UpdateCard'
}
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1320px;
    text-align: left;
  }
</style>
