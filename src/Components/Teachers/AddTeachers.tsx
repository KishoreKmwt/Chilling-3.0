import React, { Fragment, useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {ToastContainer , toast} from 'react-toastify';
import { AddTeachersListActions, GetTeachersListAction } from '../../Redux/Actions/TeachersActions';

const AddTeachers = () => {

    const dispatch = useDispatch<any>();

    const formSchema = Yup.object().shape({
        name : Yup.string()
          .required("Please enter teacher's name")
          .trim("Please enter teacher's name")
          .min(1,"Minimum 2 letter required")
          .max(20, "maximum 20 letter valid"),

        email: Yup.string()
          .required("Please enter teacher's email")
          .email("Please enter a valid email")  
    })

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            name: "",
            email: "",
        }
    });

    const add_teacher = useSelector((state: any) => state.AddTeachersListState);
    const get_teacher = useSelector((state: any) => state.GetTeachersListState);
    

    const onSubmit = (payload : any) => {
        dispatch(AddTeachersListActions(payload));
        // window.location.href="/teachers"
    }

    useEffect(() => {
        dispatch(GetTeachersListAction(get_teacher?.data?.data?.id))
    },[dispatch]);

    useEffect(()=> {
        if(add_teacher?.status == true){
            dispatch(AddTeachersListActions('RESET'))
            toast.success(add_teacher?.data?.message);
            reset();
            // window.location.href= "/teachers";
        }
    },[dispatch,add_teacher?.status])
  return (
    <Fragment>
    <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18"> Teacher's Profile</h4>
                            <div className="page-title-right">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="p-2">
                                    <h4 className="page-title">Add Teacher's Name</h4>
                                    <form className="card" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                                        <div className="p-4">

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                <label htmlFor="name">Name<span>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder=" Name"
                                                        minLength={1}
                                                        maxLength={25}
                                                        {...register('name')}
                                                    />
                                                      <p className="text-danger">{errors?.name?.message ?? add_teacher?.error?.errors?.name?.message}</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                <label htmlFor="name">E-mail<span>*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder=" E-mail"
                                                        minLength={1}
                                                        maxLength={25}
                                                        {...register('email')}
                                                    />
                                                      <p className="text-danger">{errors?.email?.message ?? add_teacher?.error?.errors?.email?.message}</p>
                                                    </div>
                                            </div>
                                            <div className="mt-3">
                                                <button type="submit" className="btn btn-primary">Add</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <ToastContainer
                autoClose={1000}
                hideProgressBar={true}
                className="toast-chilling"
                position="top-center"
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
</Fragment>
  )
}

export default AddTeachers