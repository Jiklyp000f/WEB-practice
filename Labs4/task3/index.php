<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Функции и циклы</title>
    </head>
    <body>
        <?php
            function printNumbers($start, $end) {
                for ($i = $start; $i <= $end; $i++) {
                    echo "$i<br>";
                }
            }
            
            printNumbers(1, 10);
        ?>
    </body>
</html>