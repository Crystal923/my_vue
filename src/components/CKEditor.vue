<template>
  <div style="width: 100%;height: 100%" class="ckeditor">
    <textarea id="editor" class="cke" rows="10" cols="80"></textarea>
    <button v-on:click="getDatas">获取富文本数据</button>
    <div id="text"></div>
    <div id="chooseImg" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <span>图片上传</span>
          </div>
          <div class="modal-body">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="http://mt.qeebu.cn/test/upload"
              :on-remove="handleRemove"
              :auto-upload="false"
              :on-success="handleSuccess">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import CKEDITOR from 'CKEDITOR'
  export default {
    data () {
      return {
        dialogVisible: true,
        myEditor: {}
      }
    },
    methods: {
      getDatas: function () {
        document.getElementById('text').innerText = CKEDITOR.instances['editor'].getData()
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      submitUpload () {
        // 上传到服务器
        this.$refs.upload.submit()
      },
      handleSuccess (res) {
        console.log('上传成功', res.data.url)
        this.dialogVisible = false
        document.getElementById('chooseImg').style.display = 'none'
        CKEDITOR.instances.editor.insertHtml("<img src='" + res.data.url + "' />")
      },
      getUserList: function () {
        var that = this
        that.$axios.get('http://localhost:3000/user_list')
          .then(function (res) {
            if (res.data.status === 200) {
              that.tableData = res.data.data
            }
          })
      }
    },
    mounted () {
      this.myEditor = CKEDITOR.replace('editor',
        {
          height: '200px',
          width: '60%',
          toolbar: 'Full'
        }
      )
    }
  }

</script>
<style>
  .cke {
    margin: 20px auto;
  }

  div#cke_editor {
    margin: 30px auto;
  }

  .ckeditor {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  #chooseImg {
    display: none;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: 600px;
    margin: 30px auto;
  }

  .modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  }
</style>
