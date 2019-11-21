const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  const recipe = recipes.find(r => {
    const ingredients = r.ingredients;
    
    // Find out if each bakery has an ingredient from this recipe `r`
    const bakeryAHasIngredient = ingredients.some(ingredient => bakeryA.includes(ingredient));
    const bakeryBHasIngredient = ingredients.some(ingredient => bakeryB.includes(ingredient));
    
    return bakeryAHasIngredient && bakeryBHasIngredient;
  });
  
  if(recipe) {
    return recipe.name;
  } else {
    return undefined;
  }
}
