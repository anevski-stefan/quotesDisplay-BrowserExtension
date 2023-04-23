document.addEventListener('DOMContentLoaded', function() {

    let quoteContainer = document.querySelector(".quoteContainer");
    let button = document.getElementsByClassName("generateQuote")[0];
    
    async function fetchQuote() {
      try {
        let response = await fetch("https://api.quotable.io/random");
        let data = await response.json();
        return data.content;
      } catch (error) {
        console.log(error);
      }
    }
    
    async function displayQuote() {
      quoteContainer.textContent = "";
      let quoteElement = document.createElement("p");
      quoteElement.textContent = await fetchQuote();
      quoteContainer.appendChild(quoteElement);
    }

    
    if(button) {
        button.addEventListener("click", displayQuote);
      }    
})
