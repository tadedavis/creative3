<template>
<div class="wrapper">
  <div class="questions">
    <div class="questions" v-for="question in questions" :key="question.id">
      <div class="info">
        <h2>{{question.query}}?</h2>
        <p>{{question.author}}</p>
        <p>{{question.date}}</p>
      </div>
      <div class="answer">
        <button class="auto" v-on:click="answerQuestions(question)"> answer</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'QuestionsList',
  props: {
    questions: Array,
  },
  methods: {
    answerQuestions(question){
      this.$router.push({name: 'About', params: {id: question}});
    }
  }
}
</script>
