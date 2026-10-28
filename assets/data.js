// ORBITAL EDITORIAL - EARTH & MOON COMPARATIVE TELEMETRY
// Complete Science Datasets, Telemetry, and Astrophysics Reference
// Extracted from https://prototypemoonandearth.ai.studio/

const ANALOG_PAIRS = [
  {
    "id": "pair-observatories-peaks",
    "title": "High-Altitude Observation Summits",
    "category": "extreme-terrains",
    "categoryLabel": "Extreme Terrains",
    "thematicParallels": "Elevated vantage points transcending boundary atmospheric interference.",
    "earth": {
      "id": "earth-mauna-kea",
      "name": "Mauna Kea Observatory",
      "designation": "MKO-HAW-4207",
      "latitude": 19.8206,
      "longitude": -155.4681,
      "coordinatesFormatted": "19.82° N, 155.47° W",
      "region": "Big Island, Hawaii, USA",
      "summary": "Dormant volcanic shield rising above 40% of Earth’s atmosphere. Houses the world’s premier optical, infrared, and submillimeter astronomical array.",
      "scientificSignificance": "Near-zero cloud cover, dry inversion layer, and laminar airflow provide optimal terrestrial seeing of 0.4 arcseconds.",
      "imageUrl": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "Mauna Kea observatory domes against star-filled sky",
      "terrainType": "Volcanic Shield Summit",
      "metrics": {
        "elevationMeters": 4207,
        "tempMinCelsius": -4.5,
        "tempMaxCelsius": 12.8,
        "gravityMps2": 9.8,
        "atmosphereKpa": 60.5,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 3.8,
        "commDelaySeconds": 0.001,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-mons-huygens",
      "name": "Mons Huygens Massif",
      "designation": "M-HUY-APN-5500",
      "latitude": 19.92,
      "longitude": -2.86,
      "coordinatesFormatted": "19.92° N, 2.86° W",
      "region": "Montes Apenninus, Mare Imbrium Rim",
      "summary": "The tallest lunar mountain peak, towering 5.5 km above the dark basalt plains of Mare Imbrium. Formed 3.85 billion years ago during the Imbrium impact event.",
      "scientificSignificance": "Exposes pristine pre-Imbrian anorthositic crustal bedrock without any weathering or erosion, preserving deep lunar mantle uplift.",
      "imageUrl": "/assets/aistudio/lunarorb_copernicus_000b6074.jpg",
      "imageAlt": "High-contrast lunar mountain ridges and shadowed craters",
      "terrainType": "Impact Rim Anorthositic Massif",
      "metrics": {
        "elevationMeters": 5500,
        "tempMinCelsius": -173,
        "tempMaxCelsius": 118,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 380,
        "commDelaySeconds": 1.28,
        "escapeVelocityKms": 2.38
      }
    }
  },
  {
    "id": "pair-deepest-depressions",
    "title": "Planetary Depressions & Impact Scars",
    "category": "deep-basins",
    "categoryLabel": "Deep Basins",
    "thematicParallels": "Extreme negative relief plunging deep into planetary crustal boundaries.",
    "earth": {
      "id": "earth-mariana-trench",
      "name": "Challenger Deep (Mariana Trench)",
      "designation": "MAR-TCH-10994",
      "latitude": 11.332,
      "longitude": 142.202,
      "coordinatesFormatted": "11.33° N, 142.20° E",
      "region": "Western Pacific Ocean Trench",
      "summary": "The deepest known point on Earth, a subduction trench plunging 10,994 meters below sea level with over 1,000 atmospheres of hydrostatic pressure.",
      "scientificSignificance": "Active serpentinization and chemosynthetic piezophilic microbial ecosystems surviving in absolute abyssal darkness.",
      "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "Abyssal deep ocean blue chasm",
      "terrainType": "Tectonic Oceanic Subduction Trench",
      "metrics": {
        "elevationMeters": -10994,
        "tempMinCelsius": 1.1,
        "tempMaxCelsius": 4,
        "gravityMps2": 9.82,
        "atmosphereKpa": 109900,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 0.1,
        "commDelaySeconds": 0.004,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-spa-basin",
      "name": "South Pole–Aitken Basin Floor",
      "designation": "SPA-BSN-9100",
      "latitude": -53.2,
      "longitude": 169.1,
      "coordinatesFormatted": "53.20° S, 169.10° E",
      "region": "Lunar Far Side, Deep Basin Interior",
      "summary": "One of the largest preserved impact structures in the Solar System (2,500 km across), excavating 9.1 km below the lunar datum into the lower mantle.",
      "scientificSignificance": "A gravity anomaly and iron-titanium rich basalt floor containing exposed pyroxene-rich lower crust/upper mantle material.",
      "imageUrl": "/assets/aistudio/Komarov_084d36f7.png",
      "imageAlt": "Densely cratered lunar far side terrain in high contrast",
      "terrainType": "Pre-Nectarian Giant Impact Basin",
      "metrics": {
        "elevationMeters": -9100,
        "tempMinCelsius": -190,
        "tempMaxCelsius": 110,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 395,
        "commDelaySeconds": 1.34,
        "escapeVelocityKms": 2.38
      }
    }
  },
  {
    "id": "pair-polar-cryo-traps",
    "title": "Polar Cryo-Traps & Research Outposts",
    "category": "research-bases",
    "categoryLabel": "Research Bases",
    "thematicParallels": "Permanent cold traps harboring ancient ice reservoirs essential for survival.",
    "earth": {
      "id": "earth-mcmurdo-station",
      "name": "McMurdo Station & Dry Valleys",
      "designation": "MCM-ANT-0024",
      "latitude": -77.846,
      "longitude": 166.668,
      "coordinatesFormatted": "77.85° S, 166.67° E",
      "region": "Ross Island, Antarctica",
      "summary": "The largest human community in Antarctica, situated beside the hyper-arid McMurdo Dry Valleys where rain has not fallen in 2 million years.",
      "scientificSignificance": "Terrestrial testbed for deep-ice drilling, astrobiology analog for Mars and Moon, and cosmic ray monitoring facility.",
      "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "Antarctic frozen ice shelf and rugged coastal volcanic mountains",
      "terrainType": "Polar Volcanic Peninsula & Dry Valleys",
      "metrics": {
        "elevationMeters": 24,
        "tempMinCelsius": -50.6,
        "tempMaxCelsius": 4.2,
        "gravityMps2": 9.83,
        "atmosphereKpa": 100.2,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 2.1,
        "commDelaySeconds": 0.002,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-shackleton-crater",
      "name": "Shackleton Crater Cold Trap",
      "designation": "SHK-POL-4200",
      "latitude": -89.9,
      "longitude": 0,
      "coordinatesFormatted": "89.90° S, 0.00° E",
      "region": "Lunar South Pole, Connecting Ridge",
      "summary": "A 21-km diameter impact crater whose floor lies in eternal darkness at 40 Kelvin (-233°C), while its rims receive up to 92% continuous annual sunlight.",
      "scientificSignificance": "Confirmed volatile hydrogen and water-ice deposits trapped in regolith for over 2 billion years, the primary target for Artemis resource extraction.",
      "imageUrl": "/assets/aistudio/MalapertMassif-1_63d94d37.png",
      "imageAlt": "South pole lunar crater rim illuminated by glancing sunlight",
      "terrainType": "Permanently Shadowed Cryogenic Crater",
      "metrics": {
        "elevationMeters": -4200,
        "tempMinCelsius": -246,
        "tempMaxCelsius": -150,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 420,
        "commDelaySeconds": 1.28,
        "escapeVelocityKms": 2.38
      }
    }
  },
  {
    "id": "pair-hyper-arid-plains",
    "title": "Vast Basalt Plains & Hyper-Arid Expanses",
    "category": "extreme-terrains",
    "categoryLabel": "Extreme Terrains",
    "thematicParallels": "Immense barren plains with zero precipitable moisture and intense cosmic radiation.",
    "earth": {
      "id": "earth-atacama-alma",
      "name": "Atacama Desert (ALMA Chajnantor)",
      "designation": "ATC-CHJ-5050",
      "latitude": -23.023,
      "longitude": -67.754,
      "coordinatesFormatted": "23.02° S, 67.75° W",
      "region": "Chajnantor Plateau, Antofagasta, Chile",
      "summary": "Driest non-polar region on Earth. The 66 radio antennas of ALMA operate at 5,050 meters altitude where atmospheric water vapor drops below 0.1 mm.",
      "scientificSignificance": "Earth analog for high-radiation, zero-humidity extraterrestrial plains, resolving protoplanetary disks and the cosmic microwave background.",
      "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "High altitude desert plateau under deep blue sky",
      "terrainType": "High-Altitude Volcanic Salt Puna",
      "metrics": {
        "elevationMeters": 5050,
        "tempMinCelsius": -25,
        "tempMaxCelsius": 21,
        "gravityMps2": 9.79,
        "atmosphereKpa": 54.2,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 5.6,
        "commDelaySeconds": 0.001,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-oceanus-procellarum",
      "name": "Oceanus Procellarum (Ocean of Storms)",
      "designation": "OCN-PRC-2500",
      "latitude": 18.4,
      "longitude": -57.4,
      "coordinatesFormatted": "18.40° N, 57.40° W",
      "region": "Western Lunar Near Side",
      "summary": "The largest lunar mare, spanning over 2,500 km north-to-south. A vast flooded basalt plain enriched in incompatible heat-producing elements (KREEP).",
      "scientificSignificance": "Youngest lunar mare basalts (1.2–2.0 Ga) collected by China’s Chang’e 5 mission, rewriting the thermal evolution history of the Moon.",
      "imageUrl": "/assets/aistudio/plato_152a6d98.jpg",
      "imageAlt": "Vast dark lunar plain viewed from orbit",
      "terrainType": "Flood Basalt Volcanic Plain (Mare)",
      "metrics": {
        "elevationMeters": -1200,
        "tempMinCelsius": -130,
        "tempMaxCelsius": 120,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 380,
        "commDelaySeconds": 1.27,
        "escapeVelocityKms": 2.38
      }
    }
  },
  {
    "id": "pair-volcanic-lava-tubes",
    "title": "Subterranean Lava Tubes & Natural Habitation Caverns",
    "category": "volcanic-subterranean",
    "categoryLabel": "Volcanic & Subterranean",
    "thematicParallels": "Natural basalt conduits offering structural shelter against radiation and meteorites.",
    "earth": {
      "id": "earth-lanzarote-tubes",
      "name": "Cueva de los Verdes Lava Tube System",
      "designation": "LAN-CRV-0080",
      "latitude": 29.158,
      "longitude": -13.504,
      "coordinatesFormatted": "29.16° N, 13.50° W",
      "region": "Corona Volcano, Lanzarote, Canary Islands",
      "summary": "A 6-kilometer volcanic conduit formed 20,000 years ago during the eruption of Monte Corona, with multi-level subterranean galleries.",
      "scientificSignificance": "ESA PANGAEA astronaut geological training site for subsurface exploration, studying speleothems and microbial mineral biosignatures.",
      "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "Architectural illuminated subterranean basalt lava cave",
      "terrainType": "Basaltic Volcanic Pyroduct Tube",
      "metrics": {
        "elevationMeters": 80,
        "tempMinCelsius": 18,
        "tempMaxCelsius": 20,
        "gravityMps2": 9.8,
        "atmosphereKpa": 101.1,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 0.4,
        "commDelaySeconds": 0.001,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-marius-hills-skylight",
      "name": "Marius Hills Hole & Subsurface Tube",
      "designation": "MHH-SKL-0065",
      "latitude": 14.08,
      "longitude": -56.77,
      "coordinatesFormatted": "14.08° N, 56.77° W",
      "region": "Marius Hills Volcanic Complex",
      "summary": "A 65-meter diameter vertical collapse pit opening into a massive intact subterranean lava tube over 500 meters wide, capable of housing a permanent city.",
      "scientificSignificance": "Provides 100% natural radiation shielding, constant thermal stability (-20°C year-round), and micrometeorite protection for future human settlements.",
      "imageUrl": "/assets/aistudio/PIA13998_eb44fff0.jpeg",
      "imageAlt": "Circular lunar pit opening into subterranean void",
      "terrainType": "Shielded Subsurface Volcanic Conduit",
      "metrics": {
        "elevationMeters": -1600,
        "tempMinCelsius": -20,
        "tempMaxCelsius": -20,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 1.8,
        "commDelaySeconds": 1.28,
        "escapeVelocityKms": 2.38
      }
    }
  },
  {
    "id": "pair-historic-touchdowns",
    "title": "Historic Departure & Landing Grounds",
    "category": "historic-sites",
    "categoryLabel": "Historic Sites",
    "thematicParallels": "The cradle of interplanetary journey: Earth departure and humanity’s first extraterrestrial contact.",
    "earth": {
      "id": "earth-kennedy-lc39a",
      "name": "Kennedy Space Center (Launch Complex 39A)",
      "designation": "KSC-PAD-39A",
      "latitude": 28.6083,
      "longitude": -80.6043,
      "coordinatesFormatted": "28.61° N, 80.60° W",
      "region": "Merritt Island, Florida, USA",
      "summary": "The historic launch site that propelled Apollo 11, Skylab, 82 Space Shuttle missions, and SpaceX Crew Dragon flights toward low Earth orbit and the Moon.",
      "scientificSignificance": "World epicenter of cryogenic propellant rocketry, acoustic dampening engineering, and human spaceflight operations.",
      "imageUrl": "https://images.unsplash.com/photo-1517976487502-5f69d3000dfb?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "Space launch vehicle gantry tower at ocean coastline at dusk",
      "terrainType": "Coastal Estuary Rocket Launchpad",
      "metrics": {
        "elevationMeters": 3,
        "tempMinCelsius": 10.2,
        "tempMaxCelsius": 33.4,
        "gravityMps2": 9.79,
        "atmosphereKpa": 101.4,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 2.2,
        "commDelaySeconds": 0.001,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-tranquility-base",
      "name": "Tranquility Base (Statio Tranquillitatis)",
      "designation": "AP11-STR-0001",
      "latitude": 0.674,
      "longitude": 23.473,
      "coordinatesFormatted": "0.67° N, 23.47° E",
      "region": "Southern Mare Tranquillitatis",
      "summary": "The location where humans first set foot on another world on July 20, 1969. The Lunar Module Eagle descent stage and Laser Ranging Retroreflector remain intact.",
      "scientificSignificance": "Site of the oldest continuous active physics experiment: lunar laser ranging measuring the Moon’s 3.8 cm/year orbital recession rate.",
      "imageUrl": "/assets/aistudio/art002e009287_large_68a78c5e.jpg",
      "imageAlt": "Apollo lunar surface astronaut footprints in gray regolith",
      "terrainType": "Titanium-Rich Titanium Mare Regolith",
      "metrics": {
        "elevationMeters": -1400,
        "tempMinCelsius": -130,
        "tempMaxCelsius": 100,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 370,
        "commDelaySeconds": 1.26,
        "escapeVelocityKms": 2.38
      }
    }
  },
  {
    "id": "pair-future-sanctuaries",
    "title": "Future Sanctuaries & Planetary Seed Vaults",
    "category": "research-bases",
    "categoryLabel": "Research Bases",
    "thematicParallels": "Fortified geologically stable preserves guarding civilizational survival.",
    "earth": {
      "id": "earth-svalbard-vault",
      "name": "Svalbard Global Seed Vault",
      "designation": "SVL-PLT-0130",
      "latitude": 78.236,
      "longitude": 15.491,
      "coordinatesFormatted": "78.24° N, 15.49° E",
      "region": "Platåberget, Longyearbyen, Spitsbergen",
      "summary": "Buried 130 meters inside permafrost sandstone on a remote Arctic archipelago, preserving over 1.2 million crop samples against global catastrophe.",
      "scientificSignificance": "Ultimate insurance policy against botanical extinction, protected by passive geologic permafrost cooling at -18°C.",
      "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "imageAlt": "Architectural seed vault portal protruding from frozen Arctic mountainside",
      "terrainType": "Arctic Sandstone Permafrost Cavern",
      "metrics": {
        "elevationMeters": 130,
        "tempMinCelsius": -28,
        "tempMaxCelsius": 7,
        "gravityMps2": 9.83,
        "atmosphereKpa": 100.5,
        "dayNightCycleHours": 24,
        "radiationMsvYear": 1.6,
        "commDelaySeconds": 0.003,
        "escapeVelocityKms": 11.19
      }
    },
    "moon": {
      "id": "moon-malapert-mountain",
      "name": "Malapert Mountain (Artemis Base Camp Candidate)",
      "designation": "ART-MLP-5000",
      "latitude": -85.99,
      "longitude": 2.93,
      "coordinatesFormatted": "85.99° S, 2.93° E",
      "region": "South Pole Highlands, Malapert Rim",
      "summary": "A 5.0 km elevation plateau adjacent to the south pole. Offers direct unobstructed line-of-sight communication to Earth and 93% continuous solar illumination.",
      "scientificSignificance": "Prime candidate site for the first permanent Artemis Base Camp habitat, providing continuous solar kilowatt power and polar ice access.",
      "imageUrl": "/assets/aistudio/22_Tycho_Crater_terrestrial_14f590b0.png",
      "imageAlt": "Rugged illuminated highland plateau in deep cosmic space",
      "terrainType": "Polar Highlands Anorthositic Plateau",
      "metrics": {
        "elevationMeters": 5000,
        "tempMinCelsius": -100,
        "tempMaxCelsius": -20,
        "gravityMps2": 1.62,
        "atmosphereKpa": 1e-12,
        "dayNightCycleHours": 708,
        "radiationMsvYear": 410,
        "commDelaySeconds": 1.28,
        "escapeVelocityKms": 2.38
      }
    }
  }
];
const CELESTIAL_SPHERES = {
  "earth": {
    "tag": "TERRESTRIAL SPHERE",
    "title": "Planet Earth",
    "desc": "A dynamic blue marble enveloped by a protective nitrogen-oxygen atmosphere, swirling cloud systems, and nocturnal city lights.",
    "image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=90",
    "metrics": [
      {
        "label": "EQUATORIAL RADIUS",
        "value": "6,378.1 KM"
      },
      {
        "label": "MEAN RADIUS",
        "value": "6,371.0 KM"
      },
      {
        "label": "AXIAL TILT",
        "value": "23.44°"
      },
      {
        "label": "DAY LENGTH",
        "value": "23H 56M 04S"
      },
      {
        "label": "MASS",
        "value": "5.972 × 10²⁴ KG"
      },
      {
        "label": "SURFACE GRAVITY",
        "value": "9.807 M/S² (1.00 G)"
      },
      {
        "label": "ESCAPE VELOCITY",
        "value": "11.186 KM/S"
      },
      {
        "label": "SURFACE PRESSURE",
        "value": "101.3 KPA (1 ATM)"
      },
      {
        "label": "ATMOSPHERE",
        "value": "78% N₂, 21% O₂, 1% Ar"
      },
      {
        "label": "MAGNETIC FIELD",
        "value": "30–60 µT (Geodynamo)"
      },
      {
        "label": "ANNUAL RADIATION",
        "value": "2.4 mSv/year"
      }
    ]
  },
  "moon": {
    "tag": "LUNAR SATELLITE",
    "title": "The Moon",
    "desc": "A crater-scarred natural satellite in synchronous tidal lock with Earth, presenting timeless basalt maria and rugged anorthositic highlands.",
    "image": "assets/images/lunarorb_copernicus_000b6074.jpg",
    "metrics": [
      {
        "label": "DISTANCE FROM EARTH",
        "value": "384,400 KM"
      },
      {
        "label": "MEAN RADIUS",
        "value": "1,737.4 KM (27.2% Earth)"
      },
      {
        "label": "AXIAL TILT",
        "value": "1.54°"
      },
      {
        "label": "SYNODIC DAY LENGTH",
        "value": "29.53 DAYS (708.7 H)"
      },
      {
        "label": "MASS",
        "value": "7.342 × 10²² KG (1.2% Earth)"
      },
      {
        "label": "SURFACE GRAVITY",
        "value": "1.622 M/S² (0.165 G)"
      },
      {
        "label": "ESCAPE VELOCITY",
        "value": "2.380 KM/S (21.3% Delta-v)"
      },
      {
        "label": "SURFACE PRESSURE",
        "value": "< 10⁻¹⁰ PA (Vacuum)"
      },
      {
        "label": "ATMOSPHERE",
        "value": "Surface Boundary Exosphere"
      },
      {
        "label": "MAGNETIC FIELD",
        "value": "Localized Crustal Swirls"
      },
      {
        "label": "ANNUAL RADIATION",
        "value": "380–420 mSv/year (160×)"
      }
    ]
  }
};
const APOLLO_MISSIONS = [
  {
    "id": "apollo-11",
    "name": "Apollo 11 — Tranquility Base",
    "mission": "Apollo 11",
    "category": "apollo",
    "categoryLabel": "Apollo Crewed Landing",
    "date": "July 20, 1969",
    "selenographic": {
      "latitudeDeg": 0.67408,
      "longitudeDeg": 23.47297
    },
    "coordinatesFormatted": "0.674° N, 23.473° E",
    "region": "Mare Tranquillitatis (Sea of Tranquility)",
    "astronauts": [
      "Neil A. Armstrong",
      "Edwin E. \"Buzz\" Aldrin Jr.",
      "Michael Collins (CMP)"
    ],
    "landedAstronauts": [
      "Neil A. Armstrong (CDR)",
      "Edwin E. \"Buzz\" Aldrin Jr. (LMP)"
    ],
    "lunarModule": "LM-5 Eagle",
    "commandModule": "CSM Columbia",
    "evaCount": 1,
    "evaDuration": "2h 31m 40s",
    "totalSurfaceStay": "21h 36m 20s",
    "samplesReturnedKg": 21.55,
    "referenceImage": "assets/images/art002e009287_large_68a78c5e.jpg",
    "referenceCredit": "NASA / Apollo 11 Mission Archive",
    "featureDescription": "Descent Stage, EASEP passive seismometer, laser retroreflector (LRRR), flag, solar wind composition foil, and memorial plaque.",
    "description": "First crewed touchdown on the Moon. Armstrong and Aldrin explored the lunar regolith, deployed science experiments, and returned pristine ancient basalt samples.",
    "quote": "\"That's one small step for [a] man, one giant leap for mankind.\"",
    "idealSunAngleDeg": 75,
    "pinColor": 16096779
  },
  {
    "id": "apollo-12",
    "name": "Apollo 12 — Ocean of Storms",
    "mission": "Apollo 12",
    "category": "apollo",
    "categoryLabel": "Apollo Crewed Landing",
    "date": "November 19, 1969",
    "selenographic": {
      "latitudeDeg": -3.01239,
      "longitudeDeg": -23.42157
    },
    "coordinatesFormatted": "3.012° S, 23.422° W",
    "region": "Oceanus Procellarum",
    "astronauts": [
      "Charles \"Pete\" Conrad Jr.",
      "Alan L. Bean",
      "Richard F. Gordon Jr. (CMP)"
    ],
    "landedAstronauts": [
      "Charles \"Pete\" Conrad Jr. (CDR)",
      "Alan L. Bean (LMP)"
    ],
    "lunarModule": "LM-6 Intrepid",
    "commandModule": "CSM Yankee Clipper",
    "evaCount": 2,
    "evaDuration": "7h 45m 18s",
    "totalSurfaceStay": "31h 31m 12s",
    "samplesReturnedKg": 34.35,
    "referenceImage": "assets/images/lunarorb_copernicus_000b6074.jpg",
    "referenceCredit": "NASA / Apollo 12 Archive",
    "featureDescription": "Pinpoint precision touchdown 163 m from robotic Surveyor 3 probe. Deployed first RTG-powered ALSEP science station.",
    "description": "Conrad and Bean executed precision lunar navigation, inspected the Surveyor 3 lander (on the Moon since 1967), and brought back its TV camera for Earth analysis.",
    "quote": "\"Whoopee! Man, that may have been a small one for Neil, but that's a long one for me.\"",
    "idealSunAngleDeg": 68,
    "pinColor": 16096779
  },
  {
    "id": "apollo-14",
    "name": "Apollo 14 — Fra Mauro Formation",
    "mission": "Apollo 14",
    "category": "apollo",
    "categoryLabel": "Apollo Crewed Landing",
    "date": "February 5, 1971",
    "selenographic": {
      "latitudeDeg": -3.6453,
      "longitudeDeg": -17.47136
    },
    "coordinatesFormatted": "3.645° S, 17.471° W",
    "region": "Fra Mauro Highlands",
    "astronauts": [
      "Alan B. Shepard Jr.",
      "Edgar D. Mitchell",
      "Stuart A. Roosa (CMP)"
    ],
    "landedAstronauts": [
      "Alan B. Shepard Jr. (CDR)",
      "Edgar D. Mitchell (LMP)"
    ],
    "lunarModule": "LM-8 Antares",
    "commandModule": "CSM Kitty Hawk",
    "evaCount": 2,
    "evaDuration": "9h 22m 31s",
    "totalSurfaceStay": "33h 30m 29s",
    "samplesReturnedKg": 42.28,
    "referenceImage": "assets/images/plato_152a6d98.jpg",
    "referenceCredit": "NASA / Apollo 14 Archive",
    "featureDescription": "Hummocky ejecta blanket from the Imbrium impact basin. Cone Crater rim excursion using the two-wheeled MET transporter cart.",
    "description": "Sampled ancient Imbrium impact ejecta. Shepard famously drove two golf balls with a modified 6-iron club in 1/6th gravity, watching them fly \"miles and miles\".",
    "quote": "\"Miles and miles and miles.\"",
    "idealSunAngleDeg": 65,
    "pinColor": 16096779
  },
  {
    "id": "apollo-15",
    "name": "Apollo 15 — Hadley-Apennine",
    "mission": "Apollo 15",
    "category": "apollo",
    "categoryLabel": "Apollo Crewed Landing",
    "date": "July 30, 1971",
    "selenographic": {
      "latitudeDeg": 26.13222,
      "longitudeDeg": 3.63386
    },
    "coordinatesFormatted": "26.132° N, 3.634° E",
    "region": "Hadley Rille / Montes Apenninus",
    "astronauts": [
      "David R. Scott",
      "James B. Irwin",
      "Alfred M. Worden (CMP)"
    ],
    "landedAstronauts": [
      "David R. Scott (CDR)",
      "James B. Irwin (LMP)"
    ],
    "lunarModule": "LM-10 Falcon",
    "commandModule": "CSM Endeavour",
    "evaCount": 3,
    "evaDuration": "18h 34m 46s",
    "totalSurfaceStay": "66h 54m 53s",
    "samplesReturnedKg": 77.31,
    "referenceImage": "assets/images/art002e009287_large_68a78c5e.jpg",
    "referenceCredit": "NASA / Apollo 15 Archive",
    "featureDescription": "Hadley Rille sinuous volcanic gorge and towering 4.5 km Apennine mountains. First Lunar Roving Vehicle (LRV-1), driving 27.9 km.",
    "description": "First J-series long-duration mission. Scott and Irwin discovered the 4.15-billion-year-old Genesis Rock (sample 15415) and dropped a falcon feather and geology hammer simultaneously in vacuum.",
    "quote": "\"Man must explore. And this is exploration at its greatest.\"",
    "idealSunAngleDeg": 82,
    "pinColor": 16096779
  },
  {
    "id": "apollo-16",
    "name": "Apollo 16 — Descartes Highlands",
    "mission": "Apollo 16",
    "category": "apollo",
    "categoryLabel": "Apollo Crewed Landing",
    "date": "April 21, 1972",
    "selenographic": {
      "latitudeDeg": -8.97301,
      "longitudeDeg": 15.50019
    },
    "coordinatesFormatted": "8.973° S, 15.500° E",
    "region": "Descartes Highlands / Cayley Plains",
    "astronauts": [
      "John W. Young",
      "Charles M. Duke Jr.",
      "Thomas K. Mattingly II (CMP)"
    ],
    "landedAstronauts": [
      "John W. Young (CDR)",
      "Charles M. Duke Jr. (LMP)"
    ],
    "lunarModule": "LM-11 Orion",
    "commandModule": "CSM Casper",
    "evaCount": 3,
    "evaDuration": "20h 14m 14s",
    "totalSurfaceStay": "71h 02m 13s",
    "samplesReturnedKg": 95.71,
    "referenceImage": "assets/images/22_Tycho_Crater_terrestrial_14f590b0.png",
    "referenceCredit": "NASA / Apollo 16 Archive",
    "featureDescription": "First landing in lunar highlands. Climbed Stone Mountain slopes with LRV-2, retrieved 11.7 kg \"Big Muley\" breccia.",
    "description": "Proved the Descartes highlands were formed by catastrophic meteorite impact brecciation rather than recent volcanic eruptions as theorized.",
    "quote": "\"There you are, mysterious and unknown Descartes highland plains.\"",
    "idealSunAngleDeg": 78,
    "pinColor": 16096779
  },
  {
    "id": "apollo-17",
    "name": "Apollo 17 — Taurus-Littrow",
    "mission": "Apollo 17",
    "category": "apollo",
    "categoryLabel": "Apollo Crewed Landing",
    "date": "December 11, 1972",
    "selenographic": {
      "latitudeDeg": 20.1908,
      "longitudeDeg": 30.77168
    },
    "coordinatesFormatted": "20.191° N, 30.772° E",
    "region": "Taurus-Littrow Valley / Mare Serenitatis Rim",
    "astronauts": [
      "Eugene A. Cernan",
      "Harrison H. \"Jack\" Schmitt",
      "Ronald E. Evans (CMP)"
    ],
    "landedAstronauts": [
      "Eugene A. Cernan (CDR)",
      "Harrison H. \"Jack\" Schmitt (LMP / Geologist)"
    ],
    "lunarModule": "LM-12 Challenger",
    "commandModule": "CSM America",
    "evaCount": 3,
    "evaDuration": "22h 03m 57s",
    "totalSurfaceStay": "75h 00m 00s",
    "samplesReturnedKg": 110.52,
    "referenceImage": "assets/images/MalapertMassif-1_63d94d37.png",
    "referenceCredit": "NASA / Apollo 17 Archive",
    "featureDescription": "Rift valley bounded by 2.5 km massifs. Discovered pyroclastic orange volcanic glass beads at Shorty Crater. LRV-3 drove 35.7 km.",
    "description": "Final Apollo landing. Dr. Harrison Schmitt became the first professional planetary geologist on the Moon. Cernan and Schmitt returned the heaviest sample cache in history.",
    "quote": "\"We leave as we came, and, God willing, as we shall return, with peace and hope for all mankind.\"",
    "idealSunAngleDeg": 74,
    "pinColor": 16096779
  }
];
const CRATERS_MASSIFS = [
  {
    "id": "copernicus",
    "name": "Copernicus Crater",
    "category": "crater",
    "categoryLabel": "Impact Crater",
    "selenographic": {
      "latitudeDeg": 9.62,
      "longitudeDeg": -20.08
    },
    "coordinatesFormatted": "9.62° N, 20.08° W",
    "region": "Oceanus Procellarum / Mare Insularum",
    "description": "Prominent 93 km impact crater with multi-peaked central mountains rising 1.2 km above floor.",
    "referenceImage": "assets/images/lunarorb_copernicus_000b6074.jpg",
    "referenceCredit": "NASA / Lunar Orbiter II",
    "featureDescription": "Central massifs, terraced inner ramparts, and extensive bright ejecta ray system.",
    "idealSunAngleDeg": 72,
    "pinColor": 3718648
  },
  {
    "id": "tycho",
    "name": "Tycho Central Peak",
    "category": "crater",
    "categoryLabel": "Impact Crater",
    "selenographic": {
      "latitudeDeg": -43.31,
      "longitudeDeg": -11.36
    },
    "coordinatesFormatted": "43.31° S, 11.36° W",
    "region": "Southern Lunar Highlands",
    "description": "Iconic 85 km crater with jagged 2 km central mountain complex.",
    "referenceImage": "assets/images/22_Tycho_Crater_terrestrial_14f590b0.png",
    "referenceCredit": "NASA LRO / Terrestrial Telescopic",
    "featureDescription": "Steep striated rock massifs and prominent ejecta rays spanning thousands of kilometers.",
    "idealSunAngleDeg": 80,
    "pinColor": 3718648
  },
  {
    "id": "komarov",
    "name": "Komarov Tectonic Rilles",
    "category": "crater",
    "categoryLabel": "Far Side Tectonic Rift",
    "selenographic": {
      "latitudeDeg": 24.55,
      "longitudeDeg": 151.75
    },
    "coordinatesFormatted": "24.55° N, 151.75° E",
    "region": "Lunar Far Side Highlands",
    "description": "Fractured-floor impact crater dissected by deep graben and fault valleys.",
    "referenceImage": "assets/images/Komarov_084d36f7.png",
    "referenceCredit": "NASA / Lunar Reconnaissance Orbiter (LROC)",
    "featureDescription": "Sunken fault-bounded crustal blocks and tectonic rift valleys.",
    "idealSunAngleDeg": 110,
    "pinColor": 11032055
  },
  {
    "id": "malapert",
    "name": "Malapert Massif & South Pole",
    "category": "massif",
    "categoryLabel": "Polar Massif",
    "selenographic": {
      "latitudeDeg": -84.9,
      "longitudeDeg": 12.9
    },
    "coordinatesFormatted": "84.90° S, 12.90° E",
    "region": "Lunar South Pole",
    "description": "Towering 5 km mountain massif near the lunar south pole with grazing low-sun shadows.",
    "referenceImage": "assets/images/MalapertMassif-1_63d94d37.png",
    "referenceCredit": "NASA / Intuitive Machines / LROC",
    "featureDescription": "Extreme low-angle solar relief, deep permanently shadowed crater bowls holding water ice.",
    "idealSunAngleDeg": 90,
    "pinColor": 3718648
  },
  {
    "id": "plato",
    "name": "Plato & Sinuous Lava Rille",
    "category": "crater",
    "categoryLabel": "Basaltic Lava Crater",
    "selenographic": {
      "latitudeDeg": 51.62,
      "longitudeDeg": -9.38
    },
    "coordinatesFormatted": "51.62° N, 9.38° W",
    "region": "Montes Alpes / Mare Imbrium Rim",
    "description": "Dark basaltic lava-filled crater with sinuous rille channels carved by ancient lava flows.",
    "referenceImage": "assets/images/plato_152a6d98.jpg",
    "referenceCredit": "NASA / LROC Narrow Angle Camera",
    "featureDescription": "Meandering volcanic lava channels, sharp basalt cliffs, micro-cratering.",
    "idealSunAngleDeg": 65,
    "pinColor": 3718648
  },
  {
    "id": "earthrise",
    "name": "Limb Horizon & Earthrise",
    "category": "view",
    "categoryLabel": "Limb Perspective",
    "selenographic": {
      "latitudeDeg": -15,
      "longitudeDeg": 95
    },
    "coordinatesFormatted": "15.00° S, 95.00° E",
    "region": "Eastern Limb Horizon",
    "description": "Jagged 3D crater crenellations on the lunar limb silhouette with Earth rising in the background.",
    "referenceImage": "assets/images/art002e009287_large_68a78c5e.jpg",
    "referenceCredit": "NASA / Artemis I Orion Spacecraft",
    "featureDescription": "Physical 3D elevation profile showing crater rim crenellations along the horizon.",
    "idealSunAngleDeg": 135,
    "pinColor": 58879
  },
  {
    "id": "mons-huygens",
    "name": "Mons Huygens Massif",
    "category": "massif",
    "categoryLabel": "Mountain Massif",
    "selenographic": {
      "latitudeDeg": 19.92,
      "longitudeDeg": -2.86
    },
    "coordinatesFormatted": "19.92° N, 2.86° W",
    "region": "Montes Apenninus",
    "description": "The tallest lunar mountain peak, towering 5.5 km above the basalt plains of Mare Imbrium.",
    "referenceImage": "assets/images/lunarorb_copernicus_000b6074.jpg",
    "referenceCredit": "NASA LRO / Apollo Archives",
    "featureDescription": "Pristine pre-Imbrian anorthositic crustal uplift, untouched by atmospheric weathering.",
    "idealSunAngleDeg": 70,
    "pinColor": 3718648
  },
  {
    "id": "shackleton",
    "name": "Shackleton Crater Ice Traps",
    "category": "crater",
    "categoryLabel": "Permanently Shadowed Crater",
    "selenographic": {
      "latitudeDeg": -89.9,
      "longitudeDeg": 0
    },
    "coordinatesFormatted": "89.90° S, 0.00° E",
    "region": "Lunar South Pole Exact Axis",
    "description": "Deep 4.2 km impact depression whose interior has resided in perpetual darkness for billions of years.",
    "referenceImage": "assets/images/MalapertMassif-1_63d94d37.png",
    "referenceCredit": "NASA / Mini-SAR / LRO LAMP",
    "featureDescription": "Volatile cold-traps with proven subsurface water-ice regolith reservoirs for Artemis base camps.",
    "idealSunAngleDeg": 88,
    "pinColor": 58879
  }
];
const ROBOTIC_LANDERS = [
  {
    "id": "luna-2",
    "name": "Luna 2 Impact Site",
    "mission": "Luna 2",
    "category": "robotic",
    "categoryLabel": "Robotic Impactor",
    "date": "September 14, 1959",
    "selenographic": {
      "latitudeDeg": 29.1,
      "longitudeDeg": 0
    },
    "coordinatesFormatted": "29.10° N, 0.00° E",
    "region": "Palus Putredinis / Mare Imbrium",
    "description": "First artificial object in human history to reach the surface of another celestial body.",
    "referenceCredit": "Soviet Space Program Archive",
    "featureDescription": "Spherical pennant sphere impact locus, confirming the absence of a substantial lunar magnetic field.",
    "pinColor": 1096065
  },
  {
    "id": "luna-9",
    "name": "Luna 9 Soft Landing",
    "mission": "Luna 9",
    "category": "robotic",
    "categoryLabel": "Robotic Soft Lander",
    "date": "February 3, 1966",
    "selenographic": {
      "latitudeDeg": 7.08,
      "longitudeDeg": -64.37
    },
    "coordinatesFormatted": "7.08° N, 64.37° W",
    "region": "Oceanus Procellarum",
    "description": "First robotic probe to achieve an intact survivable soft touchdown on the Moon.",
    "referenceCredit": "Soviet Space Program / IKI RAS",
    "featureDescription": "Transmitted the very first close-up television panoramas of the lunar micro-topography.",
    "pinColor": 1096065
  },
  {
    "id": "surveyor-3",
    "name": "Surveyor 3 & Apollo 12 Pinpoint Site",
    "mission": "Surveyor 3",
    "category": "robotic",
    "categoryLabel": "Robotic Soft Lander",
    "date": "April 20, 1967",
    "selenographic": {
      "latitudeDeg": -3.015,
      "longitudeDeg": -23.418
    },
    "coordinatesFormatted": "3.015° S, 23.418° W",
    "region": "Oceanus Procellarum",
    "description": "Soft lander equipped with surface sampler scoop; later visited and sampled by Apollo 12 astronauts.",
    "referenceCredit": "NASA / JPL",
    "featureDescription": "Pioneered soil mechanics testing; TV camera retrieved by Conrad and Bean in 1969.",
    "pinColor": 1096065
  },
  {
    "id": "change-4",
    "name": "Chang'e 4 & Yutu-2 Rover",
    "mission": "Chang'e 4",
    "category": "robotic",
    "categoryLabel": "Far Side Robotic Rover",
    "date": "January 3, 2019",
    "selenographic": {
      "latitudeDeg": -45.46,
      "longitudeDeg": 177.59
    },
    "coordinatesFormatted": "45.46° S, 177.59° E",
    "region": "Von Kármán Crater / South Pole-Aitken",
    "description": "First robotic landing on the lunar far side, communicating via Queqiao relay satellite in halo orbit.",
    "referenceCredit": "CNSA / CLEP",
    "featureDescription": "Explored deep South Pole-Aitken impact basin mantle ejecta and low-frequency radio sky.",
    "pinColor": 1096065
  },
  {
    "id": "chandrayaan-3",
    "name": "Chandrayaan-3 — Shiv Shakti Point",
    "mission": "Chandrayaan-3",
    "category": "robotic",
    "categoryLabel": "Polar Robotic Lander & Rover",
    "date": "August 23, 2023",
    "selenographic": {
      "latitudeDeg": -69.37,
      "longitudeDeg": 32.35
    },
    "coordinatesFormatted": "69.37° S, 32.35° E",
    "region": "Southern Polar Region (Between Manzinus C & Simpelius N)",
    "description": "Historic soft landing near the lunar south pole by Vikram lander and Pragyan rover.",
    "referenceCredit": "ISRO / Chandrayaan-3 Mission",
    "featureDescription": "In-situ elemental analysis discovering sulphur (S), aluminum, calcium, and measuring topsoil thermophysical gradient.",
    "pinColor": 1096065
  }
];
const LUNAR_MARIA = [
  {
    "id": "mare-tranquillitatis",
    "name": "Mare Tranquillitatis",
    "category": "maria",
    "categoryLabel": "Lunar Mare (Sea)",
    "selenographic": {
      "latitudeDeg": 8.5,
      "longitudeDeg": 31.4
    },
    "coordinatesFormatted": "8.50° N, 31.40° E",
    "region": "Near Side Equatorial",
    "description": "Vast 873 km basaltic sea rich in ilmenite and titanium dioxide, giving it a distinctive blue-grey tint.",
    "pinColor": 8490232
  },
  {
    "id": "mare-imbrium",
    "name": "Mare Imbrium (Sea of Rains)",
    "category": "maria",
    "categoryLabel": "Lunar Mare (Sea)",
    "selenographic": {
      "latitudeDeg": 32.8,
      "longitudeDeg": -15.6
    },
    "coordinatesFormatted": "32.80° N, 15.60° W",
    "region": "Northwestern Quadrant",
    "description": "Second largest impact basin on the Moon (1,145 km wide), bounded by Montes Apenninus and Montes Caucasus.",
    "pinColor": 8490232
  },
  {
    "id": "mare-serenitatis",
    "name": "Mare Serenitatis (Sea of Serenity)",
    "category": "maria",
    "categoryLabel": "Lunar Mare (Sea)",
    "selenographic": {
      "latitudeDeg": 28,
      "longitudeDeg": 17.5
    },
    "coordinatesFormatted": "28.00° N, 17.50° E",
    "region": "Near Side North",
    "description": "Nearly circular 674 km mare basin with a pronounced positive gravitational anomaly (mascon).",
    "pinColor": 8490232
  },
  {
    "id": "oceanus-procellarum",
    "name": "Oceanus Procellarum (Ocean of Storms)",
    "category": "maria",
    "categoryLabel": "Lunar Ocean (Vast Plain)",
    "selenographic": {
      "latitudeDeg": 18.4,
      "longitudeDeg": -57.4
    },
    "coordinatesFormatted": "18.40° N, 57.40° W",
    "region": "Western Near Side",
    "description": "The largest lunar mare, stretching over 2,500 km north-to-south across more than 4,000,000 km².",
    "pinColor": 8490232
  }
];
const ASTEROIDS = [
  {
    "name": "101955 Bennu",
    "diameter": "492 m",
    "type": "B-type Carbonaceous",
    "image": "assets/images/Asteroid_Bennu-1_f1af1811.jpeg",
    "mission": "NASA OSIRIS-REx Sample Return"
  },
  {
    "name": "25143 Itokawa",
    "diameter": "535 m",
    "type": "S-type Rubble Pile",
    "image": "assets/images/itokawa-banner-1920x640-1_34940351.webp",
    "mission": "JAXA Hayabusa"
  },
  {
    "name": "65803 Didymos & Dimorphos",
    "diameter": "780 m / 170 m",
    "type": "Binary Near-Earth System",
    "image": "assets/images/didymos-and-dimorphos-1920x640-1_e580cc87.webp",
    "mission": "NASA DART Planetary Defense"
  },
  {
    "name": "152830 Dinkinesh",
    "diameter": "790 m",
    "type": "S-type with Contact Binary",
    "image": "assets/images/dinkinesh-firstlook-llorri_bf3ed376.webp",
    "mission": "NASA Lucy Flyby"
  },
  {
    "name": "243 Ida & Dactyl",
    "diameter": "31.4 km",
    "type": "Coronis family with moonlet",
    "image": "assets/images/ida_dactyl_c539c9a9.jpg",
    "mission": "NASA Galileo Orbiter"
  }
];
const ASTROPHYSICS_INVARIANTS = [
  {
    "parameter": "Mass",
    "earth": "5.972 × 10²⁴ kg",
    "moon": "7.342 × 10²² kg",
    "contrast": "Earth is 81.3× more massive than the Moon",
    "icon": "scale"
  },
  {
    "parameter": "Equatorial Radius",
    "earth": "6,378.1 km",
    "moon": "1,737.4 km",
    "contrast": "Moon is 27.2% the radius of Earth",
    "icon": "circle"
  },
  {
    "parameter": "Surface Gravity",
    "earth": "9.807 m/s² (1.00 g)",
    "moon": "1.622 m/s² (0.165 g)",
    "contrast": "Moon gravity is ~1/6th terrestrial gravity",
    "icon": "arrow-down"
  },
  {
    "parameter": "Escape Velocity",
    "earth": "11.186 km/s (40,270 km/h)",
    "moon": "2.380 km/s (8,568 km/h)",
    "contrast": "Lunar escape requires only 21.3% the terrestrial delta-v",
    "icon": "zap"
  },
  {
    "parameter": "Atmosphere Composition",
    "earth": "78% N₂, 21% O₂, 1% Ar",
    "moon": "Surface boundary exosphere (He, Ne, H₂)",
    "contrast": "Total lunar atmosphere mass < 10 metric tons (< 10⁻¹⁰ Pa)",
    "icon": "wind"
  },
  {
    "parameter": "Scale Height (H = kT/mg)",
    "earth": "8.5 km (exponential barometric decay)",
    "moon": "Ballistic exosphere (H → ∞, collisions negligible)",
    "contrast": "Gas molecules enter free ballistic sub-orbital arcs",
    "icon": "layers"
  },
  {
    "parameter": "Magnetic Field Protection",
    "earth": "Global geodynamo (~30–60 µT)",
    "moon": "No global dynamo; localized crustal magnetic swirls",
    "contrast": "Earth magnetosphere deflects 99.5% of dangerous solar wind",
    "icon": "shield"
  },
  {
    "parameter": "Annual Cosmic Radiation Flux",
    "earth": "2.4 mSv/year (sea level)",
    "moon": "380–420 mSv/year (unshielded surface)",
    "contrast": "Lunar surface receives ~160× terrestrial radiation dose",
    "icon": "sun"
  }
];
const ASTROPHYSICS_FORMULAS = [
  {
    "title": "Newtonian Gravitational Acceleration",
    "formula": "g = G × M / R²",
    "explanation": "Governs the attractive force per unit mass. With Earth mass M_E = 5.972 × 10²⁴ kg and radius R_E = 6,371 km, g_E ≈ 9.81 m/s². The Moon, having only 1.2% Earth's mass and 27% its radius, yields g_M = 1.62 m/s² (0.165 g)."
  },
  {
    "title": "Escape Velocity & Kinetic Threshold",
    "formula": "v_e = √(2GM / R)",
    "explanation": "The parabolic trajectory velocity needed to overcome a celestial body's gravitational potential well without further propulsion. Earth requires 11.19 km/s (requiring multi-stage rocketry), whereas lunar launch from the surface requires only 2.38 km/s."
  },
  {
    "title": "Thermal Radiative Equilibrium (Stefan-Boltzmann)",
    "formula": "T_eq = [ (1 - A) × S_0 / (16 × ε × σ) ]^(1/4)",
    "explanation": "With solar constant S_0 ≈ 1361 W/m² and lunar albedo A ≈ 0.12, the sunlit lunar regolith reaches 395 K (+122°C), while shadowed craters plunge to 27 K (-246°C). On Earth, greenhouse gas re-radiation and atmospheric convection moderate global mean temperature to 288 K (+15°C)."
  },
  {
    "title": "Jeans Atmospheric Escape Mechanism",
    "formula": "v_th = √(3 × k_B × T / m)",
    "explanation": "Explains why the Moon cannot retain an atmosphere: when thermal Maxwell-Boltzmann molecular velocity v_th exceeds approximately one-sixth of escape velocity (v_th > v_e / 6), gas molecules boil off into space over geological timescales. Water vapor and nitrogen escape within hours on the lunar day-side."
  }
];
const CITATIONS = [
  {
    "name": "NASA Planetary Data System (PDS)",
    "url": "https://pds.nasa.gov",
    "role": "Orbital telemetry, LOLA topography, Diviner radiometer data"
  },
  {
    "name": "USGS Astrogeology Science Center",
    "url": "https://astrogeology.usgs.gov",
    "role": "Lunar geological maps and selenographic geodetic datums"
  },
  {
    "name": "NASA Apollo Mission Archives",
    "url": "https://www.nasa.gov/mission/apollo/",
    "role": "Surface exploration logs, samples returned, EVA telemetry"
  },
  {
    "name": "LROC (Lunar Reconnaissance Orbiter Camera)",
    "url": "https://www.lroc.asu.edu/",
    "role": "High-resolution narrow angle camera lunar surface imagery"
  },
  {
    "name": "ESA Planetary Science Archive",
    "url": "https://www.cosmos.esa.int/web/psa",
    "role": "PANGAEA analog training and comparative planetary science"
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ANALOG_PAIRS,
        CELESTIAL_SPHERES,
        APOLLO_MISSIONS,
        CRATERS_MASSIFS,
        ROBOTIC_LANDERS,
        LUNAR_MARIA,
        ASTEROIDS,
        ASTROPHYSICS_INVARIANTS,
        ASTROPHYSICS_FORMULAS,
        CITATIONS
    };
}
