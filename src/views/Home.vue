<template>
<div>
  <div class="wrapper">
  <div class="title">
  </div>
    <div class="search">
      <form>
        <label for="fas">Search Questions</label><br>
        <i class="fas" fa-search></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <QuestionsList :questions="questions" />
</div>
</template>

<script>
import QuestionsList from "@/components/QuestionsList.vue";

export default {
  name: "Home",
  components: {
    QuestionsList,
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  questions() {
    return this.$root.$data.questions.filter(question => question.query.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
  }
  }
};
</script>
