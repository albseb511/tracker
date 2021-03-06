export default {

    // Auth Endpoints
    login: {
        path: '/api/v1/auth/login/',
        method: 'POST',
        noAuth: true,
    },

    token_refresh: {
        path: '/api/v1/auth/token/refresh',
        method: 'POST'
    },

    token_verify: {
        path: '/api/v1/auth/token/verify',
        method: 'POST'
    },

    searchPatient:{
        path:'api/v1/patient/search/',
        method: 'GET'
    },

    getPatient: {
        path: '/api/v1/patient/{id}/'
    },

    patientList: {
        path: "/api/v1/patient"
    },
    getPatients: {
        path: '/api/v1/patient',
        method: 'GET'
    },
    getDistrictsList:{
        path:"/api/v1/district",
        method:"GET"
    },
    getFacilitiesList:{
        path:"/api/v1/facility",
        method:"GET"
    },
    createPatient:{
        path:"/api/v1/patient",
        method:"POST"
    },
    createConsultation:{
        path:"/api/v1/consultation",
        method:"POST"
    },

    // User Endpoints: not sure if we need them
    currentUser: {
        path: '/api/v1/users/getcurrentuser',
    },

    userList: {
        path: '/api/v1/users',
    },
    readUser: {
        path: '/api/v1/users',
    },

    createUser: {
        path: '/api/v1/users/add_user',
        method: 'POST',
    },

    updateUser: {
        path: '/api/v1/users',
        method: 'PUT'
    },

    partialUpdateUser: {
        path: '/api/v1/users',
        method: 'PATCH'
    },

    deleteUser: {
        path: '/api/v1/users',
        method: 'DELETE'
    }
}
