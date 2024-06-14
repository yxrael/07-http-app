
/**
 * @returns {Object} quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    return data[0];  
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingBadApp = async ( element ) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    }

    const fetcher = async () => {
        element.innerHTML = 'Loading...';
        nextQuoteButton.disabled = true;
  
        const quote = await fetchQuote();
        renderQuote( quote );

        nextQuoteButton.disabled = false;
    }

    fetcher();

    nextQuoteButton.addEventListener('click', fetcher );
}

