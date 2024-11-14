<?php
    function is_negative_ternary ($number){
        $result = !is_numeric($number) ? "Le parametre n'est pas un int": "ok";
        if($result === "ok")
        {
            $result = $number <0 ? ('True') : ('False');
        }

    //$result = is_numeric($number)   < 0 ?  ('True') :  ('False') ;
    echo "$result\n";
    }
    
?>

