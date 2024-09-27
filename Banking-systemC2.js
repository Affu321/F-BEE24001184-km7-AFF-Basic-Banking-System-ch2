class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof amount !== "number" || isNaN(amount)) {
                    reject("Jumlah deposit harus berupa angka yang valid.");
                } else if (amount <= 0) {
                    reject("Jumlah deposit harus lebih besar dari 0.");
                } else {
                    this.balance += amount;
                    resolve(`Deposit berhasil! Saldo saat ini: Rp ${this.balance}`);
                }
            }, 2000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof amount !== "number" || isNaN(amount)) {
                    reject("Jumlah penarikan harus berupa angka yang valid.");
                } else if (amount <= 0) {
                    reject("Jumlah penarikan harus lebih besar dari 0.");
                } else if (amount > this.balance) {
                    reject("Saldo tidak mencukupi.");
                } else {
                    this.balance -= amount;
                    resolve(`Penarikan berhasil! Saldo saat ini: Rp ${this.balance}`);
                }
            }, 2000);
        });
    }
}

async function menu() {
    const mBCA = new Bank(0);
    let pilih = '';

    while (pilih !== '3') {
        pilih = window.prompt(
            "Menu Transaksi:\n" +
            "1. deposit\n" +
            "2. withdraw\n" +
            "3. keluar\n"
        );
        
        if (pilih === '1') {
            const amount = parseFloat(window.prompt("Masukkan jumlah deposit:"));
            try {
                const message = await mBCA.deposit(amount);
                alert(message);
            } catch (error) {
                alert("Error pada deposit: " + error);
            }
        } else if (pilih === '2') {
            const amount = parseFloat(window.prompt("Masukkan jumlah withdraw:"));
            try {
                const message = await mBCA.withdraw(amount);
                alert(message);
            } catch (error) {
                alert("Error pada withdraw: " + error);
            }
        } else if (pilih === '3') {
            alert("Terima kasih");
        } else {
            alert("Pilihan Anda tidak valid");
        }
    }
}

menu();
