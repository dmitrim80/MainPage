

//WEATHER APP
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const weatherCard = document.querySelector(".weather-card");

const apiKey = "ac38a14d5872d1a0ce984e6b6ec35750";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }else{
        return await response.json();
    }
}

function displayWeatherInfo(data){
    const {name: city, main: {temp,humidity}, weather:[{description,id}]} = data;
    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    const cityDisplay =  document.createElement("h1");
    const tempDisplay =  document.createElement("p");
    const humidityDisplay =  document.createElement("p");
    const descDisplay =  document.createElement("p");
    const weatherEmoji =  document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent=`${((temp -273.15) *(9/5)+32).toFixed(1)}°F`;
    humidityDisplay.textContent=`Humidity: ${humidity}%`;
    descDisplay.textContent=`${description}`;
    weatherEmoji.textContent=getWeatherEmoji(id);
    
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.id = "weatherEmoji";

    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(humidityDisplay);
    weatherCard.appendChild(descDisplay);
    weatherCard.appendChild(weatherEmoji);
}
function getWeatherEmoji(weatherId){
    switch(true){
        case(weatherId >= 200 && weatherId <300):
            return "🌩️";
            
        case(weatherId >= 300 && weatherId <400):
            return "🌧️";
           
        case(weatherId >= 500 && weatherId <600):
            return "⛈️";
          
        case(weatherId >= 600 && weatherId <700):
            return "🌨️";
       
        case(weatherId >= 700 && weatherId <800):
            return "🌫️";
       
        case(weatherId === 800):
            return "☀️";
         
        case(weatherId >= 801 && weatherId <810):
            return "🌤️";
    
        default:
            return "?";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay"); 

    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay); 
}

//-----------------------------------------------
//fetch = Function used for making HTTP requests to fetch resources
// (JSON style data, images,files)
// Simplifies asynchronous data fetching in JavaScript and 
// used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options})
//fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Not found.");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("document not found.");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));







//===============================

//JSON = (JavaScript Object Notation) data-interchange format
//  Used for exchanging data between a server and a web application
// JSON files {key:value} OR [{},{},{} or [value1,value2,value3]


// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value)))
//     .catch(error => console.error(error));








