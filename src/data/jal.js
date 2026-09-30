/* Data extracted verbatim from exp1.html (Jal Pathways). Icon fields hold icon keys rendered by <Icon>. */
export const SPECIES = [
  {id:'catla',common:'Catla',scientific:'Catla catla',localNames:{hi:'Katla',bn:'Katla',od:'Karata',as:'Katla'},category:'IMC',img:'catla',
   systems:['pond','cage'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'One of the three Indian Major Carps. Surface feeder consuming zooplankton. Fast growth rate, reaches 1-2 kg in one growing season.',
   keyTraits:['Surface feeder','Zooplankton eater','Fast growth','Cold tolerant'],
   risks:['Susceptible to Epizootic Ulcerative Syndrome','Does not breed naturally in ponds'],
   sourcePages:[24,26,31]},

  {id:'rohu',common:'Rohu',scientific:'Labeo rohita',localNames:{hi:'Rohu',bn:'Rui',od:'Rohi',as:'Rui'},category:'IMC',img:'rohu',
   systems:['pond','cage'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'Column feeder consuming plants and detritus. One of the most popular food fish in India. Good consumer acceptance and market demand.',
   keyTraits:['Column feeder','Herbivorous','High market demand','Jayanti variety available'],
   risks:['Vulnerable to bacterial infections','Susceptible to dropsy'],
   sourcePages:[24,26,31]},

  {id:'mrigal',common:'Mrigal',scientific:'Cirrhinus mrigala',localNames:{hi:'Mrigal',bn:'Mrigel',od:'Mrigala',as:'Mrigel'},category:'IMC',img:'mrigal',
   systems:['pond','cage'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'Bottom feeder consuming detritus and organic matter. Important for pond cleaning. Often stocked with Catla and Rohu for complete water column utilization.',
   keyTraits:['Bottom feeder','Detritus eater','Pond cleaner','Completes water column'],
   risks:['Sensitive to poor water quality','Susceptible to gill diseases'],
   sourcePages:[24,26,31]},

  {id:'grass_carp',common:'Aquatic Weed Fish (Grass Carp)',scientific:'Ctenopharyngodon idella',localNames:{hi:'Grass Carp',bn:'Grass Carp'},category:'Exotic',img:'grass_carp',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'Food fish / Weed control',
   desc:'Herbivorous fish used for aquatic weed control. Consumes large quantities of aquatic plants. Does not breed naturally in Indian waters.',
   keyTraits:['Herbivorous','Weed controller','Fast growth','Does not breed in ponds'],
   risks:['Can overgraze ponds','Invasive potential','Requires separate breeding'],
   sourcePages:[24]},

  {id:'silver_carp',common:'Silver Carp',scientific:'Hypophthalmichthys molitrix',localNames:{hi:'Silver Carp',bn:'Silver Carp'},category:'Exotic',img:'silver_carp',
   systems:['pond','cage'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'Filter feeder consuming phytoplankton. Excellent for biological control of algal blooms. Grows rapidly in Indian conditions.',
   keyTraits:['Filter feeder','Phytoplankton eater','Algae controller','Rapid growth'],
   risks:['Can jump from ponds','Difficult to breed artificially','Requires specific conditions'],
   sourcePages:[24]},

  {id:'common_carp',common:'Common Carp (Mirror/Leather)',scientific:'Cyprinus carpio',localNames:{hi:'Common Carp',bn:'Common Carp'},category:'Exotic',img:'common_carp',
   systems:['pond','cage'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'The only carp that breeds naturally in ponds. Bottom feeder consuming insects, worms, and detritus. Hardy and adaptable species.',
   keyTraits:['Breeds in ponds','Bottom feeder','Hardy','Multiple varieties'],
   risks:['Can disturb pond bottom','May consume fish eggs','Invasive in some regions'],
   sourcePages:[24,26]},

  {id:'pangasius',common:'Pangasius (Basa)',scientific:'Pangasius hypophthalmus',localNames:{hi:'Pangasius',bn:'Pangas',od:'Pangasius'},category:'Non-Carp',img:'pangasius',
   systems:['pond','cage','biofloc','ras'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'Fast-growing catfish species popular in cage culture. High stocking density tolerant. Good for intensive systems.',
   keyTraits:['Fast growth','High density tolerant','Cage culture suitable','Intensive farming'],
   risks:['Requires high dissolved oxygen','Susceptible to bacterial diseases','Temperature sensitive below 20°C'],
   sourcePages:[24,37,50]},

  {id:'tilapia',common:'GIFT Tilapia',scientific:'Oreochromis niloticus',localNames:{hi:'Tilapia',bn:'Tilapia',od:'Tilapia'},category:'Non-Carp',img:'tilapia',
   systems:['pond','cage','biofloc'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'Genetically Improved Farmed Tilapia. Tolerant to poor water quality. Excellent for cage culture and biofloc systems.',
   keyTraits:['Hardy','Tolerant to poor water quality','Cage culture suitable','Biofloc suitable'],
   risks:['Prolific breeder needs management','Cold sensitive below 20°C','Male monosex preferred'],
   sourcePages:[24,37,42]},

  {id:'pacu',common:'Pacu / Roopchand',scientific:'Piaractus brachypomus',localNames:{hi:'Roopchand',bn:'Roopchand'},category:'Non-Carp',img:'pacu',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'South American species adapted to Indian conditions. Omnivorous with good growth rate. Popular in eastern India.',
   keyTraits:['Omnivorous','Good growth','Adaptable','Popular in East India'],
   risks:['Can become invasive','Temperature sensitive','Limited market awareness'],
   sourcePages:[24]},

  {id:'magur',common:'Magur (Walking Catfish)',scientific:'Clarias batrachus',localNames:{hi:'Magur',bn:'Magur',od:'Magura'},category:'High Value',img:'magur',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'High-value food fish',
   desc:'Air-breathing catfish with very high market price. Can survive in low oxygen conditions. Popular in northeastern and eastern India.',
   keyTraits:['Air-breathing','High market price','Hardy','Can breathe atmospheric air'],
   risks:['Predatory nature','Can escape ponds','Slow growth rate'],
   sourcePages:[24]},

  {id:'murrel',common:'Murrel (Snakehead)',scientific:'Channa striata',localNames:{hi:'Shol',bn:'Shol',od:'Phali'},category:'High Value',img:'murrel',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'High-value food fish',
   desc:'Air-breathing predator with very high market demand. Can survive out of water for extended periods. Premium prices in live fish market.',
   keyTraits:['Air-breathing','Predator','Very high price','Live fish demand'],
   risks:['Predatory - cannot stock with small fish','Aggressive','Territorial'],
   sourcePages:[24]},

  {id:'pabda',common:'Pabda',scientific:'Ompok bimaculatus',localNames:{hi:'Pabda',bn:'Pabda',od:'Pabda'},category:'High Value',img:'pabda',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'High-value food fish',
   desc:'Small catfish species with extremely high market price. Very popular in Bengal and Odisha. Premium pricing.',
   keyTraits:['Very high price','Small size','Bengal specialty','Premium market'],
   risks:['Difficult to breed','Slow growth','High feed requirements'],
   sourcePages:[24]},

  {id:'singhi',common:'Singhi',scientific:'Heteropneustes fossilis',localNames:{hi:'Singhi',bn:'Singi',od:'Singi'},category:'High Value',img:'singhi',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'High-value food fish',
   desc:'Stinging catfish with air-breathing capability. High medicinal value and market demand. Can survive in poor water quality.',
   keyTraits:['Air-breathing','Medicinal value','High price','Hardy'],
   risks:['Stinging spine - handle with care','Predatory','Slow growth'],
   sourcePages:[24]},

  {id:'kawai',common:'Climbing Perch (Kawai)',scientific:'Anabas testudineus',localNames:{hi:'Kawai',bn:'Kawai',as:'Kawai'},category:'High Value',img:'kawai',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'High-value food fish',
   desc:'Small but highly valued fish. Can breathe atmospheric air and survive out of water. Extremely high market price.',
   keyTraits:['Air-breathing','Extremely high price','Small size','Survives out of water'],
   risks:['Very slow growth','Difficult to breed','Limited availability'],
   sourcePages:[24]},

  {id:'mola',common:'Mola',scientific:'Amblypharyngodon mola',localNames:{hi:'Mola',bn:'Mola',od:'Mola',as:'Mola'},category:'SIS',img:'mola',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'Nutrition / Food fish',
   desc:'Small Indigenous Species rich in micronutrients. Excellent source of calcium, iron, and vitamin A. Important for rural nutrition.',
   keyTraits:['Micronutrient rich','High calcium','High iron','Vitamin A source'],
   risks:['Very small size','Difficult to process','Limited market value'],
   sourcePages:[10,24]},

  {id:'puthi',common:'Pool Barb (Puthi)',scientific:'Puntius sophore',localNames:{hi:'Puthi',bn:'Puthi',od:'Puthi'},category:'SIS',img:'puthi',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'Nutrition / Food fish',
   desc:'Small Indigenous Species with good nutritional profile. Adhesive egg layer suitable for FRP hatchery breeding.',
   keyTraits:['Nutritious','Adhesive eggs','FRP hatchery suitable','Community fish'],
   risks:['Small size','Limited commercial value','Predation risk'],
   sourcePages:[10,24]},

  {id:'rainbow_trout',common:'Rainbow Trout',scientific:'Oncorhynchus mykiss',localNames:{hi:'Rainbow Trout',en:'Rainbow Trout'},category:'Cold Water',img:'trout',
   systems:['pond','ras'],temp:'5-18',water:'Cold Freshwater',purpose:'High-value food fish',
   desc:'Premium cold-water species requiring 5-18°C. High market value. Requires clean, oxygen-rich flowing water. Suitable for hill states.',
   keyTraits:['Cold water specialist','High value','Requires clean water','Mountain species'],
   risks:['Temperature sensitive','Requires flowing water','High oxygen demand','Expensive infrastructure'],
   sourcePages:[65]},

  {id:'mahseer',common:'Golden Mahseer',scientific:'Tor putitora',localNames:{hi:'Golden Mahseer',bn:'Mahseer'},category:'Cold Water',img:'mahseer',
   systems:['pond'],temp:'5-20',water:'Cold Freshwater',purpose:'Conservation / Premium food fish',
   desc:'Prestigious cold-water species. Important for both conservation and commercial aquaculture in Himalayan regions.',
   keyTraits:['Prestigious','Himalayan species','Conservation value','High market price'],
   risks:['Protected in some areas','Slow growth','Requires pristine water','Declining wild populations'],
   sourcePages:[65]},

  {id:'guppy',common:'Guppy',scientific:'Poecilia reticulata',localNames:{hi:'Guppy'},category:'Ornamental',img:'guppy',
   systems:['ornamental'],temp:'22-28',water:'Freshwater',purpose:'Ornamental',
   desc:'Most popular livebearing ornamental fish. Hardy, colorful, and easy to breed. Ideal for beginners in ornamental fish farming.',
   keyTraits:['Livebearer','Easy to breed','Colorful','Beginner friendly'],
   risks:['Overbreeding','Invasive potential','Low individual value'],
   sourcePages:[80]},

  {id:'swordtail',common:'Swordtail',scientific:'Xiphophorus helleri',localNames:{hi:'Swordtail'},category:'Ornamental',img:'swordtail',
   systems:['ornamental'],temp:'22-28',water:'Freshwater',purpose:'Ornamental',
   desc:'Popular livebearing ornamental fish with distinctive tail. Hardy and easy to maintain. Good starter species for ornamental farming.',
   keyTraits:['Livebearer','Distinctive tail','Hardy','Popular'],
   risks:['Can hybridize with platy','May eat small fish','Temperature sensitive'],
   sourcePages:[80]},

  {id:'goldfish',common:'Goldfish',scientific:'Carassius auratus',localNames:{hi:'Goldfish'},category:'Ornamental',img:'goldfish',
   systems:['ornamental'],temp:'18-26',water:'Freshwater',purpose:'Ornamental',
   desc:'Classic ornamental fish with many varieties. Egg layer requiring specific breeding conditions. Good market demand.',
   keyTraits:['Many varieties','Egg layer','Classic species','Good demand'],
   risks:['Needs cool water to breed','Viral diseases','Hybridization issues'],
   sourcePages:[80]},

  {id:'angelfish',common:'Angel',scientific:'Pterophyllum scalare',localNames:{hi:'Angel'},category:'Ornamental',img:'angelfish',
   systems:['ornamental'],temp:'24-30',water:'Freshwater',purpose:'Ornamental',
   desc:'Popular cichlid ornamental fish. Elegant appearance with distinctive shape. Requires careful breeding conditions.',
   keyTraits:['Cichlid','Elegant','Popular','Egg layer'],
   risks:['Easily disturbed during breeding','May eat own eggs','Cichlid aggression'],
   sourcePages:[80,90]},

  {id:'betta',common:'Betta (Siamese Fighting Fish)',scientific:'Betta splendens',localNames:{hi:'Betta'},category:'Ornamental',img:'betta',
   systems:['ornamental'],temp:'24-30',water:'Freshwater',purpose:'Ornamental',
   desc:'Vibrant ornamental fish with flowing fins. Males fight - must be kept separately. High individual value in ornamental market.',
   keyTraits:['Flowing fins','Males fight','High value','Popular'],
   risks:['Males aggressive to each other','Can jump from tanks','Temperature sensitive'],
   sourcePages:[80]},

  {id:'discus',common:'Discus',scientific:'Symphysodon discus',localNames:{hi:'Discus'},category:'Ornamental',img:'discus',
   systems:['ornamental'],temp:'26-30',water:'Freshwater',purpose:'Ornamental',
   desc:'Premium ornamental fish known as "King of Aquarium". Requires stable warm water and soft acidic conditions. High market value.',
   keyTraits:['Premium species','Warm water needed','High value','Sensitive'],
   risks:['Very sensitive to water changes','Expensive','Requires experienced keeper','Temperature critical'],
   sourcePages:[80]},

  {id:'chital',common:'Chital / Sitawl',scientific:'Notopterus chitala',localNames:{hi:'Chital',bn:'Chital'},category:'High Value',img:'chital',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'High-value food fish',
   desc:'Featherback fish with silver body. High market value especially in Assam and northeastern India.',
   keyTraits:['High value','Northeast specialty','Unique appearance','Air-breathing'],
   risks:['Slow growth','Predatory','Difficult to breed artificially'],
   sourcePages:[24]},

  {id:'reba',common:'Reba Carp',scientific:'Cirrhinus reba',localNames:{hi:'Reba',bn:'Reba',od:'Reba'},category:'SIS',img:'reba',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'Nutrition / Food fish',
   desc:'Small Indigenous Species suitable for FRP hatchery breeding. Good nutritional profile for rural communities.',
   keyTraits:['SIS species','FRP hatchery suitable','Nutritious','Community fish'],
   risks:['Small size','Limited commercial value','Predation risk'],
   sourcePages:[10,24]},

  {id:'bata',common:'Bata',scientific:'Labeo bata',localNames:{hi:'Bata',bn:'Bata',od:'Bata'},category:'IMC',img:'bata',
   systems:['pond'],temp:'25-32',water:'Freshwater',purpose:'Food fish',
   desc:'Indian Major Carp species. Herbivorous feeder. Important in polyculture systems with other carps.',
   keyTraits:['Herbivorous','Polyculture suitable','Good market demand','Traditional species'],
   risks:['Slow growth compared to other IMC','Disease susceptible'],
   sourcePages:[24]}
];

export const FARMING_SYSTEMS = [
  {id:'pond',name:'Pond Farming',icon:'🐟',
   desc:'Traditional open pond aquaculture using earthen or lined ponds. The most common system for small and marginal farmers in India.',
   suitableFor:'Small to large farmers, beginners, all skill levels',
   landWater:'500-4000 m² earthen or lined ponds, water sourced from rivers, borewells, or rainfall',
   energy:'Low to moderate - mainly for aeration and pumping',
   skillLevel:'Beginner to Intermediate',
   inputs:['Fish seed','Fish feed','Lime','Fertilizer','Aeration'],
   advantages:['Low technology barrier','Proven methods','Compatible with polyculture','Low operational cost'],
   limitations:['Land dependent','Weather vulnerable','Lower production per area','Pond maintenance needed'],
   risks:['Disease outbreaks','Water quality crashes','Predation','Weather events'],
   dailyTasks:['Monitor water quality','Feed fish at scheduled times','Check aeration equipment','Observe fish behavior','Maintain records'],
   solarOpp:'Solar aerators, solar pumps, solar-powered water quality monitors',
   sourcePages:[15,20,24]},

  {id:'cage',name:'Cage Culture',icon:'🪤',
   desc:'Fish farming in net cages placed in existing water bodies like rivers, reservoirs, and lakes. High-yield system that doesn\'t require dedicated ponds.',
   suitableFor:'Farmers with access to water bodies, medium to large scale operations',
   landWater:'Existing water bodies - rivers, reservoirs, lakes. Minimum 6-10m depth for floating cages',
   energy:'Moderate - primarily for feeding and monitoring',
   skillLevel:'Intermediate',
   inputs:['Cage structures','Fish seed','Floating feed','Mooring systems'],
   advantages:['No land conversion needed','High production density','10-12x yields vs pond','Uses existing water bodies'],
   limitations:['Water body access required','Storm/flood risk','Higher capital cost','Water quality dependent'],
   risks:['Fish escape during storms','Disease spread between cages','Water quality changes','Theft'],
   dailyTasks:['Check cage integrity','Feed fish 2-3 times daily','Monitor water quality','Record growth data','Maintain moorings'],
   solarOpp:'Solar-powered feeding systems, solar aerators for cages',
   sourcePages:[37,40]},

  {id:'biofloc',name:'Biofloc Technology (BFT)',icon:'🦠',
   desc:'Advanced system where beneficial microbial communities (flocs) convert waste into protein. Produces fish feed in-situ while maintaining water quality.',
   suitableFor:'Experienced farmers with capital investment capacity, peri-urban areas',
   landWater:'Concrete tanks (min 6m diameter, 1.2-1.5m height). Minimal water exchange required.',
   energy:'High - continuous aeration critical. Backup power mandatory.',
   skillLevel:'Advanced',
   inputs:['Concrete tanks','High-protein feed (30-34%)','Carbon source (molasses, rice bran)','Probiotics','Continuous aeration'],
   advantages:['High production density','Minimal water use','Feed efficiency improvement','90%+ water recirculation'],
   limitations:['High energy dependency','Technical knowledge required','High capital cost','Aeration failure = fish mortality'],
   risks:['Aeration failure critical','pH instability','Ammonia spikes','System crash if unmanaged'],
   dailyTasks:['Test water quality 2-3x daily','Add carbon source as needed','Feed fish 3-4 times daily','Monitor floc volume','Maintain aeration 24/7'],
   solarOpp:'Solar-powered biofloc systems, solar aeration',
   sourcePages:[42,48]},

  {id:'ras',name:'Recirculating Aquaculture System (RAS)',icon:'🔄',
   desc:'Indoor intensive system where water is continuously filtered and recirculated. Allows year-round production independent of climate.',
   suitableFor:'Commercial farmers, urban areas, high-value species',
   landWater:'Indoor facility with tanks. Very low water consumption - 90%+ recirculation.',
   energy:'Very high - pumps, filters, UV, aeration all need reliable power',
   skillLevel:'Expert',
   inputs:['Fish tanks','Mechanical filters','Biological filters','UV sterilizers','Biofilters','High-protein feed'],
   advantages:['Year-round production','Climate independent','High density (60-80 kg/m³)','Low water use','Biosecurity control'],
   limitations:['Very high capital cost','High energy dependency','Technical expertise needed','Equipment maintenance'],
   risks:['Power failure catastrophic','Equipment malfunction','Ammonia/nitrite buildup','High operational cost'],
   dailyTasks:['Check all filter systems','Monitor water parameters hourly','Feed fish per schedule','Clean mechanical filters','Maintain UV systems'],
   solarOpp:'Solar-powered RAS systems, solar panels for facility power',
   sourcePages:[50,55]},

  {id:'aquaponics',name:'Aquaponics',icon:'🌱',
   desc:'Integrated system combining fish farming with soilless plant cultivation. Fish waste provides nutrients for plants, plants filter water for fish.',
   suitableFor:'Urban farmers, educational farms, high-value crop + fish production',
   landWater:'Tanks for fish + grow beds for plants. Can be rooftop, backyard, or greenhouse.',
   energy:'Moderate - pumps and aeration',
   skillLevel:'Intermediate to Advanced',
   inputs:['Fish tanks','Grow beds','Water pumps','Growing media (expanded clay, gravel)','Fish seed','Plant seedlings'],
   advantages:['Dual income from fish + plants','Efficient water use','No soil needed','Organic produce potential'],
   limitations:['Balancing fish and plant needs','Limited crop selection','Complex system management','pH management challenging'],
   risks:['System imbalance','Plant disease','Fish stress from nutrient fluctuations','Pump failure'],
   dailyTasks:['Check pH balance','Feed fish','Monitor plant health','Check water flow','Harvest mature produce'],
   solarOpp:'Solar-powered aquaponics, greenhouse solar heating',
   sourcePages:[93,100]},

  {id:'cold_water',name:'Cold Water Fisheries',icon:'❄',
   desc:'Specialized aquaculture in cold mountain streams and artificial raceways. Premium species like trout require clean, cold, oxygen-rich water.',
   suitableFor:'Hill state farmers, mountainous regions, entrepreneurs near clean water sources',
   landWater:'Cold water sources (5-20°C), artificial raceways, mountain streams. Clean, flowing water essential.',
   energy:'Moderate - mainly for water flow management',
   skillLevel:'Advanced',
   inputs:['Trout fingerlings','Specialized cold-water feed','Raceway infrastructure','Water flow systems'],
   advantages:['Premium market prices','Low competition','Mountain region suitable','High protein quality'],
   limitations:['Geographic restriction','Temperature dependent','High infrastructure cost','Clean water critical'],
   risks:['Temperature spikes','Water contamination','Disease outbreaks','Flash floods'],
   dailyTasks:['Monitor water temperature and DO','Feed fish per schedule','Check water flow rates','Clean raceways','Record growth data'],
   solarOpp:'Solar-powered water pumps, temperature monitoring',
   sourcePages:[65,67]},

  {id:'ornamental',name:'Ornamental Fisheries',icon:'🐠',
   desc:'Breeding and rearing colorful fish for aquarium trade. High-value niche market with 200+ species bred in India.',
   suitableFor:'Urban entrepreneurs, Women SHGs, hobbyists turning commercial',
   landWater:'Indoor facility with aquariums/tanks. Minimal water requirements.',
   energy:'Low to moderate - heating for tropical species, aeration',
   skillLevel:'Intermediate',
   inputs:['Aquariums/tanks','Tropical fish seed','Specialized feed','Water treatment chemicals','Heating/chilling'],
   advantages:['High profit margins','Small space needed','Women SHG suitable','Growing market','India has 700+ species'],
   limitations:['Market knowledge needed','Species-specific care','Breeding expertise required','Marketing challenges'],
   risks:['Disease outbreaks','Temperature fluctuations','Stock mortality','Market price volatility'],
   dailyTasks:['Check water quality','Feed fish appropriately','Clean tanks','Monitor breeding pairs','Record stock inventory'],
   solarOpp:'Solar-powered ornamental breeding units, solar aeration',
   sourcePages:[80,92]},

  {id:'integrated',name:'Integrated Farming System (IFS)',icon:'🔗',
   desc:'Combining fish farming with agriculture, horticulture, or livestock. Creates synergies - animal waste fertilizes fish ponds, bunds grow crops.',
   suitableFor:'Small and marginal farmers with limited land, diversified income seekers',
   landWater:'Ponds with surrounding land for crops/livestock. Various combinations available.',
   energy:'Low to moderate - depends on integration type',
   skillLevel:'Beginner to Intermediate',
   inputs:['Fish seed','Crop seed/livestock','Fertilizer from integration','Feed','Basic farm tools'],
   advantages:['Multiple income streams','Resource optimization','Reduced input costs','Risk diversification','Natural fertilization'],
   limitations:['Management complexity','Space requirements','Species compatibility issues','Skill requirements for multiple systems'],
   risks:['Disease cross-contamination','Imbalanced nutrient cycling','Overstocking','Market price fluctuations'],
   dailyTasks:['Manage both fish and crop/livestock','Monitor integration synergies','Record all income streams','Balance feeding/fertilization','Observe cross-system health'],
   solarOpp:'Solar pumps for integrated systems, solar dryers for produce',
   sourcePages:[101,108]}
];

export const CHAPTERS = [
  {id:'ch1',num:1,title:'Introduction',summary:'Fisheries and aquaculture basics, India\'s sector overview, challenges and climate context.',
   quickView:'India is the world\'s 3rd largest fish producer (~17M metric tonnes annually). Fisheries contribute 1.07% of GDP and 6.7% of agricultural GDP. Over 3 crore people depend directly or indirectly on fisheries. aquaculture now contributes 55%+ of total fish production, surpassing capture fisheries. Key challenges: climate change, unreliable electricity, water quality management, and post-harvest losses exceeding 25%. The sector is critical for food security \u2014 per capita fish consumption has risen to 5-6 kg/year.',
   sections:['Fisheries Overview','Types of Fisheries','Aquaculture','Challenges','Climate Change Impact','Value Chain'],
   icon:'📖',color:'#1c8c8c',sourcePages:[1,4]},

  {id:'ch2',num:2,title:'Fish Hatchery',summary:'Induced breeding, spawning, incubation, spawn collection, and nursery rearing.',
   quickView:'Fish hatcheries produce seed (spawn, fry, fingerlings) through induced breeding using hormones like Ovaprim and WPE (Walkes Pituitary Extract). Key infrastructure: overhead tanks (water pressure), breeding pools (cement/FRP), incubation hatching pools, and nursery rearing ponds. A 10-breeder hatchery can produce 5-10 crore spawn annually. Solar-powered operation eliminates grid dependency for aeration and water pumping.',
   sections:['Induced Breeding','Breeding Practices','Nursery Rearing','SIS Hatchery','Aeration in Overhead Tank'],sections_detail:['India produces ~17M metric tonnes of fish annually — 3rd largest globally. Marine contributes 35%, inland 65%. Andhra Pradesh leads production.','Capture fisheries: fishing in natural water bodies (rivers, seas, lakes). Culture fisheries: controlled rearing in ponds, cages, tanks, reservoirs.','Aquaculture contributes 55%+ of total production, growing at 7-8% annually. Driven by carp polyculture, shrimp farming, and pangasius cage culture.','Major challenges: climate change (unpredictable monsoons), unreliable electricity (aeration failures cause mass mortality), disease outbreaks, post-harvest losses >25%.','Climate impacts: altered monsoon patterns, rising water temperatures, ocean acidification. Solar-powered solutions offer climate-resilient alternatives.','Value chain: Seed production -> Nursery rearing -> Grow-out farming -> Harvesting -> Processing -> Marketing. Each stage has specific challenges and value addition opportunities.'],
   icon:'🥚',color:'#5c8a3a',sourcePages:[5,14]},

  {id:'ch3',num:3,title:'Pond Farming',summary:'Site selection, pond construction, types, plastic lining, and pond preparation.',
   quickView:'Ponds are the most common aquaculture system. Standard size: 500-4000 m², depth 1-2m. Three construction methods based on soil type: excavation (clay soil), embankment (flat land), combined. Plastic-lined ponds reduce construction cost by 50-60% and prevent seepage. Pond preparation: 15+ days drying → lime application (200-400 kg/ha) → organic manure (5-10 tonnes/ha) → water filling → plankton bloom development.',
   sections:['Site Selection','Pond Dimensions','Construction Methods','Plastic Lined Ponds','Pond Preparation'],
   icon:'🏗',color:'#0e4f56',sourcePages:[15,23]},

  {id:'ch4',num:4,title:'Cultivable Fishes',summary:'Indian Major Carps, exotic species, high-value species, and Small Indigenous Species.',
   quickView:'Key species for Indian aquaculture: Indian Major Carps (Catla — surface feeder, Rohu — column feeder, Mrigal — bottom feeder) form the classic polyculture combination. Exotic carps (Grass, Silver, Common) add weed control and phytoplankton utilization. High-value species (Magur, Murrel, Pabda, Singhi) command premium prices. SIS species (Mola, Puthi) are nutritionally important. Cold-water species (Rainbow Trout, Mahseer) suit hill states.',
   sections:['Indian Major Carps','Exotic Carps','Non-Carp Species','High Value Species','SIS Species','Cold Water Species'],sections_detail:['Pond dimensions: length 2-3x width for efficient aeration and harvesting. Depth 1.5-2m uniform (deeper at drain end). Freeboard 0.5-0.75m. Bunds 3-4m wide, slopes 1:2 to 1:3.','Construction methods: (1) Excavation — dig down, use excavated soil for bunds (clay soil), (2) Embankment — build walls up from flat land (clay fill), (3) Combined — partial dig + build.','Plastic-lined ponds: HDPE/LLDPE liner (0.5-1mm) prevents seepage, reduces maintenance, enables farming on rocky/sandy soil. Cost Rs.50-80/m2 vs Rs.150-200/m2 cement. Life: 8-12 years.','Pond preparation: drain, dry 15-30 days, remove predatory fish, apply lime (200-400 kg/ha), organic manure (5-10 t/ha), fill water 0.5m, wait for plankton bloom, stock fish seed.','Site selection: water source availability, soil type (clay/loam best), elevation (gravity flow), distance from market, road access, electricity proximity.'],
   icon:'🐟',color:'#f0a824',sourcePages:[24,25]},

  {id:'ch5',num:5,title:'Seed Transport & Stocking',summary:'Seed packing, transportation, size classification, stocking methods and density.',
   quickView:'Seed transport mortality can reach 82% at poor loading levels. Use oxygenated polyethylene bags: 1-2 kg fingerlings per 10L water with pure oxygen. Temperature control is critical — keep below 25°C. Acclimatize seed 30-45 minutes before stocking by gradually mixing pond water into transport bags. Stocking density: 5,000-25,000 fingerlings/ha depending on system intensity. Size classification before stocking prevents cannibalism.',
   sections:['Seed Packing & Transport','Size Classification','Stocking Methods','Stocking Density','Species Combination'],
   icon:'📦',color:'#c85a2e',sourcePages:[26,30]},

  {id:'ch6',num:6,title:'Nursery System',summary:'Spawn to fry, fry to fingerling rearing, juvenile and yearling culture.',
   quickView:'Nursery rearing stages: Hatchling (5-8mm) → Fry (25mm) → Fingerling (40mm+). Cement tank stocking: 2,500 fish/m² initially, reduce to 500/m² by fingerling stage. Expected survival: 40-50% in nursery, 70-80% in rearing ponds. Feed requirement: 40-45% protein supplementary feed for nursery, reducing to 30-35% for rearing. Daily feeding: 8-10 times for hatchlings, reducing to 3-4 times for fingerlings.',
   sections:['Spawn to Fry','Fry to Fingerling','Juvenile/Yearling Culture'],sections_detail:['Seed packing: double-layered polyethylene bags (600 gauge), 1/3 water, 2/3 pure oxygen. Tie with rubber band. Pack in thermocol boxes. 10,000-50,000 fry per bag depending on size.','Transport mortality: overloading kills — loading density is critical. Water temperature below 25C, dissolved oxygen maintenance, ammonia buildup prevention. Mortality increases exponentially beyond 4 hours.','Size classification: separate fingerlings by size before stocking to prevent cannibalism (especially catfish, murrel). Use graded sieves. Stock uniform sizes together.','Stocking methods: (1) Direct release — gentle pouring near pond edge, (2) Bag acclimatization — float bags 15 min then mix water, (3) Bucket method — gradual water mixing.','Stocking density: extensive 5,000-8,000/ha, semi-intensive 10,000-15,000/ha, intensive 20,000-25,000/ha. Species ratio: 40% Catla + 30% Rohu + 30% Mrigal.'],
   icon:'🐥',color:'#3f8f5f',sourcePages:[31,34]},

  {id:'ch7',num:7,title:'Aeration Systems',summary:'Types of aerators, importance of aeration, equipment specifications.',
   quickView:'Aeration maintains dissolved oxygen (DO) critical for fish survival. DO below 3 mg/L causes stress, below 1 mg/L causes mortality. Aerator types: paddle-wheel (most common, 1.5-3 kW), diffuser (submersible, quiet operation), jet (deep water aeration), fountain (ornamental + aeration). Solar-powered aeration increases nursery survival 3-fold and reduces operational costs 20-54%. One 2 kW solar system can aerate a 0.5-acre nursery pond.',
   sections:['Aeration Importance','Aerator Types','Solar Aeration','Specifications'],
   icon:'💨',color:'#1c8c8c',sourcePages:[35,36]},

  {id:'ch8',num:8,title:'Cage Culture',summary:'Types of cages, site selection, species selection, stocking and feeding.',
   quickView:'Cage culture: farming fish in net cages placed in existing water bodies (rivers, reservoirs, lakes). Standard cage: 6m × 4m × 4m. Water depth: 6-10m for floating cages, 1-3m for fixed cages. Production: 20-30 kg/m³ for table fish. Yields 10-12x that of traditional pond farming. Key species: Pangasius, Tilapia, Catla, Rohu. Mooring systems critical to prevent cage drift during floods.',
   sections:['Cage Types & Materials','Site Selection','Species for Cage Culture','Stocking, Feeding & Yield'],sections_detail:['Aeration importance: DO is the most critical parameter. Fish consume 200-500 mg O2/kg body weight/hour. Night-time DO drops — dawn is the critical period with lowest DO.','Paddle-wheel: most common, 1.5-3 kW, splash-type. Best for shallow ponds (1-1.5m). Oxygen transfer: 1.5-3 kg O2/kWh. Coverage: 0.5-1 acre per unit.','Diffuser: submersible air pump with diffuser stones. Quiet, no splash. Good for deeper ponds (2m+). Can be solar-powered with 200-500W panel. Ideal for nursery ponds.','Jet aerator: deep water aeration using water jet circulation. Effective for stratified ponds. Creates horizontal water flow. Good for high stocking density grow-out.','Solar aeration: 1-5 kW solar panels with battery backup. Eliminates Rs.2,000-5,000/month electricity cost. Field validated — nursery survival increased 15% to 45% with solar diffuser.'],
   icon:'🪤',color:'#0a3a40',sourcePages:[37,41]},

  {id:'ch9',num:9,title:'Biofloc Technology',summary:'How biofloc works, system design, management, C:N ratio.',
   quickView:'Biofloc Technology (BFT): maintains C:N ratio 12:1 to 15:1 to promote beneficial microbial communities (flocs) that convert waste into protein. Floc volume: 12-20 ml/L when mature. Tank minimum 6m diameter, 1.2-1.5m height. Net profit: ₹92,500-₹106,500 per 5-tank operation over 6 months. Backup power is mandatory — even brief aeration failure can crash the system. Carbon sources: molasses, rice bran, sugar cane juice.',
   sections:['How Biofloc Works','Basic Systems','System Design','Management','Carbon Sources','C:N Ratio'],
   icon:'🦠',color:'#5c8a3a',sourcePages:[42,49]},

  {id:'ch10',num:10,title:'RAS',summary:'Recirculating Aquaculture System setup, species, stocking density.',
   quickView:'RAS achieves 60-80 kg/m³ production density. Water recirculation >90%. Components: mechanical filter (removes solids), biological filter (nitrification), UV sterilizer (pathogen control), protein skimmer (dissolved organics), sump tank (water collection). High energy dependency — reliable power critical for pumps, filters, UV. Year-round production independent of climate. Best for high-value species.',
   sections:['System Setup','Species & Stocking','Water Treatment','Energy Requirements'],sections_detail:['How biofloc works: heterotrophic bacteria consume ammonia (toxic) and convert to microbial protein (food). Maintained by carbon source (sugar/molasses) at C:N ratio 12-15:1. Flocs are 50-70% protein.','System design: circular concrete tanks (min 6m diameter, 1.2-1.5m height), bottom drain, central overflow, paddle-wheel aerator. Water depth 1-1.2m. 5-10 tank setup common.','Management: monitor floc volume daily (Imhoff cone, settle 15 min). Target 12-20 ml/L. Add carbon source when floc below 10 ml/L. pH management critical — biofloc consumes alkalinity.','Carbon sources: molasses (most common, 1:10 ratio with feed), rice bran (fermented), sugar cane juice. Daily addition: 2-4 g per gram feed protein input.','Common problems: pH crash (add lime/bicarbonate), ammonia spike (increase carbon), floc collapse (over-cleaning, power failure), foaming (excess protein). Backup power mandatory.'],
   icon:'🔄',color:'#0e4f56',sourcePages:[50,55]},

  {id:'ch11',num:11,title:'Fish Feed',summary:'Feed types, formulations, feeding rates, and farm-made feed.',
   quickView:'Feed constitutes 50-70% of total production cost. Protein requirements: 25-45% depending on life stage. Starter feed: 32-45% protein (hatchlings/fry). Grow-out feed: 28-30% protein (fingerlings/table size). Feed 2-6 times daily depending on fish size. Farm-made feed can reduce costs by 20-30%. Feed conversion ratio target: 1.5-2.0 for carp, 1.2-1.5 for catfish.',
   sections:['Feed Types','Farm-Made Feed','Feeding Rates','Feed Distribution'],
   icon:'🍽',color:'#f0a824',sourcePages:[56,59]},

  {id:'ch12',num:12,title:'Water Quality',summary:'DO, pH, alkalinity, turbidity, CO₂, ammonia, nitrite, hydrogen sulphide.',
   quickView:'Critical water quality parameters: DO 5-8 mg/L (below 3 = stress, below 1 = mortality), pH 6.8-8.5 (diurnal change should not exceed 0.5), Ammonia 0-0.5 mg/L (toxic above 2), Nitrite 0-1 mg/L (methemoglobinemia above 5), CO₂ more harmful than low oxygen. Alkalinity >100 mg/L CaCO₃ buffers pH. Turbidity affects photosynthesis and predator-prey interaction.',
   sections:['Dissolved Oxygen','pH','Alkalinity & Hardness','Turbidity','CO₂','Ammonia','Nitrite','Hydrogen Sulphide'],sections_detail:['Feed types: (1) Natural — plankton, insects (free, uncontrolled), (2) Supplementary — rice bran, oil cake (mixed with natural food), (3) Complete — formulated pellets (expensive but efficient).','Farm-made feed: rice bran 40%, oil cake 30%, fish meal 15%, wheat flour 10%, vitamin/mineral premix 5%. Cost Rs.25-35/kg vs Rs.60-80/kg commercial.','Feeding rates: fry 8-10% BW/day, fingerlings 5-6%, table fish 2-3%. Feed 4-6 times daily for fry, 2-3 times for table fish. Reduce below 20C.','Feed management: feed at fixed times/places. Remove uneaten feed after 15-20 min. Overfeeding causes water quality deterioration. Underfeeding reduces growth.','Feed analysis: protein 28-35%, fat 5-10%, carbs 25-40%, fiber below 10%, moisture below 12%. Protein:energy ratio important for FCR optimization.'],
   icon:'💧',color:'#1c8c8c',sourcePages:[60,64]},

  {id:'ch13',num:13,title:'Cold Water Fisheries',summary:'Rainbow trout, mahseer, species requirements and management.',
   quickView:'Rainbow Trout requires 5-18°C water temperature, DO 5.8-9.5 mg/L, pH 7-8. Raceway velocity: 2-10 cm/sec. Premium market prices (₹300-500/kg). Suitable for hill states (J&K, Himachal, Uttarakhand, Sikkim) with clean cold water sources. Golden Mahseer: conservation value, ₹500-1000/kg. Both species require pristine, oxygen-rich, cold water.',
   sections:['Rainbow Trout','Pre-Stock Management','Post-Stock Management'],
   icon:'❄',color:'#0a3a40',sourcePages:[65,66]},

  {id:'ch14',num:14,title:'Fish Diseases',summary:'Types of diseases, symptoms, prevention, treatment and management.',
   quickView:'Fish diseases cost India $2.48 billion annually. Types: Environmental (water quality related — 60% of cases), Pathogenic (bacterial, fungal, viral — 25%), Parasitic (15%). Prevention is better than cure — biosecurity, water quality management, and proper stocking reduce disease incidence by 80%. Early detection critical — behavioral changes (surface gasping, loss of appetite, erratic swimming) are first indicators.',
   sections:['Environmental Diseases','Pathogenic Diseases','Parasitic Diseases','Remedial Measures','Treatment Dosages'],sections_detail:['Rainbow Trout: 5-18C, DO above 6 mg/L, pH 7-8. Growth: 200-300g in 12-18 months. Stocking: 30-50 fingerlings/m3 in raceways. Feed: 35-40% protein, 3-4 times daily.','Pre-stock: water temp verification, DO testing, pH check, raceway cleaning, predator net installation, acclimatization (gradual temperature matching).','Post-stock: daily monitoring (temp, DO, pH, ammonia), feed adjustment (reduce below 8C, stop below 5C), mortality removal, cleaning, monthly growth sampling.','Golden Mahseer: prestigious Himalayan species, conservation value (declining wild populations). Cultivation challenging — pristine water, cold temps, high DO. Premium market.','Infrastructure: raceways (concrete channels, 30-50m x 3-5m x 0.5-1m deep), flow-through system (1-2 exchanges/hour), gravity-fed preferred.'],
   icon:'🔬',color:'#c0432f',sourcePages:[67,72]},

  {id:'ch15',num:15,title:'Processing & Value Addition',summary:'Harvesting, drying, smoking, chilling, freezing, value addition.',
   quickView:'Processing capacity utilization in India: <20%. Major methods: sun drying (traditional, slow, weather-dependent), mechanical drying (50-70°C, controlled), smoking (80-150°C, 2-4 hours, flavor preservation), chilling (0-4°C, fresh fish shelf life 5-7 days), blast freezing (-40°C, shelf life 6-12 months). Value addition: fish meal, fish oil, surimi, fish paste, pickled fish, canned fish. Processing extends shelf life and increases value 2-5x.',
   sections:['Harvesting','Drying','Smoking','Chilling & Freezing','Value Addition'],
   icon:'📦',color:'#c85a2e',sourcePages:[73,79]},

  {id:'ch16',num:16,title:'Ornamental Fishery',summary:'Classification, breeding, rearing, food, diseases, marketing.',
   quickView:'India has 374+ freshwater and 700+ marine ornamental species. 200+ species bred domestically. 85% native species from NE India. Key species: Guppy, Swordtail, Goldfish, Angelfish, Betta, Discus. Livebearing species (Guppy, Swordtail) easier for beginners. Egg layers (Goldfish, Angelfish) require specific breeding conditions. Market growing 15-20% annually. Women SHGs particularly suitable — small space, low investment.',
   sections:['Classification','Rearing/Breeding','Livebearer Breeding','Egg Layer Breeding','Food & Feeding','Diseases','Packing & Marketing'],sections_detail:['Harvesting: seine netting (common for ponds), drain harvesting (complete), cast net (selective), hook and line (small scale). Timing: early morning for fresh market.','Drying: sun drying (2-5 days, traditional), mechanical (50-70C, 4-8 hrs, hygienic), solar drying (hybrid — Rs.50K-2L investment, weather-independent).','Smoking: hot smoking (80-150C, 2-4 hrs, cooks + preserves), cold smoking (20-30C, days, flavor). Traditional Chorai smoking in Assam. Adds distinctive flavor.','Chilling/Freezing: ice (0-4C, 5-7 days), blast freezing (-40C, rapid — minimizes ice crystal damage), plate freezing (-35C, 2-4 hrs), cold storage (-18C, 6-12 months).','Value addition: fish meal (60-65% protein), fish oil (omega-3), surimi (minced paste), pickling, curing. Processing extends shelf life 2-5x and increases value.'],
   icon:'🐠',color:'#f0a824',sourcePages:[80,92]},

  {id:'ch17',num:17,title:'Aquaponics',summary:'Components, media bed technique, NFT, DWC.',
   quickView:'Aquaponics combines fish and plant farming — fish waste provides nutrients for plants, plants filter water for fish. 80% water to fish tanks, 20% to grow beds. Three techniques: Media Bed (expanded clay/gravel — most common), NFT (Nutrient Film Technique — thin water film in channels), DWC (Deep Water Culture — floating rafts). Dual income from fish + vegetables. pH management challenging — fish prefer 6.5-7.5, plants prefer 5.5-6.5.',
   sections:['Essential Components','Media Bed Technique','Nutrient Film Technique','Deep Water Culture'],
   icon:'🌱',color:'#3f8f5f',sourcePages:[93,100]},

  {id:'ch18',num:18,title:'Integrated Farming',summary:'Fish-rice, fish-horticulture, fish-poultry, fish-pig, fish-dairy.',
   quickView:'Integrated farming creates synergies between fish and other farm components. Fish-cum-poultry: 500-600 birds/ha, poultry waste fertilizes fish pond, 20-25% more returns than aquaculture alone. Fish-cum-pig: 100 piglets/ha, pig waste directly feeds fish. Fish-rice: rice bunds and shallow margins used for fish, rice provides shade and insects. Fish-horticulture: pond bunds grow vegetables, nutrient-rich water irrigates crops.',
   sections:['Fish-Agricultural Integration','Fish-Animal Husbandry Integration'],sections_detail:['Components: fish tank (100-500L), grow bed (30cm deep), water pump (full volume/hour), air pump, plumbing (PVC), growing media (clay/gravel/perlite), biofilter.','Media Bed: most common for beginners. Expanded clay/gravel. Ebb-and-flow or constant flow. Media provides bacteria surface area. Good for herbs, leafy greens.','NFT: thin film of water in sloped channels. Plants in net pots. Good for lettuce, basil, spinach. Less media cost but vulnerable to pump failure.','DWC: plants float on rafts over deep water (20-30cm). Roots dangle in water. Best for commercial — easy harvest, uniform growth. Needs good aeration.','Fish-plant balance: start 1 kg fish per 5-10L grow bed volume. Stock slowly over 4-6 weeks. Add plants as waste accumulates. Monitor ammonia, nitrite, nitrate.'],
   icon:'🔗',color:'#5c8a3a',sourcePages:[101,108]},

  {id:'ch19',num:19,title:'Solar Technologies',summary:'Solar aerators, solar biofloc, solar RAS, solar transport, solar dryers.',
   quickView:'Solar technology field ROI: Nursery pond aeration — 3179% income increase, ₹1.9 lakh investment. Live fish transport — 54% income increase, ₹76,460 investment, 415% ROI. Fish feed mill — 20% feed cost reduction, ₹2 lakh investment. Solar biofloc — 17% income increase, ₹15 lakh investment. Solar RAS — 18% income increase, ₹15.68 lakh investment. All technologies field-validated in Assam, Jharkhand, and Odisha.',
   sections:['Nursery Pond Aeration','Grow-out Aeration','Solar Biofloc','Solar RAS','Solar Paddlewheel','Solar Aquaponics','Solar Ornamental','Solar Water Pump','Solar Feed Mill','Solar Fish Transport','Solar Fish Dryer'],
   icon:'☀',color:'#f0a824',sourcePages:[109,119]},

  {id:'ch20',num:20,title:'Record Keeping',summary:'Production records, financial records, health records, templates.',
   quickView:'Essential records: production (stocking, growth, harvest), financial (income, expenses, profit), health (mortality, treatments, observations), feed (quantity, type, cost), inventory (seed, feed, equipment). Update daily. Store digital and physical copies. Review weekly/monthly. Records enable data-driven decisions, improve efficiency, and are required for bank loans and government scheme applications.',
   sections:['Production Records','Financial Records','Health Records','Feed Records','Templates'],sections_detail:['Solar Nursery Pond Aeration: Rs.1.9L, 1-2 KW panel, diffuser. Survival 3x increase (15% to 45%), income +Rs.50K. ROI 2.13 yrs. Assam field data.','Solar Jet/Fountain: Rs.5.8L, 3-5 KW panel. 20% survival increase, income +46.5%. Grow-out ponds 0.5-2 acres.','Solar Biofloc: Rs.15L, 5-8 KW panel. Flood-proof. Income +17%. 5-10 tank system. Critical for Assam/Jharkhand flooding areas.','Solar RAS: Rs.15.68L, 8-12 KW panel. Year-round production. Income +18%. Battery backup needed for night. Best peri-urban.','Solar Live Fish Transport: Rs.76,460, 0.5-1 KW panel. Mortality 50% to 0%. Income +54%. ROI 415%. Rural to urban markets.','Solar Feed Mill: Rs.2L, 2-3 KW panel. 60 kg/hr production. Feed cost -20%. Sambalpur, Odisha field data.','Solar Fish Dryer: Rs.80K-1.5L. Drying 3-5 days to 6-8 hrs. Hygienic, weather-independent. 25-30% higher market price.'],
   icon:'📝',color:'#0e4f56',sourcePages:[120,125]}
];

export const SOLAR_TECH = [
  {id:'sol_nursery',name:'Solar Nursery Pond Aeration (Diffuser)',problem:'Unreliable electricity kills nursery fish during power outages',
   location:'Kalong Kapili, Assam',geography:'Rural areas with unreliable grid',
   specs:{capacity:'Solar panel 1-2 KW',aeration:'Diffuser type',coverage:'Nursery pond'},
   capex:'₹1,90,000',roi:'2.13',impact:'Nursery survival increased 3-fold, income increase ₹50,000',
    incomeIncrease:'3179.1%',limitations:['Requires direct sunlight','Battery storage adds cost','Maintenance of solar panels'],
    validationStatus:'Field validated',sourcePages:[109,112]},

  {id:'sol_jet',name:'Solar Jet & Fountain Aerator',problem:'Grow-out ponds need continuous aeration, grid electricity unreliable',
   location:'Field implementation',geography:'Rural and peri-urban areas',
   specs:{capacity:'Solar panel 3-5 KW',aeration:'Jet and fountain type',coverage:'Grow-out pond'},
   capex:'₹5,80,000',roi:'0.5',impact:'20% survival increase, grow-out improvement',
   incomeIncrease:'46.5%',limitations:['High capital cost','Requires maintenance','Weather dependent'],
   validationStatus:'Field validated',sourcePages:[112,114]},

  {id:'sol_biofloc',name:'Solar Biofloc System',problem:'Biofloc requires 24/7 aeration, power cuts cause fish mortality',
   location:'Giridih, Jharkhand',geography:'Flood-prone and off-grid areas',
   specs:{capacity:'Solar panel 5-8 KW',system:'Biofloc with solar aeration',tanks:'5-10 tanks'},
   capex:'₹15,00,000',roi:'0.4',impact:'Flood-proof technology, 17% income increase',
   incomeIncrease:'17%',limitations:['Very high capital cost','Technical expertise needed','Flood risk to infrastructure'],
   validationStatus:'Field validated',sourcePages:[114,116]},

  {id:'sol_ras',name:'Solar RAS',problem:'RAS needs continuous power for pumps, filters, and UV systems',
   location:'Field implementation',geography:'Urban and peri-urban areas',
   specs:{capacity:'Solar panel 8-12 KW',system:'RAS with solar power',production:'60-80 kg/m³'},
   capex:'₹15,67,760',roi:'0.56',impact:'18% income increase, year-round production',
   incomeIncrease:'18%',limitations:['Very high capital cost','Complex system','Expert management needed','Battery storage critical'],
   validationStatus:'Field validated',sourcePages:[116,117]},

  {id:'sol_paddlewheel',name:'Solar Paddlewheel Aerator (Shrimp)',problem:'Shrimp farms need intensive aeration, electricity costs high',
   location:'Balasore, Odisha',geography:'Coastal shrimp farming areas',
   specs:{capacity:'Solar panel 5-8 KW',aeration:'Paddlewheel type',coverage:'Shrimp farm'},
   capex:'₹20,00,000',roi:'0.24',impact:'5g shrimp weight gain, 0.3 FCR improvement, 20% survival increase',
   incomeIncrease:'20%',limitations:['Very high capital cost','Maintenance intensive','Specific to shrimp farming'],
   validationStatus:'Field validated',sourcePages:[117,118]},

  {id:'sol_ornamental',name:'Solar Ornamental Fish Breeding',problem:'Ornamental fish breeding needs stable aeration and heating',
   location:'Ranchi, Jharkhand / Darrang, Assam',geography:'Urban and rural areas',
   specs:{capacity:'Solar panel 1-2 KW',system:'Ornamental breeding with solar'},
   capex:'₹80,000',roi:'0.18',impact:'100% stock survival, 30% income increase',
   incomeIncrease:'30%',limitations:['Species-specific requirements','Market knowledge needed','Breeding expertise required'],
   validationStatus:'Field validated',sourcePages:[118]},

  {id:'sol_transport',name:'Solar Live Fish Transport',problem:'Live fish transport mortality reaches 50% without proper aeration',
   location:'Biswanath, Assam',geography:'Rural to urban transport routes',
   specs:{capacity:'Solar panel 0.5-1 KW',system:'Solar aerated transport containers'},
   capex:'₹76,460',roi:'4.15',impact:'Mortality reduced from 50% to 0%, 54% income increase',
   incomeIncrease:'54%',limitations:['Container capacity limits','Route distance affects mortality','Weather conditions'],
   validationStatus:'Field validated',sourcePages:[118,119]},

  {id:'sol_feedmill',name:'Solar Fish Feed Mill',problem:'Feed constitutes 50-70% of costs, commercial feed expensive',
   location:'Sambalpur, Odisha',geography:'Rural areas with feed production needs',
   specs:{capacity:'Solar panel 2-3 KW',production:'60 kg/hour (large), 15-20 kg/hr (small)'},
   capex:'₹2,00,000',roi:'0.15',impact:'20% feed cost reduction, 60 kg/hour production',
   incomeIncrease:'20% feed savings',limitations:['Raw material sourcing','Quality control needed','Market for surplus feed'],
   validationStatus:'Field validated',sourcePages:[119]},

  {id:'sol_dryer',name:'Solar Fish Dryer',problem:'Traditional sun drying is slow, weather-dependent, and unhygienic',
   location:'Field implementation',geography:'Coastal and inland fish processing areas',
   specs:{capacity:'Solar panel 1-2 KW',drying:'50-70°C controlled'},
   capex:'Not specified',roi:'Not specified',impact:'Faster drying, better quality, hygienic processing',
   incomeIncrease:'Not specified',limitations:['Initial setup cost','Maintenance','Weather still affects solar drying'],
   validationStatus:'Documented',sourcePages:[119]}
];

export const CASE_STUDIES = [
  {id:'cs1',location:'Kalong Kapili, Assam',state:'Assam',
   problem:'Hatchery nurseries suffering high mortality due to unreliable electricity for aeration',
   intervention:'Solar-powered nursery pond aeration using diffuser system',
   before:'High nursery mortality, unreliable electricity dependence',
   after:'3-fold increase in nursery survival, ₹50,000 additional income',
   evidence:'Documented field implementation',
   technology:'Solar nursery pond aeration',sourcePages:[109,112]},

  {id:'cs2',location:'Jharkhand (Multiple sites)',state:'Jharkhand',
   problem:'Fishers dependent on traditional ponds with low productivity',
   intervention:'Cage culture adoption in reservoirs and rivers',
   before:'Low productivity traditional pond farming',
   after:'~30% improvement in economic conditions, monthly incomes rose, occupational migration declined',
   evidence:'Research study documented',
   technology:'Cage culture systems',sourcePages:[37,41]},

  {id:'cs3',location:'Balasore, Odisha',state:'Odisha',
   problem:'Shrimp farms facing high aeration costs and unreliable electricity',
   intervention:'Solar-powered paddlewheel aerators in shrimp ponds',
   before:'High electricity costs, unreliable aeration, low shrimp growth',
   after:'5g weight gain per shrimp, 0.3 FCR improvement, 20% survival increase',
   evidence:'Field documented',
   technology:'Solar paddlewheel aerator',sourcePages:[117,118]},

  {id:'cs4',location:'Sambalpur, Odisha',state:'Odisha',
   problem:'High feed costs (50-70% of production costs), expensive commercial feed',
   intervention:'Solar-powered fish feed mill for on-farm feed production',
   before:'Dependence on expensive commercial feed',
   after:'60 kg/hour production, 20% feed cost reduction',
   evidence:'Field documented',
   technology:'Solar fish feed mill',sourcePages:[119]},

  {id:'cs5',location:'Giridih, Jharkhand',state:'Jharkhand',
   problem:'Flood-prone area, conventional biofloc systems vulnerable to flooding',
   intervention:'Solar-powered biofloc system designed for flood resilience',
   before:'Conventional systems destroyed by floods, unreliable power',
   after:'Flood-proof technology, 17% income increase',
   evidence:'Field documented',
   technology:'Solar biofloc system',sourcePages:[114,116]},

  {id:'cs6',location:'Biswanath (Sootea FPC), Assam',state:'Assam',
   problem:'Live fish transport mortality reaching 50%, fish sold at low prices',
   intervention:'Solar-powered live fish transport containers with aeration',
   before:'50% mortality during transport, fish sold as dead at low price',
   after:'0% mortality, fish sold live at premium price, 54% income increase, breakeven in 5 months',
   evidence:'Field documented',
   technology:'Solar live fish transport',sourcePages:[118,119]},

  {id:'cs7',location:'Ranchi, Jharkhand',state:'Jharkhand',
   problem:'Ornamental fish breeding failure due to power cuts',
   intervention:'Solar-powered ornamental fish breeding unit',
   before:'Stock mortality, unreliable breeding',
   after:'100% stock survival, 30% income increase',
   evidence:'Field documented',
   technology:'Solar ornamental breeding',sourcePages:[118]},

  {id:'cs8',location:'Thoothukudi, Tamil Nadu',state:'Tamil Nadu',
   problem:'Climate change devastating fishing livelihoods, sea level rise, species migration',
   intervention:'Seaweed farming diversification for fishing families',
   before:'Declining catches, shifting breeding seasons, economic stress',
   after:'50+ fishing families diversified to seaweed farming, climate-resilient alternative',
   evidence:'Research study documented',
   technology:'Seaweed farming',sourcePages:[3,4]}
];

export const WATER_QUALITY = [
  {param:'Dissolved Oxygen (DO)',unit:'mg/L',desirable:'5-8',acceptable:'3-8',statusFn:v=>v>=5?'normal':v>=3?'caution':'critical',
   notes:'CO₂ is more harmful than low oxygen. At DO >8 ppm in afternoon, oxygen depletion likely that night.',sourcePage:60},

  {param:'pH',unit:'',desirable:'6.8-8.5',acceptable:'6.5-9.5',statusFn:v=>v>=6.8&&v<=8.5?'normal':v>=6.5&&v<=9.5?'caution':'critical',
   notes:'Diurnal pH change should not exceed 0.5. Fish cannot tolerate pH outside 5-9 range.',sourcePage:61},

  {param:'Carbon Dioxide (CO₂)',unit:'mg/L',desirable:'<5-10',acceptable:'0-10',statusFn:v=>v<=5?'normal':v<=10?'caution':'critical',
   notes:'More harmful to fish than low oxygen. Avoidance level: 5 mg/L. Lethal: >50 mg/L.',sourcePage:62},

  {param:'Alkalinity',unit:'mg/L',desirable:'50-150',acceptable:'75-300',statusFn:v=>v>=50&&v<=150?'normal':v>=75&&v<=300?'caution':'critical',
   notes:'High alkalinity (200-250) with low hardness (<20) is dangerous - afternoon pH can exceed 11.',sourcePage:62},

  {param:'Hardness',unit:'mg/L',desirable:'75-150',acceptable:'30-180',statusFn:v=>v>=75&&v<=150?'normal':v>=30&&v<=180?'caution':'critical',
   notes:'Essential for fish health. Calcium and chloride reduce nitrite toxicity.',sourcePage:62},

  {param:'Turbidity/Transparency',unit:'cm',desirable:'50-60',acceptable:'30-80',statusFn:v=>v>=50&&v<=60?'normal':v>=30&&v<=80?'caution':'critical',
   notes:'Secchi disc measurement. Too clear = low productivity. Too turbid = plankton bloom.',sourcePage:62},

  {param:'Ammonia (TAN)',unit:'mg/L',desirable:'0-0.5',acceptable:'2-8',statusFn:v=>v<=0.5?'normal':v<=2?'caution':'critical',
   notes:'Second most important water quality parameter after oxygen. Toxic to fish.',sourcePage:63},

  {param:'Nitrite',unit:'mg/L',desirable:'0-1',acceptable:'0-2',statusFn:v=>v<=1?'normal':v<=2?'caution':'critical',
   notes:'Toxicity increases with increasing pH. Decreases with calcium/chloride presence.',sourcePage:64},

  {param:'Hydrogen Sulphide',unit:'mg/L',desirable:'0-0.002',acceptable:'0-0.003',statusFn:v=>v<=0.002?'normal':v<=0.003?'caution':'critical',
   notes:'Causes gill damage, liver damage, reduced reproduction. Extremely toxic.',sourcePage:64}
];

export const FEED_TABLE = [
  {weight:'Spawn',size:'Powder',type:'Powder',rate:'20-25%',protein:'40%',freq:'4-6x/day'},
  {weight:'0.3g',size:'0.1-0.5mm',type:'Crumbles',rate:'15%',protein:'40%',freq:'4-6x/day'},
  {weight:'5g',size:'1.0mm',type:'Crumbles',rate:'8%',protein:'40%',freq:'4x/day'},
  {weight:'30g',size:'2mm',type:'Floating pellets',rate:'4%',protein:'40%',freq:'2-4x/day'},
  {weight:'100g',size:'3.0mm',type:'Floating pellets',rate:'2.5%',protein:'32%',freq:'2-3x/day'},
  {weight:'250g',size:'3mm',type:'Floating pellets',rate:'1.5%',protein:'30%',freq:'2x/day'},
  {weight:'500g',size:'4mm',type:'Floating pellets',rate:'1.3%',protein:'28%',freq:'2x/day'},
  {weight:'750g',size:'4mm',type:'Floating pellets',rate:'1.1%',protein:'24%',freq:'2x/day'},
  {weight:'1000g',size:'6mm',type:'Floating pellets',rate:'1.0%',protein:'20%',freq:'2x/day'},
  {weight:'>1000g',size:'6mm',type:'Floating pellets',rate:'0.8%',protein:'20%',freq:'2x/day'}
];

export const DISEASES = [
  {name:'Columnaris',agent:'Flavobacterium columnare',symptoms:['White patches on skin','Fin rot','Gill damage','Cotton-like growth'],treatment:'Terramycin 65-80 mg/kg BW for 10 days. Copper sulphate 1-2 ppm.',sourcePage:68},
  {name:'Bacterial Haemorrhagic Septicaemia',agent:'Aeromonas hydrophila',symptoms:['Hemorrhages on body','Exophthalmia','Dark body color','Fluid accumulation'],treatment:'Terramycin 65-80 mg/kg BW for 10 days. Improve water quality.',sourcePage:68},
  {name:'Edwardsiellosis',agent:'Edwardsiella tarda',symptoms:['External hemorrhages','Ulcers','Swollen abdomen','Pop-eye'],treatment:'Oxytetracycline 5 mg/kg fish. Improve water quality.',sourcePage:69},
  {name:'Fin Rot',agent:'Pseudomonas / Aeromonas',symptoms:['Eroded fins','Reddened fin base','Tissue decay'],treatment:'Copper sulphate 1:2,000 for 2 min. Potassium permanganate 2 ppm.',sourcePage:69},
  {name:'Dropsy',agent:'Bacterial infection',symptoms:['Swollen abdomen','Scales protruding','Lethargy','Loss of appetite'],treatment:'Slaked lime 100 kg/ha. Antibiotics if severe.',sourcePage:69},
  {name:'EUS (Epizootic Ulcerative Syndrome)',agent:'Fungal + Bacterial',symptoms:['Skin ulcers','Red lesions','Scale loss','Secondary infections'],treatment:'CuSO₄ 100-200g/100L, spray 1-2 kg/ha. Slaked lime 400-600 kg/ha.',sourcePage:69},
  {name:'Saprolegniasis',agent:'Saprolegnia sp. (Fungus)',symptoms:['Cotton-like growth','Fungal patches','Egg fungal infection'],treatment:'KMnO₄ 100g/100L for 10 min. CuSO₄ 100g/100L for 1 min.',sourcePage:70},
  {name:'Costiasis',agent:'Ichthyophthirius (Protozoan)',symptoms:['White spots on body','Flashing behavior','Mucus excess','Respiratory distress'],treatment:'Formalin 200-250 ppm dip. Malachite green 0.1 ppm.',sourcePage:71},
  {name:'Argulosis',agent:'Argulus (Fish Louse)',symptoms:['Visible parasites','Skin wounds','Reddened areas','Behavioral changes'],treatment:'Cleaner 1-1.5 liter/ha. Manual removal if possible.',sourcePage:71}
];

export const GLOSSARY = [
  {term:'Aeration',def:'The process of adding air/oxygen to water to maintain dissolved oxygen levels for fish survival.'},
  {term:'Biofloc',def:'A system where microbial communities (flocs) convert fish waste into protein, reducing feed costs and water exchange.'},
  {term:'Biomass',def:'Total weight of fish in a pond/tank at a given time, usually measured in kg.'},
  {term:'Brooder',def:'Mature fish selected for breeding purposes.'},
  {term:'C:N Ratio',def:'Carbon to Nitrogen ratio, critical in biofloc systems. Target: 12:1 to 15:1.'},
  {term:'DO (Dissolved Oxygen)',def:'Amount of oxygen dissolved in water. Critical for fish survival. Desirable: 5-8 mg/L.'},
  {term:'FCR (Feed Conversion Ratio)',def:'Ratio of feed consumed to weight gain. Lower FCR = better feed efficiency.'},
  {term:'Fingerling',def:'Young fish larger than 5.1 cm but not yet mature. Stocking size for grow-out.'},
  {term:'FRP',def:'Fiber Reinforced Plastic. Used for hatchery tanks and equipment.'},
  {term:'Hapa',def:'Net enclosure used in ponds or water bodies for holding fish at various stages.'},
  {term:'Hypophysation',def:'Technique of injecting hormones to induce breeding in fish.'},
  {term:'IMC',def:'Indian Major Carps - Catla, Rohu, and Mrigal.'},
  {term:'Nursery',def:'System for rearing hatchlings into fry and fingerlings.'},
  {term:'pH',def:'Measure of water acidity/alkalinity. Desirable for fish: 6.8-8.5.'},
  {term:'RAS',def:'Recirculating Aquaculture System - water is filtered and reused with >90% recirculation.'},
  {term:'SIS',def:'Small Indigenous Species - nutrient-rich small fish important for rural nutrition.'},
  {term:'Spawn',def:'Newly hatched fish larvae, 0.6-1.5 cm in size.'},
  {term:'Stocking',def:'The act of introducing fish seed into prepared ponds or tanks.'},
  {term:'TAN',def:'Total Ammonia Nitrogen. Toxic to fish above 0.5 mg/L.'},
  {term:'Zeolite',def:'Mineral used to absorb ammonia from water. Application: 200 kg/ha.'}
];

export const VALUE_CHAIN = [
  {step:1,name:'Input Stage',desc:'Fish seed, feed, and medication production and supply',icon:'🌱',color:'#5c8a3a'},
  {step:2,name:'Hatchery',desc:'FRP hatcheries, breeding, spawn production',icon:'🥚',color:'#1c8c8c'},
  {step:3,name:'Nursery',desc:'Rearing spawn into fry and fingerlings',icon:'🐥',color:'#3f8f5f'},
  {step:4,name:'Grow-out',desc:'Ponds, cages, biofloc, RAS - growing fish to market size',icon:'🐟',color:'#0e4f56'},
  {step:5,name:'Harvest',desc:'Catching and handling mature fish',icon:'🎣',color:'#c85a2e'},
  {step:6,name:'Processing',desc:'Drying, smoking, chilling, freezing, value addition',icon:'📦',color:'#f0a824'},
  {step:7,name:'Transport',desc:'Live fish transport, cold chain, logistics',icon:'🚛',color:'#0a3a40'},
  {step:8,name:'Market',desc:'Retail, wholesale, direct sales, export',icon:'🏪',color:'#7a4a96'}
];

export const DECISION_PATHS = [
  {id:'start_farming',title:'I am starting fish farming',icon:'🚀',desc:'Begin your aquaculture journey with the right foundation',
   questions:['What water source do you have?','How much land is available?','What is your budget range?','Do you have electricity access?'],
   sections:['ch1','ch3','ch4','ch5']},

  {id:'have_pond',title:'I already have a pond',icon:'💧',desc:'Optimize your existing pond for fish production',
   questions:['What is the pond size?','What is the water quality?','Is the pond prepared?','What species are you interested in?'],
   sections:['ch3','ch12','ch4','ch6']},

  {id:'choose_species',title:'I need to choose fish species',icon:'🐟',desc:'Find the best species for your conditions',
   questions:['What water temperature do you have?','What farming system will you use?','What is your market target?','What is your experience level?'],
   sections:['ch4']},

  {id:'fish_stress',title:'My fish are showing signs of stress',icon:'😟',desc:'Troubleshoot and resolve fish health issues',
   questions:['What symptoms are you observing?','When did symptoms start?','What is your water quality?','Have you changed anything recently?'],
   sections:['ch14','ch12']},

  {id:'improve_do',title:'I need to improve dissolved oxygen',icon:'💨',desc:'Solutions for low oxygen problems',
   questions:['What is your current DO level?','What time of day?','What is your pond type?','Do you have aeration equipment?'],
   sections:['ch12','ch7']},

  {id:'reduce_feed',title:'I want to reduce feed costs',icon:'💰',desc:'Lower your biggest production expense',
   questions:['What is your current feed cost?','What species are you farming?','Do you have access to raw materials?','What is your farming system?'],
   sections:['ch11','ch9','ch18']},

  {id:'biofloc_ras',title:'I am considering biofloc or RAS',icon:'🔄',desc:'Evaluate intensive farming systems',
   questions:['What is your technical experience?','What capital can you invest?','What is your energy reliability?','What species interest you?'],
   sections:['ch9','ch10']},

  {id:'post_harvest',title:'I need a post-harvest solution',icon:'📦',desc:'Process and preserve your harvest',
   questions:['What products do you want to process?','What equipment do you have?','What is your market?','What is your scale?'],
   sections:['ch15']},

  {id:'solar',title:'I want to explore solar equipment',icon:'☀',desc:'Solar-powered solutions for your farm',
   questions:['What is your main energy challenge?','What equipment needs power?','What is your budget?','What is your location?'],
   sections:['ch19']},

  {id:'records',title:'I need to maintain farm records',icon:'📝',desc:'Track your farm performance and profitability',
   questions:['What records do you need?','What is your current tracking method?','Do you want digital or paper?','What data matters most?'],
   sections:['ch20']}
];

export const RECORD_TYPES = [
  {id:'pond_profile',name:'Pond/Tank Profile',fields:['pondName','area','depth','type','waterSource','dateEstablished']},
  {id:'stocking',name:'Stocking Record',fields:['pondName','date','species','seedSize','quantity','cost','source']},
  {id:'feed_log',name:'Daily Feed Log',fields:['pondName','date','feedType','quantityKg','feedingTime','weather']},
  {id:'water_quality',name:'Water Quality Log',fields:['pondName','date','do','ph','temperature','ammonia','nitrite','turbidity','weather']},
  {id:'mortality',name:'Mortality Log',fields:['pondName','date','count','cause','size','action']},
  {id:'treatment',name:'Treatment Log',fields:['pondName','date','diagnosis','treatment','dose','duration','outcome']},
  {id:'sampling',name:'Fish Sampling Log',fields:['pondName','date','sampleSize','avgWeight','biomass','species']},
  {id:'harvest',name:'Harvest & Sales Record',fields:['pondName','date','quantityKg','avgSize','pricePerKg','totalIncome','buyer']},
  {id:'expense',name:'Income & Expense',fields:['date','category','description','amount','type']},
  {id:'solar',name:'Solar Operating Hours',fields:['equipment','date','hoursStart','hoursEnd','output','notes']}
];

export const KEY_STATS = [
  {value:'17M',label:'Metric tonnes of fish produced annually',source:'Ch 1, p.1'},
  {value:'3Cr+',label:'People dependent on fisheries',source:'Ch 1, p.1'},
  {value:'55%',label:'Fish production from aquaculture',source:'Ch 1, p.2'},
  {value:'30%',label:'India\'s farmed fish from Andhra Pradesh',source:'Ch 1, p.2'},
  {value:'$2.48B',label:'Annual disease cost to India\'s industry',source:'Ch 14, p.67'},
  {value:'50-70%',label:'Feed cost as % of total production',source:'Ch 11, p.56'},
  {value:'3x',label:'Nursery survival increase with solar aeration',source:'Ch 19, p.109'},
  {value:'54%',label:'Income increase from solar fish transport',source:'Ch 19, p.118'}
];

export const TOOLS = [
  {id:'water_quality',name:'Water Quality Reference',icon:'💧',desc:'Check water parameters and their safe ranges',chapter:'ch12'},
  {id:'stocking_calc',name:'Stocking Density Calculator',icon:'🐟',desc:'Calculate recommended stocking density for your pond',chapter:'ch5'},
  {id:'feed_calc',name:'Feed & FCR Calculator',icon:'🍽',desc:'Calculate feed requirements and feed conversion ratio',chapter:'ch11'},
  {id:'solar_matcher',name:'Solar Solution Matcher',icon:'☀',desc:'Find the right solar technology for your needs',chapter:'ch19'},
  {id:'pond_checklist',name:'Pond Preparation Checklist',icon:'✅',desc:'Step-by-step pond preparation guide',chapter:'ch3'},
  {id:'species_filter',name:'Species Explorer',icon:'🐠',desc:'Filter and compare fish species',chapter:'ch4'},
  {id:'system_compare',name:'System Comparison',icon:'⚖',desc:'Compare farming systems side by side',chapter:null}
];
