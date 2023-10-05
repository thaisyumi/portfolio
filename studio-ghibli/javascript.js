function togglePopup(movieId) {
    var popup = document.getElementById(movieId);

    var popups = document.getElementsByClassName("sinopse");

    for (var i = 0; i < popups.length; i++) {
        if (popups[i].id !== movieId && popups[i].classList.contains("show")) {
            popups[i].classList.remove("show");
        }
    }

    if (popup) {
        popup.classList.toggle("show");
    }
}
