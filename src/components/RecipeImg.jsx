import React from 'react'
function RecipeImg({image}) {
  return (
    
         <div className='w-full h-80 bg-cover ' style={{backgroundImage:`url(${image})`}}>
         
         </div>
    
  )
}

export default RecipeImg