const jsonNames = `["Spongebob", "Patrick","Squidward","Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing","Karate","Cooking"]}`
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                    {"name": "Patrick","age": 34,"isEmployed": false},
                    {"name": "Squidward","age": 50,"isEmployed": true},
                    {"name": "Sandy","age": 27,"isEmployed": false}]`

const parsedData = JSON.parse(jsonPeople);
//console.log(parsedData);



const names = ["Spongebob", "Patrick","Squidward","Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing","Karate","Cooking"]
}
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]

const jsonString = JSON.stringify(people);
//console.log(jsonString);
//console.log(people);


//========================================
// Async/Await = Async = makes a function return a promise
//          Await = makes an async function wait for a promise



// Allows you to write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue



async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
}
}
//doChores();



//Promise = An Object that manages asynchronous operations.
// Wrap a Promise Object around {asynchronous code}
//"I promise to return a value"
//PENDING -> RESOLVED or REJECTED
// new Promise ((resolve, reject)) => {asynchronous code}

//DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog!");
            }else{
                reject("didnt walk the dog!");
            }
            
        },1500); 
    });
}
function cleanKitchen(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cleanedKitchen = false;
            if(cleanedKitchen){
                resolve("You cleaned the kitchen!");
            }else{
                reject("didnt clean Kitchen!");
            }
        },1500); 
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const takeTrashOut = false;
            if(takeTrashOut){
                resolve("You took trash out!");
            }else{
                reject("didnt take trash out!");
            }
        },1500); 
    });
}

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("you finished all the chores!")})
//         .catch(error => console.error(error));




//==========================
//Callback Hell = Situation in JavaScript where callbacks
// are nested within other callbacks to the 
// degree where the code is difficult to read.
// Old pattern to handle asynchronous functions.
// Use Promises + async/ await to avoid Callback Hell


// function task1(callback){
//     setTimeout(()=>{
//         console.log("Task 1 complete.");
//         callback();
//     },2000);
    
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log("Task 2 complete.");
//         callback();
//     },1000);
    
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log("Task 3 complete.");
//         callback();
//     },3000);
    
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log("Task 4 complete.");
//         callback();
//     },1500);
    
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>console.log("Tasks complete."));
//         });
//     });
// });


//==========================


//IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);

    }
    
}
function showSlide(index){
    if(slides.length <= slideIndex){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){

slideIndex++;
showSlide(slideIndex);
}


// ROCK PAPER SCISSORS
const choices = ["rock","paper","scissors"];
const playerDisplayer = document.getElementById("playerDisplay");
const computerDisplayer = document.getElementById("computerDisplay");
const resultDisplayer = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice===computerChoice){
         result = "IT'S A TIE!";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice==="rock") ? "YOU WIN!": "YOU LOSE!";
                
                break;
            case "scissors":
                result = (computerChoice==="paper") ? "YOU WIN!": "YOU LOSE!";
                break;
        }
    }
    playerDisplayer.textContent = `PLAYER: ${playerChoice}`;
    computerDisplayer.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplayer.textContent = result;

    resultDisplayer.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN!":
            playerScore++;
            resultDisplayer.classList.add("greenText");
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplayer.classList.add("redText");
            break;
    }
};



//classList = property in JavaScript used to interact
// with an element's list of classes (CSS classes)
// Allows you to make reusable classes for many elements
// across your webpage.
// add()
// remove()
// toggle(Remove if present, Add if not)
// replace (oldClass, newClass)
// contains()
let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {

    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }else{
            event.target.classList.replace("enabled", "disabled");
        }
        
    });
});


// const myBTN = document.getElementById("btn-mybtn");
// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled");

// myBTN.classList.add("enabled");
// myH1.addEventListener("click", event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         event.target.classList.replace("enabled","disabled"); 
//     }
    
// });
// myBTN.addEventListener("click", event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         event.target.classList.replace("enabled","disabled"); 
//     }
    
// });


// myBTN.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hoverr");
// });
// myBTN.addEventListener("mouseout", event => {
//     event.target.classList.remove("hoverr");
// });

//=================================




// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce), they have forEach method
// NodeList won't update to automatically reflect changes

// let buttons = document.querySelectorAll(".mybutton-c");
// // REMOVE AN ELEMENT
// buttons.forEach(button =>{
//     button.addEventListener("click",event=>{
//         event.target.remove();
//         buttons = document.querySelectorAll(".mybutton-c");
//         console.log(buttons);
//     })
// });
 
// //ADD HTML / CSS PROPERCTIES
// buttons.forEach(button => {
//     button.style.backgroundColor = "blue";
//     button.textContent += "😀"; 
// });

// CLICK EVENT LISTENER

// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato";
//     })
// });

// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event=>{
//         event.target.style.backgroundColor = "orange";
//     })
// });
// buttons.forEach(button =>{
//     button.addEventListener("mouseout", event=>{
//         event.target.style.backgroundColor = "blue";
//     })
// });

//------------------------------------
//let students = 31;
// students = student +1;
//students = student - 1;
//students = student *2;
//students = student /2;
//exponent operator **
//students = student **2; 
//modulo operator % ,to determining if a number is even or odd or the remainder
//let extraStudents = student % 3; 


//augmented assignment operators
//students += 1; 
// -= *= /= **= %=

//inriment operator ++ , decriment operator --,
//students ++;
//students --;

/*
operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo
4. addition & subtraction
*/
//------------------------------------
//console.log(students);

// How to accept user input
// 1. Easy Way = window prompt
// 2. Professional Way = html textbox

// let username;
// username = window.prompt("What is your name?");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH2").textContent = `Hello ${username}`;
//     console.log(username);
// }
//------------------------------------
// type conversion = change the datatype of a value to another (strings,numbers,booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age +=1;
// otherwise it would be string concatenation
// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//------------------------------------

//const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// // PI = 4; not allowed, will generate error because PI is constant variable
// circumference = 2 * PI * radius;

// console.log(circumference);

//------------------------------------
// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }
// //----------------------------------
// Math = built-in object than provides a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.21;
// let y = 2;
// let z;
// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.pow(x,y);
// z = Math.trunc(x);
// z = Math.sqrt(x);
// // logarithm
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// //absolute value
// z= Math.abs(x);
// // 1, -1, 0 or -0, NaN
// z= Math.sign(x);
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);


// console.log(z);
// // RAndom number
// const minNum = 50;
// const maxNum = 100;
// let randomNum = Math.floor(Math.random()*(maxNum - minNum)+minNum);

// console.log(randomNum);

// const diceButton = document.getElementById("diceButton");
// const diceLabel1 = document.getElementById("diceLabel1");
// const diceLabel2 = document.getElementById("diceLabel2");
// const diceLabel3 = document.getElementById("diceLabel3");

// const diceMin = 1;
// const diceMax = 6;

// let randomDice;
// diceButton.onclick = function() {
//     randomDice =  Math.floor(Math.random()*diceMax)+diceMin;
//     diceLabel1.textContent = randomDice;
//     randomDice =  Math.floor(Math.random()*diceMax)+diceMin;
//     diceLabel2.textContent = randomDice;
//     randomDice =  Math.floor(Math.random()*diceMax)+diceMin;
//     diceLabel3.textContent = randomDice;
// }

// // IF STATEMENTS 

// let age = 35;
// if(age >= 18){
//     console.log("You are old enough to enter this site.");
// }else {
//     console.log("You must be 18+ to enter this site");
// }

// let time = 9;
// if(time<12){
//     console.log("Good morning");
// }else{
//     console.log("good afternoon");
// }

// let isStudent = false;

// if (isStudent){
//     console.log("You are a student.");
// }else {
//     console.log("you are not a student.");
// }

// const myText = document.getElementById("youAgeInput");
// const mySubmit = document.getElementById("ageButton");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);

//     if(age>=21){
//         resultElement.textContent = "you are old enough.";
//     }
//     else if(age <21){
//             resultElement.textContent = "you are NOT old enough.";
//     }
//     else{
//         resultElement.textContent = "you are....";
//     }
// }


// ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition
// condition ? codeIfTure : codeIfFalse;

// let yourAge = 21;
// age >= 18 ? "You're an adult" : "You're a minor";
// // Switch = can be an efficient replacement to many else if statements
// let day = 1;

// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;

//     case 6:
//         console.log("It is Saturday");
//         break;

//     case 7:
//         console.log("It is Sunday");
//         break;

//     }
// let testScore = 98;
// let letterGrade;
// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//             letterGrade = "B";
//             break;    
//     case testScore >= 70:
//                 letterGrade = "C";
//                 break;    
        // default:
        //     letterGrade = "F";
// }
// console.log(letterGrade);

// string methods = allow you to manipulate and work with text (Strings)

// let userName = "   John Smith      ";
// //first character
// console.log(userName.charAt(0));
// //find first character place of
// console.log(userName.indexOf("S"));
// //last character place of
// console.log(userName.lastIndexOf("h"));
// // length
// console.log(userName.length);

// userName = userName.trim();
// userName= userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.repeat(10);
// userName="   John Smith"
// // true or false
// let testString = userName.startsWith(" ");
// let testString2 = userName.endsWith(" ");
// let testString3 = userName.includes("John");
// console.log(userName);
// console.log(testString);
// console.log(testString2);
// console.log(testString3);

// let phoneNumber = "123-45-2345";

// phoneNumber = phoneNumber.replaceAll("-","");
// console.log(phoneNumber);
// phoneNumber = phoneNumber.padStart(15,"0");
// console.log(phoneNumber);
// phoneNumber = "123-23-2323";
// phoneNumber = phoneNumber.padEnd(15,"*");
// console.log(phoneNumber);


//string slicing = creating a substring from a portion of another string

//string.slice(start,end)

// const fullName = "John Smith";
// let firstName = fullName.slice(0,4);
// let lastName = fullName.slice(5);
// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-2);
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);
// let lastName = fullName.slice(fullName.indexOf(" ")+1, )
// console.log(lastName);

// const email = "email123@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1,)
// console.log(username);
// console.log(extension);
// -------METHOD CHAINING------
// let username = window.prompt("Enter username: ");

// // username = username.trim();
// // let letter = username.charAt(0);
// // letter = letter.toUpperCase();
// // let extraChars = username.slice(1);
// // extraChars = extraChars.toLowerCase();
// // username = letter + extraChars;
// username = username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
// console.log(username);

// logical operators 
// AND = &&
// OR = ||
// NOT = !

// = assignment operator
// == comparison operator
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator


// while loop = repeat some code WHILE some condition is true

// let userName = "";

// // while(userName===""){
// //     userName = window.prompt("Enter username:");
// // }

// do{
//     userName = window.prompt("Enter username:");
// }while(userName === ""|| userName === null)

// console.log("Username: "+userName);

// let loggedIn = false;
// let userName = "DM";
// let password = "password";

// while(!loggedIn){
//     let userName_entered = window.prompt("Enter username:");
//     let password_entered = window.prompt("Enter password:");

//     userName == userName_entered && password == password_entered ? loggedIn =true : loggedIn = false;
// }
// console.log("logged in");

//for loop------------------------
// for(let i=0; i<=100; i++){
//     console.log("hello" + i);
// }
// FUNCTIONS
// function isValidEmail(email){
//     if(email.includes("@")){
//         return true;
//     }else {
//         return false;
//     }
//     return
// }
// function isValidEmail2(email){
//     return email.includes("@") ? true: false;
// }

// console.log(isValidEmail("bro@gmail.com"));
// console.log(isValidEmail2("bro@gmail.com"));


//Variable scope = where a variable is recognized and accessible (local vs global)
//array = a variable like structure that can hold more than 1 value
// let fruits = ["apple", "orange","banana"];
// fruits[0] = "coconut";
// fruits.push("apple"); //add to the end element
// fruits.pop(); //remove last element
// fruits.unshift("mango"); // adds element to first spot
// fruits.shift(); // moves first element

// let numOfFruits = fruits.length
// console.log(numOfFruits);
// let fruitSpot = fruits.indexOf("orange");// if element doesnt exist, returns -1
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
    
// }
// fruits.sort().reverse(); // sort alphabetical order or reverse

// console.log(fruitSpot);



// console.log(fruits);
// console.log(fruits[0]);

// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements (unpack the elements)
// let numbers = [1,2,3,4,5,6];
// let maximum = Math.max(...numbers); //cant use on array, need to unpack first with spread operator
// console.log(maximum);
// let minimum = Math.min(...numbers);
// console.log(minimum);


// let usercode = "John smith";
// let letters = [...usercode].join("-");

// console.log(letters);

// let fruits = ["apple","banana","coconut","lemon","orange"];
// let vegetables = ["carrots","celery", "potatoes"];
// let foods = [...fruits, ...vegetables,"eggs", "milk"];
// console.log(foods);
// let newFruits = [...fruits];
// console.log(newFruits);

//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
// spread = expands an array into seperate eleements
// rest = bundles seperate elements into an array

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "sushi";

// function openFridge(...foods){
//     console.log(foods);
//     console.log(...foods);
// }

// openFridge(food1,food2,food2,food3,food1,food4);

// function getFood(...foods){
//     return foods;

// }
// const foods = getFood(food1,food2,food2,food3,food1,food4);
// console.log(foods);
// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result +=number;
//     }
//     return result;
// }

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result +=number;
//     }
//     return result/ numbers.length;
// }

// const total = sum (1,2,3,4,5,6);
// const totalAverage = getAverage(75,100,80,90,55);
// console.log(`Your average test score is ${totalAverage}`);
// console.log(`You total is $${total}`);

// function combineStrings(...strings) {
//     return strings.join(" ");
// }
// const fullName = combineStrings("Mr.","Spongebob", "Squarepants", "III");

// console.log(fullName);

//-------------
// callback = a function that is passed as an argument to another function
//used to handle asynchronous operations:
//1. Reading a file
//2. Network requests
//3. Interacting with databases
// "Hey, when you're done, call this next."
// sum(displayDOM,1,2);
// function sum(callback,x,y){
//     let result = x + y;
//     callback(result);
// }
// function displayConsole(result){
//     console.log(result);
// }
// function displayDOM(result){
//     document.getElementById("myH1").textContent = result;
// }

// forEach() = method used to iterate over the elements
// of an array and apply a specified function (callback)
// to each element
// array.forEach(callback)
// let numbers = [1,2,3,4,5];

// numbers.forEach(display);
// numbers.forEach(double);

// numbers.forEach(display);
// numbers.forEach(triple);

// numbers.forEach(display);
// numbers.forEach(square);

// numbers.forEach(display);
// numbers.forEach(cube);

// numbers.forEach(display);


// function double(element, index, array){
//     array[index] = element * 2;
// }
// function triple(element, index, array){
//     array[index] = element * 3;
// }
// function square(element, index, array){
//     array[index] = Math.pow(element,2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element,3)
// }
// function display(element){
//     console.log(element);
// }
// 

// .map() = accepts a callback and applies that function
//  to each element of an array, then return a new array

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);


// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["spongebob", "patrick", "squidward", "sandy"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUpperCase();
// }

// const dates = ["2024-1-10","2025-2-20","2026-3-30"];
// const formattedDates = date.map(formatDates);
// console.log(formattedDates);
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

//.filter() = creating a new array by filtering out elements

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }



// const ages = [16,17,18,18,19,20,60];
// const adults = ages.filter(isAdult);
// console.log(adults);

// const children = ages.filter(isChild);
// console.log(childer);

// function isAdult(element){
//     return element >= 18;
// }
// function isChild(element){
//     return element < 18;
// }

// const words = ["apple", "orange", "banana","kiwi","pomegranate","coconut"];
// const shortWords = words.filter(getShortWords);
// console.log(shortWords);
// const longWords = words.filter(getLongWords);
// console.log(longWords); 
// function getShortWords(element){
//     return element.length <= 6;
// }
// function getLongWords(element){
//     return element.length >6;
// }

// .reduce() = reduce the elements of an array
// to a single value
// const prices = [5,30,10,25,15,20];
// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`)

