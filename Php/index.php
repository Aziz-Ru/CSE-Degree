
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning PHP</title>
</head>
<body>
    <h1>PHP</h1>

    
    <!-- <form action="/index.php?fn=add" method='post'>
        <input type="number" name="num1" id="">
        <input type="number" name="num1" id="">
        <input type="submit" value="Add">
    </form> -->

    <?php
    
        function add( $num1,  $num2){
            return $num1 + $num2;
        }
        // json_decode('filename', true);
        // if true that is array
        // if false that is object
        // file_get_contents('filename');
        // return file content
        // file_put_contents('filename', 'data');
        // write data to file
        // file_exists('filename');
        // check file exist or not
        // unlink('filename');
        // delete file
        // mkdir('foldername');
        // create folder
        // rmdir('foldername');
        // delete folder
        // scandir('foldername');
        // return all file and folder in array
        // $_GET['name'];
        // get data from url
        // $_POST['name'];
        // get data from form
        // $_REQUEST['name'];
        // get data from form and url
        // $_SERVER['name'];
        // get server information
        // $_COOKIE['name'];
        // get cookie
        // $_SESSION['name'];
        // get session
        // $_FILES['name'];
        // get file
        // $_ENV['name'];
        // get environment variable
        $fnName= $_GET['fn'];
        if($fnName == 'add'){
             $num1  = $_POST['num1'];
             $num2 = $_POST['num2'];

                echo add($num1, $num2);
        }
        
        $bookJson = file_get_contents(__DIR__.'/book.json');
        $books = json_decode($bookJson, true);
        
        echo '<pre>';
        print_r($books['books'][0]);
        // ['0']['title']

        echo '</pre>';


    ?>
</body>
</html>