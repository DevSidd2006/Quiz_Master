import { quizQuestions, getRandomQuestions } from './questions.js';

// Sound effects
const sounds = {
    correct: new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3'),
    wrong: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
    start: new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3'),
    timeup: new Audio('https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3')
};

// Quiz state variables
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// User data management
let currentUser = null;
let userData = {
    users: {},
    scores: {},
    totalQuizzes: {},
    lastPlayed: {}
};

// Initialize user data from localStorage
function initializeUserData() {
    const storedData = localStorage.getItem('quizUserData');
    if (storedData) {
        userData = JSON.parse(storedData);
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('quizUserData', JSON.stringify(userData));
}

// DOM Elements
const signupContainer = document.getElementById('signup-container');
const loginContainer = document.getElementById('login-container');
const landingPage = document.getElementById('landing-page');
const quizContainer = document.getElementById('quiz-container');
const leaderboardPage = document.getElementById('leaderboard-page');
const userNameDisplay = document.getElementById('user-name');
const themeSelect = document.getElementById('theme');
const levelSelect = document.getElementById('level');
const startQuizButton = document.getElementById('start-quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const leaderboardButton = document.getElementById('leaderboard-button');
const backButton = document.getElementById('back-button');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Login form validation and handling
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginEmailError = document.getElementById('login-email-error');
const loginPasswordError = document.getElementById('login-password-error');
const loginError = document.getElementById('login-error');
const loginSubmit = document.getElementById('login-submit');
const togglePassword = document.getElementById('toggle-password');

// Toggle password visibility
togglePassword.addEventListener('click', function() {
    const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    loginPassword.setAttribute('type', type);
    this.querySelector('svg').classList.toggle('hidden');
});

// Form validation
function validateLoginForm() {
    let isValid = true;
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    // Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        loginEmailError.classList.remove('hidden');
        isValid = false;
    } else {
        loginEmailError.classList.add('hidden');
    }

    // Password validation
    if (!password) {
        loginPasswordError.classList.remove('hidden');
        isValid = false;
    } else {
        loginPasswordError.classList.add('hidden');
    }

    return isValid;
}

// Login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateLoginForm()) {
        return;
    }

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();
    const rememberMe = document.getElementById('remember-me').checked;

    // Disable submit button
    loginSubmit.disabled = true;
    loginSubmit.textContent = 'Logging in...';

    // Simulate login process (replace with actual authentication)
    setTimeout(() => {
        if (userData.users[email]) {
            // Successful login
            currentUser = email;
            userNameDisplay.textContent = userData.users[email].username;
            
            // Save remember me preference
            if (rememberMe) {
                localStorage.setItem('rememberedUser', email);
            } else {
                localStorage.removeItem('rememberedUser');
            }

            showContainer(landingPage);
            updateUserStats();
        } else {
            // Failed login
            loginError.textContent = 'Invalid email or password';
            loginError.classList.remove('hidden');
            loginSubmit.disabled = false;
            loginSubmit.textContent = 'Log In';
        }
    }, 1000);
});

// Check for remembered user
document.addEventListener('DOMContentLoaded', function() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser && userData.users[rememberedUser]) {
        loginEmail.value = rememberedUser;
        document.getElementById('remember-me').checked = true;
    }
});

// Hide all containers initially
function hideAllContainers() {
    signupContainer.classList.add('hidden');
    loginContainer.classList.add('hidden');
    landingPage.classList.add('hidden');
    quizContainer.classList.add('hidden');
    leaderboardPage.classList.remove('visible');
}

// Show specific container with animations
function showContainer(container) {
    hideAllContainers();
    
    if (container === landingPage) {
        container.classList.remove('hidden');
        container.classList.add('visible');
        
        // Add animation classes to elements
        const elements = container.querySelectorAll('*');
        elements.forEach((element, index) => {
            element.classList.add('animate-fade-in');
            element.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Add specific animations to key elements
        const title = container.querySelector('h1');
        if (title) {
            title.classList.add('animate-slide-in');
        }
        
        const buttons = container.querySelectorAll('button');
        buttons.forEach((button, index) => {
            button.classList.add('animate-scale-in');
            button.style.animationDelay = `${0.3 + index * 0.1}s`;
        });
    } else {
        container.classList.remove('hidden');
        if (container === leaderboardPage) {
            container.classList.add('visible');
        }
    }
}

// Signup form handling
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

// Toggle between signup and login forms
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    loginContainer.classList.add('visible');
});

signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginContainer.classList.add('hidden');
    loginContainer.classList.remove('visible');
    signupContainer.classList.remove('hidden');
});

// Signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate inputs
    if (!username || !email) {
        alert('Please fill in all fields');
        return;
    }

    // Check if user already exists
    if (userData.users[email]) {
        alert('Email already registered! Please log in instead.');
        return;
    }

    // Create new user
    userData.users[email] = {
        username,
        email,
        scores: {},
        totalQuizzes: 0,
        lastPlayed: null
    };

    // Save user data
    saveUserData();

    // Update UI
    currentUser = email;
    userNameDisplay.textContent = username;
    showContainer(landingPage);
    updateUserStats();
});

// Start quiz button click handler
startQuizButton.addEventListener('click', function() {
    const theme = themeSelect.value;
    const level = levelSelect.value;
    
    // Get random questions for selected category and difficulty
    currentQuiz = getRandomQuestions(theme, level, 10);
    
    if (!currentQuiz || currentQuiz.length === 0) {
        alert('No questions available for this combination. Please try another.');
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    
    showContainer(quizContainer);
    showQuestion();
});

// Next button click handler
nextButton.addEventListener('click', showNextQuestion);

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button w-full bg-white text-gray-800 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white';
        button.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(button);
    });

    nextButton.classList.add('hidden');
    updateProgressBar();
    startTimer();
}

// Add userAnswers array to track answers
let userAnswers = [];