// function sum(previous, element){
//     return previous + element;
// }

// const grades = [75,60,90,85,77,95];
// const maximum = grades.reduce(getMax);
// console.log(maximum);

// const minimum = grades.reduce(getMin);
// console.log(minimum);

// function getMin(prevE, element){
//     return Math.min(prevE,element);
// }

// function getMax(prevE, element){

//     return Math.max(prevE, element);
// }
// -----------------
//function declaration = define a reusable block of code that performs a specific task

//function expression = a way to define functions as a values or variables

// function hello1(){
//     console.log("hello");
// }

// const hello = function (){
//     console.log("hello");
// }

// hello();

// setTimeout(hello, 3000);


// const numbers = [1,2,3,4,5,6];
// const square = numbers.map(squares);
// console.log(square);

// const cubes = numbers.map(function(element){
// return Math.pow(element,3);
// });

// function squares(element){
//     return Math.pow(element,2);
// }

// console.log(cubes);


// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// })
// console.log(evenNums);
// const oddNums = numbers .filter(function(element){
//     return element %2 !== 0;
// })
// console.log(oddNums);
// const total = numbers.reduce(function(prev,element){
//     return prev + element;
// })
// console.log(total);

//function expressions = a way to define functions as values or variables
// 1. callbacks in asynchronous operations
//2. higher-order functions
//3. closures
//4. Event Listeners

