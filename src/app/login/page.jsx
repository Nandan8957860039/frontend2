import React from 'react'
import classes from './login.module.css'


const login = () => {
  return (
    <div>
        <h1 className="text-5xl text-center">login page</h1>
        <button className='submit-btn'>Login button</button>
        <button className={classes.btn}>local css</button>
      
    </div>
  )
}

export default login;
