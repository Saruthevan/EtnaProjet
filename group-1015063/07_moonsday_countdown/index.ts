let kilometre: number = parseInt(process.argv[2]);
let result: number = kilometre/3600;

result = Math.trunc(result);
while(result >= 0)
{
    console.log(result);
    result --;
}


