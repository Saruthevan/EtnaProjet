var amountOfTheDays = (parseInt(process.argv[2], 10));
var days = (parseInt(process.argv[3], 10));
var rupees = amountOfTheDays;
for (var i = 0; i < days; i++) {
    amountOfTheDays = amountOfTheDays + amountOfTheDays * 0.04;
}
rupees = amountOfTheDays - rupees;
//rupees = Math.round(rupees*100)/100;
if (days === 1) {
    console.log("You will earn ".concat((rupees).toFixed(2), " rupees after ").concat(days, " day."));
}
else {
    console.log("You will earn ".concat((rupees).toFixed(2), " rupees after ").concat(days, " day(s)."));
}
