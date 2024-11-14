var fs = require('fs');
function questionbook() {
    try {
        var content = fs.readFileSync(process.argv[process.argv.length - 1], 'utf-8');
        var jsonQuestbook = JSON.parse(content);
        if (process.argv[2] === "--list" && process.argv.length === 4) {
            for (var _i = 0, jsonQuestbook_1 = jsonQuestbook; _i < jsonQuestbook_1.length; _i++) {
                var quest = jsonQuestbook_1[_i];
                console.log("#".concat(quest.id, " ").concat(quest.name));
            }
        }
        // else if(process.argv[2] === "--info" && process.argv.length === 5)
        // {
        //     console.log("Using info.");
        // }
        // else if(process.argv[2] === "--add" && process.argv.length === 20)
        // {
        //     console.log("Using add.");
        // }
        else {
            console.error("Wrong use of the program.");
        }
    }
    catch (error) {
        console.error("Wrong use of the program.");
    }
}
questionbook();
