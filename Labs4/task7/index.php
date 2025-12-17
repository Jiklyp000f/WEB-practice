<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Генератор паролей</title>
    </head>
    <body>
        <?php
            function generatePassword($length) {
                $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                $password = '';
                
                for ($i = 0; $i < $length; $i++) {
                    $randomIndex = rand(0, strlen($chars) - 1);
                    $password .= $chars[$randomIndex];
                }
                
                return $password;
            }
            
            echo "<h3>Сгенерированные пароли:</h3>";
            echo "Пароль длиной 10 символов: " . generatePassword(10) . "<br>";
            echo "Пароль длиной 12 символов: " . generatePassword(12) . "<br>";
            echo "Пароль длиной 8 символов: " . generatePassword(8) . "<br>";
        ?>
    </body>
</html>