# Dependency Injection

 Dependency Injection (DI) is a design pattern used to implement Inversion of Control (IoC). 
It allows for better decoupling between components by injecting dependencies (such as objects or services) into a class rather than creating them within the class.
This makes classes easier to test, maintain, and extend.

```
public class DatabaseService {
    public void connect() {
        System.out.println("Connected to the database.");
    }
}
public class UserService {
    private DatabaseService databaseService;
    public UserService(DatabaseService databaseService) {
        this.databaseService = databaseService;
    }

    public void createUser(String username) {
        databaseService.connect();  // Using the injected dependency
        System.out.println("User " + username + " created successfully.");
    }
}
public class Main {
    public static void main(String[] args) {
        DatabaseService databaseService = new DatabaseService();  // Creating the DatabaseService instance
        UserService userService = new UserService(databaseService);  // Injecting DatabaseService into UserService

        userService.createUser("john_doe");  // Output: Connected to the database. User john_doe created successfully.
    }
}
```
