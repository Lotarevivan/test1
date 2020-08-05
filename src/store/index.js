import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form:{
      name:{
        value:'',
        isvalid:''
      },
      email:{
        value:'',
        isvalid:''
      },
      phone:{
        value:'',
        isvalid:''
      },
      rules:{
        value:true,
        isvalid:true
      },
      country:{
        value:'Российская федерация',
        isvalid:true
      }
    }
  },
  mutations: {
    SET_name(state,payload){
      state.form.name.value=payload.value
      state.form.name.isvalid=!payload.isvalid
    },
    SET_email(state,payload){
      state.form.email.value=payload.value
      state.form.email.isvalid=!payload.isvalid
    },
    SET_country(state,payload){
      state.form.country.value=payload.value
      state.form.country.isvalid=true
    },
    SET_phone(state,payload){
      let v = payload.value;
      if (v.match(/^\d{1}$/) !== null) {
        payload.value = v + '-';
      } 
      
      else if (v.match(/^\d{1}-\d{3}$/) !== null) {
        payload.value += '-';
      }
      else if (v.match(/^\d{1}-\d{3}-\d{3}$/) !== null) {
        payload.value += '-';
      }
      else if (v.match(/^\d{1}-\d{3}-\d{3}-\d{2}$/) !== null) {
        payload.value +='-';
      }
      
      state.form.phone.value=payload.value
      if(payload.value.length===15){
        
        state.form.phone.isvalid=true
      }
      else{state.form.phone.isvalid=false}
      
     
      

    },
    SET_rules(state,payload){
     
      state.form.rules.value=payload.value
      state.form.rules.isvalid=payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
