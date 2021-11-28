<template>
<div>
<div class="title">
  <button class="auto" v-on:click="newQuestion">Ask a Question</button>
</div>
  <div class="wrapper">
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
import axios from 'axios';
export default {
  name: "Home",
  components: {
    QuestionsList,
  },
  data() {
    return {
      searchText: '',
      queries: [],
    }
  },
  created() {
    this.getQuestions();
  },
  computed: {
  questions() {
    return this.queries.filter(question => question.string.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
  }
  },
  methods: {
  newQuestion(){
    this.$router.push({name: 'QuestionForm'});
  },
  async getQuestions() {
  try {
    let response = await axios.get("/api/questions");
    this.queries= response.data;
    return true;
  } catch (error) {
    console.log(error);
  }
},
  }
};
</script>
