const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

// අපිම හදාගත්ත Quotes ලිස්ට් එක. මේකට ඔයාට ඕන තරම් පස්සේ එකතු කරන්න පුළුවන්.
const myQuotes = [
    { 
        q: "The only way to do great work is to love what you do.", 
        a: "Steve Jobs", 
        img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-edit_%28cropped%29.jpg" 
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
