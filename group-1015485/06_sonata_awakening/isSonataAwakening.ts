const sheet = 'AXAXLYL';
const sonata = [ 'A', 'X', 'A', 'X', 'L', 'Y', 'L'];
let sonataIndex = 0;




function isSonataAwakening(sheet: string, sonata: string[]){
    let count = 0;
    for (let i = 0; i < sheet.length; i++){
        sonataIndex ++;
        if (sheet[i].toLowerCase() === sonata[i].toLowerCase())
        {   
            count ++;            
        }
    }
        if( count === sonataIndex) {
        return true;
        }
        else {
        return false;
        }
}  

export default isSonataAwakening;