const quotes = [
    "It's never too late to become a Pokémon Master!",
    "Gotta catch 'em all!",
    "The journey is the reward.",
    "Train hard, battle harder!",
    "Your adventure begins now!",
    "Trust in your Pokémon and yourself!",
    "Every champion was once a beginner.",
    "A good trainer learns from every defeat.",
    "Strength comes from bond, not just power.",
    "Explore, train, evolve — repeat!",
    "Courage leads to new encounters.",
    "Believe in the heart of your team!",
    "There's no wrong path, only new discoveries.",
    "Victory favors the prepared trainer.",
    "Legends are made, not born.",
    "Battles test strength, friendship gives meaning.",
    "A wild adventure appears!",
    "The best trainers never stop learning.",
    "Your Pokémon believe in you — believe in them too.",
    "The world of Pokémon is full of endless possibilities!",
    "Even Pikachu started at level 1.",
    "No type is unbeatable — learn, adapt, overcome.",
    "Sometimes running from a fight is part of the strategy.",
    "Friendship is the strongest evolution.",
    "The rarest Pokémon are found by the most curious trainers.",
    "Critical hits don't define a battle — consistency does.",
    "Defeat just means more training.",
    "Choose your starter — and choose your path.",
    "Pokémon don't give up on you. Don't give up on them.",
    "To master the game, master yourself first."
];

function getQuoteOfTheDay() {
    const day = new Date().getDate();
    const index = day % quotes.length;
    return quotes[index];
}

window.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.querySelector(".quote blockquote");
    if (quoteElement) {
        quoteElement.textContent = getQuoteOfTheDay();
    }
});
