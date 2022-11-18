import React from "react";
import { STUDENT_GET_LIST_FAIL, STUDENT_GET_LIST_REQUEST, STUDENT_GET_LIST_RESET, STUDENT_GET_LIST_SUCCESS } from "../../Constants/StudentConstant";

const initialStateAdminStudents ={
    loading : false,
    status: false,
    data: null,
    error: null,
    errors: null
}

export const StudentGetListReducers = (state = initialStateAdminStudents, action: any) => {
    switch(action.type){
        case STUDENT_GET_LIST_RESET:
            return{
                ...initialStateAdminStudents
            }
        case STUDENT_GET_LIST_REQUEST:
            return{
                ...state,
                loading: true
            }     
        case STUDENT_GET_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }      
        case STUDENT_GET_LIST_FAIL:
            return{
                ...state,
                loading: false,
                status: false,
                error: action.payload
            }    
            default:
                return state;
    }
}