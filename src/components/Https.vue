<template>
  <div class="https">
    <p>这里展示网络请求axios</p>
    <el-table
      :data="tableData"
      stripe
      style="width: 80%;margin: 0 auto">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        label="住址">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :page-size="10"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [],
        total: 0
      }
    },
    methods: {
      getUserList: function () {
        console.log('getUserList')
        var that = this
        that.$axios.get('http://localhost:3000/user_list')
          .then(function (res) {
            console.log(res)
            if (res.data.status === 200) {
              that.total = res.data.total
              that.tableData = res.data.data
            }
          })
      }
    },
    mounted () {
      this.getUserList()
    }
  }
</script>
<style>
  .cell {
    text-align: center;
  }

  .https {
    text-align: center;
  }
</style>
