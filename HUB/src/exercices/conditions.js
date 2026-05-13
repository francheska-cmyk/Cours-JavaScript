let notesTibo = [0, 3, 4, 6, 18, 19, 4];
function calculerMoyenne(notes) {
    let somme = 0;
    let moyenne
    for (let i = 0; i < notes.length; i++) {
        //systeme de cumul des notes
        // somme = somme + notes[i];
        somme += notes[i];
    }
    return moyenne = (somme / notes.length).toFixed(2);
    if (moyenne >= 15){
        console.log(`Très bien`)
    }else if (moyenne >= 10) {
        console.log(`Assez bien`)
    } else {
        console.log(`refus`)
        
    } 
    }

let moyenneTibo = calculerMoyenne(notesTibo).toFixed(2);
console.log('La moyenne des notes de Tibo est :', moyenneTibo);