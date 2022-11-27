<template>
  <div class="student-list">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="computedData" stripe height="320">
      <el-table-column prop="id" label="编号" fixed></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" fixed></el-table-column>
      <el-table-column prop="sex_text" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="number" label="学号"></el-table-column>
      <el-table-column prop="class" label="班级"></el-table-column>
      <el-table-column prop="status_text" label="状态"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="phone" label="联系方式"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button icon="el-icon-delete" type="danger" size="mini" @click="del(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :page-sizes="[5, 10, 20]"
      layout="total,sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getStudentList } from '@/api/student'

export default {
  data() {
    return {
      formInline: {
        name: ''
      },
      tableData: [],
      currentPage: 1,
      pageSize: 5,
      total: 0
    }
  },
  created() {
    this.getList()
  },
  computed: {
    computedData() {
      return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  methods: {
    getList(params) {
      getStudentList(params).then((res) => {
        this.tableData = res.data.list
        this.total = res.data.total
        this.tableData.map((item) => {
          item.sex === 0 ? (item.sex_text = '男') : (item.sex_text = '女')
          if (item.status === 1) {
            item.status_text = '已入学'
          } else if (item.status === 2) {
            item.status_text = '未入学'
          } else if (item.status === 3) {
            item.status_text = '休学中'
          }
        })
      })
    },
    search() {
      this.tableData = this.tableData.filter((item) => item.name.includes(this.formInline.name))
      this.total = this.tableData.length
    },
    reset() {
      this.getList()
    },
    del(index) {
      console.log(index)
      this.tableData.splice((this.currentPage - 1) * this.pageSize + index, 1)
      this.total--
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>

<style lang="scss" scoped>
.student-list {
  .el-pagination {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
