// Fungsi untuk menampilkan nama pengguna di halaman profil
function displayUserProfile() {
       // Contoh nama pengguna dan email yang bisa Anda dapatkan dari sesi atau localStorage
       const userName = localStorage.getItem('userName') || 'Guest';
       const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
       
       // Menampilkan nama dan email pengguna di halaman
       document.querySelector('.profile-container h2').innerText = `Welcome, ${userName}`;
       document.querySelector('.profile-container p').innerText = `Email: ${userEmail}`;
   }
   
   // Fungsi untuk menangani logout
   function handleLogout() {
       // Menghapus data pengguna dari localStorage (jika ada)
       localStorage.removeItem('userName');
       localStorage.removeItem('userEmail');
       
       // Mengarahkan pengguna ke halaman login atau home
       window.location.href = 'HOME.html'; // Anda bisa mengganti ini dengan halaman login atau home
   }
   
   // Menampilkan profil saat halaman dimuat
   document.addEventListener('DOMContentLoaded', displayUserProfile);
   
   // Menangani klik tombol logout
   document.querySelector('.profile-container button').addEventListener('click', handleLogout);
   