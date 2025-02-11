import {
    fetchUsers as fetchUsersApi,
    getCurrentUser as getCurrentUserApi,
    userLogin as userLoginApi,
    userRegister as userRegisterApi,
    userLogout as userLogoutApi
} from "../api/userAPI"

export const fetchUsers =()=> async(dispatch)=>{
    try {
        const users = await fetchUsersApi()
        dispatch({type:'FETCH_USERS_SUCCESS', payload:users})
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = (email, password)=>async(dispatch)=>{
    try {
        const user = await userLoginApi(email,password)
        dispatch({type:'USER_LOGIN_SUCCESS', payload:user})
        dispatch(getCurrentUserApi())
    } catch (error) {
        console.log(error)
    }
}

export const userLogout = ()=>async(dispatch)=>{
    try {
        const user = await userLogoutApi()
        dispatch({type:'USER_LOGOUT_SUCCESS', payload:user})
    } catch (error) {
        console.log(error)
    }
}

export const userRegister = (name,email,password)=>async(dispatch)=>{
    try {
        const user = await userRegisterApi(name,email,password)
        dispatch({type:"USER_REGISTER_SUCCESS", payload:user})
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentUser = ()=>async(dispatch)=>{
    try {
        const currentUser = await getCurrentUserApi()
        dispatch({type:'GET_CURRENT_USER_SUCCESS', payload:currentUser})
    } catch (error) {
        console.log(error)
    }
}