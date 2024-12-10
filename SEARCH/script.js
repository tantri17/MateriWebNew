document.addEventListener("DOMContentLoaded", function () {
       // Mendapatkan elemen-elemen yang dibutuhkan
       const searchInput = document.querySelector('.search-container input');
       const searchButton = document.querySelector('.search-container button');
       const resultsContainer = document.querySelector('.search-results');
       const noResultsMessage = resultsContainer.querySelector('p');
   
       // Daftar produk untuk pencarian (ini hanya contoh, Anda bisa menggantinya dengan data yang lebih dinamis)
       const products = [
           { name: "Astrophile Series", price: "$70.00" },
           { name: "CLLSX Series", price: "$80.00" },
           { name: "WAF Series", price: "$75.00" },
           { name: "Pashmina Series", price: "$90.00" },
           { name: "Bergo Series", price: "$90.00" },
           { name: "Paris Series", price: "$90.00" }
       ];
   
       // Fungsi untuk menampilkan hasil pencarian
       function displayResults(results) {
           // Hapus hasil pencarian sebelumnya
           resultsContainer.innerHTML = '<h2>Results:</h2>';
   
           if (results.length === 0) {
               resultsContainer.appendChild(noResultsMessage);
           } else {
               const resultsList = document.createElement('ul');
               results.forEach(product => {
                   const listItem = document.createElement('li');
                   listItem.textContent = `${product.name} - ${product.price}`;
                   resultsList.appendChild(listItem);
               });
               resultsContainer.appendChild(resultsList);
           }
       }
   
       // Event listener untuk tombol pencarian
       searchButton.addEventListener('click', function () {
           const query = searchInput.value.trim().toLowerCase();
   
           // Jika tidak ada input pencarian
           if (query === "") {
               noResultsMessage.textContent = "Please enter a search term.";
               resultsContainer.innerHTML = '<h2>Results:</h2>';
               resultsContainer.appendChild(noResultsMessage);
               return;
           }
   
           // Menyaring produk yang sesuai dengan kata kunci pencarian
           const filteredResults = products.filter(product => 
               product.name.toLowerCase().includes(query)
           );
   
           // Tampilkan hasil pencarian
           displayResults(filteredResults);
       });
   
       // Optional: Menambahkan fitur enter untuk pencarian
       searchInput.addEventListener('keydown', function (e) {
           if (e.key === 'Enter') {
               searchButton.click();
           }
       });
   });
   