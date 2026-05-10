const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

// අපිම හදාගත්ත Quotes ලිස්ට් එක. මේකට ඔයාට ඕන තරම් පස්සේ එකතු කරන්න පුළුවන්.
const myQuotes = [
    { 
        q: "The only way to do great work is to love what you do.", 
        a: "Steve Jobs", 
        img: "data:image/webp;base64,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" 
    },
    { 
        q: "Believe you can and you're halfway there.", 
        a: "Theodore Roosevelt", 
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Thodore_Roosevelt_2012_retouched_crop.jpg" 
    },
    { 
        q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
        a: "Winston Churchill", 
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_1941_Portrait.jpg" 
    },
    { 
        q: "It always seems impossible until it's done.", 
        a: "Nelson Mandela", 
        img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg" 
    },
    { 
        q: "Hardships often prepare ordinary people for an extraordinary destiny.", 
        a: "C.S. Lewis", 
        img: "https://upload.wikimedia.org/wikipedia/en/1/1e/C._S._Lewis_cropped.jpg" 
    }
];

function getQuote() {
    // ලිස්ට් එකෙන් අහඹු ලෙස එකක් තෝරාගන්නා හැටි
    const randomIndex = Math.floor(Math.random() * myQuotes.length);
    const selectedQuote = myQuotes[randomIndex];

    quoteText.innerText = selectedQuote.q;
    authorText.innerText = "- " + selectedQuote.a;
    
    // පින්තූරය පෙන්වන පේළිය
    document.getElementById('author-image').src = selectedQuote.img;
}

// බටන් එක එබුවාම වැඩ කරන්න
quoteBtn.addEventListener('click', getQuote);

// මුලින්ම පේජ් එකට එද්දී එකක් පෙන්වන්න
getQuote();
