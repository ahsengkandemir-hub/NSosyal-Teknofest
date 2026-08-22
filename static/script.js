const basvurutalepleriBtn = document.getElementById("basvurutalepleriBtn");

basvurutalepleriBtn.addEventListener("click", function(){
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const kullanicilar = Object.values(data);

      kullanicilar.forEach(function(kullanici) {
        const kart = document.createElement("div");
        kart.setAttribute("data-alan", kullanici.field);
        kart.innerHTML = `
       <div class="ticekt-canvas">
    <div classs="ticket-wrapper">
     <div class="ticket">
      <div class="t-main">
       <div class="t-content">

        <div class="t-title">
         Başvuru Talebi
        </div>

        <div class="t-subtitle">
         Aday:
        </div>
        
        <div class="t-details">
        
         <div class="t-detail-item>
          <span class="t-label">Name</span>
          <span class="t-value">${kullanici.name}</span>
         </div>

         <div class="t-detail-item">
          <span class="t-label">Yaş</span>
          <span class="t-value">${kullanici.age]</span>
         </div>

         <div class="t-detail-item">
           <span class="t-label">Şehir</span>
           <span class="t-value"${kullanici.city</span>
         </div>

         <div class="t-detail-item"
          <span class="t-label">Eğitim</span>
          <span class="t-value"${kullanici.education_level}</span>
         </div>

const form=
getElementById("index form"):
         
          
          
