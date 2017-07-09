<template>
  <div>
    <div class="img" style="border: 1px solid #ff9900;padding: 20px;width: 400px">
      图片上传:
      <el-upload
        class="upload-images avatar-uploader"
        accept="image/*"
        ref="upload"
        action=" http://mt.qeebu.cn/test/upload"
        list-type="picture-card"
        :auto-upload="false"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-button size="small" type="success" @click="submitUpload">上传图片到服务器</el-button>

    </div>
    <div class="video" style="border: 1px solid #ff0099;padding: 20px;margin-top: 20px;width: 400px">
      视频上传:
      <el-upload
        class="upload-images"
        accept="video/*"
        action=" http://mt.qeebu.cn/test/upload"
        list-type="text"
        ref="uploadVideo"
        :auto-upload="false"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-button size="small" type="success" v-on:click="uploadVideoToServer">上传视频到服务器</el-button>

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      submitUpload () {
        // 上传到服务器
        this.$refs.upload.submit()
      },
      uploadVideoToServer () {
        this.$refs.uploadVideo.submit()
      }
    }
  }
</script>
<style>
  .upload-images {
    margin: 20px auto;
  }
</style>
