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
            }
        ],
        medium: [
            {
                question: "What is the speed of light in vacuum?",
                options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "249,792 km/s"],
                correct: 0
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
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "In which year did the French Revolution begin?",
                options: ["1789", "1776", "1804", "1812"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Who was the last emperor of the Byzantine Empire?",
                options: ["Constantine XI", "Justinian I", "Heraclius", "Basil II"],
                correct: 0
            }
        ]
    },
    geography: {
        easy: [
            {
                question: "What is the largest continent?",
                options: ["North America", "Africa", "Europe", "Asia"],
                correct: 3
            }
        ],
        medium: [
            {
                question: "Which river is the longest in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "United States", "France", "China"],
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
            }
        ],
        medium: [
            {
                question: "How many players are there in a standard cricket team?",
                options: ["9", "10", "11", "12"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "Who holds the record for most Olympic gold medals?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
                correct: 1
            }
        ]
    },
    entertainment: {
        easy: [
            {
                question: "Who played Harry Potter in the Harry Potter films?",
                options: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Matthew Lewis"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which film won the Academy Award for Best Picture in 2020?",
                options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who was the first actor to win an Oscar posthumously?",
                options: ["Heath Ledger", "Peter Finch", "James Dean", "Philip Seymour Hoffman"],
                correct: 1
            }
        ]
    },
    math: {
        easy: [
            {
                question: "What is the square root of 144?",
                options: ["10", "12", "14", "16"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the value of π (pi) to two decimal places?",
                options: ["3.14", "3.16", "3.12", "3.18"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the sum of the interior angles of a hexagon?",
                options: ["720°", "540°", "360°", "900°"],
                correct: 0
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