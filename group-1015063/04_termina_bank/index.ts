let amountOfTheDays: number = (parseInt(process.argv[2],10)); 
let days: number = (parseInt(process.argv[3],10));
let rupees: number = amountOfTheDays;
for (let i = 0; i < days; i++)
{
    amountOfTheDays = amountOfTheDays + amountOfTheDays*0.04;
}
rupees = amountOfTheDays - rupees;
//rupees = Math.round(rupees*100)/100;
if (days === 1){
    console.log(`You will earn ${(rupees).toFixed(2)} rupees after ${days} day.`);
}
else {
console.log(`You will earn ${(rupees).toFixed(2)} rupees after ${days} days.`);
}