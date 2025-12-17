<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Арифметика и условия</title>
    </head>
    <body>
        <?php
            $num1 = 15;
            $num2 = 7;
            $sum = $num1 + $num2;
            
            echo "Число 1: $num1<br>";
            echo "Число 2: $num2<br>";
            echo "Сумма: $sum<br>";
            
            if ($sum % 2 == 0) {
                echo "Сумма является четным числом";
            } else {
                echo "Сумма является нечетным числом";
            }
        ?>
    </body>
</html>