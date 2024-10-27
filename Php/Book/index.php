
<?php
   require_once './core/db.php';
   require_once './model/book_model.php';

    $db = Database:: getInstance();
    $connection = $db->getConnection();
    $bookModel = new BookModel($connection);
    
    if($_SERVER['REQUEST_METHOD']==='POST'){
       if($_GET['method']==='add'){
        $bookModel->addBook($_POST['title'],$_POST['author'],$_POST['isbn'],$_POST['pages'],$_POST['isAvailable']=='on'?0:1);
       }
       if($_GET['method']==='delete'){
        $bookModel->deleteBook($_POST['id']);
       }
        
    }

    $books = $bookModel->getBooks();

    
    
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
    <style>
        td{
            margin: 10px;
        }
        </style>
</head>
<body>
    <h1>Book</h1>
    <a href="add_book.php">Add Book</a>
    <table>
        <thead>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Available</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <?php foreach($books as $book): ?>
                <tr>
                    <td><?php echo $book['title']; ?></td>
                    <td><?php echo $book['author']; ?></td>
                    <td><?php echo $book['pages']; ?></td>
                    <td><?php echo $book['isAvailable']; ?></td>
                    <td>
                        <form action="edit_book.php" method="post">
                            <input type="hidden" name="id" value="<?php echo $book['id']; ?>">
                            <input type="submit" value="Edit">
                        </form>

                        <form action="index.php?method=delete" method='post'>
                            <input type="hidden" name="id" value="<?php echo $book['id']; ?>">
                            <input type="submit" value="Delete">
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

</body>
</html>