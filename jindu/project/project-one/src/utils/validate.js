// 用户名校验
export function usernameValidate(rule, value, callback) {
  // 请输入4~20位昵称
  let reg = /^[\w-]{4,20}$/
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else if (!reg.test(value)) {
    callback(new Error('请输入4~20位'))
  } else {
    callback()
  }
}

// 密码校验
export function passwordValidate(rule, value, callback) {
  let reg = /^\S*(?=\S{6,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!reg.test(value)) {
    callback(new Error('请输入6~20位且包含大小写数字特殊符号'))
  } else {
    callback()
  }
}
