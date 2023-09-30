<?php
     $host = 'localhost';
     $username = 'root';
     $password = 'root';
     $database = 'db';

     $conn = mysqli_connect($host, $username, $password, $database);

     if ($conn) {
         echo 'Успешное подключение к базе данных!';
     } else {
         echo 'Ошибка подключения к базе данных: ' . mysqli_connect_error();
     }
     ?>