import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate= useNavigate();
    function clickHandler(){
        navigate("/support");
    }
  return (
    <div>
        <div>
            this is About page
        </div>
        <button onClick={clickHandler}>Move to Support Page
        </button>
    </div>
   
  )
}

export default About