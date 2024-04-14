const apiKey = "A2TltrFTiLHA58QOhrU54A==di7VskektH60bdfb";
let quote = document.getElementById("quote");
let author = document.getElementById("author");


async function getQuote() {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?X-Api-Key=${apiKey}&category=success`);
    var data = await response.json();
    console.log(data);

    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;

}

getQuote();

const tweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} -- by ${author.innerHTML}`, "Tweet Window", "width=600, height=300");
}
