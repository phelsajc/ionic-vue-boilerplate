import api from './index'

export default {
    add(announcements) {
        return api.post('getCensus', announcements)
    },
    get(id) {
        return api.get('getCensus/' + id)
    },
    list(params) {
        return api.post('getCensus', params)
    },
    update(announcements) {
        return api.patch('getCensus', announcements)
    },
    delete(id) {
        return api.remove('getCensus', id)
    },
}