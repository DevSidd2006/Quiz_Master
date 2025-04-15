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
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "N2"],
                correct: 0
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
                question: "Which vitamin is produced by the human body when exposed to sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                correct: 3
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
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                correct: 1
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
            }
        ],
        medium: [
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
            }
        ],
        medium: [
            {
                question: "Which country has the longest coastline?",
                options: ["Russia", "Canada", "USA", "Australia"],
                correct: 1
            },
            {
                question: "What is the capital of Argentina?",
                options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
                correct: 0
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
            }
        ],
        hard: [
            {
                question: "Which country has the highest average elevation?",
                options: ["Nepal", "Bhutan", "Switzerland", "Lesotho"],
                correct: 1
            },
            {
                question: "What is the largest underground lake in the world?",
                options: ["Lost Sea", "Dragon's Breath Cave", "Lake Vostok", "Lake Baikal"],
                correct: 0
            },
            {
                question: "What is the largest uninhabited island in the world?",
                options: ["Devon Island", "Greenland", "Antarctica", "Baffin Island"],
                correct: 0
            },
            {
                question: "Which country has the most UNESCO Biosphere Reserves?",
                options: ["USA", "Spain", "Mexico", "Russia"],
                correct: 1
            },
            {
                question: "Which country has the most borders with other countries?",
                options: ["Russia", "China", "Brazil", "Germany"],
                correct: 1
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
            }
        ],
        medium: [
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Brazil", "Italy", "Argentina"],
                correct: 1
            },
            {
                question: "Who holds the record for most Olympic gold medals?",
                options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Mark Spitz"],
                correct: 0
            },
            {
                question: "Which tennis player has won the most Grand Slam titles?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                correct: 2
            },
            {
                question: "In which year did the first modern Olympic Games take place?",
                options: ["1886", "1896", "1906", "1916"],
                correct: 1
            },
            {
                question: "Which country has won the most Olympic gold medals?",
                options: ["United States", "China", "Russia", "Great Britain"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which sport has the most expensive equipment?",
                options: ["Formula 1", "Golf", "Sailing", "Equestrian"],
                correct: 0
            },
            {
                question: "Which sport has the most complex scoring system?",
                options: ["Gymnastics", "Figure Skating", "Diving", "Synchronized Swimming"],
                correct: 1
            },
            {
                question: "Which sport has the most injuries?",
                options: ["Football", "Rugby", "Boxing", "Hockey"],
                correct: 1
            },
            {
                question: "Which sport has the most rules?",
                options: ["Cricket", "Baseball", "American Football", "Rugby"],
                correct: 0
            },
            {
                question: "Which sport has the most expensive tickets?",
                options: ["Formula 1", "Golf", "Tennis", "Football"],
                correct: 0
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
                question: "What does 'HTML' stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
                correct: 0
            },
            {
                question: "Which company created the iPhone?",
                options: ["Samsung", "Apple", "Google", "Microsoft"],
                correct: 1
            },
            {
                question: "What is the most popular operating system for computers?",
                options: ["Windows", "macOS", "Linux", "Chrome OS"],
                correct: 0
            },
            {
                question: "Which social media platform has the most users?",
                options: ["Facebook", "Instagram", "Twitter", "TikTok"],
                correct: 0
            },
            {
                question: "What does 'Wi-Fi' stand for?",
                options: ["Wireless Fidelity", "Wide Frequency", "Wireless Frequency", "Wide Fidelity"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which programming language is known as the 'language of the web'?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "What is the name of Google's AI assistant?",
                options: ["Alexa", "Siri", "Google Assistant", "Cortana"],
                correct: 2
            },
            {
                question: "Which company developed the Android operating system?",
                options: ["Apple", "Microsoft", "Google", "Samsung"],
                correct: 2
            },
            {
                question: "What is the term for a computer program that replicates itself?",
                options: ["Bug", "Virus", "Malware", "Spyware"],
                correct: 1
            },
            {
                question: "Which technology is used to create virtual reality experiences?",
                options: ["AR", "VR", "MR", "XR"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the name of the first computer virus?",
                options: ["ILOVEYOU", "Creeper", "Melissa", "Stuxnet"],
                correct: 1
            },
            {
                question: "Which company developed the first commercial computer?",
                options: ["Apple", "Microsoft", "IBM", "Intel"],
                correct: 2
            },
            {
                question: "What is the term for a computer's ability to learn and improve from experience?",
                options: ["Machine Learning", "Artificial Intelligence", "Deep Learning", "Neural Networks"],
                correct: 0
            },
            {
                question: "Which technology is used to create secure online transactions?",
                options: ["HTTP", "HTTPS", "FTP", "SMTP"],
                correct: 1
            },
            {
                question: "What is the name of the first programming language?",
                options: ["FORTRAN", "COBOL", "Assembly", "LISP"],
                correct: 0
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
    food: {
        easy: [
            {
                question: "What is the main ingredient in guacamole?",
                options: ["Tomato", "Avocado", "Onion", "Lime"],
                correct: 1
            },
            {
                question: "Which country is known for sushi?",
                options: ["China", "Japan", "Korea", "Thailand"],
                correct: 1
            },
            {
                question: "What is the main ingredient in hummus?",
                options: ["Chickpeas", "Lentils", "Beans", "Peas"],
                correct: 0
            },
            {
                question: "Which country is known for pizza?",
                options: ["Italy", "France", "Spain", "Greece"],
                correct: 0
            },
            {
                question: "What is the main ingredient in paella?",
                options: ["Rice", "Pasta", "Bread", "Potatoes"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which country is known for kimchi?",
                options: ["Japan", "Korea", "China", "Thailand"],
                correct: 1
            },
            {
                question: "What is the main ingredient in ratatouille?",
                options: ["Eggplant", "Zucchini", "Tomato", "All of the above"],
                correct: 3
            },
            {
                question: "Which country is known for pho?",
                options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
                correct: 1
            },
            {
                question: "What is the main ingredient in falafel?",
                options: ["Chickpeas", "Lentils", "Beans", "Peas"],
                correct: 0
            },
            {
                question: "Which country is known for pad thai?",
                options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which country is known for mole sauce?",
                options: ["Mexico", "Spain", "Portugal", "Brazil"],
                correct: 0
            },
            {
                question: "What is the main ingredient in borscht?",
                options: ["Beets", "Carrots", "Potatoes", "Cabbage"],
                correct: 0
            },
            {
                question: "Which country is known for ceviche?",
                options: ["Peru", "Mexico", "Brazil", "Argentina"],
                correct: 0
            },
            {
                question: "What is the main ingredient in tzatziki?",
                options: ["Yogurt", "Sour Cream", "Mayonnaise", "Butter"],
                correct: 0
            },
            {
                question: "Which country is known for injera?",
                options: ["Ethiopia", "Egypt", "Morocco", "Tunisia"],
                correct: 0
            }
        ]
    },
    animals: {
        easy: [
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                correct: 1
            },
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Tiger", "Lion", "Leopard", "Cheetah"],
                correct: 1
            },
            {
                question: "What is the fastest land animal?",
                options: ["Cheetah", "Lion", "Tiger", "Leopard"],
                correct: 0
            },
            {
                question: "Which animal is known for its black and white stripes?",
                options: ["Zebra", "Tiger", "Leopard", "Cheetah"],
                correct: 0
            },
            {
                question: "What is the largest bird in the world?",
                options: ["Eagle", "Ostrich", "Albatross", "Condor"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Which animal is known for its ability to change color?",
                options: ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
                correct: 3
            },
            {
                question: "What is the only mammal capable of true flight?",
                options: ["Bat", "Flying Squirrel", "Flying Fox", "Colugo"],
                correct: 0
            },
            {
                question: "Which animal has the longest lifespan?",
                options: ["Elephant", "Tortoise", "Whale", "Human"],
                correct: 1
            },
            {
                question: "What is the largest reptile in the world?",
                options: ["Komodo Dragon", "Saltwater Crocodile", "Anaconda", "Nile Crocodile"],
                correct: 1
            },
            {
                question: "Which animal is known for its ability to regenerate lost limbs?",
                options: ["Starfish", "Lizard", "Octopus", "All of the above"],
                correct: 3
            }
        ],
        hard: [
            {
                question: "Which animal has the most complex brain?",
                options: ["Dolphin", "Elephant", "Chimpanzee", "Octopus"],
                correct: 3
            },
            {
                question: "What is the only mammal that lays eggs?",
                options: ["Platypus", "Echidna", "Both A and B", "None of the above"],
                correct: 2
            },
            {
                question: "Which animal has the strongest bite force?",
                options: ["Lion", "Tiger", "Saltwater Crocodile", "Great White Shark"],
                correct: 2
            },
            {
                question: "What is the only bird that can fly backwards?",
                options: ["Hummingbird", "Kingfisher", "Bee-eater", "Swallow"],
                correct: 0
            },
            {
                question: "Which animal has the most complex social structure?",
                options: ["Chimpanzee", "Elephant", "Dolphin", "Ant"],
                correct: 3
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