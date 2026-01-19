const missions = {
    // Early-game
    0: { name: 'Smash and Grab', price: 10, value: 0.1, level: 0, regionId: 0 }, // Gauteng
    1: { name: 'Spaza Shop Robbery', price: 25, value: 0.5, level: 5, regionId: 0 },
    2: { name: 'ATM Bombing', price: 50, value: 1, level: 20, regionId: 0 },
    3: { name: 'CIT Heist', price: 200, value: 5, level: 50, regionId: 1 }, // Mpumalanga (Req 50)
    4: { name: 'Taxi War', price: 500, value: 10, level: 100, regionId: 1 },
    5: { name: 'Chop Shop Operation', price: 1250, value: 50, level: 200, regionId: 2 }, // Limpopo (Req 150)
    
    // Mid-game
    6: { name: 'ID Fraud Ring', price: 3000, value: 100, level: 300, regionId: 3 }, // North West (Req 300)
    7: { name: 'Dagga Plantation', price: 7500, value: 250, level: 400, regionId: 3 },
    8: { name: 'Cable Theft Syndicate', price: 20000, value: 500, level: 500, regionId: 4 }, // Free State (Req 500)
    9: { name: 'Tender Fraud', price: 50000, value: 1500, level: 600, regionId: 4 },
    10: { name: 'C-Max Prison Break', price: 125000, value: 3000, level: 700, regionId: 4 },
    11: { name: 'Tik Lab', price: 300000, value: 7500, level: 800, regionId: 5 }, // Northern Cape (Req 800)
    12: { name: 'Nyaope Distribution', price: 750000, value: 15000, level: 900, regionId: 5 },
    13: { name: 'Illegal Mining (Zama Zamas)', price: 2000000, value: 40000, level: 1000, regionId: 5 },

    // Late-game
    14: { name: 'Perlemoen Smuggling',     price: 5000000, value:     100000, level: 1100, regionId: 5 },
    15: { name: 'State Capture',           price: 12500000, value:    250000, level: 1200, regionId: 6 }, // KZN (Req 1200)
    16: { name: 'Arms Deal',               price: 30000000, value:    600000, level: 1300, regionId: 6 },
    17: { name: 'Cross-Border Car Syndicate', price: 75000000, value: 1500000, level: 1400, regionId: 6 },
    18: { name: 'Mandrax Lab',             price: 200000000, value:   4000000, level: 1500, regionId: 6 },
    19: { name: 'Counterfeit Goods Factory', price: 500000000, value: 10000000, level: 1600, regionId: 7 }, // Eastern Cape (Req 1800)
    20: { name: 'Protection Racket',       price: 1250000000, value:  25000000, level: 1700, regionId: 7 },
    21: { name: 'Private Security Front',  price: 3000000000, value:  60000000, level: 1800, regionId: 7 },

    // End-game
    22: { name: 'Sun City Heist',          price: 7500000000, value: 150000000, level: 2000, regionId: 7 },
    23: { name: 'Parliament Takeover',     price: 20000000000, value: 400000000, level: 2100, regionId: 8 }, // Western Cape (Req 2500)
    24: { name: 'SA Reserve Bank Heist',   price: 50000000000, value: 1000000000, level: 2200, regionId: 8 },
    25: { name: 'Emperors Palace Heist',   price: 125000000000, value: 2500000000, level: 2300, regionId: 8 },
    26: { name: 'Guptas Compound Raid',    price: 300000000000, value: 6000000000, level: 2500, regionId: 9 }, // Kingpin (Req 5000)
};

