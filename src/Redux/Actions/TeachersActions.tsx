import { Dispatch } from "react";
import axios from 'axios';
import { TEACHERS_ADD_LIST_FAIL, TEACHERS_ADD_LIST_REQUEST, TEACHERS_ADD_LIST_RESET, TEACHERS_ADD_LIST_SUCCESS, TEACHERS_DELETE_FAIL, TEACHERS_DELETE_REQUEST, TEACHERS_DELETE_RESET, TEACHERS_DELETE_SUCCESS, TEACHERS_GET_LIST_FAIL, TEACHERS_GET_LIST_REQUEST, TEACHERS_GET_LIST_RESET, TEACHERS_GET_LIST_SUCCESS } from "../../Constants/constant";

export const GetTeachersListAction = (payload : any) => async (dispatch : Dispatch<any>) => {
    if(payload === "RESET"){
        dispatch({type: TEACHERS_GET_LIST_RESET});
    }else{
        try{
            dispatch({
                type: TEACHERS_GET_LIST_REQUEST
            });
            let data = await axios.post('http://localhost:5800/api/get-users', payload);
            if(data){
                dispatch({
                    type: TEACHERS_GET_LIST_SUCCESS,
                    payload: data?.data
                });
            }else{
                dispatch({
                    type: TEACHERS_GET_LIST_FAIL,
                    payload: data
                });
            }
        }catch(error: any){
            dispatch({
                type: TEACHERS_GET_LIST_FAIL,
                payload: error.message
            });
        }
    }
}

export const AddTeachersListActions = (payload: any) => async ( dispatch : Dispatch<any>) => {
    if(payload === "RESET"){
        dispatch({
            type: TEACHERS_ADD_LIST_RESET
        });
    }else{
        try{
            dispatch({
                type: TEACHERS_ADD_LIST_REQUEST
            });
            let data = await axios.post('http://localhost:5800/api/add-user', payload);
            if(data){
                dispatch({
                    type: TEACHERS_ADD_LIST_SUCCESS,
                    payload: data
                });
            }else{
                dispatch({
                    type: TEACHERS_ADD_LIST_FAIL,
                    payload: data
                });
            }
        }catch(error: any){
            dispatch({
                type: TEACHERS_ADD_LIST_FAIL,
                payload: error.message
            });
        }
    }
}

export const TeachersDeleteActions = (payload : any) => async (dispatch: Dispatch<any>) => {
   if(payload === 'RESET'){
    dispatch({
        type: TEACHERS_DELETE_RESET
    })
   }else{
    try{
        dispatch({
            type: TEACHERS_DELETE_REQUEST
        })
        let data = await axios.post('http://localhost:5800/api/delete-user', payload);
        if(data){
            dispatch({
                type: TEACHERS_DELETE_SUCCESS,
                payload: data
            })
        }else{
            dispatch({
                type: TEACHERS_DELETE_FAIL,
                payload: data
            })
        }
    }catch(error: any){
        dispatch({
            type: TEACHERS_DELETE_FAIL,
            payload: error.message
        })
      }
   }
}