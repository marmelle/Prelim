const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your grade: ', (answer) => {
    
    var grade = parseInt(answer);
    deduct(grade%2,3);
    deduct(grade,2);
    addgrade(grade%2,3);
    addgrade(grade,5);
    
    rl.close();
    
    
    
});



const util = require('./app');

var deduct = util.Deducted(grade,decrement);

if (point<75) ;
console.log("Your new score is " + deduct);

var addgrade = util.Added(grade,increment);
 if (score>=75);
console.log("Your new score is " + addgrade);