const weapons = [
    // Default weapon
    { name: "Fist", power: 0.5, price: 0, type: 0, img: "images/weapons/melee_fist.webp" },

    // Melee Weapons
    { name: "Knuckle Duster", power: 1, price: 10, type: 1, img: "images/weapons/melee_knuckle_duster.webp" },
    { name: "Okapi", power: 2, price: 150, type: 1, img: "images/weapons/melee_okapi.webp" },
    { name: "Sjambok", power: 5, price: 450, type: 1, img: "images/weapons/melee_sjambok.webp" },
    { name: "Cricket Bat", power: 10, price: 950, type: 1, img: "images/weapons/melee_cricket_bat.webp" },
    { name: "Golf Club", power: 15, price: 1450, type: 1, img: "images/weapons/melee_golf_club.webp" },
    { name: "Cane Knife", power: 20, price: 1950, type: 1, img: "images/weapons/melee_cane_knife.webp" },
    { name: "Panga", power: 25, price: 2500, type: 1, img: "images/weapons/melee_panga.webp" },
    { name: "Bobejaan Spanner", power: 30, price: 2750, type: 1, img: "images/weapons/melee_bobejaan_spanner.webp" },
    { name: "Traditional Axe", power: 50, price: 3000, type: 1, img: "images/weapons/melee_traditional_axe.webp" },
    { name: "Cattle Prod", power: 60, price: 4500, type: 1, img: "images/weapons/melee_cattle_prod.webp" },

    // Handguns
    { name: "Stun Gun", power: 400, price: 10000, type: 2, img: "images/weapons/handgun_stun_gun.webp" },
    { name: "Star Pistol", power: 700, price: 22500, type: 2, img: "images/weapons/handgun_star_pistol.webp" },
    { name: "Vektor Z88", power: 500, price: 15000, type: 2, img: "images/weapons/handgun_vektor_z88.webp" },
    { name: ".38 Special", power: 600, price: 20000, type: 2, img: "images/weapons/handgun_38_special.webp" },
    { name: "Contender", power: 700, price: 22500, type: 2, img: "images/weapons/handgun_contender.webp" },
    { name: "Polymer Pistol", power: 2500, price: 95000, type: 2, img: "images/weapons/handgun_polymer_pistol.webp" },
    { name: "Service Pistol", power: 3000, price: 100000, type: 2, img: "images/weapons/handgun_service_pistol.webp" },
    { name: "Pocket Pistol", power: 750, price: 25000, type: 2, img: "images/weapons/handgun_pocket_pistol.webp" },
    { name: "9mm Parabellum", power: 1000, price: 50000, type: 2, img: "images/weapons/handgun_9mm_parabellum.webp" },
    { name: "Auto 9mm", power: 1500, price: 75000, type: 2, img: "images/weapons/handgun_auto_9mm.webp" },
    { name: "Desert Eagle", power: 2000, price: 85000, type: 2, img: "images/weapons/handgun_desert_eagle.webp" },
    { name: "Golden 9mm", power: 3500, price: 125000, type: 2, img: "images/weapons/handgun_golden_9mm.webp" },
    { name: ".50 Cal Pistol", power: 4500, price: 225000, type: 2, img: "images/weapons/handgun_50_cal_pistol.webp" },
    { name: "Old Revolver", power: 5000, price: 245000, type: 2, img: "images/weapons/handgun_old_revolver.webp" },
    { name: "Magnum Revolver", power: 7500, price: 250000, type: 2, img: "images/weapons/handgun_magnum_revolver.webp" },
    { name: "Tokoloshe Spirit", power: 8500, price: 375000, type: 2, img: "images/weapons/handgun_tokoloshe_spirit.webp" },

    // Shotguns
    { name: "Street Sweeper",        power: 10000, price: 450000, type: 3, img: "images/weapons/shotgun_street_sweeper.webp" },
    { name: "Bullpup Shotgun",       power: 20000, price: 525000, type: 3, img: "images/weapons/shotgun_bullpup.webp" },
    { name: "Side-by-Side",          power: 30000, price: 750000, type: 3, img: "images/weapons/shotgun_side_by_side.webp" },
    { name: "Mag-7",                 power: 45000, price: 900000, type: 3, img: "images/weapons/shotgun_mag7.webp" },
    { name: "Roer",                  power: 50000, price: 450000, type: 3, img: "images/weapons/shotgun_roer.webp" },
    { name: "Sawn-off",              power: 60000, price: 500000, type: 3, img: "images/weapons/shotgun_sawn_off.webp" },
    { name: "Striker",               power: 70000, price: 625000, type: 3, img: "images/weapons/shotgun_striker.webp" },
    { name: "Pump Action",           power: 85000, price: 750000, type: 3, img: "images/weapons/shotgun_pump_action.webp" },
    { name: "Tactical Shotgun",      power: 95000, price: 850000, type: 3, img: "images/weapons/shotgun_tactical.webp" },

    // Submachine Guns
    { name: "BXP",                   power: 200000, price:  19500000, type: 4, img: "images/weapons/smg_bxp.webp" },
    { name: "Typewriter",            power: 250000, price:  25000000, type: 4, img: "images/weapons/smg_typewriter.webp" },
    { name: "Skorpion",              power: 300000, price:  27500000, type: 4, img: "images/weapons/smg_skorpion.webp" },
    { name: "Plasma Caster",         power: 500000, price:  29500000, type: 4, img: "images/weapons/smg_plasma_caster.webp" },
    { name: "Uzi",                   power: 600000, price:  30500000, type: 4, img: "images/weapons/smg_uzi.webp" },
    { name: "Mac-10",                power: 750000, price:  32500000, type: 4, img: "images/weapons/smg_mac10.webp" },
    { name: "MP5",                   power: 900000, price:  35000000, type: 4, img: "images/weapons/smg_mp5.webp" },
    { name: "MP5SD",                 power: 1000000, price: 40000000, type: 4, img: "images/weapons/smg_mp5sd.webp" },
    { name: "Vector",                power: 1150000, price: 45000000, type: 4, img: "images/weapons/smg_vector.webp" },
    { name: "PKM",                   power: 1150000, price: 47500000, type: 4, img: "images/weapons/smg_pkm.webp" },
    { name: "SS-77",                 power: 1500000, price: 50000000, type: 4, img: "images/weapons/smg_ss77.webp" },

    // Assault Rifles
    { name: "Baby AK",               power: 1750000, price:   65000000, type: 5, img: "images/weapons/rifle_baby_ak.webp" },
    { name: "Tavor",                 power: 2500000, price:   85000000, type: 5, img: "images/weapons/rifle_tavor.webp" },
    { name: "M16",                   power: 5000000, price:   125000000, type: 5, img: "images/weapons/rifle_m16.webp" },
    { name: "AUG",                   power: 8500000, price:   250000000, type: 5, img: "images/weapons/rifle_aug.webp" },
    { name: "R4 Rifle",              power: 9000000, price:   450000000, type: 5, img: "images/weapons/rifle_r4.webp" },
    { name: "SCAR",                  power: 10000000, price:  500000000, type: 5, img: "images/weapons/rifle_scar.webp" },
    { name: "R5 Rifle",              power: 10000000, price:  500000000, type: 5, img: "images/weapons/rifle_r5.webp" },
    { name: "AK-47",                 power: 12500000, price:  600000000, type: 5, img: "images/weapons/rifle_ak47.webp" },
    { name: "FAL",                   power: 15000000, price:  750000000, type: 5, img: "images/weapons/rifle_fal.webp" },
    { name: "Galil",                 power: 95000000, price:  850000000, type: 5, img: "images/weapons/rifle_galil.webp" },
    { name: "The Gupta Special",     power: 100000000, price: 1000000000, type: 5, img: "images/weapons/rifle_gupta_special.webp" },

    // Sniper Rifles
    { name: "Hunting Rifle",         power: 500000000, price:  10000000000, type: 6, img: "images/weapons/sniper_hunting_rifle.webp" },
    { name: "DMR",                   power: 750000000, price:  15000000000, type: 6, img: "images/weapons/sniper_dmr.webp" },
    { name: "Bolt Action",           power: 850000000, price:  25000000000, type: 6, img: "images/weapons/sniper_bolt_action.webp" },
    { name: "NTW-20",                power: 1700000000, price: 75000000000, type: 6, img: "images/weapons/sniper_ntw20.webp" },
    
    // Thrown Weapons
    { name: "Tear Gas",              power: 2500000000, price:  12500000000, type: 7, img: "images/weapons/thrown_tear_gas.webp" },
    { name: "Petrol Bomb",           power: 3500000000, price:  17500000000, type: 7, img: "images/weapons/thrown_petrol_bomb.webp" },
    { name: "Pipe Bomb",             power: 5000000000, price:  22500000000, type: 7, img: "images/weapons/thrown_pipe_bomb.webp" },
    { name: "M26 Grenade",           power: 7500000000, price:  32500000000, type: 7, img: "images/weapons/thrown_m26_grenade.webp" },
    { name: "Landmine",              power: 8500000000, price:  37500000000, type: 7, img: "images/weapons/thrown_landmine.webp" },
    { name: "Limpet Mine",           power: 9500000000, price:  45000000000, type: 7, img: "images/weapons/thrown_limpet_mine.webp" },

    // Heavy Weapons
    { name: "Laser Minigun",            power: 15000000000, price:   160000000000, type: 8, img: "images/weapons/heavy_laser_minigun.webp" },
    { name: "Milkor Stopper",           power: 35000000000, price:   250000000000, type: 8, img: "images/weapons/heavy_milkor_stopper.webp" },
    { name: "Milkor MGL",               power: 50000000000, price:   450000000000, type: 8, img: "images/weapons/heavy_milkor_mgl.webp" },
    { name: "Minigun",                  power: 105000000000, price:  625000000000, type: 8, img: "images/weapons/heavy_minigun.webp" },
    { name: "RPG-7",                    power: 125000000000, price:  1000000000000, type: 8, img: "images/weapons/heavy_rpg7.webp" },
    { name: "Strela",                   power: 250000000000, price:  2000000000000, type: 8, img: "images/weapons/heavy_strela.webp" },
    { name: "Railgun",                  power: 1000000000000, price: 7500000000000, type: 8, img: "images/weapons/heavy_railgun.webp" },
];

