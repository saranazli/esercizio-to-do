
const { createApp } = Vue;

createApp({

  data(){

    return{

      todoList: [

        'ripasso',
        'ripasso1',
        'ripasso2',
        'ripasso3'
      ],

      newTask: '',

      errorMsg: ''

    }
  },

  methods: {

    addTask(){

      if(this.newTask.length >= 5){
        this.todoList.unshift(this.newTask)
        this.newTask = ''
        this.errorMsg = ''
      }else{
        this.errorMsg = 'attenzione il testo è troppo corto'
      }
    }

  }
}).mount('#app');