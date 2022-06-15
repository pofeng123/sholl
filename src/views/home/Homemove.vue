<template>
  <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top:20px">

        <!-- <el-card class="box-card">
            <div slot="header" class="clearfix">
             <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
    
              </div>
       </el-card> -->

          <el-card shadow="hover" >
              <div class="user">
                  <img :src="userImg"  width="80" height="80"/>
                  <div class="userinfo">
                      <p class="name">Admin</p>
                      <p class="name">超级会员</p>
                  </div>
              </div>
              <div class="login-info">
                  <p>上次登录的时间:<span>2022-6-10</span></p>
                  <p>上次登录地点:<span>中国</span></p>
              </div>
          </el-card>

      </el-col>
  </el-row>
</template>

<script>
export default {
name: 'home', 
  data() {
    return {
        userImg:require('assets/imges/00.jpg')

    }
  },
  components: {
              

  }
}
</script>

<style scoped >


</style>
