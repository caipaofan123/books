<template>
  <div id="app">
    <input type="text" name="" id="" :placeholder="'搜索-书本名称 '+msg" v-model="bookname" @keydown.enter="search">
  </div>
</template>

<script>
export default {
  name: 'BooksSearchs',
  inject:['msg'],
  data() {
    return {
        bookname:'',
    };
  },

  mounted() {},

  methods: {
    search(){
        this.$emit('search',this.bookname);
    }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
