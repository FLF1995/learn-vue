import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'eyousystem/login/token',
    method: 'post',
    data
  })
}

export function getInfo() {
	return request({
	  url: 'eyousystem/role/getMenuCode',
	  method: 'get'
	})
}