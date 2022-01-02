function kurs_rupiah() {
    const rupiah = 14650;
    let bil2 = document.getElementById("rupiah").value;
    console.log("Satu Dolar : " + rupiah + " rupiah");
    let dolar = bil2 / rupiah;
    console.log("Hasil : " + "$" +dolar);
    //menampilkan kurs dolar ke HTML
    let hasil_kurs = document.getElementById("hasil_kedua");
    hasil_kurs.innerHTML = "Nilai kurs dolar : " +"$"+ dolar;
}