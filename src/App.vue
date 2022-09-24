<template>
  <div>
    <chat-room>

    </chat-room>
  </div>
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
</style>