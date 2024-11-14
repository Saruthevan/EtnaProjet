var nb_cries = parseInt(process.argv[2]);
var animal = process.argv[3];
var cries;
var combinedMessage = "";
for (var i = 0; i < nb_cries; i++) {
    if (animal === "dogs") {
        cries = "bark" + " ";
        if (i === nb_cries - 1) {
            cries = "bark" + "!";
        }
        combinedMessage += cries;
    }
    else if (animal === "cats") {
        cries = "meow" + " ";
        if (i === nb_cries - 1) {
            cries = "meow" + "!";
        }
        combinedMessage += cries;
    }
    else if (animal === "cows") {
        cries = "moo" + " ";
        if (i === nb_cries - 1) {
            cries = "moo" + "!";
        }
        combinedMessage += cries;
    }
}
console.log(combinedMessage);
