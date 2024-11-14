<?php
function increment_array($array,$number){
    
    
    for ($i = 0; $i < count($array); $i++)
    {
        if( !is_int($array[$i] )){
            return "L'index INDEX DE LA CASE n'est pas un int";
        } 
        elseif (!is_int($number)){
            return "L'increment n'est pas un Int";
        }
        if (is_int($array[$i] && is_int($number)) ){
            $array[$i] = $array[$i] + $number;

        }
            
    }    
    return $array;
}

