const API_KEY = 'api_key=d645245eff2b1f60d18bc1ccf08032d2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;


(function ($) {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      const {results} = data;

      const featuredMovie = results.filter(
        (movie) => movie.vote_average > 7
      );

      featuredMovie.forEach((element) => {
        const {poster_path, title, vote_average, overview} = element;

        $(".container .list").append(`
        <div class="info">
            <div class="thumbnail" width="500px">
            <img class="carousel_photo" src="${poster_path? IMG_URL + poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}"">
        </div>
          <div class="info-movie">
              <div class="movie-title"><a href="">${title}</a></div>
              <div class="top-average">${vote_average}</div>
              <div class="overview">${overview}</div>
          </div>
        </div>
      `);
      });
    })
    .then(() => {
      $(".container .list").slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".btn-prev"),
        nextArrow: $(".btn-next"),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "30px",
              slidesToShow: 2
            }
          },
          {
            breakpoint: 625,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "30px",
              slidesToShow: 1
            }
          }
        ]
      });
    });
})(jQuery);


/* const API_KEY = 'api_key=d645245eff2b1f60d18bc1ccf08032d2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const theatreMovies = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

function getTheatreMovies(theatreMovies) {
    fetch(theatreMovies)
    .then((response) => response.json())
    .then((data) => {})
    console.log(data.results);
}
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
*/