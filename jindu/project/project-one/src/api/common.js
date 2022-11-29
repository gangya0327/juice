import request from '@/utils/request'

export function done() {
  return request({
    url: '/common/done',
    method: 'post'
  })
}
