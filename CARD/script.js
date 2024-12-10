// Menangani tombol untuk menutup modal
const closeButton = document.querySelector('.close-btn');
const cartModal = document.querySelector('.cart-modal');

// Fungsi untuk menutup modal
if (closeButton && cartModal) {
    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
}

// Menangani tombol untuk menambah dan mengurangi jumlah produk
const increaseButtons = document.querySelectorAll('.increase-btn');
const decreaseButtons = document.querySelectorAll('.decrease-btn');
const quantityValues = document.querySelectorAll('.quantity-value');
const subtotalAmount = document.querySelector('.subtotal-amount');

// Fungsi untuk memperbarui subtotal
function updateSubtotal() {
    let total = 0;

    // Mengambil harga dari setiap item dan jumlah
    const items = document.querySelectorAll('.cart-item');
    items.forEach((item, index) => {
        const priceElement = item.querySelector('.item-price');
        const quantityElement = quantityValues[index];

        if (priceElement && quantityElement) {
            const price = parseInt(priceElement.textContent.replace(/\./g, ''));
            const quantity = parseInt(quantityElement.textContent);

            if (!isNaN(price) && !isNaN(quantity)) {
                total += price * quantity;
            }
        }
    });

    // Memperbarui subtotal jika elemen ditemukan
    if (subtotalAmount) {
        subtotalAmount.textContent = total.toLocaleString();
    }

    // Update total pembayaran
    calculateTotal();
}

// Event listener untuk tombol tambah jumlah
if (increaseButtons && decreaseButtons) {
    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantity = quantityValues[index];
            if (quantity) {
                let currentQuantity = parseInt(quantity.textContent);
                if (!isNaN(currentQuantity)) {
                    quantity.textContent = currentQuantity + 1;
                    updateSubtotal(); // Memperbarui subtotal setelah perubahan jumlah
                }
            }
        });
    });

    // Event listener untuk tombol kurangi jumlah
    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantity = quantityValues[index];
            if (quantity) {
                let currentQuantity = parseInt(quantity.textContent);
                if (!isNaN(currentQuantity) && currentQuantity > 1) { // Mencegah jumlah menjadi kurang dari 1
                    quantity.textContent = currentQuantity - 1;
                    updateSubtotal(); // Memperbarui subtotal setelah perubahan jumlah
                }
            }
        });
    });
}

// Menangani klik pada metode pembayaran
const paymentButtons = document.querySelectorAll('.payment-methods button');
if (paymentButtons) {
    paymentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Menghapus kelas 'active' dari semua tombol
            paymentButtons.forEach(btn => btn.classList.remove('active'));
            // Menambahkan kelas 'active' pada tombol yang dipilih
            event.target.classList.add('active');
        });
    });
}

// Fungsi untuk menghitung total pembayaran
function calculateTotal() {
    const productPrices = document.querySelectorAll('.product-quantity');
    let productTotal = 0;

    // Loop untuk menghitung total harga produk
    productPrices.forEach(priceElement => {
        const priceText = priceElement.textContent.trim(); // Ambil teks harga
        const price = parseInt(priceText.replace('Rp. ', '').replace(/\./g, '')); // Hilangkan "Rp." dan titik
        if (!isNaN(price)) { // Validasi agar hanya angka yang dihitung
            productTotal += price;
        }
    });

    // Definisikan biaya lain-lain
    const shippingTotal = 0; // Pengiriman gratis
    const handlingFee = 0;   // Biaya penanganan gratis
    const totalPayment = productTotal + shippingTotal + handlingFee;

    // Update tampilan subtotal dan total
    const subtotalElement = document.querySelector('.payment-summary p:nth-child(1) span:last-child');
    const shippingElement = document.querySelector('.payment-summary p:nth-child(2) span:last-child');
    const handlingElement = document.querySelector('.payment-summary p:nth-child(3) span:last-child');
    const totalElement = document.querySelector('.payment-summary .total span:last-child');

    if (subtotalElement) subtotalElement.textContent = `Rp. ${productTotal.toLocaleString()}`;
    if (shippingElement) shippingElement.textContent = `Rp. ${shippingTotal.toLocaleString()}`;
    if (handlingElement) handlingElement.textContent = `Rp. ${handlingFee.toLocaleString()}`;
    if (totalElement) totalElement.textContent = `Rp. ${totalPayment.toLocaleString()}`;
}

// Event listener untuk memanggil fungsi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateSubtotal(); // Hitung subtotal saat halaman pertama kali dimuat
});

// Menangani klik pada tombol checkout
const checkoutButton = document.querySelector('.checkout-button');
if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        alert('Pembayaran Berhasil!');
    });
}

// Menampilkan modal keranjang ketika halaman dimuat
window.addEventListener('load', () => {
    if (cartModal) {
        cartModal.style.display = 'block'; // Menampilkan modal keranjang pada saat halaman dimuat
    }
});
