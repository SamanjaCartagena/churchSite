<template>
  <div>
   <header > </header>
    <div class="navs">
    <div class="navbar" v-for="room in rooms" :key="room">
          {{room}}
    </div>
    </div>
  
  
  </div>
</template>

<script>
export default {
  data(){
    return {
      rooms:['Chatroom','Scriptures','Psalms']
    }
  }

}
</script>

<style>
header{
    width:100%;
    height:55px;
    position: relative;
    top:40px;    

}
.navs{
  display: grid;
  grid-template-columns: auto auto auto;


}
@media (max-width: 400px){
  .navs {
  display: grid;
  grid-template-columns: auto ;
  }
}

.navbar{
  padding:15px;
  background-color: black;
  border:1px solid white;
  color:white;
}
.navbar:hover{
  background-color: white;
  border:1px solid black;
  color:black;
  cursor:pointer;
}

</style>