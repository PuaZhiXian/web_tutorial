let message_el = document.getElementById("message-el")
let card_el = document.getElementById("card-el")
let sum_el = document.getElementById("sum-el")
let firstCard
let secondCard
let cards
let sum = 0
let isAlive = false
let hasBlackJack = false
let player_el = document.getElementById("player-el")
let player = {
    name: "Pua",
    chips: 145
}

player_el.textContent = player.name + " : $" + player.chips

function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    renderGame()
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newcard = getRandomCard()
        cards.push(newcard)
        renderGame()
    }
}

function renderGame() {
    sum = 0
    card_el.textContent = "Card : "
    for (let i = 0; i < cards.length; i++) {
        card_el.textContent += cards[i] + " "
        sum += cards[i]
    }
    if (sum <= 20) {
        message_el.textContent = "Do you need a new Card?"
    } else if (sum === 21) {
        message_el.textContent = "You get a BlackJack"
        hasBlackJack = true
    } else {
        message_el.textContent = "You are out of games"
        isAlive = false
    }
    sum_el.textContent = "Sum : " + sum
}

function getRandomCard() {
    return Math.floor(Math.random() * (12 - 2)) + 2
}

