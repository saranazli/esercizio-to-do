
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
        }
      ],

      newTask: [

        {
          text : '',
          done: false
        }
      ],

      errorMsg: '',

      clicked: false

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
      this.todoList.splice(indice, 1)
    },

    doneTask(){
      this.clicked = true
    }

  }
}).mount('#app');