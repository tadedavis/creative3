<template>
<div class="wrapper">
  <div class="questions">
    <div class="questions" v-for="answer in answers" :key="answer.key">
      <div class="info">
        <h2>{{answer.string}}</h2>
      </div>
      </div>
  </div>
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
