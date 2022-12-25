<!DOCTYPE html>

<html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <Link rel="shortcut icon" href="/View/Modules/Images/Favicon.png">

        <link rel="stylesheet" type="text/css" href="/View/Modules/Album/CSS/Styles.css">

        <title> FIFA World Cup 2.022 - Álbum </title>

    </head>

    <body>

        <?php if(count($model->rows[0]) == 0 && count($model->rows[1]) == 0 
                 && count($model->rows[2]) == 0 && count($model->rows[3]) == 0): ?>

            <p id="rows_null" style="font-size: 40px; color: #FFFFFF;">
                
                Site - ESPN: <a href="https://www.espn.com/soccer/fifa-world-cup/story/4787456/world-cup-rank-the-50-best-footballers-of-qatar-2022"> Clique aqui </a> .
            
            </p>

        <?php else: ?>

            <div id="container" style="order: 2;">

                <div id="left_page">

                    <div class="espaco_figurinha">

                        <div class="figurinha" style="background-image: url(<?= $model->rows[0][0]->imagem_jogador ?>);">
                    
                            <h4 class="classificacao"> <?= $model->rows[0][0]->id_figurinha ?>º </h4>

                        </div>

                        <div class="nacionalidade"> <?= $model->rows[0][0]->nome_pais ?> </div>

                        <p> <?= $model->rows[0][0]->nome_jogador ?> </p>

                    </div>

                    <div class="espaco_figurinha">

                        <div class="figurinha" style="background-image: url(<?= $model->rows[1][0]->imagem_jogador ?>);">
                    
                            <h4 class="classificacao"> <?= $model->rows[1][0]->id_figurinha ?>º </h4>
                    
                        </div>

                        <div class="nacionalidade"> <?= $model->rows[1][0]->nome_pais ?> </div>

                        <p> <?= $model->rows[1][0]->nome_jogador ?> </p>

                    </div>

                </div>

                <div id="right_page">

                    <?php if(count($model->rows[2]) != 0 && count($model->rows[3]) != 0): ?>

                        <div class="espaco_figurinha">

                            <div class="figurinha" style="background-image: url(<?= $model->rows[2][0]->imagem_jogador ?>);">

                                <h4 class="classificacao"> <?= $model->rows[2][0]->id_figurinha ?>º </h4>

                            </div>

                            <div class="nacionalidade"> <?= $model->rows[2][0]->nome_pais ?> </div>

                            <p> <?= $model->rows[2][0]->nome_jogador ?> </p>

                        </div>

                        <div class="espaco_figurinha">

                            <div class="figurinha" style="background-image: url(<?= $model->rows[3][0]->imagem_jogador ?>);">

                                <h4 class="classificacao"> <?= $model->rows[3][0]->id_figurinha ?>º </h4>

                            </div>

                            <div class="nacionalidade"> <?= $model->rows[3][0]->nome_pais ?> </div>

                            <p> <?= $model->rows[3][0]->nome_jogador ?> </p>

                        </div>

                    <?php else: ?>

                        <div id="trofeu">  </div>

                    <?php endif ?>

                </div>

            </div>

            <form class="botoes" method="POST" action="/" style="order: 1;">

                <button type="submit" name="id_figurinha" value="<?= $model->rows[0][0]->id_figurinha - 4 ?>"> < </button>

            </form>

            <form class="botoes" method="POST" action="/" style="order: 3;">

                <button type="submit" name="id_figurinha" value="<?= $model->rows[0][0]->id_figurinha + 4 ?>"> > </button>

            </form>

        <?php endif ?>
        
    </body>

</html>