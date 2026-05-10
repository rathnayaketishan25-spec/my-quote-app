const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

// අපිම හදාගත්ත Quotes ලිස්ට් එක. මේකට ඔයාට ඕන තරම් පස්සේ එකතු කරන්න පුළුවන්.
const myQuotes = [
    { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" , img: "https://...steve-jobs.jpg"},
    { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" , img : "https://...theodore-roosevelt.jpg " },
    { q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill" , img: "https://...winston-churchill" },
    { q: "It always seems impossible until it's done.", a: "Nelson Mandela" , img: "https://...nelson-mandela" },
    { q: "Your time is limited, so don't waste it living someone else's life.", a: "Steve Jobs" , img: "https://...steve-jobs.jpg" },
    { q: "Hardships often prepare ordinary people for an extraordinary destiny.", a: "C.S. Lewis" , img: "https://...c.s.-lewis" }
];

function getQuote() {
    // ලිස්ට් එකෙන් අහඹු ලෙස එකක් තෝරාගන්නා හැටි
    const randomIndex = Math.floor(Math.random() * myQuotes.length);
    const selectedQuote = myQuotes[randomIndex];
    
    quoteText.innerText = selectedQuote.q;
    authorText.innerText = "- " + selectedQuote.a;
}

// බටන් එක එබුවාම වැඩ කරන්න
quoteBtn.addEventListener('click', getQuote);

// මුලින්ම පේජ් එකට එද්දී එකක් පෙන්වන්න
getQuote();
