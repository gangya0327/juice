// 用户信息
function createUserList() {
  return [
    {
      userId: 1,
      avatar: '',
      username: 'admin',
      password: '123456',
      desc: '超级管理员',
      roles: ['admin'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'admin',
    },
    {
      userId: 2,
      avatar: '',
      username: 'system',
      password: '123456',
      desc: '系统管理员',
      roles: ['system'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'system',
    },
  ];
}

export default [
  // 用户登录
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createUserList().find((item) => item.username === username && item.password === password);
      if (!checkUser) {
        return { code: 201, data: { message: '账号或密码不正确' } };
      }
      const { token } = checkUser;
      return { code: 200, data: { token } };
    },
  },
  // 用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token;
      const checkUser = createUserList().find((item) => item.token === token);
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } };
      }
      return { code: 200, data: { checkUser } };
    },
  },
];
