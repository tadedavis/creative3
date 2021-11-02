<template>
<div class="wrapper">
  <div class="questions">
    <div class="questions" v-for="answer in answers" :key="answer.key">
      <div class="info">
        <li><strong>{{answer.string}}</strong> --{{answer.author}}, {{answer.date}}</li>
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
