function myFunction1 (number = 0) {
    console.log(`33 + ${number}`)
}

function myFunction2 (number1 = 0, number2 = 0) {
    console.log(number1 + number2)
}

myFunction1(3); 

myFunction2(5);

myFunction2(8, 9);

//! Pour mieux séparer la responsabilité de la fonction,on va dire que notre fonction doit retourner un résultat.
//! On fait l'affichage dans un autre endroit.(console.log)
//! On va aussi utiliser des paramètres par défaut pour éviter les erreurs de type "undefined".

function additionnerOpti(firstNumber=0, secondNumber=0) {
    return firstNumber + secondNumber;
}
console.log(additionnerOpti(2, 3));

// Ambiance fonction fléchée
const additionnerFleche = (firstNumber=0, secondNumber=0) => {
    return firstNumber + secondNumber;
}
console.log(additionnerFleche(2, 3));

// Ambiance fonction fléchée optimisée
const additionnerFlecheOpti = (firstNumber=0, secondNumber=0) => firstNumber + secondNumber;
console.log(additionnerFlecheOpti(2, 3));

// Ambiance fonction fléchée optimisée avec paramètre par défaut
const additionnerFlecheOptiDefault = (firstNumber=0, secondNumber=0) => firstNumber + secondNumber;
console.log(additionnerFlecheOptiDefault(2, 3));


//! Fonction sécurisée pour éviter les erreurs de type "undefined".
//! Avec gestion d'erreur.
function additionnerOptiSécurisée(firstNumber=0, secondNumber=0) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return firstNumber + secondNumber;
}
console.log(additionnerOptiSécurisée("azerty", 3));