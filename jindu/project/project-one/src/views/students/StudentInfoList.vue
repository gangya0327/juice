<template>
  <div class="student-infolist">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="success" @click="add">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="编号" fixed></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" fixed></el-table-column>
      <el-table-column prop="sex_text" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="father" label="父亲姓名"></el-table-column>
      <el-table-column prop="mother" label="母亲姓名"></el-table-column>
      <el-table-column prop="address" label="家庭地址"></el-table-column>
      <el-table-column prop="admissionDate" label="入校时间"></el-table-column>
      <el-table-column prop="phone" label="联系方式"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button icon="el-icon-edit" type="primary" size="mini" @click="edit(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="(isNew ? '添加' : '修改') + '学生信息'" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="labelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="labelWidth" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" :label-width="labelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父亲姓名" :label-width="labelWidth" prop="father">
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="母亲姓名" :label-width="labelWidth" prop="mother">
          <el-input v-model="form.mother" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" :label-width="labelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="入校时间" :label-width="labelWidth" prop="admissionDate">
          <el-date-picker
            v-model="form.admissionDate"
            value-format="yyyy-MM-dd"
            format="yyyy年MM月dd日"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="labelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getStudentInfoList } from '@/api/student'
import { done } from '@/api/common'

export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        sex: 0,
        age: '',
        father: '',
        mother: '',
        address: '',
        admissionDate: '',
        phone: ''
      },
      rules: {
        name: [{ required: true, message: '请输入' }],
        sex: [{ required: true, message: '请输入' }],
        age: [{ required: true, message: '请输入' }],
        address: [{ required: true, message: '请输入' }],
        admissionDate: [{ required: true, message: '请输入' }],
        phone: [{ required: true, message: '请输入' }]
      },
      labelWidth: '80px',
      isNew: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(params) {
      getStudentInfoList(params).then((res) => {
        this.tableData = res.data.list
        this.total = res.data.total
        this.tableData.map((item) => {
          item.sex === 0 ? (item.sex_text = '男') : (item.sex_text = '女')
        })
      })
    },
    add() {
      this.isNew = true
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    },
    confirm() {
      console.log(this.form)
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 新增
          if (this.isNew) {
            done().then((res) => {
              this.$message({ message: res.message, type: 'success' })
              this.tableData.unshift({
                id: this.tableData[this.tableData.length - 1].id + 1,
                sex_text: this.form.sex === 0 ? '男' : '女',
                ...this.form
              })
              this.dialogFormVisible = false
            })
          } else {
            // 编辑
            done().then((res) => {
              this.$message({ message: res.message, type: 'success' })
              this.$nextTick(function () {
                this.$refs.form.resetFields()
              })
              this.dialogFormVisible = false
            })
          }
        }
      })
    },
    edit(row) {
      this.isNew = false
      this.form = { ...row }
      this.dialogFormVisible = true
    },
    close() {
      // this.$refs.form.resetFields()
      this.dialogFormVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.student-infolist {
  .el-pagination {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
