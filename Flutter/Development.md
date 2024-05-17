# Asynchronous programming: futures, async, await

Asynchronous operations let your program complete work while waiting for another operation to finish. Here are some common asynchronous operations:

  - Fetching data over a network.
  
  - Writing to a database.
  
  - Reading data from a file.
  
  asynchronous computations usually provide their result as a Future or, if the result has multiple parts, as a Stream. These computations introduce asynchrony into a program. 
  # Future
  -  A future represents the result of an asynchronous operation, and can have two states: uncompleted or completed.
  - Future: the Dart Future class.
  - future: an instance of the Dart Future class.
  - To define an async function, add async before the function body:
  - The await keyword works only in async functions.
  - Handling errors
    ```
    try {
      print('Awaiting user order...');
      var order = await fetchUserOrder();
    } catch (err) {
      print('Caught error: $err');
    }
    ```
    
