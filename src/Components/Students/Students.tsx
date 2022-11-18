import React, { useEffect, useState } from 'react';
import  MaterialReactTable  from 'material-react-table';
import {useDispatch , useSelector} from 'react-redux'
import type { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/react-table';
import { StudentGetListActions } from '../../Redux/Actions/StudentActions';
import { paginationQuery } from '../../Utils/Helper';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Students = () => {

    const get_students = useSelector((state: any) => state.StudentGetListState);


    const dispatch = useDispatch<any>()
    const [tableData , setTableData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefetching, setIsRefetching] = useState(false);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
    });

    const columns : any = [
        {
            accessorKey: 'id',
            header: "S. no"
        },
        {
            accessorKey: 'name',
            header: "Name"
        },
        {
            accessorKey: 'roll_no',
            header: "Roll_no"
        },
        {
            accessorKey: 'Address',
            header: "Address"
        },
        {
          header: 'Action',
          accessorFn: (row: {id: any}) => <>
          <Link to={''} className="btn btn-primary btn btn-sm mx-3"><i className="fas fa-edit" title="Edit"></i></Link>
          <><Link className="btn btn-danger btn btn-sm"  to={''} ><i className="fas fa-trash-alt" title="Delete"></i> </Link></>
          </>
      
      }
    ];

    useEffect(() => {

        const fetchData = async () => {
          if (!get_students?.data) {
            setIsLoading(true);
          } else {
            setIsRefetching(true);
          }
    
          try {
            let query: any = paginationQuery(
              pagination.pageIndex,
              pagination.pageSize,
              sorting ,
              globalFilter,
              columnFilters
            )
            await dispatch(StudentGetListActions(query));
    
          } catch (error) {
            setIsError(true);
            console.error(error);
            return;
          }
          setIsError(false);
          setIsLoading(false);
          setIsRefetching(false);
        };
        fetchData();
    
      }, [
        columnFilters,
        globalFilter,
        pagination.pageIndex,
        pagination.pageSize,
        sorting,
      ]);

    //   useEffect(() => {
    //     let query: any = {
    //       page: pagination.pageIndex,
    //       pageSize: pagination.pageSize,
    //       orderBy: { field: sorting ? sorting[0]?.id : 'dd' },
    //       search: globalFilter,
    //       orderDirection: (sorting.length > 0 ? sorting[0]?.desc ? 'DESC' : 'ASC' : 'DESC'),
    //       columnFilters,
    //     }
    //     if (delete_teachers?.status) {
    //       dispatch(GetTeachersListAction(query));
    //       dispatch(TeachersDeleteActions('RESET'));
    //     }
    
    //   }, [dispatch,delete_teachers?.status])


//   const confirmDelete = async (id: number) => {
//     Swal.fire({
//       title: "Are You Sure",
//       text: "You want to delete this details",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#31CE36',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Ok'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleteData(id);
//       }
//     });
//   };

//   const deleteData = async (id: number) => {
//     const params = {
//       "id":id
//     }
//     dispatch(TeachersDeleteActions(params));
//   };

    useEffect(() => {
        console.log( get_students?.data)
        setTableData( get_students?.data?.data);
      }, [ get_students?.data])


  return (
    <>

    <div className="main-content">
       <div className="page-content">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-12">
                       <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                           <h4 className="mb-sm-0 font-size-18">List Of Student's</h4>
                       </div>
                        <div className='row'>
                       <div className="col-md-12">
                  <Link to={"/teachers-add"} className="btn btn-primary mb-3 " style={{ float: "right" }}>
                    Add Student
                  </Link>
                </div>
                </div>
                       <MaterialReactTable 
                            columns={columns}
                            data = {tableData}
                       />
                   </div>
               </div>  
           </div>  
       </div>  
       </div>   
    </>
  )
}

export default Students;