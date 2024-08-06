
const enemy2 = {
    name: "Queen Ironclaw",
    allResources: {
        wood: 120,
        iron: 60,
        food: 160,
        gold: 90,
        spices: 50,
        clothes: 30,
        medicine: 15,
        tools: 45
    },
    population: 4500,
    citieCount: 1,
    cities: [
        {
            name: "Ironkeep",
            type: "Castelo",
            productionIncreaser: [0.2, `per${10}Turns`],
            productionLvl: {
                wood: 14,
                iron: 10,
                food: 22,
                gold: 9,
                spices: 6,
                clothes: 7,
                medicine: 3,
                tools: 12
            },
            population: 3200,
            populationIncreaser: [6, "perTurn"],
            defense: 5000,
            recruitCapacities: 60,
            skill: function() {
                // Aumenta a produção de ferro
            }
        }
    ],
    influency: 22,
    power: 24,
    coins: 900,
    armyCount: 220,
    army: [
        {
            name: "Cavalry",
            attack: 1600,
            defense: 1100,
            vigor: 85,
            confiance: 88,
            loyalty: 83,
            speed: 75,
            skill: function() {
                // Aumenta a velocidade de movimento no campo de batalha
            }
        }
    ]
};