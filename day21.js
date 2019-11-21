const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    const a = ~bakeryA.indexOf(recipe.ingredients[0])
    const b = ~bakeryA.indexOf(recipe.ingredients[1])
    const c = ~bakeryB.indexOf(recipe.ingredients[0])
    const d = ~bakeryB.indexOf(recipe.ingredients[1])
    
    if ((a || b)  && (c || d)) {
      return recipe.name;
    }
  }
}