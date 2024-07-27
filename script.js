/* Smooth scrolling when clicking an anchor link */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Kopija poruke */

function copyFunction() {
    var copyText = document.getElementById("messageInput");
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
} 



// Priprema poruke za slanje SMS-a

text_poruke = document.getElementById("messageInput");
ime = document.getElementById("ime");
prezime = document.getElementById("prezime");
broj_telefona = document.getElementById("br_telefona");
postanski_broj = document.getElementById("postanski_broj");
grad = document.getElementById("grad");
adresa = document.getElementById("adresa");
h3_kontakt = document.getElementById("h3_kontakt");

function openForm(clicked_id) {
    if(clicked_id == 1){
        text_poruke.value = "Poručujem jednu kutiju proizvoda. Podaci za slanje: " + `${ime.value} | ` + `${prezime.value} | ` + `${broj_telefona.value} | ` + `${postanski_broj.value} | ` + `${grad.value} | ` + `${adresa.value}`;
        h3_kontakt.style.display = "block";
    }
    if(clicked_id == 2){
        text_poruke.value = "Poručujem dve kutije proizvoda. Podaci za slanje: " + `${ime.value} | ` + `${prezime.value} | ` + `${broj_telefona.value} | ` + `${postanski_broj.value} | ` + `${grad.value} | ` + `${adresa.value}`;
        h3_kontakt.style.display = "block";
    }
    if(clicked_id == 3){
        text_poruke.value = "Poručujem tri kutije proizvoda. Podaci za slanje: " + `${ime.value} | ` + `${prezime.value} | ` + `${broj_telefona.value} | ` + `${postanski_broj.value} | ` + `${grad.value} | ` + `${adresa.value}`;
        h3_kontakt.style.display = "block";
    }
    if(clicked_id == 4){
        text_poruke.value = "Poručujem četiri kutije proizvoda. Podaci za slanje: " + `${ime.value} | ` + `${prezime.value} | ` + `${broj_telefona.value} | ` + `${postanski_broj.value} | ` + `${grad.value} | ` + `${adresa.value}`;
        h3_kontakt.style.display = "block";
    }
    if(clicked_id == 5){
        text_poruke.value = "Poručujem pet kutija proizvoda. Podaci za slanje: " + `${ime.value} | ` + `${prezime.value} | ` + `${broj_telefona.value} | ` + `${postanski_broj.value} | ` + `${grad.value} | ` + `${adresa.value}`;
        h3_kontakt.style.display = "block";
    }
    if(clicked_id == 10){
        text_poruke.value = "Poručujem deset kutija proizvoda. Podaci za slanje: " + `${ime.value} | ` + `${prezime.value} | ` + `${broj_telefona.value} | ` + `${postanski_broj.value} | ` + `${grad.value} | ` + `${adresa.value}`;
        h3_kontakt.style.display = "block";
    }
};

/* funkcija koja nas "vodi" do dela za kupovinu */
function kupovina_skrol() {
    location.href='#kupovina';
};

/* funkcija koja nas "vodi" do dugmete KOPIRAJ PORUKU */
function copyBtn_skrol() {
    location.href='#10'; // #10 je btn za porucivanje 10 kutija
};

/* funkcija koja poziva f-ju copyBtn_skrol() i f-ju openForm()*/
function two_fnc(id) {
    openForm(id);
    copyBtn_skrol();
}