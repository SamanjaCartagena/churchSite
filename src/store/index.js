import { createStore } from "vuex"
import auth from './modules/auth.js';
const store=createStore({
    modules:{
       namedSpace:true,
       auth
    },
    state:{
        username:'',

    },
    getters:{
        getUsername(){
            return state.username
        }

    },
   actions:{

   },
   mutations:{

   }

})
export default store