// arror functions  = a concise way to write function expressions
// good for simple functions that you use only once
// (parameters) => some code

// function hello1(){
//     console.log("hello");
// }
// hello1();

// const hello = function(){
//     console.log("hello2");
// }
// hello();

// const hello2 = (name, age) => console.log(`Hello ${name}, you are ${age} years old.`);
// hello2("bro", 35);

// setTimeout(() => console.log("Hello"), 3000);


// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);

// const cubes  = numbers.map((element) => Math.pow(element,3));
// console.log(cubes);

// const oddNums = numbers.filter((element) => element %2 !== 0);
// console.log(oddNums);
// const evenNums = numbers.filter((element) => element %2 === 0);
// console.log(evenNums);

// const total = numbers.reduce((prev,element)=> prev+element);
// console.log(total);
// object = A collection of related properties and / or methods
// Can represent real world objects (people,products,places)
//object = {key: value,
//          function()}

// const person1= {
//     firstName: "Sprongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("Hi! I am Spongebob!")},
//     sayBye: function(){console.log("Goodbye!")}
// };

// console.log(person1.firstName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayBye();


// const person2= {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => console.log("Hi! I'm Patrick..."),
//     sayBye: function(){console.log("Bye....")}
// };

//------------------------
// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

// const person1= {
//     firstName: "Sprongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     favFood: "hamburgers",
//     sayHello: function(){console.log(`Hi! I am ${this.firstName}!`)},
//     sayBye: function(){console.log("Goodbye!")},
//     eating: function(){console.log(`${this.firstName} is eating ${this.favFood}`)} 
    
// }
// person1.eating();

// constructor = special method for defining the properties and methods of objects

// const car1 = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color: "red",
//     drive: function(){ console.log(`You are driving the ${this.model}`)}
// }
// const car2 = {
//     make: "Nissan",
//     model: "370z",
//     year: 2020,
//     color: "yellow",
//     drive: function(){ console.log(`You are driving the ${this.model}`)}
// }

// const car3 = {
//     make: "Audi",
//     model: "A5",
//     year: 2024,
//     color: "black",
//     drive: function(){ console.log(`You are driving the ${this.model}`)}
// }
// const car4 = {
//     make: "Toyota",
//     model: "Supera",
//     year: 2024,
//     color: "white",
//     drive: function(){ console.log(`You are driving the ${this.model}`)}
// }
// const car5 = {
//     make: "Ford",
//     model: "F150",
//     year: 2022,
//     color: "black",
//     drive: function(){ console.log(`You are driving the ${this.model}`)}
// }


// function Car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You are driving ${this.make} ${this.model}`)}
// }

// const car6 = new Car("Ford","Mustang", 2023, "blue");
// console.log(car6.make,car6.model,car6.year,car6.color);
// car6.drive();

// class = {ES6 feature} provides a more structured and cleaner way to
// work with objects compared to traditional constructor functions
// ex. static keywork, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
        
