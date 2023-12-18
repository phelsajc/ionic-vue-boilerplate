import api from './index'

export default {
    add(announcements) {
        return api.post('getSDtations', announcements)
    },
    get(id) {
        return api.get('getSDtations/' + id)
    },
    list(params) {
        return api.post('getSDtations', params)
    },
    update(announcements) {
        return api.patch('getSDtations', announcements)
    },
    delete(id) {
        return api.remove('getSDtations', id)
    },
}