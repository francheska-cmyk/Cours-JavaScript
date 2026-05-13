//TODO : Pourquoi ca beug ?
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf);

// Bonjour  stagiaire, je viens de recevoir ton message concernant l'erreur dans ton code. 
// Le premier point bloquant que je constate est qu'il est difficile d'un regard extérieur de comprendre l'objectif de ta fonction. 
// Je te conseille d'appeler ta fonction et tes variables, paramètres par des thèmes, plus parlant. 
// Par exemple si ta fonction additionne des nombres, tu pourrais utiliser  : function additioner. Et appeler les paramètres de ta fonction : nombre1, nombre2, ...., si ce sont des nombres. 
// Ensuite, concernant ton code : 
// - tu l'as définie mais tune lui attribue aucun paramètre 
// - 