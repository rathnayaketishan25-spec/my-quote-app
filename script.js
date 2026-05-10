const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

async function getQuote() {
    quoteText.innerText = "ගෙන්නන ගමන්...";
    authorText.innerText = "";
    
    try {
        // අපි වෙනත් API එකක් පාවිච්චි කරමු
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
        const data = await response.json();
        const quoteData = JSON.parse(data.contents);

        quoteText.innerText = quoteData[0].q;
        authorText.innerText = "- " + quoteData[0].a;
    } catch (error) {
        quoteText.innerText = "අන්තර්ජාලයේ පොඩි අවුලක්. ආයෙත් ට්‍රයි කරන්න!";
        authorText.innerText = "";
    }
}

quoteBtn.addEventListener('click', getQuote);
getQuote();
