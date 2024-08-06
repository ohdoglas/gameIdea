const cards = [
    armies = [
        {
            name: "Militia", //tipos: aldeoes, milicianos, arqueiros leves, lanceiros, espadachins leve, batedores
            size: 100, //pode variar de 50-200
            level: "low",
            attack: 1000, // pode varias de 500 a 1000 se tipo low
            defense: 1000,// pode varias de 500 a 1000 se tipo low
            speed: 70, //pode varias de 40 a 100
            moral: 20, //pode chegar de 0 a 100
            skill: method()
        },
        {
            name: "Knights Army", //tipos: cavaleiros, lanceiros veteranos, arqueiros montados, guerreros com machados, infantaria pesada, equipe de cerco, catapultas, etc
            size: 100, //pode variar de 50-200
            level: "mid",
            attack: 1500, //pode varias de 1050 a 1500 se tipo mid
            defense: 1500, //pode varias de 1050 a 1500 se tipo mid
            speed: 80, //pode varias de 40 a 80
            moral: 20, //pode chegar de 0 a 100
            skill: method()
        },
        {
            name: "Elite Swordsmen", //tipos: arqueiros de elite, cavalaria pesada, guardiões reais, bersekers, elite real
            level: "elite",
            size: 100, //pode variar de 50-200
            attack: 2500, //pode varias de 2000 - 2500 se tipo elite
            defense: 2300, //pode varias de 1050 a 1500 se tipo elite
            speed: 95, //pode varias de 40 a 95
            moral: 20, //pode chegar de 0 a 100
            skill: method()
        }
],
    resourceCards = {
        name: "wood", //tipos: madeira, ferro, comida,ouro, especiarias, tecidos, medicamentos, ferramentas
        description: "", //descrição
        value: 150, //valor total em wood minimo 100 maximo 500
        bonus: 100, //valor aleatório até 100 bonus em wood
        rarity: "common", //pode ser comum, incomum, raro
        comercialValue: 1 //pode variar de 1 a 300 dependendo o item

    },
    notableCards = {
        name: "Elden Auros",
        type: "Assassin", //tipos: monarcas, generais, heróis da população, espiões, comerciantes, conselheiros, engenheiro, principe, princesa, bruxo(a), religioso
        charisma: 45, // de 5 a 100
        influency: 100, // de 5 a 100
        skill: method(),
        loyalty: 100 // de 1 a 100
    },
    cityCards = {
        name: "Valdnor", // nome aleatório
        type: "Capital", // tipos: acampamento, aldeia, cidade pequena, cidade guarnecida, cidade grande, castelo, forte, torre, porto, vilarejo, distrito comercial, cidade capital
        productionIncreaser: [0.2, `per${10}Turns`], //sera a taxa de crescimento do nível de cada recurso a ser produzido por turno
        productionLvl: { //productionLvl é o quanto é produzido de carda recurso por turno
            wood: 20,
            iron: 5,
            food: 25,
            gold: 8,
            spices: 15,
            clothes: 10,
            medicine: 2,
            tools: 15
        },
        population: 10000,
        populationIncreaser: [10, "perTurn"], //nivel de incremento de população por turno
        defense: 10000,
        recruitCapacities: 100, //capacidade de recrutamento por turno
        skill: method(), //habilidade especial da cidade
        rarityItens: {
            reliques: {

            },
            treasures: {

            }
        }
    }
]

const eventCards = [{
    name: "Black Death",
    type: "Plague", //tipos: desastres naturais, conflito interno, conflito politico, festival, estações, doenças/pragas (podem ser eventos bons ou ruins)
    description: "Affects 75% of population. 8 to 10 people die if affected",
    effect: method(),
    effectTurns: 10,
    target: "Valdnor",
    probability: 25,
    impact: {
        //o que será impactado no mundo como atributos e etc
    }
}]



const player = {
    name: "King Elder",
        allResources: {
            wood: 20,
            iron: 5,
            food: 25,
            gold: 8,
            spices: 15,
            clothes: 10,
            medicine: 2,
            tools: 15
        },
        population: 15500,
        citieCount: 3,
        cities: [
            {
                name: "Valdnor",
                type: "Capital",
                productionIncreaser: [0.2, `per${10}Turns`],
                productionLvl: {
                    wood: 20,
                    iron: 5,
                    food: 25,
                    gold: 8,
                    spices: 15,
                    clothes: 10,
                    medicine: 2,
                    tools: 15
                },
                population: 10000,
                populationIncreaser: [10, "perTurn"],
                defense: 10000,
                recruitCapacities: 100,
                skill: method()
            },
            {
                name: "Elguen",
                type: "Castle",
                productionIncreaser: [0.2, `per${25}Turns`],
                productionLvl: {
                    wood: 20,
                    iron: 5,
                    food: 25,
                    gold: 8,
                    spices: 15,
                    clothes: 10,
                    medicine: 2,
                    tools: 15
                },
                population: 537,
                populationIncreaser: [10, "perTurn"],
                defense: 8000,
                recruitCapacities: 20,
                skill: method()
            },
            {
                name: "Valfenda",
                type: "Farm",
                productionIncreaser: [0.2, `per${5}Turns`],
                productionLvl: {
                    wood: 20,
                    iron: 5,
                    food: 25,
                    gold: 8,
                    spices: 15,
                    clothes: 10,
                    medicine: 2,
                    tools: 15
                },
                population: 235,
                populationIncreaser: [2, "perTurn"],
                defense: 575,
                recruitCapacities: 4,
                skill: method()
            }
        ],
        influency: 55,
        power: 33,
        coins: 515332,
        armyCount: 5000,
        army: [
            {
                name: "Militia",
                attack: 1000,
                defense: 1000,
                vigor: 100,
                confiance: 100,
                loyalty: 85,
                speed: 70,
                skill: method()
            }
        ]
}