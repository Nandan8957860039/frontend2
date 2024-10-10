import React from 'react'

const MyButton = ({children}) => {
  return (
    <button className='p-4 rounded-md bg-violet-500 text-white hover:bg-voilet-700'>{children}</button> 
  )
}

export default  MyButton;