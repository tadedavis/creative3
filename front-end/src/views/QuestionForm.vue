<template>
<div>
  <h1>What is your Question?</h1>
  <div class="form-wrapper">
  <div class="form-container">
  <form>
    <label for="name">Name: </label><br>
    <input type="text" v-model="a"><br>
    <label for="date">Date:</label><br>
    <input type="text" v-model="b"><br>
    <label for="message">Your Question:</label><br>
    <input class="submissionfield" type="message" v-model="c"><br><br>
    <button  v-on:click="addAnswer()">Ask Question</button>
  </form>
  </div>
  </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'QuestionForm',
  props: {
  },
  data: function(){
    return{
      a: '',
      b: '',
      c: '',
    }
  },

  methods:{
  async addAnswer() {
  try {
      this.$router.push({name: 'Home'});
     await axios.post('/api/questions', {
      author: this.a,
      description: this.c,
      date: this.b
    });

  } catch (error) {
    console.log(error);
  }
},
}
}

</script>

<style>
.form-wrapper {
display: flex;
justify-content: center;
}

.form-container {
  padding: 1em;
  width: 20em;
  background-color: #fff;
  }
  .submissionfield {
   height: 3em;
   }

</style>