function selectAnswer(index) {
    stopTimer();
    const question = currentQuiz[currentQuestionIndex];
    const buttons = optionsElement.querySelectorAll('button');
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = index;
    
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    if (index === question.correct) {
        buttons[index].classList.add('correct');
        score++;
        scoreElement.textContent = `Score: ${score}`;
        sounds.correct.play();
    } else {
        buttons[index].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
        sounds.wrong.play();
    }
    
    nextButton.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'results-container p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 animate-fade-in';
    resultsContainer.innerHTML = `
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-green-500 mb-4">Congratulations! 🎉</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">You've completed the quiz!</p>
        </div>
        
        <div class="score-summary bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-8">
            <h3 class="text-2xl font-semibold mb-4 text-center">Your Score Summary</h3>
            <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <p class="text-gray-600 dark:text-gray-300">Total Questions</p>
                    <p class="text-2xl font-bold">${currentQuiz.length}</p>
                </div>
                <div class="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <p class="text-gray-600 dark:text-gray-300">Your Score</p>
                    <p class="text-2xl font-bold text-green-500">${score}</p>
                </div>
                <div class="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <p class="text-gray-600 dark:text-gray-300">Correct Answers</p>
                    <p class="text-2xl font-bold text-green-500">${score}</p>
                </div>
                <div class="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <p class="text-gray-600 dark:text-gray-300">Wrong Answers</p>
                    <p class="text-2xl font-bold text-red-500">${currentQuiz.length - score}</p>
                </div>
            </div>
        </div>

        <div class="question-results">
            <h3 class="text-2xl font-semibold mb-4 text-center">Question-wise Results</h3>
            <div class="space-y-4">
                ${currentQuiz.map((question, index) => `
                    <div class="question-result p-4 rounded-lg ${userAnswers[index] === question.correct ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'}">
                        <p class="font-semibold mb-2">Question ${index + 1}: ${question.question}</p>
                        <p class="mb-1">Your Answer: ${question.options[userAnswers[index]]}</p>
                        <p class="mb-1">Correct Answer: ${question.options[question.correct]}</p>
                        <p class="text-sm ${userAnswers[index] === question.correct ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-300'}">
                            ${userAnswers[index] === question.correct ? '✓ Correct' : '✗ Wrong'}
                        </p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mt-8 text-center">
            <button id="back-to-home" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Back to Home
            </button>
        </div>
    `;

    // Add results container to the page
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultsContainer);

    // Add event listener for back button
    document.getElementById('back-to-home').addEventListener('click', function() {
        showContainer(landingPage);
        updateUserStats();
    });

    // Update user data
    userData.scores[currentUser] = (userData.scores[currentUser] || 0) + score;
    userData.totalQuizzes[currentUser] = (userData.totalQuizzes[currentUser] || 0) + 1;
    userData.lastPlayed[currentUser] = new Date().toLocaleDateString();
    saveUserData();
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = `Time: ${timeLeft}s`;
    
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            sounds.timeup.play();
            handleTimeUp();
        }
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
    }
}

function handleTimeUp() {
    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    const question = currentQuiz[currentQuestionIndex];
    const correctButton = buttons[question.correct];
    correctButton.classList.add('correct');
    
    nextButton.classList.remove('hidden');
}

// Update user stats
function updateUserStats() {
    if (!currentUser) return;
    
    document.getElementById('current-score').textContent = userData.scores[currentUser] || 0;
    document.getElementById('user-rank').textContent = calculateUserRank();
    document.getElementById('total-quizzes').textContent = userData.totalQuizzes[currentUser] || 0;
}

// Calculate user's rank
function calculateUserRank() {
    if (!currentUser) return '-';
    
    const allUsers = Object.entries(userData.scores)
        .map(([email, score]) => ({ email, score }))
        .sort((a, b) => b.score - a.score);
    
    const userIndex = allUsers.findIndex(user => user.email === currentUser);
    return userIndex !== -1 ? userIndex + 1 : '-';
}

// Update leaderboard
function updateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard-table');
    leaderboardTable.innerHTML = '';

    // Get all users and sort by score
    const allUsers = Object.entries(userData.scores)
        .map(([email, score]) => ({
            username: userData.users[email]?.username || email,
            score,
            totalQuizzes: userData.totalQuizzes[email] || 0,
            lastPlayed: userData.lastPlayed[email] || 'Never'
        }))
        .sort((a, b) => b.score - a.score);

    // Add rows to the leaderboard table
    allUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.className = 'leaderboard-item hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors';
        row.innerHTML = `
            <td class="py-4">${index + 1}</td>
            <td class="py-4">${user.username}</td>
            <td class="py-4">${user.score}</td>
            <td class="py-4">${user.totalQuizzes}</td>
            <td class="py-4">${user.lastPlayed}</td>
        `;
        leaderboardTable.appendChild(row);
    });
}

// Leaderboard button click handler
leaderboardButton.addEventListener('click', function() {
    if (!currentUser) {
        // If no user is logged in, show the login page
        showContainer(loginContainer);
        loginError.textContent = 'Please log in to view the leaderboard';
        loginError.classList.remove('hidden');
        return;
    }
    showContainer(leaderboardPage);
    updateLeaderboard();
});

// Back button click handler
backButton.addEventListener('click', function() {
    showContainer(landingPage);
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeUserData();
    hideAllContainers();
    showContainer(signupContainer);
});

// Add interactivity for theme switching and quiz functionality
const app = document.getElementById('app');
const leaderboardContainer = document.getElementById('leaderboard-container');

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
let isDarkTheme = false;

themeToggle.addEventListener('click', function() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme');
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('svg');
    if (isDarkTheme) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
    }
});

// Add animations for questions and options
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { transform: translateX(-100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes scaleIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@keyframes gradientBackground {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

.animate-slide-in {
    animation: slideIn 0.5s ease-in-out;
}

.animate-scale-in {
    animation: scaleIn 0.5s ease-in-out;
}

.animate-delay-100 {
    animation-delay: 0.1s;
}

.animate-delay-200 {
    animation-delay: 0.2s;
}

.animate-delay-300 {
    animation-delay: 0.3s;
}

body {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    background-size: 400% 400%;
    animation: gradientBackground 15s ease infinite;
}

.landing-page {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.landing-page.visible {
    opacity: 1;
}`;
document.head.appendChild(style);