console.log("------------------Exercices Variables----------------")

let string="francheska";
console.log(string);
let patipatita= 21 ;
console.log(patipatita);
let decimal="15.9"
console.log(decimal)
let array=["bonjour","francheska",28];
console.log(array);
console.log(array[2]);
console.log(array.length);
array.push("takuma");

let object ={
    message: "bonjour",
    prenom: "francheska",
    age: "28"
};
console.log(object);
console.log(object.message); //Notation avec le "." pour afficher précisement une propriété de l'objet// 

function salutation() {return "Hello world";}
let meeting = salutation();
console.log(meeting); 

//On peut optimiser en utilisant qu'une seule fois console log pour tout afficher//

console.log("-----------Utilisation de console.log une seule fois pour tout afficher------------");
console.log(string, patipatita, decimal, array, object,array[2], array.length, object.message, meeting);
console.log(typeof patipatita)