import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function RecipeIngre({ingredients}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }
  return (
    <div className='flex justify-center flex-col relative'>
      <button className=" w-full bg-grey-light border-2 rounded-lg border-green-700 p-2 shadow-lg font-sans text-lg font-medium mb-1" onClick={toggleDropdown}>Ingredients</button>
      {isOpen && (
        <div className='absolute bg-slate-200'>
          <div className='flex justify-between p-2'>
             <p className='text-2xl font-medium underline'>INGREDIENTS</p>
          <div onClick={toggleDropdown} className=' text-red-600 hover:cursor-pointer p-2'><FontAwesomeIcon icon={faXmark} /></div>
          </div>
         
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='font-oxygen'>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RecipeIngre