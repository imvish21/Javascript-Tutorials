const prompt=require('prompt-sync')();
let age= prompt("Enter your age:")
age=Number.parseInt(age)
switch(age)
{
    case 12:
        console.log("Your age is 12")
        break;
    case 13:
        console.log("Your age is 13")
        break
    case 14:
        console.log("Your age is 14")
        break;
        
    case 15:
        console.log("Your age is 15")
        break;
    case 16:
        console.log("Your age is 16")
        break;
    default:
        console.log("Invalid Age")
}