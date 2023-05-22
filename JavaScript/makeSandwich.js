let bread1 = prompt("which bread would you like to have ");
let veggies1 = prompt("which are your fav vaggies ");
let souce1 = prompt( "which souce would you like to have" );

function makeSandwich(bread, vaggies, souce){
    let sandwich = bread + "bread" + vaggies + " " + souce + "sandwich";
    return sandwich;
}

let vegsandwich = makeSandwich(bread1, veggies1, souce1);
console.log(vegsandwich);
