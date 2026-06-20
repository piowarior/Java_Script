/**
 * ========================================================
 * Expense Tracker App — main.js
 * ========================================================
 * Tulis seluruh kode JavaScript kamu di sini.
 */

// TODO [Basic] Buat variabel array untuk menyimpan semua data transaksi, contoh: let transactions = []
// TODO [Basic] Buat fungsi untuk menghasilkan ID unik secara otomatis, contoh: gunakan +new Date()

let transactions = [];
let editingId = null;

const STORAGE_KEY = "expense_tracker_transactions";

function generateId() {
    return +new Date();
}

/**
 * ========================================================
 * Kriteria 1: Memanipulasi DOM untuk Form dan Daftar Transaksi
 * ========================================================
 */
// TODO [Basic] Ambil elemen kontainer incomeList dan expenseList dari DOM

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");

const transactionForm =
document.getElementById("transactionForm");

const titleInput =
document.getElementById("transactionFormTitleInput");

const amountInput =
document.getElementById("transactionFormAmountInput");

const dateInput =
document.getElementById("transactionFormDateInput");

const typeSelect =
document.getElementById("transactionFormTypeSelect");

const searchInput =
document.getElementById(
"searchTransactionFormTitleInput"
);

const searchForm =
document.getElementById(
"searchTransactionForm"
);

/**
 * TODO [Basic]:
 * Buat fungsi untuk menampilkan (render) semua transaksi ke layar:
 *  - Kosongkan kontainer terlebih dahulu sebelum mengisi ulang
 *  - Gunakan perulangan, buat setiap elemen kartu dengan document.createElement()
 *  - Pastikan setiap elemen memiliki atribut data-testid yang sesuai (lihat panduan di rubrik)
 *  - Masukkan kartu ke kontainer yang tepat: income → incomeList, expense → expenseList
 */

function renderTransactions(data = transactions) {

    incomeList.innerHTML = "";
    expenseList.innerHTML = "";

    data.forEach(transaction => {

        const card = document.createElement("div");
        card.setAttribute("data-testid", "transactionItem");

        const title = document.createElement("h3");
        title.setAttribute(
            "data-testid",
            "transactionItemTitle"
        );
        title.textContent = transaction.title;

        const amount = document.createElement("p");
        amount.setAttribute(
            "data-testid",
            "transactionItemAmount"
        );
        amount.textContent =
            `Nominal: Rp${transaction.amount}`;

        const date = document.createElement("p");
        date.setAttribute(
            "data-testid",
            "transactionItemDate"
        );
        date.textContent =
            `Tanggal: ${transaction.date}`;

        const type = document.createElement("p");
        type.setAttribute(
            "data-testid",
            "transactionItemType"
        );

        type.textContent =
            transaction.type === "income"
                ? "Pemasukan"
                : "Pengeluaran";

        const buttonContainer =
            document.createElement("div");
            

        const editTypeButton =
            document.createElement("button");

        editTypeButton.type = "button";

        editTypeButton.setAttribute(
            "data-testid",
            "transactionItemEditTypeButton"
        );

        editTypeButton.textContent =
            "Ubah Tipe";

        editTypeButton.addEventListener(
            "click",
            () => {

                transaction.type =
                    transaction.type === "income"
                        ? "expense"
                        : "income";

                document.dispatchEvent(
                    new Event(
                        "transaction:updated"
                    )
                );
            }
        );

        const editButton =
            document.createElement("button");

        editButton.type = "button";

        editButton.textContent =
            "Edit";

        editButton.addEventListener(
            "click",
            () => {

                editingId =
                    transaction.id;

                titleInput.value =
                    transaction.title;

                amountInput.value =
                    transaction.amount;

                dateInput.value =
                    transaction.date;

                typeSelect.value =
                    transaction.type;

            }
        );

        const deleteButton =
            document.createElement("button");

        deleteButton.type = "button";

        deleteButton.setAttribute(
            "data-testid",
            "transactionItemDeleteButton"
        );

        deleteButton.textContent =
            "Hapus";

        deleteButton.addEventListener(
            "click",
            () => {

                transactions =
                    transactions.filter(
                        item =>
                            item.id !== transaction.id
                    );

                document.dispatchEvent(
                    new Event(
                        "transaction:updated"
                    )
                );
            }
        );

        buttonContainer.append(
            editButton,
            editTypeButton,
            deleteButton
        );

        card.append(
            title,
            amount,
            date,
            type,
            buttonContainer
        );

        if (
            transaction.type === "income"
        ) {
            incomeList.appendChild(card);
        } else {
            expenseList.appendChild(card);
        }

    });

}


// TODO [Basic] Tambahkan event listener 'submit' pada form, panggil e.preventDefault() di dalamnya
// TODO [Basic] Di dalam handler submit, ambil nilai input lalu tambahkan sebagai objek transaksi baru ke array

transactionForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        if (
            titleInput.value.trim() === ""
        ) {
            alert(
                "Judul tidak boleh kosong"
            );
            return;
        }

        if (
            Number(amountInput.value) < 1
        ) {
            alert(
                "Nominal minimal 1 rupiah"
            );
            return;
        }

        if (editingId !== null) {

            const index =
                transactions.findIndex(
                    item =>
                        item.id === editingId
                );

            transactions[index] = {
                id: editingId,
                title: titleInput.value,
                amount: Number(
                    amountInput.value
                ),
                date: dateInput.value,
                type: typeSelect.value
            };

            editingId = null;

        } else {

            const transaction = {
                id: generateId(),
                title: titleInput.value,
                amount: Number(
                    amountInput.value
                ),
                date: dateInput.value,
                type: typeSelect.value
            };

            transactions.push(
                transaction
            );
        }

        transactionForm.reset();
        editingId = null;

        document.dispatchEvent(
            new Event(
                "transaction:updated"
            )
        );

    }
);

/**
 * TODO [Skilled]:
 * Tambahkan validasi input sebelum menyimpan data:
 *  - Tampilkan alert() dan hentikan proses jika judul kosong
 *  - Tampilkan alert() dan hentikan proses jika nominal kurang dari 1
 */

/**
 * TODO [Advanced]:
 * Setiap kali data transaksi berubah, perbarui Panel Dasbor:
 *  - Hitung total pemasukan, total pengeluaran, dan saldo (pemasukan - pengeluaran)
 *  - Tampilkan hasilnya ke elemen yang sesuai di HTML
 */

const balanceElement =
document.querySelector(
    ".tracker-summary__balance-amount"
);

const incomeElement =
document.querySelector(
    ".tracker-summary__stat-amount--income"
);

const expenseElement =
document.querySelector(
    ".tracker-summary__stat-amount--expense"
);

function updateSummary() {

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(
        transaction => {

            if (
                transaction.type === "income"
            ) {
                totalIncome +=
                    transaction.amount;
            } else {
                totalExpense +=
                    transaction.amount;
            }

        }
    );

    const balance =
        totalIncome - totalExpense;

    balanceElement.textContent =
        `Rp ${balance}`;

    incomeElement.textContent =
        `Rp ${totalIncome}`;

    expenseElement.textContent =
        `Rp ${totalExpense}`;
}

/**
 * ========================================================
 * Kriteria 2: Mengelola Penyimpanan Data (Web Storage API)
 * ========================================================
 */
/**
 * TODO [Basic]:
 * Data transaksi disimpan ke localStorage menggunakan JSON.stringify(), dan dimuat kembali saat halaman dibuka menggunakan JSON.parse().
 *  - Tombol "Hapus" berfungsi: transaksi yang dihapus langsung hilang dari layar dan dari localStorage.
 */

function saveTransactions() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
            transactions
        )
    );

}

function loadTransactions() {

    const data =
        localStorage.getItem(
            STORAGE_KEY
        );

    if (data) {

        transactions =
            JSON.parse(data);

    }

}

/**
 * TODO [Skilled]:
 * Tombol "Edit" berfungsi: saat ditekan, formulir (#transactionForm) secara otomatis terisi dengan data transaksi yang dipilih.
 *  - Pengguna dapat mengubah data lalu menyimpan perubahan.
 *  - Formulir kembali ke mode "Tambah" setelah pembaruan selesai.
 */

searchInput.addEventListener(
    "input",
    function () {

        const keyword =
            this.value
                .toLowerCase();

        if (
            keyword.trim() === ""
        ) {

            renderTransactions();

            return;

        }

        const filtered =
            transactions.filter(
                transaction =>
                    transaction.title
                        .toLowerCase()
                        .includes(
                            keyword
                        )
            );

        renderTransactions(
            filtered
        );

    }
);

searchForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

    }
);

/**
 * TODO [Advanced]:
 * Gunakan Custom Event sebagai penghubung antara perubahan data dan pembaruan tampilan:
 *  - Kirim sinyal dengan document.dispatchEvent(new Event('transaction:updated')) setiap kali data berubah
 *  - Pasang satu listener untuk event tersebut yang memanggil fungsi render dan update dasbor
 */

document.addEventListener(
    "transaction:updated",
    () => {

        saveTransactions();

        renderTransactions();

        updateSummary();

    }
);

loadTransactions();

document.dispatchEvent(
    new Event(
        "transaction:updated"
    )
);


/**
 * ========================================================
 * Kriteria 3: Fitur Interaktif (Pindah Kategori dan Pencarian)
 * ========================================================
 */
/**
 * TODO [Basic]:
 * Tambahkan tombol "Ubah Tipe" pada setiap kartu transaksi:
 *  - Saat diklik, ubah tipe transaksi: 'income' → 'expense' atau 'expense' → 'income'
 *  - Simpan perubahan ke localStorage dan perbarui tampilan
 */

/**
 * TODO [Skilled]:
 * Tambahkan event listener 'input' pada kolom pencarian:
 *  - Filter array transaksi berdasarkan kecocokan kata kunci dengan judul transaksi
 *  - Tampilkan hanya transaksi yang judulnya mengandung kata kunci tersebut
 */

/**
 * TODO [Advanced]:
 * Pastikan fitur pencarian berjalan dengan baik di semua kondisi:
 *  - Saat kolom pencarian dikosongkan, tampilkan kembali seluruh daftar transaksi
 */