var pizza = {
    crustType: "deep dish", 
    sauceType: "traditional",
    cheeses: "mozzarella",
    toppings: ["pepperoni", "sausage"],

    }

function pizzaOven ( crustType , sauceType , cheeses , toppings) {
    var pizza = {};
    pizza.curstType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven ("deep dish" , "traditional" , "mozzarella" , ["pepperoni" , "sausage"]);
console.log(pizza1);


var pizza2 = pizzaOven ("hand tossed" , "marinara" , ["mozzarella" ,"feta"] , ["mushrooms" , "olives" , "onions"] );
console.log(pizza2);

var pizza3 = pizzaOven ("thin crust" , "spicy sauce" , "Cheddar Cheese", ["pepperoni" , "mashrooms" , "tomato"]);
console.log(pizza3);

var pizza4 = pizzaOven ("thick crust" , "sweet sauce" , ["parmesan" , "goat cheese"] , ["sausage","garlic" , "pepper"] );
console.log(pizza4)

var pizza5 = Math.random(pizzaOven);
