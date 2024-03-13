
const { createApp } = Vue;

createApp({

  data(){

    return{

      todoList: [

        {
          text:'bucato',
          done: false
        },
        {
          text:'spesa',
          done: false
        },
        {
          text:'ripasso',
          done: false
        },
        {
          text:'esercizio',
          done: false
        },
      ],

      newTask: [

        {
          text : '',
          done: false
        }
      ],

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
    },

    eliminaTask(indice){
      this.todoList.splice(indice, 1)
    }

  }
}).mount('#app');