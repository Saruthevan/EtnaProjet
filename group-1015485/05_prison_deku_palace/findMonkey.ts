export default interface prison {
    number:number,
    is_guarded: Boolean,
    prisoners: [
        {
            species: string,
            days_left: number,
            crime:string,
        }
    ],
}

const prison = [
    {
        number: 1,
        is_guarded: true,
        prisoners : [
            {
                species: "Deku Baba",
                days_left: 20,
                crime: "Attacking a merchant"
            },
            {
                species: "Deku Baba",
                days_left: 20,
                crime: "Attacking a merchant"
            }
        ]
    },
    {
        number: 2,
        is_guarded: false,
        prisoners: []
    },
    {
        number: 3,
        is_guarded: true,
        prisoners: [
            {
                species: "Monkey",
                days_left: 999999,
                crime: "Kidnapping the princess"
            }
        ]
    }
];


export default function findMonkey(prison: any){
    
    for (const name in prison){

            for (const prisoner in prison[name].prisoners){
                let count = 0 ;
                if (prison[name].prisoners[prisoner].species ===`Monkey` && prison[name].is_guarded === false ) {
                console.log("The monkey is in the cell number "+ prison[name].number+". The cell is not guarded.");
                return 0;
                }
                else  if (prison[name].prisoners[prisoner].species ===`Monkey` && prison[name].is_guarded === true) {
  
                    console.log("The monkey is in the cell number "+ prison[name].number+". The cell is guarded.");
                    return 0;
                }
            }
        }
        console.log("The monkey isn't here.");        
    
}


