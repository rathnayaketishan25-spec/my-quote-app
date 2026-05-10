const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

async function getQuote() {
    quoteText.innerText = "Loading...";
    authorText.innerText = "";
    
    try {
        // ලෝකප්‍රකට Quotes දෙන නොමිලේ API එකක්
        const response = await fetch('https://api.quotable.io/random');
        
        // ඉහත API එක වැඩ නොකළහොත් වෙනත් එකක් පාවිච්චි කිරීම
        if(!response.ok) {
            const altRes = await fetch('https://dummyjson.com/quotes/random');
            const altData = await altRes.json();
            quoteText.innerText = altData.quote;
            authorText.innerText = "- " + altData.author;
            return;
        }

        const data = await response.json();
        quoteText.innerText = data.content;
        authorText.innerText = "- " + data.author;
    } catch (error) {
        quoteText.innerText = "Oops! Something went wrong.";
        console.log(error);
    }
}

// Button එක click කළ විට වැඩ කිරීමට
quoteBtn.addEventListener('click', getQuote);

// Page එක load වූ සැනින් එකක් පෙන්වීමට
getQuote();
