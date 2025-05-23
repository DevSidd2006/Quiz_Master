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
let userAnswers = [];
let streak = 0;
let timeBonus = 0;
let totalTimeBonus = 0;
let hintsAvailable = 3;
let powerUps = {
    skip: 1,
    timeFreeze: 1,
    doublePoints: 1
};

// Leaderboard data structure
let leaderboardData = {
    scores: [],
    lastUpdated: null
};

// Add scoring constants
const SCORING = {
    BASE_POINTS: 10,
    TIME_BONUS_MULTIPLIER: 0.67, // 67% of base points possible as time bonus
    STREAK_BONUS: {
        3: 5,  // 5 points bonus at 3 correct answers
        5: 10  // 10 points bonus at 5 correct answers
    },
    MIN_TIME_FOR_BONUS: 5 // Minimum seconds required for time bonus
};

// Add to quiz state variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let skippedQuestions = 0;
let hintsUsed = 0;
let powerUpsUsed = 0;
let totalStreakBonus = 0; // Add this to track total streak bonus

// Update penalty constants
const PENALTIES = {
    HINT: 5,     // 5 points penalty per hint used
    SKIP: 10,    // 10 points penalty per skip
    TIME_FREEZE: 10, // 10 points penalty per time freeze
    DOUBLE_POINTS: 10 // 10 points penalty per double points used
};

// DOM Elements
let landingPage;
let quizContainer;
let leaderboardPage;
let themeSelect;
let levelSelect;
let startQuizButton;
let questionElement;
let optionsElement;
let nextButton;
let leaderboardButton;
let backButton;
let scoreElement;
let timerElement;

// Initialize DOM elements
function initializeDOMElements() {
    landingPage = document.getElementById('landing-page');
    quizContainer = document.getElementById('quiz-container');
    leaderboardPage = document.getElementById('leaderboard-page');
    themeSelect = document.getElementById('theme');
    levelSelect = document.getElementById('level');
    startQuizButton = document.getElementById('start-quiz');
    questionElement = document.getElementById('question');
    optionsElement = document.getElementById('options');
    nextButton = document.getElementById('next-button');
    leaderboardButton = document.getElementById('leaderboard-button');
    backButton = document.getElementById('back-button');
    scoreElement = document.getElementById('score');
    timerElement = document.getElementById('timer');
}

// Hide all containers initially
function hideAllContainers() {
    landingPage.classList.add('hidden');
    quizContainer.classList.add('hidden');
    leaderboardPage.classList.remove('visible');
    const rulesContainer = document.getElementById('rules-container');
    if (rulesContainer) {
        rulesContainer.classList.add('hidden');
    }
}

// Show specific container with animations
function showContainer(container) {
    hideAllContainers();
        container.classList.remove('hidden');
        if (container === leaderboardPage) {
            container.classList.add('visible');
        }
    }

function resetQuizState() {
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    timeBonus = 0;
    totalTimeBonus = 0;
    hintsAvailable = 3;
    powerUps = {
        skip: 1,
        timeFreeze: 1,
        doublePoints: 1
    };
    correctAnswers = 0;
    incorrectAnswers = 0;
    skippedQuestions = 0;
    hintsUsed = 0;
    powerUpsUsed = 0;
    userAnswers = [];
    timeLeft = 15;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    if (scoreElement) scoreElement.textContent = `Score: ${score}`;
    if (timerElement) timerElement.textContent = `Time: ${timeLeft}s`;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = '0%';
}

// Initialize leaderboard from localStorage
function initializeLeaderboard() {
    const storedData = localStorage.getItem('quizLeaderboard');
    if (storedData) {
        leaderboardData = JSON.parse(storedData);
    }
}

// Save leaderboard to localStorage
function saveLeaderboard() {
    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboardData));
}

