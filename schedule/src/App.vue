<template>
  <div id="app">
    <el-container id="layout1"> 
      <el-header> 彩票选择系统</el-header>
      </v-container>
      <el-aside > 
        <!-- //todo  -->
       {{value1}}
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      >
    </el-date-picker>
      </el-aside>
      <el-main>
        <!-- //todo -->
        <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{this.value1}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>

      </el-main>
   </el-container>
  </div>
  </template>

<script>
export default {
  name: 'app',
  data () {
    return { msg: 'Welcome to Your Vue.js App',
             value1:'时间日期'
               }
         },
  method:{

  }
  }


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>
