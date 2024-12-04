<template>
  <div>
    <k-form ref="uForm" :model="uForm" :rules="rules">
      <k-form-item label="用户名称" prop="username">
        <k-input v-model="uForm.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input type="password" v-model="uForm.password" placeholder="请输入密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="onSubmit">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from './KInput.vue';
import KFormItem from './KFormItem.vue';
import KForm from './KForm.vue';

export default {
  components: { KInput, KFormItem, KForm },
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
        password: [{ required: true, message: '请输入密码', trigger: 'change' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          const notice = this.$notice({ title: '提示', message: '登录成功', duration: 3000 });
          notice.show();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>
