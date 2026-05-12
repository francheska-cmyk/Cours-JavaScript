let prenom = "Charlotte";
let genre = "feminin";
let adresse =` 170 rue des oscars 31200 Toulouse`;
let date_commande = new Date().toLocaleDateString('fr-FR') //Pour avoir la date automatique du jour
let heure_commande =`19h30`;
let temps_preparation = 40;
let prix_pizza = 15.90;
let quantite_pizza = 1;
let taille_pizza = "moyenne";
let heure_livraison = "20h20";
let commande = "pizza 8 fromages";
let supplement_1 = "pepperoni";
let prix_supplement_1 = 3.50;
let supplement_2 ="jambon sec";
let prix_supplement_2 = 2.30;
let dessert ="Tiramisu";
let prix_dessert = 5.30;
let boisson ="Sprite";
let prix_boisson = 1.50;
// let total = (prix_pizza*1) + (prix_supplement_1*1) + (supplement_2*1) + (prix_dessert*1);
let total = prix_pizza + prix_boisson + prix_dessert + prix_supplement_1 + prix_supplement_2;
// let number(total)= (prix_pizza*1) + (prix_supplement_1*1) + (supplement_2*1) + (prix_dessert*1);

console.log(total);

let facture = {
"N°commande" : 145,
"Heure de commande" : (heure_commande),
"Date de commande": (date_commande),
"Pizza commandée" : (commande),
}

console.log(facture)

let blague ="Pourquoi les pizzas sont-elles toujours bien entourées ? Parce qu\'elles ont une bonne croûte sociale !"
let message = `Merci d\'avoir commandé chez la pizzeria "Rafinata". A bientôt
Bon appétit !`

let message_general = `Le ${date_commande} à ${heure_commande} : 
Bonjour Mme Charlotte, votre pizza: ${commande} (${prix_pizza}€), taille : ${taille_pizza}, suppléments : ${supplement_1} et ${supplement_2}, est en cours de préparation.
Elle vous sera livrée dans 45 min, au ${adresse}.
${message}
---------------
${blague}`

console.log(message_general);