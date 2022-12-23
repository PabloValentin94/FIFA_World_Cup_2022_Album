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

        // O comando abaixo retorna os registros de uma SQL View.

        $sql = "SELECT * FROM Agrupar_Tabelas WHERE id_figurinha = ?";

        $stmt = $this->conexao->prepare($sql);

        $stmt->bindValue(1, $id);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

}

?>