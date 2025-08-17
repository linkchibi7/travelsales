document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const query = document.getElementById("query").value;

  // 🔹 Simulation (mock) - plus tard on passera par le backend + API
  const fakeResponse = [
    {
      airline: "Thai Airways",
      price: 620,
      currency: "EUR",
      departure_at: "2025-09-15T13:40:00",
      duration: 720,
      link: "https://www.aviasales.com/search/"
    },
    {
      airline: "Air France",
      price: 590,
      currency: "EUR",
      departure_at: "2025-09-15T14:30:00",
      duration: 710,
      link: "https://www.aviasales.com/search/"
    }
  ];

  let html = `<h2>Résultats pour "${query}" :</h2>`;
  fakeResponse.forEach(f => {
    html += `
      <p>
        ✈️ ${f.airline} - ${f.price} ${f.currency}<br>
        Départ : ${f.departure_at}<br>
        Durée : ${f.duration} minutes<br>
        <a href="${f.link}" target="_blank">Réserver</a>
      </p>
      <hr>
    `;
  });

  document.getElementById("results").innerHTML = html;
});
