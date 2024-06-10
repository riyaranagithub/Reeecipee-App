import React from 'react'

function CompleteRecipe({url}) {
  return (
    <div className='flex justify-center'>
      <button className="w-full bg-grey-light border-2 rounded-lg border-green-700 p-2 shadow-lg font-sans text-lg font-medium" onClick={()=>{window.open(url)}}>Complete Recipe</button>
    </div>
  )
}

export default CompleteRecipe