//     }
//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Product: $${this.price}`);
//     }
//     calculateTax(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }
// const salesTax = 0.06;
// const product1 = new Product("shift", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();
// product2.displayProduct();

// const total = product3.calculateTax(salesTax);
// console.log(`$ ${total}`);

// static = keyword that defines properties or methods that belong to a class itself
//rather than the objects created
// from that class (class owns anything static, not the objects)

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getCircumference(radius){
//         return 2*this.PI*radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{

//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount ++;


//     }
//     sayHello(){
//         console.log(`Hello my username is ${this.username}`);
//     }
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users.`);
        
//     }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patric");
// const user3 = new User("Sandy");

// console.log(user1.username);
// User.getUserCount();

// inheritance = allows a new class to inherit properties and methods 
// from an existing class (parent -> child)
// help with code reusability

// class Animal {
//     alive = true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }

// }
// class Rabbit extends Animal {
//     name = "rabbit";
//     run(){
// console.log(`This ${this.name} is running.`);
//     }
// }
// class Fish extends Animal {
//     name = "fish";
//     swim(){
//         console.log(`This ${this.name} is swimming.`);
//     }
// }
// class Hawk extends Animal {
//     name = "hawk";
//     fly(){
//         console.log(`This ${this.name} is flying.`);
//     }
// }
// const hawk = new Hawk();
// const fish = new Fish();
// const rabbit = new Rabbit();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();
// fish.swim();
// rabbit.run();

//-------------------------
//super = keyword is used in classes to call the constructor or access the properties
// and methods of a parent (superclass)
// this = this object 
// super = the parent

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`The ${this.name} speed is ${speed} mph.`)
//     }

// }
// class Rabbit extends Animal{
//  constructor (name,age,runSpeed){
//     super(name,age);

//     this.runSpeed = runSpeed;
//  }
//  run(){
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//  }
// }

// class Fish extends Animal{
   
//  constructor (name,age,swimSpeed){
//     super(name,age);
//     this.swimSpeed = swimSpeed;
//  }
//  swim(){
//     console.log(`This ${this.name} can swim`);
//     super.move(this.runSpeed);
//  } 
// }
// class Hawk extends Animal{
    
//  constructor (name,age,flySpeed){
//     super(name,age);

//     this.flySpeed = flySpeed;
//  }
//  fly(){
//     console.log(`This ${this.name} can fly`);
//     super.move(this.runSpeed);
//  }
// }

// const rabbit = new Rabbit("rabbit",1,20);
// const fish = new Fish("fish",3,14);
// const hawk = new Hawk("hawk",5,36);

// console.log(rabbit.name,rabbit.age,rabbit.runSpeed);
// rabbit.run();
// fish.swim();
// hawk.fly();

//------------------------
// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property

// class Rectangle {
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width = newWidth;
//         }else{
//             console.error("Width must be a positive number.");
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height = newHeight;
//         }else{
//             console.error("Height must be a positive number.");
//         }
//     }

//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
// }

// const rectangle = new Rectangle(3,4);
// console.log(rectangle.width,rectangle.height);

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;

//         }else {
//             console.error("First name must be non-empty string.")
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;

//         }else {
//             console.error("Last name must be non-empty string.")
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >=0 ){
//             this._age = newAge;

//         }else {
//             console.error("Age must be a valid number.")
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get age(){
//         return this._age
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
// }
// const person = new Person("Spongebob","Squarepants", 15);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age)

//---------------------------
// destructuring = extract values from arrays and objects,
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring
//                  5 examples

// -------------EXAMPLE 1--------------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


//-----------EXAMPLE 2 ----------
// const colors = ["red","green","blue","black","white"];
// [colors[0],colors[4]] = [colors[4],colors[0]];

// console.log(colors);

//-----------EXAMPLE 3------------
// const color = ["red","green","blue","black","white"];
// const [firstColor, secondColor,thirdColor, ...extraColors] = color;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// -----------Example 4----------
// const person3 = {
//     firstName: "spongeBob",
//     lastName: "Squarepants",
//     age:30,
//     job: "fry cook"
// }
// const person4 = {
//     firstName: "patrick",
//     lastName: "star",
//     age:34,
// }
// const {firstName,lastName, age, job = "Unemployed"} = person4;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ----------Example 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName,lastName,age,job="Unemployed"}) {
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }
// const person3 = {
//     firstName: "spongeBob",
//     lastName: "Squarepants",
//     age:30,
//     job: "fry cook"
// }
// const person4 = {
//     firstName: "patrick",
//     lastName: "star",
//     age:34,
// }

// displayPerson(person3);

//---------------------------------
// nested objects = Objects inside of other Objects.
//Allows you to represent more complex data structures
//Child Object is enclosed by a Parent Object
// Person{Address {}, ContactInfo{}}
//ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullNAme: "Spongebob Squarepants",
//     age: 30,
//     isStudent:true,
//     hobbies: ["karate","jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch st.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(person.fullNAme);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// class Person{
//         constructor(name, age, ...address){
//             this.name = name;
//             this.age = age;
//             this.address = new Address(...address);
//         }
// }

// class Address {
//      constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;

//      }
// }

// const person1 = new Person("Spongebob",30,
//                 "124 Conch st.", "Bikini Bottom", "Int. Waters");
// const person2 = new Person("Patrick",35,
//                 "128 Conch st.", "Bikini Bottom", "Int. Waters");
// const person3 = new Person("Squidward",37,
//                 "126 Conch st.", "Bikini Bottom", "Int. Waters");

// console.log(person1.address.city);

// const fruits = [{name: "apple", color: "red", calories:95},
//                 {name: "orange", color: "orange", calories:45},
//                 {name: "banana", color: "yellow", calories:105},
//                 {name: "coconut", color: "white", calories:1405},
//                 {name: "pineapple", color: "yellow", calories:452}];
// console.log(fruits[2].name);
// fruits.push({name:"grapes", color:"purple", calories:62});


// //-----------forEach()-----------

// fruits.forEach(fruit => console.log(fruit.name));
// //-----------map()---------------
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// console.log(fruitColors);

// console.log(fruitNames);
//--------------reduce()-----------

// const maxFruit = fruits.reduce((max, fruit) => 
//                             fruit.calories > max.calories ? fruit : max);
// console.log(maxFruit);

//------------filter()------------
// const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
// console.log(yellowFruits);
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

// console.log(lowCalFruits);
// console.log(highCalFruits);

//console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.splice(1,2);
// console.log(fruits);


//sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple","orange","banana", "coconut", "pineapple"];;
// fruits.sort();

// console.log(fruits);
// let numbers = [1,2,3,4,5,6,7,9,10,8];
// numbers.sort((a,b)=> a - b );
// console.log(numbers);

// const people = [{name: "Spongebob",age: 30,GPA:3.1,},
//     {name: "ASquidward",age: 25,GPA:3.4,},
//     {name: "Patrick", age: 34,GPA:2.0,},
//     {name: "Sandy",age: 51,GPA:4.0,}]

// console.log(people);
// people.sort((a,b)=>a.GPA - b.GPA);
// console.log(people);
// people.sort((a,b)=>b.GPA - a.GPA);
// console.log(people);
// people.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(people);






//------------SHUFFLE-----------------
//Fisher-Yates algorithm
// const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
// console.log(cards);
// shuffle(cards);
// console.log(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i>0; i--){
//         const random = Math.floor(Math.random()*(i + 1));
//         [array[i],array[random]] = [array[random],array[i]];
//     }
// }





///-------------------------------
// Data Objects = Objects that contain values that represent dates and times
//These date objects can be changed and formatted.

// Date(year, month, day, hour, minutes, seconds, ms)
//2024, january 1st,2am-3min-4seconds-5 ms
// const date1 = new Date(2024,0,1,2,3,4,5);
// const date2 = new Date("2024-01-02T12:00:00Z");
// const date3 = new Date(1700000000000);
// const date4 = new Date();
// console.log(date4);
// const year = date4.getFullYear();
// const month = date4.getMonth();
// const day = date4.getDate();
// const hour = date4.getHours();
// const minuters = date4.getMinutes();
// const seconds = date4.getSeconds();
// const dayOfWeek = date4.getDay();
// console.log(month);

// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(5); //June
// date.setDate(2);
// date.setHours(7);
// date.setMinutes(50);
// date.setSeconds(30);
// console.log(date);

// const date5 = new Date("2023-12-31");
// const date6 = new Date("2024-01-01");

// if(date6>date5){
//     console.log("HAPPY NEW YEAR!");
// }

//-------------------------------------------------------
// closure = A function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function.
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

// function outer(){

//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();

// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }
//     return {increment, getCount};
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`The current count is ${counter.getCount()}`);

// function createGame(){
//     let score = 0;
//     function increaseScore(points){
//         score+=points;
//         console.log(`+${points}pts`);
//     }
//     function decreaseScore(points){
//         score-=points;
//         console.log(`-${points}pts`);
//     }
//     function getScore(){
//         return score;
//     }

//     return {increaseScore,decreaseScore,getScore};
// }

// let game = createGame();

// game.increaseScore(5);
// console.log(game);
// console.log(`The score is ${game.getScore()} pts`);



//setTimeout() = function in JavaScript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the JavaScript runtime env.)

// setTimeout(callback, delay);
//clearTimeout(timeoutId) = can cancel a timeout before it triggers

//ES6 Module = An external file that contains reusable code
//that can be imported into other JavaScript files.
// Write reusable code for many different apps.
// Can contain variables, classes, functions .. and more 
// introduced as part of ECMAScript 2015 update


// synchronous = Executes line by line consecutively in a sequential manner
// code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting 
// doesnt block the execution flow and allows the program to continue
//(I/O operations, network requests, fetching data)
//Handle with: Callbacks, Promises, Async/Await


// function func1(callback){
//     setTimeout(()=> {console.log("Task 1")
// callback()},3000);

// }
// func1(func2);

// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

// try {} = encloses code that might potentially cause an error
//catch {} = catch and handle any thrown errors from try {}
// finalylly {} = {optional} Always executes. Used mostly for clean up
// ex. close files, close conections, release resources

// try{

//     console.log("Hello");
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }catch(error){
// console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }
// console.log("the end.");
//------------------------------------------
// try{
//     const dividend = window.prompt("Enter a dividend: ");
//     const divisor = window.prompt("Enter a divisor: ");
//     if(divisor==0){
//         throw new Error("cant be zero");
//     }
//     if(isNaN(dividend)||isNaN(divisor)){
//         throw new Error("must be a number")
//     }
// const result = dividend / divisor;
// console.log(result);
// }catch(error){
//     console.error(error);
// }
//--------------------------------
//DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
//change the content, struture, and style of a web page.


//-----------------------------
//element selectors = Methods used to target and manipulate HTML elements
//They allow you to select one or multiple HTML elements
// from the DOM (Document Object Model)

//1.document.getElementById() // ELEMENT or NULL
//2. document.getElementByClassName() //HTML COLLECTION
//3. document.getElementByTagName() // HTML COLLECTION
//4. document.querySelector() //ELEMENT OR NULL
//5. document.querySeletorAll() //NODELIST
// const box = document.getElementById("h1-title");
// box.style.backgroundColor = "yellow";
// console.log(box); //returns ELEMENT

// const btnClass = document.getElementsByClassName("operator-btn");
// console.log(btnClass); //return HTML COLLECTION
// console.log(btnClass.length);
// for(let btn of btnClass){
//     btn.style.backgroundColor = "yellow";
// }
// Array.from(btnClass).forEach(btn => {
//     btn.style.backgroundColor = "orange";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// console.log(h4Elements);
// h4Elements[0].style.backgroundColor = "yellow";
// for(let h4 of h4Elements) {
//     h4.style.backgroundColor = "lightgreen";
//     h4.style.color = "white";
// }
// Array.from(liElements).forEach(liE => {
//     liE.style.backgroundColor = "lightblue";
// });

// const element = document.querySelector(".key-btn");

// console.log(element);
// element.style.color = "red";


// const btns = document.querySelectorAll(".key-btn");

// console.log(btns);

// btns.forEach(btn => {
//     btn.style.color = "red";
// })
//-----------------------------------------
//DOM Navigation = The process of navigating through the structure
// of an HTML document using JavaScript.
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children
// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// console.log(`this is the firstChild ${firstChild}`);
// firstChild.style.backgroundColor = "yellow";
 
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });

// const element1 = document.getElementById("fruits");
// const ns = element1.nextElementSibling;
// console.log(`next element is ${ns}`);
// ns.style.backgroundColor = "red";


// const element2 = document.getElementById("vegetables");
// const prevSibl = element2.previousElementSibling;
// console.log(`previous element is ${prevSibl}`);
// prevSibl.style.backgroundColor = 'orange';


// const element3 = document.getElementById("carrot");
// const parentEl = element3.parentElement;
// console.log(parentEl);
// parentEl.style.backgroundColor = "teal";

// const element4 = document.getElementById("fruits");
// const childE = element4.children;
// Array.from(childE).forEach(child => {
//     child.style.backgroundColor = "lightblue";
// })
// childE[0].style.backgroundColor = "red";
//----------------------------------------




//--------------Example 1 <h1>------------
// // STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
// // STEP 2 ADD ATTRIBUTES / PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "purple";
// newH1.style.textAlign = "center";
// // STEP 3 APPEND ELEMENT TO DOM
// //document.body.append(newH1);
// //document.body.prepend(newH1); 
// document.getElementById("box1").append(newH1);
// //document.getElementById("box2").prepend(newH1);
// //document.body.insertBefore(newH1,box3);
// //const boxes = document.querySelectorAll(".box");
// //document.body.insertBefore(newH1,boxes[3]);
// // REMOVE HTML ELEMENT
// //document.body.removeChild(newH1);
// //document.getElementById("box1").removeChild(newH1);
// // ===============EXAMPLE 3 <li>================
// //STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");
// // Step 2 ADD Attribute/ Properties
// newListItem.textContent = "coconut";
// newListItem.id = "coconut1"
// newListItem.style.fontWeight="bold";
// newListItem.style.backgroundColor="lightgreen";
// //Step 3 Append element to DOM
//  document.getElementById("list-fruits").append(newListItem);
// document.getElementById("list-fruits").prepend(newListItem);

// const banana = document.getElementById("banana1");
// document.getElementById("list-fruits").insertBefore(newListItem,banana);
// const listItems = document.querySelectorAll("#list-fruits li"); //if list has no ids
// document.getElementById("list-fruits").insertBefore(newListItem, listItems[1]);
//REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
//document.getElementById("list-fruits").removeChild(newListItem);
//====================================================
//eventListener = Listen for specific events to create interactive web pages
//events: keydown, keyup
//document.addEventListener(even, callback);
// const mybox = document.getElementById("myBox");
// document.addEventListener("keydown",event =>{
// myBox.textContent = "😲";
// myBox.style.backgroundColor = "tomato";

// });
// document.addEventListener("keyup",event =>{
//     myBox.textContent = "😀";
//     myBox.style.backgroundColor = "lightblue";
// });
// const moveAmount = 20;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", event =>{
//     if(event.key.startsWith("Arrow")){
//         event.preventDefault();
//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
            
//         }
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;


//     }
// });


//====================================================
//eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(click, changeColor);
// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", event=>{
//     myBox.style.backgroundColor = "tomato";
//     myBox.innerHTML = `OUCH! <br>🤪`;
// });
// myButton.addEventListener("mouseover",event =>{
//     myBox.style.backgroundColor = "yellow";
//     myBox.textContent = "Don't do it 😲";
// });
// myButton.addEventListener("mouseout",event =>{
// myBox.style.backgroundColor = "lightgreen";
// myBox.innerHTML = `Click Me <br>😀`;
// });
//============================================
const myButton = document.getElementById("hideBtn");
const myImg = document.getElementById("img-supercar");
// myButton.addEventListener("click", event =>{
//     if(myImg.style.display === "none"){
//         myImg.style.display = "block";
//         myButton.textContent = "Hide";
//     }else{
//         myImg.style.display = "none";
//         myButton.textContent = "Show";
//     }
   
// });
myButton.addEventListener("click", event =>{
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
   
});



//--------------Calculator-----------------
const display = document.getElementById("display-calculator");
function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error"
    }
}
//---------------------Timer---------------------
const counter = document.getElementById("counter");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startCounter(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function stopCounter(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetCounter(){
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    counter.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000*60)%60);
    let seconds = Math.floor(elapsedTime /1000 %60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");
  

    counter.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}


//-----CLOCk------

function updateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2.0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0")
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
} 
updateClock();

setInterval(updateClock,1000);










//RANDOM PASSWORD GENERATOR

function calculateCrackTime(passwordLength, characterSetSize, guessesPerSecond) {
    const entropy = Math.log2(Math.pow(characterSetSize, passwordLength));
    const possibleCombinations = Math.pow(2, entropy);
    const totalSeconds = possibleCombinations / guessesPerSecond;

    const secondsInYear = 60 * 60 * 24 * 365;
    const years = totalSeconds / secondsInYear;

    if (years < 1) {
        const days = years * 365;
        if (days < 1) {
            const hours = days * 24;
            if (hours < 1) {
                const minutes = hours * 60;
                return minutes.toFixed(2) + " minutes";
            }
            return hours.toFixed(2) + " hours";
        }
        return days.toFixed(2) + " days";
    }
    return years.toFixed(2) + " years";
}

function generatePassword(){
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("chkLowerCase").checked;
    const includeUppercase = document.getElementById("chkUpperCase").checked;
    const includeSymbols = document.getElementById("chkSymbols").checked;
    const includeNumbers = document.getElementById("chkNumbers").checked;
    const nothingChecked = !includeLowercase && !includeUppercase && !includeSymbols && !includeNumbers;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let characterSetSize = 0;
    if (includeLowercase) characterSetSize += lowercaseChars.length;
    if (includeUppercase) characterSetSize += uppercaseChars.length;
    if (includeNumbers) characterSetSize += numberChars.length;
    if (includeSymbols) characterSetSize += symbolChars.length;

    let allowedChars = "";
    let password ="";
    

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(nothingChecked){
        document.getElementById("txt--password").textContent = "Selected Parameters";
    } else{
        for(let i=0;i<passwordLength;i++){
            const randomIndex = Math.floor(Math.random()*allowedChars.length);
            password += allowedChars[randomIndex];
        }
        document.getElementById("txt--password").textContent = password;
        const supercomputerGuessesPerSecond = 1e15; //supercomputer power
        const regularComputerGuessesPerSecond = 1e9; //regulard computer power
        const supercomputerCrackTime = calculateCrackTime(passwordLength, characterSetSize, supercomputerGuessesPerSecond);
        const regularComputerCrackTime = calculateCrackTime(passwordLength, characterSetSize, regularComputerGuessesPerSecond);

        document.getElementById("txt-security-supercomputer").textContent = `Supercomputer crack time: ${supercomputerCrackTime}`;
        document.getElementById("txt-security-regularcomputer").textContent = `Regular computer crack time: ${regularComputerCrackTime}`;
    }

}
    
    


   
    





//Roll Dice Game
function rollDice(){
    const numberOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numberOfDice; i++){

        const value = Math.floor(Math.random() * 6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
        console.log(images[i]);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
}

// Number guessing game
let gamestart = false;
let range;
let lowRange;
let highRange;
let randNum;
let youWin = false;
let numberGuessed;
let numOfGuesses = 0;

document.getElementById("gameBTN").onclick = function() {
    numberGuessed = document.getElementById("gameRange").value;
    Number(numberGuessed) ? numberGuessed = Number(numberGuessed) : numberGuessed = "";

    if(gamestart){

        if(youWin){
            document.getElementById("labelGame").textContent = 'Enter range of numbers to start the game:';
            document.getElementById("gameBTN").textContent = "Start the game";
            document.getElementById("gameRange").placeholder = "example 1-100";
            gamestart = false;

        }
        else if(numberGuessed != "")
         {
            numOfGuesses ++;
            console.log(range,lowRange,highRange,randNum);
            numberGuessed = document.getElementById("gameRange");
            numberGuessed = Number(numberGuessed.value);
          
            if(numberGuessed == randNum){
                document.getElementById("labelGame").textContent = `You win with ${numOfGuesses} ${numOfGuesses>1?'guesses': 'guess'}!`;
                document.getElementById("gameBTN").textContent = "New game";
                document.getElementById("gameRange").value = "";
                document.getElementById("gameRange").placeholder = "";
                youWin = true;
                numOfGuesses = 0;
            }
            else{
                if(numberGuessed > randNum){
                    document.getElementById("labelGame").textContent = `Lower! Guess a number between ${lowRange} - ${highRange}`;
                }else{
                    document.getElementById("labelGame").textContent = `Higher! Guess a number between ${lowRange} - ${highRange}`;
                }
            }
        }
        else{   
        }   
    }
    //set up new game
    if(!gamestart){
            numOfGuesses = 0;
            if(document.getElementById("gameRange").value != "" && document.getElementById("gameRange").value.includes("-")){
                range = document.getElementById("gameRange");
                range = range.value.trim();
                lowRange = range.slice(0,range.indexOf("-"));
                lowRange = Number(lowRange);
                highRange = range.slice(range.indexOf("-")+1,);
                highRange = Number(highRange);
                randNum = Math.floor(Math.random()*(highRange-lowRange+1)) + lowRange;
           
             
                if(randNum){
                    document.getElementById("labelGame").textContent = `Guess a number between ${lowRange} - ${highRange}`;
                    document.getElementById("gameBTN").textContent = "Guess";
                    document.getElementById("gameRange").placeholder = "?";
                    document.getElementById("gameRange").value = "";
                }
                gamestart = true;
            }
            else{
                youWin = false;
            }       
    }
}


// let minNum;
// let maxNum;
// let attempts = 0;
// const answer =  Math.floor(Math.random()*(maxNum - minNum+1)) + minNum;

// let yourGuess = document.getElementById("number_input");
// let result = document.getElementById("gameResult");

// function () = {

// }
// yourGuess = yourGuess.value;

// if(yourGuess == answer ){
//     result.textContent = "You win, you guessed " + attempts + "  times. Great!"
// }

