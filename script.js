document.getElementById("absenForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    nama: form.nama.value,
    aksi: form.aksi.value,
    waktu: new Date().toISOString()
  };

  const res = await fetch("https://script.google.com/macros/s/AKfycbw7mY1UmMP_mYD5_mtlKFuDeGpM9Ofm_IGy1DICMjKsHHyNI5lqHfdLHx9cQJJ_D3ku/exec", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const hasil = await res.text();
  document.getElementById("respon").textContent = hasil;
});
