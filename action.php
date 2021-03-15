<?php 
if ($_POST)
{
	$count = $_POST["count"];
	$users = $_POST["name"];
	$email = $_POST["email"];
	$array_users = $_POST["name"];
	a:
	shuffle($array_users);
	for ($i=0; $i <$count ; $i++) { 
		if ($users[$i]==$array_users[$i])
			goto a;

	$dbhost = "localhost";
	$dbname = "users";
	$username = "root";
	$password ="";
	$pdo = new PDO("mysql:host=$dbhost; dbname=$dbname",$username ,$password);

	  $result = $pdo->query("SELECT 1 FROM users LIMIT 1");
	  if ($result == false) {
	  	$result = $pdo->query("CREATE TABLE `users`.`users` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `how_present` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;");
	  }
	  for($i = 0 ; $i < $count;$i++) {
	  	$pdo->query("INSERT INTO users (name, email, how_present) VALUES ('{$users[$i]}', '{$email[$i]}', '{$array_users[$i]}');");
	  }
	  echo "Дякуємо, ваші дані було збережено";
	}
}
 ?>
