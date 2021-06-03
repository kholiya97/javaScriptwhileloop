console.log("====================== Welcome To Magic Number ===================");

console.log("Think any number between 1 and 100...");

let MagicNumber = 0;
let StartNum = 0;
let EndNum = 100;
let isNum = false;
    while(isNum != true)
    {
        magicNumber = Math.round((StartNum + EndNum) / 2);
        console.log("1.If your number is greater than : " + magicNumber);
        console.log("2.If your number is less than : " + magicNumber);
        console.log("3.If  " + magicNumber + " is your number");
        const Prompt = require('prompt-sync')();
        let choice = Number(Prompt('Enter your choice : '));
        switch (choice) 
        {
            case 1:
                StartNum = magicNumber;
                break;
            case 2:
                EndNum = magicNumber;
                break;
            case 3:
                isNum = true;
                break;
            default:
                console.log("Please Enter Valid Choice.");
                break;
        }
    }
    console.log("The number you were thought is : "+ magicNumber);