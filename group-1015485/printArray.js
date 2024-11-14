function printArray(array) {
    console.log("List of destinations :");
    for (var i = 0; i < array.length; i++) {
        console.log(i + 1, "-", array[i]);
    }
}
var array = ["Swamp", "Mountain", "Ocean", "Canyon"];
printArray(array);
