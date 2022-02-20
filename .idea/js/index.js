// document.getElementById("count-el").innerText = 7;

/*
//1. create a variable, myAge, and se its value to age
let myAge = 21
//2. Log the myAge variable to the console
console.log(myAge)
*/

/*
// 1 human year = 7 dog years
//1. create two variable, myAge and humanDogRatio
let myAge = 21
let humanDogRatio = 7
//2. Mulitply the two together and store the result in myDogAge
let myDogAge = myAge * humanDogRatio;
//3.Log myDogAge to the console
console.log(myDogAge)
*/

/*
// create a varibale, bonusPoints, initialize it as 50, increase it to 100,
//decrease it down to 25 and then finally increase it to 70
//console.log the value after each step
let bonusPoints = 50
console.log(bonusPoints)
bonusPoints = bonusPoints +50;
console.log(bonusPoints)
bonusPoints = bonusPoints -75;
console.log(bonusPoints)
bonusPoints = bonusPoints + 45;
console.log(bonusPoints)
*/
/*

//initialize the count as 0
//listen for clicks on the incremnet button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let count =0
let count_el = document.getElementById("count-el")
function increment() {
    count = count_el.innerText
    console.log("The button is clicked")
    count++
    console.log(count)
    count_el.innerText = count
}

//create a function, save()which logs out the count when it's called
// let count =document.getElementById("count-el").innerText
let saveEl = document.getElementById("save-el")
function save(){
    console.log(count_el.innerText)
    saveEl.textContent +=  count_el.innerText + " - "
    count_el.innerText = 0;
}
*/


/*
//function
function countdown(){
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()    // call function
*/

/*
//create a function that logs out the number 42 to the console
//call/invoke the function
function number42(){
    console.log(42)
}
number42()
*/

/*
//create a function that logs out the sum of all lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36
function laps(){
    let totalLaps= lap1 + lap2 +lap3
    console.log(totalLaps)
}
laps()
*/

/*
//create a function that increment the lapsCompleted variable with one
//Run it three times
let LapsCompleted =0;
function lapsIncrement(){
    LapsCompleted ++
}
lapsIncrement()
console.log(LapsCompleted)
lapsIncrement()
console.log(LapsCompleted)
lapsIncrement()
console.log(LapsCompleted)
*/



/*
//create a variable, message, that stores the string: "You have tree new notifications"
let username = "per"
let message = "You have tree new notifactions"
console.log(message + ", " + username)
*/

/*
//create a variable, messageToUser, that contains the message we have logged
let username = "per"
let message = "You have tree new notifactions"
let messageToUser = message + ", " + username
console.log(messageToUser)
*/

/*
//Create two variable , name and greeting. the name variable should store your name,
//and the greeting should store e.g "Hi, my name is "
//Create a third variable, myGreeting, that contatenates the two string
//log myGreeting to the console
let name = "Pua Zhi Xian"
let greeting = "Hi, my name is "
let myGreeting  = greeting +name
console.log(myGreeting)
*/

/*
let welcomeEl = document.getElementById("welcome-el")
let name = "Pua Zhi Xian"
let greeting  ="Welcome back "
welcomeEl.innerText = greeting + name
welcomeEl.innerText += "🥰"
*/
/*
let firstname = "Zhi Xian"
let lastname ="Pua"
let fullname = lastname +" "+ firstname
console.log(fullname)
*/


/*
let name = "Linda"
let greeting = "Hi there
function Greeting(){
    console.log(greeting + ", "+name +"!")
}
Greeting()
*/

/*
let myPoints =3
function add3Point(){
    myPoints +=3
}
function remove1Point(){
    myPoints --
}
add3Point()
add3Point()
add3Point()
remove1Point()
remove1Point()
console.log(myPoints)
*/

/*function error(){
    document.getElementById("error").innerText = "Something went wrong, please try again"
}*/

let num1 = 8
let num2 =2
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2

function add(){
    document.getElementById("sum-el").textContent += (num1+ num2)
}
function substract(){
    document.getElementById("sum-el").textContent += (num1 - num2)
}
function divide(){
    document.getElementById("sum-el").textContent += (num1 / num2)
}
function multiply(){
    document.getElementById("sum-el").textContent += (num1 * num2)
}


