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
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                correct: 1
            },
            {
                question: "Which country is home to the kangaroo?",
                options: ["New Zealand", "Australia", "South Africa", "Brazil"],
                correct: 1
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Won", "Yen", "Ringgit"],
                correct: 2
            },
            {
                question: "Which famous scientist developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "Which famous painting was created by Leonardo da Vinci?",
                options: ["The Starry Night", "The Scream", "Mona Lisa", "The Persistence of Memory"],
                correct: 2
            },
            {
                question: "What is the main ingredient in guacamole?",
                options: ["Tomato", "Avocado", "Onion", "Lime"],
                correct: 1
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "South Korea", "Japan", "Thailand"],
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
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
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
            }
        ]
    },
    science: {
        easy: [
            {
                    "question": "What is the chemical symbol for water?",
                    "options": ["H2O", "CO2", "O2", "N2"],
                    "correct": 0
                },
                {
                    "question": "Which gas do plants absorb from the atmosphere?",
                    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                    "correct": 1
                },
                {
                    "question": "What is the boiling point of water in Celsius?",
                    "options": ["90°C", "100°C", "110°C", "120°C"],
                    "correct": 1
                },
                {
                    "question": "Which planet is known as the 'Morning Star'?",
                    "options": ["Mars", "Venus", "Jupiter", "Mercury"],
                    "correct": 1
                },
                {
                    "question": "What is the main component of the Sun?",
                    "options": ["Oxygen", "Hydrogen", "Helium", "Carbon"],
                    "correct": 1
                },
                {
                    "question": "Which force pulls objects toward Earth's center?",
                    "options": ["Magnetism", "Gravity", "Friction", "Inertia"],
                    "correct": 1
                },
                {
                    "question": "What is the hardest natural substance on Earth?",
                    "options": ["Gold", "Iron", "Diamond", "Quartz"],
                    "correct": 2
                },
                {
                    "question": "How many bones are in the adult human body?",
                    "options": ["206", "300", "150", "432"],
                    "correct": 0
                },
                {
                    "question": "Which organ pumps blood throughout the body?",
                    "options": ["Liver", "Brain", "Heart", "Lungs"],
                    "correct": 2
                },
                {
                    "question": "What is the closest star to Earth?",
                    "options": ["Alpha Centauri", "Betelgeuse", "The Sun", "Sirius"],
                    "correct": 2
                },
                {
                    "question": "Which gas makes up most of Earth's atmosphere?",
                    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    "correct": 2
                },
                {
                    "question": "What is the chemical symbol for gold?",
                    "options": ["Go", "Gd", "Au", "Ag"],
                    "correct": 2
                },
                {
                    "question": "Which planet is known as the 'Red Planet'?",
                    "options": ["Venus", "Mars", "Jupiter", "Saturn"],
                    "correct": 1
                },
                {
                    "question": "What is the process by which plants make food?",
                    "options": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
                    "correct": 1
                },
                {
                    "question": "Which of these is NOT a primary color of light?",
                    "options": ["Red", "Blue", "Green", "Yellow"],
                    "correct": 3
                },
                {
                    "question": "What is the largest organ in the human body?",
                    "options": ["Liver", "Brain", "Skin", "Heart"],
                    "correct": 2
                },
                {
                    "question": "Which scientist proposed the theory of relativity?",
                    "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
                    "correct": 1
                },
                {
                    "question": "What is the freezing point of water in Fahrenheit?",
                    "options": ["0°F", "32°F", "100°F", "212°F"],
                    "correct": 1
                },
                {
                    "question": "Which of these is a non-metal?",
                    "options": ["Iron", "Copper", "Sulfur", "Aluminum"],
                    "correct": 2
                },
                {
                    "question": "What type of energy is stored in a battery?",
                    "options": ["Mechanical", "Thermal", "Chemical", "Nuclear"],
                    "correct": 2
            }
        ],
        medium: [
            {
                    "question": "What is the speed of light in vacuum?",
                    "options": ["299,792 km/s", "199,792 km/s", "399,792 km/s", "249,792 km/s"],
                    "correct": 0
                },
                {
                    "question": "What is the pH value of pure water?",
                    "options": ["5", "6", "7", "8"],
                    "correct": 2
                },
                {
                    "question": "Which element has the atomic number 1?",
                    "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                    "correct": 1
                },
                {
                    "question": "What is the unit of electrical resistance?",
                    "options": ["Volt", "Ampere", "Ohm", "Watt"],
                    "correct": 2
                },
                {
                    "question": "Which vitamin is produced by the human body when exposed to sunlight?",
                    "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                    "correct": 3
                },
                {
                    "question": "What is the atomic mass of carbon?",
                    "options": ["10", "12", "14", "16"],
                    "correct": 1
                },
                {
                    "question": "Which law states 'for every action, there is an equal and opposite reaction'?",
                    "options": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
                    "correct": 2
                },
                {
                    "question": "What is the most abundant gas in Earth's atmosphere?",
                    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    "correct": 2
                },
                {
                    "question": "Which subatomic particle has a negative charge?",
                    "options": ["Proton", "Neutron", "Electron", "Nucleus"],
                    "correct": 2
                },
                {
                    "question": "What is the chemical symbol for sodium?",
                    "options": ["So", "Sd", "Na", "No"],
                    "correct": 2
                },
                {
                    "question": "Which planet has the most moons?",
                    "options": ["Jupiter", "Saturn", "Mars", "Neptune"],
                    "correct": 1
                },
                {
                    "question": "What is the study of fossils called?",
                    "options": ["Geology", "Paleontology", "Archaeology", "Meteorology"],
                    "correct": 1
                },
                {
                    "question": "Which blood type is the universal donor?",
                    "options": ["A", "B", "AB", "O"],
                    "correct": 3
                },
                {
                    "question": "What is the main component of natural gas?",
                    "options": ["Propane", "Butane", "Methane", "Ethane"],
                    "correct": 2
                },
                {
                    "question": "Which scientist discovered radioactivity?",
                    "options": ["Marie Curie", "Ernest Rutherford", "Henri Becquerel", "Niels Bohr"],
                    "correct": 2
                },
                {
                    "question": "What is the chemical formula for table salt?",
                    "options": ["NaCl", "H2O", "CO2", "CaCO3"],
                    "correct": 0
                },
                {
                    "question": "Which part of the cell is called the 'powerhouse'?",
                    "options": ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
                    "correct": 2
                },
                {
                    "question": "What is the SI unit of force?",
                    "options": ["Joule", "Watt", "Newton", "Pascal"],
                    "correct": 2
                },
                {
                    "question": "Which metal is liquid at room temperature?",
                    "options": ["Bromine", "Gallium", "Mercury", "Francium"],
                    "correct": 2
                },
                {
                    "question": "What is the chemical symbol for potassium?",
                    "options": ["Pt", "P", "Po", "K"],
                    "correct": 3
            }
        ],
        hard: [
            {
                    "question": "What is the Heisenberg Uncertainty Principle?",
                    "options": [
                    "Position and momentum cannot be measured simultaneously",
                    "Energy is always conserved",
                    "Matter cannot be created or destroyed",
                    "Light behaves as both wave and particle"
                ],
                    "correct": 0
                },
                {
                    "question": "What is the chemical formula for ozone?",
                    "options": ["O2", "O3", "O4", "O5"],
                    "correct": 1
                },
                {
                    "question": "Which scientist discovered penicillin?",
                    "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
                    "correct": 1
                },
                {
                    "question": "What is the study of the behavior of matter at very low temperatures called?",
                    "options": ["Thermodynamics", "Cryogenics", "Quantum Physics", "Nuclear Physics"],
                    "correct": 1
                },
                {
                    "question": "Which element is liquid at room temperature?",
                    "options": ["Bromine", "Mercury", "Gallium", "All of the above"],
                    "correct": 3
                },
                {
                    "question": "What is the Pauli Exclusion Principle?",
                    "options": [
                        "No two electrons can have the same quantum state",
                        "Energy is quantized in atoms",
                        "Light exhibits wave-particle duality",
                        "Entropy always increases"
                    ],
                    "correct": 0
                },
                {
                    "question": "Which particle mediates the electromagnetic force?",
                    "options": ["Gluon", "Photon", "W Boson", "Graviton"],
                    "correct": 1
                },
                {
                    "question": "What is the Chandrasekhar limit?",
                    "options": [
                        "Maximum mass of a white dwarf",
                        "Minimum mass for nuclear fusion",
                        "Event horizon of a black hole",
                        "Speed limit in the universe"
                    ],
                    "correct": 0
                },
                {
                    "question": "Which quantum number describes electron spin?",
                    "options": ["Principal", "Azimuthal", "Magnetic", "Spin"],
                    "correct": 3
                },
                {
                    "question": "What is the main component of a black hole's singularity?",
                    "options": ["Neutrons", "Quarks", "Spacetime curvature", "Unknown"],
                    "correct": 3
                },
                {
                    "question": "Which theorem states 'no free lunch' in mathematical optimization?",
                    "options": ["Gödel's Theorem", "No-Free-Lunch Theorem", "Nash Equilibrium", "Pigeonhole Principle"],
                    "correct": 1
                },
                {
                    "question": "What is the Bekenstein bound?",
                    "options": [
                        "Maximum entropy in a region",
                        "Minimum temperature in space",
                        "Limit of quantum entanglement",
                        "Boundary of a wormhole"
                    ],
                    "correct": 0
                },
                {
                    "question": "Which phenomenon causes neutron stars to emit beams of radiation?",
                    "options": ["Synchrotron Radiation", "Hawking Radiation", "Lighthouse Effect", "Pulsar Mechanism"],
                    "correct": 3
                },
                {
                    "question": "What is the Riemann Hypothesis about?",
                    "options": [
                        "Distribution of prime numbers",
                        "Solutions to polynomial equations",
                        "Non-Euclidean geometry",
                        "Quantum field theory"
                    ],
                    "correct": 0
                },
                {
                    "question": "Which protein is responsible for muscle contraction?",
                    "options": ["Keratin", "Actin", "Collagen", "Myosin"],
                    "correct": 3
                },
                {
                    "question": "What is the Casimir effect?",
                    "options": [
                        "Attraction between uncharged plates in a vacuum",
                        "Quantum tunneling in superconductors",
                        "Time dilation near black holes",
                        "Entanglement of photons"
                    ],
                    "correct": 0
                },
                {
                    "question": "Which enzyme is responsible for DNA replication?",
                    "options": ["Helicase", "Polymerase", "Ligase", "Primase"],
                    "correct": 1
                },
                {
                    "question": "What is the holographic principle in theoretical physics?",
                    "options": [
                        "Information in a volume is encoded on its boundary",
                        "Universe is a computer simulation",
                        "Time is an emergent property",
                        "Gravity is an entropic force"
                    ],
                    "correct": 0
                },
                {
                    "question": "Which paradox illustrates quantum superposition?",
                    "options": ["Fermi Paradox", "Schrödinger's Cat", "Olbers' Paradox", "EPR Paradox"],
                    "correct": 1
                },
                {
                    "question": "What is the main challenge in unifying general relativity and quantum mechanics?",
                    "options": [
                        "Incompatible mathematical frameworks",
                        "Lack of experimental evidence",
                        "Different concepts of time",
                        "All of the above"
                    ],
                    "correct": 3
            }
        ]
    },
    history: {
        easy: [
            {
                "question": "Who was the first President of the United States?",
                "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
                "correct": 1
            },
            {
              "question": "Which country built the Great Wall?",
              "options": ["India", "Japan", "China", "Mongolia"],
              "correct": 2
            },
            {
              "question": "In which year did World War II end?",
              "options": ["1943", "1944", "1945", "1946"],
              "correct": 2
            },
            {
              "question": "Who discovered America in 1492?",
              "options": ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
              "correct": 1
            },
            {
              "question": "Who was the first Emperor of Rome?",
              "options": ["Julius Caesar", "Augustus", "Nero", "Tiberius"],
              "correct": 1
            },
            {
              "question": "What was the name of the ship on which the Pilgrims traveled to America?",
              "options": ["Mayflower", "Santa Maria", "Endeavour", "Victoria"],
              "correct": 0
            },
            {
              "question": "Which civilization built the pyramids?",
              "options": ["Greek", "Mesopotamian", "Roman", "Egyptian"],
              "correct": 3
            },
            {
              "question": "Who was known as the Maid of Orléans?",
              "options": ["Cleopatra", "Marie Curie", "Joan of Arc", "Queen Elizabeth I"],
              "correct": 2
            },
            {
              "question": "Which war was fought between the North and South regions in the U.S.?",
              "options": ["Revolutionary War", "World War I", "Vietnam War", "Civil War"],
              "correct": 3
            },
            {
              "question": "Where was Napoleon Bonaparte from?",
              "options": ["Italy", "Austria", "France", "Germany"],
              "correct": 2
            },
            {
              "question": "Who was the famous queen of ancient Egypt?",
              "options": ["Joan of Arc", "Cleopatra", "Catherine the Great", "Elizabeth II"],
              "correct": 1
            },
            {
              "question": "Who invented the light bulb?",
              "options": ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Benjamin Franklin"],
              "correct": 2
            },
            {
              "question": "Who wrote the Indian Constitution?",
              "options": ["Jawaharlal Nehru", "Subhas Chandra Bose", "B. R. Ambedkar", "Mahatma Gandhi"],
              "correct": 2
            },
            {
              "question": "What is the capital of the Mughal Empire during Akbar's reign?",
              "options": ["Delhi", "Agra", "Lahore", "Fatehpur Sikri"],
              "correct": 3
            },
            {
              "question": "Which famous Indian leader was assassinated in 1948?",
              "options": ["Sardar Patel", "Nehru", "Subhas Chandra Bose", "Mahatma Gandhi"],
              "correct": 3
            },
            {
              "question": "What year did India gain independence from Britain?",
              "options": ["1945", "1947", "1950", "1952"],
              "correct": 1
            },
            {
              "question": "What was the name of Hitler’s political party?",
              "options": ["Communist Party", "Nazi Party", "Labour Party", "Fascist Party"],
              "correct": 1
            },
            {
              "question": "Who was the first woman Prime Minister of India?",
              "options": ["Sonia Gandhi", "Sarojini Naidu", "Indira Gandhi", "Pratibha Patil"],
              "correct": 2
            },
            {
              "question": "Which ancient civilization is known for cuneiform writing?",
              "options": ["Egyptians", "Sumerians", "Greeks", "Romans"],
              "correct": 1
            },
            {
              "question": "What was the Renaissance primarily a revival of?",
              "options": ["Modern technology", "Classical art and learning", "Feudal systems", "Colonial rule"],
              "correct": 1
            }
        ],
          "medium": [
            {
              "question": "What triggered the start of World War I?",
              "options": ["Sinking of Lusitania", "Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Zimmermann Telegram"],
              "correct": 1
            },
            {
              "question": "Who was the longest-reigning British monarch before Queen Elizabeth II?",
              "options": ["Queen Victoria", "King George III", "Henry VIII", "Edward VII"],
              "correct": 0
            },
            {
              "question": "What was the name of the peace treaty that ended World War I?",
              "options": ["Treaty of Versailles", "Treaty of Ghent", "Treaty of Paris", "Treaty of Tordesillas"],
              "correct": 0
            },
            {
              "question": "Which empire was ruled by Genghis Khan?",
              "options": ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Persian Empire"],
              "correct": 2
            },
            {
              "question": "Who was known as the Iron Chancellor of Germany?",
              "options": ["Bismarck", "Hitler", "Ludendorff", "Goebbels"],
              "correct": 0
            },
            {
              "question": "Which revolution started in 1789?",
              "options": ["American Revolution", "Russian Revolution", "French Revolution", "Industrial Revolution"],
              "correct": 2
            },
            {
              "question": "What was the Cold War mainly about?",
              "options": ["Oil", "Religion", "Ideological conflict", "Territorial expansion"],
              "correct": 2
            },
            {
              "question": "Who led the Salt March in India?",
              "options": ["Sardar Patel", "Jawaharlal Nehru", "B. R. Ambedkar", "Mahatma Gandhi"],
              "correct": 3
            },
            {
              "question": "Which empire ruled over most of Europe in 800 AD?",
              "options": ["Byzantine Empire", "Frankish Empire", "Roman Empire", "Ottoman Empire"],
              "correct": 1
            },
            {
              "question": "Which explorer was the first to sail around the world?",
              "options": ["Magellan", "Columbus", "Vasco da Gama", "Marco Polo"],
              "correct": 0
            },
            {
              "question": "Who was the first President of independent India?",
              "options": ["Jawaharlal Nehru", "B. R. Ambedkar", "Rajendra Prasad", "S. Radhakrishnan"],
              "correct": 2
            },
            {
              "question": "Which battle marked the beginning of British colonial rule in India?",
              "options": ["Battle of Plassey", "Battle of Panipat", "Battle of Buxar", "Battle of Haldighati"],
              "correct": 0
            },
            {
              "question": "What was the name of the first successful human space mission?",
              "options": ["Apollo 11", "Sputnik 1", "Vostok 1", "Challenger"],
              "correct": 2
            },
            {
              "question": "What was the name of the Nazi plan to exterminate Jews?",
              "options": ["The Holocaust", "The Final Solution", "Kristallnacht", "Operation Barbarossa"],
              "correct": 1
            },
            {
              "question": "Who painted the Mona Lisa?",
              "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
              "correct": 1
            },
            {
              "question": "In which year was the Berlin Wall torn down?",
              "options": ["1987", "1989", "1991", "1993"],
              "correct": 1
            },
            {
              "question": "Who was the first Mughal emperor?",
              "options": ["Akbar", "Aurangzeb", "Babur", "Shah Jahan"],
              "correct": 2
            },
            {
              "question": "Where did the Industrial Revolution begin?",
              "options": ["Germany", "USA", "France", "Britain"],
              "correct": 3
            },
            {
              "question": "What was the capital of the Byzantine Empire?",
              "options": ["Rome", "Athens", "Constantinople", "Alexandria"],
              "correct": 2
            },
            {
              "question": "Who was known as the Father of the Nation in India?",
              "options": ["Nehru", "Ambedkar", "Gandhi", "Subhas Chandra Bose"],
              "correct": 2
            }
        ],
          "hard": [
            {
              "question": "Who was the ruler during the peak of the Maurya Empire?",
              "options": ["Chandragupta Maurya", "Bindusara", "Ashoka", "Harsha"],
              "correct": 2
            },
            {
              "question": "What year did the Roman Empire fall?",
              "options": ["395 AD", "410 AD", "476 AD", "500 AD"],
              "correct": 2
            },
            {
              "question": "Which Indian freedom fighter formed the Indian National Army?",
              "options": ["Bhagat Singh", "Lala Lajpat Rai", "Subhas Chandra Bose", "Bal Gangadhar Tilak"],
              "correct": 2
            },
            {
              "question": "What was the capital of the Inca Empire?",
              "options": ["Machu Picchu", "Cuzco", "Quito", "Tenochtitlan"],
              "correct": 1
            },
            {
              "question": "Which war was also called 'The Great War'?",
              "options": ["World War I", "World War II", "The Napoleonic Wars", "The Crimean War"],
              "correct": 0
            },
            {
              "question": "The Rosetta Stone helped decode which ancient script?",
              "options": ["Cuneiform", "Hieroglyphics", "Latin", "Greek"],
              "correct": 1
            },
            {
              "question": "Which ruler built the Grand Trunk Road in India?",
              "options": ["Akbar", "Sher Shah Suri", "Babur", "Ashoka"],
              "correct": 1
            },
            {
              "question": "The Boston Tea Party was a protest against which country?",
              "options": ["France", "Spain", "Britain", "Portugal"],
              "correct": 2
            },
            {
              "question": "Who signed the Magna Carta?",
              "options": ["Henry II", "Edward I", "Richard the Lionheart", "King John"],
              "correct": 3
            },
            {
              "question": "Which treaty ended the Thirty Years' War?",
              "options": ["Treaty of Tordesillas", "Peace of Augsburg", "Treaty of Versailles", "Peace of Westphalia"],
              "correct": 3
            },
            {
              "question": "Where did the Black Death originate?",
              "options": ["Europe", "China", "India", "Middle East"],
              "correct": 1
            },
            {
              "question": "Who led the Bolshevik Revolution?",
              "options": ["Stalin", "Lenin", "Trotsky", "Marx"],
              "correct": 1
            },
            {
              "question": "What was the name of the trade route connecting China and Europe?",
              "options": ["Spice Route", "Silk Road", "Amber Route", "Incense Route"],
              "correct": 1
            },
            {
              "question": "What Indian empire was known for its navy?",
              "options": ["Chola", "Maurya", "Gupta", "Mughal"],
              "correct": 0
            },
            {
              "question": "Who was the last Tsar of Russia?",
              "options": ["Nicholas I", "Alexander II", "Nicholas II", "Peter the Great"],
              "correct": 2
            },
            {
              "question": "What was the main religion of the Byzantine Empire?",
              "options": ["Islam", "Catholicism", "Eastern Orthodox Christianity", "Judaism"],
              "correct": 2
            },
            {
              "question": "Who founded the Ottoman Empire?",
              "options": ["Mehmed II", "Suleiman", "Osman I", "Selim I"],
              "correct": 2
            },
            {
              "question": "In which year did the American Civil War begin?",
              "options": ["1859", "1861", "1863", "1865"],
              "correct": 1
            },
            {
              "question": "Who led the first successful slave revolt in Haiti?",
              "options": ["Toussaint Louverture", "Jean-Jacques Dessalines", "Boukman", "Henry Christophe"],
              "correct": 0
            },
            {
              "question": "What was the longest reigning dynasty in Chinese history?",
              "options": ["Ming", "Qing", "Zhou", "Tang"],
              "correct": 2
            }
        ]
      },
        geography: {
          easy: [
            {
              question: "What is the largest continent?",
              options: ["Africa", "Asia", "North America", "Europe"],
              correct: 1
            },
            {
              question: "Which country has the most population?",
              options: ["India", "China", "USA", "Indonesia"],
              correct: 1
            },
            {
              "question": "What is the capital of Australia?",
              "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
              "correct": 2
            },
            {
              "question": "Which ocean is the largest?",
              "options": ["Atlantic", "Indian", "Arctic", "Pacific"],
              "correct": 3
            },
            {
              "question": "What is the longest river in Africa?",
              "options": ["Congo", "Nile", "Niger", "Zambezi"],
              "correct": 1
            },
            {
              "question": "Which is the smallest continent?",
              "options": ["Australia", "Europe", "Antarctica", "South America"],
              "correct": 0
            },
            {
              "question": "Which desert is the largest in the world?",
              "options": ["Sahara", "Arctic", "Gobi", "Antarctica"],
              "correct": 3
            },
            {
              "question": "What is the capital of Japan?",
              "options": ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
              "correct": 2
            },
            {
              "question": "Which country is known as the Land of the Rising Sun?",
              "options": ["China", "Japan", "Thailand", "Vietnam"],
              "correct": 1
            },
            {
              "question": "Which continent is the Sahara Desert located in?",
              "options": ["Asia", "Africa", "Australia", "Europe"],
              "correct": 1
            },
            {
              "question": "What is the capital of India?",
              "options": ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
              "correct": 1
            },
            {
              "question": "Which continent is India located in?",
              "options": ["Africa", "Europe", "Asia", "Australia"],
              "correct": 2
            },
            {
              "question": "Which country is famous for tulips and windmills?",
              "options": ["Germany", "Switzerland", "Netherlands", "France"],
              "correct": 2
            },
            {
              "question": "Which continent is Brazil in?",
              "options": ["South America", "North America", "Europe", "Africa"],
              "correct": 0
            },
            {
              "question": "What is the capital of the USA?",
              "options": ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
              "correct": 2
            },
            {
              "question": "Which is the coldest continent?",
              "options": ["Asia", "Europe", "Antarctica", "North America"],
              "correct": 2
            },
            {
              "question": "Which is the tallest mountain in the world?",
              "options": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
              "correct": 1
            },
            {
              "question": "What is the capital of France?",
              "options": ["Berlin", "Madrid", "Rome", "Paris"],
              "correct": 3
            },
            {
              "question": "Which is the longest river in the world?",
              "options": ["Amazon", "Yangtze", "Nile", "Mississippi"],
              "correct": 2
            },
            {
              "question": "Which country is shaped like a boot?",
              "options": ["Italy", "Spain", "France", "Portugal"],
              "correct": 0
            }
          ],
          medium: [
            {
              "question": "Which country has the longest coastline?",
              "options": ["Russia", "Canada", "USA", "Australia"],
              "correct": 1
            },
            {
              "question": "What is the capital of Argentina?",
              "options": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
              "correct": 0
            },
            {
              "question": "What is the largest lake by volume?",
              "options": ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Victoria"],
              "correct": 2
            },
            {
              "question": "Which country has the most rivers?",
              "options": ["Russia", "Brazil", "China", "USA"],
              "correct": 1
            },
            {
              "question": "What is the capital of Bhutan?",
              "options": ["Paro", "Thimphu", "Punakha", "Wangdue Phodrang"],
              "correct": 1
            },
            {
              "question": "Which country is known as the Land of Fire and Ice?",
              "options": ["Iceland", "Greenland", "Norway", "Canada"],
              "correct": 0
            },
            {
              "question": "Which is the most populous city in the world?",
              "options": ["Tokyo", "Delhi", "Shanghai", "Sao Paulo"],
              "correct": 0
            },
            {
              "question": "What is the capital of Nigeria?",
              "options": ["Abuja", "Lagos", "Kano", "Port Harcourt"],
              "correct": 0
            },
            {
              "question": "Which country is landlocked?",
              "options": ["Afghanistan", "Vietnam", "Thailand", "Malaysia"],
              "correct": 0
            },
            {
              "question": "Which country has the most islands?",
              "options": ["Norway", "Canada", "Indonesia", "Sweden"],
              "correct": 3
            },
            {
              "question": "Which country spans both Europe and Asia?",
              "options": ["Russia", "India", "Turkey", "Kazakhstan"],
              "correct": 0
            },
            {
              "question": "What is the smallest country in the world?",
              "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
              "correct": 1
            },
            {
              "question": "Which capital is located on two continents?",
              "options": ["Moscow", "Cairo", "Istanbul", "Ankara"],
              "correct": 2
            },
            {
              "question": "Which is the highest capital city in the world?",
              "options": ["Quito", "La Paz", "Bogotá", "Kathmandu"],
              "correct": 1
            },
            {
              "question": "What is the capital of New Zealand?",
              "options": ["Auckland", "Wellington", "Christchurch", "Hamilton"],
              "correct": 1
            },
            {
              "question": "What mountain range separates Europe and Asia?",
              "options": ["Alps", "Urals", "Caucasus", "Himalayas"],
              "correct": 1
            },
            {
              "question": "What is the capital of South Korea?",
              "options": ["Seoul", "Busan", "Incheon", "Daegu"],
              "correct": 0
            },
            {
              "question": "Which is the flattest country in the world?",
              "options": ["Maldives", "Bangladesh", "Denmark", "Netherlands"],
              "correct": 0
            },
            {
              "question": "Which desert is located in Mongolia and China?",
              "options": ["Gobi", "Sahara", "Karakum", "Kalahari"],
              "correct": 0
            },
            {
              "question": "Which river flows through Paris?",
              "options": ["Rhine", "Seine", "Thames", "Danube"],
              "correct": 1
            }
          ],
          hard: [
            {
              "question": "Which country has the highest average elevation?",
              "options": ["Nepal", "Bhutan", "Switzerland", "Lesotho"],
              "correct": 1
            },
            {
              "question": "What is the largest underground lake in the world?",
              "options": ["Lost Sea", "Dragon's Breath Cave", "Lake Vostok", "Lake Baikal"],
              "correct": 0
            },
            {
              "question": "What is the largest uninhabited island in the world?",
              "options": ["Devon Island", "Greenland", "Antarctica", "Baffin Island"],
              "correct": 0
            },
            {
              "question": "Which country has the most UNESCO Biosphere Reserves?",
              "options": ["USA", "Spain", "Mexico", "Russia"],
              "correct": 1
            },
            {
              "question": "Which country has the most borders with other countries?",
              "options": ["Russia", "China", "Brazil", "Germany"],
              "correct": 1
            },
            {
              "question": "Which capital city is the most northern?",
              "options": ["Reykjavik", "Oslo", "Helsinki", "Stockholm"],
              "correct": 0
            },
            {
              "question": "Which is the deepest canyon in the world?",
              "options": ["Grand Canyon", "Yarlung Tsangpo", "Colca Canyon", "Copper Canyon"],
              "correct": 1
            },
            {
              "question": "Which island nation has no rivers?",
              "options": ["Bahrain", "Malta", "Maldives", "Cyprus"],
              "correct": 2
            },
            {
              "question": "Which desert is the oldest in the world?",
              "options": ["Atacama", "Gobi", "Namib", "Sahara"],
              "correct": 2
            },
            {
              "question": "Which country has the most volcanoes?",
              "options": ["Indonesia", "Japan", "USA", "Chile"],
              "correct": 0
            },
            {
              "question": "Which ocean current is the fastest?",
              "options": ["Kuroshio", "Gulf Stream", "Agulhas", "Antarctic Circumpolar"],
              "correct": 3
            },
            {
              "question": "Which island is shared by three countries?",
              "options": ["Borneo", "New Guinea", "Hispaniola", "Timor"],
              "correct": 0
            },
            {
              "question": "What is the driest inhabited place on Earth?",
              "options": ["Atacama", "Aswan", "McMurdo", "Arica"],
              "correct": 3
            },
            {
              "question": "What is the capital of Kazakhstan?",
              "options": ["Almaty", "Astana", "Shymkent", "Karaganda"],
              "correct": 1
            },
            {
              "question": "Which country is home to Lake Titicaca?",
              "options": ["Peru", "Bolivia", "Chile", "Both A and B"],
              "correct": 3
            },
            {
              "question": "Which is the least densely populated country?",
              "options": ["Australia", "Namibia", "Mongolia", "Canada"],
              "correct": 2
            },
            {
              "question": "Which sea has no coastline?",
              "options": ["Aral Sea", "Sargasso Sea", "Dead Sea", "Baltic Sea"],
              "correct": 1
            },
            {
              "question": "Which country has cities in both hemispheres?",
              "options": ["Brazil", "Kenya", "Indonesia", "All of the above"],
              "correct": 3
            },
            {
              "question": "Which river flows north?",
              "options": ["Nile", "Amazon", "Danube", "Yangtze"],
              "correct": 0
            },
            {
              "question": "Which island has the most biodiversity?",
              "options": ["Borneo", "Galápagos", "Madagascar", "New Guinea"],
              "correct": 2
            }
          ]
    },
    sports: {
        easy: [
          {
            question: "In which sport would you perform a slam dunk?",
            options: ["Basketball", "Football", "Tennis", "Golf"],
            correct: 0
          },
          {
            "question": "How many players are there in a standard soccer team?",
            "options": ["9", "10", "11", "12"],
            "correct": 2
          },
          {
            "question": "Which sport uses a shuttlecock?",
            "options": ["Tennis", "Badminton", "Squash", "Table Tennis"],
            "correct": 1
          },
          {
            "question": "In which sport would you use a putter?",
            "options": ["Golf", "Hockey", "Cricket", "Baseball"],
            "correct": 0
          },
          {
            "question": "How many players are there in a standard basketball team?",
            "options": ["4", "5", "6", "7"],
            "correct": 1
          },
          {
            "question": "What is the standard length of a marathon?",
            "options": ["26.2 miles", "20 miles", "15 miles", "10 miles"],
            "correct": 0
          },
          {
            "question": "Which country is known for the martial art of Taekwondo?",
            "options": ["South Korea", "Japan", "China", "Thailand"],
            "correct": 0
          },
          {
            "question": "What is the national sport of Canada?",
            "options": ["Lacrosse", "Hockey", "Soccer", "Basketball"],
            "correct": 0
          },
          {
            "question": "In which sport would you perform a checkmate?",
            "options": ["Chess", "Checkers", "Poker", "Bridge"],
            "correct": 0
          },
          {
            "question": "How many innings are there in a standard game of baseball?",
            "options": ["6", "7", "8", "9"],
            "correct": 3
          },
          {
            "question": "Which sport involves kicking a ball into a net without using hands?",
            "options": ["Soccer", "Rugby", "American Football", "Basketball"],
            "correct": 0
          },
          {
            "question": "What is the name of the trophy awarded to the winner of the Indianapolis 500?",
            "options": ["Borg-Warner Trophy", "Stanley Cup", "FIFA World Cup", "Vince Lombardi Trophy"],
            "correct": 0
          },
          {
            "question": "In which sport would you perform a hat-trick?",
            "options": ["Soccer", "Cricket", "Baseball", "Tennis"],
            "correct": 0
          },
          {
            "question": "How many rings are there on the Olympic flag?",
            "options": ["5", "6", "7", "8"],
            "correct": 0
          },
          {
            "question": "Which sport is played on a court with a net in the middle?",
            "options": ["Tennis", "Badminton", "Volleyball", "Table Tennis"],
            "correct": 2
          },
          {
            "question": "What is the name of the governing body for international football?",
            "options": ["FIFA", "UEFA", "NBA", "NFL"],
            "correct": 0
          },
          {
            "question": "In which sport would you use a cue stick?",
            "options": ["Billiards", "Bowling", "Darts", "Archery"],
            "correct": 0
          },
          {
            "question": "How many holes are there in a standard round of golf?",
            "options": ["18", "15", "12", "9"],
            "correct": 0
          },
          {
            "question": "Which sport involves running, swimming, and cycling?",
            "options": ["Triathlon", "Decathlon", "Pentathlon", "Heptathlon"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous cycling race held in France every year?",
            "options": ["Tour de France", "Giro d'Italia", "Vuelta a España", "Tour of California"],
            "correct": 0
          }
        ],
        medium: [
          {
            "question": "Which country has won the most FIFA World Cups?",
            "options": ["Germany", "Brazil", "Italy", "Argentina"],
            "correct": 1
          },
          {
            "question": "Who holds the record for most Olympic gold medals?",
            "options": ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Mark Spitz"],
            "correct": 0
          },
          {
            "question": "Which tennis player has won the most Grand Slam titles?",
            "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
            "correct": 2
          },
          {
            "question": "In which year did the first modern Olympic Games take place?",
            "options": ["1886", "1896", "1906", "1916"],
            "correct": 1
          },
          {
            "question": "Which country has won the most Olympic gold medals?",
            "options": ["United States", "China", "Russia", "Great Britain"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous boxer known as 'The Greatest'?",
            "options": ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Joe Frazier"],
            "correct": 0
          },
          {
            "question": "Which sport is known as the 'king of sports'?",
            "options": ["Soccer", "Cricket", "Baseball", "Rugby"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous tennis tournament held at Wimbledon?",
            "options": ["Wimbledon Championships", "US Open", "French Open", "Australian Open"],
            "correct": 0
          },
          {
            "question": "Which sport involves a puck and sticks?",
            "options": ["Ice Hockey", "Field Hockey", "Lacrosse", "Polo"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous cycling race held in Italy every year?",
            "options": ["Giro d'Italia", "Tour de France", "Vuelta a España", "Tour of California"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and mallets?",
            "options": ["Croquet", "Golf", "Polo", "Bowling"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous horse racing event held in the UK every year?",
            "options": ["Grand National", "Kentucky Derby", "Melbourne Cup", "Prix de l'Arc de Triomphe"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a court divided by a net?",
            "options": ["Tennis", "Badminton", "Volleyball", "Table Tennis"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous golf tournament held at Augusta National Golf Club?",
            "options": ["The Masters", "The Open Championship", "The US Open", "The PGA Championship"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a course with 18 holes?",
            "options": ["Golf", "Mini Golf", "Croquet", "Bowling"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous tennis tournament held in New York every year?",
            "options": ["US Open", "Wimbledon Championships", "French Open", "Australian Open"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a racket?",
            "options": ["Tennis", "Badminton", "Squash", "Table Tennis"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous tennis tournament held in Paris every year?",
            "options": ["French Open", "Wimbledon Championships", "US Open", "Australian Open"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a court with a net in the middle?",
            "options": ["Tennis", "Badminton", "Volleyball", "Table Tennis"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous tennis tournament held in Melbourne every year?",
            "options": ["Australian Open", "Wimbledon Championships", "US Open", "French Open"],
            "correct": 0
          }
        ],
        hard: [
          {
            "question": "Which sport has the most expensive equipment?",
            "options": ["Formula 1", "Golf", "Sailing", "Equestrian"],
            "correct": 0
          },
          {
            "question": "Which sport has the most complex scoring system?",
            "options": ["Gymnastics", "Figure Skating", "Diving", "Synchronized Swimming"],
            "correct": 1
          },
          {
            "question": "Which sport has the most injuries?",
            "options": ["Football", "Rugby", "Boxing", "Hockey"],
            "correct": 1
          },
          {
            "question": "Which sport has the most rules?",
            "options": ["Cricket", "Baseball", "American Football", "Rugby"],
            "correct": 0
          },
          {
            "question": "Which sport has the most expensive tickets?",
            "options": ["Formula 1", "Golf", "Tennis", "Football"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a course with 18 holes?",
            "options": ["Golf", "Mini Golf", "Croquet", "Bowling"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a racket?",
            "options": ["Tennis", "Badminton", "Squash", "Table Tennis"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and a court divided by a net?",
            "options": ["Tennis", "Badminton", "Volleyball", "Table Tennis"],
            "correct": 0
          },
          {
            "question": "Which sport involves a small white ball and mallets?",
            "options": ["Croquet", "Golf", "Polo", "Bowling"],
            "correct": 0
          },
          {
            "question": "Which sport involves a puck and sticks?",
            "options": ["Ice Hockey", "Field Hockey", "Lacrosse", "Polo"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous cycling race held in France every year?",
            "options": ["Tour de France", "Giro d'Italia", "Vuelta a España", "Tour of California"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous cycling race held in Italy every year?",
            "options": ["Giro d'Italia", "Tour de France", "Vuelta a España", "Tour of California"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous cycling race held in Spain every year?",
            "options": ["Vuelta a España", "Tour de France", "Giro d'Italia", "Tour of California"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous horse racing event held in the UK every year?",
            "options": ["Grand National", "Kentucky Derby", "Melbourne Cup", "Prix de l'Arc de Triomphe"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous horse racing event held in the US every year?",
            "options": ["Kentucky Derby", "Grand National", "Melbourne Cup", "Prix de l'Arc de Triomphe"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous horse racing event held in Australia every year?",
            "options": ["Melbourne Cup", "Kentucky Derby", "Grand National", "Prix de l'Arc de Triomphe"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous horse racing event held in France every year?",
            "options": ["Prix de l'Arc de Triomphe", "Kentucky Derby", "Grand National", "Melbourne Cup"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous golf tournament held at Augusta National Golf Club?",
            "options": ["The Masters", "The Open Championship", "The US Open", "The PGA Championship"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous tennis tournament held in New York every year?",
            "options": ["US Open", "Wimbledon Championships", "French Open", "Australian Open"],
            "correct": 0
          },
          {
            "question": "What is the name of the famous tennis tournament held in Paris every year?",
            "options": ["French Open", "Wimbledon Championships", "US Open", "Australian Open"],
            "correct": 0
          }
        ]
      },
    business: {
        easy: [
            {
                question: "What does CEO stand for?",
                options: ["Chief Executive Officer", "Chief Education Officer", "Chief Engineering Officer", "Chief Economic Officer"],
                correct: 0
            },
            {
                question: "Which company owns WhatsApp?",
                options: ["Google", "Microsoft", "Meta (Facebook)", "Apple"],
                correct: 2
            },
            {
                question: "What is the currency of the European Union?",
                options: ["Dollar", "Pound", "Euro", "Yen"],
                correct: 2
            },
            {
                question: "Which company is the largest smartphone manufacturer?",
                options: ["Apple", "Samsung", "Xiaomi", "Huawei"],
                correct: 1
            },
            {
                question: "What is the largest stock exchange in the world?",
                options: ["NYSE", "NASDAQ", "London Stock Exchange", "Tokyo Stock Exchange"],
                correct: 0
            },
            {
                question: "Which company created the iPhone?",
                options: ["Samsung", "Apple", "Google", "Microsoft"],
                correct: 1
            },
            {
                question: "What is the main purpose of a business plan?",
                options: ["To get funding", "To track expenses", "To hire employees", "To decorate the office"],
                correct: 0
            },
            {
                question: "Which company owns YouTube?",
                options: ["Google", "Microsoft", "Amazon", "Apple"],
                correct: 0
            },
            {
                question: "What is the most valuable company in the world?",
                options: ["Apple", "Microsoft", "Amazon", "Google"],
                correct: 0
            },
            {
                question: "Which company created Windows operating system?",
                options: ["Apple", "Microsoft", "Google", "IBM"],
                correct: 1
            },
            {
                question: "What is the main purpose of marketing?",
                options: ["To sell products", "To create awareness", "To build brand image", "All of the above"],
                correct: 3
            },
            {
                question: "Which company owns Instagram?",
                options: ["Google", "Meta (Facebook)", "Twitter", "Snapchat"],
                correct: 1
            },
            {
                question: "What is the term for money invested in a business?",
                options: ["Revenue", "Capital", "Profit", "Expense"],
                correct: 1
            },
            {
                question: "Which company is the largest online retailer?",
                options: ["eBay", "Amazon", "Walmart", "Alibaba"],
                correct: 1
            },
            {
                question: "What is the main purpose of a SWOT analysis?",
                options: ["To track sales", "To analyze competition", "To evaluate business position", "To calculate profits"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the term for when a company buys back its own shares?",
                options: ["Stock Split", "Share Buyback", "Dividend", "IPO"],
                correct: 1
            },
            {
                question: "Which company owns the Android operating system?",
                options: ["Apple", "Microsoft", "Google", "Samsung"],
                correct: 2
            },
            {
                question: "What is the largest e-commerce company in the world?",
                options: ["eBay", "Amazon", "Alibaba", "Walmart"],
                correct: 1
            },
            {
                question: "Which company is the largest producer of electric vehicles?",
                options: ["Toyota", "Tesla", "General Motors", "Volkswagen"],
                correct: 1
            },
            {
                question: "What is the term for a company's first sale of stock to the public?",
                options: ["Merger", "Acquisition", "IPO", "Stock Split"],
                correct: 2
            },
            {
                question: "Which company owns the most valuable brand in the world?",
                options: ["Apple", "Google", "Amazon", "Microsoft"],
                correct: 0
            },
            {
                question: "What is the largest social media platform by number of users?",
                options: ["Facebook", "Instagram", "Twitter", "TikTok"],
                correct: 0
            },
            {
                question: "Which company created the first commercial computer?",
                options: ["Apple", "Microsoft", "IBM", "Intel"],
                correct: 2
            },
            {
                question: "What is the term for a company's total value of all its shares?",
                options: ["Revenue", "Profit", "Market Capitalization", "Assets"],
                correct: 2
            },
            {
                question: "Which company owns the most patents in the world?",
                options: ["Samsung", "IBM", "Microsoft", "Apple"],
                correct: 0
            },
            {
                question: "What is the term for a company's total revenue minus total expenses?",
                options: ["Revenue", "Profit", "Capital", "Assets"],
                correct: 1
            },
            {
                question: "Which company has the largest market share in search engines?",
                options: ["Bing", "Google", "Yahoo", "DuckDuckGo"],
                correct: 1
            },
            {
                question: "What is the term for a company's ability to pay its debts?",
                options: ["Profitability", "Liquidity", "Solvency", "Efficiency"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the term for a company's ability to meet its short-term obligations?",
                options: ["Solvency", "Liquidity", "Profitability", "Efficiency"],
                correct: 1
            },
            {
                question: "Which company was the first to reach a $1 trillion market cap?",
                options: ["Apple", "Microsoft", "Amazon", "Google"],
                correct: 0
            },
            {
                question: "What is the term for a company's total assets minus its total liabilities?",
                options: ["Revenue", "Profit", "Equity", "Capital"],
                correct: 2
            },
            {
                question: "Which company has the highest revenue in the world?",
                options: ["Apple", "Walmart", "Amazon", "Saudi Aramco"],
                correct: 1
            },
            {
                question: "What is the term for a company's ability to generate profits from its assets?",
                options: ["Liquidity", "Solvency", "Profitability", "ROA (Return on Assets)"],
                correct: 3
            },
            {
                question: "Which company has the highest profit margin in the tech industry?",
                options: ["Apple", "Microsoft", "Google", "Facebook"],
                correct: 0
            },
            {
                question: "What is the term for a company's ability to generate cash from its operations?",
                options: ["Profitability", "Liquidity", "Cash Flow", "Solvency"],
                correct: 2
            },
            {
                question: "Which company has the highest research and development spending?",
                options: ["Apple", "Microsoft", "Amazon", "Alphabet (Google)"],
                correct: 3
            },
            {
                question: "What is the term for a company's ability to meet its long-term obligations?",
                options: ["Liquidity", "Solvency", "Profitability", "Efficiency"],
                correct: 1
            },
            {
                question: "Which company has the highest market share in cloud computing?",
                options: ["Microsoft Azure", "Amazon AWS", "Google Cloud", "IBM Cloud"],
                correct: 1
            }
        ]
    },
    technology: {
            easy: [
              {
                "question": "What does 'HTML' stand for?",
                "options": ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
                "correct": 0
              },
              {
                "question": "Which company created the iPhone?",
                "options": ["Samsung", "Apple", "Google", "Microsoft"],
                "correct": 1
              },
              {
                "question": "What is the most popular operating system for computers?",
                "options": ["Windows", "macOS", "Linux", "Chrome OS"],
                "correct": 0
              },
              {
                "question": "Which social media platform has the most users?",
                "options": ["Facebook", "Instagram", "Twitter", "TikTok"],
                "correct": 0
              },
              {
                "question": "What does 'Wi-Fi' stand for?",
                "options": ["Wireless Fidelity", "Wide Frequency", "Wireless Frequency", "Wide Fidelity"],
                "correct": 0
              },
              {
                "question": "How many characters were originally allowed in a ‘Tweet’ when Twitter first launched in 2006?",
                "options": ["140 characters", "280 characters", "500 characters", "1000 characters"],
                "correct": 0
              },
              {
                "question": "What type of computer file is a FLAC file?",
                "options": ["Image", "Audio", "Text", "Video"],
                "correct": 1
              },
              {
                "question": "Which key on a PC, when pressed along with the 'Ctrl' key, is a shortcut for the ‘Undo’ command?",
                "options": ["Z", "Y", "U", "X"],
                "correct": 0
              },
              {
                "question": "What does SD stand for in 'SD card'?",
                "options": ["Secure Digital", "Storage Device", "System Disk", "Secure Drive"],
                "correct": 0
              },
              {
                "question": "What is the name of the first search engine in internet?",
                "options": ["Google", "Archie", "Altavista", "WAIS"],
                "correct": 1
              },
              {
                "question": "What is the name of the classic 1972 arcade game based on table tennis?",
                "options": ["Pong", "Pac-Man", "Space Invaders", "Donkey Kong"],
                "correct": 0
              },
              {
                "question": "What does the term LASER stand for?",
                "options": ["Light Amplification by Stimulated Emission of Radiation", "Light and Sound Energy Radiation", "Laser Activated Stimulated Emission of Radiation", "Light Amplification by Stimulated Energy of Radiation"],
                "correct": 0
              },
              {
                "question": "Which duo invented the aeroplane?",
                "options": ["The Wright Brothers - Orville and Wilbur Wright", "The Ford Brothers - Henry and Edsel Ford", "The Edison Brothers - Thomas and Mina Edison", "The Tesla Brothers - Nikola and Milka Tesla"],
                "correct": 0
              },
              {
                "question": "What is the name of the British computer scientist who invented the World Wide Web in 1989?",
                "options": ["Tim Berners-Lee", "Alan Turing", "Ada Lovelace", "Steve Wozniak"],
                "correct": 0
              },
              {
                "question": "Originally Amazon only sold which product?",
                "options": ["Books", "Electronics", "Clothing", "Food"],
                "correct": 0
              }
            ],
            meduim: [
              {
                "question": "Which programming language is known as the 'language of the web'?",
                "options": ["Python", "Java", "JavaScript", "C++"],
                "correct": 2
              },
              {
                "question": "What is the name of Google's AI assistant?",
                "options": ["Alexa", "Siri", "Google Assistant", "Cortana"],
                "correct": 2
              },
              {
                "question": "Which company developed the Android operating system?",
                "options": ["Apple", "Microsoft", "Google", "Samsung"],
                "correct": 2
              },
              {
                "question": "What is the term for a computer's ability to learn and improve from experience?",
                "options": ["Machine Learning", "Artificial Intelligence", "Deep Learning", "Neural Networks"],
                "correct": 0
              },
              {
                "question": "Which technology is used to create virtual reality experiences?",
                "options": ["AR", "VR", "MR", "XR"],
                "correct": 1
              },
              {
                "question": "What is the name of the first computer virus?",
                "options": ["ILOVEYOU", "Creeper", "Melissa", "Stuxnet"],
                "correct": 1
              },
              {
                "question": "Which company developed the first commercial computer?",
                "options": ["Apple", "Microsoft", "IBM", "Intel"],
                "correct": 2
              },
              {
                "question": "What is the term for a computer program that replicates itself?",
                "options": ["Bug", "Virus", "Malware", "Spyware"],
                "correct": 1
              },
              {
                "question": "Which technology is used to create secure online transactions?",
                "options": ["HTTP", "HTTPS", "FTP", "SMTP"],
                "correct": 1
              },
              {
                "question": "What is the name of the first programming language?",
                "options": ["FORTRAN", "COBOL", "Assembly", "LISP"],
                "correct": 0
              },
              {
                "question": "Which company was co-founded by two former Facebook employees in 2010?",
                "options": ["Quora", "Reddit", "Pinterest", "Snapchat"],
                "correct": 0
              },
              {
                "question": "What is the name of the first web browser?",
                "options": ["Netscape", "Internet Explorer", "Mosaic", "Chrome"],
                "correct": 0
              },
              {
                "question": "Which company popularized the term 'Tablet PC' in 2001?",
                "options": ["Apple", "Google", "Microsoft", "Samsung"],
                "correct": 2
              },
              {
                "question": "What is the name of the first e-commerce company?",
                "options": ["Amazon", "eBay", "Alibaba", "Flipkart"],
                "correct": 1
              },
              {
                "question": "What is the name of the first social networking site launched on the internet in 1994?",
                "options": ["Facebook", "MySpace", "GeoCities", "LinkedIn"],
                "correct": 2
              }
            ],
            hard: [
              {
                "question": "What was the first item to be scanned using a barcode?",
                "options": ["Wrigley's chewing gum", "Coca-Cola", "Pepsi", "Mars bar"],
                "correct": 0
              },
              {
                "question": "In which year was the first e-mail sent?",
                "options": ["1971", "1980", "1990", "2000"],
                "correct": 0
              },
              {
                "question": "Who was responsible for the introduction of the Ford Mustang in 1964?",
                "options": ["Lee Iacocca", "Henry Ford", "Elon Musk", "Enzo Ferrari"],
                "correct": 0
              },
              {
                "question": "Who was founder and chairman of America Online Corporation?",
                "options": ["Steve Case", "Bill Gates", "Steve Jobs", "Larry Page"],
                "correct": 0
              },
              {
                "question": "Which year were Toyotas first sold in the US?",
                "options": ["1957", "1960", "1970", "1980"],
                "correct": 0
              },
              {
                "question": "Which subsidiary of General Motors established in 1985 was discontinued in 2010?",
                "options": ["Saturn", "Chevrolet", "Cadillac", "Buick"],
                "correct": 0
              },
              {
                "question": "Which software company makes Excel?",
                "options": ["Microsoft", "Apple", "Google", "Adobe"],
                "correct": 0
              },
              {
                "question": "Which popular 1960's American car was affectionately known as 'The Goat'?",
                "options": ["Pontiac GTO", "Ford Mustang", "Chevrolet Camaro", "Dodge Challenger"],
                "correct": 0
              },
              {
                "question": "Which Florida city provides the name of Chevrolet's compact MPV unveiled at the 2008 Paris Motor Show?",
                "options": ["Orlando", "Miami", "Tampa", "Jacksonville"],
                "correct": 0
              },
              {
                "question": "Which eternally popular Volkswagen car dropped the word New from its 2012 model?",
                "options": ["Beetle", "Golf", "Passat", "Jetta"],
                "correct": 0
              },
              {
                "question": "Which company produced the Spitfire?",
                "options": ["Triumph", "Rolls-Royce", "Bentley", "Aston Martin"],
                "correct": 0
              },
              {
                "question": "What is the name of the classic 1972 arcade game based on table tennis?",
                "options": ["Pong", "Pac-Man", "Space Invaders", "Donkey Kong"],
                "correct": 0
              },
              {
                "question": "What is the name of the British computer scientist who invented the World Wide Web in 1989?",
                "options": ["Tim Berners-Lee", "Alan Turing", "Ada Lovelace", "Steve Wozniak"],
                "correct": 0
              },
              {
                "question": "What is the name of the first web browser?",
                "options": ["Netscape", "Internet Explorer", "Mosaic", "Chrome"],
                "correct": 0
              },
              {
                "question": "What is the name of the first social networking site launched on the internet in 1994?",
                "options": ["Facebook", "MySpace", "GeoCities", "LinkedIn"],
                "correct": 2
              }
            ]
          },
    art: {
        easy: [
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "Which art movement is known for its use of bright colors and bold brushstrokes?",
                options: ["Cubism", "Impressionism", "Surrealism", "Abstract Expressionism"],
                correct: 1
            },
            {
                question: "What is the name of the most famous sculpture by Michelangelo?",
                options: ["The Thinker", "David", "Venus de Milo", "The Kiss"],
                correct: 1
            },
            {
                question: "Which artist is known for cutting off his own ear?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dali", "Claude Monet"],
                correct: 1
            },
            {
                question: "What is the name of the art movement that rejected traditional art forms?",
                options: ["Dada", "Cubism", "Surrealism", "Impressionism"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which artist created the painting 'The Starry Night'?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
                correct: 1
            },
            {
                question: "What is the name of the art movement that focused on dreams and the unconscious?",
                options: ["Cubism", "Surrealism", "Impressionism", "Abstract Expressionism"],
                correct: 1
            },
            {
                question: "Which artist is known for his 'Campbell's Soup Cans' painting?",
                options: ["Andy Warhol", "Roy Lichtenstein", "Jackson Pollock", "Mark Rothko"],
                correct: 0
            },
            {
                question: "What is the name of the art movement that focused on geometric shapes?",
                options: ["Cubism", "Surrealism", "Impressionism", "Abstract Expressionism"],
                correct: 0
            },
            {
                question: "Which artist is known for his 'Guernica' painting?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dali", "Claude Monet"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the name of the art movement that focused on the subconscious mind?",
                options: ["Surrealism", "Cubism", "Impressionism", "Abstract Expressionism"],
                correct: 0
            },
            {
                question: "Which artist is known for his 'The Persistence of Memory' painting?",
                options: ["Salvador Dali", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
                correct: 0
            },
            {
                question: "What is the name of the art movement that focused on the beauty of nature?",
                options: ["Romanticism", "Realism", "Impressionism", "Abstract Expressionism"],
                correct: 0
            },
            {
                question: "Which artist is known for his 'The Scream' painting?",
                options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dali"],
                correct: 0
            },
            {
                question: "What is the name of the art movement that focused on the beauty of the human form?",
                options: ["Renaissance", "Baroque", "Rococo", "Neoclassicism"],
                correct: 0
            }
        ]
    },
    music: {
        easy: [
            {
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
                correct: 1
            },
            {
                question: "Which instrument has 88 keys?",
                options: ["Guitar", "Piano", "Violin", "Drums"],
                correct: 1
            },
            {
                question: "Who wrote the song 'Bohemian Rhapsody'?",
                options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
                correct: 1
            },
            {
                question: "Which music genre originated in Jamaica?",
                options: ["Rock", "Reggae", "Jazz", "Blues"],
                correct: 1
            },
            {
                question: "Who is known as the 'Queen of Soul'?",
                options: ["Aretha Franklin", "Whitney Houston", "Diana Ross", "Tina Turner"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which composer wrote 'Moonlight Sonata'?",
                options: ["Mozart", "Beethoven", "Bach", "Chopin"],
                correct: 1
            },
            {
                question: "What is the name of the highest female singing voice?",
                options: ["Alto", "Soprano", "Tenor", "Bass"],
                correct: 1
            },
            {
                question: "Which band is known for their album 'The Dark Side of the Moon'?",
                options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
                correct: 2
            },
            {
                question: "What is the name of the musical scale that has no sharps or flats?",
                options: ["C Major", "G Major", "D Major", "A Major"],
                correct: 0
            },
            {
                question: "Which composer wrote 'The Four Seasons'?",
                options: ["Vivaldi", "Mozart", "Beethoven", "Bach"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the name of the musical form that has three parts?",
                options: ["Binary", "Ternary", "Rondo", "Sonata"],
                correct: 1
            },
            {
                question: "Which composer wrote 'The Magic Flute'?",
                options: ["Mozart", "Beethoven", "Bach", "Chopin"],
                correct: 0
            },
            {
                question: "What is the name of the musical interval that spans eight notes?",
                options: ["Fifth", "Sixth", "Seventh", "Octave"],
                correct: 3
            },
            {
                question: "Which composer wrote 'The Nutcracker'?",
                options: ["Tchaikovsky", "Mozart", "Beethoven", "Bach"],
                correct: 0
            },
            {
                question: "What is the name of the musical form that has a recurring theme?",
                options: ["Binary", "Ternary", "Rondo", "Sonata"],
                correct: 2
            }
        ]
    },
    literature: {
        easy: [
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "Which book is about a young wizard named Harry Potter?",
                options: ["The Lord of the Rings", "Harry Potter", "The Chronicles of Narnia", "The Hobbit"],
                correct: 1
            },
            {
                question: "Who wrote 'Pride and Prejudice'?",
                options: ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Virginia Woolf"],
                correct: 0
            },
            {
                question: "Which book is about a man named Robinson Crusoe?",
                options: ["Robinson Crusoe", "Gulliver's Travels", "Treasure Island", "Moby Dick"],
                correct: 0
            },
            {
                question: "Who wrote 'The Great Gatsby'?",
                options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which book is about a man named Don Quixote?",
                options: ["Don Quixote", "The Divine Comedy", "The Canterbury Tales", "Paradise Lost"],
                correct: 0
            },
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Alice Walker"],
                correct: 0
            },
            {
                question: "Which book is about a man named Moby Dick?",
                options: ["Moby Dick", "The Old Man and the Sea", "The Call of the Wild", "White Fang"],
                correct: 0
            },
            {
                question: "Who wrote '1984'?",
                options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"],
                correct: 0
            },
            {
                question: "Which book is about a man named Sherlock Holmes?",
                options: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Philip Marlowe"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Who wrote 'The Divine Comedy'?",
                options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
                correct: 0
            },
            {
                question: "Which book is about a man named Ulysses?",
                options: ["Ulysses", "The Odyssey", "The Iliad", "The Aeneid"],
                correct: 0
            },
            {
                question: "Who wrote 'The Canterbury Tales'?",
                options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Charles Dickens"],
                correct: 0
            },
            {
                question: "Which book is about a man named Faust?",
                options: ["Faust", "The Divine Comedy", "Paradise Lost", "The Canterbury Tales"],
                correct: 0
            },
            {
                question: "Who wrote 'Paradise Lost'?",
                options: ["John Milton", "William Shakespeare", "Geoffrey Chaucer", "Charles Dickens"],
                correct: 0
            }
        ]
    },
        "food": {
          "easy": [
            {
              "question": "Which fruit is known for keeping the doctor away if eaten daily?",
              "options": ["Banana", "Orange", "Apple", "Grapes"],
              "correct": 2
            },
            {
              "question": "Which vegetable is commonly used to make french fries?",
              "options": ["Carrot", "Potato", "Cucumber", "Tomato"],
              "correct": 1
            },
            {
              "question": "Which beverage is most commonly consumed for breakfast?",
              "options": ["Milk", "Juice", "Tea", "Coffee"],
              "correct": 0
            },
            {
              "question": "Which of these is a dairy product?",
              "options": ["Bread", "Butter", "Chicken", "Rice"],
              "correct": 1
            },
            {
              "question": "Which grain is most commonly used to make bread?",
              "options": ["Rice", "Barley", "Wheat", "Corn"],
              "correct": 2
            },
            {
              "question": "Which fruit is yellow and curved?",
              "options": ["Banana", "Mango", "Pineapple", "Lemon"],
              "correct": 0
            },
            {
              "question": "What type of food is cheddar?",
              "options": ["Meat", "Cheese", "Fruit", "Vegetable"],
              "correct": 1
            },
            {
              "question": "Which of these is a common topping on pizza?",
              "options": ["Lettuce", "Tomato Sauce", "Olives", "Both 2 and 3"],
              "correct": 3
            },
            {
              "question": "What color is a ripe tomato?",
              "options": ["Green", "Yellow", "Red", "Purple"],
              "correct": 2
            },
            {
              "question": "What is the main ingredient in guacamole?",
              "options": ["Onion", "Tomato", "Avocado", "Lettuce"],
              "correct": 2
            },
            {
              "question": "Which of the following is a citrus fruit?",
              "options": ["Apple", "Lime", "Banana", "Pear"],
              "correct": 1
            },
            {
              "question": "Which food is known for being long and used in Italian dishes?",
              "options": ["Rice", "Spaghetti", "Bread", "Sushi"],
              "correct": 1
            },
            {
              "question": "Which dairy product is used to make a milkshake?",
              "options": ["Butter", "Cheese", "Milk", "Cream"],
              "correct": 2
            },
            {
              "question": "Which fast food chain is famous for the Big Mac?",
              "options": ["Burger King", "Wendy's", "KFC", "McDonald's"],
              "correct": 3
            },
            {
              "question": "Which fruit has seeds on the outside?",
              "options": ["Apple", "Strawberry", "Grape", "Peach"],
              "correct": 1
            },
            {
              "question": "What type of food is a croissant?",
              "options": ["Cake", "Bread", "Pastry", "Cookie"],
              "correct": 2
            },
            {
              "question": "Which of these is not a fruit?",
              "options": ["Cucumber", "Pumpkin", "Apple", "Carrot"],
              "correct": 3
            },
            {
              "question": "What is tofu made from?",
              "options": ["Rice", "Soybeans", "Milk", "Lentils"],
              "correct": 1
            },
            {
              "question": "Which of these foods is commonly eaten with sushi?",
              "options": ["Ketchup", "Mayonnaise", "Soy Sauce", "Mustard"],
              "correct": 2
            },
            {
              "question": "What type of food is mozzarella?",
              "options": ["Vegetable", "Cheese", "Meat", "Fruit"],
              "correct": 1
            }
          ],
          "medium": [
            {
              "question": "Which vitamin is most present in citrus fruits?",
              "options": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
              "correct": 1
            },
            {
              "question": "Which country is the origin of sushi?",
              "options": ["China", "Japan", "Korea", "Thailand"],
              "correct": 1
            },
            {
              "question": "What is the main ingredient in hummus?",
              "options": ["Lentils", "Beans", "Chickpeas", "Tofu"],
              "correct": 2
            },
            {
              "question": "Which of these is a type of mushroom?",
              "options": ["Portobello", "Basil", "Radicchio", "Arugula"],
              "correct": 0
            },
            {
              "question": "Which type of fat is considered healthy?",
              "options": ["Trans fat", "Saturated fat", "Monounsaturated fat", "Hydrogenated fat"],
              "correct": 2
            },
            {
              "question": "Which mineral is found in spinach and is important for blood health?",
              "options": ["Calcium", "Magnesium", "Iron", "Potassium"],
              "correct": 2
            },
            {
              "question": "What type of rice is used in risotto?",
              "options": ["Basmati", "Jasmine", "Arborio", "Sticky"],
              "correct": 2
            },
            {
              "question": "Which food is highest in protein per gram?",
              "options": ["Lentils", "Tofu", "Chicken breast", "Spinach"],
              "correct": 2
            },
            {
              "question": "What is the name for a vegetarian who also eats fish?",
              "options": ["Pescatarian", "Vegan", "Lacto-vegetarian", "Flexitarian"],
              "correct": 0
            },
            {
              "question": "Which Indian dish is made with lentils and often eaten with rice or roti?",
              "options": ["Paneer", "Chole", "Dal", "Rajma"],
              "correct": 2
            },
            {
              "question": "What spice gives curry its yellow color?",
              "options": ["Cumin", "Coriander", "Turmeric", "Cardamom"],
              "correct": 2
            },
            {
              "question": "Which sweetener comes from the agave plant?",
              "options": ["Stevia", "Honey", "Agave syrup", "Maple syrup"],
              "correct": 2
            },
            {
              "question": "Which of these is a gluten-free grain?",
              "options": ["Barley", "Wheat", "Quinoa", "Rye"],
              "correct": 2
            },
            {
              "question": "What type of food is tempeh?",
              "options": ["Dairy", "Soy-based", "Nut", "Fruit"],
              "correct": 1
            },
            {
              "question": "Which vitamin is essential for calcium absorption?",
              "options": ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin E"],
              "correct": 1
            },
            {
              "question": "Which acid is found in lemons?",
              "options": ["Acetic acid", "Lactic acid", "Citric acid", "Malic acid"],
              "correct": 2
            },
            {
              "question": "What is the national dish of the UK?",
              "options": ["Biryani", "Pizza", "Fish and Chips", "Tacos"],
              "correct": 2
            },
            {
              "question": "Which nut is used to make marzipan?",
              "options": ["Cashew", "Pistachio", "Almond", "Hazelnut"],
              "correct": 2
            },
            {
              "question": "What is seitan made from?",
              "options": ["Rice", "Soy", "Wheat gluten", "Corn"],
              "correct": 2
            },
            {
              "question": "Which Indian spice blend is commonly used in tandoori dishes?",
              "options": ["Garam Masala", "Chaat Masala", "Tandoori Masala", "Panch Phoron"],
              "correct": 2
            }
          ],
          "hard": [
            {
              "question": "What is the Maillard reaction responsible for in cooking?",
              "options": ["Spiciness", "Fermentation", "Browning and flavor", "Preservation"],
              "correct": 2
            },
            {
              "question": "Which acid is most commonly used in pickling?",
              "options": ["Sulfuric acid", "Acetic acid", "Citric acid", "Formic acid"],
              "correct": 1
            },
            {
              "question": "Which country is the origin of the dish 'kimchi'?",
              "options": ["Japan", "China", "Thailand", "South Korea"],
              "correct": 3
            },
            {
              "question": "What is surimi typically made from?",
              "options": ["Crab meat", "Imitation crab from fish paste", "Shrimp", "Octopus"],
              "correct": 1
            },
            {
              "question": "Which process involves cooking food in vacuum-sealed bags at precise temperatures?",
              "options": ["Grilling", "Sous vide", "Braising", "Roasting"],
              "correct": 1
            },
            {
              "question": "What is the primary ingredient in wasabi paste?",
              "options": ["Mustard seeds", "Real wasabi root", "Horseradish", "Green chili"],
              "correct": 2
            },
            {
              "question": "Which cheese is traditionally used in Greek salad?",
              "options": ["Mozzarella", "Feta", "Ricotta", "Cheddar"],
              "correct": 1
            },
            {
              "question": "What is the main ingredient in the Japanese dish miso soup?",
              "options": ["Soy sauce", "Seaweed", "Miso paste", "Tofu"],
              "correct": 2
            },
            {
              "question": "Which Indian state is famous for its 'Dhokla' dish?",
              "options": ["Punjab", "Kerala", "Gujarat", "Maharashtra"],
              "correct": 2
            },
            {
              "question": "Which country consumes the most chocolate per capita?",
              "options": ["Germany", "USA", "Switzerland", "France"],
              "correct": 2
            },
            {
              "question": "What is the Japanese word for grilled skewered chicken?",
              "options": ["Ramen", "Sashimi", "Yakitori", "Tempura"],
              "correct": 2
            },
            {
              "question": "Which fungus is considered a delicacy and is found underground?",
              "options": ["Morel", "Mushroom", "Truffle", "Chanterelle"],
              "correct": 2
            },
            {
              "question": "What is the name of the Italian dish made of thinly sliced raw meat or fish?",
              "options": ["Carpaccio", "Risotto", "Lasagna", "Gnocchi"],
              "correct": 0
            },
            {
              "question": "Which vitamin is absent in plant-based diets and must be supplemented?",
              "options": ["Vitamin C", "Vitamin B12", "Vitamin A", "Vitamin D"],
              "correct": 1
            },
            {
              "question": "Which food item contains capsaicin, the compound that makes it spicy?",
              "options": ["Garlic", "Onion", "Chili Pepper", "Ginger"],
              "correct": 2
            },
            {
              "question": "Which part of the saffron flower is used as a spice?",
              "options": ["Petals", "Stigma", "Stem", "Leaves"],
              "correct": 1
            },
            {
              "question": "Which of these fish is known for being oily and high in Omega-3?",
              "options": ["Cod", "Salmon", "Tuna", "Sardine"],
              "correct": 1
            },
            {
              "question": "What is the culinary term for cooking with steam in parchment paper?",
              "options": ["En papillote", "Sous vide", "Blanching", "Roasting"],
              "correct": 0
            },
            {
              "question": "Which beverage is made by fermenting tea with bacteria and yeast?",
              "options": ["Kombucha", "Lassi", "Kvass", "Kefir"],
              "correct": 0
            },
            {
              "question": "Which cooking oil has the highest smoke point?",
              "options": ["Olive oil", "Butter", "Ghee", "Avocado oil"],
              "correct": 3
            }
          ]
      },
        animals: {
            easy: [
                {
                    "question": "What is the largest mammal in the world?",
                    "options": ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                    "correct": 1
                },
                {
                    "question": "Which animal is known as the 'King of the Jungle'?",
                    "options": ["Tiger", "Lion", "Leopard", "Cheetah"],
                    "correct": 1
                },
                {
                    "question": "What is the fastest land animal?",
                    "options": ["Cheetah", "Lion", "Tiger", "Leopard"],
                    "correct": 0
                },
                {
                    "question": "Which animal is known for its black and white stripes?",
                    "options": ["Zebra", "Tiger", "Leopard", "Cheetah"],
                    "correct": 0
                },
                {
                    "question": "What is the largest bird in the world?",
                    "options": ["Eagle", "Ostrich", "Albatross", "Condor"],
                    "correct": 1
                },
                {
                    "question": "Which of these animals is not a mammal?",
                    "options": ["Dolphin", "Penguin", "Bat", "Kangaroo"],
                    "correct": 1
                },
                {
                    "question": "What do you call a baby cow?",
                    "options": ["Puppy", "Calf", "Kitten", "Foal"],
                    "correct": 1
                },
                {
                    "question": "Which animal is known for its humps?",
                    "options": ["Camel", "Elephant", "Rhino", "Hippo"],
                    "correct": 0
                },
                {
                    "question": "What is a female deer called?",
                    "options": ["Doe", "Buck", "Fawn", "Mare"],
                    "correct": 0
                },
                {
                    "question": "Which animal is the tallest in the world?",
                    "options": ["Elephant", "Giraffe", "Ostrich", "Polar Bear"],
                    "correct": 1
                },
                {
                    "question": "What do bees collect to make honey?",
                    "options": ["Pollen", "Nectar", "Water", "Sap"],
                    "correct": 1
                },
                {
                    "question": "Which animal is not a reptile?",
                    "options": ["Turtle", "Frog", "Snake", "Lizard"],
                    "correct": 1
                },
                {
                    "question": "How many legs does a spider typically have?",
                    "options": ["6", "8", "10", "12"],
                    "correct": 1
                },
                {
                    "question": "Which animal is known for carrying its baby in a pouch?",
                    "options": ["Kangaroo", "Koala", "Platypus", "Both A and B"],
                    "correct": 3
                },
                {
                    "question": "What is the most common domesticated pet in the world?",
                    "options": ["Dog", "Cat", "Fish", "Bird"],
                    "correct": 1
                }
            ],
            medium: [
                {
                    "question": "Which animal is known for its ability to change color?",
                    "options": ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
                    "correct": 3
                },
                {
                    "question": "What is the only mammal capable of true flight?",
                    "options": ["Bat", "Flying Squirrel", "Flying Fox", "Colugo"],
                    "correct": 0
                },
                {
                    "question": "Which animal has the longest lifespan?",
                    "options": ["Elephant", "Tortoise", "Whale", "Human"],
                    "correct": 1
                },
                {
                    "question": "What is the largest reptile in the world?",
                    "options": ["Komodo Dragon", "Saltwater Crocodile", "Anaconda", "Nile Crocodile"],
                    "correct": 1
                },
                {
                    "question": "Which animal is known for its ability to regenerate lost limbs?",
                    "options": ["Starfish", "Lizard", "Octopus", "All of the above"],
                    "correct": 3
                },
                {
                    "question": "What is the only continent where giraffes live in the wild?",
                    "options": ["Asia", "Africa", "South America", "Australia"],
                    "correct": 1
                },
                {
                    "question": "Which animal has the strongest relative bite force?",
                    "options": ["Hyena", "Jaguar", "Tasmanian Devil", "Hippopotamus"],
                    "correct": 2
                },
                {
                    "question": "What is the fastest marine animal?",
                    "options": ["Dolphin", "Sailfish", "Killer Whale", "Swordfish"],
                    "correct": 1
                },
                {
                    "question": "Which animal has the most powerful venom?",
                    "options": ["Black Mamba", "Box Jellyfish", "Inland Taipan", "Stonefish"],
                    "correct": 2
                },
                {
                    "question": "What is the only bird that can swim but cannot fly?",
                    "options": ["Ostrich", "Penguin", "Kiwi", "Emu"],
                    "correct": 1
                },
                {
                    "question": "Which animal has fingerprints most similar to humans?",
                    "options": ["Gorilla", "Chimpanzee", "Koala", "Raccoon"],
                    "correct": 2
                },
                {
                    "question": "What is the largest species of bear?",
                    "options": ["Grizzly Bear", "Polar Bear", "Kodiak Bear", "Black Bear"],
                    "correct": 1
                },
                {
                    "question": "Which animal has the longest migration?",
                    "options": ["Monarch Butterfly", "Arctic Tern", "Gray Whale", "Caribou"],
                    "correct": 1
                },
                {
                    "question": "What is the only big cat that lives in groups called prides?",
                    "options": ["Tiger", "Lion", "Leopard", "Jaguar"],
                    "correct": 1
                },
                {
                    "question": "Which animal has the thickest fur?",
                    "options": ["Musk Ox", "Sea Otter", "Polar Bear", "Bison"],
                    "correct": 1
                }
            ],
            hard: [
                {
                    "question": "Which animal has the most complex brain?",
                    "options": ["Dolphin", "Elephant", "Chimpanzee", "Octopus"],
                    "correct": 3
                },
                {
                    "question": "What is the only mammal that lays eggs?",
                    "options": ["Platypus", "Echidna", "Both A and B", "None of the above"],
                    "correct": 2
                },
                {
                    "question": "Which animal has the strongest bite force?",
                    "options": ["Lion", "Tiger", "Saltwater Crocodile", "Great White Shark"],
                    "correct": 2
                },
                {
                    "question": "What is the only bird that can fly backwards?",
                    "options": ["Hummingbird", "Kingfisher", "Bee-eater", "Swallow"],
                    "correct": 0
                },
                {
                    "question": "Which animal has the most complex social structure?",
                    "options": ["Chimpanzee", "Elephant", "Dolphin", "Ant"],
                    "correct": 3
                },
                {
                    "question": "Which animal has the highest blood pressure?",
                    "options": ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
                    "correct": 1
                },
                {
                    "question": "What is the only venomous primate?",
                    "options": ["Slow Loris", "Tarsier", "Aye-Aye", "Bush Baby"],
                    "correct": 0
                },
                {
                    "question": "Which animal can go the longest without water?",
                    "options": ["Camel", "Kangaroo Rat", "Desert Tortoise", "Thorny Devil"],
                    "correct": 1
                },
                {
                    "question": "What is the loudest animal relative to its size?",
                    "options": ["Howler Monkey", "Pistol Shrimp", "African Elephant", "Tiger Beetle"],
                    "correct": 1
                },
                {
                    "question": "Which animal has the most genes?",
                    "options": ["Human", "Elephant", "Water Flea", "Rice Plant"],
                    "correct": 2
                },
                {
                    "question": "What is the only animal known to recognize itself in a mirror?",
                    "options": ["Dolphin", "Elephant", "Great Ape", "All of the above"],
                    "correct": 3
                },
                {
                    "question": "Which animal has the most advanced echolocation?",
                    "options": ["Bat", "Dolphin", "Oilbird", "Aardvark"],
                    "correct": 1
                },
                {
                    "question": "What is the only animal that can see both ultraviolet and infrared light?",
                    "options": ["Mantis Shrimp", "Eagle", "Butterfly", "Goldfish"],
                    "correct": 0
                },
                {
                    "question": "Which animal has the highest body temperature?",
                    "options": ["Hummingbird", "Bat", "Tuna", "Desert Ant"],
                    "correct": 0
                },
                {
                    "question": "What is the only animal besides humans that goes through menopause?",
                    "options": ["Elephant", "Orca", "Chimpanzee", "None of the above"],
                    "correct": 1
                }
            ]
        }
    };

// Add a Set to track used questions
const usedQuestions = new Set();

// Function to get random questions
function getRandomQuestions(category, difficulty, count = 10) {
    // Check if the category and difficulty exist
    if (!quizQuestions[category] || !quizQuestions[category][difficulty]) {
        console.error(`Invalid category (${category}) or difficulty (${difficulty})`);
        return [];
    }

    // Get all questions for the selected category and difficulty
    const availableQuestions = [...quizQuestions[category][difficulty]];
    
    // Filter out questions that have already been used
    const unusedQuestions = availableQuestions.filter(q => !usedQuestions.has(q.question));
    
    // If we've used all questions, reset the used questions set
    if (unusedQuestions.length === 0) {
        usedQuestions.clear();
        return getRandomQuestions(category, difficulty, count);
    }
    
    // Check if we have enough questions
    if (unusedQuestions.length < count) {
        console.warn(`Not enough unused questions available. Requested ${count}, but only ${unusedQuestions.length} available.`);
        count = unusedQuestions.length;
    }

    // Shuffle the questions array using Fisher-Yates algorithm
    for (let i = unusedQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unusedQuestions[i], unusedQuestions[j]] = [unusedQuestions[j], unusedQuestions[i]];
    }

    // Get the selected questions and mark them as used
    const selectedQuestions = unusedQuestions.slice(0, count);
    selectedQuestions.forEach(q => usedQuestions.add(q.question));

    // Return the selected questions
    return selectedQuestions;
}

export { quizQuestions, getRandomQuestions }; 