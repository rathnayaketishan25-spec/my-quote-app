const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');
const authorImg = document.getElementById('author-image'); // පින්තූරය සඳහා Variable එක

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
    }
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * myQuotes.length);
    const selected = myQuotes[randomIndex];

    quoteText.innerText = selected.q;
    authorText.innerText = "- " + selected.a;
    
    // පින්තූරය වෙනස් කරන කොටස
    authorImg.src = selected.img;
}

quoteBtn.addEventListener('click', getQuote);
getQuote(); // පටන් ගද්දීම එකක් පෙන්වන්න
