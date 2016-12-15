<template>
  <div id="app">
    <img src="../assets/logo.png">
    <el-button @click='handleClick' type="primary">{{test}}</el-button>
    <div><a href="/test2/test2">go to test2</a></div>
  </div>
</template>

<script>

import Hello from './Hello'
import request from 'superagent'

export default {
  name: 'app',
  data(){
    return{
      test:'element-ui'
    }
  },
  methods:{
    handleClick(){
      const vm = this
      request
      .post('/api/test')
      .query({ action: 'edit', city: 'London' }) // query string
      .send({body:'123'})
      .end(function(err, res){
        console.log(res.body)
        vm.test = res.body.t
      })
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
