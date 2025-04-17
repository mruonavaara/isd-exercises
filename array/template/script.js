// 
// Näppäimen painalluksen käsittelevä funktio.
//
function arvo() {
    // tyhjennä vastauselementti edellisistä tuloksista
    document.getElementById("vastaus").innerHTML = "";

    // TODO: toteuta ohjelmalogiikka
    // - lue toistojen määrä käyttäjän syötteestä
    // - tee taulukko noppaluvuille
    // - tee arvonnat ja kirjaa taulukkoon lukumäärät
    // - tulosta taulukon perusteella kunkin noppaluvun frekvenssitiedot
    //      - käytä tulostamiseen lisaaTulosrivi-funktiota
    //

}

//
// Noppaluvun arpova funktio
//
function heita() {
    return Math.floor(Math.random() * 6 + 1);
}

//
// Tulosrivin lisäävä funktio. Rivi lisätään elementtiin, jonka id on vastaus.
// Parametrit:
// - noppaluku
// - luvun frekvenssi eli esiintymistiheys (kpl)
// - luvun suhteellinen frekvenssi (%)
// 
function lisaaTulosrivi(noppaluku, frekvenssi, suhtFrekvenssi) {
    var noppalukuElem = document.createElement("div");
    noppalukuElem.classList.add("noppaluku")
    noppalukuElem.innerHTML = "Noppaluku " + noppaluku + ": " + frekvenssi + " kpl ";

    var palkkiElem = document.createElement("div");
    palkkiElem.classList.add("palkki");
    palkkiElem.innerHTML = suhtFrekvenssi + "%";
    palkkiElem.style.width = suhtFrekvenssi + "%";

    var riviElem = document.createElement("div");
    riviElem.classList.add("frekvenssirivi");
    riviElem.appendChild(noppalukuElem);
    riviElem.appendChild(palkkiElem);

    document.getElementById("vastaus").appendChild(riviElem);
}