<template>
  <div class="Home">
    

<el-container style="hegiht:100%">
  <!-- 左边栏 -->
  <el-aside width="auto">
    <common-aside/>
  </el-aside>

  <el-container>
    <!-- 头部 -->
    <el-header>
     <common-header/>
    </el-header>

<!-- 中间内容 -->
    <el-main>
    
   <!-- <homemove/> -->
      <router-view/>

    </el-main>
    <!-- 中间内容结束 -->

  </el-container>

</el-container>

  </div>
</template>

<script>
import CommonAside from'components/commonAside'
import commonHeader from'components/commonHeader'

// import Homemove from'views/home/Homemove'




export default {
name: 'Home', 
  data() {
    return {

    }
  },
  components: {
    CommonAside,
    commonHeader,
    // Homemove
 
    

  }
}

</script>

<style lang='less'>
.el-header{
  background-color: #333;

}
.el-main{
  padding-top: 0;
  
}

</style>
