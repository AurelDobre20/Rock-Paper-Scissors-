
//const prompt = require ("prompt-sync")({sigint: true})
function getChoice(no){
    let choices=["scissors","rock","paper"];
    if(no===1){
        return choices[0];
    }
    if(no===2){
        return choices[1];
    }
    if(no===3){
        return choices[2];
    }
}
function getChoicePlayer(string){
    if(string==="btnScissors"){
        return getChoice(1);
    }
    else if(string==="btnRock"){
        return getChoice(2);
    }else{
        return getChoice(3);
    }
}
function whoWins(playerSelection, computerSelection){
                                                                 // (1,2)-paper, rock =1->p wins, 2->c wins
    if(playerSelection==="paper" && computerSelection==="rock"){ // (3,4)-paper, scissors=3->c wins, 4->p wins
        return 1;                                              // (5,6)-rock, scissors=5->p wins, 6->c wins
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){

        return 2;
    } 

    else if(playerSelection==="paper" && computerSelection==="scissors"){
        return 3;
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){

        return 4;
    }

    else if(playerSelection==="rock" && computerSelection==="scissors"){
        return 5;
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){

        return 6;
    }
    else{
        return 7;
    }
    
}

function getComputerChoice(){
    randomNo = Math.floor(Math.random() * 3) + 1;
    return getChoice(randomNo);
}



function playRound (playerSelection, computerSelection  ){
    let p =playerSelection.trim();
    p.toLowerCase();
    let c = computerSelection.toLowerCase();
    if(whoWins(p, c )> 6){
        return "Draw";
    }
    else if(whoWins(p, c )=== 2){
        return "Computer wins! Paper beats Rock";
    }
    else if(whoWins(p, c ) === 1){
        return "You win! Paper beats Rock";
    }
    else if(whoWins(p, c ) === 4 ){
        return "You win! Scissors beats Paper";
    }
    else if(whoWins(p, c ) === 3){
        return "Computer wins! Scissors beats Paper";
    }
    else if(whoWins(p, c ) === 6){
        return "Computer wins! Rock beats Scissors";
    }
    else if(whoWins(p, c ) === 5){
        return "You win! Rock beats Scissors";
    }
    
    
    //else{
    //     return "Draw";
    // }
    
    
}

const btns = document.querySelectorAll('.btn')
const playerScoreEle = document.querySelector('#player');
const computerScoreEle = document.querySelector('#computer');

let playerScore = 0;
let computerScore = 0;

const dialog1Ele = document.querySelector('#dialog1');
var dialog2Ele = document.querySelector('#dialog2');

let d1 ="";
let d2= "";


let rock = document.getElementById("btnRock");
function getID(e){
    const id = document.querySelector(rock.id);
    console.log(rock.id);
}



btns.forEach((button)=>{button.addEventListener('click', ()=>{
    let ID = button.id;
    let playerC = getChoicePlayer(ID);
    game(playerC);
})})


function game(answer){
    
    console.log("Let the games begin!");
     console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    
    const cChoice= getComputerChoice();
    
    let pRoundString = playRound (answer, cChoice);
    
    let wWins = whoWins(answer, cChoice);

    playerScoreEle.textContent = playerScore;
    computerScoreEle.textContent = computerScore;
    

    if(pRoundString === "Draw"){
        dialog2Ele.textContent= pRoundString;
        //console.log(dialog2Ele);
        //return;
    }
    else if(playerScore===5 || computerScore===5){
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log( "The player wins!");

        dialog2Ele.textContent= pRoundString;

        playerScore = 0;
        computerScore = 0;
        playerScoreEle.textContent = playerScore;
        computerScoreEle.textContent = computerScore;
        
        //counter=counter-20;
        
    }
    
    else if(wWins === 1 || wWins === 4 || wWins === 5 ){
        playerScore++;
        
    }
    else if(wWins === 2 || wWins === 3 || wWins === 6){
        computerScore++;
    }
 }
    
   
//}
//game();

// function game(){
//     let player = 0;
//     let computer = 0;
//     console.log("Let the games begin!")
//     let counter = 5;
//     for (let i = 0; i < counter; i++) {
//         console.log("Player score: " + player);
//         console.log("Computer score: " + computer);
//         //let answer= String(prompt("Choose your weapon: "));
        
//         const cChoice= getComputerChoice();
        
        
//         console.log("Computer weapon: " + cChoice);
//         let pRoundString = playRound (answer, cChoice);
       

//         if(pRoundString==="Invalid input!"){
//             console.log("Invalid input!");
//             answer= prompt("Choose a valid weapon: ");
//             pRoundString = playRound (answer, cChoice);
//             counter++;
//         }


//         let wWins = whoWins(answer, cChoice);
//         console.log(i);

//         if(pRoundString === "Draw"){
//             counter++;
//         }
        
//         else if(wWins === 1 || wWins === 4 || wWins === 5 ){
//             player++;
            
//         }
//         else if(wWins === 2 || wWins === 3 || wWins === 6){
//             computer++;
//         }
//         if(player===3){
//             console.log("Player score: " + player);
//             console.log("Computer score: " + computer);
//             console.log( "The player wins!");
//             counter=counter-20;
            
//         }
//         else if (computer===3){
//             console.log("Player score: " + player);
//             console.log("Computer score: " + computer);
//             console.log("The computer wins!");
//             counter=counter-20;
//         }
         
        
//      }
    
   
// }
// //game();