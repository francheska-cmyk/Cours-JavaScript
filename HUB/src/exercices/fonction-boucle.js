let notesTibo = [0, 3, 4, 6, 18, 19, 4];

let moyenne // pas besoin de déclarer cette variable contrairement au pseudo code. Il faut mieux la déclarer qd on l'utilise plus tard pour le calcul. Cf. correction du prof.
function calculerMoyenne (tab){ //J'ai utilisé tab, mais il vaut mieux ajouter mettre notes car, le tableau a pour éléments des notes. C'est plus compréhensible
    let somme = 0; 
    for (let i = 0; i < tab.length ; i++)
        {
        somme += tab[i]; // Ici c'est le système de cumul. C'est pareil que somme = somme + tab[i];
        }
        return somme / tab.length }

console.log(calculerMoyenne (notesTibo)); 

console.log(`La moyenne des notes de Tibo est :${calculerMoyenne(notesTibo)}`)

// TODO .tofixed(2) (pour réduire à deux décimales après la virgule). L'exemple ci-dessous me permettra d'ajouter la décimale, en créant ici la variable moyenne. 

let moyenneTibo = calculerMoyenne(notesTibo).toFixed(2);
console.log(`La moyenne des notes de Tibo est :`,moyenneTibo)

//Pour afficher, parcourir les elements d'un tableau
// for (notes of notesTibo){
//     console.log(notes);
// }


// ? Correction de l'exercie par le prof 

console.log(`--------Correction-------`)
let notesTiboInShape = [0, 3, 4, 6, 18, 19, 4];
function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        //systeme de cumul des notes
        // somme = somme + notes[i];
        somme += notes[i];
    }
    return somme / notes.length;
}
let moyenneTiboInShape = calculerMoyenne(notesTiboInShape);
console.log('La moyenne des notes de TiboInShape est :', moyenneTiboInShape);


// ? Correction de l'exercie avec une autre méthode : foreach 
console.log(`--------Avec l'option forEach------`)
let notesTib = [0, 3, 4, 6, 18, 19, 4];
function calculerMoyenne(tab) {
    let sum = 0;
    tab.forEach(element => {
        sum += element;
    });
    return sum/tab.length;
}
console.log(`La moyenne de Tibo est de : ${calculerMoyenne(notesTib)}`);


// ? Correction de l'exercie avec une autre méthode : forOf
console.log(`--------Avec l'option forOf------`)
let notesTiboSportif = [0, 3, 4, 6, 18, 19, 4];
function calculerMoyenne(tab) {
    let somme = 0; 
    for(const element of tab){
        somme += element
    };
    return somme / tab.length;
}
console.log(`La moyenne de Tibo est de : ${calculerMoyenne(notesTiboSportif)}`);


if ( 2 == '2') {
    console.log(true);

}

if ( 2 == '[]') {
    console.log(true);
}else{
    console.log(false)
}