const vehicules = {
    0: { name: 'Stamina', price: 1, value: 0.1, type: 0 },
    1: { name: 'Strength', price: 1, value: 0.1, type: 1 },
    2: { name: 'Stealth', price: 1, value: 0.1, type: 2 },
    //3: { name: 'Agility', price: 1, value: 0.1, type: 3 },
    //4: { name: 'Intelligence', price: 1, value: 0.1, type: 4 },
    //5: { name: 'Luck', price: 1, value: 0.1, type: 5 },
};

const success = [
    { name: "A fresh start", desc: "Successfully completed the tutorial.", type: 0, },
    //END OF TYPE 0

    { name: "The first Rand", desc: "You've gained R1.", type: 1, value: 1, },
    { name: "Taxi Fare", desc: "You've gained R10.", type: 1, value: 10, },
    { name: "A Clipa", desc: "You've gained R100.", type: 1, value: 100, },
    { name: "A Stena", desc: "You've gained R1,000.", type: 1, value: 1000, },
    { name: "A Choc", desc: "You've gained R10,000.", type: 1, value: 10000, },
    { name: "A Meter", desc: "You've gained R100,000.", type: 1, value: 100000, },
    { name: "Double Meter", desc: "You've gained R200,000.", type: 1, value: 200000, },
    { name: "Half a Bar", desc: "You've gained R500,000.", type: 1, value: 500000, },
    { name: "The Millionaire", desc: "You've gained R1M.", type: 1, value: 1000000, },
    { name: "Tender Money", desc: "You've gained R1.25M.", type: 1, value: 1250000, },
    { name: "Lotto Winner", desc: "You've gained R3.5M.", type: 1, value: 3500000, },
    { name: "Politician", desc: "You've gained R8M.", type: 1, value: 8000000, },
    { name: "Prestige", desc: "You've gained R10M.", type: 1, value: 10000000, },
    { name: "The Billionaire", desc: "You've gained R1B.", type: 1, value: 1000000000, },
    { name: "State Capture", desc: "You've gained R1t.", type: 1, value: 1000000000000, },
    { name: "The Trillionaire", desc: "You've gained R1q.", type: 1, value: 1000000000000000, }, 
    { name: "The Quadrillionaire", desc: "You've gained R1Q.", type: 1, value: 1000000000000000000, },
    //END OF TYPE 1

    { name: "Tsotsi", desc: "Perform 100 Smash and Grabs.", type: 2, value: 100, value2: 0, },
    { name: "Spaza Shop Raider", desc: "Rob 100 Spaza Shops.", type: 2, value: 100, value2: 1, },
    { name: "ATM Bomber", desc: "Bomb 100 ATMs.", type: 2, value: 100, value2: 2, },
    { name: "CIT Robber", desc: "Heist 100 CIT Vans.", type: 2, value: 100, value2: 3, },
    { name: "Taxi Boss", desc: "Win 100 Taxi Wars.", type: 2, value: 100, value2: 4, },
    { name: "Chop Shop King", desc: "Strip 100 vehicles in the Chop Shop.", type: 2, value: 100, value2: 5, },
    { name: "Identity Thief", desc: "Run 100 ID Fraud operations.", type: 2, value: 100, value2: 6, },
    { name: "Dagga Farmer", desc: "Harvest 100 Dagga Plantations.", type: 2, value: 100, value2: 7, },
    { name: "Cable Thief", desc: "Steal cables 100 times.", type: 2, value: 100, value2: 8, },
    { name: "Tenderpreneur", desc: "Commit 100 Tender Frauds.", type: 2, value: 100, value2: 9, },
    { name: "Prison Breaker", desc: "Escape C-Max 100 times.", type: 2, value: 100, value2: 10, },
    { name: "Walter White", desc: "Cook in 100 Tik Labs.", type: 2, value: 100, value2: 11, },
    { name: "Nyaope Kingpin", desc: "Distribute Nyaope 100 times.", type: 2, value: 100, value2: 12, },
    { name: "Zama Zama", desc: "Run 100 Illegal Mining ops.", type: 2, value: 100, value2: 13, },
    { name: "Abalone Poacher", desc: "Smuggle Perlemoen 100 times.", type: 2, value: 100, value2: 14, },
    { name: "State Capturer", desc: "Capture the State 100 times.", type: 2, value: 100, value2: 15, },
    { name: "Arms Dealer", desc: "Close 100 Arms Deals.", type: 2, value: 100, value2: 16, },
    { name: "Border Crosser", desc: "Smuggle 100 cars across the border.", type: 2, value: 100, value2: 17, },
    { name: "Mandrax Chef", desc: "Cook in 100 Mandrax Labs.", type: 2, value: 100, value2: 18, },
    { name: "Fake Goods Tycoon", desc: "Run 100 Counterfeit Goods Factories.", type: 2, value: 100, value2: 19, },
    { name: "Protection Boss", desc: "Collect Protection Money 100 times.", type: 2, value: 100, value2: 20, },
    { name: "Security Front", desc: "Run 100 Private Security Fronts.", type: 2, value: 100, value2: 21, },
    { name: "Sun City Heist", desc: "Rob Sun City 100 times.", type: 2, value: 100, value2: 22, },
    { name: "Parliament Takeover", desc: "Take over Parliament 100 times.", type: 2, value: 100, value2: 23, },
    { name: "Reserve Bank Heist", desc: "Rob the SA Reserve Bank 100 times.", type: 2, value: 100, value2: 24, },
    { name: "Emperors Palace", desc: "Rob Emperors Palace 100 times.", type: 2, value: 100, value2: 25, }, 
    { name: "Saxonwold Raid", desc: "Raid the Guptas Compound 100 times.", type: 2, value: 100, value2: 26, },
    //END OF TYPE 3

    { name: "Rank 1", desc: "Reached rank 1.", type: 4, value: 1, },
    { name: "Rank 10", desc: "Reached rank 10.", type: 4, value: 10, },
    { name: "Rank 25", desc: "Reached rank 25.", type: 4, value: 25, },
    { name: "Rank 50", desc: "Reached rank 50.", type: 4, value: 50, },
    { name: "Rank 75", desc: "Reached rank 75.", type: 4, value: 75, },
    { name: "Rank 100", desc: "Reached rank 100.", type: 4, value: 100, },
    { name: "Rank 200", desc: "Reached rank 200.", type: 4, value: 200, },
    { name: "Rank 300", desc: "Reached rank 300.", type: 4, value: 300, },
    { name: "Rank 400", desc: "Reached rank 400.", type: 4, value: 400, },
    { name: "Rank 500", desc: "Reached rank 500.", type: 4, value: 500, },
    { name: "Rank 600", desc: "Reached rank 600.", type: 4, value: 600, },
    { name: "Rank 700", desc: "Reached rank 700.", type: 4, value: 700, },
    { name: "Rank 800", desc: "Reached rank 800.", type: 4, value: 800, },
    { name: "Rank 900", desc: "Reached rank 900.", type: 4, value: 900, },
    { name: "Rank 1000", desc: "Reached rank 1000.", type: 4, value: 1000, },
    { name: "Rank 2000", desc: "Reached rank 2000.", type: 4, value: 2000, },
    { name: "Rank 3000", desc: "Reached rank 3000.", type: 4, value: 3000, }, 
    { name: "Rank 4000", desc: "Reached rank 4000.", type: 4, value: 4000, },
    { name: "Rank 5000", desc: "Reached rank 5000.", type: 4, value: 5000, },
    { name: "Rank 6000", desc: "Reached rank 6000.", type: 4, value: 6000, },
    { name: "Rank 7000", desc: "Reached rank 7000.", type: 4, value: 7000, },
    { name: "Rank 8000", desc: "Reached rank 8000.", type: 4, value: 8000, },
    { name: "Rank 9000", desc: "Reached rank 9000.", type: 4, value: 9000, },
    { name: "Rank 10000", desc: "Reached rank 10000.", type: 4, value: 10000, },
    { name: "Rank 11000", desc: "Reached rank 10000.", type: 4, value: 11000, },
    { name: "Rank 12000", desc: "Reached rank 12000.", type: 4, value: 12000, },
    { name: "Rank 13000", desc: "Reached rank 13000.", type: 4, value: 13000, },
    { name: "Rank 14000", desc: "Reached rank 14000.", type: 4, value: 14000, },
    { name: "Rank 15000", desc: "Reached rank 15000.", type: 4, value: 15000, },
    { name: "Rank 16000", desc: "Reached rank 16000.", type: 4, value: 16000, },
    { name: "Rank 17000", desc: "Reached rank 17000.", type: 4, value: 17000, },
    { name: "Rank 18000", desc: "Reached rank 18000.", type: 4, value: 18000, },
    { name: "Rank 19000", desc: "Reached rank 19000.", type: 4, value: 19000, },
    { name: "Rank 20000", desc: "Reached rank 20000.", type: 4, value: 20000, },
    { name: "Rank 21000", desc: "Reached rank 21000.", type: 4, value: 21000, },
    { name: "Rank 22000", desc: "Reached rank 22000.", type: 4, value: 22000, },
    { name: "Rank 23000", desc: "Reached rank 23000.", type: 4, value: 23000, },
    { name: "Rank 24000", desc: "Reached rank 24000.", type: 4, value: 24000, },
    { name: "Rank 25000", desc: "Reached rank 25000.", type: 4, value: 25000, },
    { name: "Rank 26000", desc: "Reached rank 26000.", type: 4, value: 26000, },
    { name: "Rank 27000", desc: "Reached rank 27000.", type: 4, value: 27000, },
    { name: "Rank 28000", desc: "Reached rank 28000.", type: 4, value: 28000, },
    { name: "Rank 29000", desc: "Reached rank 29000.", type: 4, value: 29000, },
    { name: "Rank 30000", desc: "Reached rank 30000.", type: 4, value: 30000, },
    { name: "Rank 50000", desc: "Reached rank 50000.", type: 4, value: 50000, },
    { name: "Rank 100000", desc: "Reached rank 100000.", type: 4, value: 100000, },
    //END OF TYPE 4

    { name: "Character 2", desc: "You have unlocked the character number 2.", type: 5, value: 2, },
    { name: "Character 3", desc: "You have unlocked the character number 3.", type: 5, value: 3, },
    { name: "Character 4", desc: "You have unlocked the character number 4.", type: 5, value: 4, },
    { name: "Character 5", desc: "You have unlocked the character number 5.", type: 5, value: 5, },
    { name: "Character 6", desc: "You have unlocked the character number 6.", type: 5, value: 6, },
    { name: "Character 7", desc: "You have unlocked the character number 7.", type: 5, value: 7, },
    { name: "Character 8", desc: "You have unlocked the character number 8.", type: 5, value: 8, },
    { name: "Character 9", desc: "You have unlocked the character number 9.", type: 5, value: 9, },
    { name: "Character 10", desc: "You have unlocked the character number 10.", type: 5, value: 10, }, 
    { name: "Character 11", desc: "You have unlocked the character number 11.", type: 5, value: 11, },
    { name: "Character 12", desc: "You have unlocked the character number 12.", type: 5, value: 12, },
    { name: "Character 13", desc: "You have unlocked the character number 13.", type: 5, value: 13, },
    { name: "Character 14", desc: "You have unlocked the character number 14.", type: 5, value: 14, },
    { name: "Character 15", desc: "You have unlocked the character number 15.", type: 5, value: 15, },
    { name: "Character 16", desc: "You have unlocked the character number 16.", type: 5, value: 16, },
    { name: "Character 17", desc: "You have unlocked the character number 17.", type: 5, value: 17, },
    { name: "Character 18", desc: "You have unlocked the character number 18.", type: 5, value: 18, },
    { name: "Character 19", desc: "You have unlocked the character number 19.", type: 5, value: 19, },
    { name: "Character 20", desc: "You have unlocked the character number 20.", type: 5, value: 20, },
    { name: "Character 21", desc: "You have unlocked the character number 21.", type: 5, value: 21, },
    { name: "Character 22", desc: "You have unlocked the character number 22.", type: 5, value: 22, },
    { name: "Character 23", desc: "You have unlocked the character number 23.", type: 5, value: 23, },
    { name: "Character 24", desc: "You have unlocked the character number 24.", type: 5, value: 24, },
    { name: "Character 25", desc: "You have unlocked the character number 25.", type: 5, value: 25, },
    { name: "Character 26", desc: "You have unlocked the character number 26.", type: 5, value: 26, },
    { name: "Character 27", desc: "You have unlocked the character number 27.", type: 5, value: 27, },
    { name: "Character 28", desc: "You have unlocked the character number 28.", type: 5, value: 28, },
    { name: "Character 29", desc: "You have unlocked the character number 29.", type: 5, value: 29, },
    { name: "Character 30", desc: "You have unlocked the character number 30.", type: 5, value: 30, },
    //END OF TYPE 5

];

