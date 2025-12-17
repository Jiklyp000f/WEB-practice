<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Калькулятор</title>
    </head>
    <body>
        <form action="" method="post">
            <input type="number" name="num1" placeholder="Первое число" required>
            <select name="operation" required>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type="number" name="num2" placeholder="Второе число" required>
            <button type="submit">Вычислить</button>
        </form>

        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $num1 = $_POST["num1"];
                $num2 = $_POST["num2"];
                $operation = $_POST["operation"];
                
                if ($operation == "add") {
                    $result = $num1 + $num2;
                    echo "Результат: $num1 + $num2 = $result";
                } elseif ($operation == "subtract") {
                    $result = $num1 - $num2;
                    echo "Результат: $num1 - $num2 = $result";
                } elseif ($operation == "multiply") {
                    $result = $num1 * $num2;
                    echo "Результат: $num1 * $num2 = $result";
                } elseif ($operation == "divide") {
                    if ($num2 == 0) {
                        echo "Ошибка: деление на ноль";
                    } else {
                        $result = $num1 / $num2;
                        echo "Результат: $num1 / $num2 = $result";
                    }
                }
            }
        ?>
    </body>
</html>