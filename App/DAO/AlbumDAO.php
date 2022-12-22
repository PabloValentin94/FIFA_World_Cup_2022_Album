<?php

namespace App\DAO;

use \PDO;

class AlbumDAO extends DAO
{

    public function __construct()
    {

        parent::__construct();
        
    }

    public function SelectByID(int $id)
    {

        $sql = "SELECT * FROM Figurinha WHERE id = ?";

        $stmt = $this->conexao->prepare($sql);

        $stmt->bindValue(1, $id);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

}

?>