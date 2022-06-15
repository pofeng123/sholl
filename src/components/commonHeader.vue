<template>
<header>
    <div class="l-content">
        <el-button plain icon ="el-icon-menu" size="mini"></el-button>
        <h3 style="color:#fff">首页</h3>
    </div>

    <div class="r-content">
        <el-dropdown>
            <span>
                <img class="use" :src="userImg">
            </span>

            <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
               <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
           </el-dropdown-menu>
</el-dropdown>

        
    </div>

</header>
</template>

<script>
export default {
name: 'commonHeader', 
  data() {
    return {
        userImg:require('assets/imges/00.jpg')

    }
  },
  components: {

  }
}
</script>

<style lang='less' >
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-content: center;
}
.l-content{
    display: flex;
    align-items: center;
    //  justify-content: space-between;
    
    .el-button{
        margin-right: 20px;

    }
 }

 .r-content{
     .use{
         widows: 40px;
         height: 40px;
         border-radius: 50%;
        
     }
 }

</style>
