<?php
function palindrome($chaine){
    $count = 0;
    $tab = array($chaine);
    $chaine = str_replace(" ","",$chaine);
    $chaine = strtolower($chaine);
    for ($indice = 0; $indice < strlen($chaine); $indice ++){
    $tab[$indice] = $chaine[$indice];
    }
    $j = count($tab) - 1;
    for ($i = 0; $i < count($tab)/2; $i++){
        if($tab[$i] == $tab[$j]) {
            
            $count ++;
            if ($j != $i) {
            $j--; 
            }
        }else {
            return'False'; 
 
        }
        
    } 
  
    if ($count == ceil(count($tab)/2)){
        return 'True';
    } else {
        return'False';
    }
    
}

 