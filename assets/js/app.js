

// selectionne l'endroit ou va apparaitre mes infos
var output = document.querySelector("#name");


// code pour l'api
var xhr = new XMLHttpRequest();

//lien de 'lapi a partir de api_key lien d'Axel
var url = 'https://api.themoviedb.org/3/movie/76341?api_key=d645245eff2b1f60d18bc1ccf08032d2';
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4){
        console.log(xhr.response)
        var str = xhr.responseText;
    //recupere les infos en str grace au json 
        var obj = JSON.parse(str);
    // insere la valeur 'original_title' de l'api 
        output.innerHTML = obj.original_title + '</br> <img src="+obj.poster_path+">'
        +'Budget: '+ obj.budget +'$';
        console.log(obj);
    }
}
xhr.open("GET",url);
xhr.send();
console.log(xhr)