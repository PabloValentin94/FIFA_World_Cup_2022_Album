<?php

namespace App\Model;

use App\DAO\AlbumDAO;

class AlbumModel extends Model
{

    public int $id = 1;

    public function GetByID(int $id)
    {

        $dao = new AlbumDAO();

        $this->rows = [

            $dao->SelectByID($id),
            $dao->SelectByID($id + 1),
            $dao->SelectByID($id + 2),
            $dao->SelectByID($id + 3)

        ];

    }
    
}

?>