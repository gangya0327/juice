import request from '@/utils/request'

// 学生列表查询
export function getStudentList(params) {
  return request({
    url: '/student/list',
    method: 'get',
    params
  })
}

// 学生列表查询
export function getStudentInfoList(params) {
  return request({
    url: '/student/infolist',
    method: 'get',
    params
  })
}
