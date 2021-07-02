//Team Selection program Version4
//new feature - invalid inputs
//Ella Thomas
//01/07/2021 

//list of players ready to be picked
let players = ['Lucy', 'Alex', 'Lily', 'Ella', 'Charlie', 'Grace', 'George', 'Zoe', 'Kim', 'Eve', 'Meg', 'Evie', 'Sam'];

let playerNumbers = prompt('how many players does each team need?')

// coping with valid, invalid and boudary input
    while (playerNumbers > (players.length/2)||isNaN(playerNumbers) || playerNumbers == '' ||playerNumbers == ' '){
      console.log('Sorry that is invalid. Pick a number from 1 - 6')
      playerNumbers = prompt('how many players would you like?')  
      }


//having two empty teams waiting to have players added
let team1 = [];
let team2 = [];
let round = 1;
let length = players.length

//pick a random member from 'players' list
do {
  let player1 = Math.floor(Math.random() * length + 0);

let player1Name = players[player1];


//to remove the random person picked from the 'players' list 
players.splice(player1, 1);

//to add the random person picked to Team1
team1.push(player1Name);
round++;
length--;

//give Team2 a member 
//pick a random member from 'players' list
let player2 = Math.floor(Math.random() * length + 0);

// console.log(player2);
let player2Name = players[player2];

//to remove the random person picked from the 'players' list 
players.splice(player2, 1);

//to add the random person picked to Team2
team2.push(player2Name);

//addive 1 to the value of the team each round
round++;
//taking 1 off length of list of players
length--;
} while (round <= playerNumbers*2);

//printing list of members
console.log("Team 1: " + team1);
console.log("Team 2: " + team2);
