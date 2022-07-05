<template>
  <div id="app">
    <Searchs @search="search"></Searchs>
    <Bookviews :books="bookview" @find="find" @del="del"></Bookviews>
    <Addbooks @addbook="addbook"></Addbooks>
  </div>
</template>

<script>
import Searchs from './components/Searchs.vue'
import Bookviews from './components/Bookviews.vue'
import Addbooks from './components/Addbooks.vue'

export default {
  name: 'App',
  provide() {
    return {

      msg:'快点'
    }
  },
  data(){
    return {
      isDisabled: false,
      status:'view', //'serach','addview'
      books:[],
      book:[],
    }
  },
  components: {
    Searchs,
    Bookviews,
    Addbooks,
  },
  created(){
    this.$axios({
      url:'/api/getbooks',
    }).then(res => {
      console.log(res);
      this.books=res.data.data
    })
  },
  mounted(){

  },
  computed:{
    bookview(){
      if(this.status=='view'){
        return this.books
      }else if(this.status=='search'){
        return this.book
      }
    }
  },
  methods:{
    del(id){
      this.$axios({
        url:'/api/delbook',
        params: {id},
      }).then(res=>{
        alert(res.data.msg)
      })
    },
    find(id){
      this.$axios({
        url:'/api/getbooks',
        params:{
          id,
        }
      }).then(res=>{
        alert(JSON.stringify(res.data.data))
      })
    },
    search(bookname){
      this.$axios({
        url: '/api/getbooks',
        params:{
          bookname: bookname,
        }
      }).then(res=>{
        console.log(res);
        this.book=res.data.data
      })
      this.status='search'
    },
    addbook(bookobj){
      
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...bookobj,
        }
      }).then(res=>{
        console.log(res);
        alert(res.data.msg)
       
      })
    }
  }


};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
