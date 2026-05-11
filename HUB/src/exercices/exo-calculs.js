
function addition(a,b){
    return a + b;
}
function soustraction (a,b){
    if (b > a) {
        return b - a
    }
    else{
        return a - b
    }
}

function multiplication (a,b){
    return a * b
}

function division (a,b){
    return a / b
}

function modulo (a,b){
    return a % b
}

function log (a){
    return Math.log(a)
}
function puissance1 (a,b){
    return Math.pow(a, b)
}

function puissance (a,b){
    return a**b
}

function carre (a){
    return a * a
}

function f(a){
    return 4*a + 20
}

console.log("-----Application des fonctions-----")

console.log("5 + 8 =", addition(5,8));
console.log("5 - 8 =", soustraction(5,8));
console.log("5 * 8 =", multiplication(5,8));
console.log("5 / 8 =", division(5,8));
console.log("8,5 * 3 =" ,multiplication (8.5,3));
console.log("5 % 3 =" ,modulo(5,3));
console.log("log(8) =",log (8));
console.log("5^8 =",puissance1 (5,8));
console.log("5^8 =",puissance(5,8));
console.log("8^2 =",carre(8));
console.log("f(5) = 4*5 + 20 =",f(5));

console.log( `Bonjour 
    je m'appelle Francheska, 
    et j'apprends le développement web`
    )
