const eventCards = [
    {
        name: "Great Famine",
        type: "Plague",
        description: "Severe food shortage affecting all towns. Reduces food production by 50% for 8 turns.",
        effect: function() {
            // Skill: Halves food production and reduces population growth for the duration.
        },
        effectTurns: 8,
        target: "All",
        probability: 20,
        impact: {
            foodProduction: -50,
            populationGrowth: -20
        }
    },
    {
        name: "Rebellion",
        type: "Conflict Internal",
        description: "Civil unrest causes a 15% decrease in loyalty and a 10% reduction in production for 6 turns.",
        effect: function() {
            // Skill: Reduces loyalty and production efficiency across affected cities.
        },
        effectTurns: 6,
        target: "All",
        probability: 15,
        impact: {
            loyalty: -15,
            productionEfficiency: -10
        }
    },
    {
        name: "Harvest Festival",
        type: "Festival",
        description: "Increases food production by 30% and boosts morale by 20% for 5 turns.",
        effect: function() {
            // Skill: Temporarily enhances food production and boosts morale.
        },
        effectTurns: 5,
        target: "All",
        probability: 10,
        impact: {
            foodProduction: 30,
            morale: 20
        }
    },
    {
        name: "Winter Frost",
        type: "Natural Disaster",
        description: "Severe frost causes a 25% reduction in food production and a 10% drop in population growth for 7 turns.",
        effect: function() {
            // Skill: Reduces food production and population growth due to harsh winter conditions.
        },
        effectTurns: 7,
        target: "All",
        probability: 12,
        impact: {
            foodProduction: -25,
            populationGrowth: -10
        }
    },
    {
        name: "Political Coup",
        type: "Conflict Politico",
        description: "Leads to a 20% decrease in loyalty and a 15% reduction in production for 8 turns.",
        effect: function() {
            // Skill: Causes a drop in loyalty and efficiency due to political instability.
        },
        effectTurns: 8,
        target: "All",
        probability: 8,
        impact: {
            loyalty: -20,
            productionEfficiency: -15
        }
    },
    {
        name: "Great Market Day",
        type: "Festival",
        description: "Boosts trade and resource production by 25% for 6 turns.",
        effect: function() {
            // Skill: Enhances trade efficiency and resource production temporarily.
        },
        effectTurns: 6,
        target: "All",
        probability: 18,
        impact: {
            tradeEfficiency: 25,
            resourceProduction: 25
        }
    },
    {
        name: "Plague of Rats",
        type: "Plague",
        description: "Reduces food production by 20% and causes a 5% drop in population for 5 turns.",
        effect: function() {
            // Skill: Decreases food production and causes a minor drop in population.
        },
        effectTurns: 5,
        target: "All",
        probability: 15,
        impact: {
            foodProduction: -20,
            population: -5
        }
    },
    {
        name: "Economic Boom",
        type: "Festival",
        description: "Increases gold production by 40% and boosts morale by 15% for 6 turns.",
        effect: function() {
            // Skill: Temporarily boosts gold production and morale.
        },
        effectTurns: 6,
        target: "All",
        probability: 14,
        impact: {
            goldProduction: 40,
            morale: 15
        }
    },
    {
        name: "Firestorm",
        type: "Natural Disaster",
        description: "Devastating fires reduce production by 20% and cause a 15% drop in loyalty for 5 turns.",
        effect: function() {
            // Skill: Causes significant production losses and decreases loyalty.
        },
        effectTurns: 5,
        target: "All",
        probability: 10,
        impact: {
            productionEfficiency: -20,
            loyalty: -15
        }
    },
    {
        name: "Merchant Guild's Alliance",
        type: "Festival",
        description: "Boosts trade efficiency by 30% and resource production by 20% for 7 turns.",
        effect: function() {
            // Skill: Increases trade efficiency and resource production temporarily.
        },
        effectTurns: 7,
        target: "All",
        probability: 12,
        impact: {
            tradeEfficiency: 30,
            resourceProduction: 20
        }
    },
    {
        name: "Disease Outbreak",
        type: "Plague",
        description: "Affects 40% of the population with a 10% decrease in production and 5% drop in loyalty for 6 turns.",
        effect: function() {
            // Skill: Reduces production and loyalty due to widespread disease.
        },
        effectTurns: 6,
        target: "All",
        probability: 13,
        impact: {
            productionEfficiency: -10,
            loyalty: -5
        }
    },
    {
        name: "Diplomatic Treaty",
        type: "Conflict Politico",
        description: "Improves diplomatic relations, increasing influence by 25% and loyalty by 10% for 4 turns.",
        effect: function() {
            // Skill: Enhances influence and loyalty due to successful diplomacy.
        },
        effectTurns: 4,
        target: "All",
        probability: 20,
        impact: {
            influence: 25,
            loyalty: 10
        }
    },
    {
        name: "Grand Tournament",
        type: "Festival",
        description: "Increases morale by 25% and boosts recruitment capacity by 20% for 6 turns.",
        effect: function() {
            // Skill: Raises morale and improves recruitment capabilities.
        },
        effectTurns: 6,
        target: "All",
        probability: 15,
        impact: {
            morale: 25,
            recruitmentCapacity: 20
        }
    },
    {
        name: "Barbarian Raid",
        type: "Desastres Naturais",
        description: "Causes damage to buildings and reduces production by 30% for 5 turns.",
        effect: function() {
            // Skill: Damages infrastructure and reduces production temporarily.
        },
        effectTurns: 5,
        target: "All",
        probability: 10,
        impact: {
            buildingDamage: 30,
            productionEfficiency: -30
        }
    },
    {
        name: "Summer Drought",
        type: "Natural Disaster",
        description: "Reduces food production by 20% and causes a 10% drop in population growth for 7 turns.",
        effect: function() {
            // Skill: Reduces food production and population growth due to drought.
        },
        effectTurns: 7,
        target: "All",
        probability: 14,
        impact: {
            foodProduction: -20,
            populationGrowth: -10
        }
    },
    {
        name: "Civil War",
        type: "Conflict Interno",
        description: "Leads to a 30% decrease in production and a 20% drop in loyalty for 8 turns.",
        effect: function() {
            // Skill: Causes major disruptions in production and loyalty due to civil strife.
        },
        effectTurns: 8,
        target: "All",
        probability: 9,
        impact: {
            productionEfficiency: -30,
            loyalty: -20
        }
    },
    {
        name: "War Treaty",
        type: "Conflict Politico",
        description: "Improves resource production by 25% and reduces military expenses by 15% for 6 turns.",
        effect: function() {
            // Skill: Enhances resource production and reduces military costs.
        },
        effectTurns: 6,
        target: "All",
        probability: 12,
        impact: {
            resourceProduction: 25,
            militaryExpenses: -15
        }
    },
    {
        name: "Royal Decree",
        type: "Plague",
        description: "Increases loyalty by 20% and boosts resource production by 15% for 5 turns.",
        effect: function() {
            // Skill: Enhances loyalty and resource production temporarily.
        },
        effectTurns: 5,
        target: "All",
        probability: 18,
        impact: {
            loyalty: 20,
            resourceProduction: 15
        }
    },
    {
        name: "Trade Fair",
        type: "Festival",
        description: "Increases trade efficiency by 20% and boosts gold production by 15% for 7 turns.",
        effect: function() {
            // Skill: Boosts trade efficiency and gold production.
        },
        effectTurns: 7,
        target: "All",
        probability: 14,
        impact: {
            tradeEfficiency: 20,
            goldProduction: 15
        }
    },
    {
        name: "Invasion",
        type: "Desastres Naturais",
        description: "Invaders cause a 40% reduction in production and damage to buildings for 6 turns.",
        effect: function() {
            // Skill: Majorly disrupts production and damages buildings.
        },
        effectTurns: 6,
        target: "All",
        probability: 10,
        impact: {
            productionEfficiency: -40,
            buildingDamage: 40
        }
    },
    {
        name: "War of Succession",
        type: "Conflito Interno",
        description: "Causes a 25% decrease in loyalty and a 20% reduction in recruitment capacity for 7 turns.",
        effect: function() {
            // Skill: Reduces loyalty and recruitment capabilities due to internal conflict.
        },
        effectTurns: 7,
        target: "All",
        probability: 12,
        impact: {
            loyalty: -25,
            recruitmentCapacity: -20
        }
    },
    {
        name: "Grand Harvest",
        type: "Festival",
        description: "Boosts food production by 30% and morale by 20% for 5 turns.",
        effect: function() {
            // Skill: Increases food production and morale.
        },
        effectTurns: 5,
        target: "All",
        probability: 15,
        impact: {
            foodProduction: 30,
            morale: 20
        }
    },
    {
        name: "Political Alliance",
        type: "Conflito Politico",
        description: "Increases influence by 20% and loyalty by 15% for 4 turns.",
        effect: function() {
            // Skill: Enhances political influence and loyalty.
        },
        effectTurns: 4,
        target: "All",
        probability: 10,
        impact: {
            influence: 20,
            loyalty: 15
        }
    },
    {
        name: "Plague of the Black Rats",
        type: "Doenças/Pragas",
        description: "Reduces food production by 25% and decreases population growth by 15% for 6 turns.",
        effect: function() {
            // Skill: Reduces food production and population growth.
        },
        effectTurns: 6,
        target: "All",
        probability: 12,
        impact: {
            foodProduction: -25,
            populationGrowth: -15
        }
    },
    {
        name: "Medieval Tournament",
        type: "Festival",
        description: "Increases morale by 20% and recruitment capacity by 15% for 5 turns.",
        effect: function() {
            // Skill: Enhances morale and recruitment capacity.
        },
        effectTurns: 5,
        target: "All",
        probability: 13,
        impact: {
            morale: 20,
            recruitmentCapacity: 15
        }
    },
    {
        name: "Spring Flood",
        type: "Desastres Naturais",
        description: "Causes damage to buildings and a 20% reduction in production for 7 turns.",
        effect: function() {
            // Skill: Damages infrastructure and reduces production efficiency.
        },
        effectTurns: 7,
        target: "All",
        probability: 8,
        impact: {
            buildingDamage: 20,
            productionEfficiency: -20
        }
    }
];

// Example usage of the array
console.log(eventCards);
