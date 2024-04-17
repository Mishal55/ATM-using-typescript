//ATM IN TYPESCRIPT BY MISHAL NAMDEEM
import inquirer from "inquirer";
let mybalance = 10000;
let pincode = 1234;
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholder",
        message: "Wellcome Mishal Nadeem"
    },
    {
        type: "number",
        name: "pincode",
        message: "enter your 4 digit pincode",
        choices: ["1", "2", "3", "4"]
    },
    // listing and withdrawal method
    {
        type: "list",
        name: "accounttype",
        message: "Select your account type",
        choices: ["current", "saving"],
    },
    //transition type
    {
        type: "list",
        name: "transitionType",
        message: "Select your transition type",
        choices: ["cash", "withdraw"],
    },
    //select amount
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: ["1000", "2000", "3000", "5000"],
        when(user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount",
        when(user) {
            return user.transitionType === "withdraw";
        }
    }
]);
//final slip
if (user.pincode) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    const enteramount = user.account;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`you have withdraw rupees ${'enteramount'} and you have remaining balance ${'remaining'}`);
    }
}
