import axios from "axios";
import React, { Dispatch } from "react";
import { STUDENT_GET_LIST_FAIL, STUDENT_GET_LIST_REQUEST, STUDENT_GET_LIST_RESET, STUDENT_GET_LIST_SUCCESS } from "../../Constants/StudentConstant";

export const StudentGetListActions = (payload: any) => async (dispatch: Dispatch<any>) => {
    if(payload == "RESET"){
        dispatch({
            type: STUDENT_GET_LIST_RESET
        });
    }else{
        try{
            dispatch({
                type: STUDENT_GET_LIST_REQUEST
            });
            let data = await axios.post('http://localhost:5800/api/get-students', payload);
            if(data){
                dispatch({
                    type: STUDENT_GET_LIST_SUCCESS,
                    payload: data?.data
                });
            }else{
                dispatch({
                    type: STUDENT_GET_LIST_FAIL,
                    payload: data
                });
            }
        }catch(error: any){
            dispatch({
                type: STUDENT_GET_LIST_FAIL,
                error: error.message
            });
        }
    }
}