
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment--1</title>
    <link rel="stylesheet" href="./asn.css">
</head>
<body>
    <?php 
    function findBook($books,$title="",$author="",$isbn=""){
        foreach($books as $book){
            if($book['isbn']==$isbn){
                return $book;
            }
        }
        return null;
    }
    ?>
<div class="screen">
    <div class="formContainer">
       
            <form action="" method="post">
                <div class="inputDiv">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" required>
                </div>
                <div class="inputDiv">
                <label for="author">Author</label>
                <input type="text" name="author" id="author" required>
                </div>
                <div class="inputDiv">
                <label for="price">Price</label>
                <input type="number" name="price" id="price" required>
                </div>
                <div class="inputDiv">
                <label for="page">Page</label>
                <input type="number" name="page" id="page" required>
                
                </div>
                <div class="inputDiv">
                <label for="isbn">ISBN</label>
                <input type="number" name="isbn" id="isbn" required>
                </div>
                <div class="inputDiv">
                <label for="publisher">Publisher</label>
                <input type="text" name="publisher" id="publisher" required>
                </div>
                <input class="submit-btn" type="submit" value="Add">
            </form>
       
    </div>
    <div class="books">
        <?php
        $curDir=getcwd();
        $filePath="$curDir/books.json";
        if(!file_exists($filePath)){
            file_put_contents($filePath,json_encode([]));
        }

        if(isset($_POST['title']) && isset($_POST['author']) && isset($_POST['price']) && isset($_POST['page']) && isset($_POST['isbn']) && isset($_POST['publisher'])){
            $title=$_POST['title'];
            $author=$_POST['author'];
            $price=$_POST['price'];
            $page=$_POST['page'];
            $isbn=$_POST['isbn'];
            $publisher=$_POST['publisher'];
            $bookData=file_get_contents("$curDir/books.json");
            $books=json_decode($bookData,true);
            $isExistIsbn=findBook($books,"","",$isbn);
            if($isExistIsbn){
                echo "<script>alert('Book with ISBN $isbn already exist')</script>";
                return;
            }
           $books[]=[
                "title"=>$title,
                "author"=>$author,
                "price"=>$price,
                "page"=>$page,
                "isbn"=>$isbn,
                "publisher"=>$publisher
           ];
            
            file_put_contents("$curDir/books.json",json_encode($books,JSON_PRETTY_PRINT));
        }

        $bookData=file_get_contents("$curDir/books.json");
        $books=json_decode($bookData,true);
        
        ?>
        <table>
            <thead>
            <tr class="bookrow">
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Page</th>
                <th>ISBN</th>
                <th>Publisher</th>
                <th>Update</th>
            </tr>
            </thead>
            <tbody>
            <?php
            
            foreach($books as $book){
                echo "<tr class='bookrow'>";
                echo "<td>".$book['title']."</td>";
                echo "<td>".$book['author']."</td>";
                echo "<td>".$book['price']."</td>";
                echo "<td>".$book['page']."</td>";
                echo "<td>".$book['isbn']."</td>";
                echo "<td>".$book['publisher']."</td>";
                echo "<td><a href='update.php?isbn=".$book['isbn']."'>Update</a></td>";
                echo "</tr>";
            }
            
            ?>
            </tbody>
        </table>
            

    </div>

</div>  

    
    
    
</body>
</html>