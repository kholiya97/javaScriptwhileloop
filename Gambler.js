console.log("================== Welcome To Gambler Game ========================")

//Constants declaration
var StackMoney = 100
const StackGoal = 200
//Variables declaration
var Win = 0
var Lose = 0
console.log("Intial Money is 100.")
while ((StackMoney < StackGoal) && (StackMoney > 0)) {
    var BetPlay = Math.floor(Math.random() * 2)
    if (BetPlay == 0) {
        StackMoney++
        Win++
    }
    else {
        StackMoney--
        Lose++
    }
}
if ((StackMoney == 200) && (StackMoney == 0)) {
    console.log("Gambler has won the game!!")
} else {
    console.log("Gambler has lose  the game.")
}
console.log("Final Money After Game : " + StackMoney +"\n"+ "No Of Win Times : " + Win +"\n"+ "No Of  Bet Times : " +(Win+Lose))