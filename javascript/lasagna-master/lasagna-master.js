/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer) {
  switch (timer){
    case null:
    case undefined:
      return 'You forgot to set the timer.'
    case 0:
      return 'Lasagna is done.'
    default:
      return 'Not done, please wait.'
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  var amount = { noodles: 0, sauce: 0 };
  for (var i = 0; i < layers.length; i++) {
    if (layers[i] == 'noodles') {
      amount.noodles += 50; 
    } else if (layers[i] == 'sauce') {
      amount.sauce += 0.2; 
    }
  }
  return amount;
}

export function addSecretIngredient(friendsList, myList) {
  var secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  for (var i = 0; i < Object.keys(recipe).length; i++) {
    var ingredient = Object.keys(recipe)[i];
    scaledRecipe[ingredient] = recipe[ingredient] / 2 * portions;
  }
  return scaledRecipe;
}