<?php
function sort_array($array) {
    for ($i = 0; $i < sizeof($array) - 1; $i++) {
        for ($j = $i + 1; $j < sizeof($array); $j++) {
            if ($array[$i] > $array[$j]) {
                $temp = $array[$i];
                $array[$i] = $array[$j];
                $array[$j] = $temp;
            }
        }
    }
    return $array;
}
