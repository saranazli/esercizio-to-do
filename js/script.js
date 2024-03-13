
const { createApp } = Vue;

createApp({

  data(){

    return{

      todoList: [

        {
          text:'bucato',
          done: true
        },
        {
          text:'spesa',
          done: false
        },
        {
          text:'ripasso',
          done: false
        }
      ],

      newTask: [

        {
          text : '',
          done: false
        }
      ],

      errorMsg: '',

    }
  },

  methods: {

    addTask(){

      if(this.newTask.text.length >= 5){
        this.todoList.unshift(this.newTask)
        this.newTask = ''
        this.errorMsg = ''
      }else{
        this.errorMsg = 'attenzione il testo è troppo corto'
      }
    },

    eliminaTask(indice){

      if(this.clicked = true){
        this.todoList.splice(indice, 1)
      }

    },

    doneTask(myTask){
      this.done = true
    }

  }
}).mount('#app');