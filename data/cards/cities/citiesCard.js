const cityCards = [
    {
        name: "Ardenwood Camp",
        type: "Camp",
        productionIncreaser: [0.05, `per5Turns`],
        productionLvl: {
            wood: 15,
            iron: 2,
            food: 20,
            gold: 5,
            spices: 8,
            clothes: 5,
            medicine: 1,
            tools: 8
        },
        population: 300,
        populationIncreaser: [5, "perTurn"],
        defense: 300,
        recruitCapacities: 20,
        skill: function() {
            // Skill: Provides temporary boosts to resources when under attack.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Greenleaf Village",
        type: "Village",
        productionIncreaser: [0.1, `per10Turns`],
        productionLvl: {
            wood: 30,
            iron: 10,
            food: 50,
            gold: 10,
            spices: 15,
            clothes: 10,
            medicine: 5,
            tools: 10
        },
        population: 500,
        populationIncreaser: [10, "perTurn"],
        defense: 500,
        recruitCapacities: 30,
        skill: function() {
            // Skill: Enhances food production significantly.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Silverbrook Small Town",
        type: "Small City",
        productionIncreaser: [0.15, `per10Turns`],
        productionLvl: {
            wood: 40,
            iron: 15,
            food: 60,
            gold: 15,
            spices: 20,
            clothes: 15,
            medicine: 8,
            tools: 15
        },
        population: 1500,
        populationIncreaser: [15, "perTurn"],
        defense: 800,
        recruitCapacities: 50,
        skill: function() {
            // Skill: Boosts production of all resources for a short period.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Fortshield Garrison Town",
        type: "Garrison City",
        productionIncreaser: [0.2, `per15Turns`],
        productionLvl: {
            wood: 50,
            iron: 20,
            food: 70,
            gold: 20,
            spices: 25,
            clothes: 20,
            medicine: 10,
            tools: 20
        },
        population: 2000,
        populationIncreaser: [20, "perTurn"],
        defense: 1200,
        recruitCapacities: 80,
        skill: function() {
            // Skill: Provides increased defense and recruitment speed during wartime.
        },
        rarityItens: {
            reliques: {},
            treasures: {
                "Golden Amulet": "Increases gold production."
            }
        }
    },
    {
        name: "Grandholm City",
        type: "Large City",
        productionIncreaser: [0.25, `per20Turns`],
        productionLvl: {
            wood: 60,
            iron: 30,
            food: 80,
            gold: 25,
            spices: 30,
            clothes: 25,
            medicine: 12,
            tools: 25
        },
        population: 5000,
        populationIncreaser: [25, "perTurn"],
        defense: 2000,
        recruitCapacities: 120,
        skill: function() {
            // Skill: Increases overall production efficiency across all resources.
        },
        rarityItens: {
            reliques: {
                "Ancient Scroll": "Increases research speed and knowledge."
            },
            treasures: {
                "Crystal Crown": "Boosts overall resource production."
            }
        }
    },
    {
        name: "Stonekeep Castle",
        type: "Castle",
        productionIncreaser: [0.3, `per25Turns`],
        productionLvl: {
            wood: 70,
            iron: 40,
            food: 90,
            gold: 30,
            spices: 35,
            clothes: 30,
            medicine: 15,
            tools: 30
        },
        population: 8000,
        populationIncreaser: [30, "perTurn"],
        defense: 4000,
        recruitCapacities: 150,
        skill: function() {
            // Skill: Provides substantial defensive bonuses and recruitment capabilities.
        },
        rarityItens: {
            reliques: {
                "Knight's Shield": "Increases defense and protection."
            },
            treasures: {
                "Emerald Sword": "Boosts combat effectiveness and resource gains."
            }
        }
    },
    {
        name: "Ironclad Fortress",
        type: "Fort",
        productionIncreaser: [0.2, `per20Turns`],
        productionLvl: {
            wood: 50,
            iron: 25,
            food: 70,
            gold: 20,
            spices: 25,
            clothes: 20,
            medicine: 10,
            tools: 20
        },
        population: 1500,
        populationIncreaser: [15, "perTurn"],
        defense: 3000,
        recruitCapacities: 100,
        skill: function() {
            // Skill: Enhances fortifications and defense mechanisms significantly.
        },
        rarityItens: {
            reliques: {},
            treasures: {
                "Steel Helm": "Increases defensive strength."
            }
        }
    },
    {
        name: "Watchtower",
        type: "Tower",
        productionIncreaser: [0.15, `per15Turns`],
        productionLvl: {
            wood: 40,
            iron: 15,
            food: 60,
            gold: 15,
            spices: 20,
            clothes: 15,
            medicine: 8,
            tools: 15
        },
        population: 500,
        populationIncreaser: [10, "perTurn"],
        defense: 1000,
        recruitCapacities: 30,
        skill: function() {
            // Skill: Provides early warning and defensive advantages.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Seaside Port",
        type: "Port",
        productionIncreaser: [0.1, `per10Turns`],
        productionLvl: {
            wood: 30,
            iron: 10,
            food: 40,
            gold: 15,
            spices: 25,
            clothes: 10,
            medicine: 5,
            tools: 10
        },
        population: 600,
        populationIncreaser: [15, "perTurn"],
        defense: 500,
        recruitCapacities: 20,
        skill: function() {
            // Skill: Increases trade efficiency and access to exotic resources.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Mosswood Hamlet",
        type: "Village",
        productionIncreaser: [0.1, `per10Turns`],
        productionLvl: {
            wood: 25,
            iron: 8,
            food: 30,
            gold: 8,
            spices: 12,
            clothes: 8,
            medicine: 4,
            tools: 8
        },
        population: 400,
        populationIncreaser: [8, "perTurn"],
        defense: 300,
        recruitCapacities: 15,
        skill: function() {
            // Skill: Boosts local resource production for a set period.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Havenhill District",
        type: "Commercial District",
        productionIncreaser: [0.2, `per15Turns`],
        productionLvl: {
            wood: 35,
            iron: 12,
            food: 45,
            gold: 20,
            spices: 25,
            clothes: 12,
            medicine: 6,
            tools: 12
        },
        population: 800,
        populationIncreaser: [12, "perTurn"],
        defense: 600,
        recruitCapacities: 25,
        skill: function() {
            // Skill: Increases trade and economic efficiency.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Capital of Eldoria",
        type: "Capital",
        productionIncreaser: [0.3, `per30Turns`],
        productionLvl: {
            wood: 80,
            iron: 50,
            food: 100,
            gold: 40,
            spices: 40,
            clothes: 40,
            medicine: 20,
            tools: 40
        },
        population: 15000,
        populationIncreaser: [35, "perTurn"],
        defense: 5000,
        recruitCapacities: 200,
        skill: function() {
            // Skill: Provides massive production boosts and increased loyalty.
        },
        rarityItens: {
            reliques: {
                "Crown of the Ages": "Greatly enhances influence and prestige."
            },
            treasures: {
                "Imperial Ruby": "Significantly boosts gold production."
            }
        }
    },
    {
        name: "Glenwood Camp",
        type: "Camp",
        productionIncreaser: [0.05, `per5Turns`],
        productionLvl: {
            wood: 12,
            iron: 3,
            food: 18,
            gold: 4,
            spices: 7,
            clothes: 4,
            medicine: 2,
            tools: 7
        },
        population: 250,
        populationIncreaser: [4, "perTurn"],
        defense: 250,
        recruitCapacities: 15,
        skill: function() {
            // Skill: Provides temporary boosts to resource gathering efficiency.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Woodhaven Village",
        type: "Village",
        productionIncreaser: [0.12, `per10Turns`],
        productionLvl: {
            wood: 28,
            iron: 9,
            food: 35,
            gold: 9,
            spices: 14,
            clothes: 9,
            medicine: 4,
            tools: 9
        },
        population: 450,
        populationIncreaser: [7, "perTurn"],
        defense: 350,
        recruitCapacities: 18,
        skill: function() {
            // Skill: Increases resource production and morale of the population.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Highrock Small Town",
        type: "Small City",
        productionIncreaser: [0.18, `per10Turns`],
        productionLvl: {
            wood: 38,
            iron: 18,
            food: 55,
            gold: 18,
            spices: 22,
            clothes: 18,
            medicine: 7,
            tools: 18
        },
        population: 1700,
        populationIncreaser: [18, "perTurn"],
        defense: 850,
        recruitCapacities: 55,
        skill: function() {
            // Skill: Improves all resource production rates.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Stonegate Garrison",
        type: "Garrison City",
        productionIncreaser: [0.22, `per15Turns`],
        productionLvl: {
            wood: 45,
            iron: 22,
            food: 65,
            gold: 22,
            spices: 28,
            clothes: 22,
            medicine: 10,
            tools: 22
        },
        population: 2200,
        populationIncreaser: [22, "perTurn"],
        defense: 1300,
        recruitCapacities: 90,
        skill: function() {
            // Skill: Enhances defense and recruitment abilities.
        },
        rarityItens: {
            reliques: {},
            treasures: {
                "Sapphire Pendant": "Increases gold and resource production."
            }
        }
    },
    {
        name: "Ironhold Large City",
        type: "Large City",
        productionIncreaser: [0.28, `per20Turns`],
        productionLvl: {
            wood: 65,
            iron: 35,
            food: 85,
            gold: 30,
            spices: 32,
            clothes: 35,
            medicine: 14,
            tools: 30
        },
        population: 6000,
        populationIncreaser: [28, "perTurn"],
        defense: 2500,
        recruitCapacities: 130,
        skill: function() {
            // Skill: Greatly boosts production across all resources.
        },
        rarityItens: {
            reliques: {
                "Scroll of Knowledge": "Boosts research and development speed."
            },
            treasures: {
                "Golden Goblet": "Increases overall resource income."
            }
        }
    },
    {
        name: "Eaglecrest Castle",
        type: "Castle",
        productionIncreaser: [0.35, `per25Turns`],
        productionLvl: {
            wood: 75,
            iron: 45,
            food: 95,
            gold: 35,
            spices: 40,
            clothes: 35,
            medicine: 18,
            tools: 35
        },
        population: 9000,
        populationIncreaser: [30, "perTurn"],
        defense: 5000,
        recruitCapacities: 180,
        skill: function() {
            // Skill: Provides major defense boosts and recruitment enhancements.
        },
        rarityItens: {
            reliques: {
                "Royal Scepter": "Enhances political influence and defense."
            },
            treasures: {
                "Diamond Necklace": "Boosts resource production and morale."
            }
        }
    },
    {
        name: "Seabreeze Fortress",
        type: "Fort",
        productionIncreaser: [0.2, `per20Turns`],
        productionLvl: {
            wood: 55,
            iron: 30,
            food: 75,
            gold: 25,
            spices: 28,
            clothes: 25,
            medicine: 12,
            tools: 25
        },
        population: 1800,
        populationIncreaser: [18, "perTurn"],
        defense: 3500,
        recruitCapacities: 120,
        skill: function() {
            // Skill: Enhances fortifications and defense capabilities.
        },
        rarityItens: {
            reliques: {},
            treasures: {
                "Fortress Ring": "Increases defensive strength and morale."
            }
        }
    },
    {
        name: "Fortress of Ardin",
        type: "Tower",
        productionIncreaser: [0.15, `per15Turns`],
        productionLvl: {
            wood: 42,
            iron: 17,
            food: 62,
            gold: 17,
            spices: 21,
            clothes: 17,
            medicine: 8,
            tools: 17
        },
        population: 700,
        populationIncreaser: [12, "perTurn"],
        defense: 1200,
        recruitCapacities: 35,
        skill: function() {
            // Skill: Provides early warning and strategic advantages.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Coastal Harbor",
        type: "Port",
        productionIncreaser: [0.1, `per10Turns`],
        productionLvl: {
            wood: 32,
            iron: 12,
            food: 45,
            gold: 18,
            spices: 28,
            clothes: 12,
            medicine: 6,
            tools: 12
        },
        population: 700,
        populationIncreaser: [16, "perTurn"],
        defense: 600,
        recruitCapacities: 22,
        skill: function() {
            // Skill: Improves trade efficiency and resource accessibility.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Frostwood Hamlet",
        type: "Village",
        productionIncreaser: [0.1, `per10Turns`],
        productionLvl: {
            wood: 26,
            iron: 9,
            food: 32,
            gold: 8,
            spices: 14,
            clothes: 9,
            medicine: 5,
            tools: 9
        },
        population: 420,
        populationIncreaser: [9, "perTurn"],
        defense: 320,
        recruitCapacities: 17,
        skill: function() {
            // Skill: Provides a temporary boost to food and wood production.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Rosewood District",
        type: "Commercial District",
        productionIncreaser: [0.18, `per15Turns`],
        productionLvl: {
            wood: 37,
            iron: 14,
            food: 48,
            gold: 22,
            spices: 26,
            clothes: 14,
            medicine: 7,
            tools: 14
        },
        population: 900,
        populationIncreaser: [14, "perTurn"],
        defense: 650,
        recruitCapacities: 27,
        skill: function() {
            // Skill: Enhances economic and trade efficiency.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Dunewind Capital",
        type: "Capital",
        productionIncreaser: [0.32, `per30Turns`],
        productionLvl: {
            wood: 85,
            iron: 55,
            food: 105,
            gold: 42,
            spices: 45,
            clothes: 42,
            medicine: 22,
            tools: 42
        },
        population: 18000,
        populationIncreaser: [38, "perTurn"],
        defense: 5500,
        recruitCapacities: 220,
        skill: function() {
            // Skill: Major boosts to production and loyalty across the kingdom.
        },
        rarityItens: {
            reliques: {
                "Crown of Legends": "Enhances influence and diplomatic power."
            },
            treasures: {
                "Royal Jewels": "Greatly increases gold and resource production."
            }
        }
    },
    {
        name: "Briarwood Camp",
        type: "Camp",
        productionIncreaser: [0.06, `per5Turns`],
        productionLvl: {
            wood: 14,
            iron: 4,
            food: 22,
            gold: 6,
            spices: 9,
            clothes: 5,
            medicine: 2,
            tools: 9
        },
        population: 275,
        populationIncreaser: [6, "perTurn"],
        defense: 275,
        recruitCapacities: 18,
        skill: function() {
            // Skill: Provides temporary boosts to resource gathering and morale.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Maplewood Village",
        type: "Village",
        productionIncreaser: [0.11, `per10Turns`],
        productionLvl: {
            wood: 29,
            iron: 10,
            food: 33,
            gold: 10,
            spices: 15,
            clothes: 10,
            medicine: 5,
            tools: 10
        },
        population: 470,
        populationIncreaser: [9, "perTurn"],
        defense: 340,
        recruitCapacities: 19,
        skill: function() {
            // Skill: Boosts local resource production and happiness.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Falconreach Small Town",
        type: "Small City",
        productionIncreaser: [0.17, `per10Turns`],
        productionLvl: {
            wood: 39,
            iron: 16,
            food: 57,
            gold: 17,
            spices: 23,
            clothes: 16,
            medicine: 7,
            tools: 17
        },
        population: 1600,
        populationIncreaser: [17, "perTurn"],
        defense: 820,
        recruitCapacities: 56,
        skill: function() {
            // Skill: Increases production rates and defensive capabilities.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Stormguard Garrison",
        type: "Garrison City",
        productionIncreaser: [0.23, `per15Turns`],
        productionLvl: {
            wood: 48,
            iron: 24,
            food: 68,
            gold: 24,
            spices: 30,
            clothes: 24,
            medicine: 11,
            tools: 24
        },
        population: 2300,
        populationIncreaser: [23, "perTurn"],
        defense: 1400,
        recruitCapacities: 95,
        skill: function() {
            // Skill: Enhances defensive and recruitment capabilities.
        },
        rarityItens: {
            reliques: {},
            treasures: {
                "Warrior's Medallion": "Increases defense and recruitment speed."
            }
        }
    },
    {
        name: "Steelhelm Large City",
        type: "Large City",
        productionIncreaser: [0.29, `per20Turns`],
        productionLvl: {
            wood: 67,
            iron: 38,
            food: 87,
            gold: 32,
            spices: 34,
            clothes: 38,
            medicine: 15,
            tools: 32
        },
        population: 6200,
        populationIncreaser: [30, "perTurn"],
        defense: 2600,
        recruitCapacities: 135,
        skill: function() {
            // Skill: Provides a large boost to production and economic stability.
        },
        rarityItens: {
            reliques: {
                "Ancient Tome": "Boosts research and knowledge acquisition."
            },
            treasures: {
                "Golden Chalice": "Increases all resource production significantly."
            }
        }
    },
    {
        name: "Castle of Elders",
        type: "Castle",
        productionIncreaser: [0.36, `per25Turns`],
        productionLvl: {
            wood: 80,
            iron: 50,
            food: 100,
            gold: 40,
            spices: 45,
            clothes: 40,
            medicine: 22,
            tools: 40
        },
        population: 9500,
        populationIncreaser: [35, "perTurn"],
        defense: 5200,
        recruitCapacities: 190,
        skill: function() {
            // Skill: Major defensive capabilities and recruitment boosts.
        },
        rarityItens: {
            reliques: {
                "Lionheart Armor": "Increases defense and command authority."
            },
            treasures: {
                "Dragon's Eye": "Enhances resource production and combat efficiency."
            }
        }
    },
    {
        name: "Harbor of Winds",
        type: "Port",
        productionIncreaser: [0.11, `per10Turns`],
        productionLvl: {
            wood: 34,
            iron: 13,
            food: 46,
            gold: 19,
            spices: 30,
            clothes: 13,
            medicine: 7,
            tools: 13
        },
        population: 750,
        populationIncreaser: [17, "perTurn"],
        defense: 650,
        recruitCapacities: 25,
        skill: function() {
            // Skill: Provides improved trade and access to rare resources.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Crystalbrook Hamlet",
        type: "Village",
        productionIncreaser: [0.1, `per10Turns`],
        productionLvl: {
            wood: 27,
            iron: 8,
            food: 31,
            gold: 8,
            spices: 13,
            clothes: 8,
            medicine: 5,
            tools: 8
        },
        population: 430,
        populationIncreaser: [10, "perTurn"],
        defense: 330,
        recruitCapacities: 16,
        skill: function() {
            // Skill: Boosts local food and wood production.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Merchant's Quarter",
        type: "Commercial District",
        productionIncreaser: [0.19, `per15Turns`],
        productionLvl: {
            wood: 36,
            iron: 13,
            food: 49,
            gold: 21,
            spices: 27,
            clothes: 13,
            medicine: 6,
            tools: 13
        },
        population: 950,
        populationIncreaser: [14, "perTurn"],
        defense: 670,
        recruitCapacities: 28,
        skill: function() {
            // Skill: Enhances economic trade and resource production.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Sunrise Capital",
        type: "Capital",
        productionIncreaser: [0.34, `per30Turns`],
        productionLvl: {
            wood: 87,
            iron: 57,
            food: 110,
            gold: 45,
            spices: 48,
            clothes: 45,
            medicine: 24,
            tools: 45
        },
        population: 19000,
        populationIncreaser: [40, "perTurn"],
        defense: 5700,
        recruitCapacities: 230,
        skill: function() {
            // Skill: Provides immense boosts to production, defense, and loyalty.
        },
        rarityItens: {
            reliques: {
                "Celestial Scepter": "Increases influence and diplomatic relations."
            },
            treasures: {
                "Emperor's Jewel": "Greatly enhances resource production and morale."
            }
        }
    },
    {
        name: "Winterhold Camp",
        type: "Camp",
        productionIncreaser: [0.07, `per5Turns`],
        productionLvl: {
            wood: 16,
            iron: 5,
            food: 24,
            gold: 6,
            spices: 10,
            clothes: 6,
            medicine: 3,
            tools: 10
        },
        population: 300,
        populationIncreaser: [6, "perTurn"],
        defense: 300,
        recruitCapacities: 20,
        skill: function() {
            // Skill: Provides temporary boosts to all resource production in winter.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    },
    {
        name: "Birchwood Village",
        type: "Village",
        productionIncreaser: [0.12, `per10Turns`],
        productionLvl: {
            wood: 30,
            iron: 11,
            food: 34,
            gold: 11,
            spices: 16,
            clothes: 11,
            medicine: 6,
            tools: 11
        },
        population: 490,
        populationIncreaser: [10, "perTurn"],
        defense: 350,
        recruitCapacities: 20,
        skill: function() {
            // Skill: Enhances local resource production and population happiness.
        },
        rarityItens: {
            reliques: {},
            treasures: {}
        }
    }
];

