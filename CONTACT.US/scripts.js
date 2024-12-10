// Menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function (event) {
       event.preventDefault();  // Mencegah formulir dikirimkan secara default
   
       // Mengambil data dari formulir
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;
   
       // Validasi data formulir
       if (name === '' || email === '' || message === '') {
           alert('All fields are required!');
           return;
       }
   
       // Kirim data (misalnya dengan fetch atau AJAX)
       // Di sini hanya untuk demonstrasi, Anda bisa menambahkan logika pengiriman data ke server
       console.log('Form submitted:');
       console.log('Name:', name);
       console.log('Email:', email);
       console.log('Message:', message);
   
       // Tampilkan pesan sukses
       alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
   
       // Reset formulir setelah pengiriman
       document.getElementById('contactForm').reset();
   });
   