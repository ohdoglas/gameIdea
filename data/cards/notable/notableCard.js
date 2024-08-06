const notableCards = [
    {
        name: "Lord Alistair",
        type: "Monarch",
        charisma: 85,
        influency: 90,
        skill: method(),
        loyalty: 100,
        description: "A wise and fair ruler whose presence boosts morale and increases loyalty across the kingdom.",
        impact: "Increases kingdom stability and reduces rebellion chances."
    },
    {
        name: "General Marcus",
        type: "General",
        charisma: 70,
        influency: 80,
        skill: method(),
        loyalty: 95,
        description: "A seasoned military leader who excels in battlefield tactics and strategy.",
        impact: "Enhances army effectiveness and reduces losses in battle."
    },
    {
        name: "Lady Isabella",
        type: "Hero",
        charisma: 90,
        influency: 85,
        skill: method(),
        loyalty: 98,
        description: "A legendary heroine known for her bravery and heroism.",
        impact: "Boosts troop morale and leads successful raids."
    },
    {
        name: "Eldric the Spy",
        type: "Spy",
        charisma: 65,
        influency: 75,
        skill: method(),
        loyalty: 90,
        description: "A master of espionage who can gather valuable intelligence on enemy movements.",
        impact: "Provides detailed enemy reports and sabotage opportunities."
    },
    {
        name: "Merchant Gregor",
        type: "Merchant",
        charisma: 80,
        influency: 70,
        skill: method(),
        loyalty: 85,
        description: "A shrewd trader who can negotiate favorable deals and boost the economy.",
        impact: "Increases trade profits and resource availability."
    },
    {
        name: "Advisor Eleanor",
        type: "Counselor",
        charisma: 75,
        influency: 85,
        skill: method(),
        loyalty: 90,
        description: "A trusted advisor who provides strategic counsel and valuable insights.",
        impact: "Improves decision-making and strategic planning."
    },
    {
        name: "Engineer Halbert",
        type: "Engineer",
        charisma: 60,
        influency: 65,
        skill: method(),
        loyalty: 88,
        description: "An expert in construction and fortification, enhancing defensive capabilities.",
        impact: "Strengthens fortifications and speeds up construction projects."
    },
    {
        name: "Prince Edward",
        type: "Prince",
        charisma: 85,
        influency: 80,
        skill: method(),
        loyalty: 95,
        description: "A charismatic prince whose leadership inspires loyalty and unity.",
        impact: "Boosts loyalty and morale among troops and citizens."
    },
    {
        name: "Princess Helena",
        type: "Princess",
        charisma: 90,
        influency: 85,
        skill: method(),
        loyalty: 97,
        description: "A diplomatic princess who excels in forging alliances and maintaining peace.",
        impact: "Enhances diplomatic relations and alliance stability."
    },
    {
        name: "Wizard Arion",
        type: "Wizard",
        charisma: 75,
        influency: 90,
        skill: method(),
        loyalty: 85,
        description: "A powerful mage with the ability to cast potent spells and enchantments.",
        impact: "Provides magical support and boosts offensive capabilities."
    },
    {
        name: "Priest Amara",
        type: "Religious",
        charisma: 80,
        influency: 70,
        skill: method(),
        loyalty: 90,
        description: "A revered priestess who offers spiritual guidance and healing.",
        impact: "Increases morale and provides healing to injured troops."
    },
    {
        name: "Duke Reginald",
        type: "Monarch",
        charisma: 78,
        influency: 75,
        skill: method(),
        loyalty: 85,
        description: "A noble duke with a strong sense of justice and leadership.",
        impact: "Improves administrative efficiency and justice."
    },
    {
        name: "Commander Helena",
        type: "General",
        charisma: 80,
        influency: 85,
        skill: method(),
        loyalty: 92,
        description: "A fierce and tactical commander known for her battlefield success.",
        impact: "Enhances battlefield tactics and reduces enemy effectiveness."
    },
    {
        name: "Sir Gareth",
        type: "Hero",
        charisma: 88,
        influency: 90,
        skill: method(),
        loyalty: 99,
        description: "A gallant knight renowned for his courage and chivalry.",
        impact: "Boosts troop morale and aids in defensive battles."
    },
    {
        name: "Scout Elira",
        type: "Spy",
        charisma: 70,
        influency: 65,
        skill: method(),
        loyalty: 85,
        description: "A skilled scout who excels in reconnaissance and stealth operations.",
        impact: "Provides valuable scouting information and strategic advantage."
    },
    {
        name: "Baron Leif",
        type: "Merchant",
        charisma: 75,
        influency: 80,
        skill: method(),
        loyalty: 90,
        description: "A wealthy baron with extensive trade connections.",
        impact: "Increases trade revenue and resource availability."
    },
    {
        name: "Strategist Elvin",
        type: "Counselor",
        charisma: 70,
        influency: 75,
        skill: method(),
        loyalty: 88,
        description: "A brilliant strategist who provides tactical and strategic advice.",
        impact: "Improves overall strategy and planning effectiveness."
    },
    {
        name: "Artisan Roderick",
        type: "Engineer",
        charisma: 65,
        influency: 70,
        skill: method(),
        loyalty: 85,
        description: "An expert artisan specializing in advanced engineering and construction.",
        impact: "Enhances building efficiency and defensive structures."
    },
    {
        name: "Duke Alaric",
        type: "Prince",
        charisma: 90,
        influency: 85,
        skill: method(),
        loyalty: 97,
        description: "A noble prince with exceptional leadership and diplomatic skills.",
        impact: "Boosts loyalty and improves diplomatic relations."
    },
    {
        name: "Duchess Isolde",
        type: "Princess",
        charisma: 85,
        influency: 80,
        skill: method(),
        loyalty: 95,
        description: "A graceful princess known for her diplomatic and negotiation skills.",
        impact: "Enhances diplomatic efforts and maintains alliances."
    },
    {
        name: "Sorcerer Malvin",
        type: "Wizard",
        charisma: 80,
        influency: 90,
        skill: method(),
        loyalty: 90,
        description: "A formidable sorcerer with mastery over destructive magic.",
        impact: "Provides powerful magical attacks and enhancements."
    },
    {
        name: "Cleric Freya",
        type: "Religious",
        charisma: 75,
        influency: 70,
        skill: method(),
        loyalty: 88,
        description: "A devoted cleric who offers spiritual and physical healing.",
        impact: "Increases healing capabilities and troop morale."
    },
    {
        name: "Countess Eveline",
        type: "Monarch",
        charisma: 80,
        influency: 85,
        skill: method(),
        loyalty: 90,
        description: "An influential countess with a keen sense of diplomacy.",
        impact: "Improves administrative efficiency and diplomatic relations."
    },
    {
        name: "Captain Cedric",
        type: "General",
        charisma: 75,
        influency: 70,
        skill: method(),
        loyalty: 85,
        description: "A skilled captain with a reputation for tactical brilliance.",
        impact: "Enhances battle strategies and troop coordination."
    },
    {
        name: "Sir Rowan",
        type: "Hero",
        charisma: 85,
        influency: 80,
        skill: method(),
        loyalty: 98,
        description: "A legendary hero whose presence boosts the morale of all allies.",
        impact: "Boosts troop morale and aids in both offensive and defensive operations."
    },
    {
        name: "Infiltrator Lyra",
        type: "Spy",
        charisma: 70,
        influency: 75,
        skill: method(),
        loyalty: 80,
        description: "An adept infiltrator skilled in covert operations and espionage.",
        impact: "Provides critical intelligence and disrupts enemy plans."
    },
    {
        name: "Trader Lucius",
        type: "Merchant",
        charisma: 75,
        influency: 70,
        skill: method(),
        loyalty: 85,
        description: "A resourceful trader with an eye for lucrative deals.",
        impact: "Increases resource availability and trade profits."
    },
    {
        name: "Tactician Helena",
        type: "Counselor",
        charisma: 80,
        influency: 85,
        skill: method(),
        loyalty: 90,
        description: "An expert tactician who offers strategic guidance for military campaigns.",
        impact: "Improves tactical planning and campaign success."
    },
    {
        name: "Architect Bram",
        type: "Engineer",
        charisma: 60,
        influency: 65,
        skill: method(),
        loyalty: 80,
        description: "A master architect specializing in fortifications and advanced engineering.",
        impact: "Strengthens defensive structures and speeds up construction."
    },
    {
        name: "Duke Aiden",
        type: "Prince",
        charisma: 85,
        influency: 80,
        skill: method(),
        loyalty: 90,
        description: "A prince with strong leadership qualities and diplomatic skills.",
        impact: "Boosts loyalty and improves diplomatic efforts."
    },
    {
        name: "Duchess Rhea",
        type: "Princess",
        charisma: 80,
        influency: 75,
        skill: method(),
        loyalty: 88,
        description: "A diplomatic princess adept at forging and maintaining alliances.",
        impact: "Enhances diplomatic relations and alliance stability."
    },
    {
        name: "Mystic Thorne",
        type: "Wizard",
        charisma: 75,
        influency: 85,
        skill: method(),
        loyalty: 85,
        description: "A mystical wizard with the ability to influence and control magical forces.",
        impact: "Provides magical enhancements and offensive support."
    },
    {
        name: "Healer Brigid",
        type: "Religious",
        charisma: 70,
        influency: 65,
        skill: method(),
        loyalty: 80,
        description: "A compassionate healer who provides both physical and spiritual healing.",
        impact: "Enhances healing capabilities and troop recovery."
    },
    {
        name: "Marquis Gideon",
        type: "Monarch",
        charisma: 75,
        influency: 80,
        skill: method(),
        loyalty: 85,
        description: "A noble marquis with a strong sense of justice and leadership.",
        impact: "Improves administrative effectiveness and justice."
    },
    {
        name: "Commander Elric",
        type: "General",
        charisma: 70,
        influency: 75,
        skill: method(),
        loyalty: 85,
        description: "A commander known for his tactical acumen and leadership skills.",
        impact: "Enhances battle tactics and reduces enemy effectiveness."
    },
    {
        name: "Champion Beatrix",
        type: "Hero",
        charisma: 88,
        influency: 90,
        skill: method(),
        loyalty: 99,
        description: "A celebrated champion whose heroic deeds inspire and lead troops.",
        impact: "Boosts morale and provides leadership in combat."
    },
    {
        name: "Scout Lyra",
        type: "Spy",
        charisma: 65,
        influency: 70,
        skill: method(),
        loyalty: 75,
        description: "An expert scout who excels in gathering intelligence and reconnaissance.",
        impact: "Provides critical intelligence and scouting information."
    },
    {
        name: "Trader Oswin",
        type: "Merchant",
        charisma: 80,
        influency: 75,
        skill: method(),
        loyalty: 90,
        description: "A skilled trader with extensive market knowledge and negotiation skills.",
        impact: "Increases trade efficiency and resource availability."
    },
    {
        name: "Strategist Alden",
        type: "Counselor",
        charisma: 75,
        influency: 80,
        skill: method(),
        loyalty: 85,
        description: "A renowned strategist providing valuable insights and plans.",
        impact: "Enhances strategic planning and decision-making."
    },
    {
        name: "Engineer Garret",
        type: "Engineer",
        charisma: 65,
        influency: 60,
        skill: method(),
        loyalty: 80,
        description: "An engineer skilled in developing and fortifying structures.",
        impact: "Improves construction speed and defensive capabilities."
    },
    {
        name: "Count Fabian",
        type: "Prince",
        charisma: 85,
        influency: 80,
        skill: method(),
        loyalty: 90,
        description: "A count with strong leadership and diplomatic skills.",
        impact: "Boosts loyalty and strengthens diplomatic relations."
    },
    {
        name: "Countess Elara",
        type: "Princess",
        charisma: 80,
        influency: 70,
        skill: method(),
        loyalty: 85,
        description: "A countess known for her grace and diplomatic prowess.",
        impact: "Enhances diplomatic efforts and maintains alliances."
    },
    {
        name: "Enchanter Rowan",
        type: "Wizard",
        charisma: 75,
        influency: 80,
        skill: method(),
        loyalty: 85,
        description: "An enchanter with skills in magical enchantments and enhancements.",
        impact: "Provides magical support and boosts defensive capabilities."
    },
    {
        name: "Vicar Heloise",
        type: "Religious",
        charisma: 70,
        influency: 65,
        skill: method(),
        loyalty: 80,
        description: "A vicar with a deep spiritual influence and healing abilities.",
        impact: "Increases morale and provides healing support."
    }
];
