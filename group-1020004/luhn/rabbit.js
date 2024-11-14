function bunnyroad(instructions) {
    var position = { x: 0, y: 0 };
    for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
        var instruction = instructions_1[_i];
        switch (instruction) {
            case "gauche":
                position.x -= 1;
                break;
            case "droite":
                position.x += 1;
                break;
            case "nord":
                position.y += 1;
                break;
            case "sud":
                position.y -= 1;
                break;
        }
    }
    return position;
}
console.log(bunnyroad([
    "droite",
    "droite",
    "gauche",
    "droite",
    "nord",
    "sud",
    "nord",
    "droite",
    "nord",
    "nord",
]));
