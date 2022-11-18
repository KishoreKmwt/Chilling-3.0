import React from "react";
import { TEACHERS_ADD_LIST_FAIL, TEACHERS_ADD_LIST_REQUEST, TEACHERS_ADD_LIST_RESET, TEACHERS_ADD_LIST_SUCCESS, TEACHERS_DELETE_FAIL, TEACHERS_DELETE_REQUEST, TEACHERS_DELETE_RESET, TEACHERS_DELETE_SUCCESS, TEACHERS_GET_LIST_FAIL, TEACHERS_GET_LIST_REQUEST, TEACHERS_GET_LIST_RESET, TEACHERS_GET_LIST_SUCCESS } from "../../Constants/constant";


const initialStateAdminTeachers = {
    loading: false,
    status: false,
    data: null,
    error: null,
    errors: null
}

export const GetTeachersListReducer = (state = initialStateAdminTeachers, action: any ) => {
    switch(action.type){
        case TEACHERS_GET_LIST_RESET:
        return {
            ...initialStateAdminTeachers
        }
        case TEACHERS_GET_LIST_REQUEST: 
        return{
            ...state,
            loading: true
        }
        case TEACHERS_GET_LIST_SUCCESS:
        return{
            ...state,
            loading: false,
            status: true,
            data: action.payload
        } 
        case TEACHERS_GET_LIST_FAIL:
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


export const AddTeachersListReducers = (state = initialStateAdminTeachers, action: any ) => {
    switch(action.type){
        case TEACHERS_ADD_LIST_RESET:
            return{
                ...initialStateAdminTeachers
            }
        case TEACHERS_ADD_LIST_REQUEST:
            return{
                ...state,
                loading: true
            }  
        case TEACHERS_ADD_LIST_SUCCESS: 
            return{
                ...state,
                loading: false,
                status: true,
                data:action.payload 
            } 
        case TEACHERS_ADD_LIST_FAIL:
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

export const TeachersDeleteReducers = (state = initialStateAdminTeachers, action: any) => {
    switch(action.type){
        case TEACHERS_DELETE_RESET:
            return {
                ...initialStateAdminTeachers
            }
        case TEACHERS_DELETE_REQUEST: 
            return{
                ...state,
                loading : true
            }
        case TEACHERS_DELETE_SUCCESS: 
            return{
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }    
        case TEACHERS_DELETE_FAIL: 
             return{
                ...state,
                loading: false,
                status: false,
                error: action.payload
             }    
             default: 
             return state;
    }
};