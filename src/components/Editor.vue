<template>
  <div class="editor">
    <!--<el-radio-group v-model="radio3" @change="radioChange">-->
      <!--<el-radio-button label="VueEditor"></el-radio-button>-->
      <!--<el-radio-button label="CKEditor"></el-radio-button>-->
    <!--</el-radio-group>-->
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio3: 'VueEditor'
      }
    },
    methods: {
      radioChange: function (event) {
        if (event === 'VueEditor') {
          this.$router.push({path: '/editor/vue-editor'})
        } else {
          this.$router.push({path: '/editor/ckeditor'})
        }
      }
    }
  }
</script>
<style>
  .editor {
    text-align: center;
  }
</style>
