// DOM Elements
const desktopLeftBtn = document.querySelector('.desktop-nav.left-button');
const desktopRightBtn = document.querySelector('.desktop-nav.right-button');
const mobileLeftBtn = document.querySelector('.mobile-button.left-button');
const mobileRightBtn = document.querySelector('.mobile-button.right-button');
const sideIcons = document.querySelectorAll('.side-icon');
const quoteText = document.querySelector('.quote');
const quoteSpeaker = document.querySelector('.quote-speaker');
const quoteBox = document.querySelector('.quote-box');
const socialButtons = document.querySelector('.social-buttons');
const selectedText = document.querySelector('.inner-quote-box');
const copyButton = document.querySelector('#copy-btn');
const likeButton = document.querySelector('#like-btn');
const shareButton = document.querySelector('#share-btn');

// Function to change opacity of icons on hover
function changeOpacity() {
    sideIcons.forEach(icon => {
        icon.style.opacity = 1;
    });
}

// Reset opacity when mouse leaves
function resetOpacity() {
    sideIcons.forEach(icon => {
        icon.style.opacity = 0.5;
    });
}

// Add hover effects to desktop buttons
[desktopLeftBtn, desktopRightBtn].forEach(btn => {
    btn.addEventListener("mouseover", changeOpacity);
    btn.addEventListener("mouseleave", resetOpacity);
});

// Social Buttons functions
function showSocialButtons() {
    socialButtons.style.visibility = 'visible';
}

[quoteSpeaker, quoteBox, quoteText, socialButtons].forEach(element => {
    element.addEventListener('mouseover', showSocialButtons);
});

// Function to copy to clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(selectedText.textContent.trim());
    alert('Quote copied to clipboard');
});

// Quotes array
const quotes = [
    { quote: "The first step is to establish that something is possible; then probability will occur.", speaker: "Elon Musk" },
    { quote: "Persistence is very important. You should not give up unless you are forced to give up.", speaker: "Elon Musk" },
    { quote: "I think it is possible for ordinary people to choose to be extraordinary.", speaker: "Elon Musk" },
    { quote: "People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.", speaker: "Elon Musk" },
    { quote: "When something is important enough, you do it even if the odds are not in your favor.", speaker: "Elon Musk" },
    { quote: "Pay attention to negative feedback and solicit it, particularly from friends. Hardly anyone does that, and it's incredibly helpful.", speaker: "Elon Musk" },
    { quote: "Some people don't like change, but you need to embrace change if the alternative is disaster.", speaker: "Elon Musk" },
    { quote: "Managers should always take care of their team before they take care of themselves. The supervisor is there to serve his team — not the other way round.", speaker: "Elon Musk" },
    { quote: "Failure is an option here. If things are not failing, you are not innovating enough.", speaker: "Elon Musk" },
    { quote: "I don't create companies for the sake of creating companies, but to get things done.", speaker: "Elon Musk" },
    { quote: "You have power over your mind - not outside events. Realize this, and you will find strength.", speaker: "Marcus Aurelius" },
    { quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", speaker: "Marcus Aurelius" },
    { quote: "The happiness of your life depends upon the quality of your thoughts.", speaker: "Marcus Aurelius" },
    { quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", speaker: "Marcus Aurelius" },
    { quote: "Waste no more time arguing about what a good man should be. Be one.", speaker: "Marcus Aurelius" },
    { quote: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", speaker: "Marcus Aurelius" },
    { quote: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ...", speaker: "Marcus Aurelius" },
    { quote: "The best revenge is to be unlike him who performed the injury.", speaker: "Marcus Aurelius" },
    { quote: "The soul becomes dyed with the colour of its thoughts.", speaker: "Marcus Aurelius" },
    { quote: "It is not death that a man should fear, but he should fear never beginning to live.", speaker: "Marcus Aurelius" }
];

let currentIndex = 0;
let quoteInterval;

// Function to update like button appearance
function updateLikeButtonStatus() {
    const isLiked = localStorage.getItem(`likedQuote-${currentIndex}`) === 'true';
    likeButton.classList.toggle('liked', isLiked);
    likeButton.style.color = isLiked ? 'rgb(119, 197, 251)' : '';
}

// Function to display a quote
function displayQuote(index) {
    currentIndex = index;
    const { quote, speaker } = quotes[index];
    quoteText.textContent = `"${quote}"`;
    quoteSpeaker.textContent = `~${speaker}`;
    updateLikeButtonStatus();
}

// Navigation functions
function nextQuote() {
    displayQuote((currentIndex + 1) % quotes.length);
    resetAutoChange();
}

function prevQuote() {
    displayQuote((currentIndex - 1 + quotes.length) % quotes.length);
    resetAutoChange();
}

// Auto-change functionality
function startAutoChange() {
    quoteInterval = setInterval(nextQuote, 8000);
}

function resetAutoChange() {
    clearInterval(quoteInterval);
    startAutoChange();
}

// Event listeners for navigation
[desktopRightBtn, mobileRightBtn].forEach(btn => btn.addEventListener("click", nextQuote));
[desktopLeftBtn, mobileLeftBtn].forEach(btn => btn.addEventListener("click", prevQuote));

// Like button functionality
likeButton.addEventListener('click', () => {
    const key = `likedQuote-${currentIndex}`;
    const isLiked = localStorage.getItem(key) === 'true';
    localStorage.setItem(key, String(!isLiked));
    updateLikeButtonStatus();
});

// Share functionality
shareButton.addEventListener('click', () => {
    const shareData = {
        title: 'Inspiring Quote',
        text: `${quoteText.textContent} ${quoteSpeaker.textContent}`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(shareData.text)
            .then(() => alert('Quote copied to clipboard. You can now share it manually.'))
            .catch(() => alert('Sharing not supported. Please copy the text manually.'));
    }
});

// Initialize
displayQuote(currentIndex);
startAutoChange();