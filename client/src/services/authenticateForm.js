import API from '@/services/Api'

export default {
    sendmail: (credentials) => {
        return API().post('sendmail', credentials)
    },
}
