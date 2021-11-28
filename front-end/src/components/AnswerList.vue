<template>
<div class="wrapper">
  <div class="question">
  <div v-if="answers.length === 0">
    <h3> No one has answered this question yet! </h3>
    </div>
    <div class="questions" v-for="answer in answers" :key="answer.id">
      <div class="info">
        <h2>{{answer.string}}</h2>
        <p>--{{answer.author}}, {{answer.date}}</p>
      </div>
      </div>
  </div>
  <br>
</div>
</template>

<script>
export default {
  name: 'AnswerList',
  props: {
    answers: Array,
  },
  methods: {

  }
}

</script>

<style>

</style>
