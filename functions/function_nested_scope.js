

/**
 *  Eloquent JavaScript. Marijn Haverbeke.
 * @author dfleta
 */

 
 const hummus = function(factor) {

  // Se podría decir que ingredient es un CLOSURE,
  // ya que usa contenido fuera de su contexto y scope como lo es el usar el parametro "factor"
  const ingredient = function(amount, unit, name) {

      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
          unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);   // template literal syntax ES6 
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(1);