const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Choose any option (1:+  2:-  3:*  4:/): ", option => {
readline.question("Enter the first number: ", a => {
    readline.question("Enter the second number: ", b => {
            let num1 = Number(a);
            let num2 = Number(b);
            switch (option) {
                case "1":
                    console.log(`Result: ${num1 + num2}`);
                    break;
                case "2":
                    console.log(`Result: ${num1 - num2}`);
                    break;
                case "3":
                    console.log(`Result: ${num1 * num2}`);
                    break;
                case "4":
                    if (num2 != 0) {
                        console.log(`Result: ${num1 / num2}`);
                    } else {
                        console.log("Not possible, take math tuition");
                    }
                    break;
                default:
                    console.log("Invalid option. Please choose between 1 to 4.");
            }

            readline.close();
        });
    });
});