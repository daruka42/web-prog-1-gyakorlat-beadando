document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('table tbody');
    const cities = ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza'];
    const countries = ['Magyarország', 'Németország', 'Ausztria', 'Szlovákia', 'Románia', 'Horvátország'];
    
    for (let i = 1; i <= 25; i++) {
        const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = i;
        row.appendChild(idCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = `Felhasználó ${i}`;
        row.appendChild(nameCell);
        
        const emailCell = document.createElement('td');
        emailCell.textContent = `felhasznalo${i}@example.com`;
        row.appendChild(emailCell);
        
        const phoneCell = document.createElement('td');
        phoneCell.textContent = `+36 ${Math.floor(Math.random() * 90) + 10} ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 9000) + 1000}`;
        row.appendChild(phoneCell);
        
        const cityCell = document.createElement('td');
        cityCell.textContent = cities[Math.floor(Math.random() * cities.length)];
        row.appendChild(cityCell);
        
        const countryCell = document.createElement('td');
        countryCell.textContent = countries[Math.floor(Math.random() * countries.length)];
        row.appendChild(countryCell);
        
        const ageCell = document.createElement('td');
        ageCell.textContent = Math.floor(Math.random() * 50) + 18;
        row.appendChild(ageCell);
        
        tableBody.appendChild(row);
    }
});