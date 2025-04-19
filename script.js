// ================================================
// Quiz Master - Main Application Script
// Author: Siddhartha Kushwaha
// ================================================

// DOM Elements
const landingPage = document.getElementById('landing-page');
const rulesContainer = document.getElementById('rules-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const leaderboardContainer = document.getElementById('leaderboard-container');
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const progressBar = document.getElementById('progress-bar');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const usernameInput = document.getElementById('username');
const saveScoreButton = document.getElementById('save-score');
const leaderboardList = document.getElementById('leaderboard');
const backToHomeButton = document.getElementById('back-to-home');
const quizForm = document.getElementById('quiz-form');
const loadingSpinner = document.getElementById('loading-spinner');
const themeToggleButton = document.getElementById('theme-toggle');

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let questions = [];
let selectedOptionElement = null;
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// ================================================
// Quiz Initialization Functions
// ================================================

/**
 * Initialize the quiz application
 */
function initApp() {
    // Set up event listeners
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', handleNextQuestion);
    saveScoreButton.addEventListener('click', saveScore);
    backToHomeButton.addEventListener('click', goToHome);
    themeToggleButton.addEventListener('click', toggleTheme);
    
    // Load categories for dropdown
    loadCategories();
    
    // Display leaderboard
    displayLeaderboard();
    
    // Apply saved theme preference
    applyTheme();
}

/**
 * Load quiz categories from the API
 */
function loadCategories() {
    const categories = [
        { id: 9, name: 'General Knowledge' },
        { id: 17, name: 'Science & Nature' },
        { id: 18, name: 'Computer Science' },
        { id: 19, name: 'Mathematics' },
        { id: 21, name: 'Sports' },
        { id: 22, name: 'Geography' },
        { id: 23, name: 'History' },
        { id: 24, name: 'Politics' },
        { id: 27, name: 'Animals' }
    ];
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// ================================================
// Quiz Navigation Functions
// ================================================

/**
 * Start the quiz with selected options
 */
function startQuiz(event) {
    event.preventDefault();
    
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    
    landingPage.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    
    // Fetch questions from our questions module
    getRandomQuestions(category, difficulty, 5)
        .then(fetchedQuestions => {
            questions = fetchedQuestions;
            
            setTimeout(() => {
                loadingSpinner.classList.add('hidden');
                rulesContainer.classList.remove('hidden');
                
                document.getElementById('start-quiz-btn').addEventListener('click', () => {
                    rulesContainer.classList.add('hidden');
                    quizContainer.classList.remove('hidden');
                    displayQuestion();
                    startTimer();
                });
            }, 1000);
        })
        .catch(error => {
            alert('Failed to load quiz questions. Please try again.');
            goToHome();
        });
}

/**
 * Display the current question and options
 */
function displayQuestion() {
    resetState();
    
    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    
    questionElement.innerHTML = `
        <span class="question-number">Question ${questionNumber}/5:</span> 
        ${currentQuestion.question}
    `;
    
    // Update progress bar
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    
    // Display options
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });
    
    // Hide next button initially
    nextButton.style.display = 'none';
}

/**
 * Reset the quiz state for the next question
 */
function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    
    nextButton.style.display = 'none';
    selectedOptionElement = null;
    clearInterval(timer);
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    startTimer();
}

/**
 * Handle selection of an answer option
 */
function selectOption(selectedButton, selectedIndex) {
    clearInterval(timer);
    
    const currentQuestion = questions[currentQuestionIndex];
    
    // Clear previous selection
    if (selectedOptionElement) {
        selectedOptionElement.classList.remove('selected');
    }
    
    // Mark new selection
    selectedButton.classList.add('selected');
    selectedOptionElement = selectedButton;
    
    // Check if answer is correct
    const correct = selectedIndex === currentQuestion.correctIndex;
    
    if (correct) {
        selectedButton.classList.add('correct');
        incrementScore();
    } else {
        selectedButton.classList.add('wrong');
        
        // Highlight correct answer
        const buttons = optionsContainer.querySelectorAll('.option-button');
        buttons[currentQuestion.correctIndex].classList.add('correct');
    }
    
    // Show next button
    nextButton.style.display = 'block';
}

