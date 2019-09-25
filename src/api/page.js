import request from '@/utils/request'

export function getLinkUrl(data) {
	return request({
		url: 'reception/bootpage/list',
		method: 'post',
		data
	})
}