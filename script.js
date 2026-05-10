const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

async function getQuote() {
    // API එකකින් quote එකක් ලබා ගැනීම
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
    const data = await response.json();
    const contents = JSON.parse(data.contents);
    
    quoteText.innerText = contents[0].q;
    authorText.innerText = "- " + contents[0].a;
}

// බටන් එක click කරන විට අලුත් එකක් පෙන්වන්න
quoteBtn.addEventListener('click', getQuote);

// මුලින්ම පේජ් එකට එද්දී එකක් පෙන්වන්න
getQuote();