/**
 * Handle moving to the next question
 */
function handleNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

/**
 * Show the quiz results
 */
function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    finalScoreElement.textContent = score;
    
    // Enable/disable save button based on username
    usernameInput.addEventListener('input', () => {
        saveScoreButton.disabled = !usernameInput.value;
    });
}

/**
 * Navigate back to the home screen
 */
function goToHome() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    questions = [];
    
    // Reset UI
    landingPage.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    rulesContainer.classList.add('hidden');
    leaderboardContainer.classList.add('hidden');
    loadingSpinner.classList.add('hidden');
}

// ================================================
// Timer Functions
// ================================================

/**
 * Start the countdown timer for a question
 */
function startTimer() {
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 5) {
            timerElement.style.color = '#ff6b6b';
        } else {
            timerElement.style.color = '#667eea';
        }
        
        if (timeLeft === 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

/**
 * Handle when time is up for a question
 */
function handleTimeUp() {
    // Automatically select wrong answer
    const buttons = optionsContainer.querySelectorAll('.option-button');
    
    // Highlight correct answer
    const currentQuestion = questions[currentQuestionIndex];
    buttons[currentQuestion.correctIndex].classList.add('correct');
    
    // Show next button
    nextButton.style.display = 'block';
}

// ================================================
// Score & Leaderboard Functions
// ================================================

/**
 * Increment the score when answering correctly
 */
function incrementScore() {
    // Base score + time bonus
    const timeBonus = timeLeft;
    const pointsToAdd = 10 + timeBonus;
    
    score += pointsToAdd;
    scoreElement.textContent = score;
    
    // Add animation
    scoreElement.classList.add('increase');
    setTimeout(() => {
        scoreElement.classList.remove('increase');
    }, 500);
}

/**
 * Save score to leaderboard
 */
function saveScore() {
    if (!usernameInput.value) return;
    
    const newScore = {
        username: usernameInput.value,
        score: score,
        category: categorySelect.options[categorySelect.selectedIndex].text,
        difficulty: difficultySelect.value,
        date: new Date().toISOString()
    };
    
    // Add to leaderboard
    leaderboard.push(newScore);
    
    // Sort by score (highest first)
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Keep only top 10
    leaderboard = leaderboard.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
    // Show leaderboard
    displayLeaderboard();
    resultContainer.classList.add('hidden');
    leaderboardContainer.classList.remove('hidden');
}

/**
 * Display the leaderboard from stored scores
 */
function displayLeaderboard() {
    leaderboardList.innerHTML = '';
    
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('leaderboard-item');
        
        // Format date
        const date = new Date(entry.date);
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        
        // Create HTML for leaderboard entry
        listItem.innerHTML = `
            <div class="flex justify-between p-4 bg-white rounded-lg shadow-md mb-2">
                <div class="flex items-center space-x-4">
                    <span class="text-3xl font-bold text-indigo-500">#${index + 1}</span>
                    <div>
                        <h3 class="text-xl font-semibold">${entry.username}</h3>
                        <p class="text-gray-600">${entry.category} (${entry.difficulty})</p>
                        <p class="text-xs text-gray-400">${formattedDate}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <span class="text-2xl font-bold text-indigo-600">${entry.score}</span>
                </div>
            </div>
        `;
        
        leaderboardList.appendChild(listItem);
    });
}

// ================================================
// Theme Functions
// ================================================

/**
 * Toggle between light and dark theme
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Save theme preference
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkTheme);
    
    // Update button icon
    const icon = themeToggleButton.querySelector('i');
    if (isDarkTheme) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

/**
 * Apply saved theme preference
 */
function applyTheme() {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        const icon = themeToggleButton.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', initApp);