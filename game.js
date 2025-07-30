const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    readline.question("Guess the hide number ", (input) => {
        let gamenum = 786;
        let usernum = Number(input)
        if (usernum !== gamenum){
            console.log("Opps! you guess wrong"); 
        } else {
            console.log("Congratulation you guess right num"); 
        }
              readline.close();
    });

