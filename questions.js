// ================================================
// Quiz Master - Questions Module
// Author: Siddhartha Kushwaha
// ================================================

/**
 * Fetches quiz questions from the Open Trivia Database API
 * Formats the questions for use in the quiz application
 * 
 * @param {string} category - The category ID for the questions
 * @param {string} difficulty - The difficulty level (easy, medium, hard)
 * @param {number} amount - The number of questions to fetch
 * @returns {Promise} - Array of formatted question objects
 */
async function getRandomQuestions(category, difficulty, amount) {
    try {
        // Construct API URL with parameters
        let apiUrl = `https://opentdb.com/api.php?amount=${amount}`;
        
        if (category !== 'any') {
            apiUrl += `&category=${category}`;
        }
        
        if (difficulty !== 'any') {
            apiUrl += `&difficulty=${difficulty}`;
        }
        
        // Add type parameter for multiple choice questions
        apiUrl += '&type=multiple';
        
        // Fetch questions from API
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Handle API errors
        if (data.response_code !== 0) {
            throw new Error('Failed to fetch questions from API');
        }
        
        // Format questions for the quiz
        return formatQuestions(data.results);
    } catch (error) {
        // If API fails, fall back to default questions
        return getDefaultQuestions();
    }
}

/**
 * Formats raw API question data into the structure needed for the quiz
 * 
 * @param {Array} rawQuestions - Raw question data from API
 * @returns {Array} - Formatted question objects
 */
function formatQuestions(rawQuestions) {
    return rawQuestions.map(q => {
        // Decode HTML entities in question text
        const questionText = decodeHtml(q.question);
        
        // Get and decode correct answer
        const correctAnswer = decodeHtml(q.correct_answer);
        
        // Get and decode incorrect answers
        const incorrectAnswers = q.incorrect_answers.map(answer => decodeHtml(answer));
        
        // Combine all options and shuffle them
        const options = [...incorrectAnswers, correctAnswer];
        shuffleArray(options);
        
        // Find index of correct answer in shuffled options
        const correctIndex = options.indexOf(correctAnswer);
        
        // Return formatted question object
        return {
            question: questionText,
            options: options,
            correctIndex: correctIndex,
            difficulty: q.difficulty,
            category: q.category
        };
    });
}

/**
 * Decodes HTML entities in text strings
 * 
 * @param {string} html - String that may contain HTML entities
 * @returns {string} - Decoded string
 */
function decodeHtml(html) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
}

/**
 * Shuffles an array in-place using Fisher-Yates algorithm
 * 
 * @param {Array} array - The array to shuffle
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Provides default questions in case the API fails
 * 
 * @returns {Array} - Array of default question objects
 */
function getDefaultQuestions() {
    return [
        {
            question: "Which programming language is known as the 'mother of all languages'?",
            options: ["Java", "C", "C++", "Python"],
            correctIndex: 1,
            difficulty: "medium",
            category: "Computer Science"
        },
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "High-level Text Machine Language", "HyperTool Multi Language", "Home Tool Markup Language"],
            correctIndex: 0,
            difficulty: "easy",
            category: "Computer Science"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Jupiter", "Mars", "Saturn"],
            correctIndex: 2,
            difficulty: "easy",
            category: "Science & Nature"
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Madrid", "Paris"],
            correctIndex: 3,
            difficulty: "easy",
            category: "Geography"
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            correctIndex: 1,
            difficulty: "medium",
            category: "History"
        }
    ];
}

export { getRandomQuestions }; 