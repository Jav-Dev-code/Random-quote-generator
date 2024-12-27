const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The journey of a thousand miles begins with one step. – Lao Tzu",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "Act as if what you do makes a difference. It does. – William James",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Every Master Was Once a Beginner. - Sheikh Hafsa Nadeem"
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("generate-quote");

button.onclick = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
