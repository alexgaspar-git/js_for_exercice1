// - # Exo 1 Boucle FOR
//   ## Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20
//   ## Affichez les chiffres et dites si c'est un nombre paire ou impaire

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// - # Exo 2 Boucles FOR
//   ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//   ## - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau

let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]

coding16.forEach(element => {
    console.log(`Bonjour ${element}`)
});

// - # Exo 3 Boucles FOR 
//   ## - Dans un prompt inserés un nombre
//   ## - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

let num = parseInt(prompt("nombre?"));

for (let i = 0; i <= num; i++) {
    console.log(i);
}