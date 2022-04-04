var output = document.getElementById('output')

fetch('https://api.themoviedb.org/3/movie/popular?api_key=d645245eff2b1f60d18bc1ccf08032d2&language=en-US')
    .then(res => res.json())
    .then(data => {
        output.innerHTML = `${data.page}`;
        console.log(data)
    }); 
