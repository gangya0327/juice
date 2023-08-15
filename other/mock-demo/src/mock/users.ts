import { mock } from 'mockjs';

mock(/.*?\/users/, 'get', {
  code: 0,
  // data: [
  //   { id: 1, name: 'yml', age: 35, address: '浙江省杭州市' },
  //   { id: 2, name: 'yxt', age: 26, address: '台湾省台中市' },
  //   { id: 3, name: 'yxm', age: 15, address: '江苏省苏州市' },
  // ],
  'data|3': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|20-30': 20,
      address: '@city(true)',
    },
  ],
  message: '操作成功',
});
