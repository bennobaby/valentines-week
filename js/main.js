/**
 * Valentine Week - Main JavaScript
 * Handles floating hearts, navigation, and interactions
 */

// ====================================
// Floating Hearts Animation
// ====================================
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💓', '💘', '❤️', '🩷', '🤍', '💝', '💞'];
    const heartCount = 25;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        heart.style.animationDuration = (15 + Math.random() * 15) + 's';
        heart.style.animationDelay = Math.random() * 15 + 's';
        container.appendChild(heart);
    }
}

// ====================================
// Valentine Week Data
// ====================================
const valentineWeek = [
    { date: 7, emoji: '🌹', name: 'Rose', page: 'rose.html' },
    { date: 8, emoji: '💍', name: 'Propose', page: 'propose.html' },
    { date: 9, emoji: '🍫', name: 'Chocolate', page: 'chocolate.html' },
    { date: 10, emoji: '🧸', name: 'Teddy', page: 'teddy.html' },
    { date: 11, emoji: '🤝', name: 'Promise', page: 'promise.html' },
    { date: 12, emoji: '🤗', name: 'Hug', page: 'hug.html' },
    { date: 13, emoji: '💋', name: 'Kiss', page: 'kiss.html' },
    { date: 14, emoji: '❤️', name: 'Valentine', page: 'valentine.html' }
];

// ====================================
// Generate Week Navigation
// ====================================
function generateWeekNav() {
    const navContainer = document.getElementById('week-nav');
    if (!navContainer) return;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    valentineWeek.forEach(day => {
        const link = document.createElement('a');
        link.href = day.page;
        link.className = 'week-day' + (currentPage === day.page ? ' active' : '');
        link.innerHTML = `
            <span class="week-day-emoji">${day.emoji}</span>
            <span class="week-day-date">Feb ${day.date}</span>
        `;
        navContainer.appendChild(link);
    });
}

// ====================================
// Add Sparkle Effects
// ====================================
function addSparkles() {
    const card = document.querySelector('.card');
    if (!card) return;
    
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles';
    
    const sparkleSymbols = ['✨', '⭐', '💫', '🌟'];
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (1.5 + Math.random()) + 's';
        sparklesContainer.appendChild(sparkle);
    }
    
    card.appendChild(sparklesContainer);
}

// ====================================
// Valentine's Day - NO Button Movement
// ====================================
function initNoButton() {
    const noBtn = document.getElementById('no-btn');
    if (!noBtn) return;
    
    const messages = [
        "Nice try! 😏",
        "Not so fast! 💨",
        "Catch me if you can! 🏃",
        "Think again! 🤔",
        "Are you sure? 🥺",
        "Really? 😢",
        "But why? 💔",
        "Please reconsider! 🙏"
    ];
    
    let messageIndex = 0;
    
    function moveButton(e) {
        e.preventDefault();
        
        const container = noBtn.parentElement;
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        // Calculate available space
        const maxX = window.innerWidth - btnRect.width - 20;
        const maxY = window.innerHeight - btnRect.height - 20;
        
        // Generate new random position
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        
        // Keep within reasonable bounds
        newX = Math.max(20, Math.min(newX, maxX));
        newY = Math.max(20, Math.min(newY, maxY));
        
        // Apply position
        noBtn.style.position = 'fixed';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        noBtn.style.zIndex = '100';
        
        // Update button text
        noBtn.textContent = messages[messageIndex % messages.length] + ' NO';
        messageIndex++;
        
        // Make button slightly smaller each time
        const currentScale = parseFloat(noBtn.dataset.scale || 1);
        const newScale = Math.max(0.7, currentScale - 0.05);
        noBtn.dataset.scale = newScale;
        noBtn.style.transform = `scale(${newScale})`;
    }
    
    noBtn.addEventListener('mouseenter', moveButton);
    noBtn.addEventListener('touchstart', moveButton, { passive: false });
    noBtn.addEventListener('focus', moveButton);
}

// ====================================
// Valentine's Day - YES Button Celebration
// ====================================
function initYesButton() {
    const yesBtn = document.getElementById('yes-btn');
    const celebration = document.getElementById('celebration');
    
    if (!yesBtn || !celebration) return;
    
    yesBtn.addEventListener('click', function() {
        // Show celebration
        celebration.classList.add('active');
        
        // Create confetti
        createConfetti();
        
        // Play a little animation
        document.body.style.overflow = 'hidden';
    });
    
    // Close celebration on click
    celebration.addEventListener('click', function() {
        // Don't close immediately, let them enjoy it!
    });
}

// ====================================
// Confetti Effect
// ====================================
function createConfetti() {
    const celebration = document.getElementById('celebration');
    if (!celebration) return;
    
    const colors = ['#ff6b9d', '#ffb8d0', '#ffd700', '#ff6b6b', '#fff', '#c44569'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (5 + Math.random() * 10) + 'px';
        confetti.style.height = (5 + Math.random() * 10) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        celebration.appendChild(confetti);
    }
}

// ====================================
// Initialize on DOM Load
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    generateWeekNav();
    addSparkles();
    initNoButton();
    initYesButton();
    
    // Add entrance animation to elements
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ====================================
// Touch-friendly adjustments
// ====================================
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}
