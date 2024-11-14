<?php

function hello($nom = "") {
    if (empty($nom))
    {
        return "Hello World !\n";
    
    } else {
        return "Hello ".$nom." !\n"; 
    }
}

?>