<template>
<div>
  <h1> {{question.string}}</h1>
  <div class="form-wrapper">
  <div class="form-container">
  <form>
    <label for="name">Name: </label><br>
    <input type="text" v-model="a"><br>
    <label for="date">Date:</label><br>
    <input type="text" v-model="b"><br>
    <label for="message">Your Answer:</label><br>
    <input class="submissionfield" type="message" v-model="c"><br><br>
    <button  v-on:click="addAnswer()">submit</button>
  </form>
  </div>
  </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'AnswerForm',
  props: {
  },
  data: function(){
    return{
      a: '',
      b: '',
      c: '',
    }
  },
  computed: {
    question() {
      return this.$route.params.id;
    },
  },
  methods:{
  async addAnswer() {
  try {
      this.$router.push({name: 'About', params: {id: this.$route.params.id}});
     await axios.post('/api/items', {
      id: this.question.id,
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
