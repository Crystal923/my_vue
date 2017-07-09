<template>
  <div class="vue-editor">
    <h1>{{ msg }}</h1>
    <vue-editor class="editor" v-model="content"></vue-editor>
    <button v-on:click="save">保存</button>
  </div>
</template>

<script>
  import {VueEditor} from 'vue2-editor'
  export default {
    name: 'hello',
    components: {
      VueEditor
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        content: '',
        customToolbar: [
          ['bold', 'italic', 'underline'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['image']
        ]
      }
    },
    methods: {
      save: function () {
        console.log(this.content)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-editor {
    width: 80%;
    height: 242px;
    margin: 0 auto 20px;
    text-align: center;
  }
</style>
