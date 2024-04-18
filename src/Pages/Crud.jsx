import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDelete,
  setEdit,
  setNameInput,
  setNewUser,
  setUserNameInput,
} from "../Features/Slice/CrudSlice";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import '../App.css'
// const [isToaster,setIsToaster]=useState(false)


function Crud() {
  // const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.crud);

  const handleEdit = (e, id) => {
    // setIsToaster(true)
    dispatch(setEdit(id));
  //   setTimeout(()=>{
  // setIsToaster(false)
  //   },[1000])
  };

  const handleDelete = (e, id) => {
    // setIsToaster(true)
    dispatch(setDelete(id));
    // setTimeout(()=>{
    //   setIsToaster(false)
    //     },[1000])
  };

  // useEffect(()=>{
  //    if(isToaster){
  //     toast('success')
  //    }
  //    else{
  //     toast('fail')
  //    }
  // },[isToaster])

  return (
    <>
     {/* <button onClick={notify}>Notify!</button> */}
     <ToastContainer toastStyle={{ backgroundColor: "white",progressBar:'red' }}
position="bottom-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition:Bounce
/>
      <div className='text-center '>
        <h1 className='mb-5'>
          {state.editid !== null ? "Edit User" : "Add User"}
        </h1>

        <form className='d-flex gap-4 flex-column align-items-end justify-Content-center'>
          <div>
            <label htmlFor='#'>Name</label>
            <input
              type='text'
              className='form-control-lg ms-5'
              placeholder='Name'
              aria-label='Username'
              aria-describedby='basic-addon1'
              name='name'
              onChange={(e) => dispatch(setNameInput(e.target.value))}
              value={state.name}
            />
          </div>

          <div>
            <label htmlFor='#'>userName</label>
            <input
              type='text'
              className='form-control-lg ms-5'
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
              name='userName'
              value={state.userName}
              onChange={(e) => dispatch(setUserNameInput(e.target.value))}
            />
          </div>

          <div>
            <button
              className='text-start text-primary'
              onClick={(e) => dispatch(setNewUser(e))}>
              {state.editid === null ? "Add new user" : "Edit User"}
            </button>
          </div>
        </form>
      </div>

      {/* lower section */}
      <div className='mt-5'>
        <h2>View users</h2>

        <table className='table mt-2'>
          <thead className='mb-5'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>userName</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>

          {state?.newUser?.map((item, id) => {
            return (
              <>
                <tr className='mt-5' key={id}>
                  <td>{item.name}</td>
                  <td>{item.userName}</td>
                  {/* <div> */}
                  <button
                    type='button'
                    class='btn btn-light text-dark px-2 '
                    onClick={(e) => handleEdit(e, id)}>
                    <span className="edit">Edit</span>
                  </button>
                  <button
                    type='button'
                    class='btn btn-light text-dark ms-3'
                    onClick={(e) => handleDelete(e, id)}>
                    <span className="delete">Delete</span>
                  </button>
                  {/* </div> */}
                </tr>

              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Crud;
