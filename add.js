const choices = ["rock", "paper", "scissors"];
let i=1;

while(i<=5){
    console.log("----round" , i,"-----");
    i++
let indexarr = Math.floor(Math.random() * choices.length);
let computerNum = choices[indexarr];

let userindex = prompt("enter rock or paper or scissors");
let userNum = choices.find((value) => {
  if (value === userindex) {
    return value;
  }else{
    console.log("the value is undfind pless enter rock or paper or scissors" );
  }
});

if (computerNum == choices[0] && userNum === choices[1]) {
  console.log("user win");
} else if (computerNum == choices[1] && userNum === choices[2]) {
  console.log("user win");
} else if (computerNum == choices[2] && userNum === choices[0]) {
    console.log("user win");
}else if (computerNum == choices[0] && userNum === choices[2]) {
    console.log("comouter win");
}else if (computerNum == choices[1] && userNum === choices[0]) {
    console.log("comouter win");
}else if (computerNum == choices[2] && userNum === choices[1]) {
    console.log("comouter win");
}
else {
  console.log("Draw");
}
console.log("computer value :", computerNum);
console.log("user value :",userNum);
console.log("---------------------------------------");


}
