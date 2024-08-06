
const enemy1 = {
    name: "Lord Darkwood",
    allResources: {
        wood: 100,
        iron: 40,
        food: 180,
        gold: 70,
        spices: 60,
        clothes: 40,
        medicine: 20,
        tools: 35
    },
    population: 4000,
    citieCount: 1,
    cities: [
        {
            name: "Darkhold",
            type: "Cidade Guarnecida",
            productionIncreaser: [0.1, `per${8}Turns`],
            productionLvl: {
                wood: 12,
                iron: 8,
                food: 18,
                gold: 7,
                spices: 5,
                clothes: 4,
                medicine: 1,
                tools: 9
            },
            population: 2800,
            populationIncreaser: [4, "perTurn"],
            defense: 4000,
            recruitCapacities: 40,
            skill: function() {
                // Aumenta a resistência contra ataques
            }
        }
    ],
    influency: 20,
    power: 18,
    coins: 800,
    armyCount: 180,
    army: [
        {
            name: "Archers",
            attack: 1300,
            defense: 1000,
            vigor: 75,
            confiance: 85,
            loyalty: 80,
            speed: 65,
            skill: function() {
                // Aumenta a precisão dos ataques à distância
            }
        }
    ]
};