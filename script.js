/*Utiliza el siguiente cÃ³digo:*/

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

/*Paso 1:

Usando for...in, itere a travÃ©s del objeto spaceship.crew en el editor 
de cÃ³digo y obtenga console.log() una lista de roles y nombres de la 
tripulaciÃ³n en el siguiente formato: 
'[crew member's role]: [crew member's name]', 
por ejemplo, 'chief officer: Dan'. */

for (let role in spaceship.crew) {
  let crewMember = spaceship.crew[role];
  console.log(`${role}: ${crewMember.name}`);
}

/*Paso 2:
Usando for...in, itere a travÃ©s del objeto spaceship.crew en el editor de 
cÃ³digo y obtenga console.log() una lista de nombres y grados de la 
tripulaciÃ³n en el siguiente formato: 
'[crew member's name]: [crew member's degree]', 
es decir, 'Lily: Computer Engineering'.

*/
console.log("############ grado ##############");
for (let role in spaceship.crew) {
  const member = spaceship.crew[role]; // Acceder al objeto del miembro
  console.log(`${member.name}: ${member.degree}`); // Mostrar nombre y grado
}
