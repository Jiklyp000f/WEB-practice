<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ассоциативные массивы</title>
    </head>
    <body>
        <?php
            $users = [
                [
                    "name" => "Иван",
                    "age" => 25,
                    "city" => "Москва"
                ],
                [
                    "name" => "Анна",
                    "age" => 22,
                    "city" => "Санкт-Петербург"
                ],
                [
                    "name" => "Сергей",
                    "age" => 30,
                    "city" => "Казань"
                ]
            ];
            
            echo "<ul>";
            foreach ($users as $user) {
                echo "<li>";
                echo "Имя: " . $user["name"] . ", ";
                echo "Возраст: " . $user["age"] . ", ";
                echo "Город: " . $user["city"];
                echo "</li>";
            }
            echo "</ul>";
        ?>
    </body>
</html>