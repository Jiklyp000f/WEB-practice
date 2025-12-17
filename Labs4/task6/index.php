<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Фильтрация товаров</title>
    </head>
    <body>
        <?php
            $products = [
                ['name' => 'Ручка', 'price' => 5, 'stock' => 100],
                ['name' => 'Ноутбук', 'price' => 1200, 'stock' => 10],
                ['name' => 'Блокнот', 'price' => 15, 'stock' => 50],
                ['name' => 'Мышь', 'price' => 45, 'stock' => 0],
                ['name' => 'Клавиатура', 'price' => 70, 'stock' => 20],
                ['name' => 'Карандаш', 'price' => 2, 'stock' => 200],
            ];
            
            $filteredProducts = array_filter($products, function($product) {
                return $product['price'] < 50 && $product['stock'] > 0;
            });
            
            echo "<h3>Отфильтрованные товары (цена < 50, наличие > 0):</h3>";
            echo "<ul>";
            foreach ($filteredProducts as $product) {
                echo "<li>";
                echo $product['name'] . " - Цена: " . $product['price'] . " руб., Наличие: " . $product['stock'] . " шт.";
                echo "</li>";
            }
            echo "</ul>";
        ?>
    </body>
</html>