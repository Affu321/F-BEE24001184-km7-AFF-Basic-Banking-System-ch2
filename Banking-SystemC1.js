let saldo = 0;
function tambahSaldo(nominal){
   saldo += nominal;
   return saldo;
}
function kurangSaldo(nominal){
    saldo -= nominal;
    return saldo;
}

function bank(){
    let milih = true;
    while(milih){
    let bank = prompt ("Anda ingin tambah/kurang saldo/keluar");

    if (bank === `tambah`){
        let nominal = parseInt(prompt("masukkan nominal yang ingin anda tambahkan"));
        saldo = tambahSaldo(nominal)
        alert("saldo anda sekarang =" + saldo)
    }else if (bank === `kurang`){
        let nominal = parseInt(prompt("masukkan nominal saldo yang ingin anda kurangi"));
        saldo = kurangSaldo(nominal)
        alert("saldo anda sekarang =" + saldo)
    }else if (bank === `keluar`){
        alert("saldo anda adalah " + saldo)
        milih = false;
    }else{
        alert("masukkan anda tidak valid");
    }
}
}
bank();