// Add score to leaderboard
function addScoreToLeaderboard(score, theme, level) {
    const username = document.getElementById('username').value.trim();
    if (!username) {
        alert('Please enter a username before starting the quiz.');
        return;
    }

    const entry = {
        username,
        score,
        theme,
        level,
        timestamp: new Date().toISOString(),
        id: Date.now() // Unique identifier for each entry
    };
    
    // Remove any existing entries for this user
    leaderboardData.scores = leaderboardData.scores.filter(entry => entry.username !== username);
    
    // Add the new entry
    leaderboardData.scores.push(entry);
    leaderboardData.lastUpdated = new Date().toISOString();
    
    // Sort scores in descending order
    leaderboardData.scores.sort((a, b) => b.score - a.score);
    
    // Keep only top 100 scores
    if (leaderboardData.scores.length > 100) {
        leaderboardData.scores = leaderboardData.scores.slice(0, 100);
    }
    
    saveLeaderboard();
    updateLeaderboardDisplay();
}

// Update leaderboard display to make it more visually appealing
function updateLeaderboardDisplay() {
    const leaderboardTable = document.getElementById('leaderboard-table');
    if (!leaderboardTable) return;

    leaderboardTable.innerHTML = '';

    leaderboardData.scores.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.className = 'leaderboard-item hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors';
        
        // Add medal emoji for top 3 positions
        let rankDisplay = index + 1;
        if (index === 0) {
            rankDisplay = '🥇';
        } else if (index === 1) {
            rankDisplay = '🥈';
        } else if (index === 2) {
            rankDisplay = '🥉';
        }

        // Add special styling for top 3 positions
        const rankClass = index < 3 ? 'text-2xl' : 'font-semibold text-gray-700 dark:text-gray-300';
        const scoreClass = index < 3 ? 'text-2xl font-bold' : 'font-bold text-green-500 dark:text-green-400';
        const usernameClass = index < 3 ? 'text-xl font-bold text-indigo-600 dark:text-indigo-400' : 'font-medium text-indigo-600 dark:text-indigo-400';

        row.innerHTML = `
            <td class="py-4 text-center ${rankClass}">${rankDisplay}</td>
            <td class="py-4 text-center ${usernameClass}">${entry.username}</td>
            <td class="py-4 text-center ${scoreClass}">${entry.score}</td>
            <td class="py-4 text-center text-sm text-gray-500 dark:text-gray-400">${entry.theme} (${entry.level})</td>
            <td class="py-4 text-center text-sm text-gray-500 dark:text-gray-400">${new Date(entry.timestamp).toLocaleString()}</td>
        `;
        leaderboardTable.appendChild(row);
    });

    // Add a header row for better clarity
    const headerRow = document.createElement('tr');
    headerRow.className = 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    headerRow.innerHTML = `
        <th class="py-4 text-center">Rank</th>
        <th class="py-4 text-center">Username</th>
        <th class="py-4 text-center">Score</th>
        <th class="py-4 text-center">Theme</th>
        <th class="py-4 text-center">Date & Time</th>
    `;
    leaderboardTable.prepend(headerRow);

    // Add a subtle shadow and rounded corners to the table
    leaderboardTable.className = 'w-full table-auto border-collapse rounded-lg shadow-md overflow-hidden';
}

