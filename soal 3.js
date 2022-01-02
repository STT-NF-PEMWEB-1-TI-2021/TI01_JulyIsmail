function hitung_parkir(){
    let jam_Masuk = document.getElementById("Masuk").value;
    let jam_Keluar = document.getElementById("Keluar").value;
    let selisih = jam_Keluar - jam_Masuk;
    let biaya =0;
    const TARIF_AWAL = 3000;
    const TARIF_PERJAM = 1000;// perjam berikutnya
    if(selisih <= 2){ // yang kurang dari atau sama dengan 2
        biaya = TARIF_AWAL;
    }else{
        let tambahan_jam = selisih - 2;
        biaya = TARIF_AWAL + (TARIF_PERJAM * tambahan_jam);
    }
    let area_biaya = document.getElementById("biaya");
    area_biaya.innerHTML = "BIAYA PARKIR " + biaya;
}