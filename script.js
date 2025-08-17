document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const departure = document.getElementById("departure").value;

  // 🔹 Simulation (mock) - en vrai tu passeras par ton backend
  const fakeResponse = {
    airline: "Thai Airways",
    price: 620,
    currency: "EUR",
    departure_at: departure + "T13:40:00",
    duration: 720,
    link: "https://www.aviasales.com/search/"
  };

  document.getElementById("results").innerHTML = `
    <h2>Résultat :</h2>
    <p>Compagnie : ${fakeResponse.airline}</p>
    <p>Prix : ${fakeResponse.price} ${fakeResponse.currency}</p>
    <p>Départ : ${fakeResponse.departure_at}</p>
    <p>Durée : ${fakeResponse.duration} minutes</p>
    <a href="${fakeResponse.link}" target="_blank">Réserver</a>
  `;
});
