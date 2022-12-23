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

        <?php if(count($model->first_rows) == 0 && count($model->second_rows) == 0 
                 && count($model->third_rows) == 0 && count($model->fourth_rows) == 0): ?>

            <p id="rows_null" style="font-size: 40px; color: #FFFFFF;">
                
                Site - ESPN: <a href="https://www.espn.com/soccer/fifa-world-cup/story/4787456/world-cup-rank-the-50-best-footballers-of-qatar-2022"> Clique aqui </a> .
            
            </p>

        <?php else: ?>

            <div id="container" style="order: 2;">

                <div id="left_page">

                    <?php foreach($model->first_rows as $first_item): ?>

                        <div class="espaco_figurinha">

                            <div class="figurinha" style="background-image: url(<?= $first_item->imagem_jogador ?>);">
                        
                                <h4 class="classificacao"> <?= $first_item->id_figurinha ?>º </h4>

                            </div>

                            <div class="nacionalidade"> <?= $first_item->nome_pais ?> </div>

                            <p> <?= $first_item->nome_jogador ?> </p>

                        </div>

                    <?php endforeach; ?>

                    <?php foreach($model->second_rows as $second_item): ?>

                        <div class="espaco_figurinha">

                            <div class="figurinha" style="background-image: url(<?= $second_item->imagem_jogador ?>);">
                        
                                <h4 class="classificacao"> <?= $second_item->id_figurinha ?>º </h4>
                        
                            </div>

                            <div class="nacionalidade"> <?= $second_item->nome_pais ?> </div>

                            <p> <?= $second_item->nome_jogador ?> </p>

                        </div>

                    <?php endforeach; ?>

                </div>

                <div id="right_page">

                    <?php if(count($model->third_rows) != 0 && count($model->fourth_rows) != 0): ?>

                        <?php foreach($model->third_rows as $third_item): ?>

                            <div class="espaco_figurinha">

                                <div class="figurinha" style="background-image: url(<?= $third_item->imagem_jogador ?>);">

                                    <h4 class="classificacao"> <?= $third_item->id_figurinha ?>º </h4>

                                </div>

                                <div class="nacionalidade"> <?= $third_item->nome_pais ?> </div>

                                <p> <?= $third_item->nome_jogador ?> </p>

                            </div>

                        <?php endforeach; ?>

                        <?php foreach($model->fourth_rows as $fourth_item): ?>

                            <div class="espaco_figurinha">

                                <div class="figurinha" style="background-image: url(<?= $fourth_item->imagem_jogador ?>);">

                                    <h4 class="classificacao"> <?= $fourth_item->id_figurinha ?>º </h4>

                                </div>

                                <div class="nacionalidade"> <?= $fourth_item->nome_pais ?> </div>

                                <p> <?= $fourth_item->nome_jogador ?> </p>

                            </div>

                        <?php endforeach; ?>

                    <?php else: ?>

                        <div id="trofeu">  </div>

                    <?php endif; ?>

                </div>

            </div>

            <?php foreach($model->first_rows as $item): ?>

                <form class="botoes" method="POST" action="/" style="order: 1;">

                    <button type="submit" name="id_figurinha" value="<?= $item->id_figurinha - 4 ?>"> < </button>

                </form>

                <form class="botoes" method="POST" action="/" style="order: 3;">

                    <button type="submit" name="id_figurinha" value="<?= $item->id_figurinha + 4 ?>"> > </button>

                </form>

            <?php endforeach; ?>

        <?php endif; ?>
        
    </body>

</html>