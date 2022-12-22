<?php

namespace App\Controller;

use App\Model\AlbumModel;

class AlbumController extends Controller
{

    public static function AlbumPage()
    {

        /*$model = new AlbumModel();

        if(isset($_POST["id_figurinhas"]))
        {

            $model->id = $_POST["id_figurinhas"];

        }

        $model->GetByID($model->id);*/

        parent::render("Album/Album", /*$model*/);

    }

}

?>