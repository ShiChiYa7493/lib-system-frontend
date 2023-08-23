<template>
  <el-menu
    router
    mode="horizontal"
    class="el-menu-demo"
    :default-active="this.$route.path">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <span style="position: absolute;padding-top: 20px;right: 40%;font-size: 20px;font-weight: bold">上海优川线上图书馆 - By ShiChiYa</span>
    <!-- <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 40px;color: #222;padding: 10px"></i> -->
    <el-dropdown style="float: right">
      <div class="avatar-dropdown">
        <el-avatar icon="el-icon-user-solid" style="margin-right: 12px;"></el-avatar>
        {{ username }}
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>编辑信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/library', navItem: '图书馆'},
        {name: '/admin', navItem: '个人中心'}
      ],
      username: '',
      visible: false
    }
  },
  mounted: function () {
    console.log('store', this.$store.state.user.username)
    this.username = this.$store.state.user.username
  },
  methods: {
    logout () {
      var _this = this
      this.$axios.get('/logout').then(resp => {
        if (resp.data.code === 200) {
          // 前后端状态保持一致
          _this.$store.commit('logout')
          _this.$router.replace('/login')
          this.$message({
            message: '注销成功！',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }

  .el-icon-switch-button {
    cursor: pointer;
    outline:0;
  }
  .avatar-dropdown{
    height: auto;
    display: flex;
    align-items: center;
  }
</style>
