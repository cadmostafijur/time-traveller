<?php
/**
 * Establish a connection to the MySQL database.
 *
 * @return mysqli|false Returns the mysqli connection object on success, or false on failure.
 */
function dbConnect() {
    $servername = "localhost"; // Database server name
    $username = "root"; // Database username
    $password = ""; // Database password
    $dbname = "climate_change_survey"; // Database name

    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn; // Return the connection object
}
?>