const tutorialtexts = {
    0: { title: "Welcome", text: "Welcome to Mzansi Crime Idle.<br /> Thanks for playing this game.<br /> It is a crime game set in South Africa, but in an idle environment.<br /> Build your empire from the streets to the state.", },
    1: { title: "Objective", text: "The main goal is to buy every weapon and control every hustle in the country.<br /> To do that, you have to get <div class='money'></div> by using your weapons or by doing missions.", },
    2: { title: "How to play ?", text: "Start by clicking on the fist to make some Rands.<br /> After you got some cash, you can buy a weapon or start a mission to gain a lot more <div class='money'></div>.<br /> Buying a Hustle will increase your rank, which you need to change your character.", },
    3: { title: "Missions", text: "Missions (Hustles) are the main mechanic to automate the game.<br /> The more you have, the more <div class='money'></div> and <div class='level'></div> you get, but they become more expensive.", },
    4: { title: "Weapons", text: "Weapons are used to do more damage and manually get <div class='money'></div>.<br /> There is a random quality system applied to weapons that can raise or lower their power.", },
    5: { title: "Character", text: "This is the prestige system.<br /> Once you have the required <div class='money'></div> and rank,<br /> you can change your character and get <i class='fa-light fa-coin'></i> Chips.<br /> It will cost all your Weapons, Money and Missions but you keep your Skills.", },
    6: { title: "Skills", text: "Skills increase your cash and damage multipliers.<br /> You need <i class='fa-light fa-coin'></i> Chips to upgrade them.", },
};

