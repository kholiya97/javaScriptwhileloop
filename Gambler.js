console.log("======= Coin flip to win if Head/Tail comes 11 times ============")

let HeadCount = 0;
let TailCount = 0;
while (HeadCount <= 11 && TailCount <= 11) 
{
    let CoinToss = Math.floor(Math.random() * 10) % 2;
    if (CoinToss == 1)
        HeadCount++;
    else
        TailCount++;
}
if (TailCount == 11)
    console.log("Tail won!! It comes 11 times.");
else
    console.log("Head won!! It comes 11 times.");