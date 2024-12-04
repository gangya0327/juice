<template>
  <div>
    <y-form :model="uForm" :rules="rules" ref="uForm">
      <y-form-item label="用户名" prop="username">
        <y-input v-model="uForm.username" placeholder="请输入用户名"></y-input>
      </y-form-item>
      <y-form-item label="密码" prop="password">
        <y-input type="password" v-model="uForm.password" placeholder="请输入密码"></y-input>
      </y-form-item>
      <y-form-item>
        <button @click="login">登录</button>
      </y-form-item>
    </y-form>
  </div>
</template>

<script>
import YInput from './YInput.vue';
import YFormItem from './YFormItem.vue';
import YForm from './YForm.vue';

export default {
  components: { YInput, YFormItem, YForm },
  data() {
    return {
      uForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          console.log('login success');
        } else {
          console.log('login error');
        }
      });
    },
  },
};
</script>
