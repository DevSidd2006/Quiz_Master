const quizQuestions = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Jupiter", "Mars", "Venus", "Saturn"],
                correct: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                correct: 1
            },
            {
                question: "Which country is home to the kangaroo?",
                options: ["New Zealand", "South Africa", "Australia", "Brazil"],
                correct: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Tiger", "Lion", "Elephant", "Gorilla"],
                correct: 1
            },
            {
                question: "What is the main language spoken in Brazil?",
                options: ["Spanish", "Portuguese", "English", "French"],
                correct: 1
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Mars", "Mercury", "Earth"],
                correct: 2
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Won", "Yen", "Ringgit"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Which element has the chemical symbol 'Au'?",
                options: ["Silver", "Copper", "Gold", "Aluminum"],
                correct: 2
            },
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Sahara", "Gobi", "Arabian", "Antarctic"],
                correct: 3
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "South Korea", "Japan", "Vietnam"],
                correct: 2
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "Which city is known as the 'City of Love'?",
                options: ["Venice", "Rome", "Paris", "Barcelona"],
                correct: 2
            },
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "China", "USA", "France"],
                correct: 3
            },
            {
                question: "What is the largest island in the world?",
                options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who wrote 'The Canterbury Tales'?",
                options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Charles Dickens"],
                correct: 0
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Liver", "Skin", "Brain"],
                correct: 2
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Mayans"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for silver?",
                options: ["Si", "S", "Ag", "Au"],
                correct: 2
            },
            {
                question: "Which country has the most UNESCO World Heritage Sites?",
                options: ["China", "Italy", "Spain", "France"],
                correct: 1
            },
            {
                question: "What is the deepest point in the ocean?",
                options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Tonga Trench"],
                correct: 1
            },
            {
                question: "Which language has the most native speakers?",
                options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
                correct: 3
            },
            {
                question: "What is the largest volcano in the solar system?",
                options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Mount Kilimanjaro"],
                correct: 1
            },
            {
                question: "Which country has the most islands?",
                options: ["Indonesia", "Philippines", "Sweden", "Norway"],
                correct: 2
            },
            {
                question: "What is the oldest continuously inhabited city in the world?",
                options: ["Jerusalem", "Athens", "Damascus", "Rome"],
                correct: 2
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the chemical formula for water?",
                options: ["CO2", "H2O", "O2", "N2"],
                correct: 1
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 1
            },
            {
                question: "What is the boiling point of water in Celsius?",
                options: ["90°C", "100°C", "110°C", "120°C"],
                correct: 1
            },
            {
                question: "Which planet is known as the 'Morning Star'?",
                options: ["Mars", "Venus", "Jupiter", "Mercury"],
                correct: 1
            },
            {
                question: "What is the main component of the Sun?",
                options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
                correct: 1
            },
            {
                question: "Which organ pumps blood throughout the body?",
                options: ["Liver", "Heart", "Lungs", "Brain"],
                correct: 1
            },
            {
                question: "What is the largest bone in the human body?",
                options: ["Skull", "Femur", "Spine", "Pelvis"],
                correct: 1
            },
            {
                question: "Which gas makes up most of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2
            },
            {
                question: "What is the process by which plants make their food?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
                correct: 1
            },
            {
                question: "Which planet has the most moons?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                correct: 3
            }
        ],
        medium: [
            {
                question: "What is the speed of light in vacuum?",
                options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "249,792 km/s"],
                correct: 0
            },
            {
                question: "What is the pH value of pure water?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                correct: 1
            },
            {
                question: "What is the unit of electrical resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2
            },
            {
                question: "Which scientist proposed the theory of relativity?",
                options: ["Newton", "Einstein", "Galileo", "Hawking"],
                correct: 1
            },
            {
                question: "What is the chemical symbol for potassium?",
                options: ["P", "K", "Po", "Pt"],
                correct: 1
            },
            {
                question: "Which planet has the Great Red Spot?",
                options: ["Mars", "Jupiter", "Saturn", "Neptune"],
                correct: 1
            },
            {
                question: "What is the study of fossils called?",
                options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
                correct: 1
            },
            {
                question: "Which vitamin is produced by the human body when exposed to sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                correct: 3
            },
            {
                question: "What is the chemical symbol for iron?",
                options: ["Ir", "Fe", "In", "I"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                options: [
                    "Position and momentum cannot be measured simultaneously",
                    "Energy is always conserved",
                    "Matter cannot be created or destroyed",
                    "Light behaves as both wave and particle"
                ],
                correct: 0
            },
            {
                question: "What is the chemical formula for ozone?",
                options: ["O2", "O3", "O4", "O5"],
                correct: 1
            },
            {
                question: "Which scientist discovered penicillin?",
                options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
                correct: 1
            },
            {
                question: "What is the study of the behavior of matter at very low temperatures called?",
                options: ["Thermodynamics", "Cryogenics", "Quantum Physics", "Nuclear Physics"],
                correct: 1
            },
            {
                question: "Which element is liquid at room temperature?",
                options: ["Bromine", "Mercury", "Gallium", "All of the above"],
                correct: 3
            },
            {
                question: "What is the chemical symbol for tungsten?",
                options: ["T", "W", "Tu", "Tn"],
                correct: 1
            },
            {
                question: "Which scientist first proposed the concept of atoms?",
                options: ["Aristotle", "Democritus", "Plato", "Socrates"],
                correct: 1
            },
            {
                question: "What is the study of the origin and evolution of the universe called?",
                options: ["Astronomy", "Cosmology", "Astrophysics", "Quantum Physics"],
                correct: 1
            },
            {
                question: "Which element has the highest melting point?",
                options: ["Tungsten", "Carbon", "Osmium", "Rhenium"],
                correct: 0
            },
            {
                question: "What is the chemical symbol for lead?",
                options: ["Ld", "Le", "Pb", "Pl"],
                correct: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "In which year did World War I begin?",
                options: ["1912", "1914", "1916", "1918"],
                correct: 1
            },
            {
                question: "Which ancient civilization built the Great Wall of China?",
                options: ["Mongols", "Japanese", "Chinese", "Koreans"],
                correct: 2
            },
            {
                question: "Who was the first man to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek", "Roman", "Egyptian", "Persian"],
                correct: 1
            },
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1912", "1914", "1916"],
                correct: 1
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                options: ["Theresa May", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                correct: 1
            },
            {
                question: "Which country was the first to use paper money?",
                options: ["Greece", "Rome", "China", "India"],
                correct: 2
            },
            {
                question: "Who was the first emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                correct: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "In which year did the French Revolution begin?",
                options: ["1789", "1776", "1804", "1812"],
                correct: 0
            },
            {
                question: "Who was the first female pharaoh of Egypt?",
                options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Nefertari"],
                correct: 2
            },
            {
                question: "Which civilization built Machu Picchu?",
                options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
                correct: 2
            },
            {
                question: "Who was the first European to reach India by sea?",
                options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
                correct: 1
            },
            {
                question: "In which year did the American Civil War end?",
                options: ["1863", "1865", "1867", "1869"],
                correct: 1
            },
            {
                question: "Who was the first emperor of China?",
                options: ["Confucius", "Qin Shi Huang", "Sun Tzu", "Lao Tzu"],
                correct: 1
            },
            {
                question: "Which ancient city was destroyed by the eruption of Mount Vesuvius?",
                options: ["Athens", "Rome", "Pompeii", "Sparta"],
                correct: 2
            },
            {
                question: "Who was the first European to reach North America?",
                options: ["Christopher Columbus", "Leif Erikson", "John Cabot", "Amerigo Vespucci"],
                correct: 1
            },
            {
                question: "In which year did the Russian Revolution begin?",
                options: ["1915", "1917", "1919", "1921"],
                correct: 1
            },
            {
                question: "Who was the first female ruler of England?",
                options: ["Elizabeth I", "Mary I", "Victoria", "Anne"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who was the last emperor of the Byzantine Empire?",
                options: ["Constantine XI", "Justinian I", "Heraclius", "Basil II"],
                correct: 0
            },
            {
                question: "Which ancient civilization invented the concept of zero?",
                options: ["Greeks", "Romans", "Egyptians", "Indians"],
                correct: 3
            },
            {
                question: "Who was the first European to reach Japan?",
                options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Francis Xavier"],
                correct: 3
            },
            {
                question: "In which year did the Black Death reach Europe?",
                options: ["1346", "1350", "1360", "1370"],
                correct: 0
            },
            {
                question: "Who was the first female ruler of Russia?",
                options: ["Catherine the Great", "Elizabeth I", "Anna Ivanovna", "Catherine I"],
                correct: 3
            },
            {
                question: "Which ancient civilization built the city of Petra?",
                options: ["Egyptians", "Nabataeans", "Phoenicians", "Assyrians"],
                correct: 1
            },
            {
                question: "Who was the first European to reach Australia?",
                options: ["James Cook", "Willem Janszoon", "Abel Tasman", "William Dampier"],
                correct: 1
            },
            {
                question: "In which year did the Hundred Years' War begin?",
                options: ["1337", "1345", "1350", "1360"],
                correct: 0
            },
            {
                question: "Who was the first European to reach the Pacific Ocean?",
                options: ["Christopher Columbus", "Vasco Núñez de Balboa", "Ferdinand Magellan", "Hernán Cortés"],
                correct: 1
            },
            {
                question: "Which ancient civilization built the city of Tikal?",
                options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
                correct: 1
            }
        ]
    },
    geography: {
        easy: [
            {
                question: "What is the largest continent?",
                options: ["North America", "Africa", "Europe", "Asia"],
                correct: 3
            },
            {
                question: "Which country has the most population?",
                options: ["India", "China", "USA", "Indonesia"],
                correct: 1
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which ocean is the largest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "What is the longest river in Africa?",
                options: ["Congo", "Nile", "Niger", "Zambezi"],
                correct: 1
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "South Korea", "Japan", "Vietnam"],
                correct: 2
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                correct: 2
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Gobi", "Arabian", "Antarctic"],
                correct: 3
            },
            {
                question: "What is the capital of South Africa?",
                options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
                correct: 2
            },
            {
                question: "Which country has the most islands?",
                options: ["Indonesia", "Philippines", "Sweden", "Norway"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Which river is the longest in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "China", "USA", "France"],
                correct: 3
            },
            {
                question: "What is the largest island in the world?",
                options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
                correct: 1
            },
            {
                question: "Which country is the smallest by land area?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "What is the capital of New Zealand?",
                options: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
                correct: 1
            },
            {
                question: "Which country has the most lakes?",
                options: ["Russia", "Canada", "USA", "Finland"],
                correct: 1
            },
            {
                question: "What is the highest mountain in Africa?",
                options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Mount Meru"],
                correct: 1
            },
            {
                question: "Which country has the longest coastline?",
                options: ["Russia", "Canada", "USA", "Australia"],
                correct: 1
            },
            {
                question: "What is the capital of Argentina?",
                options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which country has the most UNESCO World Heritage Sites?",
                options: ["China", "Italy", "Spain", "France"],
                correct: 1
            },
            {
                question: "What is the deepest point in the ocean?",
                options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Tonga Trench"],
                correct: 1
            },
            {
                question: "Which country has the most active volcanoes?",
                options: ["Japan", "Indonesia", "USA", "Chile"],
                correct: 1
            },
            {
                question: "What is the largest lake by volume?",
                options: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Victoria"],
                correct: 2
            },
            {
                question: "Which country has the most rivers?",
                options: ["Russia", "Brazil", "China", "USA"],
                correct: 1
            },
            {
                question: "What is the capital of Bhutan?",
                options: ["Paro", "Thimphu", "Punakha", "Wangdue Phodrang"],
                correct: 1
            },
            {
                question: "Which country has the most borders with other countries?",
                options: ["Russia", "China", "Brazil", "Germany"],
                correct: 1
            },
            {
                question: "What is the largest salt flat in the world?",
                options: ["Salar de Uyuni", "Bonneville Salt Flats", "Etosha Pan", "Makgadikgadi Pan"],
                correct: 0
            },
            {
                question: "Which country has the most official languages?",
                options: ["India", "South Africa", "Switzerland", "Bolivia"],
                correct: 1
            },
            {
                question: "What is the capital of Myanmar?",
                options: ["Yangon", "Mandalay", "Naypyidaw", "Bagan"],
                correct: 2
            }
        ]
    },
    sports: {
        easy: [
            {
                question: "In which sport would you perform a slam dunk?",
                options: ["Football", "Basketball", "Tennis", "Golf"],
                correct: 1
            },
            {
                question: "How many players are there in a standard soccer team?",
                options: ["9", "10", "11", "12"],
                correct: 2
            },
            {
                question: "Which sport uses a shuttlecock?",
                options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
                correct: 1
            },
            {
                question: "In which sport would you use a putter?",
                options: ["Golf", "Hockey", "Cricket", "Baseball"],
                correct: 0
            },
            {
                question: "How many players are there in a standard basketball team?",
                options: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "Which sport uses a net and a ball but no racket?",
                options: ["Tennis", "Volleyball", "Badminton", "Squash"],
                correct: 1
            },
            {
                question: "In which sport would you use a bat and a ball?",
                options: ["Football", "Basketball", "Cricket", "Hockey"],
                correct: 2
            },
            {
                question: "How many players are there in a standard baseball team?",
                options: ["8", "9", "10", "11"],
                correct: 1
            },
            {
                question: "Which sport uses a puck?",
                options: ["Football", "Hockey", "Basketball", "Baseball"],
                correct: 1
            },
            {
                question: "In which sport would you use a racket and a ball?",
                options: ["Football", "Basketball", "Tennis", "Hockey"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "How many players are there in a standard cricket team?",
                options: ["9", "10", "11", "12"],
                correct: 2
            },
            {
                question: "Which sport has the most players on the field at once?",
                options: ["Football", "Rugby", "Cricket", "Baseball"],
                correct: 2
            },
            {
                question: "In which sport would you use a javelin?",
                options: ["Athletics", "Gymnastics", "Swimming", "Cycling"],
                correct: 0
            },
            {
                question: "How many players are there in a standard rugby team?",
                options: ["13", "14", "15", "16"],
                correct: 2
            },
            {
                question: "Which sport uses a discus?",
                options: ["Athletics", "Gymnastics", "Swimming", "Cycling"],
                correct: 0
            },
            {
                question: "In which sport would you use a pole vault?",
                options: ["Athletics", "Gymnastics", "Swimming", "Cycling"],
                correct: 0
            },
            {
                question: "How many players are there in a standard volleyball team?",
                options: ["5", "6", "7", "8"],
                correct: 1
            },
            {
                question: "Which sport uses a hammer?",
                options: ["Athletics", "Gymnastics", "Swimming", "Cycling"],
                correct: 0
            },
            {
                question: "In which sport would you use a high jump?",
                options: ["Athletics", "Gymnastics", "Swimming", "Cycling"],
                correct: 0
            },
            {
                question: "How many players are there in a standard water polo team?",
                options: ["5", "6", "7", "8"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "Who holds the record for most Olympic gold medals?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
                correct: 1
            },
            {
                question: "Which sport has the most expensive equipment?",
                options: ["Formula 1", "Golf", "Sailing", "Equestrian"],
                correct: 0
            },
            {
                question: "In which sport would you use a foil?",
                options: ["Fencing", "Boxing", "Wrestling", "Judo"],
                correct: 0
            },
            {
                question: "Which sport has the most complex scoring system?",
                options: ["Gymnastics", "Figure Skating", "Diving", "Synchronized Swimming"],
                correct: 1
            },
            {
                question: "In which sport would you use a sabre?",
                options: ["Fencing", "Boxing", "Wrestling", "Judo"],
                correct: 0
            },
            {
                question: "Which sport has the most injuries?",
                options: ["Football", "Rugby", "Boxing", "Hockey"],
                correct: 1
            },
            {
                question: "In which sport would you use an épée?",
                options: ["Fencing", "Boxing", "Wrestling", "Judo"],
                correct: 0
            },
            {
                question: "Which sport has the most rules?",
                options: ["Cricket", "Baseball", "American Football", "Rugby"],
                correct: 0
            },
            {
                question: "In which sport would you use a rapier?",
                options: ["Fencing", "Boxing", "Wrestling", "Judo"],
                correct: 0
            },
            {
                question: "Which sport has the most expensive tickets?",
                options: ["Formula 1", "Golf", "Tennis", "Football"],
                correct: 0
            }
        ]
    },
    entertainment: {
        easy: [
            {
                question: "Who played Harry Potter in the Harry Potter films?",
                options: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Matthew Lewis"],
                correct: 0
            },
            {
                question: "Which movie won the first Academy Award for Best Picture?",
                options: ["Gone with the Wind", "Casablanca", "Wings", "The Jazz Singer"],
                correct: 2
            },
            {
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
                correct: 1
            },
            {
                question: "Which TV show features the character Sheldon Cooper?",
                options: ["Friends", "The Big Bang Theory", "How I Met Your Mother", "Modern Family"],
                correct: 1
            },
            {
                question: "Who directed the movie 'Titanic'?",
                options: ["Steven Spielberg", "James Cameron", "George Lucas", "Peter Jackson"],
                correct: 1
            },
            {
                question: "Which band sang 'Bohemian Rhapsody'?",
                options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
                correct: 1
            },
            {
                question: "Who played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                correct: 2
            },
            {
                question: "Which movie features the song 'Let It Go'?",
                options: ["Tangled", "Frozen", "Moana", "Brave"],
                correct: 1
            },
            {
                question: "Who is the creator of the TV show 'Game of Thrones'?",
                options: ["J.K. Rowling", "George R.R. Martin", "Stephen King", "Neil Gaiman"],
                correct: 1
            },
            {
                question: "Which movie won the most Academy Awards?",
                options: ["Titanic", "Ben-Hur", "The Lord of the Rings: The Return of the King", "La La Land"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Which film won the Academy Award for Best Picture in 2020?",
                options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
                correct: 1
            },
            {
                question: "Who was the first actor to win an Oscar?",
                options: ["Charlie Chaplin", "Emil Jannings", "Clark Gable", "Humphrey Bogart"],
                correct: 1
            },
            {
                question: "Which TV show has won the most Emmy Awards?",
                options: ["Game of Thrones", "Saturday Night Live", "The Simpsons", "Friends"],
                correct: 1
            },
            {
                question: "Who directed the movie 'Inception'?",
                options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
                correct: 0
            },
            {
                question: "Which movie was the first to win Best Picture at the Oscars?",
                options: ["Wings", "Sunrise", "The Jazz Singer", "All Quiet on the Western Front"],
                correct: 0
            },
            {
                question: "Who is the most nominated actor in Oscar history?",
                options: ["Jack Nicholson", "Meryl Streep", "Katharine Hepburn", "Laurence Olivier"],
                correct: 1
            },
            {
                question: "Which TV show has the most episodes?",
                options: ["The Simpsons", "Gunsmoke", "Law & Order", "NCIS"],
                correct: 0
            },
            {
                question: "Who directed the movie 'The Godfather'?",
                options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Alfred Hitchcock"],
                correct: 1
            },
            {
                question: "Which movie was the first to be rated PG-13?",
                options: ["Indiana Jones and the Temple of Doom", "Gremlins", "The Dark Knight", "Jaws"],
                correct: 1
            },
            {
                question: "Who is the most awarded actor in Oscar history?",
                options: ["Jack Nicholson", "Daniel Day-Lewis", "Katharine Hepburn", "Meryl Streep"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "Who was the first actor to win an Oscar posthumously?",
                options: ["Heath Ledger", "Peter Finch", "James Dean", "Philip Seymour Hoffman"],
                correct: 1
            },
            {
                question: "Which movie was the first to be shown in 3D?",
                options: ["Avatar", "House of Wax", "The Power of Love", "Dial M for Murder"],
                correct: 2
            },
            {
                question: "Who is the only person to win Oscars for both acting and directing the same film?",
                options: ["Clint Eastwood", "Warren Beatty", "Robert Redford", "Woody Allen"],
                correct: 1
            },
            {
                question: "Which movie was the first to win Best Picture at the Golden Globes?",
                options: ["Gone with the Wind", "Casablanca", "The Best Years of Our Lives", "The Song of Bernadette"],
                correct: 3
            },
            {
                question: "Who is the only person to win Oscars for both acting and songwriting?",
                options: ["Barbra Streisand", "Lady Gaga", "Jennifer Hudson", "Beyoncé"],
                correct: 0
            },
            {
                question: "Which movie was the first to be shown in IMAX?",
                options: ["Tiger Child", "The Dream Is Alive", "To Fly!", "North of Superior"],
                correct: 0
            },
            {
                question: "Who is the only person to win Oscars for both acting and screenwriting?",
                options: ["Emma Thompson", "Woody Allen", "Billy Bob Thornton", "John Huston"],
                correct: 0
            },
            {
                question: "Which movie was the first to win Best Picture at the BAFTAs?",
                options: ["The Best Years of Our Lives", "Hamlet", "Bicycle Thieves", "All About Eve"],
                correct: 1
            },
            {
                question: "Who is the only person to win Oscars for both acting and producing?",
                options: ["Brad Pitt", "George Clooney", "Matt Damon", "Ben Affleck"],
                correct: 3
            },
            {
                question: "Which movie was the first to be shown in 70mm?",
                options: ["Oklahoma!", "Around the World in 80 Days", "Ben-Hur", "Lawrence of Arabia"],
                correct: 0
            }
        ]
    },
    math: {
        easy: [
            {
                question: "What is the square root of 144?",
                options: ["10", "12", "14", "16"],
                correct: 1
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "What is 10 × 10?",
                options: ["100", "1000", "10", "1"],
                correct: 0
            },
            {
                question: "What is 100 ÷ 10?",
                options: ["1", "10", "100", "1000"],
                correct: 1
            },
            {
                question: "What is 5 × 5?",
                options: ["20", "25", "30", "35"],
                correct: 1
            },
            {
                question: "What is 3 + 3?",
                options: ["5", "6", "7", "8"],
                correct: 1
            },
            {
                question: "What is 4 × 4?",
                options: ["12", "16", "20", "24"],
                correct: 1
            },
            {
                question: "What is 20 ÷ 5?",
                options: ["2", "3", "4", "5"],
                correct: 2
            },
            {
                question: "What is 6 × 6?",
                options: ["30", "36", "42", "48"],
                correct: 1
            },
            {
                question: "What is 7 + 7?",
                options: ["12", "14", "16", "18"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the value of π (pi) to two decimal places?",
                options: ["3.14", "3.16", "3.12", "3.18"],
                correct: 0
            },
            {
                question: "What is the square root of 225?",
                options: ["13", "14", "15", "16"],
                correct: 2
            },
            {
                question: "What is 12 × 12?",
                options: ["144", "124", "134", "154"],
                correct: 0
            },
            {
                question: "What is 144 ÷ 12?",
                options: ["10", "11", "12", "13"],
                correct: 2
            },
            {
                question: "What is 15 × 15?",
                options: ["200", "225", "250", "275"],
                correct: 1
            },
            {
                question: "What is 20 × 20?",
                options: ["300", "400", "500", "600"],
                correct: 1
            },
            {
                question: "What is 25 × 25?",
                options: ["500", "625", "750", "875"],
                correct: 1
            },
            {
                question: "What is 30 × 30?",
                options: ["800", "900", "1000", "1100"],
                correct: 1
            },
            {
                question: "What is 35 × 35?",
                options: ["1125", "1225", "1325", "1425"],
                correct: 1
            },
            {
                question: "What is 40 × 40?",
                options: ["1400", "1500", "1600", "1700"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the sum of the interior angles of a hexagon?",
                options: ["720°", "540°", "360°", "900°"],
                correct: 0
            },
            {
                question: "What is the value of e (Euler's number) to two decimal places?",
                options: ["2.71", "2.72", "2.73", "2.74"],
                correct: 0
            },
            {
                question: "What is the square root of 2 to two decimal places?",
                options: ["1.41", "1.42", "1.43", "1.44"],
                correct: 0
            },
            {
                question: "What is the value of the golden ratio to two decimal places?",
                options: ["1.61", "1.62", "1.63", "1.64"],
                correct: 1
            },
            {
                question: "What is the sum of the interior angles of a pentagon?",
                options: ["450°", "540°", "630°", "720°"],
                correct: 1
            },
            {
                question: "What is the value of √3 to two decimal places?",
                options: ["1.73", "1.74", "1.75", "1.76"],
                correct: 0
            },
            {
                question: "What is the sum of the interior angles of a heptagon?",
                options: ["720°", "900°", "1080°", "1260°"],
                correct: 1
            },
            {
                question: "What is the value of √5 to two decimal places?",
                options: ["2.23", "2.24", "2.25", "2.26"],
                correct: 1
            },
            {
                question: "What is the sum of the interior angles of an octagon?",
                options: ["900°", "1080°", "1260°", "1440°"],
                correct: 1
            },
            {
                question: "What is the value of √7 to two decimal places?",
                options: ["2.64", "2.65", "2.66", "2.67"],
                correct: 1
            }
        ]
    }
};

// Function to get random questions
function getRandomQuestions(category, difficulty, count = 10) {
    const questions = quizQuestions[category][difficulty];
    if (!questions) return [];
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export { quizQuestions, getRandomQuestions }; 