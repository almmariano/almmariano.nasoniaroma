// Lista parcial de nasoni
const nasoni = [
  { nome: "Nasone - Piazza Navona", lat: 41.8992, lng: 12.4731 },
  { nome: "Nasone - Via del Corso", lat: 41.9023, lng: 12.4796 },
  { nome: "Nasone - Campo de' Fiori", lat: 41.8959, lng: 12.4724 },
  { nome: "Nasone - Trastevere", lat: 41.8886, lng: 12.4663 },
  { nome: "Nasone - Piazza Venezia", lat: 41.8947, lng: 12.4823 },
  { nome: "Nasone - Colosseo", lat: 41.8902, lng: 12.4922 },
  { nome: "Nasone - Piazza Barberini", lat: 41.9032, lng: 12.4882 },
  { nome: "Nasone - Villa Borghese", lat: 41.9139, lng: 12.4924 },
  { nome: "Nasone - Circo Massimo", lat: 41.8858, lng: 12.4864 },
  { nome: "Nasone - Piazza San Pietro", lat: 41.9029, lng: 12.4534 }
];

let visitati = 0;

// Transição da intro para o mapa
document.getElementById("enterButton").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mapContainer").classList.remove("hidden");
  initMap();
});

function initMap() {
  const map = L.map('map').setView([41.9028, 12.4964], 13); // Roma

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  nasoni.forEach((nasone) => {
    const marker = L.marker([nasone.lat, nasone.lng], { icon: blueIcon() }).addTo(map);
    marker.bindPopup(`<b>${nasone.nome}</b><br>Clicca per segnarlo come visitato 💧`);

    marker.on('click', () => {
      const currentIcon = marker.options.icon.options.iconUrl;
      if (currentIcon === blueIcon().options.iconUrl) {
        marker.setIcon(goldIcon());
        visitati++;
      } else {
        marker.setIcon(blueIcon());
        visitati--;
      }
      document.getElementById("counter").innerText = `Nasoni visitati: ${visitati}`;
    });
  });
}

// Ícones personalizados
function blueIcon() {
  return new L.Icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
}

function goldIcon() {
  return new L.Icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
}