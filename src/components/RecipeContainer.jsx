import React, { useContext } from 'react';
import { Navbar } from '../Context/Context';
import RecipeImg from './RecipeImg';
import RecipeName from './RecipeName';
import RecipeIngre from './RecipeIngre';
import CompleteRecipe from './CompleteRecipe';

function RecipeContainer() {
  const recipeList = useContext(Navbar);

  return (
    <>
     {recipeList && recipeList.length > 0 ? recipeList.map((list, index) => (
        <div key={index} className='w-80 p-3 text-black bg-gray-50 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] m-2 '>
          <RecipeImg image={list.recipe.image} />
          <RecipeName name={list.recipe.label} />
          <RecipeIngre ingredients={list.recipe.ingredientLines} />
          <CompleteRecipe url={list.recipe.url} />
        </div>
      )) : (
        <div className='w-full h-96 bg-cover ' style={{backgroundImage: 'url("./src/cover.png")'}}></div>
      )}
    </>
  );
}

export default RecipeContainer;
