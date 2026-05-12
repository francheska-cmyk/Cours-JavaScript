let prenom = "Charlotte"
let genre = "feminin"
let adresse =` 170 rue des oscars 31200 Toulouse`
let date_commande = `12/05/2026`
let heure_commande =`19h30`
let temps_preparation = 40
let prix_pizza = 15.90
let taille_pizza = "moyenne"
let heure_livraison = "20h20"
let commande = "pizza 8 fromages"
let supplement_1 = "pepperoni"
let prix_supplement_1 = 3.50
let supplement_2 ="jambon sec"
let prix_supplement_2 = 2.30
let dessert ="Tiramisu"
let prix_dessert = 5.30
let boisson ="Sprite"
let prix_boisson = 1.50
let facture
function addition(a,b)
{
    return a + b;
}
// let facture = {
//     Numero_commande : 145,
//     heure_commande : ${date_commande},


// }



let blague ="Pourquoi les pizzas sont-elles toujours bien entourées ? Parce qu'elles ont une bonne croûte sociale !"
let message = `Merci d'avoir commandé chez la pizzeria "Rafinata". A bientôt
Bon appétit !`

let message_general = `Le ${date_commande} à ${heure_commande} : 
Bonjour Mme Charlotte, votre pizza: ${commande} ${taille_pizza}, suppléments : ${supplement_1}, ${supplement_2}, est en cours de préparation.
Elle vous sera livrée dans 45 min. 
${message}
---------------
${blague}`

console.log(message_general);