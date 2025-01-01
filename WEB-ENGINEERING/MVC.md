# Model View Controller
The MVC (Model-View-Controller) pattern is a software design pattern used to separate concerns in an application. It divides the application into three interconnected components, making the application easier to manage, test, and scale. The primary goal of the MVC pattern is to decouple the internal representations of information from the ways that information is presented and interacted with.

### Model:
  - Represents the data or business logic of the application.
  - It is responsible for retrieving, storing, and processing data, often interacting with the database.

### View:
- Represents the UI (User Interface) and the presentation layer of the application.
- The View is responsible for displaying the data provided by the Model to the user and sending user commands to the Controller

### Controller:
- Acts as the intermediary between the Model and the View.
- Controllers represent the layer in our application that, given a request, talks to the models and builds the views.
- It takes user input from the View, processes it (often updating the Model), and updates the View accordingly.
- The Controller interprets the user’s actions and performs the corresponding updates to the Model or View



## Composer
Composer is a dependency manager for PHP, used to manage libraries, packages, and dependencies in PHP projects. It allows developers to easily manage and install third-party libraries, ensuring that the required versions of libraries are present in the project, and handles autoloading of classes.

- Dependency Management:
- Autoloading
- Package Repository
- Command-Line Interface (CLI)
- Project Setup & Reproducibility

## Autoloader
An autoloader in PHP is a mechanism that automatically loads classes, interfaces, or traits without the need to manually include or require the corresponding files.



