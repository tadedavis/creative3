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
  <h1> {{this.$route.params.id.string}}</h1>
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
import axios from 'axios';
export default {
  name: "About",
  components: {
    AnswerList
  },
  data() {
    return {
      searchText: '',
      answers: [],
      unfiltered: [],
    }
  },
  created() {
    this.getAnswers(this.$route.params.id);
  },
  computed: {
    question() {
      return this.$route.params.id;
    },

   },
  methods: {
  async getAnswers(question) {
  try {
    let response = await axios.get("/api/items");
    let array = []
    this.unfiltered = response.data;
    this.unfiltered.forEach(function(item){
        if(item.id === question.id){
          array.push(item);
        }
    })
    this.answers= array;
    return true;
  } catch (error) {
    console.log(error);
  }
},
  newAnswer(question){
    this.$router.push({name: 'AnswerForm', params: {id: question}});
  }
  }
};
</script>
