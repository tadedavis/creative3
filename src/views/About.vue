<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
      <label for="fas">Search Answers</label><br>
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <h1> {{this.$route.params.id.query}}?</h1>
  <div class="answers">
  <AnswerList :answers="answers"/>
  </div>
  <div class="answer">
  <button class="auto" v-on:click="newAnswer(question)"> Add your Own Answer</button>
</div>
</div>
</template>

<script>

import AnswerList from "../components/AnswerList.vue"
export default {
  name: "About",
  components: {
    AnswerList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    question() {
      return this.$route.params.id;
    },
    answers() {
    const array = [];
    for (let i = 0; i < this.$root.answers.length; i++){
      if(this.$root.answers[i].id === this.$route.params.id.id){
        array.push(this.$root.answers[i]);
      }
    }
    return array.filter(answer => answer.string.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  methods: {
  newAnswer(question){
    this.$router.push({name: 'AnswerForm', params: {id: question}});
  }
  }
};
</script>
