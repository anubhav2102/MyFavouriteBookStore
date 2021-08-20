<?php
// Get the name they entered in the form
// We'll be naming the file this
$file = $_POST['name'];
// Get the email from the form
$email = $_POST['email'];
// We want the file to be a text file right?
$ex = ".txt";
// Try to open a file named $file$ex (johndoe.txt for example)
// Because this file doesn't exist yet the server creates it
$write = fopen("$file$ex","w");
// Now open the file up again but this time save the email in it
fwrite($write,$email);
// MAKE SURE you close the file!!!
fclose($write);
// The folder that this script is in on the server is where the file we just made was saved
// We can 'rename' it to another folder
// The folder on the server we want to move it to 
$data = "../emails/";
// Now put it all together: This example goes out of the folder we're in and into the folder 'emails'
// The new 'name' would be this now (../emails/johndoe.txt): So now the file is moved to where we want for storage
rename ("$file","$data$file$ex");
// The script is done, send the user to another page (Just read the address below and you'll get it)
// Its just an example fyi change to what you want
header('Location: http://127.0.0.1:5501/signup.html
exit');