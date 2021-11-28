<template>
<div class="wrapper">
  <div class="question">
    <div class="questions" v-for="question in questions" :key="question.id">
      <div class="info">
        <h2>{{question.string}}</h2>
        <p>--{{question.author}}, {{question.date}}</p>
      </div>
      <div class="answer">
        <button class="auto" v-on:click="answerQuestions(question)">View Answers</button>
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

<style>
.wrapper{
  margin-top :5px;
  display: flex;
 justify-content: center;
 width: 100%;
}

.question {
width: 30em;
flex-direction: column;
}

.questions {
  border: 1px solid black;
  background-color: white;
  margin: 5px;
  padding: 5px;

}
</style>
