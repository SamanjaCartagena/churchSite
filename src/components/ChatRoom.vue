<template>
<center>
  <el-card class="box-card">
    
 
   <header-page></header-page>
   <nav-bar></nav-bar>

   <submit-page></submit-page>
    
  </el-card>
</center>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import NavBar from '../components/NavBar.vue'
import SubmitPage from '../components/SubmitPage.vue';
export default {
  data(){
    return{

    }
  },
  components:{
    HeaderPage, NavBar,SubmitPage
  }

}
</script>

<style>
*{
  margin:0;
  padding:0;
z-index:0;
}
#chat{
 position: relative;
 top:100px;
  background-color:white;
  height:900px;
  width:80%;
  border:.03px solid gray;
  
}
#chat p{
font-family: 'Dancing Script', cursive;
}
.box-card {
  width: 80%;
  height:400px;
}
</style>