const jogadores = [
    {nome_jogador: "Kylian Mbappe", classificacao_jogador: "1º", nacionalidade_jogador: "France", imagem_jogador: "Assets/Images/Stickers/Franca/Kylian_Mbappe.jpg"},
    {nome_jogador: "Karim Benzema", classificacao_jogador: "2º", nacionalidade_jogador: "France", imagem_jogador: "Assets/Images/Stickers/Franca/Karim_Benzema.jpg"},
    {nome_jogador: "Kevin De Bruyne", classificacao_jogador: "3º", nacionalidade_jogador: "Belgium", imagem_jogador: "Assets/Images/Stickers/Belgica/Kevin_De_Bruyne.jpg"},
    {nome_jogador: "Lionel Messi", classificacao_jogador: "4º", nacionalidade_jogador: "Argentina", imagem_jogador: "Assets/Images/Stickers/Argentina/Lionel_Messi.jpg"},
    {nome_jogador: "Robert Lewandowski", classificacao_jogador: "5º", nacionalidade_jogador: "Poland", imagem_jogador: "Assets/Images/Stickers/Polonia/Robert_Lewandowski.jpg"},
    {nome_jogador: "Neymar", classificacao_jogador: "6º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Neymar.jpg"},
    {nome_jogador: "Luka Modric", classificacao_jogador: "7º", nacionalidade_jogador: "Croatia", imagem_jogador: "Assets/Images/Stickers/Croacia/Luka_Modric.jpg"},
    {nome_jogador: "Vinicius Junior", classificacao_jogador: "8º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Vinicius_Junior.jpg"},
    {nome_jogador: "Thibaut Courtois", classificacao_jogador: "9º", nacionalidade_jogador: "Belgium", imagem_jogador: "Assets/Images/Stickers/Belgica/Thibaut_Courtois.jpg"},
    {nome_jogador: "Sadio Mane", classificacao_jogador: "10º", nacionalidade_jogador: "Senegal", imagem_jogador: "Assets/Images/Stickers/Senegal/Sadio_Mane.jpg"},
    {nome_jogador: "Harry Kane", classificacao_jogador: "11º", nacionalidade_jogador: "England", imagem_jogador: "Assets/Images/Stickers/Inglaterra/Harry_Kane.jpg"},
    {nome_jogador: "Virgil van Dijk", classificacao_jogador: "12º", nacionalidade_jogador: "Netherlands", imagem_jogador: "Assets/Images/Stickers/Holanda/Virgil_van_Dijk.jpg"},
    {nome_jogador: "Son Heung-Min", classificacao_jogador: "13º", nacionalidade_jogador: "South Korea", imagem_jogador: "Assets/Images/Stickers/Coreia_do_Sul/Son_Heung_Min.jpg"},
    {nome_jogador: "Federico Valverde", classificacao_jogador: "14º", nacionalidade_jogador: "Uruguay", imagem_jogador: "Assets/Images/Stickers/Uruguai/Federico_Valverde.jpg"},
    {nome_jogador: "Joshua Kimmich", classificacao_jogador: "15º", nacionalidade_jogador: "Germany", imagem_jogador: "Assets/Images/Stickers/Alemanha/Joshua_Kimmich.jpg"},
    {nome_jogador: "Bernardo Silva", classificacao_jogador: "16º", nacionalidade_jogador: "Portugal", imagem_jogador: "Assets/Images/Stickers/Portugal/Bernardo_Silva.jpg"},
    {nome_jogador: "Joao Cancelo", classificacao_jogador: "17º", nacionalidade_jogador: "Portugal", imagem_jogador: "Assets/Images/Stickers/Portugal/Joao_Cancelo.jpg"},
    {nome_jogador: "Phil Foden", classificacao_jogador: "18º", nacionalidade_jogador: "England", imagem_jogador: "Assets/Images/Stickers/Inglaterra/Phil_Foden.jpg"},
    {nome_jogador: "Pedri", classificacao_jogador: "19º", nacionalidade_jogador: "Spain", imagem_jogador: "Assets/Images/Stickers/Espanha/Pedri.jpg"},
    {nome_jogador: "Cristiano Ronaldo", classificacao_jogador: "20º", nacionalidade_jogador: "Portugal", imagem_jogador: "Assets/Images/Stickers/Portugal/Cristiano_Ronaldo.jpg"},
    {nome_jogador: "Alisson", classificacao_jogador: "21º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Alisson.jpg"},
    {nome_jogador: "Jude Bellingham", classificacao_jogador: "22º", nacionalidade_jogador: "England", imagem_jogador: "Assets/Images/Stickers/Inglaterra/Jude_Bellingham.jpg"},
    {nome_jogador: "Ruben Dias", classificacao_jogador: "23º", nacionalidade_jogador: "Portugal", imagem_jogador: "Assets/Images/Stickers/Portugal/Ruben_Dias.jpg"},
    {nome_jogador: "Manuel Neuer", classificacao_jogador: "24º", nacionalidade_jogador: "Germany", imagem_jogador: "Assets/Images/Stickers/Alemanha/Manuel_Neuer.jpg"},
    {nome_jogador: "Casemiro", classificacao_jogador: "25º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Casemiro.jpg"},
    {nome_jogador: "Alphonso Davies", classificacao_jogador: "26º", nacionalidade_jogador: "Canada", imagem_jogador: "Assets/Images/Stickers/Canada/Alphonso_Davies.jpg"},
    {nome_jogador: "Bruno Fernandes", classificacao_jogador: "27º", nacionalidade_jogador: "Portugal", imagem_jogador: "Assets/Images/Stickers/Portugal/Bruno_Fernandes.jpg"},
    {nome_jogador: "Rafael Leao", classificacao_jogador: "28º", nacionalidade_jogador: "Portugal", imagem_jogador: "Assets/Images/Stickers/Portugal/Rafael_Leao.jpg"},
    {nome_jogador: "Marquinhos", classificacao_jogador: "29º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Marquinhos.jpg"},
    {nome_jogador: "Antonio Rudiger", classificacao_jogador: "30º", nacionalidade_jogador: "Germany", imagem_jogador: "Assets/Images/Stickers/Alemanha/Antonio_Rudiger.jpg"},
    {nome_jogador: "Thomas Muller", classificacao_jogador: "31º", nacionalidade_jogador: "Germany", imagem_jogador: "Assets/Images/Stickers/Alemanha/Thomas_Muller.jpg"},
    {nome_jogador: "Frenkie de Jong", classificacao_jogador: "32º", nacionalidade_jogador: "Netherlands", imagem_jogador: "Assets/Images/Stickers/Holanda/Frenkie_de_Jong.jpg"},
    {nome_jogador: "IIkay Gundogan", classificacao_jogador: "33º", nacionalidade_jogador: "Germany", imagem_jogador: "Assets/Images/Stickers/Alemanha/IIkay_Gundogan.jpg"},
    {nome_jogador: "Lautaro Martinez", classificacao_jogador: "34º", nacionalidade_jogador: "Argentina", imagem_jogador: "Assets/Images/Stickers/Argentina/Lautaro_Martinez.jpg"},
    {nome_jogador: "Trent Alexander-Arnold", classificacao_jogador: "35º", nacionalidade_jogador: "England", imagem_jogador: "Assets/Images/Stickers/Inglaterra/Trent_Alexander_Arnold.jpg"},
    {nome_jogador: "Achraf Hakimi", classificacao_jogador: "36º", nacionalidade_jogador: "Marocco", imagem_jogador: "Assets/Images/Stickers/Marrocos/Achraf_Hakimi.jpg"},
    {nome_jogador: "Antoine Griezmann", classificacao_jogador: "37º", nacionalidade_jogador: "France", imagem_jogador: "Assets/Images/Stickers/Franca/Antoine_Griezmann.jpg"},
    {nome_jogador: "Ousmane Dembele", classificacao_jogador: "38º", nacionalidade_jogador: "France", imagem_jogador: "Assets/Images/Stickers/Franca/Ousmane_Dembele.jpg"},
    {nome_jogador: "Gabriel Jesus", classificacao_jogador: "39º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Gabriel_Jesus.jpg"},
    {nome_jogador: "Dusan Vlahovic", classificacao_jogador: "40º", nacionalidade_jogador: "Serbia", imagem_jogador: "Assets/Images/Stickers/Servia/Dusan_Vlahovic.jpg"},
    {nome_jogador: "Jamal Musiala", classificacao_jogador: "41º", nacionalidade_jogador: "Germany", imagem_jogador: "Assets/Images/Stickers/Alemanha/Jamal_Musiala.jpg"},
    {nome_jogador: "Rodri", classificacao_jogador: "42º", nacionalidade_jogador: "Spain", imagem_jogador: "Assets/Images/Stickers/Espanha/Rodri.jpg"},
    {nome_jogador: "Romelu Lukaku", classificacao_jogador: "43º", nacionalidade_jogador: "Belgium", imagem_jogador: "Assets/Images/Stickers/Belgica/Romelu_Lukaku.jpg"},
    {nome_jogador: "Aurelien Tchouameni", classificacao_jogador: "44º", nacionalidade_jogador: "France", imagem_jogador: "Assets/Images/Stickers/Franca/Aurelien_Tchouameni.jpg"},
    {nome_jogador: "Gavi", classificacao_jogador: "45º", nacionalidade_jogador: "Spain", imagem_jogador: "Assets/Images/Stickers/Espanha/Gavi.jpg"},
    {nome_jogador: "Christian Eriksen", classificacao_jogador: "46º", nacionalidade_jogador: "Denmark", imagem_jogador: "Assets/Images/Stickers/Dinamarca/Christian_Eriksen.jpg"},
    {nome_jogador: "Ederson", classificacao_jogador: "47º", nacionalidade_jogador: "Brazil", imagem_jogador: "Assets/Images/Stickers/Brasil/Ederson.jpg"},
    {nome_jogador: "Bukayo Saka", classificacao_jogador: "48º", nacionalidade_jogador: "England", imagem_jogador: "Assets/Images/Stickers/Inglaterra/Bukayo_Saka.jpg"},
    {nome_jogador: "Kalidou Koulibaly", classificacao_jogador: "49º", nacionalidade_jogador: "Senegal", imagem_jogador: "Assets/Images/Stickers/Senegal/Kalidou_Koulibaly.jpg"},
    {nome_jogador: "Andre Onana", classificacao_jogador: "50º", nacionalidade_jogador: "Cameroon", imagem_jogador: "Assets/Images/Stickers/Camaroes/Andre_Onana.jpg"}
];

