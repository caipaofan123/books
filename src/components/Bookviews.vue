<template>
  <div id="app">
    <table>
        <thead>
            
                <th>序号</th>
                <th>书名</th>
                <th>作者</th>
                <th>出版商</th>
                <th>操作</th>
          
        </thead>
        
        <tbody>
            <Tr v-for="item in books" :key="item.id">
                 <td>{{item.id}}</td>
                 <td>{{item.bookname}}</td>
                 <td>{{item.author}}</td>
                 <td>{{item.publisher}}</td>
                 <td><a href="javascript:;" @click="del(item.id)">删除</a> <a href="javascript:;" @click="find(item.id)">详情</a></td>
            
            </Tr>
        </tbody>
    </table>

  </div>
</template>

<script>
// import Tr from './Tr.vue'
export default {
  name: 'BooksBookviews',
components:{
    // Tr,
},
props:{
    books:{
        type:Array,
        default:()=>[]

    }
},
  data() {
    return {};
  },

  mounted() {},

  methods: {
    find(id){
        this.$emit('find',id);
    },
    del(id){
        this.$emit('del',id)
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
table{
    border: 2px solid rebeccapurple;
    width: 500px;
    margin: 0 auto;
}
</style>
