<?php
class Database {
    // Hold the instance of the class
    private static $instance = null;
    private $connection;
    
    // Define your database connection parameters
    private $host = "localhost";
    private $username = "root";
    private $password = "*aziz121#";
    private $database = "web";

    // Private constructor to prevent direct object creation
    private function __construct() {
        // Create a new PDO connection
        try {
            $this->connection = new PDO("mysql:host={$this->host};dbname={$this->database}", $this->username, $this->password);
            // Set PDO to throw exceptions on error
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Handle any connection errors
            die("Database connection failed: " . $e->getMessage());
        }
    }

    // Get the singleton instance of the class
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    // Prevent cloning of the instance
    private function __clone() {}

    // Prevent unserialization of the instance
    private function __wakeup() {}

    // Get the PDO connection
    public function getConnection() {
        return $this->connection;
    }
}
?>
