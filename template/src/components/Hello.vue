<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div><a href="/test/index">go to Test</a></div>
    <div><a href="/test/subTest/subTest">go to subTest</a></div>
    <el-button :plain="true" :disabled="true">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
