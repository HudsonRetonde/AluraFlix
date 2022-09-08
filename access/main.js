/*function NovoFilme() {
    var listaFilmes = [];

    for (var i = 0; i < listaFilmes.length; i++) {
        var elementoResultado = document.getElementById("pushFilme")
        listaFilmes.push("")
    }
}*/


var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg", 
"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4ea629d58c2c785b465211f3fb4d284dc743e6218dc9e03c0dbacccaf5e28c53._RI_V_TTW_.jpg",
"https://leiturafilmica.com.br/wp-content/uploads/2021/07/o-poderoso-chefao-poster.png",
"https://m.media-amazon.com/images/M/MV5BMTQwOTgzNjkzMl5BMl5BanBnXkFtZTcwMjgxNDcyNA@@._V1_.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/90/95/77/20122074.jpg",
"https://br.web.img2.acsta.net/medias/nmedia/18/92/91/08/20224693.jpg",
"https://upload.wikimedia.org/wikipedia/pt/4/44/GladiadorPoster.jpg",
"https://br.web.img2.acsta.net/pictures/210/163/21016330_20130627184045446.jpg",
"https://upload.wikimedia.org/wikipedia/pt/a/ac/Saving_Private_Ryan_poster.jpg",
"https://miscelaneacult.files.wordpress.com/2010/04/rocky41.jpg"]

for(var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
   
}

/*function iserirFilmeNovo(evento) {


    
    evento.preventDefault();
    var valorInput = listaFilmes.push(document.getElementById('valor').value);
    console.log(valorInput);
    
}

*/