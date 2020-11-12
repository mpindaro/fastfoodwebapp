let loggedCliente = false;
let loggedRistorante = false;

function checkLogged() {
    loggedCliente = sessionStorage.getItem('clienteLoggato') != null
    if (loggedCliente) {
        document.getElementById('nav').innerHTML += "<li><a href=\"areaPrivataClienti.html\">Area Privata</a></li>"
        document.getElementById('nav-mobile').innerHTML += "<li><a href=\"areaPrivataClienti.html\">Area Privata</a></li>"
        document.getElementById('nav').innerHTML += "<li><a onclick='logOut()' >Log out</a></li>"
        document.getElementById('nav-mobile').innerHTML += "<li><a onclick='logOut()' >Log out</a></li>";
    } else {
        loggedRistorante = sessionStorage.getItem('ristoranteLoggato') != null
        if (loggedRistorante) {
            document.getElementById('nav').innerHTML += "<li><a href=\"areaPrivataRistoratori.html\">Area Privata</a></li>"
            document.getElementById('nav-mobile').innerHTML += "<li><a href=\"areaPrivataRistoratori.html\">Area Privata</a></li>"
            document.getElementById('nav').innerHTML += "<li><a onclick='logOut()' >Log out</a></li>"
            document.getElementById('nav-mobile').innerHTML += "<li><a onclick='logOut()' >Log out</a></li>";
        } else {
            document.getElementById('nav').innerHTML += "<li><a class=\"dropdown-trigger\" href=\"#!\" data-target=\"dropdownLogin\">Login<i class=\"material-icons right\">arrow_drop_down</i></a></li>"
            document.getElementById('nav-mobile').innerHTML += "<li><a class=\"dropdown-trigger\" href=\"#!\" data-target=\"dropdownLoginMobile\">Login<i class=\"material-icons \">arrow_drop_down</i></a></li>"
            $(".dropdown-trigger").dropdown();
        }
    }
}



function logOut() {
    sessionStorage.clear();
    localStorage.removeItem('carrello')
    location.href = 'index.html';
}

function aggiungereAElementoInLocalStorage(oggetto, nomeOggettoLocalStorage) {

    let oggetti = JSON.parse(localStorage.getItem(nomeOggettoLocalStorage));
    console.log("Oggetto: ", oggetto+ "\n NomeOggetti: ", nomeOggettoLocalStorage, "\n Oggetti: ", oggetti)
    oggetti.push(oggetto);
    localStorage.setItem(nomeOggettoLocalStorage, JSON.stringify(oggetti));


}

