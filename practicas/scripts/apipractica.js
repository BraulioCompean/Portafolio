const modal = document.getElementById("movie-modal-container");
const buttonCloseModal = document.getElementById("closeModalButton");
const moviesContainer = document.getElementById("container-movies");

const defaultResults = moviesContainer.innerHTML;
const URL_SEARCH = "http://www.omdbapi.com/?apikey=1adf0340&s=";
function openModal(idMovie) {
    loadModalInfo(idMovie);
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function handleInputSearch(event) {
    const name = event.target.value.trim();
    if (name) {
        searchMovies(name);
    } else {
        moviesContainer.innerHTML = defaultResults;
    }
}

function searchMovies(movieName) {
    fetch(URL_SEARCH + movieName)
        .then((response) => response.json())
        .then((data) => {
            moviesContainer.innerHTML = " ";
            data.Search.forEach((element) => {
                if (element.Type == "movie") {
                    const movieCard = document.createElement("div");
                    movieCard.className = "movie-card";
                    movieCard.addEventListener("click", (event) => {
                        openModal(event.currentTarget.id);
                    });
                    const imageMovieCard = document.createElement("img");

                    imageMovieCard.className = "image-poster";
                    if (element.Poster != "N/A") {
                        imageMovieCard.setAttribute("src", element.Poster);
                    } else {
                        imageMovieCard.setAttribute(
                            "src",
                            "/practicas/assets/noposter.png"
                        );
                    }

                    movieCard.appendChild(imageMovieCard);

                    const movieInfo = document.createElement("div");
                    movieInfo.className = "movie-info";
                    const movieTitle = document.createElement("h1");
                    movieTitle.innerText = element.Title;
                    const movieYear = document.createElement("h1");
                    movieYear.innerText = element.Year;

                    movieInfo.appendChild(movieTitle);
                    movieInfo.appendChild(movieYear);
                    movieCard.appendChild(movieInfo);
                    movieCard.setAttribute("id", element.imdbID);
                    moviesContainer.appendChild(movieCard);
                }
            });
        });
}

function loadModalInfo(idMovie) {
    fetch(`http://www.omdbapi.com/?i=${idMovie}&apikey=1adf0340`)
        .then((response) => response.json())
        .then((movieData) => {
            modal.innerHTML = "";
            const modalContainer = document.createElement("div");
            modalContainer.classList.add("modal-content");

            const imagePoster = document.createElement("img");

            if (movieData.Poster != "N/A") {
                imagePoster.setAttribute("src", movieData.Poster);
            } else {
                imagePoster.setAttribute(
                    "src",
                    "/practicas/assets/noposter.png"
                );
            }

            imagePoster.classList.add("image-poster-modal");
            modalContainer.appendChild(imagePoster);

            const movieInfo = document.createElement("div");
            movieInfo.classList.add("movie-info-modal");

            const title = document.createElement("h1");
            title.textContent = `${movieData.Title} ${movieData.Year}`;
            movieInfo.appendChild(title);

            const duration = document.createElement("h2");
            duration.textContent = `Duracion : ${movieData.Runtime}`;
            movieInfo.appendChild(duration);

            const categoriesContainer = document.createElement("div");
            categoriesContainer.classList.add("categories-movie");

            const categories = movieData.Genre.split(", ");
            categories.forEach((category) => {
                const categoryDiv = document.createElement("div");
                categoryDiv.classList.add("category-container");

                const categoryTitle = document.createElement("h4");
                categoryTitle.textContent = category;
                categoryDiv.appendChild(categoryTitle);

                categoriesContainer.appendChild(categoryDiv);
            });
            movieInfo.appendChild(categoriesContainer);
            const description = document.createElement("p");
            description.textContent = movieData.Plot;
            movieInfo.appendChild(description);

            const ratingsContainer = document.createElement("div");
            ratingsContainer.classList.add("movie-ratings-modal-container");

            movieData.Ratings.forEach((rating) => {
                if (rating.Source == "Rotten Tomatoes") {
                    const ratingDiv = document.createElement("div");
                    ratingDiv.classList.add("rating-movie");

                    const ratingImg = document.createElement("img");
                    ratingImg.setAttribute(
                        "src",
                        "/practicas/assets/Rotten_Tomatoes.svg"
                    );
                    ratingDiv.appendChild(ratingImg);

                    const ratingText = document.createElement("h3");
                    ratingText.textContent = rating.Value;
                    ratingDiv.appendChild(ratingText);

                    ratingsContainer.appendChild(ratingDiv);
                }
                if (rating.Source == "Metacritic") {
                    const ratingDiv = document.createElement("div");
                    ratingDiv.classList.add("rating-movie");

                    const ratingImg = document.createElement("img");
                    ratingImg.setAttribute(
                        "src",
                        "/practicas/assets/Metacritic_logo.svg"
                    );
                    ratingDiv.appendChild(ratingImg);
                    const ratingText = document.createElement("h3");
                    ratingText.textContent = rating.Value;
                    ratingDiv.appendChild(ratingText);

                    ratingsContainer.appendChild(ratingDiv);
                }
            });
            movieInfo.appendChild(ratingsContainer);
            modalContainer.appendChild(movieInfo);

            const closeButton = document.createElement("button");
            closeButton.classList.add("close-modal-button");
            closeButton.setAttribute("id", "closeModalButton");
            closeButton.setAttribute("onclick", "closeModal()");
            const closeModalImgButton = document.createElement("img");
            closeModalImgButton.setAttribute(
                "src",
                "/practicas/assets/square-letter-x.svg"
            );

            closeButton.appendChild(closeModalImgButton);
            modalContainer.appendChild(closeButton);
            modal.appendChild(modalContainer);
        });
}
