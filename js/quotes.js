const quotes = [
    {
        quote: "The difference between successful people and really successful people is that really successful people say 'no' to almost everything.",
        author: "워렌 버핏",
    },
    {
        quote: "Laughter is by definition healthy.",
        author: "Doris Lessing"
    },
    {
        quote: "Perpetual optimism is a force multiplier.",
        author: "Colin Powel"
    },
    {
        quote: "A day without laughter is a day wasted.",
        author: "Charlie Chaplin"
    },
    {
        quote: "To want to be what one can be is purpose in life.",
        author: "Cynthia Ozick"
    },
    {
        quote: "Among those whom I like or admire, I can find no common denominator, but among those whom I love, I can: all of them make me laugh. ",
        author: "W. H. Auden"
    },
    {
        quote: "Always laugh when you can. It is cheap medicine.",
        author: "Lord Byron"
    },
    {
        quote: "Hope begins in the dark, the stubborn hope that if you just show up and try to do the right thing, the dawn will come. You wait and watch and work: You don't give up.",
        author: "Anne Lamott"
    },
    {
        quote: "Those who dream by day are cognizant of many things which escape those who dream only by night. ",
        author: "Edgar Allan Poe"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = "\"" + todaysQuote.quote + "\"";
author.innerText = todaysQuote.author;