<template>
  <div class="home">
     
  </div>
</template>
<script>
import Http from "../api/api";
// import tableCustom from '../components/tableCustom'

export default {
  name: "main-list",
  components: {},
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      mainList: [],
    };
  },
  methods: {
    submitForm() {},
    getMainList() {
    },
  },
  created() {
    this.getMainList();
  },
};
</script>
<style scoped>
.login-content {
  width: 500px;
  margin: 50px auto;
}
.login-list {
    margin: 20px auto;
    padding: 0 500px;
    line-height: 60px;
    text-align: center;
    font-weight: bolder;
}
</style>
