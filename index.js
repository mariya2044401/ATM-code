#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin code",
    },
]);
// console.log(pinAnswer.Pin)
if (pinAnswer.Pin === myPin) {
    console.log("Correct pin code");
    let reamount = await inquirer.prompt([
        {
            name: "operators",
            type: "list",
            message: "select one option",
            choices: ["withdraw", "Check balance", "Fastcash"],
        },
    ]);
    // console.log(reamount.operators);
    if (reamount.operators === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount you want to withdraw",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`"your remaining balance is :"${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (reamount.operators === "Fastcash") {
        let fast = await inquirer.prompt([{
                name: "fast_opt",
                type: "list",
                message: "HOw much money do you want to withdraw",
                choices: [1000, 2000, 5000],
            },]);
        if (fast.fast_opt === 1000) {
            myBalance -= fast.fast_opt;
            console.log(`"Your remaining balance is: "${myBalance} `);
        }
        if (fast.fast_opt === 2000) {
            myBalance -= fast.fast_opt;
            console.log(`"Your remaining balance is:" ${myBalance} `);
        }
        if (fast.fast_opt === 5000) {
            myBalance -= fast.fast_opt;
            console.log(`"Your remaining balance is:" ${myBalance} `);
        }
    }
    else if (reamount.operators === "check balance") {
        if (myBalance === reamount.operators) {
            myBalance -= reamount.operators;
        }
        console.log("your current balance is " + myBalance);
    }
    // else{
    //   console.log("insufficient balance")
    // }
}
else {
    console.log("Incorrect pin number");
}
