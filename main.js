// Varibles

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Things work out best for those who make the best of how things work out.",
        person: 'John Wooden'
    },
    {
        quote: "Always bear in mind that your own resolution to success is more important than any other one thing.",
        person: 'Abraham Lincoln'
    },
    {
        quote: "You know you are on the road to success if you would do your job and not be paid for it.",
        person: 'Oprah Winfrey'
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        person: 'Estee Lauder'
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
        person: 'Conrad Hilton'
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        person: ' Thomas A. Edison'
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
        person: ' Steve Jobs'
    },

];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

