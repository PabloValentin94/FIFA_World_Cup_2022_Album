<?php

use App\Controller\AlbumController;

$url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

switch($url)
{

    case "/":
        AlbumController::AlbumPage();
    break;

    default:
        echo "Error 404";

}

?>