// Modify showQuestion function
function showQuestion() {
    if (!currentQuiz[currentQuestionIndex]) return;
    
    const question = currentQuiz[currentQuestionIndex];
    
    // Clear the quiz container
    quizContainer.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <div id="timer" class="timer text-xl font-semibold bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">⏱️ Time: ${timeLeft}s</div>
            <div id="score" class="score text-xl font-semibold bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">🏆 Score: ${score}</div>
        </div>
        <div class="progress-bar mb-6" id="progress-bar"></div>
        
        <!-- Power-ups Section -->
        <div class="power-ups-section mb-8">
            <h3 class="text-lg font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">Power-ups & Hints</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button id="hint-button" class="power-up-button bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 ${hintsAvailable === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
            <span>💡</span>
            <span>Hint (${hintsAvailable})</span>
        </button>
                <button id="skip-button" class="power-up-button bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2 ${powerUps.skip === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
            <span>⏩</span>
            <span>Skip (${powerUps.skip})</span>
        </button>
                <button id="time-freeze-button" class="power-up-button bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 ${powerUps.timeFreeze === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
            <span>⏸️</span>
            <span>Time Freeze (${powerUps.timeFreeze})</span>
        </button>
                <button id="double-points-button" class="power-up-button bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2 ${powerUps.doublePoints === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
            <span>2️⃣</span>
            <span>Double Points (${powerUps.doublePoints})</span>
        </button>
            </div>
        </div>

        <!-- Question Section -->
        <div class="question-section mb-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
            <div id="question" class="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
                ${question.question}
            </div>
        </div>

        <!-- Options Section -->
        <div id="options" class="options-section grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            ${question.options.map((option, index) => `
                <button class="option-button w-full bg-white text-gray-800 py-4 px-6 rounded-lg border-2 border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-200 text-lg font-medium shadow-sm hover:shadow-md">
                    ${option}
                </button>
            `).join('')}
        </div>

        <!-- Next Button -->
        <button id="next-button" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 hidden">
            Next Question
        </button>
    `;

    // Initialize DOM elements
    timerElement = document.getElementById('timer');
    scoreElement = document.getElementById('score');
    optionsElement = document.getElementById('options');
    nextButton = document.getElementById('next-button');

    // Add option click event listeners
    const optionButtons = optionsElement.querySelectorAll('.option-button');
    optionButtons.forEach((button, index) => {
        button.addEventListener('click', () => selectAnswer(index));
    });

    // Add power-up event listeners
    document.getElementById('hint-button').addEventListener('click', useHint);
    document.getElementById('skip-button').addEventListener('click', useSkip);
    document.getElementById('time-freeze-button').addEventListener('click', useTimeFreeze);
    document.getElementById('double-points-button').addEventListener('click', useDoublePoints);

    // Add next button event listener
    nextButton.addEventListener('click', showNextQuestion);

    // Update progress bar
    updateProgressBar();
    
    // Start timer
    startTimer();
}

// Modify startQuiz function to check for username
function startQuiz() {
    const theme = themeSelect.value;
    const level = levelSelect.value;
    const username = document.getElementById('username').value.trim();
    
    // Validate username
    if (!username) {
        alert('Please enter a username before starting the quiz.');
        return;
    }
    
    // Reset quiz state
    resetQuizState();
    
    // Show quiz container
    showContainer(quizContainer);
    
    // Show loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    quizContainer.appendChild(loadingSpinner);
    
    // Load questions (simulating API call with setTimeout)
    setTimeout(() => {
        // Remove spinner
        quizContainer.removeChild(loadingSpinner);
        
        // Get questions for selected theme and level
        currentQuiz = getRandomQuestions(theme, level, 5);
        
        // Show first question
        showQuestion();
        updateProgressBar();
        
        // Start timer
        startTimer();
        
        // Update score display
        scoreElement.textContent = `Score: ${score}`;
    }, 1500);
}

