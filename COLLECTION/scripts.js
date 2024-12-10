// Menambahkan produk ke keranjang
let cart = [];

// Fungsi untuk menambah produk ke keranjang
function addToCart(productName, productPrice) {
    // Menambahkan produk ke dalam array keranjang
    cart.push({ name: productName, price: productPrice });

    // Memperbarui ikon keranjang dengan jumlah produk yang ada di dalamnya
    updateCartIcon();
}

// Fungsi untuk memperbarui jumlah produk di ikon keranjang
function updateCartIcon() {
    const cartIcon = document.querySelector('.icons a[href="cart.html"]');
    const cartCount = cart.length;

    // Jika ada produk di keranjang, tampilkan jumlah produk di ikon
    if (cartCount > 0) {
        const cartCountElement = document.createElement('span');
        cartCountElement.classList.add('cart-count');
        cartCountElement.textContent = cartCount;
        cartIcon.appendChild(cartCountElement);
    } else {
        // Jika keranjang kosong, pastikan jumlah produk tidak terlihat
        const existingCount = cartIcon.querySelector('.cart-count');
        if (existingCount) {
            cartIcon.removeChild(existingCount);
        }
    }
}

// Menambahkan event listener untuk setiap tombol produk
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    const productName = item.querySelector('p').textContent;
    const productPrice = parseFloat(item.querySelectorAll('p')[1].textContent.replace('$', '').replace(',', ''));

    // Menambahkan event listener pada setiap gambar produk
    item.addEventListener('click', () => {
        addToCart(productName, productPrice);
        alert(`${productName} telah ditambahkan ke keranjang`);
    });
});

// Menampilkan jumlah produk yang ada di keranjang saat halaman dimuat
window.addEventListener('load', updateCartIcon);
