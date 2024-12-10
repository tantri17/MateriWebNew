// Fungsi untuk toggle tema gelap/terang
function toggleTheme() {
       const body = document.body;
       body.classList.toggle('dark-theme');
   }
   
   // Mengatur aksi saat klik pada menu navigasi
   const menuToggle = document.querySelector('.navbar .toggle-menu');
   const navLinks = document.querySelectorAll('.navbar nav a');
   
   menuToggle.addEventListener('click', () => {
       const navbar = document.querySelector('.navbar');
       navbar.classList.toggle('active');
   });
   
   // Menutup menu navigasi saat tautan diklik
   navLinks.forEach(link => {
       link.addEventListener('click', () => {
           const navbar = document.querySelector('.navbar');
           navbar.classList.remove('active');
       });
   });
   
   // Fungsi untuk mengganti gambar logo di header saat jendela diubah ukurannya
   function resizeLogo() {
       const logoImg = document.querySelector('.logo-img');
       const width = window.innerWidth;
       
       if (width < 600) {
           logoImg.src = "../asset/logo-small.jpg"; // Ganti dengan gambar logo kecil
       } else {
           logoImg.src = "../asset/logo1.jpg"; // Logo normal
       }
   }
   
   // Menambahkan event listener untuk resize window
   window.addEventListener('resize', resizeLogo);
   
   // Panggil fungsi resizeLogo saat pertama kali dimuat
   resizeLogo();
   