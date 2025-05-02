document.getElementById("absenForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nama: form.nama.value,
    aksi: form.aksi.value,
    waktu: new Date().toISOString()
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzH8O3OsVxT-Xz_NI38tXaUlair2a3ydNezC38Z2UWyWLkSZixPrfrFDv0mGB_evWEa/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const hasil = await res.text();
    document.getElementById("respon").textContent = hasil;
    form.reset();
  } catch (error) {
    document.getElementById("respon").textContent = "Gagal mengirim. Coba lagi.";
    console.error(error);
  }
});
