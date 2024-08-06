// Jogador inicial sem recursos ou cidades
const playerStarter = {
    name: "Novo Jogador",
    allResources: {
        wood: 0,
        iron: 0,
        food: 0,
        gold: 0,
        spices: 0,
        clothes: 0,
        medicine: 0,
        tools: 0
    },
    population: 0,
    citieCount: 0,
    cities: [],
    influency: 0,
    power: 0,
    coins: 0,
    armyCount: 0,
    army: []
};

// Jogador com valores iniciais e uma cidade nivelada
const player = {
    name: "King Elder",
    allResources: {
        wood: 150,
        iron: 50,
        food: 200,
        gold: 100,
        spices: 75,
        clothes: 50,
        medicine: 25,
        tools: 50
    },
    population: 5000,
    citieCount: 1,
    cities: [
        {
            name: "Valoria",
            type: "Cidade Pequena",
            productionIncreaser: [0.1, `per${5}Turns`],
            productionLvl: {
                wood: 15,
                iron: 5,
                food: 20,
                gold: 10,
                spices: 8,
                clothes: 5,
                medicine: 2,
                tools: 10
            },
            population: 3000,
            populationIncreaser: [5, "perTurn"],
            defense: 3000,
            recruitCapacities: 50,
            skill: function() {
                // Aumenta a eficiência na produção de alimentos
            }
        }
    ],
    influency: 25,
    power: 20,
    coins: 1000,
    armyCount: 200,
    army: [
        {
            name: "Infantry",
            attack: 1500,
            defense: 1200,
            vigor: 80,
            confiance: 90,
            loyalty: 85,
            speed: 60,
            skill: function() {
                // Aumenta a moral durante as batalhas
            }
        }
    ]
};
