import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
    const navigate= useNavigate();
    function clickHandler(){
        navigate("/labs")
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>This is Support </div>
        <button onClick={clickHandler}>Move to labs Page</button>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support