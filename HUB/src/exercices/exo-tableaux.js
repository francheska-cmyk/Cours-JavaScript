let nom ="José";
let age = "42 ans";
let passions= ["badminton", "danse"];
let tabUser = [
    (nom), (age),(passions)
];

console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);

//Exemple avec PUSH pour ajouter d'autres éléments au tableau. Mais il  s'ajoute à la fin du tableau 
console.log(`Avant ajout : ${passions}`);
passions.push ("Echec" , "Théâtre");
console.log(`Après ajout : ${passions}`);

//Exemple avec POP pour supprimer le dernier élément d'un tableau 
console.log(`Avant suppression : ${passions}`);
passions.pop();
console.log(`Après suppression : ${passions}`);
