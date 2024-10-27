<?php
    class BookModel {
        private $connection;
        public function __construct($connection) {
            $this->connection = $connection;
        }
        
        
        public function getBooks() {
            $query = "SELECT * FROM book";
            $stmt = $this->connection->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC); 
            
        }
        public function addBook($title,$author,$isbn,$pages,$isAvailable){
           try{
            $query="INSERT INTO book (title,author,isbn,pages,isAvailable) VALUES (?,?,?,?,?)";
            $stmt = $this->connection->prepare($query);
            $stmt ->bindParam(1,$title);
            $stmt ->bindParam(2,$author);
            $stmt ->bindParam(3,$isbn);
            $stmt ->bindParam(4,$pages);
            $stmt ->bindParam(5,$isAvailable);
            if($stmt->execute()){
                return true;
            }else{
                return false;
            }
           }catch(PDOException $e){
               echo $e->getMessage();
               return false;
           }
        }
        public function getBook($id){
            $query = "SELECT * FROM book WHERE id=?";
            $stmt = $this->connection->prepare($query);
            $stmt->bindParam(1,$id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }

        public function updateBook($id,$title,$author,$isbn,$pages,$isAvailable){
            try{
                $query="UPDATE book SET title=?,author=?,isbn=?,pages=?,isAvailable=? WHERE id=?";
                $stmt = $this->connection->prepare($query);
                $stmt ->bindParam(1,$title);
                $stmt ->bindParam(2,$author);
                $stmt ->bindParam(3,$isbn);
                $stmt ->bindParam(4,$pages);
                $stmt ->bindParam(5,$isAvailable);
                $stmt ->bindParam(6,$id);
                if($stmt->execute()){
                    return true;
                }else{
                    return false;
                }
               }catch(PDOException $e){
                   echo $e->getMessage();
                   return false;
               }
        }

        public function deleteBook($id){
            try{
                $query="DELETE FROM book WHERE id=?";
                $stmt = $this->connection->prepare($query);
                $stmt ->bindParam(1,$id);
                if($stmt->execute()){
                    return true;
                }else{
                    return false;
                }
               }catch(PDOException $e){
                   echo $e->getMessage();
                   return false;
               }
        }
    }
?>
