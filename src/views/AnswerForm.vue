<template>
<div>
  <h1> {{question.query}}?</h1>
  <form>
    <label for="name">Name: </label><br>
    <input type="text" v-model="a"><br>
    <label for="date">Date:</label><br>
    <input type="text" v-model="b"><br>
    <label for="message">Your Answer:</label><br>
    <input type="text" v-model="c"><br>
    <button  v-on:click="addAnswer()">submit</button>
  </form>
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
