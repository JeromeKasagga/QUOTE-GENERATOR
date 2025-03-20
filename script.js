const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const sideIcon = document.querySelectorAll('.side-icon');
const quoteText = document.querySelector('.quote');
const quoteSpeaker = document.querySelector('.quote-speaker');

// Object with quotes
const quotes = [
    { quote: "The first step is to establish that something is possible; then probability will occur.", speaker: "Elon Musk" },
    { quote: "Persistence is very important. You should not give up unless you are forced to give up.", speaker: "Elon Musk" },
    { quote: "I think it is possible for ordinary people to choose to be extraordinary.", speaker: "Elon Musk" },
    { quote: "People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.", speaker: "Elon Musk" },
    { quote: "When something is important enough, you do it even if the odds are not in your favor.", speaker: "Elon Musk" },
    { quote: "Pay attention to negative feedback and solicit it, particularly from friends. Hardly anyone does that, and it’s incredibly helpful.", speaker: "Elon Musk" },
    { quote: "Some people don’t like change, but you need to embrace change if the alternative is disaster.", speaker: "Elon Musk" },
    { quote: "Managers should always take care of their team before they take care of themselves. The supervisor is there to serve his team — not the other way round.", speaker: "Elon Musk" },
    { quote: "Failure is an option here. If things are not failing, you are not innovating enough.", speaker: "Elon Musk" },
    { quote: "I don’t create companies for the sake of creating companies, but to get things done.", speaker: "Elon Musk" },
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

// function to change opacity of icons on hover of their side buttons
function changeOpacity() {
    sideIcon.forEach(button => {
        button.style.opacity = 1;
    });
}

rightButton.addEventListener("mouseover", changeOpacity);
leftButton.addEventListener("mouseover", changeOpacity);

// Function to automatically go thrpugh the quotes and display randomly
function changeQuotes() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomQuote].quote}"`; 
    quoteSpeaker.textContent = `~ ${quotes[randomQuote].speaker}`; 
}

// Call function immediately so first quote appears
changeQuotes();

// Change quote every 5 seconds
setInterval(changeQuotes, 8000);