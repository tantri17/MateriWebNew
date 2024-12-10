// Menambahkan event listener untuk semua gambar di galeri
document.addEventListener("DOMContentLoaded", function () {
       // Ambil semua item gallery
       const galleryItems = document.querySelectorAll('.gallery-item');
   
       // Menambahkan efek hover untuk gambar
       galleryItems.forEach(item => {
           item.addEventListener('mouseenter', function () {
               item.querySelector('img').style.transform = 'scale(1.1)'; // Zoom gambar saat hover
           });
           
           item.addEventListener('mouseleave', function () {
               item.querySelector('img').style.transform = 'scale(1)'; // Kembalikan ke ukuran semula saat mouse keluar
           });
       });
   
       // Menangani klik pada tombol "SALE" untuk menambahkan item ke keranjang
       galleryItems.forEach(item => {
           item.addEventListener('click', function () {
               // Mendapatkan informasi produk
               const productName = item.querySelector('p').textContent;
               const productPrice = item.querySelectorAll('p')[1].textContent;
               
               // Simulasi penambahan produk ke keranjang
               alert(`Item: ${productName}\nPrice: ${productPrice}\nAdded to Cart!`);
               
               // Anda dapat menambahkan produk ke keranjang di sini (misalnya, menggunakan localStorage atau sessionStorage)
               let cart = JSON.parse(localStorage.getItem('cart')) || [];
               cart.push({ name: productName, price: productPrice });
               localStorage.setItem('cart', JSON.stringify(cart));
           });
       });
   });
   