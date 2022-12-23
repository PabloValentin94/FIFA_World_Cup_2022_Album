<?php

namespace App\Controller;

use App\Model\AlbumModel;

class AlbumController extends Controller
{

    public static function AlbumPage()
    {

        $model = new AlbumModel();

        if(isset($_POST["id_figurinha"]))
        {

            $model->first_id = $_POST["id_figurinha"];
            $model->second_id = $_POST["id_figurinha"] + 1;
            $model->third_id = $_POST["id_figurinha"] + 2;
            $model->fourth_id = $_POST["id_figurinha"] + 3;

        }

        $model->GetByID($model->first_id, $model->second_id,
                        $model->third_id, $model->fourth_id);

        parent::render("Album/Album", $model);

    }

}

?>