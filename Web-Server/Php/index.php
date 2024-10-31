<?php 
require_once 'fun.php';
echo getName();

echo '<br>';
$self=$_SERVER['PHP_SELF'];
$ip=$_SERVER['REMOTE_ADDR'];
$host=$_SERVER['HTTP_HOST'];
$agent=$_SERVER['HTTP_USER_AGENT'];
$method=$_SERVER['REQUEST_METHOD'];
$protocol=$_SERVER['SERVER_PROTOCOL'];
$server=$_SERVER['SERVER_SOFTWARE'];
$referer=$_SERVER['HTTP_REFERER'];
$accept=$_SERVER['HTTP_ACCEPT'];
$accept_charset=$_SERVER['HTTP_ACCEPT_CHARSET'];
$accept_encoding=$_SERVER['HTTP_ACCEPT_ENCODING'];
$accept_language=$_SERVER['HTTP_ACCEPT_LANGUAGE'];
$connection=$_SERVER['HTTP_CONNECTION'];
$server_name=$_SERVER['SERVER_NAME'];
$server_port=$_SERVER['SERVER_PORT'];
$server_addr=$_SERVER['SERVER_ADDR'];
$server_admin=$_SERVER['SERVER_ADMIN'];
$server_document_root=$_SERVER['DOCUMENT_ROOT'];
$server_script_filename=$_SERVER['SCRIPT_FILENAME'];
$server_gateway_interface=$_SERVER['GATEWAY_INTERFACE'];
$server_query_string=$_SERVER['QUERY_STRING'];
$server_request_uri=$_SERVER['REQUEST_URI'];
$server_request_time=$_SERVER['REQUEST_TIME'];
// echo "Request Time: {$server_request_time}<br>";
// echo "Request URI: {$server_request_uri}<br>";
// echo "Query String: {$server_query_string}<br>";
// echo "Server Gateway Interface: {$server_gateway_interface}<br>";
// echo "Self: {$self}<br>";
// echo "IP: {$ip}<br>";
// echo "Host: {$host}<br>";
// echo "Agent: {$agent}<br>";
// echo "Method: {$method}<br>";
// echo "Protocol: {$protocol}<br>";
// echo "Server: {$server}<br>";
// echo "Referer: {$referer}<br>";
// echo "Accept: {$accept}<br>";
// echo "Accept Charset: {$accept_charset}<br>";
// echo "Accept Encoding: {$accept_encoding}<br>";
// echo "Accept Language: {$accept_language}<br>";
// echo "Connection: {$connection}<br>";
// echo "Server Name: {$server_name}<br>";
// echo "Server Port: {$server_port}<br>";
// echo "Server Addr: {$server_addr}<br>";
// echo "Server Admin: {$server_admin}<br>";
// echo "Server Document Root: {$server_document_root}<br>";
// echo "Server Script Filename: {$server_script_filename}<br>";


if(isset($_POST['name']) && isset($_POST['email'])){
    $name=htmlspecialchars($_POST['name']);
    $email=htmlspecialchars($_POST['email']);
    echo "Name: {$name}, Email: {$email}";
    echo $_POST['email'];
}
var_dump('hiii');
var_dump(1009191);
var_dump(['hii','hello']);
echo'<br>';
var_dump(100.9191);
echo'<br>';
var_dump(true);
echo'<br>';
$x=10;
echo "{$x}<br>";
echo strpos("Hello world!","world");
echo'<br>';
$a = 5;
$b = 5.34;
$c = "25";


var_dump($a);
var_dump($b);
var_dump($c);

echo'<br>';

echo PHP_INT_MAX;
echo'<br>';
echo PHP_INT_MIN;
echo'<br>';
echo PHP_INT_SIZE;
//The size of an integer in bytes

define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;

echo'<br>';
echo __DIR__;
echo'<br>';
echo __FILE__;
echo'<br>';
echo __LINE__;

echo'<br>';
echo"Todays date is ".date("Y/m/d")."<br>";

?>

<form action="" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email"><br><br>
    <input type="submit" value="Submit">
</form>