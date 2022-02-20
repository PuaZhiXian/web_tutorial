let message_el = document.getElementById("message-el")
let card_el = document.getElementById("card-el")
let sum_el = document.getElementById("sum-el")
let hostcard_el = document.getElementById("hostcard-el")
let hostsum_el = document.getElementById("hostsum-el")
let firstCard
let secondCard
let cards
let host_card
let host_sum
let sum = 0
let isAlive = false
let hasBlackJack = false
let player_el = document.getElementById("player-el")
let player = {
    name: "Pua",
    chips: 145
}
let start_btn = document.getElementById("start-btn")
let showCard_btn = document.getElementById("showCard-btn")
let host_div = document.getElementById("host-div")
showCard_btn.disabled = true;
player_el.textContent = player.name + " : $" + player.chips

function startGame() {
    hostsum_el.innerText= "Sum : ";
    hostcard_el.innerText = "Card : ";
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    host_card = [getRandomCard(), getRandomCard()]
    hostOperation()
    renderGame()
    start_btn.disabled = true;
    showCard_btn.disabled = false;
}

function hostOperation() {
    host_sum = 0
    for (let i = 0; i < host_card.length; i++) {
        host_sum += host_card[i]
    }
    while (true) {
        if (host_sum < 16) {
            let newCard = getRandomCard()
            host_card.push(newCard)
            host_sum += newCard
        } else {
            break;
        }
    }

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
        message_el.textContent = "Do you need a new Card or Show Card?"
    } else if (sum === 21) {
        message_el.textContent = "You get a BlackJack"
        hasBlackJack = true
        showCard()
    } else {
        message_el.textContent = "You are out of games"
        isAlive = false
        showCard()
    }
    sum_el.textContent = "Sum : " + sum
}

function getRandomCard() {
    return Math.floor(Math.random() * (12 - 2)) + 2
}

function showCard() {
    start_btn.disabled = false;
    showCard_btn.disabled = true;
    hostcard_el.textContent = "Card : ";
    for (let i = 0; i < host_card.length; i++) {
        hostcard_el.textContent += host_card[i] + " "
    }
    hostsum_el.textContent = "Sum : " + host_sum;
    if (!isAlive) {
        if (host_sum > 21) {
            cashCalu("")
        } else {
            cashCalu("lose")
        }
    } else {
        if (host_sum > 21 || host_sum < sum) {
            cashCalu("win")
        } else if (host_sum === sum) {
            cashCalu("")
        } else {
            cashCalu("lose")
        }
    }
}

function cashCalu(result) {
    if (result === "win") {
        player.chips += 5
        message_el.textContent = "You win $5"
        player_el.textContent = player.name + " : $" + player.chips
    } else if (result === "lose") {
        player.chips -= 5
        message_el.textContent = "You lose $5"
        player_el.textContent = player.name + " : $" + player.chips
    } else {
        message_el.textContent = "Draw"
        player_el.textContent = player.name + " : $" + player.chips
    }
}