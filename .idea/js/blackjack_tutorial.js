/*//create two variable, firstCard and secondCard
//set their values to a random number between 2-11
let firstCard = Math.floor(Math.random() * 11) + 2
let secondCard = Math.floor(Math.random() * 11) + 2
let cards = [firstCard, secondCard]

//2. create a variable, sum , and set it to sum of the two cards
let sum = firstCard + secondCard
let HasBlackJack = false
let isAlive = true
let message = document.getElementById("message-el")
let card_el = document.getElementById("card-el")
let sum_el = document.getElementById("sum-el")

function startGame(){
    renderGame()
}

function renderGame() {
    card_el.textContent = "Card : "
    for (let i = 0; i < cards.length; i++) {
        card_el.textContent += cards[i]
    }
    if (sum < 21) {
        message.innerText = "Do you want to draw new card?"
    } else if (sum === 21) {
        message.innerText = "You got BlackJack"
        HasBlackJack = true
    } else {
        message.innerText = "You are out of the games"
        isAlive = false
    }
    sum_el.textContent += "Sum : " + sum
}

function newCard(){
    let newcard = Math.floor(Math.random()*11)+2
    sum += newcard
}*/

/*
//check if the person is old enough to enter the club(21)
//log a suitable mussage to console in the both cases
let age = 21
if (age < 21) {
    console.log("you cannot enter the club")
} else {
    console.log("Welcome")
}*/

/*
let age = 153
if (age < 100) {
    console.log("not elegible")
} else if (age === 100) { // == igore the variable type || === care the variable type
    console.log("here is your birthday card from the king")
} else {
    console.log("not elegible, you have already gotten one")
}
*/

/*
let firstCard = 13
let secondCard = 7
let sum = firstCard + secondCard

if(sum <=20){
    console.log  ("Do you want to draw a new card?")
}else if(sum === 21){
    console.log("Wohhoo! you've get balckjack")
}else{
    console.log("you are out of the games")
}
*/


/*//array
let personal = [
    "5 year programming",
    "Um information scienc",
    "java, css, html, javascript"
]
let NewMessage = "new message"
personal.push(NewMessage)
console.log(personal)
console.log(personal.length)
personal.pop()
console.log(personal)*/

/*let mix  =["name", 12, true]
console.log(mix[0])
console.log(mix[1])
console.log(mix[2])*/

/*

let card = [7,4]
card.push(6)
console.log(card)*/

/*
for (let i = 10; i < 101; i+=10) {
    console.log(i)
}
*/

/*
let greeting_el = document.getElementById("greeting-el")
let sentence = ["hello", "my", "name", "is", "Perl"]
for (let i = 0; i < sentence.length; i++) {
    greeting_el.textContent += sentence[i] + " "
}
*/

/*let randomnumber=  Math.random() * 6
console.log(randomnumber)*/

/*
let floored = Math.floor(-3.722131)
console.log(floored)*/

/*
function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}
console.log(rollDice())*/

/*
let hasCompletedCourse = false
let givenCert = true
if (hasCompletedCourse || givenCert) {
    geneCert()
}

function geneCert() {
    console.log("generating...")
}*/

/*
let likeDocumentaries = true
let likeStartUp= false

if(likeDocumentaries || likeStartUp){
    console.log(12)
}*/

/*

//object
let course = {
    title: "css course",
    lessons: 16,
    creator: "pua",
    length: 63,
    level: 2,
    isFree : true,
    tags : ["css","web"]
}

console.log(course["tags"])
console.log(course.tags)
*/

/*
let building = {
    isEmpty : false,
    locaton : "Kapar",
    price : 145,
    facilities : ["bed","swimming pool"]
}

console.log(building.isEmpty)
console.log(building.locaton)
*/

/*
let player = {
    name: "Pua",
    chips: 145,
    sayHello: function () {
        console.log("hello")
    }
}

player.sayHello()

*/

/*let person = {
    name: "Pua",
    age: 21,
    country: "Malaysia"
}
function call() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
call()*/

/*let largeCountries = ["China", "India", "USA", "indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}*/

/*let largeCountries =["Tuvalu","India","USA","Indonesia","Monace"]

largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")
console.log(largeCountries)*/

/*let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("smt")
}*/

/*let hand = ["rock", "paper", "scissor"]
function smt() {
    return console.log(hand[Math.floor(Math.random() * 3)])
}
smt()*/


let orange_el = document.getElementById("orange-el")
let apple_el = document.getElementById("apple-el")
let fruit = ["a", "o", "a", "a", "o"]

for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "a") {
        apple_el.textContent += fruit[i] + " "
    } else {
        orange_el.textContent += fruit[i] + " "
    }
}
