<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add Book</title>
  </head>
  <body>

    <form action="index.php?method=add" method='post'>
      <h1>Add Book</h1>
      <div class="">
        <label for="title">Title</label>
        <input type="text" name="title" required />
      </div>
      <div class="">
        <label for="author">Author</label>
        <input type="text" required name="author" />
      </div>
      <div class="">
        <label for="page">Pages</label>
        <input type="number" required name="pages" />
      </div>
      <div class="">
        <label for="isbn">ISBN</label>
        <input type="number" required name="isbn" />
      </div>
      <div class="">
        <label for="avaiable">Available</label>
        <input type="checkbox" name="avaiable" />
      </div>
      <input type='submit' value="submit"/>
    </form>
  </body>
</html>
