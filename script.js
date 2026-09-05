/* SLOW RIDER - CATALOG DESIGN REBUILD */
const products = [
  {
    "id": "patrol",
    "name": "Patrol Electric Scooter",
    "category": "Electric Scooter",
    "image": "patrol-police.png",
    "description": "A practical electric patrol scooter for urban security, facility management and fleet applications, with emergency lighting and flexible battery options.",
    "specs": {
      "Motor": "1000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      "Lighting": "LED Headlight + Emergency Light",
      "Wheel Hub": "Iron",
      "Color": "Blue / White",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "maxi",
    "name": "Maxi Electric Scooter",
    "category": "Electric Scooter",
    "image": "maxi-scooter.png",
    "description": "A sporty maxi-style electric scooter for urban mobility and dealer markets, combining higher-speed performance with practical everyday usability.",
    "specs": {
      "Motor": "2000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "80–90 km/h",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "sunrise",
    "name": "Sunrise Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "sunrise.png",
    "description": "A 3000W electric motorcycle with classic road-bike styling, suitable for commuting, distribution and OEM customization in international markets.",
    "specs": {
      "Motor": "3000W",
      "Tyres (Front / Rear)": "2.75-18 / 110-90-16 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Colors": "Black / Red",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "big-cg125",
    "name": "Big CG125 Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "big-cg125.png",
    "description": "A 3000W classic-style electric motorcycle platform designed for commuting and dealer markets, with multiple color and battery options.",
    "specs": {
      "Motor": "3000W",
      "Tyres (Front / Rear)": "2.75-18 / 110-90-16 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Colors": "Black / Blue / Red",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "cg125",
    "name": "CG125 Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/CG125_配置_2.jpeg",
    "description": "A 2000W electric motorcycle with classic CG styling, 70 km/h maximum speed and disc brakes front and rear for practical daily mobility.",
    "specs": {
      "Motor": "2000W",
      "Tyres (Front / Rear)": "110/70-17 / 140/70-16 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Colors": "Black / Blue / Red",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "u2",
    "name": "U2 Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/U2_配置_2.png",
    "description": "A compact 1500W electric motorcycle for urban commuting, offering 55 km/h maximum speed, dual disc brakes and multiple battery options.",
    "specs": {
      "Motor": "1500W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "h1",
    "name": "H1 Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/H1_配置_2.png",
    "description": "A 1000W urban electric motorcycle with 60 km/h maximum speed, dual disc brakes and a compact city-oriented configuration.",
    "specs": {
      "Motor": "1000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "60 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "Orange",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "v6",
    "name": "V6 Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/V6_配置_2.jpeg",
    "description": "An 800W electric motorcycle focused on efficient urban transportation, with tubeless tyres, front disc brake and flexible battery options.",
    "specs": {
      "Motor": "800W",
      "Tyres (Front / Rear)": "3.00-10 / 3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Colors": "Green / Purple / Brown",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "cloud",
    "name": "Cloud Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/Cloud_配置_2.jpeg",
    "description": "A 3000W high-performance electric motorcycle with 85 km/h maximum speed, dual disc brakes and aluminum wheels for higher-speed urban mobility.",
    "specs": {
      "Motor": "3000W",
      "Tyres (Front / Rear)": "110/70-17 / 140/70-17 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "85 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Colors": "Black / Red / Brown / Green",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "m1",
    "name": "M1 Electric Scooter",
    "category": "Electric Scooter",
    "image": "slow_rider_product_images/M1_配置_2.jpeg",
    "description": "A compact 500W electric scooter for practical short-distance transportation, with 40 km/h maximum speed and simple low-maintenance hardware.",
    "specs": {
      "Motor": "500W",
      "Tyres (Front / Rear)": "2.75-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "40 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "White",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "breeze",
    "name": "Breeze Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/和风_配置_1__2.jpeg",
    "description": "A 3000W electric motorcycle with 80 km/h maximum speed, dual disc brakes and aluminum wheels for performance-oriented urban markets.",
    "specs": {
      "Motor": "3000W",
      "Tyres (Front / Rear)": "90/90-17 / 110/80-17 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "80 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Colors": "Black / Red / Yellow / Green",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "fengshen",
    "name": "FengShen Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/封神_配置_2.png",
    "description": "A 1500W electric motorcycle with 65 km/h maximum speed, dual disc brakes and aluminum wheels for everyday urban mobility.",
    "specs": {
      "Motor": "1500W",
      "Tyres (Front / Rear)": "3.0-12 / 3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "65 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Colors": "Gray / White",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "jh",
    "name": "JH Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/极核_配置_1__2.jpeg",
    "description": "A 2000W electric motorcycle with 65 km/h maximum speed, 12-inch tubeless tyres and dual disc brakes for compact urban use.",
    "specs": {
      "Motor": "2000W",
      "Tyres (Front / Rear)": "90/90-12 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "65 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "Orange",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "sky",
    "name": "Sky Electric Scooter",
    "category": "Electric Scooter",
    "image": "slow_rider_product_images/苍穹_配置_1__2.jpeg",
    "description": "A 1000W electric scooter for city transport, offering 55 km/h maximum speed, dual disc brakes and practical battery options.",
    "specs": {
      "Motor": "1000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "Gray",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "tank",
    "name": "Tank Electric Motorcycle",
    "category": "Electric Motorcycle",
    "image": "slow_rider_product_images/坦克配置_2.png",
    "description": "A rugged 2000W electric motorcycle with 70 km/h maximum speed, emergency lighting and a broad range of color options.",
    "specs": {
      "Motor": "2000W",
      "Tyres (Front / Rear)": "120/70-12 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight / Emergency Light",
      "Wheel Hub": "Aluminum",
      "Colors": "Black / Blue / Red / Yellow / Military Green",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "dash",
    "name": "Dash Electric Utility Vehicle",
    "category": "Utility Vehicle",
    "image": "slow_rider_product_images/走你_配置_4__2.png",
    "description": "A 1200W electric utility vehicle with 55 km/h maximum speed, disc brakes and durable iron wheels for practical transport applications.",
    "specs": {
      "Motor": "1200W",
      "Tyres (Front / Rear)": "16×3.00 Inch",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      "Appearance": "Spray Paint",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "Green / Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "hummer",
    "name": "Hummer Electric Utility Vehicle",
    "category": "Utility Vehicle",
    "image": "slow_rider_product_images/悍马_配置_2.jpeg",
    "description": "A heavy-duty 1800W electric utility model with 50 km/h maximum speed and larger 12-inch tyre configuration for practical transport use.",
    "specs": {
      "Motor": "1800W",
      "Tyres (Front / Rear)": "375-12 / 400-12",
      "Brakes (Front / Rear)": "Drum / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "50 km/h",
      "Appearance": "Spray Paint",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "Orange / Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "little-cow",
    "name": "Little Cow Utility Vehicle",
    "category": "Utility Vehicle",
    "image": "slow_rider_product_images/小牛牛_配置_2.jpeg",
    "description": "A compact 600W electric utility vehicle designed for short-distance transport, with 45 km/h maximum speed and practical low-speed operation.",
    "specs": {
      "Motor": "600W",
      "Tyres (Front / Rear)": "3.0-8 / 3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "Blue",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "people-carrier",
    "name": "2-Wheel People Carrier",
    "category": "Passenger Vehicle",
    "image": "slow_rider_product_images/两轮载人车_配置_2.png",
    "description": "A 1200W electric people carrier designed for short-distance passenger transportation, with 45 km/h maximum speed and dual disc brakes.",
    "specs": {
      "Motor": "1200W",
      "Tyres (Front / Rear)": "90/90-12 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      "Appearance": "Spray Paint",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "cargo-basic",
    "name": "2-Wheel Cargo Basic",
    "category": "Cargo Vehicle",
    "image": "slow_rider_product_images/两轮货运基础款_配置_2.png",
    "description": "A 1500W electric cargo vehicle for delivery and commercial transport, combining 55 km/h maximum speed with dual disc brakes.",
    "specs": {
      "Motor": "1500W",
      "Tyres (Front / Rear)": "90/90-12",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      "Appearance": "Spray Paint",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "cargo-luxury",
    "name": "2-Wheel Cargo Luxury",
    "category": "Cargo Vehicle",
    "image": "slow_rider_product_images/两轮货运豪华版__配置_2.png",
    "description": "An upgraded 2000W electric cargo vehicle for commercial transport, offering 65 km/h maximum speed and aluminum wheels.",
    "specs": {
      "Motor": "2000W",
      "Tyres (Front / Rear)": "90/90-12",
      "Brakes (Front / Rear)": "Disc / Disc",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "65 km/h",
      "Appearance": "Spray Paint",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "cargo",
    "name": "Cargo Delivery Vehicle",
    "category": "Cargo Vehicle",
    "image": "slow_rider_product_images/快递车_配置_2__2.png",
    "description": "A 1200W electric delivery vehicle designed for courier and last-mile logistics, with 52 km/h maximum speed and durable drum brakes.",
    "specs": {
      "Motor": "1200W",
      "Tyres (Front / Rear)": "3.75-12 Tubeless",
      "Brakes (Front / Rear)": "Drum / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "52 km/h",
      "Appearance": "Spray Paint",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Iron",
      "Color": "White",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "eagle-3w",
    "name": "3 Wheeler Eagle",
    "category": "Three Wheel Vehicle",
    "image": "slow_rider_product_images/鹰系三轮_配置xlsx_2.png",
    "description": "A 500W electric three-wheel vehicle for stable low-speed mobility and commercial transport, with 45 km/h maximum speed.",
    "specs": {
      "Motor": "500W",
      "Tyres (Front / Rear)": "3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "Black",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "bull-3w",
    "name": "3 Wheeler Bull",
    "category": "Three Wheel Vehicle",
    "image": "slow_rider_product_images/牛系三轮_配置xlsx_1__3.png",
    "description": "A 500W electric three-wheel vehicle designed for practical transport and stable operation, with 45 km/h maximum speed.",
    "specs": {
      "Motor": "500W",
      "Tyres (Front / Rear)": "3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      "Battery": "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      "Appearance": "PU Baking Finish",
      "Lighting": "LED Headlight",
      "Wheel Hub": "Aluminum",
      "Color": "White",
      "OEM / ODM": "Available"
    }
  },
  {
    "id": "atv-01",
    "name": "Big Dodge200ccChain Drive)Automatic",
    "category": "ATV",
    "image": "atv_images/atv-01-big-dodge200ccchain-drive-automatic.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust": "Single Aluminum Exhaust",
      "Dashboard": "LCD Display",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Front and Rear Plastic Panels Large Backrest Handguards",
      "Overall Dimensions": "L1.80m W1.1m H1.10m",
      "Package Dimensions": "L1.70m W1.00m H0.82m",
      "Vehicle Weight": "200kg",
      "Additional": "Engine200cc.250cc, can be chosen"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-02",
    "name": "Big DodgeRoll Cage200cc (Chain Drive)Automatic",
    "category": "ATV",
    "image": "atv_images/atv-02-big-dodgeroll-cage200cc-chain-drive-automatic.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust": "Single Aluminum Exhaust",
      "Dashboard": "LCD Display",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Front and Rear Plastic Panels Large Backrest Handguards",
      "Overall Dimensions": "L1.80m W1.1m H1.10m",
      "Package Dimensions": "L1.70m W1.00m H0.82m",
      "Vehicle Weight": "200kg",
      "Additional": "Engine200cc.250cc can be chosen"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-03",
    "name": "Extended VersionBig Dodge200cc (Chain Drive)Automatic",
    "category": "ATV",
    "image": "atv_images/atv-03-extended-versionbig-dodge200cc-chain-drive-automatic.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust": "Single Aluminum Exhaust",
      "Dashboard": "Color LCD Display",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Front and Rear Plastic Panels Large Backrest Handguards",
      "Overall Dimensions": "L1.90m W1.1m H1.10m",
      "Package Dimensions": "L1.75m W1.00m H0.82m",
      "Vehicle Weight": "205kg",
      "Additional": "Engine200cc.250cc can be chosen"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-04",
    "name": "Shock‑proof Bull 200cc, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-04-shock-proof-bull-200cc-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Network light": "L-shaped light",
      "Other configurations": "turn signal lamp, edge trim, fuel gauge, hand guard",
      "Overall Dimensions": "L1.80m W1.1m H1.15m",
      "Package Dimensions": "L1.54m W0.87m H0.83m Tires加0.3方",
      "Vehicle Weight": "175kg",
      "Additional": "Engine150cc.200cc.can be chosen"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-05",
    "name": "Bashan 400cc, CVT (chain‑drive version), full‑time 4WD",
    "category": "ATV",
    "image": "atv_images/atv-05-bashan-400cc-cvt-chain-drive-version-full-time-4wd.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "400 CC Engine",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Fuel Tank": "14L Fuel Tank",
      "Brakes": "Front and Rear Disc Brakes",
      "Suspension (2)": "Double‑swingarm independent suspension",
      "Brake": "Handlebar brake",
      "Power": "20/6000 kW",
      "Other configurations": "hand guard, backrest, winch",
      "Overall Dimensions": "L2.05m W1.16m H1.20m",
      "Package Dimensions": "L2.00m W1.15m H0.85m",
      "Vehicle Weight": "325kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-06",
    "name": "Great Sirius 200cc, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-06-great-sirius-200cc-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200 Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tire": "10‑inch aluminum wheel (12‑inch tire optional, extra charge 350)",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust": "Single Aluminum Exhaust",
      "Dashboard": "LCD Display",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Front and Rear Plastic Panels Large Backrest Handguards",
      "Overall Dimensions": "L1.80m W1.1m H1.10m",
      "Package Dimensions": "L1.70m W1.03m H0.82m",
      "Vehicle Weight": "200kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-07",
    "name": "Bashan 400cc, CVT, part‑time 4WD, EFI",
    "category": "ATV",
    "image": "atv_images/atv-07-bashan-400cc-cvt-part-time-4wd-efi.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "400CCEngine",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Suspension": "Front double‑swingarm, rear independent suspension",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "9L Fuel Tank",
      "Brake": "Handlebar brake",
      "Transmission type": "Shaft drive",
      "Max speed": "80 KM/H",
      "Other configurations": "Hand guard, backrest, winch, heated handlebar, rear‑view mirror",
      "Overall Dimensions": "L2.08m W1.20m H1.20m",
      "Package Dimensions": "L2.08m W1.16m H0.95m",
      "Vehicle Weight": "325kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-08",
    "name": "Big Bull Electric Version",
    "category": "ATV",
    "image": "atv_images/atv-08-big-bull-electric-version.jpg",
    "description": "Electric ATV for recreational, utility and dealer markets, with configurable battery and motor options.",
    "specs": {
      "Motor": "Unitech 1.2 kW",
      "Battery": "60V 20Ah",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Instrument": "LCD meter",
      "Brake": "Four‑wheel hydraulic disc brake",
      "Gear": "3‑speed (Medium, High, Low)",
      "Tires": "10inch Aluminum Wheels",
      "Other Configurations": "Four‑net lamp, backrest",
      "Overall Dimensions": "L1.9m W1.1m H1.15m",
      "Package Dimensions": "L1.70m W0.95m H0.88m",
      "Vehicle Weight": "200kg",
      "Battery optional": "60V / 72V\n(Motor optional: 1000W, 1500W, 2200W)",
      "Additional": "Custom lithium battery available"
    },
    "type": "Electric ATV"
  },
  {
    "id": "atv-09",
    "name": "Little Warrior Electric Version",
    "category": "ATV",
    "image": "atv_images/atv-09-little-warrior-electric-version.jpg",
    "description": "Electric ATV for recreational, utility and dealer markets, with configurable battery and motor options.",
    "specs": {
      "Motor": "Unitech 500W",
      "Battery": "48V 20Ah",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Brake": "Front drum brake, rear hydraulic disc brake",
      "Gear": "3‑speed (Medium, High, Low)",
      "Tire": "8‑inch tire with wheel rim",
      "Overall Dimensions": "L1.45m W1.00m H0.98m",
      "Package Dimensions": "L1.32m W0.8m H0.72m",
      "Vehicle Weight": "100kg",
      "Battery optional": "48V / 60V\n(Motor optional: 500W, 750W, 1000W)",
      "Additional": "Custom lithium battery available"
    },
    "type": "Electric ATV"
  },
  {
    "id": "atv-10",
    "name": "Big Hummer CVT(Chain Drive)Automatic",
    "category": "ATV",
    "image": "atv_images/atv-10-big-hummer-cvt-chain-drive-automatic.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Triple meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "10L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Large Backrest Roll Cage 4网灯",
      "Overall Dimensions": "L2.00m W1.20m H1.10m",
      "Packing dimensions": "Length 1.95 m, Width 1.09 m, Height 0.9 m, Additional tire volume: 0.3 CBM",
      "Vehicle Weight": "250kg",
      "Additional": "Electric version optional"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-11",
    "name": "Big Hummer, 4X4 Full‑time 4WD",
    "category": "ATV",
    "image": "atv_images/atv-11-big-hummer-4x4-full-time-4wd.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "250 engine, 4‑forward 1‑reverse, electric version optional",
      "Starting Method": "Electric Start",
      "Tires": "14inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust": "",
      "Instrument": "LCD meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "10L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Roll Cage 4网灯 后背箱",
      "Overall Dimensions": "L2.00m W1.20m H1.10m",
      "Packing dimensions": "Length 1.95 m, Width 1.09 m, Height 0.9 m, Additional tire volume: 0.3 CBM",
      "Vehicle Weight": "270kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-12",
    "name": "Medium War Eagle",
    "category": "ATV",
    "image": "atv_images/atv-12-medium-war-eagle.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tire": "8‑inch steel wheel with rim",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "None",
      "Brake": "Rear hydraulic disc brake",
      "Fuel tank": "Steel fuel tank",
      "Other Configurations": "Handguards",
      "Overall Dimensions": "L1.5m W0.85m H1.10m",
      "Package Dimensions": "L1.32m W0.81m H0.72m",
      "Vehicle Weight": "100kg",
      "Additional": "Electric version optional"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-13",
    "name": "Little War God",
    "category": "ATV",
    "image": "atv_images/atv-13-little-war-god.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tire": "8‑inch steel wheel with rim",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Brake": "Front drum brake, rear hydraulic disc brake",
      "Fuel Tank": "3L Fuel Tank",
      "Other configurations": "Hand guard, plastic panels",
      "Overall Dimensions": "L1.45m W0.92m H0.95m",
      "Package Dimensions": "L1.30m W0.80m H0.75m",
      "Vehicle Weight": "100kg",
      "Additional": "Electric version optional"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-14",
    "name": "Great War God, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-14-great-war-god-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200 Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Suspension": "Front and Rear Reinforced Hydraulic Suspension",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Brake": "Front drum brake, rear disc brake",
      "Fuel Tank": "5L Fuel Tank",
      "Other configurations": "Fuel gauge, backrest, hand guard, plastic panels",
      "Overall Dimensions": "L1.80m W1.15m H1.15m",
      "Package Dimensions": "L1.54m W0.88m H0.85m",
      "Vehicle Weight": "170kg",
      "Optional engine": "150cc / 200cc; electric version optional"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-15",
    "name": "Little Falcon",
    "category": "ATV",
    "image": "atv_images/atv-15-little-falcon.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tire": "7‑inch steel wheel with rim",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "None",
      "Brake": "Rear hydraulic disc brake",
      "Fuel tank": "Plastic fuel tank",
      "Other configurations": "Chest protector",
      "Overall Dimensions": "L1.38m W0.84m H0.84m",
      "Package Dimensions": "L1.27m W0.77m H0.66m",
      "Vehicle Weight": "85kg",
      "Additional": "Electric version optional"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-16",
    "name": "Qiye Model",
    "category": "ATV",
    "image": "atv_images/atv-16-qiye-model.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tire": "8‑inch steel wheel with rim",
      "Shock absorber": "Front air‑bag shock absorber, rear hydraulic shock absorber",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Other configurations": "Hand guard, headlight eyebrow, tail light, backrest, LED spot lamp, plastic panels",
      "Overall Dimensions": "L1.52m W1.0m H0.98m",
      "Package Dimensions": "L1.42m W0.9m H0.75m",
      "Vehicle Weight": "135kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-17",
    "name": "War Wolf Model, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-17-war-wolf-model-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Loncin vertical 200 engine, 1‑forward, 1‑reverse with neutral gear",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Shock absorber": "Front & rear thickened hydraulic shock absorbers",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "10L Fuel Tank",
      "Other Configurations": "Turn Signals .Roll Cage Large Backrest",
      "Overall Dimensions": "L2.1m W1.15m H1.1m",
      "Packing dimensions": "Length 2.1 m, Width 1.15 m, Height 0.81 m, additional tire volume 0.3 CBM",
      "Vehicle Weight": "220kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-18",
    "name": "Little Mars (Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-18-little-mars-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Instrument": "Single meter",
      "Brake": "Rear hydraulic disc brake",
      "Fuel Tank": "3L Fuel Tank",
      "Tire": "10‑inch aluminum highway tire",
      "Overall Dimensions": "L1.45m W0.9m H0.9m",
      "Package Dimensions": "L1.32m W0.8m H0.72m",
      "Vehicle Weight": "75kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-19",
    "name": "Big Bull Electric 4X4",
    "category": "ATV",
    "image": "atv_images/atv-19-big-bull-electric-4x4.jpg",
    "description": "Electric ATV for recreational, utility and dealer markets, with configurable battery and motor options.",
    "specs": {
      "Motor": "Unitech 1.5 kW, front‑rear dual‑motor",
      "Battery": "72V 32Ah",
      "Tires": "12inch Aluminum Wheels",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Instrument": "LCD meter",
      "Brake": "Front & rear hydraulic disc brakes",
      "Other configurations": "Hand guard, four‑net lamp, rear‑view mirror, backrest",
      "Overall Dimensions": "L1.9m W1.1m H1.15m",
      "Package Dimensions": "L1.70m W0.95m H0.88m 加Tires0.3方",
      "Vehicle Weight": "220kg"
    },
    "type": "Electric ATV"
  },
  {
    "id": "atv-20",
    "name": "BJS, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-20-bjs-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Loncin vertical 250 engine, 1‑forward, 1‑reverse with neutral gear",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Shock absorber": "Front & rear thickened hydraulic shock absorbers",
      "Suspension": "Front independent suspension, rear through‑shaft",
      "Brake": "Front & rear hydraulic disc brakes",
      "Other Configurations": "Large Backrest",
      "Overall Dimensions": "L2.00m W1.1m H1.2m",
      "Package Dimensions": "L2.00m W1.2m H0.9m",
      "Vehicle Weight": "245kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-21",
    "name": "Shock‑proof Big Mars, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-21-shock-proof-big-mars-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Shock absorber": "Front & rear thickened hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Gear position display",
      "Brake": "Front drum brake, rear disc brake",
      "Fuel Tank": "5L Fuel Tank",
      "Other Configurations": "",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Package Dimensions": "L1.54m W0.87m H0.83m",
      "Vehicle Weight": "180kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-22",
    "name": "Big Bull Electric Model",
    "category": "ATV",
    "image": "atv_images/atv-22-big-bull-electric-model.jpg",
    "description": "Electric ATV for recreational, utility and dealer markets, with configurable battery and motor options.",
    "specs": {
      "Motor": "Unitech 1.5 kW",
      "Battery": "72V 20Ah",
      "Tire": "12‑inch",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Instrument": "LCD meter",
      "Brake": "Front & rear hydraulic disc brakes",
      "Other configurations": "four‑net lamp",
      "Overall Dimensions": "L1.9mW1.1mH1.15m",
      "Packing dimensions": "Length 1.70 m, Width 0.95 m, Height 0.88 m, additional tire volume 0.3 CBM",
      "Vehicle Weight": "220kg",
      "Optional": "Battery 60V /72V; Motor 1000W /1500W /2200W",
      "Additional": "Lithium‑ion battery customizable"
    },
    "type": "Electric ATV"
  },
  {
    "id": "atv-23",
    "name": "Little BullElectric Model",
    "category": "ATV",
    "image": "atv_images/atv-23-little-bullelectric-model.jpg",
    "description": "Electric ATV for recreational, utility and dealer markets, with configurable battery and motor options.",
    "specs": {
      "Motor": "Unitech 500 W",
      "Battery": "48V 20Ah",
      "Tire": "8‑inch (optional)",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Dashboard": "电量表",
      "Instrument": "Battery indicator meter",
      "Other configurations": "Four‑net lamp",
      "Overall Dimensions": "L1.45mW0.9mH0.9m",
      "Package Dimensions": "L1.32mW0.8mH0.72m",
      "Vehicle Weight": "100kg",
      "Optional": "Battery 48V /60V; Motor 500W /750W /1000W",
      "Additional": "Lithium‑ion battery customizable"
    },
    "type": "Electric ATV"
  },
  {
    "id": "atv-24",
    "name": "Big Bull 4X4",
    "category": "ATV",
    "image": "atv_images/atv-24-big-bull-4x4.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "250cc water‑cooled, 4‑forward & 1‑reverse gear",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Shock absorber": "Front & rear thickened dual‑hydraulic shock absorbers",
      "Instrument": "LCD meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Other Configurations": "Turn Signals Body Trim Roll Cage 4网灯 靠背",
      "Overall Dimensions": "L2.00mW1.20mH1.10m",
      "Package Dimensions": "L1.8mW1.0mH0.84m",
      "Vehicle Weight": "220kg",
      "Optional": "250cc /300cc engine"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-25",
    "name": "Little Mars(Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-25-little-mars-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "None",
      "Fuel Tank": "3L Fuel Tank",
      "Tire": "7‑inch tire",
      "Overall Dimensions": "L1.45m W0.9m H0.9m",
      "Package Dimensions": "L1.32m W0.8m H0.72m",
      "Vehicle Weight": "80kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-26",
    "name": "ittle War God(Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-26-ittle-war-god-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Fuel Tank": "3L Fuel Tank",
      "Tire": "8‑inch tire with rim",
      "Overall Dimensions": "L1.45m W1.00m H0.98m",
      "Package Dimensions": "L1.32m W0.8m H0.72m",
      "Vehicle Weight": "90kg",
      "Brake": "Front drum brake, rear disc brake"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-27",
    "name": "300 Water‑cooled, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-27-300-water-cooled-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Starting Method": "Electric Start",
      "Front suspension": "Double A‑arm swingarm",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD single meter",
      "Fuel Tank": "9L Fuel Tank",
      "Tires": "12 - inch Tires",
      "Overall Dimensions": "L1.94m W1.09m H0.91m",
      "Package Dimensions": "L1.95m W1.1m H0.8m",
      "Packing weight": "270 kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-28",
    "name": "Big Bull 4X4 (2‑wheel /4‑wheel drive switchable)",
    "category": "ATV",
    "image": "atv_images/atv-28-big-bull-4x4-2-wheel-4-wheel-drive-switchable.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "300cc water‑cooled, 5‑forward 1‑reverse",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Shock absorber": "Front & rear thickened dual‑hydraulic shock absorbers",
      "Instrument": "LCD meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Other configurations": "Turn signals, body trim, roll‑over bar, four‑net lamp, winch",
      "Overall Dimensions": "L1.90m W1.20m H1.20m",
      "Package Dimensions": "L1.9m W1.02m H0.87m",
      "Vehicle Weight": "240kg",
      "Optional engine": "250cc / 300cc / 350cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-29",
    "name": "Electric BMW 4WD (Dual‑motor) 3000W",
    "category": "ATV",
    "image": "atv_images/atv-29-electric-bmw-4wd-dual-motor-3000w.jpg",
    "description": "Electric ATV for recreational, utility and dealer markets, with configurable battery and motor options.",
    "specs": {
      "Motor": "1.5W dual motor 3000W",
      "Battery": "72V 32Ah lead‑acid battery",
      "Front suspension": "Independent front suspension; Rear: Split rear axle",
      "Max speed": "50 KM/H",
      "Drive mode": "4‑wheel drive",
      "Drive mode (2)": "4‑wheel drive",
      "Brakes": "Front and Rear Disc Brakes",
      "Shock absorber": "Front & rear thickened dual‑hydraulic shock absorbers",
      "Additional": "Overall Dimensions1950/1200/1200",
      "Packing dimensions": "1950 × 1250 × 850 mm",
      "Gross weight": "270 kg (including package)",
      "Optional custom": "2.2 kW dual‑motor available"
    },
    "type": "Electric ATV"
  },
  {
    "id": "atv-30",
    "name": "Bashan 300CC Water‑cooled, Rear‑wheel drive",
    "category": "ATV",
    "image": "atv_images/atv-30-bashan-300cc-water-cooled-rear-wheel-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Ignition": "Electric start",
      "Drive": "Chain drive",
      "Transmission": "CVT continuously variable transmission",
      "Swingarm": "Front & rear double swingarm",
      "Tires": "12-inch Tires",
      "Brakes": "Front and Rear Disc Brakes",
      "Other configurations": "Backrest, rear‑view mirrors, hand guards, M6 LCD meter",
      "Packing dimensions": "2000 × 1150 × 850 mm",
      "Package Dimensions": "2000mm*1150*850mm"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-31",
    "name": "Little Sirius(Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-31-little-sirius-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Suspension": "Front and Rear Hydraulic Suspension",
      "Brake": "Front drum brake, rear disc brake",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Fuel Tank": "3L Fuel Tank",
      "Tire": "8‑inch tire with rim",
      "Overall Dimensions": "L1.55m W1.05m H1.00m",
      "Package Dimensions": "L1.35m W0.88m H0.63m",
      "Vehicle Weight": "100kg",
      "Optional engine": "150cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-32",
    "name": "Little Overlord 125CC",
    "category": "ATV",
    "image": "atv_images/atv-32-little-overlord-125cc.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tire": "8‑inch steel wheel with rim",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "LCD meter",
      "Brake": "Front drum brake, rear hydraulic disc brake",
      "Fuel tank": "Steel fuel tank",
      "Additional": "Other Configurations;Handguards",
      "Overall Dimensions": "L1.47m W1.0m H0.92m",
      "Package Dimensions": "L1.32m W0.81m H0.72m",
      "Vehicle Weight": "100kg",
      "Optional engine": "125cc / 150cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-33",
    "name": "Shock‑proof Big Bull with Roll‑over Bar, CVT automatic (chain‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-33-shock-proof-big-bull-with-roll-over-bar-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200 engine, 1‑forward, 1‑reverse with neutral gear",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Shock absorber": "Front & rear thickened hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Triple meter",
      "Brake": "Front drum brake, rear disc brake",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other configurations": "Turn signal lamp, body trim, fuel gauge, four‑net lamp, roll‑over bar",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Packing dimensions": "Length 0.94 m, Width 0.94 m, Height 0.80 m, additional tire volume 0.3 CBM",
      "Vehicle Weight": "200kg",
      "Optional engine": "150cc / 200cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-34",
    "name": "Little Bull(Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-34-little-bull-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Single meter",
      "Brake": "Rear hydraulic disc brake",
      "Fuel Tank": "3L Fuel Tank",
      "Lamp": "Dual‑net lamp",
      "Tire": "7‑inch tire",
      "Overall Dimensions": "L1.45mW0.9mH0.9m",
      "Package Dimensions": "L1.32mW0.8mH0.72m",
      "Vehicle Weight": "75kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-35",
    "name": "Little Bull(Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-35-little-bull-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tires": "8inch Steel Wheels",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Single meter",
      "Brake": "Front drum brake, rear hydraulic disc brake",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other Configurations": "Body TrimTurn Signals",
      "Overall Dimensions": "L1.45mW0.9mH0.9m",
      "Package Dimensions": "L1.32mW0.8mH0.72m",
      "Vehicle Weight": "75kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-36",
    "name": "Little Bull(Shaft Drive)",
    "category": "ATV",
    "image": "atv_images/atv-36-little-bull-shaft-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "Chongqing Tengfei 125cc, 3‑forward 1‑reverse, automatic clutch",
      "Starting Method": "Electric Start",
      "Tires": "8inch Steel Wheels",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust": "Dual Aluminum Exhaust",
      "Instrument": "Triple meter",
      "Brake": "Front & rear drum brake",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other configurations": "Body trim, turn signal lamp",
      "Overall Dimensions": "L1.45mW0.9mH0.9m",
      "Package Dimensions": "L1.32mW0.8mH0.72m",
      "Vehicle Weight": "90kg"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-37",
    "name": "Big Bull(Chain Drive)",
    "category": "ATV",
    "image": "atv_images/atv-37-big-bull-chain-drive.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "150cc, 4‑forward 1‑reverse, manual clutch",
      "Starting Method": "Electric Start",
      "Tires": "10inch Steel Wheels",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Single meter",
      "Brake": "Front drum brake, rear disc brake",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other Configurations": "Turn Signals Body Trim",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Package Dimensions": "L1.54m W0.87m H0.83m",
      "Vehicle Weight": "160kg",
      "Optional engine": "150cc / 200cc / 250cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-38",
    "name": "Big Bull (shaft‑drive version) 150c",
    "category": "ATV",
    "image": "atv_images/atv-38-big-bull-shaft-drive-version-150c.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "150cc, 4‑forward 1‑reverse, manual clutch",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust": "Dual Aluminum Exhaust",
      "Instrument": "Triple meter",
      "Brake": "Front & rear drum brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other configurations": "Turn signal lamp, body trim",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Package Dimensions": "L1.54m W0.87m H0.83m",
      "Vehicle Weight": "185kg",
      "Optional engine": "150cc / 200cc / 250cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-39",
    "name": "Big Bull (shaft‑drive version)",
    "category": "ATV",
    "image": "atv_images/atv-39-big-bull-shaft-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200cc, 4‑forward 1‑reverse, manual clutch",
      "Starting Method": "Electric Start",
      "Tires": "14inch Aluminum Wheels",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust": "Dual Aluminum Exhaust",
      "Brake": "Front & rear drum brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Instrument": "Triple meter",
      "Other configurations": "Turn signal lamp, body trim, fuel gauge, four‑net lamp, roll‑over bar",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Packing dimensions": "Length 1.54 m, Width 0.87 m, Height 0.83 m, additional tire volume 0.3 CBM",
      "Vehicle Weight": "200kg",
      "Optional engine": "250cc / 300cc / 350cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-40",
    "name": "Big Bull (Shaft‑drive Version)",
    "category": "ATV",
    "image": "atv_images/atv-40-big-bull-shaft-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "250cc water‑cooled, 4‑forward 1‑reverse, manual clutch",
      "Starting Method": "Electric Start",
      "Tires": "14inch Aluminum Wheels",
      "Instrument": "Triple meter",
      "Exhaust": "Dual Aluminum Exhaust",
      "Instrument (2)": "Triple meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other configurations": "Turn signal lamp, body trim, fuel gauge",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Packing dimensions": "L1.54m × W0.87m × H0.83m, extra tire volume 0.3 CBM",
      "Vehicle Weight": "200kg",
      "Optional engine": "250cc / 300cc / 350cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-41",
    "name": "Big Bull CVT Automatic (Chain‑drive Version)",
    "category": "ATV",
    "image": "atv_images/atv-41-big-bull-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "150Engine 1 Forward, 1 Reverse, Neutral",
      "Starting Method": "Electric Start",
      "Tires": "10inch Aluminum Wheels",
      "Shock absorber": "Front & rear hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Triple meter",
      "Brakes": "Front and Rear Disc Brakes",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other configurations": "Turn signal lamp, body trim, fuel gauge",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Package Dimensions": "L1.54m W0.87m H0.83m",
      "Vehicle Weight": "160kg",
      "Optional engine": "150cc / 200cc"
    },
    "type": "Gas ATV"
  },
  {
    "id": "atv-42",
    "name": "Shock‑proof Big Bull CVT Automatic (Chain‑drive Version)",
    "category": "ATV",
    "image": "atv_images/atv-42-shock-proof-big-bull-cvt-automatic-chain-drive-version.jpg",
    "description": "Gasoline ATV for recreational, agricultural and utility applications, with wholesale supply and customization available.",
    "specs": {
      "Engine": "200cc engine, 1‑forward,1‑reverse with neutral gear",
      "Starting Method": "Electric Start",
      "Tires": "12inch Aluminum Wheels",
      "Shock absorber": "Front & rear heavy‑duty hydraulic shock absorbers",
      "Exhaust Pipe": "Single‑Iron Exhaust",
      "Instrument": "Triple meter",
      "Brakes": "前毂刹后碟刹",
      "Fuel Tank": "5L Fuel Tank",
      "Lamp": "Four‑net lamp",
      "Other configurations": "Turn signal lamp, body trim, fuel gauge, four‑net lamp, roll‑over bar",
      "Overall Dimensions": "L1.85m W1.1m H1.15m",
      "Packing dimensions": "L1.54m × W0.87m × H0.83m, extra tire volume 0.3 CBM",
      "Vehicle Weight": "175kg",
      "Optional engine": "150cc / 200cc"
    },
    "type": "Gas ATV"
  }
];
const CATEGORY_META={ATV:{title:'ATVs',icon:'🏍',color:'orange'},'Electric Mobility':{title:'Electric Vehicles',icon:'⚡',color:'green'},'Electric Scooter':{title:'Electric Scooters',icon:'🛵',color:'orange'},'Electric Motorcycle':{title:'Electric Motorcycles',icon:'🏍',color:'orange'},'Utility Vehicle':{title:'Electric Utility Vehicles',icon:'◉',color:'green'},'Cargo Vehicle':{title:'Electric Cargo Vehicles',icon:'▣',color:'green'},'Passenger Vehicle':{title:'Passenger Electric Vehicles',icon:'🚐',color:'green'},'Three Wheel Vehicle':{title:'Electric 3-Wheel Vehicles',icon:'♧',color:'green'},Commercial:{title:'Commercial Vehicles',icon:'◉',color:'orange'},'Kids ATV':{title:'Kids ATVs • 125cc',icon:'🏍',color:'orange'},'Utility ATV':{title:'Utility ATVs',icon:'🏍',color:'orange'},'Sport ATV':{title:'Sport / 4x4 ATVs',icon:'🏍',color:'orange'},'Gas ATV':{title:'Gas / Petrol ATVs',icon:'🏍',color:'orange'},'Electric ATV':{title:'Electric ATVs',icon:'⚡',color:'green'}};
function getImageCandidates(p){const path=p.image||'';if(!path)return[];const out=[path],add=v=>{if(v&&!out.includes(v))out.push(v)};add(path.replace('_配置_','__配置_'));add(path.replace('__配置_','_配置_'));add(path.replace('_配置xlsx_','_配置_'));add(path.replace('_配置_','_配置xlsx_'));if(/\.png$/i.test(path)){add(path.replace(/\.png$/i,'.jpeg'));add(path.replace(/\.png$/i,'.jpg'))}if(/\.jpeg$/i.test(path)){add(path.replace(/\.jpeg$/i,'.png'));add(path.replace(/\.jpeg$/i,'.jpg'))}if(/\.jpg$/i.test(path)){add(path.replace(/\.jpg$/i,'.png'));add(path.replace(/\.jpg$/i,'.jpeg'))}return out}
function loadProductImage(img,p){const c=getImageCandidates(p);let i=0;const next=()=>{if(i>=c.length){img.onerror=null;img.classList.add('image-failed');return}img.src=encodeURI(c[i++])};img.onerror=next;next()}
function isElectricATV(p){return p?.category==='ATV'&&(p.type==='Electric ATV'||p.specs?.Motor||p.name.toLowerCase().includes('electric'))}
function is125ccATV(p){if(p?.category!=='ATV'||isElectricATV(p))return false;const text=Object.entries(p.specs||{}).map(([k,v])=>`${k} ${v}`).join(' ');return /\b125\s*cc\b/i.test(text)||/125CC/i.test(p.name)}
function isSportATV(p){if(p?.category!=='ATV'||isElectricATV(p)||is125ccATV(p))return false;const text=(p.name+' '+Object.entries(p.specs||{}).map(([k,v])=>`${k} ${v}`).join(' ')).toLowerCase();return /4wd|4x4|400cc|300cc|250cc/.test(text)}
function labelFor(p){if(p.category==='ATV'){if(isElectricATV(p))return 'Electric ATV';if(is125ccATV(p))return 'Kids ATV • 125cc';if(isSportATV(p))return 'Sport / 4x4 ATV';return 'Utility ATV'}return 'Electric'}
function isElectricMobility(p){return ['Electric Scooter','Electric Motorcycle','Utility Vehicle','Cargo Vehicle','Passenger Vehicle','Three Wheel Vehicle','E-Bike'].includes(p.category)}
function matches(p,f){if(f==='all')return true;if(f==='ATV')return p.category==='ATV';if(f==='Gas ATV')return p.category==='ATV'&&!isElectricATV(p);if(f==='Electric ATV')return isElectricATV(p);if(f==='Kids ATV')return is125ccATV(p);if(f==='Sport ATV')return isSportATV(p);if(f==='Utility ATV')return p.category==='ATV'&&!isElectricATV(p)&&!is125ccATV(p)&&!isSportATV(p);if(f==='Electric Mobility')return isElectricMobility(p);if(f==='Commercial')return ['Utility Vehicle','Cargo Vehicle','Passenger Vehicle','Three Wheel Vehicle'].includes(p.category);if(f==='Other')return ['Go Kart','Other'].includes(p.category);return p.category===f}
function count(f){return products.filter(p=>matches(p,f)).length}
function setCount(id,n){const e=document.getElementById(id);if(e)e.textContent=n}
function updateCounts(){const map={'count-all':'all','count-atv':'ATV','count-kids-atv':'Kids ATV','count-utility-atv':'Utility ATV','count-sport-atv':'Sport ATV','count-electric-atv':'Electric ATV','count-gas-atv':'Gas ATV','count-electric-mobility':'Electric Mobility','count-scooter':'Electric Scooter','count-motorcycle':'Electric Motorcycle','count-utility':'Utility Vehicle','count-cargo':'Cargo Vehicle','count-passenger':'Passenger Vehicle','count-three-wheel':'Three Wheel Vehicle','count-commercial':'Commercial'};Object.entries(map).forEach(([id,f])=>setCount(id,count(f)))}
function isElectricATV(p){return p?.category==='ATV'&&(p.type==='Electric ATV'||p.specs?.Motor||p.name.toLowerCase().includes('electric'))}
function labelFor(p){return p.category==='ATV'?(isElectricATV(p)?'Electric ATV':'Gas ATV'):p.category}
function isElectricMobility(p){return ['Electric Scooter','Electric Motorcycle','Utility Vehicle','Cargo Vehicle','Passenger Vehicle','Three Wheel Vehicle','E-Bike'].includes(p.category)}
function matches(p,f){if(f==='all')return true;if(f==='ATV')return p.category==='ATV';if(f==='Gas ATV')return p.category==='ATV'&&!isElectricATV(p);if(f==='Electric ATV')return isElectricATV(p);if(f==='Electric Mobility'||f==='E-Bike')return f==='E-Bike'?p.category==='E-Bike':isElectricMobility(p);if(f==='Commercial')return ['Utility Vehicle','Cargo Vehicle','Passenger Vehicle','Three Wheel Vehicle'].includes(p.category);if(f==='Other')return ['Go Kart','Other'].includes(p.category);return p.category===f}
function count(f){return products.filter(p=>matches(p,f)).length}function setCount(id,n){const e=document.getElementById(id);if(e)e.textContent=n}
function updateCounts(){setCount('count-all',products.length);setCount('count-atv',count('ATV'));setCount('count-ebike',count('E-Bike'));setCount('count-scooter',count('Electric Scooter'));setCount('count-motorcycle',count('Electric Motorcycle'));setCount('count-commercial',count('Commercial'));setCount('count-gokart',count('Go Kart'));setCount('count-other',count('Other'));['Utility ATV','Sport ATV','Kids ATV','Side by Side','City E-Bike','Mountain E-Bike','Fat Tire E-Bike','Folding E-Bike'].forEach(x=>setCount('count-'+x.toLowerCase().replaceAll(' ','-'),count(x)))}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function productCard(p){
  const label=labelFor(p);
  const specs=Object.entries(p.specs||{}).filter(([,v])=>v).slice(0,2).map(([k,v])=>esc(k)+': '+esc(v)).join(' • ');
  return `<article class="product-card"><div class="product-image-wrapper"><span class="product-badge">${esc(label)}</span><img class="catalog-product-image" alt="${esc(p.name)}" loading="lazy"></div><div class="product-content"><h3>${esc(p.name)}</h3><div class="product-meta">${esc(specs||p.description||'Wholesale vehicle')}</div><div class="product-bottom"><span class="product-price">Request quote</span><button class="details-btn" data-product-id="${esc(p.id)}">View Details</button><button class="mini-wa" data-wa-product="${esc(p.name)}">WhatsApp</button></div></div></article>`;
}
function sectionBlock(title,icon,items,color='orange',max=null,moreFilter=null){
  const shown=max?items.slice(0,max):items;
  const grid=shown.map(productCard).join('');
  const more=max&&items.length>max?`<div class="catalog-more"><button class="view-all-btn" data-filter-action="${esc(moreFilter)}">View All ${esc(title)} →</button></div>`:'';
  return `<section class="catalog-section"><div class="section-title-row ${color==='green'?'green':''}"><h2 class="section-title"><span class="section-icon">${icon}</span>${esc(title)}</h2><span class="count-pill">${items.length} Products</span></div><div class="product-grid">${grid||'<div class="empty-products">No products available in this category yet.</div>'}</div>${more}</section>`;
}
function renderCatalog(filter='all'){const root=document.getElementById('catalogView');if(!root)return;let visible=[];if(filter==='all'){const atvs=products.filter(p=>p.category==='ATV'),electric=products.filter(isElectricMobility);visible=[...atvs.slice(0,6),...electric.slice(0,6)];root.innerHTML=sectionBlock('ATVs','🏍',atvs,'orange',6,'ATV')+sectionBlock('Electric Mobility','🚲',electric,'green',6,'Electric Mobility')}else{visible=products.filter(p=>matches(p,filter));const meta=CATEGORY_META[filter]||{title:filter,icon:'•',color:'orange'};root.innerHTML=sectionBlock(meta.title,meta.icon,visible,meta.color)}root.querySelectorAll('.catalog-product-image').forEach((img,i)=>{if(visible[i])loadProductImage(img,visible[i])})}
function activateFilter(filter){document.querySelectorAll('.side-item').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));const s=document.getElementById('mobileFilter');if(s)s.value=['ATV','E-Bike','Electric Scooter','Electric Motorcycle','Commercial'].includes(filter)?filter:'all';renderCatalog(filter)}function filterProducts(filter){activateFilter(filter);document.getElementById('products')?.scrollIntoView({behavior:'smooth',block:'start'})}
function askQuote(name){const text='Hello Slow Rider,\n\nI am interested in: '+name+'\n\nPlease send me more information and a quotation.\n\nMy country:\nEstimated quantity:\nAdditional requirements:';window.open('https://wa.me/8618620284214?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')}
function openProduct(id){
  const p=products.find(x=>x.id===id),m=document.getElementById('productModal');
  if(!p||!m)return;
  const label=labelFor(p);
  const specs=Object.entries(p.specs||{}).filter(([,v])=>v).map(([k,v])=>`<div class="spec-row"><strong>${esc(k)}</strong><span>${esc(v).replace(/\n/g,'<br>')}</span></div>`).join('');
  m.innerHTML=`<div class="modal-box" role="dialog" aria-modal="true"><button class="close-modal" data-close-modal aria-label="Close">×</button><div class="modal-layout"><div class="modal-image-wrapper"><span class="modal-label">${esc(label)}</span><img id="modalProductImage" alt="${esc(p.name)}"></div><div class="modal-info"><span class="product-category">${esc(label)}</span><h2>${esc(p.name)}</h2><p class="modal-description">${esc(p.description||'Wholesale vehicle available for international dealers and distributors.')}</p><h3>Specifications</h3><div class="spec-list">${specs}</div><button class="whatsapp-btn" data-wa-product="${esc(p.name)}">◉ &nbsp; Send Inquiry via WhatsApp</button><button class="modal-close-bottom" data-close-modal>Close</button></div></div></div>`;
  loadProductImage(document.getElementById('modalProductImage'),p);m.classList.add('is-open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
}
function closeProduct(){const m=document.getElementById('productModal');if(!m)return;m.classList.remove('is-open');m.setAttribute('aria-hidden','true');m.innerHTML='';document.body.classList.remove('modal-open')}
document.addEventListener('click',e=>{
  const details=e.target.closest('[data-product-id]');
  if(details){openProduct(details.dataset.productId);return;}
  const wa=e.target.closest('[data-wa-product]');
  if(wa){askQuote(wa.dataset.waProduct);return;}
  const action=e.target.closest('[data-filter-action]');
  if(action){filterProducts(action.dataset.filterAction);return;}
  const close=e.target.closest('[data-close-modal]');
  if(close){closeProduct();return;}
  const m=document.getElementById('productModal');
  if(m&&e.target===m)closeProduct();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct()});document.addEventListener('DOMContentLoaded',()=>{updateCounts();renderCatalog('all');document.querySelectorAll('.side-item,.sub-items button').forEach(b=>b.addEventListener('click',()=>filterProducts(b.dataset.filter)));const s=document.getElementById('mobileFilter');if(s)s.addEventListener('change',()=>filterProducts(s.value));const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('mainNav');if(menu&&nav)menu.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'})});
