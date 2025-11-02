
const baseUrl = 'http://192.168.1.5:5000'

export const Constants = {
    baseUrl,
    url_register: baseUrl + '/api/auth/user-register',
    url_login: baseUrl + '/api/auth/user-login',
    url_requestResetPassword: baseUrl + '/api/auth/user-request-reset-password'
    
}