const texts = {
    sidebar: ["Success", "Statistics", "Guide", "Save", "Donate"],
    menu: ["Menu", "Weapons", "Missions", "Character", "Stats", "Achievements"],
    weapons: ["Weapon", "Price", "Base Damage", "Purchase", "Roll stats", "Equip", "Equipped", "Actions"],
    missions: ["Buy", "Sell", "Level", "Value", "produce", "/s"],
    vehicles: ["Price", "adds", "of", "cash", "damage", "multiplier", "Purchase"],
    infos: ["<i class='fa-sharp fa-light fa-user-unlock'></i> New character slot available."],
    character: ["Change character", "You are actually using the character number", "You must reach the rank", "and get", "to switch to another character.", "You can currently get", "<span class='jaune'><i class='fa-light fa-coin'></i> Chips</span> for your new character.", "Current prestige multiplier at", "(+10% per character) for earned cash & damage."],
    weapontype: ["", "Melee Weapons", "Handguns", "Shotguns", "Machine Guns", "Assault Rifles", "Sniper Rifles", "Thrown Weapons", "Heavy Weapons"],
    success: ["success obtained.", "Player", "Cash", "Missions", "Vehicles", "Close"],
    stats: ["Save", "Statistics", "Export", "Import", "New Account", "Close", "in your pockets", "per second", "per click", "bought", "You started the", "and played for", "Current version", "Options", "Toggle backgrounds"],
};