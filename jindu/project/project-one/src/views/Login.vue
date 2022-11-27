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
import { login } from '@/api/user'

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
          login(this.form).then((res) => {
            if (res.code === 200) {
              setToken('token', res.token)
              setToken('username', res.username)
              this.$message({ message: res.message, type: 'success' })
              this.$router.push('/student')
            }
          })
        } else {
          console.log('login fail')
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
  position: absolute;
  background: url(@/assets/bg.jpeg) no-repeat;
  background-size: cover;
  .title {
    font-size: 32px;
  }
  .box-card {
    width: 500px;
    margin: 250px auto;
    background-color: rgba(255, 255, 255, 0.85);
    .el-button {
      width: 100%;
    }
  }
}
</style>
