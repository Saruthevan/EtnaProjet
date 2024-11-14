<?php
function count_word_sort($path){
    $wordCounts = array();
    $error_message = '';
    if (file_exists($path)) {
        if (!is_dir($path)) {
            if (is_readable($path)) {
                $fileContents = file_get_contents($path);
                if (!empty($fileContents)) {
                    if ($fh = fopen($path, 'r')) {
                        preg_match_all('/\w+/', $fileContents, $matches);
                        $words = $matches[0];
                        foreach ($words as $word) {
                            if (array_key_exists($word, $wordCounts)) {
                                $wordCounts[$word]++;
                            } else {
                                $wordCounts[$word] = 1;
                            }
                        }
                    }else{
                        $error_message = "FILE: Cannot open file ($path)";
                    }
                    uksort($wordCounts, 'strcasecmp');
                } else {
                    $error_message = "FILE: File is empty";
                }
            } else {
                $error_message = "FILE: Permission denied";
            }
        } else {
            $error_message = "FILE: Is a directory";
        }
    } else {
        $error_message = "FILE: No such file or directory";
    }

    if (empty($error_message)) {
        foreach ($wordCounts as $word => $count) {
            echo "$word => $count\n";
        }
    } else {
        echo $error_message;
    }
}

count_word_sort('test.txt');
?>
