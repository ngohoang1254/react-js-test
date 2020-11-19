
import {ADD_USER_REQUEST,ADD_USER_FAILED,ADD_USER_SUCCESS} from "./constants";
import Axios from "axios";
export const actFectAddUser = (user) => {
    let accessToken = "";
    if(localStorage.getItem("userAdmin")){
       const userAdmin =  JSON.parse(localStorage.getItem("userAdmin"));
       accessToken = userAdmin.accessToken; 
    }
    return (dispatch) => {
        dispatch(actAddUserRequest());
        // Trải qua giai đoạn pending
        Axios({
            url : "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            method : "POST",
            data : user,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then((result) =>{
            dispatch(actAddUserSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actAddUserFailed(err));
        })
    }
}
const actAddUserRequest = () => {
    return {
        type : ADD_USER_REQUEST
    }
}
const actAddUserSuccess = (data) => {
    return{
        type : ADD_USER_SUCCESS,
        payload : data
    }
}
const actAddUserFailed = (err) => {
    return{
        type : ADD_USER_FAILED,
        payload : err 
    }
}