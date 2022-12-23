<?php

namespace App\Model;

use App\DAO\AlbumDAO;

class AlbumModel extends Model
{

    public int $first_id = 1;
    public int $second_id = 2;
    public int $third_id = 3;
    public int $fourth_id = 4;

    public function GetByID(int $first_id, int $second_id, 
                            int $third_id, int $fourth_id)
    {

        $dao = new AlbumDAO();

        $this->first_rows = $dao->SelectByID($first_id);
        $this->second_rows = $dao->SelectByID($second_id);
        $this->third_rows = $dao->SelectByID($third_id);
        $this->fourth_rows = $dao->SelectByID($fourth_id);

    }
    
}

?>