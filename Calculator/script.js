

function calculate(hesab) {
    let ekran = document.getElementById("ekran");
    ekran.value += hesab;

}
function sil(){
    let ekran = document.getElementById('ekran');
    ekran.value = ekran.value.substr(0, ekran.value.length - 1);

}

function Hesabla(){
    let ekran = document.getElementById('ekran');
    ekran.value = eval(ekran.value);
}
function Sifirla(){
    let ekran = document.getElementById('ekran');
    ekran.value = "";
}
