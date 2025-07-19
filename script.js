document.getElementById('keramicka-farovi').addEventListener('change', function () {
  document.getElementById('farovi-cijena').textContent = this.checked ? '50 KM' : '40 KM';
});
document.getElementById('keramicka-normal').addEventListener('change', function () {
  document.getElementById('normal-cijena').textContent = this.checked ? '100 KM' : '80 KM';
});
document.getElementById('keramicka-full').addEventListener('change', function () {
  document.getElementById('full-cijena').textContent = this.checked ? '200 KM' : '180 KM';
});
document.getElementById('rezervisiBtn').addEventListener('click', function () {
  document.getElementById('rezervacija-popup').style.display = 'flex';
});
