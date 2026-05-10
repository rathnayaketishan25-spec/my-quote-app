const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

// අන්තර්ජාලයෙන් Quotes ගන්නා Function එක
async function getQuote() {
    // Quote එක එනකම් පොඩි Loading පණිවිඩයක් පෙන්වමු
    quoteText.innerText = "Loading...";
    authorText.innerText = "";

    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        // API එකෙන් ලැබෙන දත්ත ඇප් එකට දාමු
        quoteText.innerText = data.content;
        authorText.innerText = "- " + data.author;
    } catch (error) {
        // අන්තර්ජාලය නැත්නම් හෝ මොකක් හරි වැරදුනොත් කලින් වගේ අපේම එකක් පෙන්වමු
        quoteText.innerText = "සාර්ථකත්වය යනු වැටෙන හැම වතාවකම නැගිටීමයි.";
        authorText.innerText = "- වින්ස්ටන් චර්චිල්";
        console.log("Error logic: ", error);
    }
}

// බටන් එක එබුවාම getQuote function එක වැඩ කරන්න
quoteBtn.addEventListener('click', getQuote);

// පේජ් එක මුලින්ම Load වෙද්දී Quote එකක් පෙන්වන්න
getQuote();
