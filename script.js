document.getElementById("absenForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    nama: form.nama.value,
    aksi: form.aksi.value,
    waktu: new Date().toISOString()
  };

  const res = await fetch("https://script.google.com/macros/s/AKfycbwV8MeKtCRaAhqVMFlHwKprv7gkw0aa1aY9ujjydDTNv4yC0TW1yMBjn6QKctShoeGU/exec", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const hasil = await res.text();
  document.getElementById("respon").textContent = hasil;
});
