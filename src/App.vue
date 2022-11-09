<template>
  <el-row :gutter="20">
    <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark" />

    <chat-room>

    </chat-room>
    </el-col>
  </el-row>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue'
export default {
 components:{
  ChatRoom
 }
}
</script>

<style>
#app{
background: url(assets/images/sistine.jpeg);
background-size: cover;
background-repeat: no-repeat;
height:1200px;
position: absolute;
width:100%;
z-index: 0;
  box-sizing: border-box;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>