<template>
  <div id="app">
    <input type="text" name="" id="" v-model="bookobj.bookname" />
    <br />
    <input type="text" name="" id="" v-model="bookobj.author" />
    <br />
    <input type="text" name="" id="" v-model="bookobj.publisher" />
    <br />
    <button @click="addbook">新增</button>
  </div>
</template>

<script>
export default {
  name: 'BooksAddbooks',
props:['isDiabled'],
  data() {
    return {
      bookobj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },

  mounted() {},

  methods: {
    addbook() {
      this.$emit('addbook',this.bookobj);
      this.bookobj.bookname=''
      this.bookobj.author=''
      this.bookobj.publisher=''
    },
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
