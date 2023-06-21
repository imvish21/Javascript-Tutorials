//Rock Paper Scissor
const prompt=require('prompt-sync')()
const game = ["R","P","S"];
let rounds=10;
let user=0,comp=0,draw=0;
while(rounds--)
{
let u_choice=prompt("Enter your choice:")
const c_choice = Math.floor(Math.random() * game.length);
console.log("Computer's choice:",game[c_choice]);
if(u_choice=='R' && game[c_choice]=='S')
{
    user++;
}
else if(u_choice=='P' && game[c_choice]=='R')
{
    user++;
}
else if(u_choice=='S' && game[c_choice]=='P')
{
    user++;
}
else if(u_choice==game[c_choice])
{
    draw++;
}
else{
    comp++;
}
}
console.log("Your score:",user)
console.log("Computer score:",comp)
console.log("Draw score:",draw)
if(user>comp)
{
    console.log("You win!!")
}
else if(user<comp)
{
    console.log("You loose!!")
}
else{
    console.log("Draw")
}