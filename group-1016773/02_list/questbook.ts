const fs = require('fs'); 


     function questionbook(){
    try {
        const content = fs.readFileSync(process.argv[process.argv.length - 1], 'utf-8');
        const jsonQuestbook = JSON.parse(content);
        if(process.argv[2] === "--list" && process.argv.length === 4)
        {
            for (const quest of jsonQuestbook)
            {
                console.log(`#${quest.id} ${quest.name}`);
            }
        }
        else if(process.argv[2] === "--info" && process.argv.length === 5)
        {
            console.log("Using info.");
        }
        
        else if(process.argv[2] === "--add" && process.argv.length === 20)
        {
            console.log("Using add.");
        }
        else { 
            console.error("Wrong use of the program.");
        }
    } catch(error) {
        console.error("Wrong use of the program.");
    }
}

questionbook();