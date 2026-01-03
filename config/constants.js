
const baseUrl = 'http://192.168.1.5:5000'
// const baseUrl = 'http://localhost:5000'

export const Constants = {
    baseUrl,
    //auth
    url_register: baseUrl + '/api/auth/user-register',
    url_login: baseUrl + '/api/auth/user-login',
    url_request_reset_password: baseUrl + '/api/auth/user-request-reset-password',
    // profile
    url_my_profile: baseUrl + '/api/user-profile/user-profiles/my-profile',
    url_profiles: baseUrl + '/api/user-profile/user-profiles',
    // shop
    url_shops: baseUrl + '/api/user/shops',
    url_menu_shops: baseUrl + '/api/user/menu/shops',
    // beautician
    url_beauticians_by_shop_id: baseUrl + '/api/user/beauticians/shop-id',
    url_beauticians: baseUrl + '/api/user/beauticians',
    // booking
    url_slots: baseUrl + '/api/booking/user-slots',
    url_bookings: baseUrl + '/api/booking/user-bookings',
    url_my_bookings: baseUrl + '/api/booking/user-bookings/my-bookings',
    // payment
    url_service_price: baseUrl + '/api/payment/service-price',
    url_order: baseUrl + '/api/payment/orders',
    url_verify: baseUrl + '/api/payment/verify',
    url_payments_by_booking_id: baseUrl + '/api/payment/user-payments/by-booking',
    // notification
    url_notifications: baseUrl + '/api/notification/user-notifications',
    url_read_notifications: baseUrl + '/api/notification/user-read-notifications',
    // review
    url_my_shop_review: baseUrl + '/api/review/reviews/shop/my-review',
    url_shop_reviews: baseUrl + '/api/review/reviews/shop',
    url_shop_reviews_by_user: baseUrl + '/api/review/reviews/shop/by-user',
    url_my_beautician_review: baseUrl + '/api/review/reviews/beautician/my-review',
    url_beautician_reviews: baseUrl + '/api/review/reviews/beautician',
    url_beautician_reviews_by_user: baseUrl + '/api/review/reviews/beautician/by-user',
    
}
