const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

const myQuotes = [
    { q: "සාර්ථකත්වය යනු වැටෙන හැම වතාවකම නැගිටීමයි.", a: "වින්ස්ටන් චර්චිල්" },
    { q: "ඔබට කළ නොහැකි දෙයක් නැත.", a: "මොටිවේෂන්" },
    { q: "අද දින හොඳින් වැඩ කරන්න.", a: "අනන්‍ය" }
];

function getQuote() {
    console.log("Button clicked!"); // මේකෙන් බටන් එක වැඩද කියලා බලන්න පුළුවන්
    const randomIndex = Math.floor(Math.random() * myQuotes.length);
    const selectedQuote = myQuotes[randomIndex];
    
    quoteText.innerText = selectedQuote.q;
    authorText.innerText = "- " + selectedQuote.a;
}

quoteBtn.addEventListener('click', getQuote);

// මුලින්ම පේජ් එකට එද්දී එකක් පෙන්වන්න
getQuote();
