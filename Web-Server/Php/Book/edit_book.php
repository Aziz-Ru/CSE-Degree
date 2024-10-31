<?php
    require_once './core/db.php';
    require_once './model/book_model.php';
     $db = Database:: getInstance();
     $connection = $db->getConnection();
     $bookModel = new BookModel($connection);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book</title>

</head>
<body>
    <h1>Edit Book</h1>
</body>
</html>