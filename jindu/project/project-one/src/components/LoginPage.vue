<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">通用管理后台系统</span>
      </div>

      <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { usernameValidate, passwordValidate } from '@/utils/validate'
import { setToken } from '@/utils/token'

export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: 'Admin@123'
      },
      rules: {
        username: [{ validator: usernameValidate }],
        password: [{ validator: passwordValidate }]
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log('ok')
          this.axios
            .post('https://www.fastmock.site/mock/e4dd3c14cb41fd4290bc9156d8fefc40/web/user/login', this.form)
            .then((response) => response.data)
            .then((res) => {
              if (res.code === 200) {
                setToken('token', res.data)
                this.$message({ message: res.message, type: 'success' })
                this.$router.push('/home')
              }
            })
            .catch((err) => {
              console.error(err)
            })
        } else {
          console.log('fail')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  .title {
    font-size: 32px;
  }
  .box-card {
    width: 500px;
    margin: 30px auto;
    .el-button {
      width: 100%;
    }
  }
}
</style>
