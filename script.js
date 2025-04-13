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

// Show specific container
function showContainer(container) {
    hideAllContainers();
    container.classList.remove('hidden');
    if (container === leaderboardPage) {
        container.classList.add('visible');
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

function selectAnswer(index) {
    stopTimer();
    const question = currentQuiz[currentQuestionIndex];
    const buttons = optionsElement.querySelectorAll('button');
    
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
    quizContainer.classList.add('hidden');
    landingPage.classList.remove('hidden');
    
    // Update user's score
    userData.scores[currentUser] = (userData.scores[currentUser] || 0) + score;
    userData.totalQuizzes[currentUser]++;
    userData.lastPlayed[currentUser] = new Date().toLocaleDateString();

    // Save and update UI
    saveUserData();
    updateUserStats();
    updateLeaderboard();

    // Show results alert
    const rank = calculateUserRank();
    alert(`Quiz completed!\n\nYour score: ${score}\nYour rank: ${rank}\nTotal quizzes taken: ${userData.totalQuizzes[currentUser]}`);

    // Return to landing page
    showContainer(landingPage);
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
    document.getElementById('total-quizzes').textContent = userData.totalQuizzes[currentUser] || 0;
    document.getElementById('user-rank').textContent = calculateUserRank();
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

    const allUsers = Object.entries(userData.scores)
        .map(([email, score]) => ({
            username: userData.users[email].username,
            score,
            totalQuizzes: userData.totalQuizzes[email],
            lastPlayed: userData.lastPlayed[email]
        }))
        .sort((a, b) => b.score - a.score);

    allUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors';
        row.innerHTML = `
            <td class="py-4">${index + 1}</td>
            <td class="py-4">${user.username}</td>
            <td class="py-4">${user.score}</td>
            <td class="py-4">${user.totalQuizzes}</td>
            <td class="py-4">${user.lastPlayed || 'Never'}</td>
        `;
        leaderboardTable.appendChild(row);
    });
}

// Leaderboard button click handler
leaderboardButton.addEventListener('click', function() {
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

// Example: Toggle dark mode
document.body.classList.add('bg-gray-100', 'text-gray-800');
const toggleTheme = () => {
    document.body.classList.toggle('bg-gray-800');
    document.body.classList.toggle('text-gray-100');
    document.body.classList.toggle('bg-gray-100');
    document.body.classList.toggle('text-gray-800');
};

// Add a button for theme toggle
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Toggle Theme';
themeToggleButton.className = 'p-2 bg-blue-500 text-white rounded mt-4';
themeToggleButton.addEventListener('click', toggleTheme);
app.appendChild(themeToggleButton);

// Add animations for questions and options
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

body {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    background-size: 400% 400%;
    animation: gradientBackground 15s ease infinite;
}

@keyframes gradientBackground {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`;
document.head.appendChild(style);