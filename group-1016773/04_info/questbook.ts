const fs = require('fs'); 


export default function questionbook(){
    try {
        const content = fs.readFileSync(process.argv[process.argv.length - 1], 'utf-8');
        const jsonQuestbook = JSON.parse(content);
        if(process.argv[2] === "--list" && process.argv.length === 4)
        {
            console.log("Using list.");
        }
        else if(process.argv[2] === "--info" && process.argv.length === 5)
        {   
            // console.log(jsonQuestbook[2].id);
            for (let i in jsonQuestbook){
                if (jsonQuestbook[i].id === parseInt(process.argv[3])){
                    console.log("========================================");
                    console.log(`#`+jsonQuestbook[i].id, jsonQuestbook[i].name, "(",jsonQuestbook[i].quest_type,"quest)" );
                    console.log("========================================");
                    console.log("Given by", jsonQuestbook[i].quest_giver);
                    if(jsonQuestbook[i].completion_state === 1) 
                    {
                        console.log("Completed since", jsonQuestbook[i].end_date+".");
                    } else if (jsonQuestbook[i].completion_state === 0) {
                        console.log("Currently ongoing.");
                    } else if (jsonQuestbook[i].completion_state === 2){
                        console.log("Failed the", jsonQuestbook[i].end_date)+".";
                    }
                    console.log("Goal:", jsonQuestbook[i].description);
                    if(jsonQuestbook[i].reward === ""){
                        console.log("Reward : ---");
                    } else {
                        console.log("Reward :", jsonQuestbook[i].reward);
                    }
                }
            }
            
        }
        
        else if(process.argv[2] === "--add" && process.argv.length === 20)
        {
            console.log("Using add.");
        }
        // else { 
        //     console.error("Wrong use of the program.");
        // }
    } catch(error) {
        console.error("Wrong use of the program.");
    }
}


questionbook();