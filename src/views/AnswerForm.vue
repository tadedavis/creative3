<template>
<div>
  <h1> {{question.query}}?</h1>
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
  methods: {
    addAnswer(){
      this.$root.$data.answers.push({
      id: this.$route.params.id.id,
      key: this.$root.$data.answers.length + 1,
      author: this.a,
      date: this.b,
      string: this.c,
      });
      console.log(this.$root.$data.answers.length);
      this.$router.push({name: 'About', params: {id: this.$route.params.id}});
    },
  },
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