function selectAnswer(index) {
    // Stop the timer
    stopTimer();
    
    const question = currentQuiz[currentQuestionIndex];
    const buttons = optionsElement.querySelectorAll('.option-button');
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = index;
    
    // Disable all buttons
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Check if answer is correct
    if (index === question.correct) {
        buttons[index].classList.add('correct');
        correctAnswers++;
        
        // Calculate points
        const basePoints = SCORING.BASE_POINTS;
        let timeBonus = 0;
        
        // Calculate time bonus
        if (timeLeft >= SCORING.MIN_TIME_FOR_BONUS) {
            const timeRatio = (timeLeft - SCORING.MIN_TIME_FOR_BONUS) / (15 - SCORING.MIN_TIME_FOR_BONUS);
            timeBonus = Math.floor(basePoints * SCORING.TIME_BONUS_MULTIPLIER * timeRatio);
        }
        
        // Calculate streak bonus
        let streakBonus = 0;
        streak++; // Increment streak before checking for bonus
        
        // Check for streak bonuses
        if (streak === 3) {
            streakBonus = SCORING.STREAK_BONUS[3];
            totalStreakBonus += streakBonus;
        } else if (streak === 5) {
            streakBonus = SCORING.STREAK_BONUS[5];
            totalStreakBonus += streakBonus;
        }
        
        const pointsEarned = basePoints + timeBonus + streakBonus;
        
        score += pointsEarned;
        totalTimeBonus += timeBonus;
        
        // Update score display
        if (scoreElement) {
            scoreElement.textContent = `🏆 Score: ${score} (+${pointsEarned})`;
        }
        
        sounds.correct.play();
        
        if (streak >= 3) {
            showStreakMessage(streak);
        }
    } else {
        buttons[index].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
        incorrectAnswers++;
        streak = 0;
        sounds.wrong.play();
    }
    
    // Show next button
    if (nextButton) {
        nextButton.classList.remove('hidden');
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function startTimer() {
    // Clear any existing timer
    if (timer) {
        clearInterval(timer);
    }

    timeLeft = 15;
    if (timerElement) {
        timerElement.textContent = `⏱️ Time: ${timeLeft}s`;
    }
    
    timer = setInterval(() => {
        timeLeft--;
        if (timerElement) {
            timerElement.textContent = `⏱️ Time: ${timeLeft}s`;
        }
        
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
        timer = null;
    }
}

function handleTimeUp() {
    const buttons = optionsElement.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    const question = currentQuiz[currentQuestionIndex];
    const correctButton = buttons[question.correct];
    correctButton.classList.add('correct');
    
    if (nextButton) {
        nextButton.classList.remove('hidden');
    }
}

function endQuiz() {
    // Add score to leaderboard
    addScoreToLeaderboard(score, themeSelect.value, levelSelect.value);
    
    // Get the most recent entry for the current user
    const username = document.getElementById('username').value.trim();
    const userEntries = leaderboardData.scores.filter(entry => entry.username === username);
    const latestUserEntry = userEntries[userEntries.length - 1];
    const userRank = leaderboardData.scores.findIndex(entry => entry.id === latestUserEntry.id) + 1;
    
    // Create results container with detailed stats
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'results-container p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 animate-fade-in';
    resultsContainer.innerHTML = `
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-green-500 mb-4">Congratulations! 🎉</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">You've completed the quiz!</p>
        </div>
        
        <div class="score-summary bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-8">
            <h3 class="text-2xl font-semibold mb-4 text-center">Detailed Score Summary</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Question Statistics</h4>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span>Total Questions:</span>
                            <span>${currentQuiz.length}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Correct Answers:</span>
                            <span class="text-green-500">${correctAnswers}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Incorrect Answers:</span>
                            <span class="text-red-500">${incorrectAnswers}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Skipped Questions:</span>
                            <span class="text-yellow-500">${skippedQuestions}</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-600 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Score Breakdown</h4>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span>Base Points:</span>
                            <span>${correctAnswers * SCORING.BASE_POINTS}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Time Bonus:</span>
                            <span class="text-blue-500">+${totalTimeBonus}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Streak Bonus:</span>
                            <span class="text-purple-500">+${totalStreakBonus}</span>
                        </div>
                        <div class="flex justify-between text-red-500">
                            <span>Penalties:</span>
                            <span>-${(hintsUsed * PENALTIES.HINT) + (skippedQuestions * PENALTIES.SKIP) + (powerUpsUsed * PENALTIES.TIME_FREEZE) + (powerUpsUsed * PENALTIES.DOUBLE_POINTS)}</span>
                        </div>
                        <div class="flex justify-between font-bold">
                            <span>Final Score:</span>
                            <span class="text-green-500">${score}</span>
                        </div>
                    </div>
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

        <div class="mt-8 flex justify-center space-x-4">
            <button id="back-to-home" class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105">
                Return to Home
            </button>
            <button id="view-leaderboard" class="bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105">
                View Leaderboard
            </button>
        </div>
    `;

    // Add results container to the page
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultsContainer);

    // Add event listeners
    document.getElementById('back-to-home').addEventListener('click', function() {
        resetQuizState();
        showContainer(landingPage);
    });

    document.getElementById('view-leaderboard').addEventListener('click', function() {
        showContainer(leaderboardPage);
        updateLeaderboardDisplay();
    });
}

// Add streak message function
function showStreakMessage(streak) {
    const streakMessages = {
        3: "Good!",
        5: "Great!",
        7: "Excellent!",
        10: "Unstoppable!"
    };
    
    if (streakMessages[streak]) {
        const streakDiv = document.createElement('div');
        streakDiv.className = 'streak-message fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce';
        streakDiv.textContent = `${streakMessages[streak]} ${streak} in a row!`;
        document.body.appendChild(streakDiv);
        
        setTimeout(() => {
            streakDiv.remove();
        }, 2000);
    }
}

// Add power-up functions
function useHint() {
    if (hintsAvailable === 0) return;
    
    const question = currentQuiz[currentQuestionIndex];
    const options = optionsElement.querySelectorAll('.option-button');
    const wrongOptions = Array.from(options)
        .map((option, index) => ({ option, index }))
        .filter(({ index }) => index !== question.correct);
    
    // Remove two wrong options
    const optionsToRemove = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    optionsToRemove.forEach(({ option }) => {
        option.style.opacity = '0.5';
        option.disabled = true;
    });
    
    hintsAvailable--;
    hintsUsed++;
    score = Math.max(0, score - PENALTIES.HINT); // Apply penalty
    scoreElement.textContent = `Score: ${score} (-${PENALTIES.HINT} hint penalty)`;
    updatePowerUpsUI();
}

function useSkip() {
    if (powerUps.skip === 0) return;
    
    powerUps.skip--;
    powerUpsUsed++;
    skippedQuestions++;
    score = Math.max(0, score - PENALTIES.SKIP); // Apply penalty
    scoreElement.textContent = `Score: ${score} (-${PENALTIES.SKIP} skip penalty)`;
    
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
    updatePowerUpsUI();
}

function useTimeFreeze() {
    if (powerUps.timeFreeze === 0) return;
    
    powerUps.timeFreeze--;
    powerUpsUsed++;
    timeLeft += 10;
    score = Math.max(0, score - PENALTIES.TIME_FREEZE); // Apply penalty
    scoreElement.textContent = `Score: ${score} (-${PENALTIES.TIME_FREEZE} time freeze penalty)`;
    timerElement.textContent = `Time: ${timeLeft}s`;
    updatePowerUpsUI();
}

function useDoublePoints() {
    if (powerUps.doublePoints === 0) return;
    
    powerUps.doublePoints--;
    powerUpsUsed++;
    score = Math.max(0, score - PENALTIES.DOUBLE_POINTS); // Apply penalty
    scoreElement.textContent = `Score: ${score} (-${PENALTIES.DOUBLE_POINTS} double points penalty)`;
    
    // Double points for the next correct answer
    const originalSelectAnswer = selectAnswer;
    selectAnswer = function(index) {
        const question = currentQuiz[currentQuestionIndex];
        if (index === question.correct) {
            score *= 2;
        }
        originalSelectAnswer(index);
        selectAnswer = originalSelectAnswer;
    };
    updatePowerUpsUI();
}

function updatePowerUpsUI() {
    const hintButton = document.getElementById('hint-button');
    const skipButton = document.getElementById('skip-button');
    const timeFreezeButton = document.getElementById('time-freeze-button');
    const doublePointsButton = document.getElementById('double-points-button');
    
    if (hintButton) {
        hintButton.textContent = `Hint (${hintsAvailable})`;
        hintButton.disabled = hintsAvailable === 0;
        hintButton.classList.toggle('opacity-50', hintsAvailable === 0);
    }
    if (skipButton) {
        skipButton.textContent = `Skip (${powerUps.skip})`;
        skipButton.disabled = powerUps.skip === 0;
        skipButton.classList.toggle('opacity-50', powerUps.skip === 0);
    }
    if (timeFreezeButton) {
        timeFreezeButton.textContent = `Time Freeze (${powerUps.timeFreeze})`;
        timeFreezeButton.disabled = powerUps.timeFreeze === 0;
        timeFreezeButton.classList.toggle('opacity-50', powerUps.timeFreeze === 0);
    }
    if (doublePointsButton) {
        doublePointsButton.textContent = `Double Points (${powerUps.doublePoints})`;
        doublePointsButton.disabled = powerUps.doublePoints === 0;
        doublePointsButton.classList.toggle('opacity-50', powerUps.doublePoints === 0);
    }
}

// Reset leaderboard data
function resetLeaderboard() {
    if (confirm('Are you sure you want to reset the leaderboard? This action cannot be undone.')) {
        leaderboardData = {
            scores: [],
            lastUpdated: null
        };
        saveLeaderboard();
        updateLeaderboardDisplay();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeDOMElements();
    initializeLeaderboard();
    hideAllContainers();
    showContainer(landingPage);
    
    // Set dark theme as default
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    
    // Update theme toggle icon for dark theme
    const icon = themeToggle.querySelector('svg');
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';

    // Add event listeners
    if (startQuizButton) {
        startQuizButton.addEventListener('click', () => {
            const username = document.getElementById('username').value.trim();
            const theme = document.getElementById('theme').value;
            const level = document.getElementById('level').value;

            if (!username) {
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'text-red-500 text-center mb-4 animate-pulse';
                errorMessage.textContent = 'Please enter your username to start the quiz!';
                
                // Remove any existing error message
                const existingError = document.querySelector('.text-red-500');
                if (existingError) {
                    existingError.remove();
                }
                
                // Insert error message after the username input
                const usernameInput = document.getElementById('username');
                usernameInput.parentNode.insertBefore(errorMessage, usernameInput.nextSibling);
                
                // Add red border to username input
                usernameInput.classList.add('border-red-500');
                usernameInput.classList.add('focus:border-red-500');
                usernameInput.classList.add('focus:ring-red-500');
                
                // Remove error styling after 3 seconds
                setTimeout(() => {
                    errorMessage.remove();
                    usernameInput.classList.remove('border-red-500');
                    usernameInput.classList.remove('focus:border-red-500');
                    usernameInput.classList.remove('focus:ring-red-500');
                }, 3000);
                
                return;
            }

            // Store username in localStorage
            localStorage.setItem('currentUser', username);
            
            // Show rules instead of starting quiz immediately
            showRules(theme, level);
        });
    } else {
        // Create a fallback button if the main one isn't found
        const container = document.querySelector('#landing-page');
        if (container) {
            const fallbackButton = document.createElement('button');
            fallbackButton.textContent = 'Start Quiz';
            fallbackButton.className = 'bg-indigo-600 text-white py-2 px-4 rounded';
            fallbackButton.addEventListener('click', () => {
                const theme = 'general';
                const level = 'easy';
                startQuiz(theme, level);
            });
            container.appendChild(fallbackButton);
        }
    }

    // Add event listener for "I Understand" button
    const understandButton = document.getElementById('understand-button');
    if (understandButton) {
        understandButton.addEventListener('click', () => {
            const theme = document.getElementById('theme').value;
            const level = document.getElementById('level').value;
            startQuiz(theme, level);
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            showContainer(landingPage);
        });
    }

    if (leaderboardButton) {
        leaderboardButton.addEventListener('click', function() {
            showContainer(leaderboardPage);
            updateLeaderboardDisplay();
        });
    }

    // Add event listener for reset leaderboard button
    const resetLeaderboardButton = document.getElementById('reset-leaderboard');
    if (resetLeaderboardButton) {
        resetLeaderboardButton.addEventListener('click', resetLeaderboard);
    }
});

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

// Add function to show rules
function showRules(theme, level) {
    const rulesContainer = document.getElementById('rules-container');
    if (rulesContainer) {
        hideAllContainers();
        rulesContainer.classList.remove('hidden');
        
        // Add animation class
        rulesContainer.classList.add('animate-fade-in');
    } else {
        // If rules container is not found, create a simple modal with rules
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        
        const content = document.createElement('div');
        content.className = 'bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full';
        content.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">Quiz Rules</h2>
            <ul class="list-disc pl-5 mb-4">
                <li>You will have 15 seconds to answer each question</li>
                <li>Correct answers earn you points</li>
                <li>Answering quickly gives you bonus points</li>
                <li>Use powerups wisely to improve your score</li>
            </ul>
            <button id="modal-start-button" class="w-full bg-indigo-600 text-white py-2 px-4 rounded">
                Start Quiz
            </button>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        document.getElementById('modal-start-button').addEventListener('click', () => {
            document.body.removeChild(modal);
            startQuiz(theme, level);
        });
    }
}