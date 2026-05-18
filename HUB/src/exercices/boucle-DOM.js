allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);
let textTab = Array.from (allParagraphs);

textTab.map(param => 
    {param.innerText='LOL JE SUIS HACKERMAN' ; 
    param.style.color ='red';
});