var indice_paginas = 0;

function Mudar_Paginas(condicao)
{

    if(indice_paginas - 1 < 0 && condicao == "anteriores")
    {

        alert("Esta é a primeira página do álbum! Veja as próximas.");
        
    }

    else if(indice_paginas + 2 == 50 && indice_paginas + 3 == 51 && condicao == "proximas")
    {

        alert("Esta é a última página do álbum! Veja as anteriores.");

    }

    else
    {

        if(condicao == "anteriores")
        {

            indice_paginas = indice_paginas - 4;

        }

        else if(condicao == "proximas")
        {

            indice_paginas = indice_paginas + 4;

        }

        Exibir_Figurinhas();

    }

}

function Exibir_Figurinhas()
{

    //console.log(indice_paginas);

    // Figurinha 01:

    document.getElementById("figurinha_01").style = "background-image: url(" + jogadores[indice_paginas].imagem_jogador + ");";

    document.getElementById("classificacao_figurinha_01").innerHTML = jogadores[indice_paginas].classificacao_jogador;

    document.getElementById("nacionalidade_figurinha_01").innerHTML = jogadores[indice_paginas].nacionalidade_jogador;

    document.getElementById("jogador_figurinha_01").innerHTML = jogadores[indice_paginas].nome_jogador;

    // Figurinha 02:

    document.getElementById("figurinha_02").style = "background-image: url(" + jogadores[indice_paginas + 1].imagem_jogador + ");";

    document.getElementById("classificacao_figurinha_02").innerHTML = jogadores[indice_paginas + 1].classificacao_jogador;

    document.getElementById("nacionalidade_figurinha_02").innerHTML = jogadores[indice_paginas + 1].nacionalidade_jogador;

    document.getElementById("jogador_figurinha_02").innerHTML = jogadores[indice_paginas + 1].nome_jogador;

    if(indice_paginas + 2 != 50 && indice_paginas + 3 != 51)
    {

        document.getElementById("espaco_figurinha_03").style = "display:flex;";
        
        document.getElementById("espaco_figurinha_04").style = "display:flex;";

        document.getElementById("trofeu").style = "display: none;";

        // Figurinha 03:

        document.getElementById("figurinha_03").style = "background-image: url(" + jogadores[indice_paginas + 2].imagem_jogador + ");";

        document.getElementById("classificacao_figurinha_03").innerHTML = jogadores[indice_paginas + 2].classificacao_jogador;

        document.getElementById("nacionalidade_figurinha_03").innerHTML = jogadores[indice_paginas + 2].nacionalidade_jogador;

        document.getElementById("jogador_figurinha_03").innerHTML = jogadores[indice_paginas + 2].nome_jogador;

        // Figurinha 04:

        document.getElementById("figurinha_04").style = "background-image: url(" + jogadores[indice_paginas + 3].imagem_jogador + ");";

        document.getElementById("classificacao_figurinha_04").innerHTML = jogadores[indice_paginas + 3].classificacao_jogador;

        document.getElementById("nacionalidade_figurinha_04").innerHTML = jogadores[indice_paginas + 3].nacionalidade_jogador;

        document.getElementById("jogador_figurinha_04").innerHTML = jogadores[indice_paginas + 3].nome_jogador;

    }

    else
    {

        document.getElementById("espaco_figurinha_03").style = "display:none;";
        
        document.getElementById("espaco_figurinha_04").style = "display:none;";

        document.getElementById("trofeu").style = "display: flex;";

    }

}